// Teaching unit 1: Swing Highs and Lows vs Single Candles
// Concept — only swing points count; individual candles are noise.
export const charts = [
  {
    title: 'REAL swing low — 2-bar pivot, higher lows on BOTH sides',
    candles: [
      { o: 100.0, h: 100.3, l: 99.4, c: 99.6 },
      { o: 99.6,  h: 99.7,  l: 98.9, c: 99.0 },
      { o: 99.0,  h: 99.1,  l: 98.2, c: 98.4 },   // higher low before pivot
      { o: 98.4,  h: 98.6,  l: 97.8, c: 98.0 },   // higher low before pivot
      { o: 98.0,  h: 98.1,  l: 97.0, c: 97.2 },   // SWING LOW — lowest of the cluster
      { o: 97.2,  h: 98.0,  l: 97.1, c: 97.9 },   // higher low after pivot
      { o: 97.9,  h: 98.6,  l: 97.8, c: 98.4 },   // higher low after pivot
      { o: 98.4,  h: 99.2,  l: 98.3, c: 99.0 },
      { o: 99.0,  h: 99.9,  l: 98.9, c: 99.7 },
      { o: 99.7,  h: 100.5, l: 99.6, c: 100.3 },
    ],
    annotations: [
      { type: 'level', price: 97.0, color: '#22c55e', label: 'SWING LOW 97.00 — structural pivot', dash: false },
      { type: 'badge', at: { i: 4, price: 96.7 }, text: 'PIVOT', color: '#22c55e' },
      { type: 'arrow', at: { i: 2, price: 98.0 }, direction: 'down', color: '#94a3b8', label: '↓ higher low' },
      { type: 'arrow', at: { i: 6, price: 98.6 }, direction: 'down', color: '#94a3b8', label: '↓ higher low' },
    ],
    verdict: { label: 'VALID swing — counts as structure', type: 'good' },
    caption: 'Two higher lows on each side of the pivot. This is the kind of swing low that defines structural support — the market tested it, rejected it, walked away.',
  },
  {
    title: 'REAL 1-bar swing low — minimum acceptable pivot',
    candles: [
      { o: 101.0, h: 101.2, l: 100.5, c: 100.6 },
      { o: 100.6, h: 100.7, l: 100.0, c: 100.1 },
      { o: 100.1, h: 100.2, l: 99.4,  c: 99.5 },   // higher low
      { o: 99.5,  h: 99.6,  l: 98.6,  c: 98.8 },   // SWING LOW
      { o: 98.8,  h: 99.5,  l: 98.7,  c: 99.4 },   // higher low (immediately after)
      { o: 99.4,  h: 100.0, l: 99.3,  c: 99.9 },
      { o: 99.9,  h: 100.6, l: 99.8,  c: 100.5 },
      { o: 100.5, h: 101.4, l: 100.4, c: 101.2 },
      { o: 101.2, h: 102.0, l: 101.1, c: 101.8 },
    ],
    annotations: [
      { type: 'level', price: 98.6, color: '#22c55e', label: 'SWING LOW 98.60', dash: false },
      { type: 'badge', at: { i: 3, price: 98.3 }, text: 'PIVOT', color: '#22c55e' },
    ],
    verdict: { label: 'VALID — minimum 1-bar pivot', type: 'good' },
    caption: 'One higher low on each side of the pivot is the minimum standard. Acceptable but less reliable than the 2-bar pivot.',
  },
  {
    title: 'FAKE "lower low" — single candle dip in an uptrend is NOISE',
    candles: [
      { o: 100.0, h: 100.5, l: 99.7, c: 100.4 },
      { o: 100.4, h: 101.0, l: 100.3, c: 100.9 },
      { o: 100.9, h: 101.4, l: 100.7, c: 101.2 },
      { o: 101.2, h: 101.5, l: 100.5, c: 100.7 },   // "lower low"? NO — just one candle
      { o: 100.7, h: 101.6, l: 100.6, c: 101.5 },
      { o: 101.5, h: 102.0, l: 101.3, c: 101.9 },
      { o: 101.9, h: 102.5, l: 101.7, c: 102.3 },
      { o: 102.3, h: 102.9, l: 102.1, c: 102.7 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 3, price: 100.5 }, direction: 'up', color: '#ef4444', label: 'NOT a swing — one candle' },
      { type: 'zone', topPrice: 102.0, bottomPrice: 99.6, color: 'rgba(34, 197, 94, 0.08)', label: 'UPTREND STILL INTACT' },
    ],
    verdict: { label: 'NOISE — uptrend unbroken', type: 'bad' },
    caption: 'New traders call this a "lower low." It is not. No higher low formed on either side. Reading this as broken structure makes you sell every bottom.',
  },
  {
    title: 'SQUINT TEST PASS — pivots visible when candles blur',
    candles: [
      { o: 100.0, h: 100.3, l: 99.6, c: 99.7 },
      { o: 99.7,  h: 99.8,  l: 97.5, c: 97.8 },   // big drop — pivot visible
      { o: 97.8,  h: 98.2,  l: 97.4, c: 98.0 },
      { o: 98.0,  h: 98.8,  l: 97.9, c: 98.6 },
      { o: 98.6,  h: 99.4,  l: 98.5, c: 99.2 },
      { o: 99.2,  h: 99.8,  l: 99.1, c: 99.6 },
      { o: 99.6,  h: 102.4, l: 99.5, c: 102.2 },   // big surge — pivot visible
      { o: 102.2, h: 102.5, l: 101.7, c: 101.9 },
      { o: 101.9, h: 102.1, l: 100.5, c: 100.7 },
      { o: 100.7, h: 100.9, l: 99.9, c: 100.1 },
    ],
    annotations: [
      { type: 'badge', at: { i: 1, price: 97.0 }, text: 'SWING LOW', color: '#22c55e' },
      { type: 'badge', at: { i: 6, price: 102.8 }, text: 'SWING HIGH', color: '#22c55e' },
      { type: 'zone', topPrice: 103.0, bottomPrice: 97.0, color: 'rgba(34, 197, 94, 0.06)', label: 'STRUCTURE TRADING RANGE' },
    ],
    verdict: { label: 'PIVOTS POP', type: 'good' },
    caption: 'Squint — the big peaks and valleys are obvious. Those are your swings. Everything between them is conversation, not structure.',
  },
  {
    title: 'SQUINT TEST FAIL — noisy zigzag, no real swings',
    candles: [
      { o: 100.0, h: 100.4, l: 99.7, c: 100.2 },
      { o: 100.2, h: 100.6, l: 99.9, c: 100.0 },
      { o: 100.0, h: 100.5, l: 99.8, c: 100.4 },
      { o: 100.4, h: 100.7, l: 100.0, c: 100.2 },
      { o: 100.2, h: 100.6, l: 99.9, c: 100.5 },
      { o: 100.5, h: 100.8, l: 100.1, c: 100.3 },
      { o: 100.3, h: 100.7, l: 99.9, c: 100.6 },
      { o: 100.6, h: 100.9, l: 100.2, c: 100.4 },
      { o: 100.4, h: 100.7, l: 100.0, c: 100.6 },
      { o: 100.6, h: 100.8, l: 100.1, c: 100.3 },
    ],
    annotations: [
      { type: 'zone', topPrice: 101.0, bottomPrice: 99.6, color: 'rgba(239, 68, 68, 0.08)', label: 'NOISE BAND — no setup' },
    ],
    verdict: { label: 'NO STRUCTURE — stand aside', type: 'bad' },
    caption: 'Squint — nothing pops. No clear pivots. This is chop, not trend. Trading swing rules here invents structure that does not exist.',
  },
  {
    title: 'THE MISREAD — calling every red candle a "lower low" lost $290',
    candles: [
      { o: 100.0, h: 100.6, l: 99.7, c: 100.5 },
      { o: 100.5, h: 101.1, l: 100.3, c: 101.0 },
      { o: 101.0, h: 101.4, l: 100.4, c: 100.6 },   // misread as "LL" #1
      { o: 100.6, h: 101.3, l: 100.5, c: 101.2 },
      { o: 101.2, h: 101.6, l: 100.8, c: 101.0 },   // misread as "LL" #2
      { o: 101.0, h: 101.8, l: 100.9, c: 101.7 },
      { o: 101.7, h: 102.0, l: 101.0, c: 101.2 },   // misread as "LL" #3
      { o: 101.2, h: 102.3, l: 101.1, c: 102.2 },   // chart continues UP
      { o: 102.2, h: 102.8, l: 102.0, c: 102.7 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 2, price: 100.4 }, direction: 'up', color: '#ef4444', label: 'misread "LL"' },
      { type: 'arrow', at: { i: 4, price: 100.8 }, direction: 'up', color: '#ef4444', label: 'misread "LL"' },
      { type: 'arrow', at: { i: 6, price: 101.0 }, direction: 'up', color: '#ef4444', label: 'misread "LL"' },
      { type: 'badge', at: { i: 8, price: 103.0 }, text: 'TREND UP', color: '#22c55e' },
    ],
    verdict: { label: 'FALSE BEARISH READ — uptrend never broke', type: 'bad' },
    caption: 'Three single-candle pullbacks read as "lower lows." Structure never broke. Shorting into this read produced the $290 MES loss.',
  },
  {
    title: 'REAL bearish structure — LH then LL confirmed',
    candles: [
      { o: 100.0, h: 100.3, l: 99.6, c: 99.7 },
      { o: 99.7,  h: 99.9,  l: 98.5, c: 98.7 },   // swing low #1
      { o: 98.7,  h: 99.5,  l: 98.6, c: 99.4 },   // bounce
      { o: 99.4,  h: 100.4, l: 99.3, c: 100.2 },  // swing high #1
      { o: 100.2, h: 100.3, l: 98.6, c: 98.8 },
      { o: 98.8,  h: 99.0,  l: 97.4, c: 97.6 },   // LL — below prior swing low
      { o: 97.6,  h: 98.3,  l: 97.5, c: 98.2 },
      { o: 98.2,  h: 99.0,  l: 98.0, c: 98.8 },   // LH — below prior swing high
      { o: 98.8,  h: 98.9,  l: 97.3, c: 97.5 },
      { o: 97.5,  h: 97.7,  l: 96.4, c: 96.6 },   // LL #2
    ],
    annotations: [
      { type: 'level', price: 100.4, color: '#94a3b8', label: 'Swing High #1' },
      { type: 'level', price: 98.5, color: '#94a3b8', label: 'Swing Low #1' },
      { type: 'level', price: 99.0, color: '#ef4444', label: 'LH — Lower High confirmed' },
      { type: 'level', price: 97.4, color: '#ef4444', label: 'LL — Lower Low confirmed', dash: true },
      { type: 'badge', at: { i: 9, price: 96.0 }, text: 'BEAR STRUCTURE', color: '#ef4444' },
    ],
    verdict: { label: 'VALID bearish structure — short OK', type: 'good' },
    caption: 'Lower high THEN lower low — both formed from real swings. This is when bear flag shorts qualify. The afternoon $44 winner had this; the morning $290 loser did not.',
  },
];
