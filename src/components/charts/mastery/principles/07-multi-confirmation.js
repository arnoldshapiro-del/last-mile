
// Principle 7 — Multi-Confirmation Required (the four-pillar test)
export const charts = [
  {
    title: 'ALL FOUR PILLARS ALIGN — the only valid green light',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.1 },
      { o: 100.1, h: 101.4, l: 100.0, c: 101.3 },
      { o: 101.3, h: 102.5, l: 101.2, c: 102.4 },
      { o: 102.4, h: 102.6, l: 101.8, c: 101.9 },
      { o: 101.9, h: 102.1, l: 101.5, c: 101.8 },
      { o: 101.8, h: 102.0, l: 101.4, c: 101.7 },
      { o: 101.7, h: 103.0, l: 101.65, c: 102.95 }, // breakout — all 4 pillars firing
      { o: 102.95, h: 104.0, l: 102.9, c: 103.95 },
    ],
    annotations: [
      { type: 'volume', bars: [50, 60, 70, 50, 40, 35, 130, 120] },
      { type: 'arrow', at: { i: 6, price: 102.95 }, direction: 'up', color: '#22c55e', label: '4/4 ENTRY' },
      { type: 'badge', at: { i: 5, price: 101.7 }, text: '✓PATTERN ✓MACD ✓DELTA ✓VOL', color: '#22c55e' },
    ],
    verdict: { label: '4 OF 4 — TAKE IT', type: 'good' },
    caption: 'Volume on the breakout is 2x recent average; MACD agrees; delta net positive; pattern intact. All four = trade live.',
  },
  {
    title: 'PATTERN ONLY — MACD disagrees, breakout is fake',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.1 },
      { o: 100.1, h: 101.4, l: 100.0, c: 101.3 },
      { o: 101.3, h: 102.5, l: 101.2, c: 102.4 },
      { o: 102.4, h: 102.6, l: 101.8, c: 101.9 },
      { o: 101.9, h: 102.1, l: 101.5, c: 101.8 },
      { o: 101.8, h: 102.0, l: 101.4, c: 101.7 },
      { o: 101.7, h: 103.0, l: 101.65, c: 102.95 }, // pattern breaks
      { o: 102.95, h: 103.0, l: 101.5, c: 101.7 },  // FAKE — fails next bar
      { o: 101.7, h: 101.9, l: 100.6, c: 100.7 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 6, price: 102.95 }, direction: 'up', color: '#fbbf24', label: 'ENTRY' },
      { type: 'badge', at: { i: 5, price: 101.7 }, text: '✓PATTERN ✗MACD', color: '#ef4444' },
      { type: 'badge', at: { i: 8, price: 100.7 }, text: 'FAKE BREAKOUT', color: '#ef4444' },
    ],
    verdict: { label: 'MACD DISAGREE = PASS', type: 'bad' },
    caption: 'Pattern was clean. But MACD was rolling lower — momentum was leaving even as price held. The breakout was paint, not commitment.',
  },
  {
    title: 'VOLUME DISAGREES — algos painting the chart',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.1 },
      { o: 100.1, h: 101.4, l: 100.0, c: 101.3 },
      { o: 101.3, h: 102.5, l: 101.2, c: 102.4 },
      { o: 102.4, h: 102.6, l: 101.8, c: 101.9 },
      { o: 101.9, h: 102.1, l: 101.5, c: 101.8 },
      { o: 101.8, h: 102.0, l: 101.4, c: 101.7 },
      { o: 101.7, h: 103.0, l: 101.65, c: 102.95 }, // breakout on WEAK volume
      { o: 102.95, h: 103.0, l: 102.0, c: 102.1 },
      { o: 102.1, h: 102.3, l: 101.0, c: 101.1 },
    ],
    annotations: [
      { type: 'volume', bars: [60, 70, 80, 50, 45, 40, 45, 35, 50] },
      { type: 'arrow', at: { i: 6, price: 102.95 }, direction: 'up', color: '#fbbf24', label: 'BREAKOUT (no vol)' },
      { type: 'badge', at: { i: 5, price: 101.7 }, text: '✓PATTERN ✗VOLUME', color: '#ef4444' },
    ],
    verdict: { label: 'NO VOLUME = NO COMMITMENT', type: 'bad' },
    caption: 'Breakout candle volume below recent average. Real breakouts carry committed money. This was a paint-job — fades in 2 bars.',
  },
  {
    title: 'DELTA DISAGREES — sellers absorbed the breakout',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.1 },
      { o: 100.1, h: 101.4, l: 100.0, c: 101.3 },
      { o: 101.3, h: 102.5, l: 101.2, c: 102.4 },
      { o: 102.4, h: 102.6, l: 101.8, c: 101.9 },
      { o: 101.9, h: 102.1, l: 101.5, c: 101.8 },
      { o: 101.8, h: 102.0, l: 101.4, c: 101.7 },
      { o: 101.7, h: 103.0, l: 101.65, c: 102.95 }, // close above, BUT delta NEGATIVE
      { o: 102.95, h: 103.0, l: 101.7, c: 101.8 },  // sellers eat it
      { o: 101.8, h: 102.0, l: 100.8, c: 100.9 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 6, price: 102.95 }, direction: 'up', color: '#fbbf24', label: 'ENTRY' },
      { type: 'badge', at: { i: 6, price: 102.0 }, text: 'PRICE↑ DELTA↓', color: '#ef4444' },
      { type: 'badge', at: { i: 8, price: 100.9 }, text: 'ABSORPTION WINS', color: '#ef4444' },
    ],
    verdict: { label: 'DELTA TRUMPS PRICE', type: 'bad' },
    caption: 'Price closed above the line, but delta on that bar was net negative — institutional sellers absorbed the breakout. Trust the tape.',
  },
  {
    title: '3 OF 4 — feels like a green light, isn\'t one',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.1 },
      { o: 100.1, h: 101.4, l: 100.0, c: 101.3 },
      { o: 101.3, h: 102.5, l: 101.2, c: 102.4 },
      { o: 102.4, h: 102.6, l: 101.8, c: 101.9 },
      { o: 101.9, h: 102.1, l: 101.5, c: 101.8 },
      { o: 101.8, h: 102.0, l: 101.4, c: 101.7 },
      { o: 101.7, h: 103.0, l: 101.65, c: 102.95 }, // pattern + MACD + volume — but delta flat
      { o: 102.95, h: 103.1, l: 102.7, c: 102.8 },
      { o: 102.8, h: 102.9, l: 101.5, c: 101.6 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 6, price: 102.95 }, direction: 'up', color: '#fbbf24', label: '3 OF 4' },
      { type: 'badge', at: { i: 5, price: 101.7 }, text: '✓PATTERN ✓MACD ✓VOL ✗DELTA', color: '#fbbf24' },
      { type: 'badge', at: { i: 8, price: 101.6 }, text: 'STILL FAILED', color: '#ef4444' },
    ],
    verdict: { label: 'ALMOST IS A FAIL', type: 'warn' },
    caption: 'Three out of four feels like enough. It is not. The missing pillar is the one that warned you. 3/4 = pass, every time.',
  },
  {
    title: 'THE 4-PILLAR DASHBOARD — what to look at, in what order',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.1 },
      { o: 100.1, h: 100.5, l: 99.9, c: 100.4 },
      { o: 100.4, h: 100.7, l: 100.1, c: 100.5 },
      { o: 100.5, h: 100.9, l: 100.3, c: 100.6 },
      { o: 100.6, h: 100.8, l: 100.2, c: 100.4 },
      { o: 100.4, h: 100.7, l: 100.1, c: 100.5 },
      { o: 100.5, h: 102.0, l: 100.45, c: 101.95 },
      { o: 101.95, h: 102.8, l: 101.85, c: 102.7 },
    ],
    annotations: [
      { type: 'volume', bars: [40, 45, 50, 45, 40, 35, 100, 110] },
      { type: 'badge', at: { i: 0, price: 100.4 }, text: '①PATTERN', color: '#5eead4' },
      { type: 'badge', at: { i: 2, price: 100.7 }, text: '②MACD', color: '#a78bfa' },
      { type: 'badge', at: { i: 4, price: 100.7 }, text: '③DELTA', color: '#fbbf24' },
      { type: 'badge', at: { i: 6, price: 102.0 }, text: '④VOLUME', color: '#22c55e' },
    ],
    verdict: { label: 'CHECK ORDER: P → M → D → V', type: 'info' },
    caption: 'Train the eye to scan in order: pattern integrity, MACD direction, delta agreement, volume confirmation. Four checkmarks → trade.',
  },
];
