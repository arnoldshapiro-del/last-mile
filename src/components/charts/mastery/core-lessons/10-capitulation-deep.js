
// Core Lesson 10 — Capitulation deep dive — types, signatures, reversal entries.
export const charts = [
  {
    title: 'OPENING-30 CAPITULATION — fastest, most violent',
    candles: [
      { o: 105.0, h: 105.3, l: 104.7, c: 105.0 },
      { o: 105.0, h: 105.1, l: 102.5, c: 102.6 },   // bell rings
      { o: 102.6, h: 102.7, l: 100.0, c: 100.1 },
      { o: 100.1, h: 100.3, l: 97.5, c: 97.6 },
      { o: 97.6, h: 97.7, l: 95.0, c: 95.1 },        // 4 bars, -10pt
      { o: 95.1, h: 98.5, l: 94.8, c: 98.3 },        // long-tail hammer
      { o: 98.3, h: 100.0, l: 98.2, c: 99.9 },
    ],
    annotations: [
      { type: 'volume', bars: [40, 200, 250, 300, 350, 280, 180] },
      { type: 'badge', at: { i: 4, price: 95.1 }, text: 'CAPITULATION', color: '#ef4444' },
      { type: 'badge', at: { i: 5, price: 94.8 }, text: 'HAMMER', color: '#22c55e' },
    ],
    verdict: { label: 'OPENING FLUSH', type: 'good' },
    caption: '4-bar drop within first 30 minutes on extreme volume. Climax bar prints long-tail hammer. The reversal is the trade.',
  },
  {
    title: 'INTRADAY CAPITULATION — slower, news-driven',
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100.4 },
      { o: 100.4, h: 100.7, l: 99.8, c: 100.0 },
      { o: 100.0, h: 100.4, l: 99.6, c: 100.2 },
      { o: 100.2, h: 100.4, l: 98.8, c: 98.9 },     // headline hits
      { o: 98.9, h: 99.0, l: 97.5, c: 97.6 },
      { o: 97.6, h: 97.7, l: 96.4, c: 96.5 },
      { o: 96.5, h: 96.6, l: 95.0, c: 95.1 },
      { o: 95.1, h: 97.0, l: 94.9, c: 96.9 },        // hammer
      { o: 96.9, h: 98.5, l: 96.8, c: 98.4 },
    ],
    annotations: [
      { type: 'volume', bars: [50, 60, 55, 200, 220, 250, 300, 240, 180] },
      { type: 'badge', at: { i: 3, price: 99.0 }, text: 'NEWS HIT', color: '#fbbf24' },
      { type: 'badge', at: { i: 6, price: 95.1 }, text: 'CAPIT', color: '#ef4444' },
      { type: 'badge', at: { i: 7, price: 94.9 }, text: 'HAMMER', color: '#22c55e' },
    ],
    verdict: { label: 'NEWS-DRIVEN — TRADE THE HAMMER', type: 'good' },
    caption: 'Same shape, different trigger. Watch for the news headline + 4 vertical bars + hammer. The hammer prints the floor.',
  },
  {
    title: 'NOT CAPITULATION — slow grind down (real bear trend)',
    candles: [
      { o: 105.0, h: 105.3, l: 104.7, c: 105.0 },
      { o: 105.0, h: 105.1, l: 104.4, c: 104.5 },
      { o: 104.5, h: 104.6, l: 103.8, c: 103.9 },
      { o: 103.9, h: 104.0, l: 103.2, c: 103.3 },
      { o: 103.3, h: 103.4, l: 102.6, c: 102.7 },
      { o: 102.7, h: 102.8, l: 102.0, c: 102.1 },
      { o: 102.1, h: 102.2, l: 101.4, c: 101.5 },
      { o: 101.5, h: 101.6, l: 100.8, c: 100.9 },
      { o: 100.9, h: 101.0, l: 100.2, c: 100.3 },
    ],
    annotations: [
      { type: 'volume', bars: [50, 55, 60, 60, 65, 70, 70, 75, 80] },
      { type: 'badge', at: { i: 5, price: 102.1 }, text: 'STEADY VOL', color: '#fbbf24' },
    ],
    verdict: { label: 'TRUE BEAR — TRADE FLAGS DOWN', type: 'warn' },
    caption: 'No volume spike, no climax bar, no hammer. This is a real bear trend. Pole-and-flag short setups, not reversal trades.',
  },
  {
    title: 'CAPITULATION REVERSAL ENTRY — wait for confirmation bar',
    candles: [
      { o: 105, h: 105.3, l: 104.7, c: 105.0 },
      { o: 105.0, h: 105.1, l: 102.5, c: 102.6 },
      { o: 102.6, h: 102.7, l: 100.0, c: 100.1 },
      { o: 100.1, h: 100.3, l: 97.5, c: 97.6 },
      { o: 97.6, h: 97.7, l: 95.0, c: 95.1 },
      { o: 95.1, h: 98.5, l: 94.8, c: 98.3 },        // hammer
      { o: 98.3, h: 100.0, l: 98.2, c: 99.9 },        // CONFIRMATION BAR — entry
      { o: 99.9, h: 101.5, l: 99.85, c: 101.4 },
    ],
    annotations: [
      { type: 'badge', at: { i: 5, price: 94.8 }, text: 'HAMMER', color: '#fbbf24' },
      { type: 'arrow', at: { i: 6, price: 99.9 }, direction: 'up', color: '#22c55e', label: 'ENTRY ON CONFIRM' },
      { type: 'level', price: 94.8, color: '#ef4444', label: 'STOP', dash: true },
    ],
    verdict: { label: 'ENTRY ON BAR +1', type: 'good' },
    caption: 'Do not enter on the hammer itself. Wait for the next bar to close higher. Stop goes below the hammer wick.',
  },
  {
    title: 'FAILED CAPITULATION ENTRY — no hammer, just continuation',
    candles: [
      { o: 105.0, h: 105.3, l: 104.7, c: 105.0 },
      { o: 105.0, h: 105.1, l: 102.5, c: 102.6 },
      { o: 102.6, h: 102.7, l: 100.0, c: 100.1 },
      { o: 100.1, h: 100.3, l: 97.5, c: 97.6 },
      { o: 97.6, h: 97.7, l: 95.0, c: 95.1 },
      { o: 95.1, h: 95.4, l: 93.0, c: 93.1 },        // NO hammer — just continues
      { o: 93.1, h: 93.3, l: 91.5, c: 91.6 },
      { o: 91.6, h: 91.7, l: 90.0, c: 90.1 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 5, price: 96.0 }, direction: 'up', color: '#ef4444', label: 'TOO EARLY' },
      { type: 'badge', at: { i: 7, price: 90.1 }, text: 'KEEPS DROPPING', color: '#ef4444' },
    ],
    verdict: { label: 'NO HAMMER = NO TRADE', type: 'bad' },
    caption: 'Volume was right, drop was vertical, but the hammer never printed. Without the hammer, there is no floor signal. Pass.',
  },
  {
    title: 'POST-CAPITULATION TREND — the move after the reversal',
    candles: [
      { o: 105, h: 105.3, l: 104.7, c: 105.0 },
      { o: 105.0, h: 105.1, l: 102.5, c: 102.6 },
      { o: 102.6, h: 102.7, l: 100.0, c: 100.1 },
      { o: 100.1, h: 100.3, l: 97.5, c: 97.6 },
      { o: 97.6, h: 97.7, l: 95.0, c: 95.1 },
      { o: 95.1, h: 98.5, l: 94.8, c: 98.3 },
      { o: 98.3, h: 100.5, l: 98.2, c: 100.4 },
      { o: 100.4, h: 102.0, l: 100.3, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.6, l: 103.3, c: 104.5 },
      { o: 104.5, h: 105.5, l: 104.4, c: 105.4 },
    ],
    annotations: [
      { type: 'badge', at: { i: 5, price: 94.8 }, text: 'BOTTOM', color: '#22c55e' },
      { type: 'badge', at: { i: 10, price: 105.4 }, text: '+10pt rebound', color: '#22c55e' },
    ],
    verdict: { label: 'POST-FLUSH TREND', type: 'good' },
    caption: 'Capitulations often produce v-shaped recoveries. The post-bottom move is frequently larger than the original drop.',
  },
];
