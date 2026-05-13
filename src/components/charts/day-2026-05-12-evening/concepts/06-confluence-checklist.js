// Teaching unit 6: Confluence factors — the 7-point checklist.
export const charts = [
  {
    title: 'The 5-of-7 confluence test — visualized on one chart',
    candles: [
      { o: 115, h: 116, l: 113, c: 113.5 },
      { o: 113.5, h: 114, l: 109, c: 109.5 },
      { o: 109.5, h: 110, l: 105, c: 105.5 },
      { o: 105.5, h: 106, l: 102, c: 102.5 },
      { o: 102.5, h: 102.8, l: 100, c: 100.5 },
      { o: 100.5, h: 101, l: 99.8, c: 100.3 },
      { o: 100.3, h: 106, l: 100, c: 105.7 },
      { o: 105.7, h: 109, l: 105.5, c: 108.5 },
    ],
    annotations: [
      { type: 'level', price: 100, color: '#00D9A0', label: '#1 KEY SUPPORT (non-negotiable)' },
      { type: 'level', price: 113.5, color: '#FBBF24', label: '#7 Prior swing high — extended decline', dash: true },
      { type: 'badge', at: { i: 6, price: 106 }, color: '#00D9A0', text: '#3 vol expand' },
      { type: 'badge', at: { i: 5, price: 99.8 }, color: '#FBBF24', text: '#2 oversold' },
      { type: 'arrow', at: { i: 6, price: 105.7 }, direction: 'down', color: '#00D9A0', label: '5/7 GREEN — take it' },
    ],
    verdict: { label: '5 of 7 confluence boxes lit — take the trade', type: 'good' },
    caption: 'The 7 confluence factors mapped to a single setup. Key support (1), oversold RSI (2), volume expansion (3), HTF alignment (4), MA support (5), Fib level (6), extended decline (7). Score 5+ to take the trade.',
  },
];
