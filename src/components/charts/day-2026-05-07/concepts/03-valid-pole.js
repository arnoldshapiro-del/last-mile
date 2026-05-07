// Teaching unit 3: What is a valid pole?
export const charts = [
  {
    title: 'Single big BULLISH candle on huge volume',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.0 },
      { o: 100.0, h: 100.4, l: 99.9, c: 100.1 },
      { o: 100.1, h: 100.4, l: 99.9, c: 100.0 },
      { o: 100.0, h: 100.4, l: 99.95, c: 100.2 },
      { o: 100.2, h: 105.5, l: 100.1, c: 105.3 }, // POLE
      { o: 105.3, h: 105.6, l: 105.0, c: 105.2 },
      { o: 105.2, h: 105.5, l: 104.9, c: 105.1 },
      { o: 105.1, h: 105.4, l: 104.8, c: 105.0 },
    ],
    annotations: [
      { type: 'volume', bars: [12, 14, 10, 13, 95, 18, 14, 12] },
      { type: 'badge', at: { i: 4, price: 102.7 }, text: 'POLE', color: '#22c55e' },
    ],
    verdict: { label: 'VALID POLE', type: 'good' },
    caption: 'A single 5+ point candle on volume 5-7x average is a complete pole. News-driven spikes qualify.',
  },
  {
    title: 'Single big BEARISH candle — also a valid pole',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.0 },
      { o: 100.0, h: 100.4, l: 99.9, c: 100.1 },
      { o: 100.1, h: 100.4, l: 99.9, c: 100.2 },
      { o: 100.2, h: 100.4, l: 99.95, c: 100.0 },
      { o: 100.0, h: 100.05, l: 95.0, c: 95.2 },  // big down candle
      { o: 95.2, h: 95.5, l: 94.8, c: 95.0 },
      { o: 95.0, h: 95.3, l: 94.7, c: 94.9 },
      { o: 94.9, h: 95.2, l: 94.5, c: 94.7 },
    ],
    annotations: [
      { type: 'volume', bars: [11, 13, 10, 12, 90, 16, 14, 13] },
      { type: 'badge', at: { i: 4, price: 97.5 }, text: 'POLE', color: '#ef4444' },
    ],
    verdict: { label: 'VALID POLE', type: 'good' },
    caption: 'Direction does not change the pole criteria. Conviction + volume = pole, up or down.',
  },
  {
    title: '3 consecutive BULLISH candles, minimal body overlap',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.0 },
      { o: 100.0, h: 100.4, l: 99.9, c: 100.1 },
      { o: 100.1, h: 102.0, l: 100.0, c: 101.9 },
      { o: 101.9, h: 103.8, l: 101.85, c: 103.7 },
      { o: 103.7, h: 105.5, l: 103.65, c: 105.4 },
      { o: 105.4, h: 105.6, l: 105.0, c: 105.2 },
      { o: 105.2, h: 105.4, l: 104.9, c: 105.1 },
      { o: 105.1, h: 105.4, l: 104.8, c: 105.0 },
    ],
    annotations: [
      { type: 'badge', at: { i: 3, price: 101.5 }, text: 'POLE', color: '#22c55e' },
    ],
    verdict: { label: 'VALID POLE', type: 'good' },
    caption: 'Each candle opens near the prior close, body overlap < 25%. Steep angle = strong pole.',
  },
  {
    title: '5 consecutive BEARISH candles, steep angle',
    candles: [
      { o: 110, h: 110.3, l: 109.7, c: 110.0 },
      { o: 110.0, h: 110.1, l: 108.5, c: 108.7 },
      { o: 108.7, h: 108.8, l: 107.2, c: 107.4 },
      { o: 107.4, h: 107.5, l: 105.8, c: 105.9 },
      { o: 105.9, h: 106.0, l: 104.3, c: 104.4 },
      { o: 104.4, h: 104.5, l: 102.8, c: 102.9 },
      { o: 102.9, h: 103.2, l: 102.5, c: 102.8 },
      { o: 102.8, h: 103.0, l: 102.4, c: 102.6 },
    ],
    annotations: [
      { type: 'badge', at: { i: 3, price: 106.0 }, text: 'POLE', color: '#ef4444' },
    ],
    verdict: { label: 'VALID POLE', type: 'good' },
    caption: '5 reds in a row, each opening at prior close, no overlap. Classic waterfall pole.',
  },
  {
    title: 'Pole with one shallow bounce inside (<30% retrace)',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.0 },
      { o: 100.0, h: 102.3, l: 99.95, c: 102.1 },
      { o: 102.1, h: 102.3, l: 101.8, c: 101.9 }, // shallow bounce: ~10% of move so far
      { o: 101.9, h: 104.0, l: 101.85, c: 103.8 },
      { o: 103.8, h: 105.5, l: 103.7, c: 105.4 },
      { o: 105.4, h: 105.6, l: 105.0, c: 105.2 },
      { o: 105.2, h: 105.4, l: 104.9, c: 105.1 },
      { o: 105.1, h: 105.4, l: 104.8, c: 105.0 },
    ],
    annotations: [
      { type: 'badge', at: { i: 2, price: 101.5 }, text: 'shallow bounce <30%', color: '#a78bfa' },
      { type: 'badge', at: { i: 4, price: 104.5 }, text: 'POLE', color: '#22c55e' },
    ],
    verdict: { label: 'VALID POLE', type: 'good' },
    caption: 'One small counter-bar inside a pole is fine if it retraces less than 30% of the move.',
  },
  {
    title: 'CHOPPY back-and-forth, 50%+ retraces — NOT a pole',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.0 },
      { o: 100.0, h: 101.0, l: 99.9, c: 100.9 },
      { o: 100.9, h: 101.0, l: 100.0, c: 100.2 },  // gives back > 50%
      { o: 100.2, h: 101.5, l: 100.1, c: 101.3 },
      { o: 101.3, h: 101.4, l: 100.4, c: 100.6 },  // gives back again
      { o: 100.6, h: 102.0, l: 100.5, c: 101.8 },
      { o: 101.8, h: 101.9, l: 100.7, c: 100.9 },  // again
      { o: 100.9, h: 102.5, l: 100.8, c: 102.3 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 1, price: 101.0 }, to: { i: 6, price: 100.9 }, color: '#ef4444', dash: true, label: '50%+ retraces' },
    ],
    verdict: { label: 'NOT A POLE — JUST A TREND', type: 'bad' },
    caption: 'Each up move retraces more than half before continuing. Slow trend, no pole-quality impulse.',
  },
  {
    title: 'Slow grind upward — direction OK, no impulse — NOT a pole',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.0 },
      { o: 100.0, h: 100.3, l: 99.9, c: 100.1 },
      { o: 100.1, h: 100.4, l: 100.0, c: 100.2 },
      { o: 100.2, h: 100.5, l: 100.1, c: 100.3 },
      { o: 100.3, h: 100.6, l: 100.2, c: 100.4 },
      { o: 100.4, h: 100.7, l: 100.3, c: 100.5 },
      { o: 100.5, h: 100.8, l: 100.4, c: 100.6 },
      { o: 100.6, h: 100.9, l: 100.5, c: 100.7 },
    ],
    annotations: [
      { type: 'badge', at: { i: 4, price: 100.45 }, text: 'GRIND', color: '#ef4444' },
    ],
    verdict: { label: 'NOT A POLE', type: 'bad' },
    caption: 'Total move is positive but each candle is tiny. No conviction. Pole requires expanding range, not micro-bars.',
  },
  {
    title: 'NEWS SPIKE — single huge candle on 10x volume',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.0 },
      { o: 100.0, h: 100.4, l: 99.9, c: 100.1 },
      { o: 100.1, h: 100.4, l: 99.95, c: 100.2 },
      { o: 100.2, h: 108.5, l: 100.0, c: 108.0 }, // news spike
      { o: 108.0, h: 108.5, l: 107.5, c: 108.2 },
      { o: 108.2, h: 108.4, l: 107.8, c: 108.1 },
      { o: 108.1, h: 108.3, l: 107.6, c: 107.8 },
      { o: 107.8, h: 108.0, l: 107.4, c: 107.6 },
    ],
    annotations: [
      { type: 'volume', bars: [12, 14, 11, 180, 35, 22, 18, 14] },
      { type: 'badge', at: { i: 3, price: 104.2 }, text: 'NEWS', color: '#fbbf24' },
    ],
    verdict: { label: 'VALID POLE', type: 'good' },
    caption: '10x volume single candle = capitulation buying. Pole is complete in one bar.',
  },
];
