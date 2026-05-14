// Teaching unit 8: The three-timeframe hierarchy — 15m where, 5m what, 2m when.
export const charts = [
  {
    title: '15-minute — WHERE: the bias',
    candles: [
      { o: 7460, h: 7466, l: 7458, c: 7464 },
      { o: 7464, h: 7472, l: 7462, c: 7470 },
      { o: 7470, h: 7478, l: 7468, c: 7476 },
      { o: 7476, h: 7488, l: 7474, c: 7486 },
      { o: 7486, h: 7506, l: 7484, c: 7504 },
      { o: 7504, h: 7520, l: 7502, c: 7518 },
      { o: 7518, h: 7530, l: 7516, c: 7528 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 7458 }, to: { i: 6, price: 7516 }, color: '#00D9A0', label: 'day is leaning UP' },
    ],
    verdict: { label: 'One question: which way is the day leaning?', type: 'info' },
    caption: 'The 15-minute answers WHERE — the bias for the whole day. That is its only job.',
  },
  {
    title: '5-minute — WHAT: the structure',
    candles: [
      { o: 7486, h: 7490, l: 7484, c: 7489 },
      { o: 7489, h: 7497, l: 7488, c: 7496 },
      { o: 7496, h: 7499, l: 7492, c: 7493 },
      { o: 7493, h: 7495, l: 7490, c: 7494 },
      { o: 7494, h: 7503, l: 7493, c: 7502 },
      { o: 7502, h: 7506, l: 7500, c: 7501 },
      { o: 7501, h: 7503, l: 7498, c: 7499 },
      { o: 7499, h: 7510, l: 7498, c: 7509 },
    ],
    annotations: [
      { type: 'pivot', at: { i: 2, side: 'high' }, color: '#FFB44A' },
      { type: 'pivot', at: { i: 3, side: 'low' }, color: '#00D9A0', label: 'higher low' },
      { type: 'pivot', at: { i: 6, side: 'low' }, color: '#00D9A0', label: 'higher low' },
    ],
    verdict: { label: 'The higher highs and lows you trade around', type: 'info' },
    caption: 'The 5-minute answers WHAT — the structure. For scalping speed, this is your setup chart.',
  },
  {
    title: '2-minute — WHEN: entry timing only',
    candles: [
      { o: 7499, h: 7500, l: 7497, c: 7498 },
      { o: 7498, h: 7499, l: 7496, c: 7497 },
      { o: 7497, h: 7498, l: 7495, c: 7496 },
      { o: 7496, h: 7501, l: 7495, c: 7500 },
      { o: 7500, h: 7504, l: 7499, c: 7503 },
    ],
    annotations: [
      { type: 'pivot', at: { i: 2, side: 'low' }, color: '#00D9A0', label: 'higher low holds' },
      { type: 'arrow', at: { i: 3, price: 7500 }, direction: 'up', color: '#00D9A0', label: 'trigger — click' },
    ],
    verdict: { label: 'The 2-min never defines trend — ever', type: 'warn' },
    caption: 'The 2-minute answers WHEN — only the click, inside a setup the 5-minute already approved.',
  },
  {
    title: 'All three must agree',
    candles: [
      { o: 7493, h: 7495, l: 7491, c: 7494 },
      { o: 7494, h: 7498, l: 7493, c: 7497 },
      { o: 7497, h: 7499, l: 7495, c: 7496 },
      { o: 7496, h: 7501, l: 7495, c: 7500 },
      { o: 7500, h: 7507, l: 7499, c: 7506 },
      { o: 7506, h: 7512, l: 7505, c: 7511 },
    ],
    annotations: [
      { type: 'badge', at: { i: 1, price: 7501 }, color: '#00D9A0', text: '15m UP' },
      { type: 'badge', at: { i: 2, price: 7493 }, color: '#00D9A0', text: '5m HL HOLDS' },
      { type: 'arrow', at: { i: 3, price: 7500 }, direction: 'up', color: '#00D9A0', label: '2m trigger' },
    ],
    verdict: { label: 'Top-down — trade only on full agreement', type: 'good' },
    caption: '15m where, 5m what, 2m when. When they conflict, stand down. Lock your three pre-session.',
  },
];
