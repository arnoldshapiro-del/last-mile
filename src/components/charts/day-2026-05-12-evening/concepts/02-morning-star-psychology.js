// Teaching unit 2: Morning Star psychology — the 3-act story.
export const charts = [
  {
    title: 'Act 1 — Sellers in control (the despair candle)',
    candles: [
      { o: 110, h: 110.2, l: 108, c: 108.2 },
      { o: 108.2, h: 108.5, l: 105, c: 105.2 },
      { o: 105.2, h: 105.5, l: 100, c: 100.2 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 2, price: 100.2 }, direction: 'up', color: '#FF3D5A', label: 'sellers dominate' },
      { type: 'badge', at: { i: 2, price: 105.5 }, color: '#FF3D5A', text: 'ACT 1' },
    ],
    verdict: { label: 'Sellers feel fully in control', type: 'bad' },
    caption: 'The downtrend climaxes with one more large bearish candle. Sellers feel they own the market. Most retail traders are stopped out or capitulating here.',
  },
  {
    title: 'Act 2 — Sellers exhaust, buyers wake up (the star)',
    candles: [
      { o: 105.2, h: 105.5, l: 100, c: 100.2 },
      { o: 100.2, h: 100.5, l: 99, c: 99.5 },
      { o: 99.5, h: 100, l: 98.5, c: 99.2 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 2, price: 99.2 }, direction: 'down', color: '#a78bfa', label: 'BALANCE' },
      { type: 'badge', at: { i: 2, price: 100 }, color: '#a78bfa', text: 'ACT 2' },
    ],
    verdict: { label: 'Selling pressure exhausted — equilibrium', type: 'warn' },
    caption: 'The small body or doji is the visual signature of equilibrium. Sellers can no longer push price down. Buyers are stepping in but not yet decisive.',
  },
  {
    title: 'Act 3 — Buyers overwhelm sellers (the reversal)',
    candles: [
      { o: 99.5, h: 100, l: 98.5, c: 99.2 },
      { o: 99.2, h: 105.5, l: 99, c: 105.3 },
      { o: 105.3, h: 107, l: 105, c: 106.5 },
      { o: 106.5, h: 109, l: 106, c: 108.5 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 1, price: 105.3 }, direction: 'down', color: '#00D9A0', label: 'BUYERS WIN' },
      { type: 'badge', at: { i: 1, price: 105.5 }, color: '#00D9A0', text: 'ACT 3' },
    ],
    verdict: { label: 'Buyers take control — reversal confirmed', type: 'good' },
    caption: "Buyers overwhelm sellers in a single bar. The story resolves. This is the bar you need — and the bar that needs to close strong with minimal upper wick.",
  },
];
