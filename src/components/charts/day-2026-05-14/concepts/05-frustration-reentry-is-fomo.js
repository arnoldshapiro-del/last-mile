// Teaching unit 5: Frustration re-entry is FOMO re-entry — same error, new emotion.
export const charts = [
  {
    title: 'Same price, two emotions',
    candles: [
      { o: 7500, h: 7507, l: 7499, c: 7506 },
      { o: 7506, h: 7507, l: 7500, c: 7501 },
      { o: 7501, h: 7502, l: 7495, c: 7496 },
      { o: 7496, h: 7497, l: 7488, c: 7490 },
      { o: 7490, h: 7500, l: 7489, c: 7499 },
      { o: 7499, h: 7507, l: 7498, c: 7506 },
    ],
    annotations: [
      { type: 'level', price: 7506, color: '#FF3D5A', label: '7506 — clicked twice' },
      { type: 'arrow', at: { i: 0, price: 7506 }, direction: 'down', color: '#FF3D5A', label: 'FOMO' },
      { type: 'arrow', at: { i: 5, price: 7506 }, direction: 'down', color: '#FF3D5A', label: 'FRUSTRATION' },
    ],
    verdict: { label: 'Different emotion, identical mistake', type: 'bad' },
    caption: 'First click was FOMO, second was frustration — both bought the same overhead supply.',
  },
  {
    title: 'The seller shelf — Bearish Engulfing #15',
    candles: [
      { o: 7503, h: 7506, l: 7502, c: 7505 },
      { o: 7505, h: 7509, l: 7504, c: 7506 },
      { o: 7506, h: 7507, l: 7501, c: 7502 },
      { o: 7502, h: 7503, l: 7497, c: 7498 },
      { o: 7498, h: 7505, l: 7497, c: 7504 },
      { o: 7504, h: 7507, l: 7503, c: 7505 },
    ],
    annotations: [
      { type: 'zone', topPrice: 7509, bottomPrice: 7506, color: 'rgba(255, 61, 90, 0.12)', label: 'overhead supply 7506-7509' },
      { type: 'badge', at: { i: 1, price: 7511 }, color: '#FF3D5A', text: 'BEAR ENGULF #15' },
      { type: 'arrow', at: { i: 5, price: 7505 }, direction: 'up', color: '#FF3D5A', label: 'climbing INTO supply' },
    ],
    verdict: { label: 'A level that rejected once is a seller shelf', type: 'bad' },
    caption: 'Sellers won a fight at 7506-7509 once. Buying back up into it is buying into supply.',
  },
  {
    title: 'Anticipate vs prove',
    candles: [
      { o: 7500, h: 7503, l: 7499, c: 7502 },
      { o: 7502, h: 7506, l: 7501, c: 7505 },
      { o: 7505, h: 7507, l: 7503, c: 7504 },
      { o: 7504, h: 7506, l: 7501, c: 7503 },
      { o: 7503, h: 7505, l: 7500, c: 7501 },
    ],
    annotations: [
      { type: 'level', price: 7506, color: '#FF3D5A', label: '7506 — the shelf' },
      { type: 'arrow', at: { i: 1, price: 7505 }, direction: 'up', color: '#FF3D5A', label: 'anticipating = the mistake' },
    ],
    verdict: { label: 'Anticipating the level is the error', type: 'bad' },
    caption: 'Market-buying a green candle straight into the shelf is the FOMO chase under a new label.',
  },
  {
    title: 'The real re-entry — close above and hold',
    candles: [
      { o: 7503, h: 7506, l: 7502, c: 7505 },
      { o: 7505, h: 7512, l: 7504, c: 7511 },
      { o: 7511, h: 7512, l: 7508, c: 7509 },
      { o: 7509, h: 7510, l: 7507, c: 7508 },
      { o: 7508, h: 7515, l: 7507, c: 7514 },
    ],
    annotations: [
      { type: 'level', price: 7509, color: '#00D9A0', label: '7509 — shelf, now floor' },
      { type: 'arrow', at: { i: 1, price: 7511 }, direction: 'up', color: '#00D9A0', label: 'CLOSE above the shelf' },
      { type: 'pivot', at: { i: 3, side: 'low' }, color: '#00D9A0', label: 'holds above' },
    ],
    verdict: { label: 'Close above, hold above, then enter', type: 'good' },
    caption: 'Make the shelf prove itself: a close above, a pullback that holds, then the entry.',
  },
];
