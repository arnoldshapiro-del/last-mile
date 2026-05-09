const charts = [
  {
    title: "CAPITULATION FLUSH \u2014 4-bar vertical drop, 2-3x volume",
    candles: [
      { o: 105, h: 105.3, l: 104.7, c: 105 },
      { o: 105, h: 105.1, l: 102.5, c: 102.6 },
      { o: 102.6, h: 102.7, l: 100, c: 100.1 },
      { o: 100.1, h: 100.3, l: 97.5, c: 97.6 },
      { o: 97.6, h: 97.7, l: 95, c: 95.1 },
      { o: 95.1, h: 98.5, l: 94.8, c: 98.3 },
      // long-tail hammer
      { o: 98.3, h: 100.5, l: 98.2, c: 100.4 }
    ],
    annotations: [
      { type: "volume", bars: [40, 200, 250, 300, 350, 280, 180] },
      { type: "badge", at: { i: 4, price: 95.1 }, text: "CAPIT", color: "#ef4444" },
      { type: "badge", at: { i: 5, price: 94.8 }, text: "HAMMER", color: "#22c55e" }
    ],
    verdict: { label: "CLASSIC CAPITULATION", type: "good" },
    caption: "4 bars, vertical, expanding volume, climaxing in a long-tail hammer. The hammer prints the floor."
  },
  {
    title: "WAITING FOR CONFIRMATION \u2014 bar +1 must close higher",
    candles: [
      { o: 105, h: 105.3, l: 104.7, c: 105 },
      { o: 105, h: 105.1, l: 102.5, c: 102.6 },
      { o: 102.6, h: 102.7, l: 100, c: 100.1 },
      { o: 100.1, h: 100.3, l: 97.5, c: 97.6 },
      { o: 97.6, h: 97.7, l: 95, c: 95.1 },
      { o: 95.1, h: 98.5, l: 94.8, c: 98.3 },
      { o: 98.3, h: 100.5, l: 98.2, c: 100.4 },
      // confirmation — closed higher than hammer
      { o: 100.4, h: 102, l: 100.3, c: 101.95 }
    ],
    annotations: [
      { type: "badge", at: { i: 5, price: 94.8 }, text: "HAMMER", color: "#fbbf24" },
      { type: "arrow", at: { i: 6, price: 100.4 }, direction: "up", color: "#22c55e", label: "ENTRY ON CONFIRM" },
      { type: "level", price: 94.8, color: "#ef4444", label: "STOP \u2014 under hammer wick", dash: true }
    ],
    verdict: { label: "CONFIRM, THEN ENTER", type: "good" },
    caption: "Never enter on the hammer alone. Wait for the next bar to close above the hammer's close. Stop goes below the wick low."
  },
  {
    title: "TARGET SIZING \u2014 capitulation reversals are often LARGER than the drop",
    candles: [
      { o: 105, h: 105.3, l: 104.7, c: 105 },
      // pre-drop
      { o: 105, h: 105.1, l: 102.5, c: 102.6 },
      { o: 102.6, h: 102.7, l: 100, c: 100.1 },
      { o: 100.1, h: 100.3, l: 97.5, c: 97.6 },
      { o: 97.6, h: 97.7, l: 95, c: 95.1 },
      // bottom = 95
      { o: 95.1, h: 98.5, l: 94.8, c: 98.3 },
      { o: 98.3, h: 100.5, l: 98.2, c: 100.4 }
      // entry = 100.4
    ],
    annotations: [
      { type: "level", price: 105, color: "#94a3b8", label: "PRE-DROP HIGH", dash: true },
      { type: "level", price: 95, color: "#94a3b8", label: "CAPITULATION LOW", dash: true },
      { type: "level", price: 100.4, color: "#22c55e", label: "ENTRY" },
      { type: "level", price: 105, color: "#5eead4", label: "1st TARGET \u2014 return to pre-drop", dash: true },
      { type: "level", price: 110, color: "#a78bfa", label: "2nd TARGET \u2014 2x drop magnitude", dash: true }
    ],
    verdict: { label: "TWO TARGETS \u2014 RUNNER PLAY", type: "info" },
    caption: "Capitulations often produce v-shaped recoveries 1.5-2x the drop. Take partial at pre-drop high, runner to 2x."
  },
  {
    title: "FAILED CAPITULATION READ \u2014 no hammer, just continuation",
    candles: [
      { o: 105, h: 105.3, l: 104.7, c: 105 },
      { o: 105, h: 105.1, l: 102.5, c: 102.6 },
      { o: 102.6, h: 102.7, l: 100, c: 100.1 },
      { o: 100.1, h: 100.3, l: 97.5, c: 97.6 },
      { o: 97.6, h: 97.7, l: 95, c: 95.1 },
      { o: 95.1, h: 95.4, l: 93, c: 93.1 },
      // NO hammer — continues lower
      { o: 93.1, h: 93.3, l: 91.5, c: 91.6 }
    ],
    annotations: [
      { type: "arrow", at: { i: 5, price: 96 }, direction: "up", color: "#ef4444", label: "TOO EARLY" },
      { type: "badge", at: { i: 6, price: 91.6 }, text: "KEEPS DROPPING", color: "#ef4444" }
    ],
    verdict: { label: "NO HAMMER = NO TRADE", type: "bad" },
    caption: "Volume was right, drop was vertical, but the hammer never printed. Without the hammer, there is no floor signal. Pass."
  },
  {
    title: "NEWS CAPITULATION \u2014 mid-day catalyst",
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100.4 },
      { o: 100.4, h: 100.7, l: 99.8, c: 100 },
      { o: 100, h: 100.4, l: 99.6, c: 100.2 },
      // normal trading
      { o: 100.2, h: 100.4, l: 98.8, c: 98.9 },
      // headline hits
      { o: 98.9, h: 99, l: 97.5, c: 97.6 },
      { o: 97.6, h: 97.7, l: 96.4, c: 96.5 },
      { o: 96.5, h: 96.6, l: 95, c: 95.1 },
      { o: 95.1, h: 97, l: 94.9, c: 96.9 }
      // hammer
    ],
    annotations: [
      { type: "volume", bars: [50, 60, 55, 200, 220, 250, 300, 240] },
      { type: "badge", at: { i: 3, price: 99 }, text: "NEWS", color: "#fbbf24" },
      { type: "badge", at: { i: 7, price: 94.9 }, text: "HAMMER", color: "#22c55e" }
    ],
    verdict: { label: "NEWS-DRIVEN \u2014 same shape", type: "good" },
    caption: "Capitulations can happen mid-session on news. Same signature: vertical, expanding volume, climax hammer. Same play."
  },
  {
    title: "RANGE-BREAK CAPITULATION \u2014 false ORB-down trapping shorts",
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100.4 },
      { o: 100.4, h: 100.6, l: 99.8, c: 100 },
      { o: 100, h: 100.5, l: 99.6, c: 100.3 },
      { o: 100.3, h: 100.6, l: 99.7, c: 99.9 },
      // OR established
      { o: 99.9, h: 100, l: 98.5, c: 98.6 },
      // ORB-DOWN entry
      { o: 98.6, h: 98.7, l: 97.5, c: 97.6 },
      { o: 97.6, h: 97.7, l: 96.5, c: 96.6 },
      { o: 96.6, h: 99.5, l: 96.4, c: 99.4 },
      // huge reclaim — capitulation pattern
      { o: 99.4, h: 100.5, l: 99.35, c: 100.4 },
      { o: 100.4, h: 101.5, l: 100.35, c: 101.45 }
    ],
    annotations: [
      { type: "level", price: 99.5, color: "#fbbf24", label: "OR LOW" },
      { type: "arrow", at: { i: 4, price: 98.6 }, direction: "down", color: "#ef4444", label: "TRAP SHORTS" },
      { type: "arrow", at: { i: 7, price: 99.4 }, direction: "up", color: "#22c55e", label: "LONG ENTRY" }
    ],
    verdict: { label: "TRAPPED SHORTS = FUEL", type: "good" },
    caption: "A failed ORB-down with a hammer reclaim is a capitulation pattern. Trapped shorts cover into the rip \u2014 explosive long."
  }
];
export {
  charts
};
