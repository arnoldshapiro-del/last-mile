const charts = [
  {
    title: "PARALLEL CHANNEL FLAG \u2014 gentle drift between two parallel lines",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.6, l: 103.7, c: 103.8 },
      // flag start
      { o: 103.8, h: 104, l: 103.4, c: 103.5 },
      { o: 103.5, h: 103.7, l: 103.1, c: 103.2 },
      { o: 103.2, h: 103.4, l: 102.8, c: 102.9 },
      { o: 102.9, h: 103.2, l: 102.6, c: 102.7 },
      { o: 102.7, h: 104.5, l: 102.65, c: 104.4 }
      // breakout
    ],
    annotations: [
      { type: "trendline", from: { i: 4, price: 104.6 }, to: { i: 8, price: 103.2 }, color: "#fbbf24", label: "UPPER" },
      { type: "trendline", from: { i: 4, price: 103.7 }, to: { i: 8, price: 102.6 }, color: "#fbbf24", label: "LOWER" }
    ],
    verdict: { label: "PARALLEL CHANNEL \u2014 VALID", type: "good" },
    caption: "Two parallel trendlines, contained drift, contracting volume. Cleanest flag shape. Breakout direction = pole direction."
  },
  {
    title: "TRIANGLE FLAG \u2014 converging trendlines, building pressure",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.6, l: 103.5, c: 103.6 },
      // wide flag start
      { o: 103.6, h: 104.4, l: 103.55, c: 104.3 },
      // bounce
      { o: 104.3, h: 104.4, l: 103.7, c: 103.8 },
      // narrower
      { o: 103.8, h: 104.2, l: 103.75, c: 104.1 },
      { o: 104.1, h: 104.2, l: 103.85, c: 103.95 },
      // tight
      { o: 103.95, h: 105.5, l: 103.9, c: 105.4 }
      // breakout
    ],
    annotations: [
      { type: "trendline", from: { i: 4, price: 104.6 }, to: { i: 8, price: 104.2 }, color: "#fbbf24", label: "UPPER" },
      { type: "trendline", from: { i: 4, price: 103.5 }, to: { i: 8, price: 103.85 }, color: "#fbbf24", label: "LOWER" }
    ],
    verdict: { label: "TRIANGLE \u2014 VALID", type: "good" },
    caption: "Trendlines converge as range compresses. Pressure builds inside; breakout typically resumes pole direction with energy."
  },
  {
    title: "SIMPLE PULLBACK FLAG \u2014 1-3 bars and continuation",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.6, l: 103.6, c: 103.7 },
      // 1-bar pause
      { o: 103.7, h: 105.6, l: 103.65, c: 105.5 }
      // breakout
    ],
    annotations: [
      { type: "badge", at: { i: 4, price: 103.7 }, text: "PAUSE", color: "#fbbf24" },
      { type: "arrow", at: { i: 5, price: 105.5 }, direction: "up", color: "#22c55e", label: "GO" }
    ],
    verdict: { label: "SHORT PAUSE \u2014 VALID", type: "good" },
    caption: "Sometimes the flag is just a single shallow bar. If volume contracted on that bar and the next bar reclaims, take it."
  },
  {
    title: "FIGHTING FLAG \u2014 counter-bars too big, flag is being attacked",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.6, l: 102.6, c: 102.7 },
      // BIG counter — bigger than pole bars
      { o: 102.7, h: 103.7, l: 102.65, c: 103.6 },
      { o: 103.6, h: 103.7, l: 102.4, c: 102.5 },
      // another big counter
      { o: 102.5, h: 102.8, l: 101.6, c: 101.7 }
    ],
    annotations: [
      { type: "badge", at: { i: 4, price: 102.7 }, text: "BIG COUNTER", color: "#ef4444" },
      { type: "badge", at: { i: 6, price: 102.5 }, text: "AGAIN", color: "#ef4444" }
    ],
    verdict: { label: "FIGHTING \u2014 RAISE THE BAR", type: "warn" },
    caption: "Counter-bars bigger than any pole bar = the flag is being fought. Continuation now requires 4-of-4 confirmation, not 3."
  },
  {
    title: "HEALTHY VS FIGHTING \u2014 volume signature is the tell",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      // pole — high vol
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.6, l: 103.7, c: 103.8 },
      // flag — LOW vol
      { o: 103.8, h: 104, l: 103.4, c: 103.5 },
      { o: 103.5, h: 103.7, l: 103.2, c: 103.3 },
      { o: 103.3, h: 103.5, l: 102.9, c: 103 },
      { o: 103, h: 104.6, l: 102.95, c: 104.5 }
      // breakout — vol returns
    ],
    annotations: [
      { type: "volume", bars: [40, 130, 140, 150, 50, 45, 40, 35, 130] },
      { type: "badge", at: { i: 1, price: 102 }, text: "POLE: vol\u2191", color: "#22c55e" },
      { type: "badge", at: { i: 6, price: 103.3 }, text: "FLAG: vol\u2193", color: "#22c55e" },
      { type: "badge", at: { i: 8, price: 104.5 }, text: "BREAK: vol\u2191", color: "#22c55e" }
    ],
    verdict: { label: "VOLUME PATTERN HEALTHY", type: "good" },
    caption: "Pole on rising volume, flag on contracting volume, breakout returns volume. This is the cleanest flag signature."
  },
  {
    title: "CHANNEL DEPTH 25-50% \u2014 the sweet spot",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.6, l: 103.5, c: 103.6 },
      // 41% retrace
      { o: 103.6, h: 103.8, l: 103.2, c: 103.3 },
      { o: 103.3, h: 103.5, l: 103, c: 103.1 },
      { o: 103.1, h: 104.7, l: 103.05, c: 104.6 }
    ],
    annotations: [
      { type: "level", price: 102.25, color: "#fbbf24", label: "50% LINE", dash: true },
      { type: "level", price: 103, color: "#22c55e", label: "FLAG LOW (39% retrace)", dash: true }
    ],
    verdict: { label: "IDEAL \u2014 25-50%", type: "good" },
    caption: "Flag retracing 25-50% of the pole is the sweet spot. Above 50% = invalidated. Below 25% = pause may be too short to qualify."
  }
];
export {
  charts
};
