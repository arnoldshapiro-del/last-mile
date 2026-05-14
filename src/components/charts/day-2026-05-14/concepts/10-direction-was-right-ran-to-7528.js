// Teaching unit 10: The proof — your direction was right, and it ran to 7528.
export const charts = [
  {
    title: 'The same breakout, 90 minutes later',
    candles: [
      { o: 7483, h: 7486, l: 7482, c: 7485 },
      { o: 7485, h: 7491, l: 7484, c: 7490 },
      { o: 7490, h: 7496, l: 7488, c: 7495 },
      { o: 7495, h: 7497, l: 7492, c: 7493 },
      { o: 7493, h: 7503, l: 7492, c: 7502 },
      { o: 7502, h: 7508, l: 7500, c: 7507 },
      { o: 7507, h: 7510, l: 7504, c: 7505 },
      { o: 7505, h: 7516, l: 7504, c: 7515 },
      { o: 7515, h: 7522, l: 7513, c: 7521 },
      { o: 7521, h: 7525, l: 7518, c: 7520 },
      { o: 7520, h: 7529, l: 7519, c: 7528 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 7482 }, to: { i: 10, price: 7519 }, color: '#00D9A0', label: 'clean staircase up' },
      { type: 'level', price: 7528, color: '#00D9A0', dash: true, label: '7528 — where it ran' },
    ],
    verdict: { label: 'The breakout never failed — it ran 22 points', type: 'good' },
    caption: 'The MES 5-minute, 90 minutes on: a clean staircase of higher highs and lows to 7528.75.',
  },
  {
    title: 'Right direction, wrong location',
    candles: [
      { o: 7493, h: 7503, l: 7492, c: 7502 },
      { o: 7502, h: 7508, l: 7500, c: 7507 },
      { o: 7507, h: 7510, l: 7504, c: 7505 },
      { o: 7505, h: 7516, l: 7504, c: 7515 },
      { o: 7515, h: 7522, l: 7513, c: 7521 },
      { o: 7521, h: 7529, l: 7519, c: 7528 },
    ],
    annotations: [
      { type: 'level', price: 7506, color: '#FFB44A', dash: true, label: 'entry 7506 — direction right' },
      { type: 'arrow', at: { i: 1, price: 7507 }, direction: 'down', color: '#FFB44A', label: 'wrong location' },
      { type: 'arrow', at: { i: 5, price: 7528 }, direction: 'up', color: '#00D9A0', label: '+22 pts' },
    ],
    verdict: { label: 'The thesis was right the whole time', type: 'good' },
    caption: 'Long was correct. The location at 7506 was the only thing wrong with the trade.',
  },
  {
    title: 'The bias flip — from passenger to fighting it',
    candles: [
      { o: 7505, h: 7510, l: 7504, c: 7509 },
      { o: 7509, h: 7516, l: 7508, c: 7515 },
      { o: 7515, h: 7521, l: 7513, c: 7520 },
      { o: 7520, h: 7525, l: 7518, c: 7524 },
      { o: 7524, h: 7529, l: 7522, c: 7528 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 1, price: 7515 }, direction: 'down', color: '#FF3D5A', label: '"looking for a double top"' },
      { type: 'arrow', at: { i: 3, price: 7524 }, direction: 'down', color: '#FF3D5A', label: 'fighting the trend' },
    ],
    verdict: { label: 'Being right, then fighting your own call', type: 'bad' },
    caption: 'Instead of "uptrend intact, buy the pullback," the read flipped to hunting the reversal.',
  },
  {
    title: 'The trade was the next pullback to a higher low',
    candles: [
      { o: 7505, h: 7510, l: 7504, c: 7509 },
      { o: 7509, h: 7513, l: 7506, c: 7507 },
      { o: 7507, h: 7509, l: 7505, c: 7508 },
      { o: 7508, h: 7516, l: 7507, c: 7515 },
      { o: 7515, h: 7522, l: 7514, c: 7521 },
      { o: 7521, h: 7529, l: 7520, c: 7528 },
    ],
    annotations: [
      { type: 'pivot', at: { i: 2, side: 'low' }, color: '#00D9A0', label: 'higher low' },
      { type: 'arrow', at: { i: 3, price: 7508 }, direction: 'up', color: '#00D9A0', label: 'join the trend HERE' },
    ],
    verdict: { label: 'Stay a passenger — buy the next higher low', type: 'good' },
    caption: 'When your thesis is working, join it on the next pullback — do not hunt its reversal.',
  },
];
