
// Core Lesson 5 — Multi-Confirmation deep dive — each pillar in detail.
export const charts = [
  {
    title: 'PILLAR 1 — PATTERN INTEGRITY: clean structure, no fights',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.0, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.6, l: 103.3, c: 104.5 },
      { o: 104.5, h: 104.7, l: 103.7, c: 103.9 },
      { o: 103.9, h: 104.1, l: 103.5, c: 103.6 },
      { o: 103.6, h: 103.8, l: 103.2, c: 103.3 },
      { o: 103.3, h: 104.9, l: 103.25, c: 104.8 },
    ],
    annotations: [
      { type: 'level', price: 102.25, color: '#fbbf24', label: '50% LINE', dash: true },
      { type: 'badge', at: { i: 6, price: 103.5 }, text: 'PATTERN ✓', color: '#22c55e' },
    ],
    verdict: { label: 'STRUCTURE INTACT', type: 'good' },
    caption: 'Pattern integrity: pole clear, flag inside upper half of pole, 50% rule honored, contracting volume. Pillar 1 fires.',
  },
  {
    title: 'PILLAR 2 — MACD AGREEMENT: histogram & signal line align',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.0, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.6, l: 103.7, c: 103.8 },
      { o: 103.8, h: 104.0, l: 103.4, c: 103.5 },
      { o: 103.5, h: 103.7, l: 103.1, c: 103.2 },
      { o: 103.2, h: 105.0, l: 103.15, c: 104.9 },
    ],
    annotations: [
      { type: 'volume', bars: [10, 30, 50, 60, 45, 30, 20, 80] }, // simulating MACD histogram bars
      { type: 'badge', at: { i: 7, price: 104.9 }, text: 'MACD ✓', color: '#a78bfa' },
    ],
    verdict: { label: 'HISTOGRAM EXPANDS WITH PRICE', type: 'good' },
    caption: 'MACD histogram grew with the pole, contracted with the flag, expands again on the breakout. Momentum confirms structure.',
  },
  {
    title: 'PILLAR 3 — DELTA AGREEMENT: net buyers/sellers in the bar',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.0, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.6, l: 103.7, c: 103.8 },
      { o: 103.8, h: 104.0, l: 103.4, c: 103.5 },
      { o: 103.5, h: 103.7, l: 103.1, c: 103.2 },
      { o: 103.2, h: 105.0, l: 103.15, c: 104.9 },
    ],
    annotations: [
      { type: 'badge', at: { i: 1, price: 102.0 }, text: '+250', color: '#22c55e' },
      { type: 'badge', at: { i: 3, price: 104.4 }, text: '+340', color: '#22c55e' },
      { type: 'badge', at: { i: 7, price: 105.0 }, text: '+520', color: '#22c55e' },
      { type: 'badge', at: { i: 5, price: 103.5 }, text: '−40', color: '#fbbf24' },
    ],
    verdict: { label: 'DELTA ALL POSITIVE ON KEY BARS', type: 'good' },
    caption: 'Delta net positive on every pole bar AND on the breakout. Flag bars roughly neutral. Buyers continuously dominant.',
  },
  {
    title: 'PILLAR 4 — VOLUME CONFIRMATION: breakout bar > recent average',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 100.4, l: 99.9, c: 100.3 },
      { o: 100.3, h: 100.7, l: 100.1, c: 100.5 },
      { o: 100.5, h: 100.8, l: 100.2, c: 100.4 },
      { o: 100.4, h: 100.6, l: 100.0, c: 100.3 },
      { o: 100.3, h: 100.5, l: 99.95, c: 100.4 },
      { o: 100.4, h: 102.0, l: 100.35, c: 101.95 }, // breakout — vol 2.5x recent avg
      { o: 101.95, h: 103.0, l: 101.85, c: 102.9 },
    ],
    annotations: [
      { type: 'volume', bars: [50, 60, 65, 55, 50, 45, 200, 150] },
      { type: 'badge', at: { i: 6, price: 101.95 }, text: 'VOL 4x', color: '#22c55e' },
    ],
    verdict: { label: 'VOLUME CONFIRMS', type: 'good' },
    caption: 'Recent 6-bar avg ~54. Breakout bar 200 = 3.7x. Real participants showed up. Pillar 4 fires.',
  },
  {
    title: 'PILLAR FAILURE — three pillars green, MACD red',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.0, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.6, l: 103.7, c: 103.8 },
      { o: 103.8, h: 104.0, l: 103.4, c: 103.5 },
      { o: 103.5, h: 103.7, l: 103.1, c: 103.2 },
      { o: 103.2, h: 105.0, l: 103.15, c: 104.9 },
      { o: 104.9, h: 105.0, l: 103.0, c: 103.1 }, // false break, fails
    ],
    annotations: [
      { type: 'badge', at: { i: 6, price: 103.5 }, text: 'P✓ MACD✗ Δ✓ V✓', color: '#fbbf24' },
      { type: 'badge', at: { i: 8, price: 103.1 }, text: 'FAILED', color: '#ef4444' },
    ],
    verdict: { label: '3 OF 4 = PASS', type: 'bad' },
    caption: 'Pattern, delta, volume all fired. MACD was rolling lower. The setup looked too good to skip — but 3/4 always fails when MACD diverges.',
  },
  {
    title: 'CHECK ORDER IN REAL TIME — P → M → D → V in 5 seconds',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 100.4, l: 99.9, c: 100.3 },
      { o: 100.3, h: 100.7, l: 100.1, c: 100.5 },
      { o: 100.5, h: 100.9, l: 100.3, c: 100.6 },
      { o: 100.6, h: 100.8, l: 100.2, c: 100.4 },
      { o: 100.4, h: 102.0, l: 100.35, c: 101.95 },
      { o: 101.95, h: 103.0, l: 101.85, c: 102.9 },
    ],
    annotations: [
      { type: 'badge', at: { i: 0, price: 100.4 }, text: '①PATTERN ✓', color: '#5eead4' },
      { type: 'badge', at: { i: 1, price: 100.4 }, text: '②MACD ✓', color: '#a78bfa' },
      { type: 'badge', at: { i: 4, price: 100.7 }, text: '③DELTA ✓', color: '#fbbf24' },
      { type: 'badge', at: { i: 5, price: 102.0 }, text: '④VOLUME ✓', color: '#22c55e' },
    ],
    verdict: { label: 'ALL FOUR — TAKE IT', type: 'good' },
    caption: 'Train your eye to scan the 4 pillars in this order. Any pillar that fails or is unclear is an instant pass. Scan time: 5 seconds.',
  },
];
