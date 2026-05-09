const charts = [
  {
    title: "CONSOLIDATION BREAKOUT \u2014 clean range break",
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100.4 },
      { o: 100.4, h: 100.7, l: 99.7, c: 99.8 },
      { o: 99.8, h: 100.5, l: 99.5, c: 100.3 },
      { o: 100.3, h: 100.6, l: 99.7, c: 99.9 },
      { o: 99.9, h: 100.4, l: 99.6, c: 100.2 },
      { o: 100.2, h: 100.5, l: 99.7, c: 99.95 },
      { o: 99.95, h: 100.6, l: 99.6, c: 100.4 },
      { o: 100.4, h: 102, l: 100.35, c: 101.95 },
      // BREAKOUT
      { o: 101.95, h: 102.8, l: 101.85, c: 102.7 }
    ],
    annotations: [
      { type: "level", price: 100.7, color: "#fbbf24", label: "RANGE TOP \u2014 broken" },
      { type: "level", price: 99.5, color: "#fbbf24", label: "RANGE BOTTOM" },
      { type: "arrow", at: { i: 7, price: 101.95 }, direction: "up", color: "#22c55e", label: "ENTRY" }
    ],
    verdict: { label: "CLEAN RANGE BREAK", type: "good" },
    caption: "Sideways range, then a decisive close above the ceiling. Volume on the breakout bar must exceed the recent average."
  },
  {
    title: "FALSE BREAKOUT \u2014 close back inside on next bar",
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100.4 },
      { o: 100.4, h: 100.7, l: 99.8, c: 99.9 },
      { o: 99.9, h: 100.5, l: 99.6, c: 100.3 },
      { o: 100.3, h: 100.6, l: 99.7, c: 100 },
      { o: 100, h: 100.4, l: 99.6, c: 100.2 },
      { o: 100.2, h: 100.5, l: 99.85, c: 100 },
      { o: 100, h: 100.4, l: 99.7, c: 100.3 },
      { o: 100.3, h: 101.4, l: 100.25, c: 101.3 },
      // breaks above 100.7
      { o: 101.3, h: 101.4, l: 100, c: 100.1 },
      // CLOSE BACK INSIDE = false break
      { o: 100.1, h: 100.3, l: 99.4, c: 99.5 }
    ],
    annotations: [
      { type: "level", price: 100.7, color: "#fbbf24", label: "RANGE TOP" },
      { type: "arrow", at: { i: 7, price: 101.3 }, direction: "up", color: "#fbbf24", label: "ENTRY" },
      { type: "badge", at: { i: 8, price: 100.1 }, text: "CLOSE BACK INSIDE", color: "#ef4444" }
    ],
    verdict: { label: "FALSE BREAK \u2014 out next bar", type: "bad" },
    caption: "A close back inside the range on the next bar invalidates the breakout. Exit on that close \u2014 do not wait for the stop."
  },
  {
    title: "VOLUME-CONFIRMED BREAKOUT \u2014 committed money",
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100.4 },
      { o: 100.4, h: 100.7, l: 99.8, c: 100 },
      { o: 100, h: 100.5, l: 99.6, c: 100.3 },
      { o: 100.3, h: 100.6, l: 99.7, c: 100 },
      { o: 100, h: 100.4, l: 99.65, c: 100.2 },
      { o: 100.2, h: 100.5, l: 99.85, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      // breakout vol HIGH
      { o: 101.95, h: 103, l: 101.85, c: 102.9 }
    ],
    annotations: [
      { type: "volume", bars: [50, 60, 55, 50, 45, 40, 200, 150] },
      { type: "badge", at: { i: 6, price: 102 }, text: "4x AVG VOL", color: "#22c55e" }
    ],
    verdict: { label: "VOLUME CONFIRMS", type: "good" },
    caption: "Recent 5-bar avg ~50. Breakout bar 200 = 4x. Real participants showed up. Take the trade."
  },
  {
    title: "NO-VOLUME BREAKOUT \u2014 algos painting, fades fast",
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100.4 },
      { o: 100.4, h: 100.7, l: 99.8, c: 100 },
      { o: 100, h: 100.5, l: 99.6, c: 100.3 },
      { o: 100.3, h: 100.6, l: 99.7, c: 100 },
      { o: 100, h: 100.4, l: 99.65, c: 100.2 },
      { o: 100.2, h: 100.5, l: 99.85, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      // breakout LOW vol
      { o: 101.95, h: 102, l: 100.5, c: 100.6 }
      // fade
    ],
    annotations: [
      { type: "volume", bars: [60, 70, 65, 60, 55, 50, 45, 60] },
      { type: "badge", at: { i: 6, price: 102 }, text: "VOL BELOW AVG", color: "#ef4444" }
    ],
    verdict: { label: "NO COMMITMENT \u2014 FAKE", type: "bad" },
    caption: "Breakout bar volume below the 5-bar average. No buyers behind the move. Algos painted price; fades within 2-3 bars."
  },
  {
    title: "BREAKOUT ENTRY OPTIONS \u2014 close vs retest",
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100.4 },
      { o: 100.4, h: 100.7, l: 99.8, c: 100 },
      { o: 100, h: 100.5, l: 99.6, c: 100.3 },
      { o: 100.3, h: 100.6, l: 99.7, c: 100 },
      { o: 100, h: 100.4, l: 99.65, c: 100.2 },
      { o: 100.2, h: 100.5, l: 99.85, c: 100 },
      { o: 100, h: 101.5, l: 99.95, c: 101.4 },
      // ① BREAKOUT
      { o: 101.4, h: 101.6, l: 100.6, c: 100.7 },
      // pullback to ceiling
      { o: 100.7, h: 100.9, l: 100.5, c: 100.6 },
      // ② RETEST
      { o: 100.6, h: 101.7, l: 100.55, c: 101.65 },
      { o: 101.65, h: 102.8, l: 101.6, c: 102.7 }
    ],
    annotations: [
      { type: "level", price: 100.7, color: "#fbbf24", label: "OLD CEILING" },
      { type: "arrow", at: { i: 6, price: 101.4 }, direction: "up", color: "#22c55e", label: "\u2460 BREAKOUT" },
      { type: "arrow", at: { i: 8, price: 100.6 }, direction: "up", color: "#5eead4", label: "\u2461 RETEST" }
    ],
    verdict: { label: "TWO VALID ENTRIES", type: "good" },
    caption: "Either entry works. Breakout entry has worse fill but doesn't miss runners. Retest entry has better R:R but misses some moves."
  },
  {
    title: "BREAKOUT INTO RESISTANCE \u2014 bad math",
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100.4 },
      { o: 100.4, h: 100.7, l: 99.8, c: 100 },
      { o: 100, h: 100.5, l: 99.6, c: 100.3 },
      { o: 100.3, h: 100.6, l: 99.7, c: 100 },
      { o: 100, h: 100.4, l: 99.65, c: 100.2 },
      { o: 100.2, h: 100.5, l: 99.85, c: 100 },
      { o: 100, h: 101.4, l: 99.95, c: 101.3 },
      // breakout
      { o: 101.3, h: 101.5, l: 100.7, c: 100.8 },
      // hits OBv at 101.5, rolls
      { o: 100.8, h: 101, l: 100, c: 100.1 }
    ],
    annotations: [
      { type: "level", price: 100.7, color: "#fbbf24", label: "BREAKOUT LEVEL" },
      { type: "level", price: 101.5, color: "#ef4444", label: "OVERHEAD RESISTANCE \u2014 too close" },
      { type: "badge", at: { i: 6, price: 101.3 }, text: "NO ROOM", color: "#ef4444" }
    ],
    verdict: { label: "TARGET TOO CLOSE \u2014 PASS", type: "warn" },
    caption: "Breakouts need room to run. If known resistance sits within 1-2 points, R:R is dead before the trade starts."
  }
];
export {
  charts
};
