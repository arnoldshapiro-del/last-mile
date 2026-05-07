// Teaching unit 9: Capitulation drops — why they reverse
export const charts = [
  {
    title: 'CAPITULATION — huge volume waterfall, sharp & short',
    candles: [
      { o: 100, h: 100.4, l: 99.7, c: 100.1 },
      { o: 100.1, h: 100.2, l: 96.5, c: 96.7 },
      { o: 96.7, h: 96.8, l: 92.5, c: 92.8 },
      { o: 92.8, h: 93.0, l: 89.0, c: 89.3 },   // bottom
      { o: 89.3, h: 91.5, l: 89.2, c: 91.3 },   // bounce starts
      { o: 91.3, h: 93.5, l: 91.2, c: 93.4 },
      { o: 93.4, h: 95.5, l: 93.3, c: 95.3 },
      { o: 95.3, h: 97.0, l: 95.2, c: 96.8 },
    ],
    annotations: [
      { type: 'volume', bars: [10, 95, 145, 220, 95, 60, 45, 35] },
      { type: 'badge', at: { i: 3, price: 91.0 }, text: 'CAPITULATION', color: '#fbbf24' },
    ],
    verdict: { label: 'CAPITULATION — REVERSAL LIKELY', type: 'warn' },
    caption: 'Volume 5-15x average + steep 4-bar drop + early-session timing. Sellers are exhausted, not winning.',
  },
  {
    title: 'LONG-TAIL HAMMER at the low — reversal signal',
    candles: [
      { o: 100, h: 100.4, l: 99.7, c: 100.1 },
      { o: 100.1, h: 100.2, l: 96.5, c: 96.7 },
      { o: 96.7, h: 96.8, l: 92.5, c: 92.8 },
      { o: 92.8, h: 93.0, l: 88.0, c: 92.5 },   // hammer: long lower wick, close near high
      { o: 92.5, h: 94.5, l: 92.4, c: 94.3 },
      { o: 94.3, h: 96.0, l: 94.2, c: 95.8 },
      { o: 95.8, h: 97.5, l: 95.7, c: 97.3 },
      { o: 97.3, h: 99.0, l: 97.2, c: 98.8 },
    ],
    annotations: [
      { type: 'badge', at: { i: 3, price: 88.5 }, text: 'HAMMER', color: '#22c55e' },
      { type: 'arrow', at: { i: 4, price: 94.5 }, direction: 'up', color: '#22c55e', label: 'REVERSAL ENTRY' },
    ],
    verdict: { label: 'BUY THE FLOOR', type: 'good' },
    caption: 'Hammer with 4+ point lower wick and close near the high = sellers absorbed. The first valid bull setup is the trade.',
  },
  {
    title: 'REAL DOWNTREND — average volume, no spike, no exhaustion',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 100.1, l: 99.0, c: 99.1 },
      { o: 99.1, h: 99.2, l: 98.0, c: 98.2 },
      { o: 98.2, h: 98.3, l: 97.0, c: 97.2 },
      { o: 97.2, h: 97.4, l: 96.0, c: 96.2 },
      { o: 96.2, h: 96.4, l: 95.0, c: 95.2 },
      { o: 95.2, h: 95.4, l: 94.0, c: 94.2 },
      { o: 94.2, h: 94.4, l: 93.0, c: 93.2 },
    ],
    annotations: [
      { type: 'volume', bars: [12, 14, 13, 15, 14, 13, 16, 14] },
      { type: 'badge', at: { i: 3, price: 99.0 }, text: 'avg volume', color: '#94a3b8' },
    ],
    verdict: { label: 'REAL TREND — NOT CAPITULATION', type: 'bad' },
    caption: 'No volume spike. No sharp acceleration. Just a real downtrend. Short the flags, do not buy the dip.',
  },
  {
    title: "TODAY'S RTY 9:00 AM — capitulation MISTAKEN for bear flag",
    candles: [
      { o: 100, h: 100.3, l: 99.5, c: 99.7 },
      { o: 99.7, h: 99.8, l: 96.0, c: 96.2 },
      { o: 96.2, h: 96.3, l: 92.5, c: 92.8 },   // bottom
      { o: 92.8, h: 95.5, l: 92.7, c: 95.3 },
      { o: 95.3, h: 97.5, l: 95.2, c: 97.3 },   // bounce 60% retraced
      { o: 97.3, h: 99.0, l: 97.2, c: 98.8 },
      { o: 98.8, h: 100.0, l: 98.7, c: 99.8 },  // 95%+ retraced
      { o: 99.8, h: 101.0, l: 99.7, c: 100.8 },
    ],
    annotations: [
      { type: 'volume', bars: [12, 110, 175, 80, 65, 55, 50, 45] },
      { type: 'arrow', at: { i: 3, price: 95.5 }, direction: 'down', color: '#ef4444', label: 'WRONG SHORT' },
      { type: 'badge', at: { i: 6, price: 100.0 }, text: 'reversal complete', color: '#22c55e' },
    ],
    verdict: { label: 'TODAY\'S MISTAKE', type: 'bad' },
    caption: "The volume spike + sharp 7pt drop + 50%+ bounce within an hour was textbook capitulation. I shorted into the reversal.",
  },
  {
    title: 'V-SHAPE recovery — capitulation followed by sustained rally',
    candles: [
      { o: 100, h: 100.4, l: 99.7, c: 100.1 },
      { o: 100.1, h: 100.2, l: 95.0, c: 95.2 },
      { o: 95.2, h: 95.4, l: 90.0, c: 90.3 },
      { o: 90.3, h: 95.5, l: 89.5, c: 95.3 },   // V-shape reversal candle
      { o: 95.3, h: 100.0, l: 95.2, c: 99.8 },
      { o: 99.8, h: 102.5, l: 99.7, c: 102.3 },
      { o: 102.3, h: 104.0, l: 102.2, c: 103.8 },
      { o: 103.8, h: 105.0, l: 103.7, c: 104.8 },
    ],
    annotations: [
      { type: 'volume', bars: [10, 90, 180, 220, 100, 60, 45, 35] },
      { type: 'badge', at: { i: 3, price: 92.5 }, text: 'V', color: '#22c55e' },
    ],
    verdict: { label: 'CAPITULATION → V-RALLY', type: 'good' },
    caption: 'Short sellers covered, trapped shorts powered the reversal. V-shape on volume = the play is the long.',
  },
  {
    title: 'DON\'T SHORT THE DROP — wait for the floor signal',
    candles: [
      { o: 100, h: 100.4, l: 99.7, c: 100.1 },
      { o: 100.1, h: 100.2, l: 96.5, c: 96.7 },
      { o: 96.7, h: 96.8, l: 93.0, c: 93.2 },
      { o: 93.2, h: 95.5, l: 92.5, c: 95.3 },   // floor signal — long-tail hammer
      { o: 95.3, h: 97.0, l: 95.2, c: 96.8 },
      { o: 96.8, h: 98.5, l: 96.7, c: 98.3 },
      { o: 98.3, h: 100.5, l: 98.2, c: 100.3 },
      { o: 100.3, h: 102.0, l: 100.2, c: 101.8 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 2, price: 91.5 }, direction: 'down', color: '#ef4444', label: 'NO — capitulation' },
      { type: 'arrow', at: { i: 4, price: 95.5 }, direction: 'up', color: '#22c55e', label: 'YES — after floor' },
    ],
    verdict: { label: 'WAIT FOR FLOOR', type: 'good' },
    caption: 'The wrong play: short the panic. The right play: wait for the hammer/reclaim, then long the reversal.',
  },
];
