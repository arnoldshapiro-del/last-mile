// Teaching unit 4: How to trade a Morning Star — entry, stop, target.
export const charts = [
  {
    title: 'Entry above Candle 3 high · Stop below Candle 2 low · Target via 1-2-Runner',
    candles: [
      { o: 110, h: 110.2, l: 108, c: 108.2 },
      { o: 108.2, h: 108.5, l: 100, c: 100.5 },
      { o: 100.5, h: 101, l: 99, c: 100.4 },
      { o: 100.4, h: 105.5, l: 100, c: 105.3 },
      { o: 105.3, h: 106, l: 104.5, c: 105.7 },
      { o: 105.7, h: 109, l: 105.5, c: 108.8 },
      { o: 108.8, h: 111, l: 108.5, c: 110.5 },
      { o: 110.5, h: 113, l: 110.3, c: 112.5 },
    ],
    annotations: [
      { type: 'level', price: 105.5, color: '#00D9A0', label: 'Entry — above C3 high' },
      { type: 'level', price: 98.5, color: '#FF3D5A', label: 'Stop — below C2 low (3-tick buffer)' },
      { type: 'level', price: 107.5, color: '#FBBF24', label: 'T1 — 1R confidence locker', dash: true },
      { type: 'level', price: 110, color: '#FBBF24', label: 'T2 — structural / prior swing high' },
      { type: 'level', price: 112.5, color: '#a78bfa', label: 'T3 — runner (trail behind HLs)' },
    ],
    verdict: { label: '1-2-Runner framework applied — entry from Morning Star', type: 'good' },
    caption: 'Morning Star is just the entry trigger. Use the same ATM template structure from this morning\'s breakthrough lesson: T1 = 1R, T2 = next structural level, runner trails behind each new higher low.',
  },
  {
    title: 'CONSERVATIVE entry — wait for candle AFTER Candle 3 to break high',
    candles: [
      { o: 110, h: 110.2, l: 108, c: 108.2 },
      { o: 108.2, h: 108.5, l: 100, c: 100.5 },
      { o: 100.5, h: 101, l: 99, c: 100.4 },
      { o: 100.4, h: 105, l: 100, c: 104.8 },
      { o: 104.8, h: 106, l: 104.5, c: 105.7 },
      { o: 105.7, h: 108, l: 105.5, c: 107.5 },
    ],
    annotations: [
      { type: 'level', price: 105, color: '#FBBF24', label: 'Candle 3 high (entry trigger)' },
      { type: 'arrow', at: { i: 4, price: 106 }, direction: 'down', color: '#00D9A0', label: 'NEXT candle breaks → ENTER' },
    ],
    verdict: { label: 'Conservative — fewer fakeouts, worse R:R', type: 'good' },
    caption: 'Wait for the candle AFTER Candle 3 to break above Candle 3\'s high. Filters out fake Morning Stars at the cost of a slightly worse entry price.',
  },
];
