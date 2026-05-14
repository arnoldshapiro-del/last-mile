// Teaching unit 15: When the trade goes against you — accept the defined loss, never widen the stop.
export const charts = [
  {
    title: 'Down $235 — sitting on the stop',
    candles: [
      { o: 2873.5, h: 2874.0, l: 2871.0, c: 2871.5 },
      { o: 2871.5, h: 2872.0, l: 2869.5, c: 2870.0 },
      { o: 2870.0, h: 2870.5, l: 2868.0, c: 2868.2 },
    ],
    annotations: [
      { type: 'level', price: 2871.0, color: '#4A9EFF', label: 'entry 2871' },
      { type: 'level', price: 2867.0, color: '#FF3D5A', label: 'Stop 2 — $156' },
      { type: 'level', price: 2866.4, color: '#FF3D5A', label: 'Stop 1 — $188' },
      { type: 'arrow', at: { i: 2, price: 2868.2 }, direction: 'down', color: '#FF3D5A', label: 'on the stop, -$235' },
    ],
    verdict: { label: 'The loss is defined and capped — by design', type: 'warn' },
    caption: 'Down $235.50, sitting on Stop 1 and Stop 2. The ATM has the loss capped — that is the job.',
  },
  {
    title: 'Two legal choices',
    candles: [
      { o: 2871.5, h: 2872.0, l: 2869.5, c: 2870.0 },
      { o: 2870.0, h: 2870.5, l: 2868.0, c: 2868.2 },
      { o: 2868.2, h: 2868.5, l: 2866.4, c: 2866.6 },
    ],
    annotations: [
      { type: 'level', price: 2866.4, color: '#4A9EFF', label: 'choice A — let the stop hit' },
      { type: 'arrow', at: { i: 1, price: 2868.2 }, direction: 'down', color: '#4A9EFF', label: 'choice B — exit manually here' },
    ],
    verdict: { label: 'Let it hit, or take it off at the stop level', type: 'info' },
    caption: 'Two legitimate moves on a losing trade — both accept the defined loss. Decide on purpose.',
  },
  {
    title: 'The forbidden move — widening the stop',
    candles: [
      { o: 2870.0, h: 2870.5, l: 2868.0, c: 2868.2 },
      { o: 2868.2, h: 2868.5, l: 2865.0, c: 2865.5 },
      { o: 2865.5, h: 2866.0, l: 2861.0, c: 2861.5 },
      { o: 2861.5, h: 2862.0, l: 2856.0, c: 2856.5 },
    ],
    annotations: [
      { type: 'level', price: 2866.4, color: '#FF3D5A', dash: true, label: 'original stop — abandoned' },
      { type: 'arrow', at: { i: 3, price: 2856.5 }, direction: 'down', color: '#FF3D5A', label: '"give it room" → disaster' },
    ],
    verdict: { label: 'Widening the stop is how accounts die', type: 'bad' },
    caption: '"Maybe it bounces, move the stop down" turns a small defined loss into a real-money disaster.',
  },
  {
    title: 'The ATM is the structure protecting you',
    candles: [
      { o: 2868.2, h: 2870.0, l: 2868.0, c: 2869.5 },
      { o: 2869.5, h: 2872.0, l: 2869.0, c: 2871.5 },
      { o: 2871.5, h: 2873.0, l: 2871.0, c: 2872.6 },
      { o: 2872.6, h: 2874.5, l: 2872.0, c: 2874.0 },
    ],
    annotations: [
      { type: 'level', price: 2866.4, color: '#00D9A0', label: 'stop held — loss stayed capped' },
      { type: 'arrow', at: { i: 1, price: 2869.5 }, direction: 'up', color: '#00D9A0', label: 'then the trend resumed' },
    ],
    verdict: { label: 'Only legal moves: let it hit, BE, or Close All', type: 'good' },
    caption: 'The defined stop is the structure protecting you — never widen it to escape being wrong.',
  },
];
