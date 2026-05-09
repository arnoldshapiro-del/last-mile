
// Bear Flag — pattern_type concept gallery
export const charts = [
  {
    title: 'TEXTBOOK BEAR FLAG — pole down, drift up, breakdown',
    candles: [
      { o: 105, h: 105.3, l: 104.7, c: 105.0 },
      { o: 105.0, h: 105.1, l: 103.5, c: 103.6 },
      { o: 103.6, h: 103.8, l: 102.3, c: 102.4 },
      { o: 102.4, h: 102.5, l: 101.1, c: 101.2 },
      { o: 101.2, h: 102.2, l: 101.15, c: 102.1 },  // flag drift up
      { o: 102.1, h: 102.5, l: 102.0, c: 102.4 },
      { o: 102.4, h: 102.7, l: 102.2, c: 102.6 },
      { o: 102.6, h: 102.7, l: 100.9, c: 101.0 },   // breakdown
    ],
    annotations: [
      { type: 'zone', topPrice: 105.0, bottomPrice: 101.2, color: 'rgba(255, 61, 90, 0.07)', label: 'POLE' },
      { type: 'zone', topPrice: 102.7, bottomPrice: 101.15, color: 'rgba(254, 226, 226, 0.07)', label: 'FLAG' },
      { type: 'arrow', at: { i: 7, price: 101.0 }, direction: 'down', color: '#22c55e', label: 'ENTRY' },
    ],
    verdict: { label: 'TEXTBOOK SETUP', type: 'good' },
    caption: 'Sustained bearish pole, shallow drift up on contracting volume, breakdown on the close. Mirror of the bull flag.',
  },
  {
    title: 'HEALTHY BEAR FLAG — flag stays in lower half of pole',
    candles: [
      { o: 105, h: 105.3, l: 104.7, c: 105.0 },
      { o: 105.0, h: 105.1, l: 103.0, c: 103.1 },
      { o: 103.1, h: 103.2, l: 101.0, c: 101.1 },
      { o: 101.1, h: 101.2, l: 99.5, c: 99.6 },
      { o: 99.6, h: 100.5, l: 99.55, c: 100.4 },
      { o: 100.4, h: 100.7, l: 100.0, c: 100.6 },
      { o: 100.6, h: 100.9, l: 100.3, c: 100.7 },
      { o: 100.7, h: 100.9, l: 99.0, c: 99.1 },
    ],
    annotations: [
      { type: 'level', price: 102.3, color: '#fbbf24', label: '50% LINE — flag holds below', dash: true },
      { type: 'arrow', at: { i: 7, price: 99.1 }, direction: 'down', color: '#22c55e', label: 'ENTRY' },
    ],
    verdict: { label: 'FLAG BELOW 50% — VALID', type: 'good' },
    caption: 'Flag high (100.9) holds well below the 50% line (102.3). Sellers still in control. Take the breakdown.',
  },
  {
    title: 'BEAR FLAG STOP — over flag high',
    candles: [
      { o: 105, h: 105.3, l: 104.7, c: 105.0 },
      { o: 105.0, h: 105.1, l: 103.0, c: 103.1 },
      { o: 103.1, h: 103.2, l: 101.0, c: 101.1 },
      { o: 101.1, h: 101.2, l: 99.5, c: 99.6 },
      { o: 99.6, h: 100.7, l: 99.55, c: 100.6 },
      { o: 100.6, h: 100.9, l: 100.0, c: 100.7 },
      { o: 100.7, h: 100.95, l: 100.2, c: 100.3 },
      { o: 100.3, h: 100.5, l: 99.0, c: 99.1 },
    ],
    annotations: [
      { type: 'level', price: 99.1, color: '#22c55e', label: 'ENTRY 99.1', dash: false },
      { type: 'level', price: 101.0, color: '#ef4444', label: 'STOP — 1 tick over flag high (100.95)', dash: true },
    ],
    verdict: { label: 'STOP STRUCTURE-BASED', type: 'good' },
    caption: 'Stop sits one tick over flag high. Same logic as bull flag, opposite side. Wick noise excluded.',
  },
  {
    title: 'BEAR FLAG TARGET — pole length projected DOWN from breakdown',
    candles: [
      { o: 105, h: 105.3, l: 104.7, c: 105.0 },     // pole top
      { o: 105.0, h: 105.1, l: 103.0, c: 103.1 },
      { o: 103.1, h: 103.2, l: 101.0, c: 101.1 },
      { o: 101.1, h: 101.2, l: 99.5, c: 99.6 },     // pole bottom = 99.5 → length = 5.5
      { o: 99.6, h: 100.5, l: 99.55, c: 100.4 },
      { o: 100.4, h: 100.7, l: 100.0, c: 100.6 },
      { o: 100.6, h: 100.9, l: 100.3, c: 100.7 },
      { o: 100.7, h: 100.9, l: 99.0, c: 99.1 },     // breakdown = 99.1
    ],
    annotations: [
      { type: 'level', price: 99.1, color: '#22c55e', label: 'BREAKDOWN 99.1' },
      { type: 'level', price: 93.6, color: '#5eead4', label: 'TARGET 93.6 (-5.5 pole length)', dash: true },
      { type: 'level', price: 101.0, color: '#ef4444', label: 'STOP', dash: true },
    ],
    verdict: { label: 'R:R 2.9:1', type: 'good' },
    caption: 'Pole = 5.5 points. Project DOWN from breakdown (99.1 - 5.5 = 93.6). Risk 1.9, reward 5.5 = R:R 2.9:1.',
  },
  {
    title: 'FAILED BEAR FLAG — flag breaks above 50%, abort',
    candles: [
      { o: 105, h: 105.3, l: 104.7, c: 105.0 },
      { o: 105.0, h: 105.1, l: 103.5, c: 103.6 },
      { o: 103.6, h: 103.8, l: 102.3, c: 102.4 },
      { o: 102.4, h: 102.5, l: 101.1, c: 101.2 },
      { o: 101.2, h: 102.5, l: 101.15, c: 102.4 },
      { o: 102.4, h: 103.6, l: 102.3, c: 103.5 }, // CLOSE ABOVE 50% (103.1)
      { o: 103.5, h: 104.5, l: 103.4, c: 104.4 },
      { o: 104.4, h: 105.5, l: 104.3, c: 105.4 },
    ],
    annotations: [
      { type: 'level', price: 103.1, color: '#ef4444', label: '50% LINE — BROKEN' },
      { type: 'badge', at: { i: 5, price: 103.5 }, text: 'CANCEL', color: '#ef4444' },
    ],
    verdict: { label: 'FLAG DEAD — DO NOT ENTER', type: 'bad' },
    caption: 'Flag closed above the 50% line. Sellers no longer in control. Do not short the breakdown — it is now a reversal.',
  },
  {
    title: 'BEAR FLAG IN A RANGE — same shape, opposite outcome',
    candles: [
      { o: 100, h: 100.5, l: 99.4, c: 100.4 },
      { o: 100.4, h: 100.7, l: 99.6, c: 99.7 },
      { o: 99.7, h: 100.0, l: 99.4, c: 99.5 },
      { o: 99.5, h: 100.4, l: 99.4, c: 100.3 },
      { o: 100.3, h: 100.5, l: 100.0, c: 100.1 },
      { o: 100.1, h: 100.4, l: 99.85, c: 100.0 },
      { o: 100.0, h: 100.2, l: 99.4, c: 99.5 }, // micro breakdown
      { o: 99.5, h: 100.6, l: 99.4, c: 100.5 }, // immediate fade
    ],
    annotations: [
      { type: 'level', price: 99.4, color: '#fbbf24', label: 'RANGE FLOOR' },
      { type: 'arrow', at: { i: 6, price: 99.5 }, direction: 'down', color: '#ef4444', label: 'FALSE BREAK' },
    ],
    verdict: { label: 'WRONG CONTEXT', type: 'bad' },
    caption: 'Same shape in a ranging session. Range floors hold. Bear flag setups die in balance — pass.',
  },
];
