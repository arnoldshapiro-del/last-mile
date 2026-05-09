const charts = [
  {
    title: "BULL FLAG MEASURED MOVE \u2014 pole length added to breakout",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      // pole start
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      // pole top — 4.4 length
      { o: 104.4, h: 104.5, l: 103.7, c: 103.8 },
      { o: 103.8, h: 103.9, l: 103.3, c: 103.4 },
      { o: 103.4, h: 105, l: 103.35, c: 104.9 }
      // breakout
    ],
    annotations: [
      { type: "level", price: 100, color: "#94a3b8", label: "\u2460 POLE START", dash: true },
      { type: "level", price: 104.4, color: "#94a3b8", label: "\u2461 POLE END = +4.4", dash: true },
      { type: "level", price: 104.9, color: "#22c55e", label: "\u2462 BREAKOUT" },
      { type: "level", price: 109.3, color: "#5eead4", label: "\u2463 TARGET = breakout + 4.4 = 109.3", dash: true }
    ],
    verdict: { label: "POLE PROJECTED", type: "good" },
    caption: "Measure pole start \u2192 pole end = pole length. Project that length UP from the breakout close."
  },
  {
    title: "DOUBLE BOTTOM MEASURED MOVE \u2014 pattern height projected up",
    candles: [
      { o: 105, h: 105.3, l: 104.7, c: 105 },
      { o: 105, h: 105.1, l: 103, c: 103.1 },
      { o: 103.1, h: 103.3, l: 101, c: 101.2 },
      // trough = 101
      { o: 101.2, h: 103, l: 101.15, c: 102.9 },
      { o: 102.9, h: 103, l: 101.2, c: 101.3 },
      { o: 101.3, h: 103, l: 101.25, c: 102.95 },
      { o: 102.95, h: 104.5, l: 102.9, c: 104.4 }
      // breakout = 104.4 — neckline = 103
    ],
    annotations: [
      { type: "level", price: 101, color: "#94a3b8", label: "TROUGH", dash: true },
      { type: "level", price: 103, color: "#fbbf24", label: "NECKLINE = 103" },
      { type: "level", price: 105, color: "#5eead4", label: "TARGET = neckline + 2.0 height", dash: true }
    ],
    verdict: { label: "PATTERN HEIGHT PROJECTED", type: "good" },
    caption: "Pattern height = neckline - trough = 2.0pt. Project UP from neckline. Most patterns extend further."
  },
  {
    title: "ORB MEASURED MOVE \u2014 OR width projected from break",
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100.4 },
      { o: 100.4, h: 100.7, l: 99.8, c: 100 },
      { o: 100, h: 100.5, l: 99.6, c: 100.3 },
      { o: 100.3, h: 100.7, l: 99.7, c: 99.9 },
      { o: 99.9, h: 100.5, l: 99.65, c: 100.4 },
      { o: 100.4, h: 100.6, l: 99.85, c: 100 },
      // OR done
      { o: 100, h: 101.5, l: 99.95, c: 101.4 }
      // breakout
    ],
    annotations: [
      { type: "level", price: 100.7, color: "#94a3b8", label: "OR HIGH", dash: true },
      { type: "level", price: 99.5, color: "#94a3b8", label: "OR LOW = width 1.2", dash: true },
      { type: "level", price: 101.4, color: "#22c55e", label: "BREAKOUT" },
      { type: "level", price: 102.6, color: "#5eead4", label: "TARGET = break + 1.2 (1x OR)", dash: true }
    ],
    verdict: { label: "OR WIDTH PROJECTED", type: "good" },
    caption: "OR width is the ruler. Project that width UP from the breakout. Some traders use 2x OR width for runners."
  },
  {
    title: "FIBONACCI EXTENSIONS \u2014 additional targets at 1.272 / 1.618",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.5, l: 103.7, c: 103.8 },
      { o: 103.8, h: 103.9, l: 103.3, c: 103.4 },
      { o: 103.4, h: 105, l: 103.35, c: 104.9 }
    ],
    annotations: [
      { type: "level", price: 109.3, color: "#5eead4", label: "1.0x \u2014 primary target", dash: true },
      { type: "level", price: 110.5, color: "#a78bfa", label: "1.272x \u2014 first extension", dash: true },
      { type: "level", price: 112, color: "#fbbf24", label: "1.618x \u2014 golden extension", dash: true }
    ],
    verdict: { label: "STAGGERED PROFIT-TAKING", type: "info" },
    caption: "Take partial at 1.0x, more at 1.272x, runner at 1.618x. Trail the runner with a structure-based stop."
  },
  {
    title: "TARGETS BEFORE STOPS \u2014 math has to work pre-trade",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.5, l: 103.7, c: 103.8 },
      { o: 103.8, h: 103.9, l: 103.3, c: 103.4 },
      { o: 103.4, h: 105, l: 103.35, c: 104.9 }
    ],
    annotations: [
      { type: "level", price: 104.9, color: "#22c55e", label: "ENTRY 104.9" },
      { type: "level", price: 103.1, color: "#ef4444", label: "STOP 103.1 \u2014 risk 1.8", dash: true },
      { type: "level", price: 109.3, color: "#5eead4", label: "TARGET 109.3 \u2014 reward 4.4", dash: true }
    ],
    verdict: { label: "R:R 2.4:1 \u2014 TAKE IT", type: "good" },
    caption: "Compute R:R BEFORE clicking. (target \u2212 entry) \xF7 (entry \u2212 stop). Below 1.5:1 = pass. Below 2:1 = take partial only."
  },
  {
    title: "WHEN TO ABANDON THE TARGET \u2014 momentum dying mid-move",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.5, l: 103.7, c: 103.8 },
      { o: 103.8, h: 103.9, l: 103.3, c: 103.4 },
      { o: 103.4, h: 105, l: 103.35, c: 104.9 },
      // entry
      { o: 104.9, h: 106, l: 104.8, c: 105.9 },
      { o: 105.9, h: 106.5, l: 105.5, c: 105.6 },
      // momentum dies
      { o: 105.6, h: 105.7, l: 105, c: 105.1 },
      // small bars only
      { o: 105.1, h: 105.4, l: 104.8, c: 105 }
    ],
    annotations: [
      { type: "level", price: 109.3, color: "#94a3b8", label: "TARGET \u2014 far away", dash: true },
      { type: "badge", at: { i: 9, price: 105.7 }, text: "BAR-SHRINK", color: "#fbbf24" },
      { type: "arrow", at: { i: 10, price: 105 }, direction: "up", color: "#fbbf24", label: "EXIT EARLY" }
    ],
    verdict: { label: "ABANDON IF BARS SHRINK", type: "warn" },
    caption: "When bar size and volume both shrink mid-move, the target is no longer realistic. Bank what you have, do not wait."
  }
];
export {
  charts
};
