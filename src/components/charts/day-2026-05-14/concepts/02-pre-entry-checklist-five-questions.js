// Teaching unit 2: The pre-entry checklist — five questions before the click.
export const charts = [
  {
    title: 'Q1 — how many candles into the move?',
    candles: [
      { o: 7488, h: 7493, l: 7486, c: 7491 },
      { o: 7491, h: 7503, l: 7490, c: 7502 },
      { o: 7502, h: 7506, l: 7501, c: 7505 },
      { o: 7505, h: 7508, l: 7503, c: 7504 },
      { o: 7504, h: 7507, l: 7499, c: 7500 },
      { o: 7500, h: 7507, l: 7499, c: 7506 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 1, price: 7503 }, direction: 'up', color: '#00D9A0', label: 'candle 1 — clean' },
      { type: 'arrow', at: { i: 5, price: 7506 }, direction: 'down', color: '#FF3D5A', label: 'candle 4+ — missed it' },
    ],
    verdict: { label: '3+ candles in = you missed the entry', type: 'bad' },
    caption: 'Three or more strong candles already printed means the clean entry is gone. Wait or pass.',
  },
  {
    title: 'Q3 — where does a logical stop go?',
    candles: [
      { o: 7491, h: 7503, l: 7490, c: 7502 },
      { o: 7502, h: 7506, l: 7501, c: 7505 },
      { o: 7505, h: 7508, l: 7503, c: 7504 },
      { o: 7504, h: 7507, l: 7499, c: 7500 },
      { o: 7500, h: 7507, l: 7499, c: 7506 },
    ],
    annotations: [
      { type: 'level', price: 7509, color: '#FFB44A', label: 'T1 — realistic target' },
      { type: 'level', price: 7506, color: '#FF3D5A', label: 'entry 7506' },
      { type: 'level', price: 7493, color: '#4A9EFF', dash: true, label: 'stop = where structure says wrong' },
    ],
    verdict: { label: 'Stop from structure, R:R to T1 not T3', type: 'warn' },
    caption: 'The stop goes where the trade is wrong — not where the dollar pain feels tolerable.',
  },
  {
    title: 'Q5 — is a reversal signal firing?',
    candles: [
      { o: 7500, h: 7503, l: 7499, c: 7502 },
      { o: 7502, h: 7506, l: 7501, c: 7505 },
      { o: 7505, h: 7509, l: 7504, c: 7506 },
      { o: 7506, h: 7507, l: 7503, c: 7504 },
      { o: 7504, h: 7505, l: 7500, c: 7501 },
    ],
    annotations: [
      { type: 'badge', at: { i: 2, price: 7510 }, color: '#FF3D5A', text: 'EVENING STAR' },
      { type: 'pivot', at: { i: 2, side: 'high' }, color: '#FF3D5A', label: 'rejection' },
      { type: 'arrow', at: { i: 3, price: 7504 }, direction: 'down', color: '#FF3D5A' },
    ],
    verdict: { label: 'Reversal signal at your entry = stand down', type: 'bad' },
    caption: 'An Evening Star at the highs is the market saying the one-way move is over.',
  },
  {
    title: 'Five gates — the 10:22 entry failed all five',
    candles: [
      { o: 7488, h: 7493, l: 7486, c: 7491 },
      { o: 7491, h: 7503, l: 7490, c: 7502 },
      { o: 7502, h: 7506, l: 7501, c: 7505 },
      { o: 7505, h: 7508, l: 7503, c: 7504 },
      { o: 7504, h: 7507, l: 7499, c: 7500 },
      { o: 7500, h: 7509, l: 7499, c: 7506 },
      { o: 7506, h: 7507, l: 7503, c: 7504 },
    ],
    annotations: [
      { type: 'level', price: 7493, color: '#00D9A0', dash: true, label: 'range high — entry was far above' },
      { type: 'badge', at: { i: 5, price: 7511 }, color: '#FF3D5A', text: 'EVENING STAR' },
      { type: 'arrow', at: { i: 5, price: 7506 }, direction: 'down', color: '#FF3D5A', label: '5 of 5 gates failed' },
    ],
    verdict: { label: 'The checklist would have stopped the click', type: 'bad' },
    caption: 'Candles in, entry vs range, R:R, volume, reversal signal — all five said no.',
  },
];
