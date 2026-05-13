// Teaching unit 1: Morning Star anatomy — three candles, in order.
export const charts = [
  {
    title: 'The classic Morning Star — 3 candles tell the reversal',
    candles: [
      { o: 110, h: 110.5, l: 108, c: 108.5 },
      { o: 108.5, h: 109, l: 105, c: 105.5 },
      { o: 105.5, h: 106, l: 100, c: 100.5 },
      { o: 100.5, h: 100.8, l: 99, c: 99.5 },
      { o: 99.5, h: 100, l: 98.5, c: 99.2 },
      { o: 99.2, h: 105.5, l: 99, c: 105.3 },
      { o: 105.3, h: 107, l: 105, c: 106.5 },
      { o: 106.5, h: 109, l: 106, c: 108.5 },
    ],
    annotations: [
      { type: 'level', price: 102.65, color: '#FBBF24', label: 'Mid of Candle 1 (50%)', dash: true },
      { type: 'badge', at: { i: 2, price: 100.5 }, color: '#FF3D5A', text: '1 DESPAIR' },
      { type: 'badge', at: { i: 4, price: 99.2 }, color: '#a78bfa', text: '2 STAR' },
      { type: 'badge', at: { i: 5, price: 105.3 }, color: '#00D9A0', text: '3 REVERSAL' },
      { type: 'arrow', at: { i: 5, price: 105.3 }, direction: 'up', color: '#00D9A0', label: 'closes >50%' },
    ],
    verdict: { label: 'Valid Morning Star — Candle 3 closes above 50% of Candle 1', type: 'good' },
    caption: 'Three candles, in order: large bearish (despair), small-body indecision (star), large bullish closing past the midpoint of Candle 1. All three must be present.',
  },
  {
    title: 'INVALID Morning Star — Candle 3 too weak',
    candles: [
      { o: 110, h: 110.5, l: 108, c: 108.5 },
      { o: 108.5, h: 109, l: 105, c: 105.5 },
      { o: 105.5, h: 106, l: 100, c: 100.5 },
      { o: 100.5, h: 100.8, l: 99, c: 99.5 },
      { o: 99.5, h: 100, l: 98.5, c: 99.2 },
      { o: 99.2, h: 102, l: 99, c: 101.5 },
      { o: 101.5, h: 102, l: 100, c: 100.5 },
      { o: 100.5, h: 101, l: 99.5, c: 100 },
    ],
    annotations: [
      { type: 'level', price: 102.65, color: '#FBBF24', label: 'Mid of Candle 1 — Candle 3 closes BELOW', dash: true },
      { type: 'badge', at: { i: 2, price: 100.5 }, color: '#FF3D5A', text: '1' },
      { type: 'badge', at: { i: 4, price: 99.2 }, color: '#a78bfa', text: '2' },
      { type: 'badge', at: { i: 5, price: 101.5 }, color: '#FF3D5A', text: '3 weak' },
    ],
    verdict: { label: 'Not a Morning Star — Candle 3 fails 50% rule', type: 'bad' },
    caption: 'If Candle 3 closes below the midpoint of Candle 1, the pattern fails the most important test. Two out of three is not a Morning Star.',
  },
];
