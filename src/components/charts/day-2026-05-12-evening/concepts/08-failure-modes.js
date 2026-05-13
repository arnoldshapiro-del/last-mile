// Teaching unit 8: How Morning Stars fail — the 6 failure modes.
export const charts = [
  {
    title: 'Failure #1 — No support nearby (pattern in mid-air)',
    candles: [
      { o: 110, h: 110.2, l: 109, c: 109.5 },
      { o: 109.5, h: 110, l: 108, c: 108.5 },
      { o: 108.5, h: 108.8, l: 106, c: 106.3 },
      { o: 106.3, h: 106.5, l: 105.5, c: 106 },
      { o: 106, h: 106.5, l: 105.7, c: 106.2 },
      { o: 106.2, h: 108, l: 106, c: 107.8 },
      { o: 107.8, h: 108, l: 106.5, c: 106.8 },
    ],
    annotations: [
      { type: 'badge', at: { i: 5, price: 108 }, color: '#FF3D5A', text: 'no support beneath' },
      { type: 'arrow', at: { i: 6, price: 106.8 }, direction: 'up', color: '#FF3D5A', label: 'fizzled' },
    ],
    verdict: { label: 'Skip — pattern needs support to bounce off', type: 'bad' },
    caption: 'A textbook Morning Star with nothing structural beneath it. No prior swing low, no MA, no demand zone. Buyers stepped in but had no level to defend. Pattern fizzles.',
  },
  {
    title: 'Failure #2 — Weak Candle 3 (closes < 50% into Candle 1)',
    candles: [
      { o: 108, h: 108.2, l: 100, c: 100.5 },
      { o: 100.5, h: 101, l: 99.5, c: 99.8 },
      { o: 99.8, h: 103, l: 99.5, c: 102.8 },
      { o: 102.8, h: 103.5, l: 101.5, c: 102 },
      { o: 102, h: 102.5, l: 100, c: 100.3 },
    ],
    annotations: [
      { type: 'level', price: 104.25, color: '#FBBF24', label: '50% midline (NOT reached)', dash: true },
      { type: 'badge', at: { i: 2, price: 103 }, color: '#FF3D5A', text: 'too weak' },
    ],
    verdict: { label: 'Skip — Candle 3 must close ABOVE 50% midline', type: 'bad' },
    caption: 'Candle 3 only made it halfway. The reversal lacks conviction. Without the 50% close, the pattern is structurally incomplete. Two out of three is not a Morning Star.',
  },
  {
    title: 'Failure #6 — News candle as Candle 1',
    candles: [
      { o: 110, h: 110.5, l: 100, c: 100.5 },
      { o: 100.5, h: 101, l: 99.5, c: 100.2 },
      { o: 100.2, h: 105, l: 100, c: 104.8 },
      { o: 104.8, h: 105.5, l: 103, c: 103.5 },
      { o: 103.5, h: 104, l: 102, c: 102.5 },
      { o: 102.5, h: 103, l: 100.5, c: 101 },
      { o: 101, h: 101.5, l: 99, c: 99.5 },
    ],
    annotations: [
      { type: 'badge', at: { i: 0, price: 105 }, color: '#FF3D5A', text: 'CPI release' },
      { type: 'arrow', at: { i: 0, price: 100.5 }, direction: 'up', color: '#FF3D5A', label: 'news drove move' },
      { type: 'arrow', at: { i: 6, price: 99.5 }, direction: 'up', color: '#FF3D5A', label: 'continues down' },
    ],
    verdict: { label: 'Skip — fundamentals override pattern', type: 'bad' },
    caption: 'When Candle 1 is a news-driven move (CPI, FOMC, NFP, earnings), the data drove the price — not pattern psychology. Morning Stars do not override fundamentals. Stand aside until news settles.',
  },
];
