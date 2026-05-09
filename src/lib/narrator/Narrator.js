var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { ensureVoicesLoaded, pickVoiceForProfile, DEFAULT_PROFILE_ID } from "./voices";
import { splitIntoSentences, estimateDurationMs } from "./sentenceSplitter";
const STORAGE_KEY = "unita_narrator_settings";
const SILENT_WAV = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAAAAA==";
function loadSettings() {
  if (typeof window === "undefined") return { voiceProfile: DEFAULT_PROFILE_ID, rate: 1 };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { voiceProfile: DEFAULT_PROFILE_ID, rate: 1 };
    const obj = JSON.parse(raw);
    return {
      voiceProfile: typeof obj.voiceProfile === "string" ? obj.voiceProfile : DEFAULT_PROFILE_ID,
      rate: typeof obj.rate === "number" ? Math.min(2, Math.max(0.5, obj.rate)) : 1
    };
  } catch {
    return { voiceProfile: DEFAULT_PROFILE_ID, rate: 1 };
  }
}
__name(loadSettings, "loadSettings");
function saveSettings(s) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {
  }
}
__name(saveSettings, "saveSettings");
class Narrator {
  static {
    __name(this, "Narrator");
  }
  state = "idle";
  settings = loadSettings();
  voices = [];
  currentVoice = null;
  script = null;
  queue = [];
  cursor = 0;
  // sentence index within `queue`
  listeners = /* @__PURE__ */ new Set();
  // GC guard — module-level reference prevents the utterance being garbage-collected
  // before its onend/onerror events fire (a known Chrome bug). The reference itself
  // is the entire purpose of this field; we read it via getCurrentUtteranceForGc().
  _currentUtterance = null;
  /** Internal — returns the current utterance reference. Used to satisfy lint and
   *  guarantee the utterance stays in V8's reachable graph until onend fires. */
  getCurrentUtteranceForGc() {
    return this._currentUtterance;
  }
  speakStartedAt = 0;
  gapTimer = null;
  // Chrome 14s keep-alive
  keepAliveTimer = null;
  // Watchdog
  lastBoundaryAt = 0;
  watchdogTimer = null;
  // mediaSession silent loop
  silentAudio = null;
  // Adaptive WPS for ETAs (EMA-smoothed)
  wpsSmoothed = 2.6;
  // Visibility tracking
  wasPlayingBeforeHide = false;
  // Initial init promise
  readyPromise = null;
  constructor() {
    if (typeof window === "undefined") return;
    this.readyPromise = this.initialize();
  }
  async initialize() {
    this.voices = await ensureVoicesLoaded();
    this.currentVoice = pickVoiceForProfile(this.settings.voiceProfile, this.voices);
    if ("speechSynthesis" in window) {
      window.speechSynthesis.addEventListener("voiceschanged", () => {
        this.voices = window.speechSynthesis.getVoices();
        this.currentVoice = pickVoiceForProfile(this.settings.voiceProfile, this.voices);
        this.notifySettings();
      });
    }
    document.addEventListener("visibilitychange", () => this.onVisibilityChange());
    this.setupMediaSession();
  }
  awaitReady() {
    return this.readyPromise || Promise.resolve();
  }
  // ─── Public API ─────────────────────────────────────────────────────────
  setScript(script) {
    this.cancel();
    this.script = script;
    this.queue = script ? this.flattenScript(script) : [];
    this.cursor = 0;
    this.notifyAll();
    this.notifyScript();
    if (script) this.updateMediaSessionMetadata();
  }
  getScript() {
    return this.script;
  }
  getState() {
    return this.state;
  }
  getCursor() {
    return this.cursor;
  }
  getTotalSentences() {
    return this.queue.length;
  }
  getCurrentItemIdx() {
    return this.queue[this.cursor]?.itemIdx ?? 0;
  }
  getCurrentItem() {
    if (!this.script) return null;
    const idx = this.queue[this.cursor]?.itemIdx ?? 0;
    return this.script.items[idx] || null;
  }
  getSettings() {
    return { ...this.settings };
  }
  getVoices() {
    return this.voices;
  }
  getCurrentVoice() {
    return this.currentVoice;
  }
  setVoiceProfile(profileId) {
    this.settings.voiceProfile = profileId;
    this.currentVoice = pickVoiceForProfile(profileId, this.voices);
    saveSettings(this.settings);
    this.notifySettings();
    if (this.state === "playing") {
      this.cancelInternal();
      this.scheduleSpeak();
    }
  }
  setRate(rate) {
    this.settings.rate = Math.min(2, Math.max(0.5, rate));
    saveSettings(this.settings);
    this.notifySettings();
    if (this.state === "playing") {
      this.cancelInternal();
      this.scheduleSpeak();
    }
  }
  async play() {
    if (!this.queue.length) return;
    await this.awaitReady();
    if (this.state === "paused" && window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      this.startKeepAlive();
      this.startSilentAudio();
      this.setState("playing");
      this.setMSState("playing");
      return;
    }
    this.setState("playing");
    this.startSilentAudio();
    this.scheduleSpeak();
  }
  pause() {
    if (this.state !== "playing") return;
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
    }
    this.stopKeepAlive();
    this.clearGapTimer();
    this.stopSilentAudio();
    this.setState("paused");
    this.setMSState("paused");
  }
  stop() {
    this.cancel();
    this.cursor = 0;
    this.notifyAll();
  }
  /** Close — stop and clear script. */
  close() {
    this.cancel();
    this.script = null;
    this.queue = [];
    this.cursor = 0;
    this.notifyAll();
    this.notifyScript();
  }
  /** Jump to a specific sentence index in the queue. */
  seekToSentence(idx) {
    this.cancelInternal();
    this.cursor = Math.max(0, Math.min(this.queue.length - 1, idx));
    if (this.state === "playing") this.scheduleSpeak();
    this.notifyAll();
  }
  /** Seek by N seconds (positive or negative). */
  seekBySeconds(deltaSec) {
    let target = -this.elapsedToCursor() / 1e3 + this.elapsedToCursor() / 1e3 + deltaSec;
    let absSec = 0;
    for (let i = 0; i < this.cursor; i++) {
      const e = this.queue[i];
      absSec += (e.actualDurationMs ?? e.estDurationMs) / 1e3 + e.gapAfterMs / 1e3;
    }
    if (this.state === "playing") {
      absSec += (performance.now() - this.speakStartedAt) / 1e3;
    }
    target = Math.max(0, absSec + deltaSec);
    let walked = 0;
    let newCursor = 0;
    for (let i = 0; i < this.queue.length; i++) {
      const e = this.queue[i];
      const dur = (e.actualDurationMs ?? e.estDurationMs) / 1e3 + e.gapAfterMs / 1e3;
      if (walked + dur > target) {
        newCursor = i;
        break;
      }
      walked += dur;
      newCursor = Math.min(i + 1, this.queue.length - 1);
    }
    this.seekToSentence(newCursor);
  }
  /** Skip to next *item* (group of sentences, e.g., next teaching unit). */
  nextItem() {
    if (!this.script) return;
    const currItemIdx = this.queue[this.cursor]?.itemIdx ?? 0;
    const targetItemIdx = Math.min(this.script.items.length - 1, currItemIdx + 1);
    const targetCursor = this.queue.findIndex((q) => q.itemIdx === targetItemIdx);
    if (targetCursor !== -1) this.seekToSentence(targetCursor);
  }
  /** Skip back to previous item. If we're more than 2s into the current item, just restart it. */
  prevItem() {
    if (!this.script) return;
    const currItemIdx = this.queue[this.cursor]?.itemIdx ?? 0;
    const itemStart = this.queue.findIndex((q) => q.itemIdx === currItemIdx);
    const intoItemSec = (performance.now() - this.speakStartedAt) / 1e3;
    const justStarted = this.cursor === itemStart && intoItemSec < 2;
    const targetItemIdx = justStarted ? Math.max(0, currItemIdx - 1) : currItemIdx;
    const targetCursor = this.queue.findIndex((q) => q.itemIdx === targetItemIdx);
    if (targetCursor !== -1) this.seekToSentence(targetCursor);
  }
  // ─── Listener API ───────────────────────────────────────────────────────
  subscribe(l) {
    this.listeners.add(l);
    return () => this.listeners.delete(l);
  }
  // ─── Internals ──────────────────────────────────────────────────────────
  flattenScript(script) {
    const queue = [];
    script.items.forEach((item, itemIdx) => {
      const sentences = splitIntoSentences(item.text);
      sentences.forEach((s, chunkIdx) => {
        const isLastChunk = chunkIdx === sentences.length - 1;
        queue.push({
          itemIdx,
          chunkIdx,
          text: s,
          gapAfterMs: isLastChunk ? item.gapAfterMs || 0 : 0,
          pitch: item.pitch ?? (item.emphasize ? 1.05 : 1),
          rate: item.rate ?? null,
          emphasize: !!item.emphasize,
          estDurationMs: estimateDurationMs(s, this.settings.rate, this.wpsSmoothed),
          section: item.section
        });
      });
    });
    return queue;
  }
  scheduleSpeak() {
    if (this.cursor >= this.queue.length) {
      this.cancelInternal();
      this.cursor = 0;
      this.setState("idle");
      this.setMSState("none");
      this.stopSilentAudio();
      this.notifyAll();
      return;
    }
    if (this.state !== "playing") return;
    const entry = this.queue[this.cursor];
    setTimeout(() => {
      if (this.state !== "playing") return;
      this.speakEntry(entry);
    }, 50);
  }
  speakEntry(entry) {
    const u = new SpeechSynthesisUtterance(entry.text);
    u.voice = this.currentVoice;
    u.rate = (entry.rate ?? this.settings.rate) * (entry.emphasize ? 0.95 : 1);
    u.pitch = entry.pitch;
    u.volume = 1;
    u.onstart = () => {
      this.speakStartedAt = performance.now();
      this.lastBoundaryAt = this.speakStartedAt;
      this.startKeepAlive();
      this.startWatchdog();
      this.notifyAll();
    };
    u.onboundary = () => {
      this.lastBoundaryAt = performance.now();
    };
    u.onend = () => {
      const actual = performance.now() - this.speakStartedAt;
      entry.actualDurationMs = actual;
      const words = entry.text.trim().split(/\s+/).length || 1;
      const wps = words / (actual / 1e3);
      if (isFinite(wps) && wps > 0.5 && wps < 6) {
        this.wpsSmoothed = 0.7 * this.wpsSmoothed + 0.3 * wps;
      }
      this.stopKeepAlive();
      this.stopWatchdog();
      this._currentUtterance = null;
      const gap = entry.gapAfterMs;
      const advance = /* @__PURE__ */ __name(() => {
        this.cursor++;
        if (this.state === "playing") this.scheduleSpeak();
      }, "advance");
      if (gap > 0) {
        this.gapTimer = window.setTimeout(advance, gap);
      } else {
        advance();
      }
    };
    u.onerror = (e) => {
      const err = e.error;
      if (err === "canceled" || err === "interrupted") return;
      this.stopKeepAlive();
      this.stopWatchdog();
      this._currentUtterance = null;
      this.cursor++;
      if (this.state === "playing") this.scheduleSpeak();
    };
    this._currentUtterance = u;
    try {
      window.speechSynthesis.speak(u);
    } catch (err) {
    }
  }
  cancel() {
    this.cancelInternal();
    this.setState("idle");
    this.setMSState("none");
    this.stopSilentAudio();
  }
  cancelInternal() {
    this.stopKeepAlive();
    this.stopWatchdog();
    this.clearGapTimer();
    this._currentUtterance = null;
    if ("speechSynthesis" in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {
      }
    }
  }
  clearGapTimer() {
    if (this.gapTimer !== null) {
      clearTimeout(this.gapTimer);
      this.gapTimer = null;
    }
  }
  // ─── Chrome 14s keep-alive ──────────────────────────────────────────────
  startKeepAlive() {
    this.stopKeepAlive();
    this.keepAliveTimer = window.setInterval(() => {
      if (!window.speechSynthesis.speaking) {
        this.stopKeepAlive();
        return;
      }
      const ua = navigator.userAgent;
      if (/Android/i.test(ua)) return;
      try {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      } catch {
      }
    }, 14e3);
  }
  stopKeepAlive() {
    if (this.keepAliveTimer !== null) {
      clearInterval(this.keepAliveTimer);
      this.keepAliveTimer = null;
    }
  }
  // ─── Watchdog ───────────────────────────────────────────────────────────
  startWatchdog() {
    this.stopWatchdog();
    this.watchdogTimer = window.setInterval(() => {
      if (!window.speechSynthesis.speaking) return;
      const sinceLastEvent = performance.now() - this.lastBoundaryAt;
      const expected = this.queue[this.cursor]?.estDurationMs ?? 5e3;
      if (sinceLastEvent > expected + 5e3) {
        this.stopWatchdog();
        this.cancelInternal();
        if (this.state === "playing") {
          this.cursor++;
          this.scheduleSpeak();
        }
      }
    }, 2e3);
  }
  stopWatchdog() {
    if (this.watchdogTimer !== null) {
      clearInterval(this.watchdogTimer);
      this.watchdogTimer = null;
    }
  }
  // ─── Visibility ─────────────────────────────────────────────────────────
  onVisibilityChange() {
    if (document.hidden) {
      if (this.state === "playing") {
        this.wasPlayingBeforeHide = true;
        this.pause();
      }
    } else {
      if (this.wasPlayingBeforeHide) {
        this.wasPlayingBeforeHide = false;
        setTimeout(() => {
          if (this.state === "paused") this.play();
        }, 200);
      }
    }
  }
  // ─── mediaSession ───────────────────────────────────────────────────────
  setupMediaSession() {
    if (typeof navigator === "undefined" || !("mediaSession" in navigator)) return;
    const ms = navigator.mediaSession;
    const tryHandler = /* @__PURE__ */ __name((a, h) => {
      try {
        ms.setActionHandler(a, h);
      } catch {
      }
    }, "tryHandler");
    tryHandler("play", () => this.play());
    tryHandler("pause", () => this.pause());
    tryHandler("stop", () => this.stop());
    tryHandler("previoustrack", () => this.prevItem());
    tryHandler("nexttrack", () => this.nextItem());
    try {
      ms.setActionHandler("seekbackward", (d) => this.seekBySeconds(-(d?.seekOffset ?? 30)));
      ms.setActionHandler("seekforward", (d) => this.seekBySeconds(+(d?.seekOffset ?? 30)));
    } catch {
    }
  }
  updateMediaSessionMetadata() {
    if (typeof navigator === "undefined" || !("mediaSession" in navigator) || !this.script) return;
    try {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: this.script.title,
        artist: this.script.subtitle || "Live Trading Mastery",
        album: "TA Bootcamp"
      });
    } catch {
    }
  }
  setMSState(state) {
    if (typeof navigator === "undefined" || !("mediaSession" in navigator)) return;
    try {
      navigator.mediaSession.playbackState = state;
    } catch {
    }
  }
  // ─── Silent keep-alive audio ────────────────────────────────────────────
  startSilentAudio() {
    if (typeof Audio === "undefined") return;
    if (!this.silentAudio) {
      this.silentAudio = new Audio(SILENT_WAV);
      this.silentAudio.loop = true;
      this.silentAudio.volume = 1e-3;
      this.silentAudio.preload = "auto";
    }
    this.silentAudio.play().catch(() => {
    });
  }
  stopSilentAudio() {
    if (this.silentAudio) {
      try {
        this.silentAudio.pause();
      } catch {
      }
    }
  }
  // ─── State + notifications ──────────────────────────────────────────────
  setState(s) {
    if (this.state === s) return;
    this.state = s;
    this.listeners.forEach((l) => l.onStateChange?.(s));
  }
  notifyAll() {
    const total = this.script?.items.length ?? 0;
    const itemIdx = this.queue[this.cursor]?.itemIdx ?? 0;
    const currentItem = this.script?.items[itemIdx] ?? null;
    this.listeners.forEach((l) => {
      l.onItemChange?.(itemIdx, total, currentItem);
      l.onProgress?.(this.cursor, this.queue.length);
    });
  }
  notifyScript() {
    this.listeners.forEach((l) => l.onScriptChange?.(this.script));
  }
  notifySettings() {
    this.listeners.forEach((l) => l.onSettingsChange?.());
  }
  elapsedToCursor() {
    let ms = 0;
    for (let i = 0; i < this.cursor; i++) {
      const e = this.queue[i];
      ms += (e.actualDurationMs ?? e.estDurationMs) + e.gapAfterMs;
    }
    return ms;
  }
}
let _instance = null;
function getNarrator() {
  if (!_instance) _instance = new Narrator();
  return _instance;
}
__name(getNarrator, "getNarrator");
export {
  getNarrator
};
