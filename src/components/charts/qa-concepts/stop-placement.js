const charts = [
  {
    title: "STRUCTURAL STOPS \u2014 placed at price levels, not at risk amounts",
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
      { type: "level", price: 104.9, color: "#22c55e", label: "ENTRY" },
      { type: "level", price: 103.1, color: "#22c55e", label: "\u2713 STRUCTURAL \u2014 under flag low", dash: true },
      { type: "level", price: 104.5, color: "#ef4444", label: '\u2717 ARBITRARY \u2014 "$X risk" stop', dash: true }
    ],
    verdict: { label: "STRUCTURE > DOLLAR AMOUNT", type: "info" },
    caption: "Stops live at structural levels (flag lows, trough lows, neckline). Setting a stop based on dollar risk alone gets hit by noise."
  },
  {
    title: "NOISE-AWARE STOP \u2014 1-2 ticks PAST the level, not AT it",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.5, l: 103, c: 103.2 },
      // wick to 103.0 — noise
      { o: 103.2, h: 103.5, l: 103.05, c: 103.3 },
      { o: 103.3, h: 105, l: 103.25, c: 104.9 }
    ],
    annotations: [
      { type: "level", price: 103, color: "#fbbf24", label: "FLAG WICK LOW" },
      { type: "level", price: 103, color: "#ef4444", label: "\u2717 AT the level \u2014 gets hit", dash: true },
      { type: "level", price: 102.85, color: "#22c55e", label: "\u2713 2-3 ticks BELOW \u2014 survives", dash: true }
    ],
    verdict: { label: "CHEAT THE NOISE BAND", type: "good" },
    caption: "Stops AT the structural low get hit by noise wicks. Stops 2-3 ticks below survive the wick and the trade lives."
  },
  {
    title: "ATR-AWARE STOP \u2014 wider stop on high-volatility days",
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100 },
      { o: 100, h: 102.5, l: 99.5, c: 102.4 },
      // wide bar = high ATR
      { o: 102.4, h: 104, l: 102, c: 103.9 },
      { o: 103.9, h: 105.5, l: 103.5, c: 105.4 },
      { o: 105.4, h: 105.6, l: 103.8, c: 104 },
      { o: 104, h: 104.3, l: 103.3, c: 103.5 },
      { o: 103.5, h: 105.5, l: 103.45, c: 105.4 }
    ],
    annotations: [
      { type: "level", price: 105.4, color: "#22c55e", label: "ENTRY" },
      { type: "level", price: 103.3, color: "#22c55e", label: "STOP \u2014 2.1pt (matches ATR)", dash: true },
      { type: "level", price: 104.5, color: "#ef4444", label: "TIGHT STOP \u2014 eaten by noise", dash: true }
    ],
    verdict: { label: "MATCH STOP TO ATR", type: "info" },
    caption: "High-ATR days need wider stops. A 0.5pt stop survives a 0.3-ATR day and dies on a 1.5-ATR day. Adjust to conditions."
  },
  {
    title: "TIGHTENING TO BREAK-EVEN \u2014 only after FIRST measured-move target",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.5, l: 103.7, c: 103.8 },
      { o: 103.8, h: 103.9, l: 103.3, c: 103.4 },
      { o: 103.4, h: 105, l: 103.35, c: 104.9 },
      // entry
      { o: 104.9, h: 106.5, l: 104.8, c: 106.4 },
      // 1st target hit
      { o: 106.4, h: 107.5, l: 106.3, c: 107.4 }
    ],
    annotations: [
      { type: "level", price: 104.9, color: "#94a3b8", label: "ENTRY (now BE stop)", dash: true },
      { type: "badge", at: { i: 7, price: 106.4 }, text: "1ST TARGET HIT", color: "#22c55e" },
      { type: "level", price: 103.1, color: "#ef4444", label: "INITIAL STOP \u2014 now lifted", dash: true }
    ],
    verdict: { label: "BE STOP AFTER 1st TARGET", type: "good" },
    caption: "Tighten to break-even ONLY after the first measured-move target hits. Premature BE stops get tagged by normal pullbacks."
  },
  {
    title: "TRAILING STOP \u2014 at structural lows, not arbitrary $X",
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
      { o: 105.9, h: 105.95, l: 105, c: 105.1 },
      // higher low — trail
      { o: 105.1, h: 107, l: 105.05, c: 106.95 },
      { o: 106.95, h: 107, l: 106, c: 106.1 },
      // higher low — trail
      { o: 106.1, h: 108, l: 106.05, c: 107.95 }
    ],
    annotations: [
      { type: "level", price: 104.85, color: "#94a3b8", label: "TRAIL #1 \u2014 under HL #1", dash: true },
      { type: "level", price: 105, color: "#fbbf24", label: "TRAIL #2 \u2014 under HL #2", dash: true },
      { type: "level", price: 106, color: "#5eead4", label: "TRAIL #3 \u2014 under HL #3", dash: true }
    ],
    verdict: { label: "TRAIL ON STRUCTURE", type: "good" },
    caption: "Move the stop only when a NEW higher-low prints (or lower-high in a short). Each step locks more profit on confirmed structure."
  },
  {
    title: "NEVER MOVE STOPS WIDER \u2014 only tighter or break-even",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.5, l: 103, c: 103.1 },
      // approaching stop
      { o: 103.1, h: 103.2, l: 102, c: 102.1 },
      // would have hit
      { o: 102.1, h: 102.3, l: 100.5, c: 100.6 },
      // BIG loss after widened stop
      { o: 100.6, h: 100.8, l: 99, c: 99.1 }
    ],
    annotations: [
      { type: "level", price: 103.1, color: "#94a3b8", label: "ORIGINAL STOP \u2014 would have triggered", dash: true },
      { type: "level", price: 100.5, color: "#ef4444", label: "WIDENED STOP \u2014 much bigger loss", dash: true }
    ],
    verdict: { label: "WIDENING = ACCOUNT KILLER", type: "bad" },
    caption: "Stops can move TIGHTER (BE, trail) or stay PUT. Never wider. Widening once turns a 1pt loss into a 5pt loss every time."
  }
];
export {
  charts
};
