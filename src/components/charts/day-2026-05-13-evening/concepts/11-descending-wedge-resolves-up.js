// Teaching unit 11: Descending wedges typically resolve UPWARD (~68% per Bulkowski).
export const charts = [
  {
    title: 'Anatomy of a descending wedge — converging lower highs and lower lows',
    candles: [
      { o: 2860, h: 2862, l: 2859.5, c: 2861.5 },
      { o: 2861.5, h: 2862, l: 2858, c: 2858.5 },
      { o: 2858.5, h: 2858.8, l: 2856, c: 2856.2 },
      { o: 2856.2, h: 2858.5, l: 2856, c: 2858.2 },
      { o: 2858.2, h: 2858.5, l: 2856.2, c: 2856.5 },
      { o: 2856.5, h: 2856.8, l: 2855.8, c: 2856 },
      { o: 2856, h: 2857.5, l: 2855.8, c: 2857.2 },
      { o: 2857.2, h: 2857.5, l: 2856.2, c: 2856.5 },
      { o: 2856.5, h: 2857, l: 2856.2, c: 2856.8 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 2862 }, to: { i: 8, price: 2857.5 }, color: '#FF3D5A', label: 'Upper line — falling', dash: false },
      { type: 'trendline', from: { i: 2, price: 2856 }, to: { i: 8, price: 2856.2 }, color: '#FF3D5A', label: 'Lower line — falling but flatter', dash: false },
      { type: 'badge', at: { i: 5, price: 2854 }, color: '#FBBF24', text: 'Lines CONVERGING = compression' },
    ],
    verdict: { label: 'Both lines slope down, converging = wedge', type: 'warn' },
    caption: 'A descending (or "falling") wedge has lower highs AND lower lows, but the two trendlines are CONVERGING — coming together over time. As compression builds, sellers run out of supply, and buying pressure pops price out the upper side.',
  },
  {
    title: 'Bulkowski statistics — descending wedge resolves UP ~68% of the time',
    candles: [
      { o: 2856, h: 2857, l: 2855.5, c: 2856.5 },
      { o: 2856.5, h: 2856.8, l: 2855, c: 2855.2 },
      { o: 2855.2, h: 2855.5, l: 2854, c: 2854.5 },
      { o: 2854.5, h: 2855, l: 2853.5, c: 2854 },
    ],
    annotations: [
      { type: 'badge', at: { i: 0, price: 2860 }, color: '#00D9A0', text: '↑ UP resolution: ~68%' },
      { type: 'badge', at: { i: 1, price: 2860 }, color: '#FF3D5A', text: '↓ DOWN resolution: ~32%' },
      { type: 'badge', at: { i: 2, price: 2851 }, color: '#FBBF24', text: 'Shorting wedge = taking 32% side' },
      { type: 'badge', at: { i: 3, price: 2851 }, color: '#FBBF24', text: 'Long on upper-line break = 68% side' },
    ],
    verdict: { label: 'Edge is LONG on the break — counter-intuitive but real', type: 'good' },
    caption: 'Per Bulkowski\'s tested data, descending wedges resolve upward roughly 68-70% of the time. Shorting inside the wedge is taking the 30-32% side of the probability distribution. Visually bearish, statistically bullish. This is one of the most counter-intuitive patterns in TA.',
  },
  {
    title: 'How to trade a descending wedge — wait for the upper-line break',
    candles: [
      { o: 2860, h: 2861, l: 2859.5, c: 2860.5 },
      { o: 2860.5, h: 2860.8, l: 2858, c: 2858.2 },
      { o: 2858.2, h: 2858.5, l: 2856, c: 2856.5 },
      { o: 2856.5, h: 2858, l: 2856.2, c: 2857.8 },
      { o: 2857.8, h: 2858, l: 2856.5, c: 2856.8 },
      { o: 2856.8, h: 2857, l: 2855.8, c: 2856 },
      { o: 2856, h: 2858, l: 2855.8, c: 2857.8 },
      { o: 2857.8, h: 2860, l: 2857.5, c: 2859.8 },
      { o: 2859.8, h: 2861.5, l: 2859.5, c: 2861.2 },
      { o: 2861.2, h: 2862.5, l: 2860.8, c: 2862 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 2861 }, to: { i: 6, price: 2858 }, color: '#94a3b8', label: 'Upper wedge — broken', dash: true },
      { type: 'trendline', from: { i: 2, price: 2856 }, to: { i: 6, price: 2855.8 }, color: '#94a3b8', label: 'Lower wedge', dash: true },
      { type: 'arrow', at: { i: 7, price: 2856.5 }, direction: 'up', color: '#00D9A0', label: 'LONG — body close above upper line' },
      { type: 'level', price: 2856.5, color: '#FF3D5A', label: 'STOP — back inside wedge', dash: true },
    ],
    verdict: { label: 'Long on the break, stop back inside the wedge', type: 'good' },
    caption: 'The proper trade for a descending wedge: wait for a body close ABOVE the upper line, enter long on that close, stop just back inside the wedge. The breakout is often violent because the compression has built up energy. Targets at the next resistance level.',
  },
];
