const charts = [
  {
    title: "TRENDING TAPE \u2014 higher highs + higher lows",
    candles: [
      { o: 100, h: 100.5, l: 99.7, c: 100.4 },
      { o: 100.4, h: 101.4, l: 100, c: 101.3 },
      { o: 101.3, h: 101.5, l: 100.6, c: 100.7 },
      // HL
      { o: 100.7, h: 102.4, l: 100.65, c: 102.3 },
      // HH
      { o: 102.3, h: 102.5, l: 101.7, c: 101.8 },
      // HL
      { o: 101.8, h: 103.5, l: 101.75, c: 103.4 },
      // HH
      { o: 103.4, h: 103.6, l: 102.7, c: 102.8 },
      // HL
      { o: 102.8, h: 104.7, l: 102.75, c: 104.6 }
      // HH
    ],
    annotations: [
      { type: "badge", at: { i: 1, price: 101.4 }, text: "HH", color: "#22c55e" },
      { type: "badge", at: { i: 2, price: 100.7 }, text: "HL", color: "#22c55e" },
      { type: "badge", at: { i: 3, price: 102.4 }, text: "HH", color: "#22c55e" },
      { type: "badge", at: { i: 5, price: 103.5 }, text: "HH", color: "#22c55e" },
      { type: "badge", at: { i: 7, price: 104.7 }, text: "HH", color: "#22c55e" }
    ],
    verdict: { label: "TRENDING \u2014 TRADE WITH IT", type: "good" },
    caption: "Each new high is higher than the prior; each pullback bottoms higher. This is a textbook uptrend \u2014 only long."
  },
  {
    title: "TREND BREAK \u2014 first lower-high signals end",
    candles: [
      { o: 100, h: 100.5, l: 99.7, c: 100.4 },
      { o: 100.4, h: 101.5, l: 100, c: 101.4 },
      { o: 101.4, h: 102.5, l: 101.3, c: 102.4 },
      { o: 102.4, h: 103.6, l: 102.3, c: 103.5 },
      { o: 103.5, h: 104.7, l: 103.4, c: 104.6 },
      // top
      { o: 104.6, h: 104.7, l: 103.5, c: 103.6 },
      { o: 103.6, h: 104.4, l: 103.5, c: 104.3 },
      // LH (lower than 104.7)
      { o: 104.3, h: 104.4, l: 102.7, c: 102.8 }
      // LL
    ],
    annotations: [
      { type: "level", price: 104.7, color: "#fbbf24", label: "PRIOR HIGH" },
      { type: "badge", at: { i: 6, price: 104.4 }, text: "LH", color: "#ef4444" },
      { type: "badge", at: { i: 7, price: 102.8 }, text: "LL", color: "#ef4444" }
    ],
    verdict: { label: "TREND BROKEN", type: "warn" },
    caption: "The first lower-high after a series of HH/HL is the trend-break signal. Stop pressing long; consider short setups."
  },
  {
    title: "PULLBACK ENTRY \u2014 buy the dip in a trend",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 101.4, l: 99.95, c: 101.3 },
      { o: 101.3, h: 102.5, l: 101.2, c: 102.4 },
      { o: 102.4, h: 103.6, l: 102.3, c: 103.5 },
      { o: 103.5, h: 103.6, l: 102.5, c: 102.6 },
      // pullback
      { o: 102.6, h: 102.8, l: 102, c: 102.1 },
      // pullback continues
      { o: 102.1, h: 102.4, l: 101.9, c: 102 },
      // makes a HL
      { o: 102, h: 103.4, l: 101.95, c: 103.3 }
      // continuation
    ],
    annotations: [
      { type: "level", price: 101.9, color: "#22c55e", label: "HL \u2014 PULLBACK FLOOR" },
      { type: "arrow", at: { i: 7, price: 103.3 }, direction: "up", color: "#22c55e", label: "CONTINUATION ENTRY" }
    ],
    verdict: { label: "PULLBACK = BUY OPP", type: "good" },
    caption: "In a confirmed trend, every pullback that prints a higher-low is a buy opportunity. Stop goes below the HL."
  },
  {
    title: "TRENDLINE BREAK \u2014 the cleaner exit signal",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 101.4, l: 99.95, c: 101.3 },
      { o: 101.3, h: 102.5, l: 101.2, c: 102.4 },
      { o: 102.4, h: 103.6, l: 102.3, c: 103.5 },
      { o: 103.5, h: 104.7, l: 103.4, c: 104.6 },
      { o: 104.6, h: 104.7, l: 103.5, c: 103.6 },
      { o: 103.6, h: 103.8, l: 102, c: 102.1 },
      // closes BELOW trendline
      { o: 102.1, h: 102.3, l: 100.5, c: 100.6 }
    ],
    annotations: [
      { type: "trendline", from: { i: 0, price: 99.7 }, to: { i: 7, price: 102.5 }, color: "#fbbf24", label: "TRENDLINE" },
      { type: "badge", at: { i: 6, price: 102.1 }, text: "BREAK", color: "#ef4444" }
    ],
    verdict: { label: "TRENDLINE BREAK = EXIT", type: "warn" },
    caption: "Connect the major higher-lows with a line. A close BELOW that line ends the trend ahead of any LH/LL signal."
  },
  {
    title: "COUNTER-TREND TRADE \u2014 high difficulty, needs more confirmation",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 101.4, l: 99.95, c: 101.3 },
      { o: 101.3, h: 102.5, l: 101.2, c: 102.4 },
      { o: 102.4, h: 103.6, l: 102.3, c: 103.5 },
      { o: 103.5, h: 104.7, l: 103.4, c: 104.6 },
      // strong uptrend
      { o: 104.6, h: 104.7, l: 103.5, c: 103.6 },
      // small pullback
      { o: 103.6, h: 103.8, l: 102.5, c: 102.6 }
      // bigger pullback
    ],
    annotations: [
      { type: "arrow", at: { i: 6, price: 102.6 }, direction: "down", color: "#ef4444", label: "COUNTER-TREND SHORT" },
      { type: "badge", at: { i: 6, price: 103.5 }, text: "NOT YET BROKEN", color: "#fbbf24" }
    ],
    verdict: { label: "PASS WITHOUT 2 LH/LL", type: "warn" },
    caption: "Counter-trend trades need 2+ confirmations: lower-high AND lower-low (or trendline break). One alone is just noise."
  },
  {
    title: "TREND DAY ENTRY POINTS \u2014 best at 9:45-10:30 ET",
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100.4 },
      { o: 100.4, h: 101.4, l: 100.3, c: 101.3 },
      { o: 101.3, h: 102.7, l: 101.2, c: 102.6 },
      { o: 102.6, h: 103.7, l: 102.5, c: 103.6 },
      { o: 103.6, h: 103.8, l: 102.8, c: 102.9 },
      // 10:00 area pullback
      { o: 102.9, h: 103.1, l: 102.5, c: 102.6 },
      { o: 102.6, h: 104, l: 102.55, c: 103.95 },
      // resume
      { o: 103.95, h: 105.4, l: 103.85, c: 105.3 }
    ],
    annotations: [
      { type: "badge", at: { i: 0, price: 100.5 }, text: "9:30", color: "#5eead4" },
      { type: "badge", at: { i: 4, price: 103.8 }, text: "10:00", color: "#5eead4" },
      { type: "arrow", at: { i: 6, price: 103.95 }, direction: "up", color: "#22c55e", label: "BEST ENTRY" }
    ],
    verdict: { label: "WAIT FOR FIRST PULLBACK", type: "good" },
    caption: "Trend day open often spikes (chasers buy first). Wait for first pullback at 10:00-10:30 ET \u2014 that is the cleanest entry."
  }
];
export {
  charts
};
