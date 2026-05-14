// Teaching unit 6: Candidate vs confirmed swings — the 2-3 candle right-side rule.
export const charts = [
  {
    title: 'A swing high is a CANDIDATE when it prints',
    candles: [
      { o: 2855.0, h: 2856.5, l: 2854.5, c: 2856.0 },
      { o: 2856.0, h: 2858.5, l: 2855.5, c: 2858.0 },
      { o: 2858.0, h: 2861.0, l: 2857.5, c: 2860.5 },
      { o: 2860.5, h: 2863.0, l: 2860.0, c: 2862.5 },
      { o: 2862.5, h: 2864.0, l: 2862.0, c: 2863.0 },
    ],
    annotations: [
      { type: 'pivot', at: { i: 4, side: 'high' }, color: '#FFB44A', label: 'candidate — not confirmed' },
      { type: 'arrow', at: { i: 4, price: 2863.0 }, direction: 'down', color: '#FFB44A', label: '?' },
    ],
    verdict: { label: 'Fresh high = candidate, not a swing yet', type: 'warn' },
    caption: 'The moment a high prints it is only a candidate. It has earned no label yet.',
  },
  {
    title: '2-3 candles on the right confirm it',
    candles: [
      { o: 2855.0, h: 2856.5, l: 2854.5, c: 2856.0 },
      { o: 2856.0, h: 2858.5, l: 2855.5, c: 2858.0 },
      { o: 2858.0, h: 2861.0, l: 2857.5, c: 2860.5 },
      { o: 2860.5, h: 2864.0, l: 2860.0, c: 2862.5 },
      { o: 2862.5, h: 2863.0, l: 2861.0, c: 2861.5 },
      { o: 2861.5, h: 2862.0, l: 2859.5, c: 2860.0 },
      { o: 2860.0, h: 2860.5, l: 2858.0, c: 2858.5 },
    ],
    annotations: [
      { type: 'pivot', at: { i: 3, side: 'high' }, color: '#00D9A0', label: 'CONFIRMED swing high' },
      { type: 'level', price: 2864.0, color: '#00D9A0', dash: true, label: '2864 — now a real level' },
    ],
    verdict: { label: 'Lower highs on the right earn the label', type: 'good' },
    caption: 'Two-three candles with lower highs to its right — now the candidate is a confirmed swing.',
  },
  {
    title: 'The candidate that got invalidated',
    candles: [
      { o: 2862.0, h: 2863.0, l: 2860.5, c: 2861.0 },
      { o: 2861.0, h: 2861.5, l: 2858.0, c: 2858.5 },
      { o: 2858.5, h: 2860.5, l: 2857.5, c: 2860.0 },
      { o: 2860.0, h: 2861.0, l: 2858.5, c: 2859.0 },
      { o: 2859.0, h: 2859.5, l: 2855.0, c: 2855.5 },
      { o: 2855.0, h: 2862.5, l: 2854.5, c: 2862.0 },
      { o: 2862.0, h: 2865.0, l: 2861.5, c: 2864.5 },
    ],
    annotations: [
      { type: 'pivot', at: { i: 2, side: 'high' }, color: '#FFB44A', label: 'you labeled "lower high"' },
      { type: 'badge', at: { i: 5, price: 2866.5 }, color: '#00D9A0', text: 'BULL ENGULF' },
      { type: 'arrow', at: { i: 5, price: 2862.0 }, direction: 'up', color: '#00D9A0', label: 'blew through it' },
    ],
    verdict: { label: 'A candidate, then invalidated — not a misread', type: 'warn' },
    caption: 'The "lower high" near 10:00 was a candidate. The bullish engulfing near 10:40 invalidated it.',
  },
  {
    title: 'Invalidation is information, not a mistake',
    candles: [
      { o: 2858.0, h: 2860.5, l: 2857.5, c: 2860.0 },
      { o: 2860.0, h: 2861.0, l: 2858.5, c: 2859.0 },
      { o: 2859.0, h: 2859.5, l: 2855.0, c: 2855.5 },
      { o: 2855.0, h: 2862.5, l: 2854.5, c: 2862.0 },
      { o: 2862.0, h: 2865.0, l: 2861.5, c: 2864.5 },
      { o: 2864.5, h: 2867.0, l: 2864.0, c: 2866.5 },
    ],
    annotations: [
      { type: 'level', price: 2861.0, color: '#4A9EFF', dash: true, label: 'candidate "lower high"' },
      { type: 'arrow', at: { i: 3, price: 2862.0 }, direction: 'up', color: '#00D9A0', label: 'the break is tradeable' },
    ],
    verdict: { label: 'The break itself is tradeable information', type: 'good' },
    caption: 'You ran a provisional label and the chart updated it. That is the job — not a failure.',
  },
];
