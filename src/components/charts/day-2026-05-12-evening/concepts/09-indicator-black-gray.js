// Teaching unit 9: Why pattern indicators paint candles black/gray.
export const charts = [
  {
    title: 'WITHOUT indicator override — true red/green visible',
    candles: [
      { o: 108, h: 108.5, l: 100, c: 100.5 },
      { o: 100.5, h: 101, l: 99.5, c: 100.2 },
      { o: 100.2, h: 106, l: 100, c: 105.7 },
      { o: 105.7, h: 107, l: 105, c: 106.5 },
    ],
    annotations: [
      { type: 'badge', at: { i: 0, price: 108 }, color: '#FF3D5A', text: 'RED bearish' },
      { type: 'badge', at: { i: 1, price: 101 }, color: '#a78bfa', text: 'small doji' },
      { type: 'badge', at: { i: 2, price: 106 }, color: '#00D9A0', text: 'GREEN bullish' },
    ],
    verdict: { label: 'Pattern direction is visible at a glance', type: 'good' },
    caption: 'Without any pattern indicator running, NinjaTrader paints candles their true red/green. Bearish candles are red, bullish candles are green. Direction is instantly visible.',
  },
  {
    title: 'WITH PA indicator — candles painted black/gray as pattern flag',
    candles: [
      { o: 108, h: 108.5, l: 100, c: 100.5 },
      { o: 100.5, h: 101, l: 99.5, c: 100.2 },
      { o: 100.2, h: 106, l: 100, c: 105.7 },
      { o: 106, h: 106.5, l: 105, c: 105.5 },
    ],
    annotations: [
      { type: 'zone', topPrice: 109, bottomPrice: 99, color: 'rgba(150, 150, 150, 0.20)', label: 'PA indicator zone — Morning Star #54' },
      { type: 'badge', at: { i: 0, price: 108.5 }, color: '#666666', text: 'painted gray' },
      { type: 'badge', at: { i: 2, price: 106 }, color: '#666666', text: 'painted gray' },
    ],
    verdict: { label: 'Color overridden — direction now hidden', type: 'warn' },
    caption: 'When PriceActionIndicators flags a Morning Star, it paints all three candles gray/black to mark the pattern. You can no longer see direction at a glance — but the underlying candles are still red/green inside.',
  },
  {
    title: 'How to read true OHLC anyway — 4 methods',
    candles: [
      { o: 105, h: 107, l: 104, c: 106.5 },
    ],
    annotations: [
      { type: 'level', price: 107, color: '#FBBF24', label: '(1) Hover → data box shows O/H/L/C' },
      { type: 'level', price: 106.5, color: '#00D9A0', label: '(2) Next candle\'s OPEN ≈ this CLOSE' },
      { type: 'level', price: 105, color: '#a78bfa', label: '(3) Right-click → uncheck PA indicator' },
      { type: 'level', price: 104, color: '#22D3EE', label: '(4) Crosshair tool → tooltip with OHLC' },
    ],
    verdict: { label: 'Four ways to read OHLC when colors are overridden', type: 'good' },
    caption: 'Even with the indicator painting candles, you can always read the true OHLC: hover for the data box, look at the next candle\'s open, toggle off the indicator temporarily, or use the crosshair tool.',
  },
];
