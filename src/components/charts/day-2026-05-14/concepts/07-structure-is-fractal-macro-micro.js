// Teaching unit 7: Structure is fractal — macro sets direction, micro sets timing.
export const charts = [
  {
    title: 'A 2-min higher low is real — and 2-min sized',
    candles: [
      { o: 2856.0, h: 2857.0, l: 2855.0, c: 2855.5 },
      { o: 2855.5, h: 2856.0, l: 2854.0, c: 2855.0 },
      { o: 2855.0, h: 2857.5, l: 2854.5, c: 2857.0 },
      { o: 2857.0, h: 2858.0, l: 2856.0, c: 2856.5 },
      { o: 2856.5, h: 2859.0, l: 2856.0, c: 2858.5 },
      { o: 2858.5, h: 2860.0, l: 2858.0, c: 2859.5 },
    ],
    annotations: [
      { type: 'pivot', at: { i: 1, side: 'low' }, color: '#22D3EE', label: 'low' },
      { type: 'pivot', at: { i: 3, side: 'low' }, color: '#00D9A0', label: 'higher low' },
    ],
    verdict: { label: 'Real structure — just a 2-minute-sized move', type: 'info' },
    caption: 'A 2-min higher low is not fake. It is real — at 2-minute scale. That is the whole point.',
  },
  {
    title: 'It does NOT flip a 15-min downtrend',
    candles: [
      { o: 2872.0, h: 2873.0, l: 2870.0, c: 2870.5 },
      { o: 2870.5, h: 2871.0, l: 2866.0, c: 2866.5 },
      { o: 2866.5, h: 2867.5, l: 2862.0, c: 2862.5 },
      { o: 2862.5, h: 2864.5, l: 2862.0, c: 2864.0 },
      { o: 2864.0, h: 2865.0, l: 2863.0, c: 2863.5 },
      { o: 2863.5, h: 2864.0, l: 2858.0, c: 2858.5 },
      { o: 2858.5, h: 2859.0, l: 2854.0, c: 2854.5 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 2873.0 }, to: { i: 6, price: 2859.0 }, color: '#FF3D5A', label: 'macro downtrend' },
      { type: 'pivot', at: { i: 3, side: 'low' }, color: '#00D9A0', label: 'micro higher low' },
    ],
    verdict: { label: 'Right structure, wrong scale', type: 'bad' },
    caption: 'A micro higher low inside a macro downtrend never flips it — it was not built to.',
  },
  {
    title: 'Mark only the OBVIOUS swings',
    candles: [
      { o: 2854.0, h: 2855.0, l: 2853.5, c: 2854.5 },
      { o: 2854.5, h: 2858.0, l: 2854.0, c: 2857.5 },
      { o: 2857.5, h: 2862.0, l: 2857.0, c: 2861.5 },
      { o: 2861.5, h: 2862.5, l: 2858.5, c: 2859.0 },
      { o: 2859.0, h: 2860.0, l: 2855.5, c: 2856.0 },
      { o: 2856.0, h: 2857.0, l: 2853.0, c: 2853.5 },
      { o: 2853.5, h: 2858.0, l: 2853.0, c: 2857.5 },
      { o: 2857.5, h: 2863.0, l: 2857.0, c: 2862.5 },
    ],
    annotations: [
      { type: 'pivot', at: { i: 2, side: 'high' }, color: '#FFB44A', label: 'obvious' },
      { type: 'pivot', at: { i: 5, side: 'low' }, color: '#FFB44A', label: 'obvious' },
    ],
    verdict: { label: 'If you have to squint, it is noise', type: 'good' },
    caption: 'Mark the swings that jump out instantly with clear separation. The rest is noise.',
  },
  {
    title: 'Wiggles time the click — they do not vote',
    candles: [
      { o: 2856.0, h: 2858.0, l: 2855.5, c: 2857.5 },
      { o: 2857.5, h: 2860.0, l: 2857.0, c: 2859.5 },
      { o: 2859.5, h: 2860.5, l: 2858.5, c: 2859.0 },
      { o: 2859.0, h: 2860.0, l: 2857.5, c: 2858.0 },
      { o: 2858.0, h: 2862.0, l: 2857.5, c: 2861.5 },
      { o: 2861.5, h: 2864.0, l: 2861.0, c: 2863.5 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 2855.5 }, to: { i: 5, price: 2864.0 }, color: '#00D9A0', label: 'macro = direction' },
      { type: 'pivot', at: { i: 3, side: 'low' }, color: '#00D9A0', label: 'micro = timing' },
      { type: 'arrow', at: { i: 4, price: 2858.0 }, direction: 'up', color: '#00D9A0' },
    ],
    verdict: { label: 'Macro sets direction, micro times the click', type: 'good' },
    caption: 'Let the macro decide which way. Let the micro decide when. Never the other way around.',
  },
];
