
// Candlestick Patterns — pattern_type concept gallery (engulfing, hammers, dojis, etc.)
export const charts = [
  {
    title: 'BULLISH ENGULFING — buyers overpower sellers',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 99.8 },
      { o: 99.8, h: 100.0, l: 99.4, c: 99.5 },
      { o: 99.5, h: 99.7, l: 99.1, c: 99.2 }, // small red candle
      { o: 99.1, h: 100.5, l: 99.0, c: 100.4 }, // GREEN candle that engulfs prior red body
      { o: 100.4, h: 101.5, l: 100.35, c: 101.4 },
    ],
    annotations: [
      { type: 'badge', at: { i: 2, price: 99.7 }, text: 'small red', color: '#94a3b8' },
      { type: 'badge', at: { i: 3, price: 100.5 }, text: 'BULLISH ENGULF', color: '#22c55e' },
    ],
    verdict: { label: 'REVERSAL SIGNAL', type: 'good' },
    caption: 'A green candle whose body completely engulfs the prior red candle\'s body. Strongest at support; weakest in mid-range.',
  },
  {
    title: 'BEARISH ENGULFING — sellers overpower buyers',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.2 },
      { o: 100.2, h: 100.7, l: 100.1, c: 100.6 },
      { o: 100.6, h: 100.9, l: 100.5, c: 100.8 }, // small green
      { o: 100.9, h: 101.0, l: 99.5, c: 99.6 }, // RED candle engulfs prior green body
      { o: 99.6, h: 99.7, l: 98.5, c: 98.6 },
    ],
    annotations: [
      { type: 'badge', at: { i: 2, price: 100.9 }, text: 'small green', color: '#94a3b8' },
      { type: 'badge', at: { i: 3, price: 99.5 }, text: 'BEARISH ENGULF', color: '#ef4444' },
    ],
    verdict: { label: 'REVERSAL SIGNAL', type: 'bad' },
    caption: 'A red candle whose body completely engulfs the prior green candle\'s body. At resistance, this is a top signal.',
  },
  {
    title: 'HAMMER — long lower wick at support',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 99.8 },
      { o: 99.8, h: 100.0, l: 99.0, c: 99.2 },
      { o: 99.2, h: 99.4, l: 98.0, c: 98.2 },
      { o: 98.2, h: 99.5, l: 97.5, c: 99.4 }, // hammer — long lower wick, close near high
      { o: 99.4, h: 100.0, l: 99.3, c: 99.95 },
      { o: 99.95, h: 100.6, l: 99.9, c: 100.5 },
    ],
    annotations: [
      { type: 'badge', at: { i: 3, price: 97.5 }, text: 'HAMMER', color: '#22c55e' },
    ],
    verdict: { label: 'BULLISH REVERSAL', type: 'good' },
    caption: 'Long lower wick (2-3x body), small body, little upper wick. Sellers tested down, got rejected. Strongest at established support.',
  },
  {
    title: 'SHOOTING STAR — long upper wick at resistance',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.2 },
      { o: 100.2, h: 100.7, l: 100.1, c: 100.6 },
      { o: 100.6, h: 101.0, l: 100.5, c: 100.9 },
      { o: 100.9, h: 102.5, l: 100.85, c: 100.95 }, // shooting star — long upper wick, close near low
      { o: 100.95, h: 101.0, l: 100.0, c: 100.1 },
      { o: 100.1, h: 100.3, l: 99.5, c: 99.6 },
    ],
    annotations: [
      { type: 'badge', at: { i: 3, price: 102.5 }, text: 'SHOOTING STAR', color: '#ef4444' },
    ],
    verdict: { label: 'BEARISH REVERSAL', type: 'bad' },
    caption: 'Long upper wick (2-3x body), small body, little lower wick. Buyers tested up, got rejected. Strongest at established resistance.',
  },
  {
    title: 'DOJI — indecision at extremes',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 101.0, l: 99.95, c: 100.9 },
      { o: 100.9, h: 102.0, l: 100.85, c: 101.95 },
      { o: 101.95, h: 103.0, l: 101.85, c: 102.9 },
      { o: 102.9, h: 103.5, l: 102.4, c: 102.95 }, // DOJI — open ≈ close
      { o: 102.95, h: 103.0, l: 101.5, c: 101.6 },
    ],
    annotations: [
      { type: 'badge', at: { i: 4, price: 103.5 }, text: 'DOJI', color: '#fbbf24' },
    ],
    verdict: { label: 'INDECISION = WATCH NEXT BAR', type: 'warn' },
    caption: 'Doji has near-equal open and close — buyers and sellers fought to a draw. After a strong run, doji often signals exhaustion.',
  },
  {
    title: 'PATTERN ALIGNMENT — engulfing AT key level = strongest',
    candles: [
      { o: 100, h: 100.5, l: 99.7, c: 100.4 },
      { o: 100.4, h: 102.0, l: 100.3, c: 101.9 },
      { o: 101.9, h: 102.0, l: 101.0, c: 101.1 },
      { o: 101.1, h: 102.0, l: 101.05, c: 101.95 },
      { o: 101.95, h: 102.0, l: 101.2, c: 101.3 },
      { o: 101.3, h: 102.5, l: 101.25, c: 101.4 }, // tests 102 resistance
      { o: 101.4, h: 102.5, l: 100.5, c: 100.6 }, // BEARISH ENGULF at resistance
      { o: 100.6, h: 100.7, l: 99.5, c: 99.6 },
    ],
    annotations: [
      { type: 'level', price: 102.0, color: '#fbbf24', label: 'RESISTANCE — 4x tested' },
      { type: 'badge', at: { i: 6, price: 102.5 }, text: 'BEAR ENGULF + LEVEL', color: '#ef4444' },
    ],
    verdict: { label: 'CANDLE + LEVEL = HIGHEST EDGE', type: 'good' },
    caption: 'A reversal candle AT a tested level is the strongest single-bar setup. Each alone is a 50/50; combined they are 70%+.',
  },
];
