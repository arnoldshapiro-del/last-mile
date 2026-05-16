// Teaching unit 4: Layer 4 — TIMING on the 2-minute chart.
// Two charts: trendline break + lower low (correct entry) vs trendline break alone (Mistake 2).
export const charts = [
  {
    title: 'CORRECT: trendline break + 2-min LOWER LOW close',
    candles: [
      { o: 2848, h: 2852, l: 2847, c: 2851 },
      { o: 2851, h: 2853, l: 2849, c: 2850 },
      { o: 2850, h: 2852, l: 2848, c: 2849 },
      { o: 2849, h: 2851, l: 2846, c: 2847 },
      { o: 2847, h: 2849, l: 2845, c: 2846 },
      { o: 2846, h: 2847, l: 2843, c: 2844 },
      { o: 2844, h: 2845, l: 2841, c: 2842 },
      { o: 2842, h: 2843, l: 2838, c: 2839 },
      { o: 2839, h: 2840, l: 2836, c: 2837 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 2851 }, to: { i: 4, price: 2846 }, color: '#FFB44A', label: '2-min uptrend line' },
      { type: 'arrow', at: { i: 5, price: 2843 }, direction: 'down', color: '#FFB44A', label: 'trendline BREAK (warning, not entry yet)' },
      { type: 'level', price: 2843, color: '#888', dash: true, label: 'prior 2-min low' },
      { type: 'badge', at: { i: 7, price: 2837 }, text: 'LOWER LOW closes — ENTRY', color: '#00D9A0' },
      { type: 'arrow', at: { i: 8, price: 2837 }, direction: 'down', color: '#00D9A0' },
    ],
    verdict: { label: 'Patience for the close = won trade', type: 'good' },
    caption: 'Trendline broke on candle 5. Waited. Candle 7 closed BELOW the prior 2-min low. NOW enter short. Both signals required, in sequence, on the close.',
  },
  {
    title: 'MISTAKE 2: entered on trendline break alone',
    candles: [
      { o: 2848, h: 2852, l: 2847, c: 2851 },
      { o: 2851, h: 2853, l: 2849, c: 2850 },
      { o: 2850, h: 2852, l: 2848, c: 2849 },
      { o: 2849, h: 2851, l: 2846, c: 2847 },
      { o: 2847, h: 2849, l: 2845, c: 2846 },
      { o: 2846, h: 2847, l: 2843, c: 2844 },
      { o: 2844, h: 2851, l: 2843, c: 2849 },
      { o: 2849, h: 2853, l: 2848, c: 2852 },
      { o: 2852, h: 2855, l: 2850, c: 2854 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 2851 }, to: { i: 4, price: 2846 }, color: '#FFB44A' },
      { type: 'arrow', at: { i: 5, price: 2843 }, direction: 'down', color: '#FF3D5A', label: 'entered HERE on break alone' },
      { type: 'level', price: 2851, color: '#FF3D5A', label: 'STOP (was at body, not wick)' },
      { type: 'arrow', at: { i: 7, price: 2853 }, direction: 'up', color: '#FF3D5A', label: 'wicks 2853 — STOPPED' },
      { type: 'badge', at: { i: 8, price: 2856 }, text: 'fake-out: no lower low ever printed', color: '#FF3D5A' },
    ],
    verdict: { label: 'No confirmation = whipsaw loss', type: 'bad' },
    caption: 'Same chart. Entered one candle too early — before any 2-min lower low. Price wicked back through the stop and never made a new low. Classic fake-out cost: full risk on a setup that, with patience, would have stayed alive.',
  },
];
