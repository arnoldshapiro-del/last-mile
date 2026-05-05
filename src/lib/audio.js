// Brief acoustic punctuation. No music. No drama.
// Web Audio API only. Each call creates a fresh AudioContext-safe envelope.

let ctx = null;
function getCtx() {
  if (typeof window === 'undefined') return null;
  if (!ctx) {
    try {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      return null;
    }
  }
  if (ctx.state === 'suspended') ctx.resume().catch(() => {});
  return ctx;
}

function tone(freq, duration, { type = 'sine', gain = 0.18, attack = 0.01, decay = 0.6 } = {}) {
  const c = getCtx();
  if (!c) return;
  const t0 = c.currentTime;
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t0);
  g.gain.setValueAtTime(0, t0);
  g.gain.linearRampToValueAtTime(gain, t0 + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + duration + decay);
  osc.connect(g).connect(c.destination);
  osc.start(t0);
  osc.stop(t0 + duration + decay);
}

export const sounds = {
  ritualComplete() {
    tone(523.25, 0.18, { type: 'sine', gain: 0.12 });
    setTimeout(() => tone(783.99, 0.32, { type: 'sine', gain: 0.12 }), 180);
  },
  profitTargetGong() {
    tone(110, 0.6, { type: 'triangle', gain: 0.22, decay: 1.6 });
    setTimeout(() => tone(220, 0.4, { type: 'sine', gain: 0.10, decay: 1.4 }), 60);
  },
  giveBackWarning() {
    tone(440, 0.16, { type: 'square', gain: 0.10 });
    setTimeout(() => tone(587.33, 0.16, { type: 'square', gain: 0.10 }), 200);
    setTimeout(() => tone(739.99, 0.22, { type: 'square', gain: 0.10 }), 400);
  },
  sessionEnd() {
    tone(659.25, 0.22, { type: 'sine', gain: 0.12, decay: 0.9 });
    setTimeout(() => tone(987.77, 0.4, { type: 'sine', gain: 0.10, decay: 1.2 }), 220);
  },
  tick() {
    tone(880, 0.05, { type: 'sine', gain: 0.06, decay: 0.1 });
  },
  correct() {
    tone(880, 0.08, { type: 'sine', gain: 0.10, decay: 0.2 });
    setTimeout(() => tone(1318.51, 0.12, { type: 'sine', gain: 0.10, decay: 0.3 }), 80);
  },
  wrong() {
    tone(220, 0.18, { type: 'sawtooth', gain: 0.08, decay: 0.5 });
  },
  warn() {
    tone(330, 0.12, { type: 'square', gain: 0.10 });
    setTimeout(() => tone(330, 0.12, { type: 'square', gain: 0.10 }), 200);
  }
};
