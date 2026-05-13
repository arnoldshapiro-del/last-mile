// Teaching unit 6: The Bearish Engulfing #141 — the actual entry signal in the chaos.
export const charts = [
  {
    title: 'The Bearish Engulfing — anatomy of the trigger',
    candles: [
      { o: 2853, h: 2854, l: 2852.5, c: 2853.8 },
      { o: 2853.8, h: 2854, l: 2853.2, c: 2853.5 },
      { o: 2853.5, h: 2854.2, l: 2853.2, c: 2854 },
      { o: 2854, h: 2855.8, l: 2853.5, c: 2855.5 },
      { o: 2855.5, h: 2855.8, l: 2854.8, c: 2855 },
      { o: 2855.5, h: 2856, l: 2853, c: 2853.2 },
    ],
    annotations: [
      { type: 'pivot', at: { i: 4, side: 'high' }, color: '#94a3b8', label: 'Prior small green candle' },
      { type: 'pivot', at: { i: 5, side: 'high' }, color: '#FF3D5A', label: 'BEARISH ENGULFING #141' },
      { type: 'badge', at: { i: 5, price: 2851 }, color: '#FF3D5A', text: 'Opens above prior, closes below prior low' },
    ],
    verdict: { label: 'Bearish engulfing = strongest 2-bar reversal', type: 'good' },
    caption: 'A Bearish Engulfing opens ABOVE the prior candle\'s open and CLOSES below the prior candle\'s low — completely engulfing the prior candle\'s body. At resistance, after multiple pushes up, this is one of the strongest short signals in price action.',
  },
  {
    title: 'The 4 ingredients — all must be present',
    candles: [
      { o: 2853, h: 2854, l: 2852.5, c: 2853.8 },
      { o: 2853.8, h: 2855, l: 2853.5, c: 2854.8 },
      { o: 2854.8, h: 2856, l: 2854.5, c: 2855.5 },
      { o: 2855.5, h: 2855.8, l: 2854.8, c: 2855.2 },
      { o: 2855.2, h: 2856.5, l: 2853, c: 2853.2 },
      { o: 2853.2, h: 2853.5, l: 2851.5, c: 2851.8 },
    ],
    annotations: [
      { type: 'level', price: 2855.5, color: '#FBBF24', label: '① RESISTANCE level', dash: true },
      { type: 'pivot', at: { i: 4, side: 'high' }, color: '#FF3D5A', label: '② Engulfing structure' },
      { type: 'level', price: 2856.7, color: '#FF3D5A', label: '③ STOP — above wick', dash: true },
      { type: 'level', price: 2851.5, color: '#00D9A0', label: '④ TARGET 2853.4 (next support)', dash: true },
    ],
    verdict: { label: '4 of 4 ingredients = valid trade', type: 'good' },
    caption: 'Every Bearish Engulfing trade requires four ingredients: (1) at/near a resistance level, (2) the engulfing candle structure, (3) a clear stop above the wick, (4) a target at next support. All four present = take. Missing any one = pass.',
  },
  {
    title: 'Pattern label vs candle signal — the candle wins',
    candles: [
      { o: 2848, h: 2849, l: 2847.8, c: 2848.5 },
      { o: 2848.5, h: 2852, l: 2848.2, c: 2851.5 },
      { o: 2851.5, h: 2854.8, l: 2851.2, c: 2854.5 },
      { o: 2854.5, h: 2855.2, l: 2853.5, c: 2853.8 },
      { o: 2853.8, h: 2855.5, l: 2853.5, c: 2855.2 },
      { o: 2855.2, h: 2855.5, l: 2853.5, c: 2853.8 },
      { o: 2853.8, h: 2855.5, l: 2853.5, c: 2855.3 },
      { o: 2855.3, h: 2856.5, l: 2853, c: 2853.2 },
    ],
    annotations: [
      { type: 'badge', at: { i: 0, price: 2858 }, color: '#94a3b8', text: 'Is it double top? Triple top? Failed breakout? — DOES NOT MATTER' },
      { type: 'pivot', at: { i: 7, side: 'high' }, color: '#FF3D5A', label: 'Engulfing #141 — TRIGGER' },
      { type: 'arrow', at: { i: 7, price: 2851.5 }, direction: 'down', color: '#00D9A0', label: 'Take the trade — pattern label is secondary' },
    ],
    verdict: { label: 'When pattern is fuzzy, the candle is still the trigger', type: 'good' },
    caption: 'Stop labeling, start reading the candles. A Bearish Engulfing at resistance after multiple pushes up has its OWN short signal — independent of whether the bigger pattern is a textbook double top, triple top, or exhaustion top. The candle is the trade.',
  },
];
