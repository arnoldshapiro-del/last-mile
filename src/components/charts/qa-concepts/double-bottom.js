const charts = [
  {
    title: "TEXTBOOK DOUBLE BOTTOM \u2014 twin troughs, neckline break",
    candles: [
      { o: 105, h: 105.3, l: 104.7, c: 105 },
      { o: 105, h: 105.1, l: 103, c: 103.1 },
      { o: 103.1, h: 103.3, l: 101, c: 101.2 },
      // trough 1
      { o: 101.2, h: 103, l: 101.15, c: 102.9 },
      // bounce to neckline
      { o: 102.9, h: 103, l: 101.2, c: 101.3 },
      // trough 2 = trough 1
      { o: 101.3, h: 103, l: 101.25, c: 102.95 },
      // approach neckline
      { o: 102.95, h: 104.5, l: 102.9, c: 104.4 }
      // breakout
    ],
    annotations: [
      { type: "level", price: 101, color: "#fbbf24", label: "TWIN TROUGHS" },
      { type: "level", price: 103, color: "#22c55e", label: "NECKLINE \u2014 broken" },
      { type: "arrow", at: { i: 6, price: 104.4 }, direction: "up", color: "#22c55e", label: "ENTRY" }
    ],
    verdict: { label: "TEXTBOOK SETUP", type: "good" },
    caption: "Two troughs at the same price, recovery to neckline, then breakout. Classic bottom reversal."
  },
  {
    title: "STOP PLACEMENT \u2014 three options ranked",
    candles: [
      { o: 105, h: 105.3, l: 104.7, c: 105 },
      { o: 105, h: 105.1, l: 103, c: 103.1 },
      { o: 103.1, h: 103.3, l: 101, c: 101.2 },
      { o: 101.2, h: 103, l: 101.15, c: 102.9 },
      { o: 102.9, h: 103, l: 101.2, c: 101.3 },
      { o: 101.3, h: 103, l: 101.25, c: 102.95 },
      { o: 102.95, h: 104.5, l: 102.9, c: 104.4 }
    ],
    annotations: [
      { type: "level", price: 100.5, color: "#22c55e", label: "\u2460 BULLETPROOF \u2014 under 2nd trough", dash: true },
      { type: "level", price: 101.85, color: "#fbbf24", label: "\u2461 MIDPOINT \u2014 neckline & trough", dash: true },
      { type: "level", price: 100.95, color: "#ef4444", label: "\u2462 TIGHT \u2014 at trough = noise eats it", dash: true }
    ],
    verdict: { label: "MIDPOINT IS THE SWEET SPOT", type: "info" },
    caption: "Bulkowski: tight stops at recent lows hit 61.5% of the time. Midpoint balances R:R with survival."
  },
  {
    title: "NECKLINE-CLOSE-BELOW = mental exit",
    candles: [
      { o: 105, h: 105.3, l: 104.7, c: 105 },
      { o: 105, h: 105.1, l: 103, c: 103.1 },
      { o: 103.1, h: 103.3, l: 101, c: 101.2 },
      { o: 101.2, h: 103, l: 101.15, c: 102.9 },
      { o: 102.9, h: 103, l: 101.2, c: 101.3 },
      { o: 101.3, h: 103, l: 101.25, c: 102.95 },
      { o: 102.95, h: 104.5, l: 102.9, c: 104.4 },
      // entry
      { o: 104.4, h: 104.5, l: 103.5, c: 103.6 },
      { o: 103.6, h: 103.7, l: 102.8, c: 102.85 },
      // closes below neckline = EXIT
      { o: 102.85, h: 103, l: 101.5, c: 101.6 }
    ],
    annotations: [
      { type: "level", price: 103, color: "#fbbf24", label: "NECKLINE" },
      { type: "arrow", at: { i: 8, price: 102.85 }, direction: "down", color: "#fbbf24", label: "EXIT \u2014 close below" }
    ],
    verdict: { label: "CLOSE BELOW = OUT", type: "warn" },
    caption: "Even after entry, ANY candle that closes below the neckline cancels the pattern. Exit on that bar \u2014 saves 1-2pt vs riding to stop."
  },
  {
    title: "MEASURED-MOVE TARGET \u2014 neckline-to-trough projected UP",
    candles: [
      { o: 105, h: 105.3, l: 104.7, c: 105 },
      { o: 105, h: 105.1, l: 103, c: 103.1 },
      { o: 103.1, h: 103.3, l: 101, c: 101.2 },
      // trough = 101.0
      { o: 101.2, h: 103, l: 101.15, c: 102.9 },
      { o: 102.9, h: 103, l: 101.2, c: 101.3 },
      { o: 101.3, h: 103, l: 101.25, c: 102.95 },
      { o: 102.95, h: 104.5, l: 102.9, c: 104.4 }
      // breakout = 104.4 — neckline = 103
    ],
    annotations: [
      { type: "level", price: 101, color: "#94a3b8", label: "TROUGH", dash: true },
      { type: "level", price: 103, color: "#fbbf24", label: "NECKLINE 103" },
      { type: "level", price: 105, color: "#5eead4", label: "TARGET 105 (+2.0 pattern height)", dash: true }
    ],
    verdict: { label: "MIN TARGET = PATTERN HEIGHT", type: "info" },
    caption: "Pattern height = neckline - trough = 2.0pt. Project UP from neckline: 103 + 2.0 = 105. Most patterns extend further."
  },
  {
    title: "ATR CHECK \u2014 midpoint must be 1.5x current ATR or wider",
    candles: [
      { o: 105, h: 105.3, l: 104.7, c: 105 },
      { o: 105, h: 105.4, l: 102, c: 102.1 },
      // big drop = wide ATR
      { o: 102.1, h: 102.3, l: 100, c: 100.2 },
      { o: 100.2, h: 102.5, l: 100.15, c: 102.4 },
      { o: 102.4, h: 102.5, l: 100, c: 100.2 },
      { o: 100.2, h: 102.4, l: 100.15, c: 102.3 },
      { o: 102.3, h: 104, l: 102.25, c: 103.9 }
    ],
    annotations: [
      { type: "level", price: 102.5, color: "#fbbf24", label: "NECKLINE" },
      { type: "level", price: 100, color: "#94a3b8", label: "TROUGH" },
      { type: "level", price: 101.25, color: "#22c55e", label: "MIDPOINT \u2014 1.8x ATR \u2713", dash: true }
    ],
    verdict: { label: "PASSES ATR CHECK", type: "good" },
    caption: "Midpoint distance from entry = 1.8x current ATR. Wider than the noise band. Stop is safe to use."
  },
  {
    title: "ATR FAIL \u2014 tight pattern, midpoint too close, default to BELOW trough",
    candles: [
      { o: 100, h: 100.4, l: 99.6, c: 100 },
      { o: 100, h: 100.3, l: 99.4, c: 99.5 },
      // tight ATR
      { o: 99.5, h: 99.7, l: 99, c: 99.1 },
      { o: 99.1, h: 99.7, l: 99.05, c: 99.65 },
      { o: 99.65, h: 99.7, l: 99, c: 99.1 },
      { o: 99.1, h: 99.65, l: 99.05, c: 99.6 },
      { o: 99.6, h: 100.2, l: 99.55, c: 100.15 }
    ],
    annotations: [
      { type: "level", price: 99.7, color: "#fbbf24", label: "NECKLINE" },
      { type: "level", price: 99, color: "#94a3b8", label: "TROUGH" },
      { type: "level", price: 99.35, color: "#ef4444", label: "MIDPOINT TOO TIGHT (0.7x ATR)", dash: true },
      { type: "level", price: 98.85, color: "#22c55e", label: "USE BELOW-TROUGH STOP", dash: true }
    ],
    verdict: { label: "GO DEEPER WITH STOP", type: "warn" },
    caption: "When midpoint is below 1.5x ATR, the noise band will eat it. Default to below the second trough every time."
  }
];
export {
  charts
};
