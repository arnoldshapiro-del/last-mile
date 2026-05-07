// Teaching unit 1: Where should the stop go on a double bottom?
export const charts = [
  {
    title: 'Hard stop at MIDPOINT — between neckline & second trough',
    candles: [
      { o: 100, h: 100.5, l: 95, c: 95.5 },     // drop into 1st trough
      { o: 95.5, h: 96.2, l: 95.0, c: 95.2 },
      { o: 95.2, h: 98.5, l: 95.0, c: 98.0 },   // bounce to neckline
      { o: 98.0, h: 99.0, l: 97.8, c: 98.3 },
      { o: 98.3, h: 98.5, l: 96.5, c: 96.8 },   // pullback
      { o: 96.8, h: 97.0, l: 95.4, c: 95.6 },   // 2nd trough forming
      { o: 95.6, h: 96.0, l: 95.2, c: 95.8 },
      { o: 95.8, h: 97.5, l: 95.7, c: 97.4 },   // bounce
      { o: 97.4, h: 99.5, l: 97.3, c: 99.2 },   // neckline test
      { o: 99.2, h: 101.5, l: 99.0, c: 101.2 }, // breakout
    ],
    annotations: [
      { type: 'level', price: 99.0, color: '#fbbf24', label: 'NECKLINE 99.00', dash: false },
      { type: 'level', price: 95.2, color: '#a78bfa', label: '2nd TROUGH 95.20' },
      { type: 'level', price: 97.1, color: '#22c55e', label: 'STOP @ MIDPOINT 97.10', dash: true },
      { type: 'arrow', at: { i: 9, price: 99.5 }, direction: 'up', color: '#22c55e', label: 'ENTRY' },
    ],
    verdict: { label: 'VALID — best R:R', type: 'good' },
    caption: 'Stop at midpoint sits above the noise band but below the breakout line. Clean R:R, no tight-stop slippage.',
  },
  {
    title: 'Stop BELOW the second trough — wider but bulletproof',
    candles: [
      { o: 100, h: 100.5, l: 95, c: 95.5 },
      { o: 95.5, h: 96.5, l: 95.0, c: 95.3 },
      { o: 95.3, h: 98.4, l: 95.2, c: 98.1 },
      { o: 98.1, h: 99.0, l: 97.9, c: 98.4 },
      { o: 98.4, h: 98.6, l: 96.4, c: 96.7 },
      { o: 96.7, h: 96.9, l: 95.3, c: 95.4 },
      { o: 95.4, h: 96.0, l: 95.1, c: 95.7 },
      { o: 95.7, h: 97.5, l: 95.6, c: 97.4 },
      { o: 97.4, h: 99.4, l: 97.3, c: 99.1 },
      { o: 99.1, h: 101.0, l: 99.0, c: 100.7 },
    ],
    annotations: [
      { type: 'level', price: 99.0, color: '#fbbf24', label: 'NECKLINE' },
      { type: 'level', price: 94.8, color: '#22c55e', label: 'STOP @ 94.80 (below 2nd trough)', dash: true },
      { type: 'arrow', at: { i: 9, price: 99.3 }, direction: 'up', color: '#22c55e', label: 'ENTRY' },
    ],
    verdict: { label: 'VALID — bulletproof but wider', type: 'good' },
    caption: 'Wider stop costs R:R but survives all noise. Pick this if midpoint is too tight for ATR.',
  },
  {
    title: 'Tight stop RIGHT BELOW second trough — gets hit by noise 61.5% of the time',
    candles: [
      { o: 100, h: 100.5, l: 95, c: 95.5 },
      { o: 95.5, h: 96.2, l: 95.0, c: 95.3 },
      { o: 95.3, h: 98.3, l: 95.2, c: 98.0 },
      { o: 98.0, h: 98.8, l: 97.8, c: 98.3 },
      { o: 98.3, h: 98.5, l: 96.4, c: 96.7 },
      { o: 96.7, h: 96.9, l: 95.2, c: 95.3 },
      { o: 95.3, h: 95.7, l: 94.95, c: 95.0 },  // wick hits the tight stop!
      { o: 95.0, h: 95.5, l: 94.9, c: 95.4 },
      { o: 95.4, h: 97.2, l: 95.3, c: 97.0 },
      { o: 97.0, h: 99.0, l: 96.9, c: 98.7 },
    ],
    annotations: [
      { type: 'level', price: 99.0, color: '#fbbf24', label: 'NECKLINE' },
      { type: 'level', price: 95.0, color: '#ef4444', label: 'TIGHT STOP @ 95.00 — HIT', dash: true },
      { type: 'arrow', at: { i: 6, price: 95.0 }, direction: 'down', color: '#ef4444', label: 'STOPPED OUT' },
    ],
    verdict: { label: 'STOP TOO TIGHT — noise eats it', type: 'bad' },
    caption: "Bulkowski: tight stops near recent lows get hit 61.5% of the time within a month. Pattern would have worked.",
  },
  {
    title: 'Mental exit on NECKLINE-CLOSE-BELOW — fires before stop',
    candles: [
      { o: 100, h: 100.3, l: 95, c: 95.5 },
      { o: 95.5, h: 96.2, l: 95.0, c: 95.3 },
      { o: 95.3, h: 98.4, l: 95.2, c: 98.0 },
      { o: 98.0, h: 99.2, l: 97.9, c: 98.7 },
      { o: 98.7, h: 99.0, l: 96.5, c: 96.7 },
      { o: 96.7, h: 96.9, l: 95.4, c: 95.6 },
      { o: 95.6, h: 96.0, l: 95.3, c: 95.8 },
      { o: 95.8, h: 97.0, l: 95.7, c: 96.9 },
      { o: 96.9, h: 99.0, l: 96.8, c: 98.9 },   // approach
      { o: 98.9, h: 99.0, l: 96.5, c: 96.7 },   // CLOSE BELOW NECKLINE — exit
      { o: 96.7, h: 97.0, l: 94.0, c: 94.3 },   // pattern dies
    ],
    annotations: [
      { type: 'level', price: 99.0, color: '#fbbf24', label: 'NECKLINE 99.00' },
      { type: 'arrow', at: { i: 9, price: 96.7 }, direction: 'down', color: '#fbbf24', label: 'EXIT — close below' },
    ],
    verdict: { label: 'MENTAL EXIT FIRES', type: 'warn' },
    caption: 'Any candle CLOSING below the neckline = exit immediately. Saves 2 points vs. waiting for hard stop to hit.',
  },
  {
    title: 'ATR CHECK — midpoint distance is 1.8x ATR — VALID setup',
    candles: [
      { o: 100, h: 100.5, l: 92, c: 92.5 },     // big drop, large ATR
      { o: 92.5, h: 93.5, l: 92.0, c: 93.0 },
      { o: 93.0, h: 96.5, l: 92.8, c: 96.2 },
      { o: 96.2, h: 97.0, l: 95.8, c: 96.5 },
      { o: 96.5, h: 96.8, l: 93.5, c: 93.8 },
      { o: 93.8, h: 94.0, l: 92.3, c: 92.5 },
      { o: 92.5, h: 93.5, l: 92.2, c: 93.2 },
      { o: 93.2, h: 95.5, l: 93.0, c: 95.3 },
      { o: 95.3, h: 97.5, l: 95.2, c: 97.2 },
    ],
    annotations: [
      { type: 'level', price: 96.8, color: '#fbbf24', label: 'NECKLINE' },
      { type: 'level', price: 92.3, color: '#a78bfa', label: '2nd TROUGH' },
      { type: 'level', price: 94.5, color: '#22c55e', label: 'MIDPOINT (2.3pt = 1.8x ATR)', dash: true },
      { type: 'arrow', at: { i: 8, price: 96.9 }, direction: 'up', color: '#22c55e', label: 'ENTRY' },
    ],
    verdict: { label: 'PASSES ATR CHECK', type: 'good' },
    caption: 'Midpoint is 1.8x current ATR — wider than the noise band. Use the midpoint stop confidently.',
  },
  {
    title: 'ATR CHECK FAILS — midpoint is 0.7x ATR — go BELOW second trough',
    candles: [
      { o: 100, h: 100.4, l: 98.5, c: 98.7 },   // small ATR
      { o: 98.7, h: 99.0, l: 98.4, c: 98.5 },
      { o: 98.5, h: 99.5, l: 98.4, c: 99.3 },
      { o: 99.3, h: 99.6, l: 99.0, c: 99.4 },
      { o: 99.4, h: 99.5, l: 98.6, c: 98.7 },
      { o: 98.7, h: 98.9, l: 98.4, c: 98.5 },
      { o: 98.5, h: 98.8, l: 98.3, c: 98.6 },
      { o: 98.6, h: 99.4, l: 98.5, c: 99.3 },
      { o: 99.3, h: 100.0, l: 99.2, c: 99.9 },
    ],
    annotations: [
      { type: 'level', price: 99.6, color: '#fbbf24', label: 'NECKLINE' },
      { type: 'level', price: 98.3, color: '#a78bfa', label: '2nd TROUGH' },
      { type: 'level', price: 98.95, color: '#ef4444', label: 'MIDPOINT TOO TIGHT (0.7x ATR)', dash: true },
      { type: 'level', price: 98.0, color: '#22c55e', label: 'USE THIS STOP — below trough', dash: true },
    ],
    verdict: { label: 'MIDPOINT FAILS — use deeper stop', type: 'warn' },
    caption: 'When midpoint is below 1.5x ATR, the noise band will eat it. Default to below the second trough every time.',
  },
  {
    title: 'Bulkowski stat: 61.5% of tight stops are hit — even on winning patterns',
    candles: [
      { o: 100, h: 100.5, l: 95, c: 95.5 },
      { o: 95.5, h: 96.0, l: 95.0, c: 95.4 },
      { o: 95.4, h: 98.4, l: 95.3, c: 98.0 },
      { o: 98.0, h: 98.8, l: 97.9, c: 98.3 },
      { o: 98.3, h: 98.4, l: 96.5, c: 96.6 },
      { o: 96.6, h: 96.8, l: 95.2, c: 95.4 },
      { o: 95.4, h: 95.7, l: 94.95, c: 95.0 },  // tight stop hit by 1-3% throwback
      { o: 95.0, h: 95.4, l: 94.9, c: 95.2 },
      { o: 95.2, h: 97.0, l: 95.1, c: 96.9 },
      { o: 96.9, h: 99.0, l: 96.8, c: 98.8 },
      { o: 98.8, h: 102.0, l: 98.6, c: 101.7 }, // pattern would have worked
    ],
    annotations: [
      { type: 'zone', topPrice: 95.5, bottomPrice: 94.5, color: 'rgba(239, 68, 68, 0.12)', label: '1-3% throwback zone — eats tight stops' },
      { type: 'level', price: 99.0, color: '#fbbf24', label: 'NECKLINE' },
      { type: 'arrow', at: { i: 6, price: 95.0 }, direction: 'down', color: '#ef4444', label: 'STOPPED' },
    ],
    verdict: { label: 'PATTERN WORKED — STOP DIDN\'T', type: 'bad' },
    caption: 'Throwback to 1-3% below the neckline is the most common winning pattern behavior. Tight stops bleed traders.',
  },
  {
    title: 'Throwback test — winning pattern, midpoint stop survives the 2% dip',
    candles: [
      { o: 100, h: 100.5, l: 95, c: 95.5 },
      { o: 95.5, h: 96.2, l: 95.0, c: 95.3 },
      { o: 95.3, h: 98.5, l: 95.2, c: 98.2 },
      { o: 98.2, h: 99.0, l: 97.9, c: 98.5 },
      { o: 98.5, h: 98.7, l: 96.5, c: 96.7 },
      { o: 96.7, h: 96.9, l: 95.3, c: 95.4 },
      { o: 95.4, h: 95.9, l: 95.0, c: 95.7 },
      { o: 95.7, h: 97.4, l: 95.6, c: 97.3 },
      { o: 97.3, h: 99.5, l: 97.2, c: 99.2 },   // breakout
      { o: 99.2, h: 100.0, l: 96.8, c: 97.0 },  // throwback to 97 (2%) — midpoint holds!
      { o: 97.0, h: 98.5, l: 96.9, c: 98.3 },
      { o: 98.3, h: 102.0, l: 98.2, c: 101.5 },
    ],
    annotations: [
      { type: 'level', price: 99.0, color: '#fbbf24', label: 'NECKLINE' },
      { type: 'level', price: 97.1, color: '#22c55e', label: 'MIDPOINT STOP — held', dash: true },
      { type: 'badge', at: { i: 9, price: 96.95 }, text: 'THROWBACK', color: '#a78bfa' },
    ],
    verdict: { label: 'MIDPOINT SURVIVES THROWBACK', type: 'good' },
    caption: 'Throwbacks routinely test 1-3% past the neckline. The midpoint sits just above that zone — survives, then continuation.',
  },
];
