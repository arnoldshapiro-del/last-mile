// Teaching unit 11: Failed counter-trend signals confirm the trend.
export const charts = [
  {
    title: 'Bearish Engulfing #38 — fired and failed',
    candles: [
      { o: 7497, h: 7501, l: 7496, c: 7500 },
      { o: 7500, h: 7506, l: 7499, c: 7505 },
      { o: 7505, h: 7506, l: 7501, c: 7502 },
      { o: 7502, h: 7504, l: 7500, c: 7503 },
      { o: 7503, h: 7510, l: 7502, c: 7509 },
      { o: 7509, h: 7514, l: 7508, c: 7513 },
    ],
    annotations: [
      { type: 'badge', at: { i: 2, price: 7508 }, color: '#FF3D5A', text: 'BEAR ENGULF #38' },
      { type: 'arrow', at: { i: 4, price: 7509 }, direction: 'up', color: '#00D9A0', label: 'failed — kept climbing' },
    ],
    verdict: { label: 'The reversal signal produced no reversal', type: 'warn' },
    caption: 'Bearish Engulfing #38 fired near 7505 — and price just kept climbing right past it.',
  },
  {
    title: 'Bearish Engulfing #39 — fired and failed',
    candles: [
      { o: 7513, h: 7518, l: 7512, c: 7517 },
      { o: 7517, h: 7523, l: 7516, c: 7522 },
      { o: 7522, h: 7524, l: 7519, c: 7520 },
      { o: 7520, h: 7521, l: 7517, c: 7518 },
      { o: 7518, h: 7526, l: 7517, c: 7525 },
      { o: 7525, h: 7529, l: 7524, c: 7528 },
    ],
    annotations: [
      { type: 'badge', at: { i: 2, price: 7527 }, color: '#FF3D5A', text: 'BEAR ENGULF #39' },
      { type: 'arrow', at: { i: 4, price: 7525 }, direction: 'up', color: '#00D9A0', label: 'failed again — 7528' },
    ],
    verdict: { label: 'Two counter-trend signals, two failures', type: 'warn' },
    caption: 'Bearish Engulfing #39 fired near 7525 — and price ran straight on to 7528.',
  },
  {
    title: 'The failure IS the confirmation',
    candles: [
      { o: 7500, h: 7506, l: 7499, c: 7505 },
      { o: 7505, h: 7510, l: 7504, c: 7509 },
      { o: 7509, h: 7516, l: 7508, c: 7515 },
      { o: 7515, h: 7522, l: 7514, c: 7521 },
      { o: 7521, h: 7529, l: 7520, c: 7528 },
    ],
    annotations: [
      { type: 'badge', at: { i: 0, price: 7508 }, color: '#FF3D5A', text: '#38 fail' },
      { type: 'badge', at: { i: 3, price: 7524 }, color: '#FF3D5A', text: '#39 fail' },
      { type: 'trendline', from: { i: 0, price: 7499 }, to: { i: 4, price: 7520 }, color: '#00D9A0', label: 'each failure confirms UP' },
    ],
    verdict: { label: 'Failed counter-trend signals confirm the trend', type: 'good' },
    caption: 'A reversal signal is a hypothesis. When it keeps failing, the failure is the trend talking.',
  },
  {
    title: 'A pause before continuation, not a reversal',
    candles: [
      { o: 7508, h: 7514, l: 7507, c: 7513 },
      { o: 7513, h: 7515, l: 7510, c: 7511 },
      { o: 7511, h: 7513, l: 7509, c: 7512 },
      { o: 7512, h: 7519, l: 7511, c: 7518 },
      { o: 7518, h: 7524, l: 7517, c: 7523 },
    ],
    annotations: [
      { type: 'badge', at: { i: 1, price: 7517 }, color: '#FF3D5A', text: 'BEAR SIGNAL' },
      { type: 'arrow', at: { i: 3, price: 7512 }, direction: 'up', color: '#00D9A0', label: 'continuation' },
    ],
    verdict: { label: 'No follow-through = pause, not reversal', type: 'good' },
    caption: 'A bearish engulfing in a strong uptrend with no follow-through is just a pause before more up.',
  },
];
