// Teaching unit 9: Mark the wick, not the body — the absolute extreme is the line in the sand.
export const charts = [
  {
    title: 'Mark the wick — the absolute extreme',
    candles: [
      { o: 7498, h: 7500, l: 7497, c: 7499 },
      { o: 7499, h: 7503, l: 7498, c: 7502 },
      { o: 7502, h: 7509, l: 7501, c: 7505 },
      { o: 7505, h: 7506, l: 7502, c: 7503 },
      { o: 7503, h: 7504, l: 7500, c: 7501 },
    ],
    annotations: [
      { type: 'pivot', at: { i: 2, side: 'high' }, color: '#FFB44A', label: 'circle the WICK tip — 7509' },
      { type: 'level', price: 7509, color: '#FFB44A', dash: true, label: 'the line in the sand' },
    ],
    verdict: { label: 'Swing point = the absolute high or low', type: 'good' },
    caption: 'Circle the very tip of the wick — the absolute extreme. That is where the swing point is.',
  },
  {
    title: 'Body marking misses the break',
    candles: [
      { o: 7502, h: 7509, l: 7501, c: 7505 },
      { o: 7505, h: 7506, l: 7502, c: 7503 },
      { o: 7503, h: 7504, l: 7500, c: 7501 },
      { o: 7501, h: 7508, l: 7500, c: 7506 },
      { o: 7506, h: 7507, l: 7503, c: 7504 },
    ],
    annotations: [
      { type: 'level', price: 7505, color: '#FF3D5A', dash: true, label: 'BODY high 7505 — looks broken' },
      { type: 'level', price: 7509, color: '#00D9A0', label: 'WICK high 7509 — NOT broken' },
      { type: 'arrow', at: { i: 3, price: 7508 }, direction: 'down', color: '#FF3D5A', label: 'fakeout' },
    ],
    verdict: { label: 'Body marking gives you false breaks', type: 'bad' },
    caption: 'Price poked above the body high but not the wick high — body marking would call that a break.',
  },
  {
    title: 'The wick is the line in the sand',
    candles: [
      { o: 7502, h: 7509, l: 7501, c: 7505 },
      { o: 7505, h: 7506, l: 7502, c: 7503 },
      { o: 7503, h: 7504, l: 7500, c: 7501 },
      { o: 7501, h: 7507, l: 7500, c: 7506 },
      { o: 7506, h: 7513, l: 7505, c: 7512 },
    ],
    annotations: [
      { type: 'level', price: 7509, color: '#00D9A0', label: 'WICK high 7509' },
      { type: 'arrow', at: { i: 4, price: 7513 }, direction: 'up', color: '#00D9A0', label: 'beyond the wick = real break' },
    ],
    verdict: { label: '"Beyond" is measured to the wick', type: 'good' },
    caption: 'Structure breaks when price gets BEYOND the prior point — and price includes the wick.',
  },
  {
    title: 'Body close = conviction, a different job',
    candles: [
      { o: 7504, h: 7506, l: 7503, c: 7505 },
      { o: 7505, h: 7509, l: 7504, c: 7508 },
      { o: 7508, h: 7510, l: 7507, c: 7509 },
      { o: 7509, h: 7515, l: 7508, c: 7514 },
      { o: 7514, h: 7517, l: 7513, c: 7516 },
    ],
    annotations: [
      { type: 'level', price: 7509, color: '#FFB44A', label: 'wick marks the level' },
      { type: 'arrow', at: { i: 3, price: 7514 }, direction: 'up', color: '#00D9A0', label: 'CLOSE beyond = conviction' },
    ],
    verdict: { label: 'Wick marks the line, close confirms the break', type: 'good' },
    caption: 'Two jobs: the wick marks where the line is, the body close says it broke with conviction.',
  },
];
