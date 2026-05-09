var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { useEffect, useState } from "react";
import {
  Play,
  Pause,
  Square,
  X,
  ChevronDown,
  ChevronUp,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Volume2,
  Headphones
} from "lucide-react";
import { getNarrator, VOICE_PROFILES } from "../lib/narrator";
function NarratorBar() {
  const narrator = getNarrator();
  const [script, setScript] = useState(null);
  const [state, setState] = useState("idle");
  const [itemIdx, setItemIdx] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [sentenceIdx, setSentenceIdx] = useState(0);
  const [totalSentences, setTotalSentences] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [voiceProfile, setVoiceProfile] = useState(narrator.getSettings().voiceProfile);
  const [rate, setRate] = useState(narrator.getSettings().rate);
  const [voicesAvail, setVoicesAvail] = useState(0);
  useEffect(() => {
    const unsub = narrator.subscribe({
      onScriptChange: /* @__PURE__ */ __name((s) => setScript(s), "onScriptChange"),
      onStateChange: /* @__PURE__ */ __name((s) => setState(s), "onStateChange"),
      onItemChange: /* @__PURE__ */ __name((idx, total) => {
        setItemIdx(idx);
        setTotalItems(total);
      }, "onItemChange"),
      onProgress: /* @__PURE__ */ __name((i, t) => {
        setSentenceIdx(i);
        setTotalSentences(t);
      }, "onProgress"),
      onSettingsChange: /* @__PURE__ */ __name(() => {
        const settings = narrator.getSettings();
        setVoiceProfile(settings.voiceProfile);
        setRate(settings.rate);
        setVoicesAvail(narrator.getVoices().length);
      }, "onSettingsChange")
    });
    setScript(narrator.getScript());
    setState(narrator.getState());
    setVoicesAvail(narrator.getVoices().length);
    return unsub;
  }, [narrator]);
  if (!script) return null;
  const isPlaying = state === "playing";
  const isPaused = state === "paused";
  const currentItem = script.items[itemIdx];
  const sectionLabel = currentItem?.section || "";
  const progressPct = totalSentences > 0 ? Math.round(sentenceIdx / totalSentences * 100) : 0;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "narrator-bar",
      style: {
        position: "fixed",
        bottom: 16,
        right: 16,
        zIndex: 50,
        background: "linear-gradient(180deg, rgba(15, 23, 42, 0.96) 0%, rgba(7, 12, 24, 0.96) 100%)",
        border: "1px solid rgba(94, 234, 212, 0.30)",
        borderRadius: 16,
        boxShadow: "0 16px 48px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(20, 184, 166, 0.08)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        color: "#e2e8f0",
        fontFamily: "Inter, system-ui, sans-serif",
        width: expanded ? 380 : "auto",
        maxWidth: "calc(100vw - 32px)"
      }
    },
    /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 12px", display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => isPlaying ? narrator.pause() : narrator.play(),
        "aria-label": isPlaying ? "Pause" : "Play",
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #14b8a6, #0d9488)",
          color: "#070c18",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(20, 184, 166, 0.40)"
        }
      },
      isPlaying ? /* @__PURE__ */ React.createElement(Pause, { className: "w-4 h-4" }) : /* @__PURE__ */ React.createElement(Play, { className: "w-4 h-4" })
    ), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0, fontSize: 12, lineHeight: 1.3 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 2 } }, /* @__PURE__ */ React.createElement(Headphones, { className: "w-3 h-3", style: { color: "#5eead4", flexShrink: 0 } }), /* @__PURE__ */ React.createElement("span", { style: { color: "#5eead4", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "Oxanium, system-ui, sans-serif" } }, isPlaying ? "Reading" : isPaused ? "Paused" : "Ready", totalItems > 0 && ` \xB7 ${itemIdx + 1}/${totalItems}`)), /* @__PURE__ */ React.createElement("div", { style: { color: "#f5f9ff", fontWeight: 600, fontSize: 13, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: expanded ? 280 : 200 } }, script.title)), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => setExpanded((e) => !e),
        "aria-label": expanded ? "Collapse" : "Expand",
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 28,
          height: 28,
          borderRadius: 8,
          background: "rgba(255, 255, 255, 0.04)",
          color: "#94a3b8",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          cursor: "pointer"
        }
      },
      expanded ? /* @__PURE__ */ React.createElement(ChevronDown, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ React.createElement(ChevronUp, { className: "w-3.5 h-3.5" })
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => narrator.close(),
        "aria-label": "Close",
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 28,
          height: 28,
          borderRadius: 8,
          background: "rgba(239, 68, 68, 0.10)",
          color: "#fca5a5",
          border: "1px solid rgba(239, 68, 68, 0.30)",
          cursor: "pointer"
        }
      },
      /* @__PURE__ */ React.createElement(X, { className: "w-3.5 h-3.5" })
    )),
    totalSentences > 0 && /* @__PURE__ */ React.createElement("div", { style: { padding: "0 12px 8px", position: "relative" } }, /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          height: 4,
          borderRadius: 2,
          background: "rgba(255, 255, 255, 0.06)",
          overflow: "hidden",
          cursor: "pointer"
        },
        onClick: (e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const pct = (e.clientX - rect.left) / rect.width;
          const target = Math.round(pct * totalSentences);
          narrator.seekToSentence(target);
        },
        role: "slider",
        "aria-label": "Reading progress \u2014 click to seek",
        "aria-valuemin": 0,
        "aria-valuemax": totalSentences,
        "aria-valuenow": sentenceIdx
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            height: "100%",
            width: `${progressPct}%`,
            background: "linear-gradient(90deg, #14b8a6, #5eead4)",
            transition: "width 200ms linear"
          }
        }
      )
    )),
    expanded && /* @__PURE__ */ React.createElement("div", { style: { padding: "0 12px 12px", display: "flex", flexDirection: "column", gap: 12, borderTop: "1px solid rgba(255, 255, 255, 0.06)" } }, /* @__PURE__ */ React.createElement("div", { style: { paddingTop: 10, fontSize: 11, color: "#94a3b8", display: "flex", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("span", { style: { textTransform: "uppercase", letterSpacing: "0.12em" } }, sectionLabel || "reading"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "Space Mono, ui-monospace, monospace" } }, "sentence ", sentenceIdx + 1, "/", totalSentences)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 4 } }, /* @__PURE__ */ React.createElement(TButton, { onClick: () => narrator.prevItem(), title: "Previous item" }, /* @__PURE__ */ React.createElement(SkipBack, { className: "w-4 h-4" })), /* @__PURE__ */ React.createElement(TButton, { onClick: () => narrator.seekBySeconds(-30), title: "Back 30 seconds" }, /* @__PURE__ */ React.createElement(Rewind, { className: "w-4 h-4" }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, marginLeft: 2 } }, "30")), /* @__PURE__ */ React.createElement(TButton, { onClick: () => narrator.seekBySeconds(-15), title: "Back 15 seconds" }, /* @__PURE__ */ React.createElement(Rewind, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, marginLeft: 2 } }, "15")), /* @__PURE__ */ React.createElement(TButton, { onClick: () => isPlaying ? narrator.pause() : narrator.play(), title: isPlaying ? "Pause" : "Play", primary: true }, isPlaying ? /* @__PURE__ */ React.createElement(Pause, { className: "w-4 h-4" }) : /* @__PURE__ */ React.createElement(Play, { className: "w-4 h-4" })), /* @__PURE__ */ React.createElement(TButton, { onClick: () => narrator.seekBySeconds(15), title: "Forward 15 seconds" }, /* @__PURE__ */ React.createElement(FastForward, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, marginLeft: 2 } }, "15")), /* @__PURE__ */ React.createElement(TButton, { onClick: () => narrator.seekBySeconds(30), title: "Forward 30 seconds" }, /* @__PURE__ */ React.createElement(FastForward, { className: "w-4 h-4" }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, marginLeft: 2 } }, "30")), /* @__PURE__ */ React.createElement(TButton, { onClick: () => narrator.nextItem(), title: "Next item" }, /* @__PURE__ */ React.createElement(SkipForward, { className: "w-4 h-4" })), /* @__PURE__ */ React.createElement(TButton, { onClick: () => narrator.stop(), title: "Stop" }, /* @__PURE__ */ React.createElement(Square, { className: "w-3.5 h-3.5" }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { fontSize: 10, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 4, display: "block", fontFamily: "Oxanium, system-ui, sans-serif" } }, "Voice ", voicesAvail === 0 && "(loading...)"), /* @__PURE__ */ React.createElement(
      "select",
      {
        value: voiceProfile,
        onChange: (e) => narrator.setVoiceProfile(e.target.value),
        style: {
          width: "100%",
          background: "rgba(255, 255, 255, 0.04)",
          border: "1px solid rgba(255, 255, 255, 0.10)",
          borderRadius: 8,
          color: "#e2e8f0",
          padding: "6px 8px",
          fontSize: 12,
          fontFamily: "inherit"
        }
      },
      VOICE_PROFILES.map((p) => /* @__PURE__ */ React.createElement("option", { key: p.id, value: p.id }, p.label))
    ), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 10, color: "#64748b", margin: "4px 0 0 0", lineHeight: 1.3 } }, VOICE_PROFILES.find((p) => p.id === voiceProfile)?.blurb)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: { fontSize: 10, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 4, display: "flex", justifyContent: "space-between", fontFamily: "Oxanium, system-ui, sans-serif" } }, /* @__PURE__ */ React.createElement("span", null, "Speed"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "Space Mono, ui-monospace, monospace" } }, rate.toFixed(2), "\xD7")), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "range",
        min: 0.75,
        max: 1.5,
        step: 0.05,
        value: rate,
        onChange: (e) => narrator.setRate(parseFloat(e.target.value)),
        style: { width: "100%", accentColor: "#14b8a6" }
      }
    )), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#64748b", display: "flex", alignItems: "center", gap: 4 } }, /* @__PURE__ */ React.createElement(Volume2, { className: "w-3 h-3" }), /* @__PURE__ */ React.createElement("span", null, "Lock-screen / headset controls active when playing.")))
  );
}
__name(NarratorBar, "NarratorBar");
function TButton(props) {
  const { onClick, title, children, primary } = props;
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick,
      title,
      "aria-label": title,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 32,
        minWidth: 32,
        padding: "0 6px",
        borderRadius: 8,
        background: primary ? "linear-gradient(135deg, #14b8a6, #0d9488)" : "rgba(255, 255, 255, 0.04)",
        color: primary ? "#070c18" : "#cbd5e1",
        border: primary ? "none" : "1px solid rgba(255, 255, 255, 0.08)",
        cursor: "pointer",
        fontFamily: "Oxanium, system-ui, sans-serif"
      }
    },
    children
  );
}
__name(TButton, "TButton");
export {
  NarratorBar
};
