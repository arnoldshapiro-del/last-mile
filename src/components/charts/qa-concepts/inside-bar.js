const charts = [
  {
    title: "INSIDE BAR \u2014 current bar contained inside prior bar",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 101.5, l: 99.5, c: 101.4 },
      // mother bar — wide range
      { o: 101, h: 101.2, l: 100, c: 100.2 },
      // INSIDE BAR — high & low both inside mother
      { o: 100.2, h: 102, l: 100.15, c: 101.95 }
      // breakout up
    ],
    annotations: [
      { type: "badge", at: { i: 1, price: 101.5 }, text: "MOTHER", color: "#fbbf24" },
      { type: "badge", at: { i: 2, price: 101 }, text: "INSIDE", color: "#5eead4" },
      { type: "arrow", at: { i: 3, price: 101.95 }, direction: "up", color: "#22c55e", label: "BREAK ABOVE" }
    ],
    verdict: { label: "COMPRESSION \u2192 EXPANSION", type: "good" },
    caption: "When the next bar trades inside the prior bar entirely, volatility is compressing. The break of either extreme is the trade."
  },
  {
    title: "INSIDE BAR ENTRY \u2014 close beyond mother bar high or low",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 101.5, l: 99.5, c: 101.4 },
      { o: 101, h: 101.2, l: 100, c: 100.2 },
      { o: 100.2, h: 102, l: 100.15, c: 101.95 }
    ],
    annotations: [
      { type: "level", price: 101.5, color: "#fbbf24", label: "MOTHER HIGH = BUY TRIGGER" },
      { type: "level", price: 99.5, color: "#fbbf24", label: "MOTHER LOW = SELL TRIGGER", dash: true },
      { type: "arrow", at: { i: 3, price: 101.95 }, direction: "up", color: "#22c55e", label: "BUY ENTRY" }
    ],
    verdict: { label: "BREAK MOTHER'S RANGE", type: "good" },
    caption: "The trigger is the close beyond the mother bar's high (long) or low (short). Direction is set by the close."
  },
  {
    title: "INSIDE BAR STOP \u2014 opposite extreme of MOTHER bar",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 101.5, l: 99.5, c: 101.4 },
      { o: 101, h: 101.2, l: 100, c: 100.2 },
      { o: 100.2, h: 102, l: 100.15, c: 101.95 }
    ],
    annotations: [
      { type: "level", price: 101.95, color: "#22c55e", label: "ENTRY" },
      { type: "level", price: 99.5, color: "#ef4444", label: "STOP \u2014 mother low", dash: true },
      { type: "level", price: 100, color: "#fbbf24", label: "TIGHT STOP \u2014 inside-bar low", dash: true }
    ],
    verdict: { label: "TWO STOP CHOICES", type: "info" },
    caption: "Bulletproof: mother low. Tighter: inside-bar low. Use mother for high-conviction trades, inside-bar low when ATR is large."
  },
  {
    title: "COILED INSIDE BAR \u2014 multiple inside bars stacked",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99, c: 101.8 },
      // mother — very wide
      { o: 101.5, h: 101.8, l: 100.5, c: 101 },
      // inside #1
      { o: 101, h: 101.5, l: 100.7, c: 101.3 },
      // inside #2 (inside #1)
      { o: 101.3, h: 101.4, l: 100.9, c: 101.1 },
      // inside #3
      { o: 101.1, h: 102.5, l: 101, c: 102.4 }
      // explosive break
    ],
    annotations: [
      { type: "badge", at: { i: 1, price: 102 }, text: "MOTHER", color: "#fbbf24" },
      { type: "badge", at: { i: 4, price: 101.4 }, text: "COIL", color: "#a78bfa" },
      { type: "arrow", at: { i: 5, price: 102.4 }, direction: "up", color: "#22c55e", label: "EXPLOSIVE" }
    ],
    verdict: { label: "COILED = STRONGER BREAK", type: "good" },
    caption: "3+ consecutive inside bars compresses volatility heavily. The eventual break is statistically larger than a single inside bar break."
  },
  {
    title: "FAILED INSIDE BAR \u2014 break + immediate reversal",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 101.5, l: 99.5, c: 101.4 },
      { o: 101, h: 101.2, l: 100, c: 100.2 },
      { o: 100.2, h: 101.55, l: 100.15, c: 101.5 },
      // break attempt
      { o: 101.5, h: 101.55, l: 99.4, c: 99.5 }
      // immediate reversal — closes below mother low
    ],
    annotations: [
      { type: "level", price: 101.5, color: "#fbbf24", label: "MOTHER HIGH" },
      { type: "level", price: 99.5, color: "#fbbf24", label: "MOTHER LOW" },
      { type: "arrow", at: { i: 3, price: 101.5 }, direction: "up", color: "#fbbf24", label: "FAKE LONG" },
      { type: "badge", at: { i: 4, price: 99.5 }, text: "REVERSAL", color: "#ef4444" }
    ],
    verdict: { label: "FAKE BREAK = REVERSAL", type: "bad" },
    caption: "When a break fails immediately and price closes through the OPPOSITE extreme, the failed-break trade is the new setup. Flip direction."
  },
  {
    title: "INSIDE BAR IN A TREND \u2014 best context",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.2 },
      { o: 100.2, h: 101.4, l: 100.1, c: 101.3 },
      { o: 101.3, h: 102.7, l: 101.2, c: 102.6 },
      { o: 102.6, h: 104, l: 102.5, c: 103.9 },
      // mother bar in uptrend
      { o: 103.5, h: 103.9, l: 102.8, c: 103 },
      // inside bar — pullback within mother
      { o: 103, h: 104.5, l: 102.95, c: 104.4 }
      // continuation break
    ],
    annotations: [
      { type: "badge", at: { i: 3, price: 104 }, text: "MOTHER", color: "#fbbf24" },
      { type: "badge", at: { i: 4, price: 103.9 }, text: "INSIDE", color: "#5eead4" },
      { type: "arrow", at: { i: 5, price: 104.4 }, direction: "up", color: "#22c55e", label: "TREND-ALIGNED" }
    ],
    verdict: { label: "INSIDE-BAR IN A TREND = HIGHEST EDGE", type: "good" },
    caption: "Inside bars during established trends have the highest hit rate. Range-context inside bars are 50/50 noise."
  }
];
export {
  charts
};
