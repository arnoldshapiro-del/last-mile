// Teaching unit 11: The 6-pattern set — quick visual overview.
export const charts = [
  {
    title: 'The 6 patterns at a glance — open the PDF cheat sheet for details',
    candles: [
      { o: 100, h: 100.2, l: 97, c: 99.8 },
      { o: 99.8, h: 100, l: 99.5, c: 99.7 },
      { o: 99.7, h: 102.5, l: 99.5, c: 102.3 },
      { o: 102.3, h: 102.8, l: 102, c: 102.5 },
      { o: 102.5, h: 102.7, l: 102.1, c: 102.4 },
      { o: 102.4, h: 104.5, l: 102.3, c: 104.3 },
      { o: 104.3, h: 104.5, l: 104.1, c: 104.4 },
      { o: 104.4, h: 105, l: 102, c: 103 },
    ],
    annotations: [
      { type: 'badge', at: { i: 0, price: 100.5 }, color: '#FBBF24', text: 'Pin Bar' },
      { type: 'badge', at: { i: 2, price: 102.8 }, color: '#00D9A0', text: 'Engulf' },
      { type: 'badge', at: { i: 4, price: 103 }, color: '#a78bfa', text: 'Inside' },
      { type: 'badge', at: { i: 5, price: 104.7 }, color: '#FBBF24', text: 'Marubozu' },
      { type: 'badge', at: { i: 6, price: 104.5 }, color: '#22D3EE', text: 'Doji' },
      { type: 'badge', at: { i: 7, price: 105.2 }, color: '#FF3D5A', text: 'Engulf bear' },
    ],
    verdict: { label: 'Master these 6. Ignore the other 94+ patterns.', type: 'good' },
    caption: 'Pin Bar, Engulfing, Morning/Evening Star, Inside Bar, Marubozu, Doji. Six patterns cover every actionable setup on a 2-minute chart. Open the lesson PDF cheat sheet for full anatomy of each.',
  },
];
