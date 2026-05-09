const charts = [
  {
    title: "IDEAL ENTRY \u2014 first close beyond trendline",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.6, l: 103.7, c: 103.8 },
      { o: 103.8, h: 104, l: 103.4, c: 103.5 },
      { o: 103.5, h: 103.7, l: 103.1, c: 103.2 },
      { o: 103.2, h: 105, l: 103.15, c: 104.9 },
      // BREAKOUT BAR — ENTRY
      { o: 104.9, h: 106, l: 104.8, c: 105.9 }
    ],
    annotations: [
      { type: "trendline", from: { i: 4, price: 104.6 }, to: { i: 7, price: 104.5 }, color: "#fbbf24", label: "FLAG TOP" },
      { type: "arrow", at: { i: 7, price: 104.9 }, direction: "up", color: "#22c55e", label: "ENTRY ON CLOSE" }
    ],
    verdict: { label: "CLEAN ENTRY \u2014 BAR 8", type: "good" },
    caption: "First close beyond the flag-top trendline. R:R best here: stop is at flag low, target is measured-move from pole."
  },
  {
    title: "WINDOW BAR 8 \u2014 still inside the entry zone",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.6, l: 103.7, c: 103.8 },
      { o: 103.8, h: 104, l: 103.4, c: 103.5 },
      { o: 103.5, h: 103.7, l: 103.1, c: 103.2 },
      { o: 103.2, h: 105, l: 103.15, c: 104.9 },
      // bar 8 — ideal
      { o: 104.9, h: 105.5, l: 104.7, c: 105.2 }
      // bar 9 — still OK
    ],
    annotations: [
      { type: "zone", topPrice: 105.5, bottomPrice: 104.7, color: "rgba(251, 191, 36, 0.10)", label: "WINDOW" },
      { type: "arrow", at: { i: 8, price: 105.2 }, direction: "up", color: "#fbbf24", label: "LATE BUT OK" }
    ],
    verdict: { label: "BAR +1 \u2014 STILL IN WINDOW", type: "warn" },
    caption: "1 bar after the breakout, the trade is still entryable. Stop is slightly higher; R:R slightly worse but acceptable."
  },
  {
    title: "ENTRY OUTSIDE WINDOW \u2014 stop has to widen, R:R degrades",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.6, l: 103.7, c: 103.8 },
      { o: 103.8, h: 104, l: 103.4, c: 103.5 },
      { o: 103.5, h: 103.7, l: 103.1, c: 103.2 },
      { o: 103.2, h: 105, l: 103.15, c: 104.9 },
      { o: 104.9, h: 106, l: 104.8, c: 105.9 },
      { o: 105.9, h: 107, l: 105.85, c: 106.95 },
      { o: 106.95, h: 107.2, l: 106.5, c: 106.6 }
      // entered HERE — way outside window
    ],
    annotations: [
      { type: "arrow", at: { i: 10, price: 106.6 }, direction: "up", color: "#ef4444", label: "CHASE" },
      { type: "level", price: 103.1, color: "#ef4444", label: "STOP \u2014 3.5pt away", dash: true }
    ],
    verdict: { label: "OUT OF WINDOW \u2014 PASS", type: "bad" },
    caption: "3+ bars after breakout. Stop has to live below the original flag low. The math is now 1:1 or worse. Skip."
  },
  {
    title: "R:R MATH \u2014 entry, stop, target visualized",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      // pole start
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      // pole end @ 104.4
      { o: 104.4, h: 104.6, l: 103.7, c: 103.8 },
      { o: 103.8, h: 104, l: 103.4, c: 103.5 },
      { o: 103.5, h: 103.7, l: 103.1, c: 103.2 },
      { o: 103.2, h: 105, l: 103.15, c: 104.9 }
      // entry @ 104.9
    ],
    annotations: [
      { type: "level", price: 104.9, color: "#22c55e", label: "ENTRY 104.9" },
      { type: "level", price: 103.1, color: "#ef4444", label: "STOP 103.1 (-1.8 risk)", dash: true },
      { type: "level", price: 109.3, color: "#5eead4", label: "TARGET 109.3 (+4.4 reward = 2.4:1)", dash: true }
    ],
    verdict: { label: "2.4:1 R:R \u2014 TAKE IT", type: "good" },
    caption: "Risk = entry to stop = 1.8pt. Reward = pole length projected from entry = 4.4pt. R:R = 2.4:1. Required minimum: 1.5:1."
  },
  {
    title: "PRE-CLOSE EXCEPTION \u2014 explosive velocity + 4 pillars all firing",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 100.4, l: 99.9, c: 100.3 },
      { o: 100.3, h: 100.7, l: 100.1, c: 100.5 },
      { o: 100.5, h: 100.9, l: 100.3, c: 100.6 },
      { o: 100.6, h: 100.8, l: 100.2, c: 100.5 },
      { o: 100.5, h: 100.7, l: 100, c: 100.4 },
      { o: 100.4, h: 102.5, l: 100.35, c: 102.4 },
      // EXPLOSIVE bar — 80% of bar above trendline pre-close
      { o: 102.4, h: 103.6, l: 102.35, c: 103.5 },
      { o: 103.5, h: 104.7, l: 103.4, c: 104.6 }
    ],
    annotations: [
      { type: "volume", bars: [40, 40, 50, 45, 40, 35, 250, 180, 140] },
      { type: "arrow", at: { i: 6, price: 101.5 }, direction: "up", color: "#fbbf24", label: "PRE-CLOSE" },
      { type: "badge", at: { i: 6, price: 102.4 }, text: "V+P+M+D ALL FIRING", color: "#fbbf24" }
    ],
    verdict: { label: "RARE EXCEPTION \u2014 VALID", type: "warn" },
    caption: "5x volume, all 4 pillars confirming, bar already 80% extended. Pre-close OK. If close reverses, cut immediately."
  },
  {
    title: "STOP PLACEMENT \u2014 under flag low (bull) or over flag high (bear)",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.6, l: 103.7, c: 103.8 },
      { o: 103.8, h: 104, l: 103.4, c: 103.5 },
      { o: 103.5, h: 103.7, l: 103.1, c: 103.2 },
      { o: 103.2, h: 105, l: 103.15, c: 104.9 }
    ],
    annotations: [
      { type: "level", price: 103.1, color: "#ef4444", label: "STOP \u2014 0.05 below flag low", dash: true },
      { type: "level", price: 103.15, color: "#94a3b8", label: "FLAG LOW", dash: true },
      { type: "arrow", at: { i: 7, price: 104.9 }, direction: "up", color: "#22c55e", label: "ENTRY" }
    ],
    verdict: { label: "STOP STRUCTURE-BASED", type: "good" },
    caption: "Stop sits 1-2 ticks below the flag low. Tight enough for good R:R; wide enough that one wick won't take it out."
  }
];
export {
  charts
};
