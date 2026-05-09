const charts = [
  {
    title: "TESTED RESISTANCE \u2014 multiple touches make the level",
    candles: [
      { o: 100, h: 100.5, l: 99.7, c: 100.4 },
      { o: 100.4, h: 102, l: 100.3, c: 101.9 },
      { o: 101.9, h: 102, l: 100.8, c: 100.9 },
      // touch #1
      { o: 100.9, h: 101.8, l: 100.85, c: 101.7 },
      { o: 101.7, h: 102, l: 100.7, c: 100.8 },
      // touch #2
      { o: 100.8, h: 101.9, l: 100.75, c: 101.85 },
      { o: 101.85, h: 102, l: 100.6, c: 100.7 }
      // touch #3
    ],
    annotations: [
      { type: "level", price: 102, color: "#ef4444", label: "RESISTANCE \u2014 3 touches" }
    ],
    verdict: { label: "STRONG LEVEL \u2014 fade or wait for break", type: "good" },
    caption: "A horizontal level with 3+ touches is statistically strong. Fade tags (short on rejection) or wait for the break."
  },
  {
    title: "BREAK = ROLE REVERSAL \u2014 old resistance becomes support",
    candles: [
      { o: 100, h: 100.5, l: 99.7, c: 100.4 },
      { o: 100.4, h: 102, l: 100.3, c: 101.9 },
      { o: 101.9, h: 102, l: 100.8, c: 100.9 },
      { o: 100.9, h: 102, l: 100.85, c: 101.95 },
      { o: 101.95, h: 102, l: 100.9, c: 101 },
      { o: 101, h: 103.5, l: 100.95, c: 103.4 },
      // BREAK above 102
      { o: 103.4, h: 103.5, l: 102, c: 102.1 },
      // RETEST as support
      { o: 102.1, h: 104, l: 102.05, c: 103.95 }
      // bounces off 102
    ],
    annotations: [
      { type: "level", price: 102, color: "#fbbf24", label: "OLD RESISTANCE \u2192 NEW SUPPORT" },
      { type: "arrow", at: { i: 6, price: 102.1 }, direction: "up", color: "#22c55e", label: "BUY THE RETEST" }
    ],
    verdict: { label: "ROLE REVERSAL \u2014 HIGH-EDGE ENTRY", type: "good" },
    caption: "After a break, price often retests the level from the other side. The retest entry has the cleanest stop (just below the level)."
  },
  {
    title: "PRIOR DAY HIGH/LOW \u2014 daily levels in play intraday",
    candles: [
      { o: 100, h: 100.5, l: 99.7, c: 100.4 },
      { o: 100.4, h: 100.8, l: 99.9, c: 100 },
      { o: 100, h: 100.4, l: 99.6, c: 100.3 },
      { o: 100.3, h: 100.5, l: 99.7, c: 99.9 },
      { o: 99.9, h: 101.3, l: 99.85, c: 101.25 },
      // tags PDH at 101.3
      { o: 101.25, h: 101.3, l: 100.5, c: 100.6 },
      // rejection
      { o: 100.6, h: 100.9, l: 100.2, c: 100.3 }
    ],
    annotations: [
      { type: "level", price: 101.3, color: "#a78bfa", label: "PDH \u2014 Prior Day High" },
      { type: "arrow", at: { i: 5, price: 100.6 }, direction: "down", color: "#22c55e", label: "SHORT REJECTION" }
    ],
    verdict: { label: "PDH/PDL = MAGNETS", type: "good" },
    caption: "Prior day high and low are the most-watched intraday levels. Tags often reject \u2014 fade them with stops just past the level."
  },
  {
    title: "VWAP AS DYNAMIC SUPPORT/RESISTANCE",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 101.2, l: 99.95, c: 101.1 },
      { o: 101.1, h: 102.3, l: 101, c: 102.2 },
      { o: 102.2, h: 102.5, l: 101.3, c: 101.4 },
      // pull to VWAP at 101.5
      { o: 101.4, h: 102.5, l: 101.35, c: 102.4 },
      // bounce
      { o: 102.4, h: 103.5, l: 102.3, c: 103.4 }
    ],
    annotations: [
      { type: "trendline", from: { i: 0, price: 100 }, to: { i: 5, price: 101.5 }, color: "#a78bfa", label: "VWAP", dash: true },
      { type: "arrow", at: { i: 4, price: 102.4 }, direction: "up", color: "#22c55e", label: "BOUNCE" }
    ],
    verdict: { label: "VWAP HOLDS = TREND CONTINUES", type: "good" },
    caption: "In an uptrend, VWAP acts as moving support. Pullbacks that hold VWAP are buy opportunities \u2014 same logic as static support."
  },
  {
    title: "ROUND NUMBERS \u2014 psychological levels matter",
    candles: [
      { o: 99.5, h: 99.8, l: 99.3, c: 99.7 },
      { o: 99.7, h: 100, l: 99.4, c: 99.5 },
      // tags 100, rejected
      { o: 99.5, h: 99.7, l: 99, c: 99.1 },
      { o: 99.1, h: 99.9, l: 99.05, c: 99.8 },
      { o: 99.8, h: 100, l: 99.5, c: 99.6 },
      // tags 100 again, rejected
      { o: 99.6, h: 99.9, l: 99, c: 99.1 },
      { o: 99.1, h: 100.5, l: 99.05, c: 100.4 },
      // finally breaks 100
      { o: 100.4, h: 101.5, l: 100.3, c: 101.4 }
    ],
    annotations: [
      { type: "level", price: 100, color: "#fbbf24", label: "ROUND #" },
      { type: "arrow", at: { i: 6, price: 100.4 }, direction: "up", color: "#22c55e", label: "BREAK" }
    ],
    verdict: { label: "ROUND #s ARE STICKY", type: "info" },
    caption: "Whole numbers and 50\xA2/25\xA2 marks act as resistance because traders cluster orders there. Expect multiple tests before a break."
  },
  {
    title: "CONFLUENCE \u2014 multiple levels at the same price = strongest",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 101, l: 99.95, c: 100.9 },
      { o: 100.9, h: 102.5, l: 100.85, c: 102.4 },
      { o: 102.4, h: 102.6, l: 101.5, c: 101.6 },
      // pulls into confluence zone
      { o: 101.6, h: 102.6, l: 101.55, c: 102.5 },
      // bounce
      { o: 102.5, h: 103.7, l: 102.45, c: 103.6 }
    ],
    annotations: [
      { type: "level", price: 101.5, color: "#a78bfa", label: "VWAP", dash: true },
      { type: "level", price: 101.5, color: "#5eead4", label: "PDH", dash: true },
      { type: "level", price: 101.5, color: "#fbbf24", label: "ROUND #" },
      { type: "arrow", at: { i: 4, price: 102.5 }, direction: "up", color: "#22c55e", label: "STRONG BOUNCE" }
    ],
    verdict: { label: "TRIPLE CONFLUENCE = TAKE IT", type: "good" },
    caption: "3+ levels stacking at the same price (VWAP + PDH + round number) creates the strongest support/resistance you can trade."
  }
];
export {
  charts
};
