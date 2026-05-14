// Teaching unit 13: In an uptrend, the default question is 'where do I get LONG'.
export const charts = [
  {
    title: 'M2K uptrend — and one red candle',
    candles: [
      { o: 2860.0, h: 2861.5, l: 2859.5, c: 2861.0 },
      { o: 2861.0, h: 2863.5, l: 2860.5, c: 2863.0 },
      { o: 2863.0, h: 2865.5, l: 2862.5, c: 2865.0 },
      { o: 2865.0, h: 2868.0, l: 2864.5, c: 2867.5 },
      { o: 2867.5, h: 2871.0, l: 2867.0, c: 2870.5 },
      { o: 2870.5, h: 2874.0, l: 2870.0, c: 2873.5 },
      { o: 2873.5, h: 2874.0, l: 2871.5, c: 2872.0 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 2859.5 }, to: { i: 5, price: 2870.0 }, color: '#00D9A0', label: 'steep, intact uptrend' },
      { type: 'arrow', at: { i: 6, price: 2872.0 }, direction: 'down', color: '#FF3D5A', label: 'one red candle' },
    ],
    verdict: { label: 'Clean uptrend — HH, HL, riding the MAs', type: 'good' },
    caption: 'The 11:27 M2K chart: a strong uptrend from 2860 to 2874, and exactly one red candle.',
  },
  {
    title: 'One red candle is the whole bearish case',
    candles: [
      { o: 2867.5, h: 2871.0, l: 2867.0, c: 2870.5 },
      { o: 2870.5, h: 2874.0, l: 2870.0, c: 2873.5 },
      { o: 2873.5, h: 2874.0, l: 2871.5, c: 2872.0 },
    ],
    annotations: [
      { type: 'pivot', at: { i: 2, side: 'high' }, color: '#FFB44A', label: 'not a confirmed lower high' },
      { type: 'arrow', at: { i: 2, price: 2872.0 }, direction: 'down', color: '#FF3D5A', label: 'one candle — that is all' },
    ],
    verdict: { label: 'No confirmed lower high, no break of structure', type: 'warn' },
    caption: 'One red candle is not a swing high, not a break of structure — it is not a reason to short.',
  },
  {
    title: 'The menu with the long deleted',
    candles: [
      { o: 2867.5, h: 2871.0, l: 2867.0, c: 2870.5 },
      { o: 2870.5, h: 2874.0, l: 2870.0, c: 2873.5 },
      { o: 2873.5, h: 2874.0, l: 2871.5, c: 2872.0 },
      { o: 2872.0, h: 2873.0, l: 2870.5, c: 2871.0 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 2, price: 2872.0 }, direction: 'down', color: '#FF3D5A', label: 'short now?' },
      { type: 'arrow', at: { i: 3, price: 2871.0 }, direction: 'down', color: '#FF3D5A', label: 'short the bounce?' },
    ],
    verdict: { label: 'Three options, all short = bias talking', type: 'bad' },
    caption: 'When every option in your head is a way to get short, that is a conclusion shopping for evidence.',
  },
  {
    title: 'The trade that was actually there',
    candles: [
      { o: 2870.5, h: 2874.0, l: 2870.0, c: 2873.5 },
      { o: 2873.5, h: 2874.0, l: 2871.5, c: 2872.0 },
      { o: 2872.0, h: 2872.5, l: 2870.0, c: 2870.5 },
      { o: 2870.5, h: 2871.5, l: 2870.0, c: 2871.0 },
      { o: 2871.0, h: 2875.0, l: 2870.5, c: 2874.5 },
    ],
    annotations: [
      { type: 'pivot', at: { i: 3, side: 'low' }, color: '#00D9A0', label: 'higher low' },
      { type: 'arrow', at: { i: 4, price: 2871.0 }, direction: 'up', color: '#00D9A0', label: 'the LONG was the trade' },
    ],
    verdict: { label: 'In an uptrend, the question is where to go LONG', type: 'good' },
    caption: 'The highest-probability trade — wait for a higher low, go long — was removed from the menu.',
  },
];
