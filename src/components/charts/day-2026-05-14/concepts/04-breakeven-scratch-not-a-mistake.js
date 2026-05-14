// Teaching unit 4: The breakeven scratch is not a mistake — even when price comes back.
export const charts = [
  {
    title: 'The BE scratch — risk removed',
    candles: [
      { o: 7500, h: 7507, l: 7499, c: 7506 },
      { o: 7506, h: 7507, l: 7503, c: 7504 },
      { o: 7504, h: 7505, l: 7500, c: 7501 },
      { o: 7501, h: 7503, l: 7499, c: 7500 },
      { o: 7500, h: 7502, l: 7498, c: 7499 },
    ],
    annotations: [
      { type: 'level', price: 7506, color: '#4A9EFF', label: 'entry / BE stop' },
      { type: 'arrow', at: { i: 0, price: 7506 }, direction: 'up', color: '#4A9EFF' },
      { type: 'arrow', at: { i: 3, price: 7500 }, direction: 'down', color: '#4A9EFF', label: 'stopped flat — no wound' },
    ],
    verdict: { label: 'The BE stop did its only job', type: 'good' },
    caption: 'A bad-location trade got scratched at break-even. Risk removed. That is the system working.',
  },
  {
    title: 'It came back — and that is fine',
    candles: [
      { o: 7506, h: 7507, l: 7503, c: 7504 },
      { o: 7504, h: 7505, l: 7499, c: 7500 },
      { o: 7500, h: 7501, l: 7495, c: 7496 },
      { o: 7496, h: 7497, l: 7483, c: 7485 },
      { o: 7485, h: 7495, l: 7484, c: 7494 },
      { o: 7494, h: 7507, l: 7493, c: 7506 },
      { o: 7506, h: 7518, l: 7505, c: 7517 },
      { o: 7517, h: 7529, l: 7516, c: 7528 },
    ],
    annotations: [
      { type: 'level', price: 7506, color: '#4A9EFF', dash: true, label: 'where you scratched' },
      { type: 'pivot', at: { i: 3, side: 'low' }, color: '#00D9A0' },
      { type: 'arrow', at: { i: 7, price: 7528 }, direction: 'up', color: '#00D9A0', label: 'ran to 7528' },
    ],
    verdict: { label: 'Price returning ≠ the exit was wrong', type: 'warn' },
    caption: 'It pulled back, held, and ran to 7528. The exit still protected a bad-location trade.',
  },
  {
    title: 'The feeling vs the verdict',
    candles: [
      { o: 7506, h: 7507, l: 7503, c: 7504 },
      { o: 7504, h: 7505, l: 7496, c: 7497 },
      { o: 7497, h: 7498, l: 7485, c: 7487 },
      { o: 7487, h: 7497, l: 7486, c: 7496 },
      { o: 7496, h: 7508, l: 7495, c: 7507 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 0, price: 7504 }, direction: 'down', color: '#FF3D5A', label: 'FEELING — I was wrong' },
      { type: 'arrow', at: { i: 4, price: 7507 }, direction: 'up', color: '#00D9A0', label: 'VERDICT — process was right' },
    ],
    verdict: { label: 'Do not let the outcome relabel the process', type: 'good' },
    caption: 'The exit felt wrong and was right. The feeling is the trap — the verdict is the process.',
  },
  {
    title: 'Where the regret leads if you let it',
    candles: [
      { o: 7506, h: 7508, l: 7502, c: 7503 },
      { o: 7503, h: 7504, l: 7496, c: 7497 },
      { o: 7497, h: 7498, l: 7489, c: 7490 },
      { o: 7490, h: 7491, l: 7481, c: 7482 },
      { o: 7482, h: 7483, l: 7472, c: 7473 },
    ],
    annotations: [
      { type: 'level', price: 7506, color: '#FF3D5A', dash: true, label: 'stop you should have honored' },
      { type: 'arrow', at: { i: 4, price: 7473 }, direction: 'down', color: '#FF3D5A', label: 'a scratch becomes a wound' },
    ],
    verdict: { label: '"It came back" teaches you to hold losers', type: 'bad' },
    caption: 'Let regret rewrite a correct exit and next time you hold the loser — that is the real cost.',
  },
];
