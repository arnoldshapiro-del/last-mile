// Teaching unit 14: The relief-seeking entry — 2871 was the high again.
export const charts = [
  {
    title: '2871 — the high again',
    candles: [
      { o: 2865.0, h: 2868.0, l: 2864.5, c: 2867.5 },
      { o: 2867.5, h: 2871.0, l: 2867.0, c: 2870.5 },
      { o: 2870.5, h: 2874.0, l: 2870.0, c: 2873.5 },
      { o: 2873.5, h: 2874.0, l: 2871.0, c: 2871.5 },
      { o: 2871.5, h: 2872.0, l: 2868.0, c: 2868.5 },
    ],
    annotations: [
      { type: 'level', price: 2871.0, color: '#FF3D5A', label: 'ENTERED LONG 16 @ 2871' },
      { type: 'badge', at: { i: 3, price: 2875.5 }, color: '#FF3D5A', text: 'BEAR ENGULF' },
      { type: 'arrow', at: { i: 4, price: 2868.5 }, direction: 'down', color: '#FF3D5A', label: 'price drops' },
    ],
    verdict: { label: 'Right direction, wrong location — again', type: 'bad' },
    caption: 'Long 16 at 2871 — up near the high, right at the bearish engulfing label, as price stalled.',
  },
  {
    title: 'Same shape as the 7506 chase',
    candles: [
      { o: 2864.0, h: 2867.0, l: 2863.5, c: 2866.5 },
      { o: 2866.5, h: 2870.0, l: 2866.0, c: 2869.5 },
      { o: 2869.5, h: 2873.0, l: 2869.0, c: 2872.5 },
      { o: 2872.5, h: 2874.0, l: 2871.0, c: 2871.5 },
      { o: 2871.5, h: 2872.0, l: 2868.0, c: 2868.5 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 3, price: 2871.5 }, direction: 'down', color: '#FF3D5A', label: 'M2K 2871 = MES 7506' },
    ],
    verdict: { label: 'Same error, 80 minutes later, new symbol', type: 'bad' },
    caption: 'Entering at the top of the run — the identical mistake as the 10:22 MES chase.',
  },
  {
    title: 'Half the lesson kept, half thrown away',
    candles: [
      { o: 2867.0, h: 2870.0, l: 2866.5, c: 2869.5 },
      { o: 2869.5, h: 2873.0, l: 2869.0, c: 2872.5 },
      { o: 2872.5, h: 2874.0, l: 2871.0, c: 2871.5 },
    ],
    annotations: [
      { type: 'badge', at: { i: 1, price: 2875.0 }, color: '#00D9A0', text: 'KEPT: GO LONG' },
      { type: 'badge', at: { i: 2, price: 2868.5 }, color: '#FF3D5A', text: 'DROPPED: WAIT FOR HL' },
    ],
    verdict: { label: 'The entry was relief-seeking, not analysis', type: 'bad' },
    caption: '"Trend is up, go long" got kept. "Wait for the higher low" — the location half — got dropped.',
  },
  {
    title: 'The wait WAS the setup — the higher low',
    candles: [
      { o: 2871.5, h: 2872.0, l: 2868.0, c: 2868.5 },
      { o: 2868.5, h: 2869.0, l: 2867.0, c: 2867.5 },
      { o: 2867.5, h: 2869.5, l: 2867.0, c: 2869.0 },
      { o: 2869.0, h: 2871.0, l: 2868.5, c: 2870.5 },
      { o: 2870.5, h: 2874.0, l: 2870.0, c: 2873.5 },
    ],
    annotations: [
      { type: 'pivot', at: { i: 1, side: 'low' }, color: '#00D9A0', label: 'higher low — the real entry' },
      { type: 'arrow', at: { i: 2, price: 2867.5 }, direction: 'up', color: '#00D9A0', label: 'enter HERE, not 2871' },
    ],
    verdict: { label: 'The discomfort of waiting is the price of admission', type: 'good' },
    caption: 'The unbearable wait IS the setup forming — the higher low was the entry, not 2871.',
  },
];
