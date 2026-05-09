const charts = [
  {
    title: "CLASSIC 5-BAR POLE \u2014 the textbook",
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100 },
      { o: 100, h: 100.2, l: 99.85, c: 100 },
      { o: 100, h: 101.4, l: 99.95, c: 101.3 },
      // p1
      { o: 101.3, h: 102.5, l: 101.2, c: 102.4 },
      // p2
      { o: 102.4, h: 103.6, l: 102.3, c: 103.5 },
      // p3
      { o: 103.5, h: 104.5, l: 103.4, c: 104.4 },
      // p4
      { o: 104.4, h: 105.4, l: 104.3, c: 105.3 }
      // p5
    ],
    annotations: [
      { type: "volume", bars: [40, 35, 110, 130, 140, 150, 130] },
      { type: "badge", at: { i: 4, price: 103.5 }, text: "5-BAR POLE", color: "#22c55e" },
      { type: "level", price: 102.65, color: "#fbbf24", label: "50% LINE", dash: true }
    ],
    verdict: { label: "TEXTBOOK \u2014 VOLUME EXPANDS", type: "good" },
    caption: "5 directional bars, no overlap, expanding volume. The reference shape your eye trains on."
  },
  {
    title: "NEWS-DRIVEN SINGLE-BAR POLE \u2014 also valid",
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.1 },
      { o: 100.1, h: 100.3, l: 99.9, c: 100 },
      { o: 100, h: 100.2, l: 99.95, c: 100.05 },
      { o: 100.05, h: 104.5, l: 100, c: 104.3 },
      // single big candle on news
      { o: 104.3, h: 104.6, l: 103.4, c: 103.6 },
      { o: 103.6, h: 103.9, l: 103, c: 103.2 },
      { o: 103.2, h: 105, l: 103.1, c: 104.9 }
    ],
    annotations: [
      { type: "volume", bars: [40, 35, 30, 350, 180, 120, 200] },
      { type: "badge", at: { i: 3, price: 102 }, text: "NEWS POLE", color: "#22c55e" },
      { type: "level", price: 102.1, color: "#fbbf24", label: "50% LINE", dash: true }
    ],
    verdict: { label: "CHARACTER \u2260 COUNT", type: "good" },
    caption: "A pole is defined by character, not bar count. One 4-point bar on 7x volume is a complete pole \u2014 flag and trade as normal."
  },
  {
    title: "POLE WITH SHALLOW PAUSE \u2014 under 30% bounce, still valid",
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100 },
      { o: 100, h: 101.5, l: 99.95, c: 101.4 },
      { o: 101.4, h: 102.6, l: 101.3, c: 102.5 },
      { o: 102.5, h: 102.7, l: 102.1, c: 102.2 },
      // shallow pause (≈25% retrace of 1.4-2.5 = 0.4 retrace, 28%)
      { o: 102.2, h: 103.5, l: 102.15, c: 103.4 },
      { o: 103.4, h: 104.7, l: 103.3, c: 104.6 },
      { o: 104.6, h: 105.7, l: 104.5, c: 105.6 }
    ],
    annotations: [
      { type: "badge", at: { i: 3, price: 102.7 }, text: "PAUSE 28%", color: "#22c55e" },
      { type: "badge", at: { i: 6, price: 105.6 }, text: "STILL ONE POLE", color: "#22c55e" }
    ],
    verdict: { label: "VALID \u2014 UNDER 30%", type: "good" },
    caption: "A bounce within the pole is OK if it retraces under 30% of the prior move. 28% qualifies \u2014 keep it as one pole."
  },
  {
    title: "FAILED POLE \u2014 50%+ retrace inside, this is choppy not impulsive",
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100 },
      { o: 100, h: 101.5, l: 99.95, c: 101.4 },
      { o: 101.4, h: 102.6, l: 101.3, c: 102.5 },
      { o: 102.5, h: 102.7, l: 101.4, c: 101.5 },
      // 60% retrace inside
      { o: 101.5, h: 102, l: 101.3, c: 101.7 },
      { o: 101.7, h: 103, l: 101.6, c: 102.9 },
      { o: 102.9, h: 103.2, l: 101.8, c: 101.9 },
      { o: 101.9, h: 102.8, l: 101.7, c: 102.7 }
    ],
    annotations: [
      { type: "badge", at: { i: 3, price: 101.5 }, text: "60% RETRACE", color: "#ef4444" },
      { type: "badge", at: { i: 7, price: 102.7 }, text: "CHOP, NOT POLE", color: "#ef4444" }
    ],
    verdict: { label: "NOT A POLE", type: "bad" },
    caption: "Mid-pole retrace of 60% is a fight, not a pause. Chop disqualifies the structure as a pole. Pass."
  },
  {
    title: "GAP-INSIDE POLE \u2014 bullish for the pole, no break",
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100 },
      { o: 100, h: 101.5, l: 99.95, c: 101.4 },
      { o: 101.4, h: 102.6, l: 101.3, c: 102.5 },
      { o: 103.2, h: 104, l: 103.15, c: 103.9 },
      // GAP UP inside the pole
      { o: 103.9, h: 105, l: 103.8, c: 104.9 },
      { o: 104.9, h: 106, l: 104.8, c: 105.9 },
      { o: 105.9, h: 107, l: 105.85, c: 106.9 }
    ],
    annotations: [
      { type: "badge", at: { i: 3, price: 103 }, text: "GAP", color: "#22c55e" },
      { type: "badge", at: { i: 6, price: 106.9 }, text: "POLE EXTENDS", color: "#22c55e" }
    ],
    verdict: { label: "GAP CONFIRMS DIRECTION", type: "good" },
    caption: "A gap inside the pole is committed money. Treat as one continuous pole \u2014 strength signal, not a break."
  },
  {
    title: "ZOOM-OUT TEST \u2014 same setup on 5-min confirms or denies",
    candles: [
      { o: 100, h: 100.5, l: 99.6, c: 100.4 },
      { o: 100.4, h: 100.9, l: 99.8, c: 99.9 },
      { o: 99.9, h: 102.5, l: 99.7, c: 102.4 },
      { o: 102.4, h: 104, l: 102.3, c: 103.9 },
      { o: 103.9, h: 105.5, l: 103.8, c: 105.4 },
      { o: 105.4, h: 105.7, l: 104.6, c: 104.7 },
      { o: 104.7, h: 105, l: 104.2, c: 104.4 },
      { o: 104.4, h: 105.8, l: 104.35, c: 105.7 }
    ],
    annotations: [
      { type: "zone", topPrice: 105.5, bottomPrice: 99.7, color: "rgba(0, 217, 160, 0.07)", label: "5-MIN VIEW \u2014 pole is REAL" },
      { type: "badge", at: { i: 3, price: 104 }, text: "CONFIRMED", color: "#22c55e" }
    ],
    verdict: { label: "ZOOM CONFIRMS POLE", type: "good" },
    caption: "When 2-min is unclear, drop to 5-min. If the move still looks impulsive there, the pole is real. If 5-min looks ranging, pass."
  }
];
export {
  charts
};
