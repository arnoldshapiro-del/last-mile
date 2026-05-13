// Teaching unit 14: Pattern is the trigger. Context is the edge.
export const charts = [
  {
    title: 'Same shape, NO context — chop, no level, no volume',
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100.2 },
      { o: 100.2, h: 100.7, l: 99.8, c: 100.5 },
      { o: 100.5, h: 100.8, l: 99.7, c: 100 },
      { o: 100, h: 100.5, l: 96, c: 99.8 },
      { o: 99.8, h: 100.3, l: 99.5, c: 100.2 },
      { o: 100.2, h: 100.5, l: 99.8, c: 99.9 },
      { o: 99.9, h: 100.2, l: 99.6, c: 99.8 },
    ],
    annotations: [
      { type: 'badge', at: { i: 3, price: 100.5 }, color: '#FF3D5A', text: 'pin bar' },
      { type: 'arrow', at: { i: 6, price: 99.8 }, direction: 'up', color: '#FF3D5A', label: 'fizzles' },
    ],
    verdict: { label: 'Pin bar in chop = noise. Skip.', type: 'bad' },
    caption: 'A hammer pin bar with a long lower wick. Textbook shape. But sitting in mid-air chop with no support, no MA, no level. The pattern alone is meaningless. Skip.',
  },
  {
    title: 'Same shape, REAL context — 200 EMA, after extended drop, volume',
    candles: [
      { o: 115, h: 115.5, l: 113, c: 113.5 },
      { o: 113.5, h: 114, l: 110, c: 110.5 },
      { o: 110.5, h: 111, l: 107, c: 107.5 },
      { o: 107.5, h: 108, l: 104, c: 104.5 },
      { o: 104.5, h: 105, l: 100, c: 100.2 },
      { o: 100.2, h: 100.5, l: 96, c: 100 },
      { o: 100, h: 103, l: 99.8, c: 102.7 },
      { o: 102.7, h: 105, l: 102.5, c: 104.5 },
      { o: 104.5, h: 107, l: 104.3, c: 106.5 },
    ],
    annotations: [
      { type: 'level', price: 100, color: '#00D9A0', label: '200 EMA + structural support' },
      { type: 'badge', at: { i: 5, price: 100.5 }, color: '#00D9A0', text: 'pin bar' },
      { type: 'arrow', at: { i: 8, price: 106.5 }, direction: 'down', color: '#00D9A0', label: 'high-conviction trade' },
    ],
    verdict: { label: 'Pin bar at 200 EMA after 10-bar drive = layup', type: 'good' },
    caption: 'IDENTICAL pin bar shape. But now: at the 200 EMA, after a 10-bar extended decline, at structural support, with volume on the bar. Same pattern. Completely different trade. Context = edge.',
  },
  {
    title: 'The one rule above all rules — tape it next to your monitor',
    candles: [
      { o: 100, h: 100.1, l: 99.9, c: 100 },
    ],
    annotations: [
      { type: 'level', price: 100, color: '#FBBF24', label: 'The pattern is never the edge.' },
      { type: 'level', price: 99.95, color: '#00D9A0', label: 'The context is the edge.', dash: true },
    ],
    verdict: { label: 'Score context BEFORE scoring pattern. Always.', type: 'good' },
    caption: 'The mental order matters. Before clicking buy: check context (level, trend, volume, time of day) FIRST. If context is wrong, no pattern saves the trade. If context is right, the pattern is your entry trigger.',
  },
];
