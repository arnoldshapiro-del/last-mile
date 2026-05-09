const charts = [
  {
    title: "VWAP REJECTION \u2014 price tags VWAP and reverses",
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100 },
      { o: 100, h: 100.2, l: 99, c: 99.1 },
      { o: 99.1, h: 99.3, l: 98.4, c: 98.5 },
      { o: 98.5, h: 98.7, l: 97.6, c: 97.7 },
      { o: 97.7, h: 99, l: 97.65, c: 98.9 },
      // bounce up to VWAP
      { o: 98.9, h: 99.5, l: 98.85, c: 99.4 },
      // tags VWAP at 99.5
      { o: 99.4, h: 99.5, l: 98.5, c: 98.6 },
      // REJECTION
      { o: 98.6, h: 98.8, l: 97.5, c: 97.6 }
      // continues down
    ],
    annotations: [
      { type: "trendline", from: { i: 0, price: 100 }, to: { i: 7, price: 99.5 }, color: "#a78bfa", label: "VWAP", dash: true },
      { type: "arrow", at: { i: 6, price: 98.6 }, direction: "down", color: "#22c55e", label: "SHORT ENTRY" }
    ],
    verdict: { label: "CLASSIC VWAP REJECT", type: "good" },
    caption: "In a downtrend, price bounces UP to VWAP, fails to close above, rolls over. Short the rejection candle close."
  },
  {
    title: "VWAP RECLAIM \u2014 opposite side, long entry",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 101.2, l: 99.95, c: 101.1 },
      { o: 101.1, h: 102.3, l: 101, c: 102.2 },
      { o: 102.2, h: 103.5, l: 102.1, c: 103.4 },
      { o: 103.4, h: 103.5, l: 102, c: 102.1 },
      // pull back to VWAP at 102
      { o: 102.1, h: 102.3, l: 101.5, c: 101.7 },
      // tests below
      { o: 101.7, h: 102.2, l: 101.65, c: 102.15 },
      // reclaim
      { o: 102.15, h: 103.5, l: 102.1, c: 103.4 }
    ],
    annotations: [
      { type: "trendline", from: { i: 0, price: 100 }, to: { i: 7, price: 102 }, color: "#a78bfa", label: "VWAP", dash: true },
      { type: "arrow", at: { i: 6, price: 102.15 }, direction: "up", color: "#22c55e", label: "LONG ENTRY" }
    ],
    verdict: { label: "VWAP RECLAIM = TREND CONTINUES", type: "good" },
    caption: "In an uptrend, price dips through VWAP and reclaims it. The reclaim close is the entry \u2014 trend resumes."
  },
  {
    title: "VWAP STOP \u2014 opposite side of VWAP",
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100 },
      { o: 100, h: 100.2, l: 99, c: 99.1 },
      { o: 99.1, h: 99.3, l: 98.4, c: 98.5 },
      { o: 98.5, h: 98.7, l: 97.6, c: 97.7 },
      { o: 97.7, h: 99, l: 97.65, c: 98.9 },
      { o: 98.9, h: 99.5, l: 98.85, c: 99.4 },
      { o: 99.4, h: 99.5, l: 98.5, c: 98.6 },
      // entry
      { o: 98.6, h: 98.8, l: 97.5, c: 97.6 }
    ],
    annotations: [
      { type: "trendline", from: { i: 0, price: 100 }, to: { i: 7, price: 99.5 }, color: "#a78bfa", label: "VWAP", dash: true },
      { type: "level", price: 98.6, color: "#22c55e", label: "SHORT ENTRY" },
      { type: "level", price: 99.7, color: "#ef4444", label: "STOP \u2014 over VWAP wick high", dash: true }
    ],
    verdict: { label: "STOP OVER VWAP TAG", type: "good" },
    caption: "Stop sits 1-2 ticks above the highest wick that tagged VWAP. If VWAP is reclaimed, the rejection thesis is dead."
  },
  {
    title: "FAILED REJECTION \u2014 price closes ABOVE VWAP",
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100 },
      { o: 100, h: 100.2, l: 99, c: 99.1 },
      { o: 99.1, h: 99.3, l: 98.4, c: 98.5 },
      { o: 98.5, h: 98.7, l: 97.6, c: 97.7 },
      { o: 97.7, h: 99, l: 97.65, c: 98.9 },
      { o: 98.9, h: 99.5, l: 98.85, c: 99.4 },
      { o: 99.4, h: 100, l: 99.35, c: 99.95 },
      // CLOSED ABOVE VWAP — rejection failed
      { o: 99.95, h: 100.5, l: 99.9, c: 100.4 }
    ],
    annotations: [
      { type: "trendline", from: { i: 0, price: 100 }, to: { i: 7, price: 99.5 }, color: "#a78bfa", label: "VWAP", dash: true },
      { type: "badge", at: { i: 6, price: 99.95 }, text: "CLOSED ABOVE", color: "#ef4444" }
    ],
    verdict: { label: "NOT A REJECTION", type: "bad" },
    caption: "For VWAP rejection to count, the candle must close BELOW VWAP (or above for reclaim). A close on the wrong side invalidates."
  },
  {
    title: "VWAP IS A MAGNET MIDDAY \u2014 fade extremes back to VWAP",
    candles: [
      { o: 100, h: 100.4, l: 99.6, c: 100 },
      { o: 100, h: 100.5, l: 99.7, c: 100.4 },
      { o: 100.4, h: 100.7, l: 99.9, c: 100 },
      { o: 100, h: 100.4, l: 99.6, c: 100.3 },
      { o: 100.3, h: 100.6, l: 99.85, c: 100 },
      { o: 100, h: 100.4, l: 99.7, c: 100.2 },
      { o: 100.2, h: 100.5, l: 99.85, c: 100 }
    ],
    annotations: [
      { type: "trendline", from: { i: 0, price: 100 }, to: { i: 6, price: 100 }, color: "#a78bfa", label: "VWAP \u2014 flat", dash: true },
      { type: "badge", at: { i: 3, price: 100.5 }, text: "MAGNET", color: "#a78bfa" }
    ],
    verdict: { label: "BALANCE \u2014 FADE EXTREMES", type: "info" },
    caption: "When VWAP is flat through midday, price oscillates around it. Fade tags above/below \u2014 they pull back to VWAP."
  },
  {
    title: "VWAP TRENDING \u2014 VWAP itself rises with price (trend day)",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 101.2, l: 99.95, c: 101.1 },
      { o: 101.1, h: 102.4, l: 101, c: 102.3 },
      { o: 102.3, h: 103.6, l: 102.2, c: 103.5 },
      { o: 103.5, h: 104.8, l: 103.4, c: 104.7 },
      { o: 104.7, h: 105, l: 103.6, c: 103.7 },
      // pull to rising VWAP
      { o: 103.7, h: 105, l: 103.65, c: 104.9 }
      // reclaim
    ],
    annotations: [
      { type: "trendline", from: { i: 0, price: 100 }, to: { i: 6, price: 103.7 }, color: "#a78bfa", label: "VWAP \u2014 rising", dash: true },
      { type: "arrow", at: { i: 6, price: 104.9 }, direction: "up", color: "#22c55e", label: "CONTINUATION" }
    ],
    verdict: { label: "TREND DAY \u2014 VWAP IS A FLOOR", type: "good" },
    caption: "On trend days, VWAP rises with price. Pullbacks to a rising VWAP are buy opportunities \u2014 same logic, more powerful context."
  }
];
export {
  charts
};
