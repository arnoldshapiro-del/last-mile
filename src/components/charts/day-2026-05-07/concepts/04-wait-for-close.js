// Teaching unit 4: Wait for the close vs enter on the wick break
export const charts = [
  {
    title: 'WICK pierces trendline, then closes BACK INSIDE',
    candles: [
      { o: 100, h: 100.4, l: 99.7, c: 100.0 },
      { o: 100.0, h: 100.5, l: 99.6, c: 100.4 },
      { o: 100.4, h: 100.7, l: 99.9, c: 100.6 },
      { o: 100.6, h: 100.9, l: 100.0, c: 100.8 },
      { o: 100.8, h: 102.3, l: 100.7, c: 100.9 }, // wick pierces, close back inside
      { o: 100.9, h: 101.0, l: 100.4, c: 100.5 },
      { o: 100.5, h: 100.7, l: 100.0, c: 100.1 },
      { o: 100.1, h: 100.3, l: 99.6, c: 99.7 },
      { o: 99.7, h: 99.9, l: 99.0, c: 99.1 },
    ],
    annotations: [
      { type: 'level', price: 102.0, color: '#fbbf24', label: 'TRENDLINE' },
      { type: 'arrow', at: { i: 4, price: 102.3 }, direction: 'up', color: '#ef4444', label: 'WICK ENTRY = TRAP' },
    ],
    verdict: { label: 'WICK LIES — entry stops out', type: 'bad' },
    caption: 'Pierced the line by 0.3 pts. Closed back inside. Wick-buyers held the bag while sellers regained control.',
  },
  {
    title: 'FULL CLOSE beyond trendline — valid entry',
    candles: [
      { o: 100, h: 100.4, l: 99.7, c: 100.0 },
      { o: 100.0, h: 100.5, l: 99.6, c: 100.4 },
      { o: 100.4, h: 100.7, l: 99.9, c: 100.6 },
      { o: 100.6, h: 100.9, l: 100.0, c: 100.8 },
      { o: 100.8, h: 102.5, l: 100.7, c: 102.4 }, // CLOSES beyond
      { o: 102.4, h: 103.5, l: 102.3, c: 103.3 },
      { o: 103.3, h: 104.5, l: 103.2, c: 104.2 },
      { o: 104.2, h: 105.5, l: 104.1, c: 105.3 },
    ],
    annotations: [
      { type: 'level', price: 102.0, color: '#fbbf24', label: 'TRENDLINE' },
      { type: 'arrow', at: { i: 4, price: 102.4 }, direction: 'up', color: '#22c55e', label: 'CLOSE ENTRY' },
    ],
    verdict: { label: 'CLOSE = COMMITMENT', type: 'good' },
    caption: 'Bar fully closed beyond the line. Buyers held into the close. Continuation follows.',
  },
  {
    title: 'Multiple wick pierces — each one reverses',
    candles: [
      { o: 100, h: 100.4, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.2, l: 99.9, c: 100.3 }, // wick #1
      { o: 100.3, h: 100.7, l: 99.8, c: 100.0 },
      { o: 100.0, h: 102.1, l: 99.9, c: 100.4 }, // wick #2
      { o: 100.4, h: 100.8, l: 99.9, c: 100.2 },
      { o: 100.2, h: 102.3, l: 100.1, c: 100.5 }, // wick #3
      { o: 100.5, h: 100.9, l: 99.8, c: 100.0 },
      { o: 100.0, h: 100.4, l: 99.5, c: 99.6 },
      { o: 99.6, h: 99.8, l: 98.5, c: 98.7 },
    ],
    annotations: [
      { type: 'level', price: 102.0, color: '#fbbf24', label: 'TRENDLINE' },
      { type: 'badge', at: { i: 1, price: 102.0 }, text: '×', color: '#ef4444' },
      { type: 'badge', at: { i: 3, price: 102.0 }, text: '×', color: '#ef4444' },
      { type: 'badge', at: { i: 5, price: 102.0 }, text: '×', color: '#ef4444' },
    ],
    verdict: { label: 'WICK TRAPS — 3 in a row', type: 'bad' },
    caption: 'Each pierce closes back inside. Wick traders blow accounts on this exact pattern. Wait for the close.',
  },
  {
    title: '5% EXCEPTION — multi-confirm fires pre-close, momentum strong',
    candles: [
      { o: 100, h: 100.4, l: 99.7, c: 100.0 },
      { o: 100.0, h: 100.5, l: 99.9, c: 100.3 },
      { o: 100.3, h: 101.0, l: 100.2, c: 100.9 },
      { o: 100.9, h: 102.0, l: 100.8, c: 101.9 }, // approaching
      { o: 101.9, h: 105.0, l: 101.85, c: 104.7 }, // explosive: 4-5pts past line, 80% through bar
      { o: 104.7, h: 106.5, l: 104.6, c: 106.3 },
      { o: 106.3, h: 108.0, l: 106.2, c: 107.8 },
      { o: 107.8, h: 109.5, l: 107.7, c: 109.3 },
    ],
    annotations: [
      { type: 'level', price: 102.0, color: '#fbbf24', label: 'TRENDLINE' },
      { type: 'volume', bars: [12, 14, 18, 22, 110, 65, 48, 38] },
      { type: 'arrow', at: { i: 4, price: 103.5 }, direction: 'up', color: '#22c55e', label: 'EARLY OK' },
    ],
    verdict: { label: 'EXCEPTION VALID', type: 'info' },
    caption: 'Volume surge + delta flip + 4+ points past line with time left → early entry defensible. Close still must agree.',
  },
  {
    title: 'EXCEPTION FAILS — momentum looked strong, bar reversed',
    candles: [
      { o: 100, h: 100.4, l: 99.7, c: 100.0 },
      { o: 100.0, h: 100.6, l: 99.9, c: 100.4 },
      { o: 100.4, h: 100.9, l: 100.3, c: 100.8 },
      { o: 100.8, h: 102.0, l: 100.7, c: 101.9 },
      { o: 101.9, h: 104.0, l: 101.0, c: 101.1 }, // looked like exception, reversed
      { o: 101.1, h: 101.3, l: 100.4, c: 100.5 },
      { o: 100.5, h: 100.7, l: 99.8, c: 99.9 },
      { o: 99.9, h: 100.1, l: 99.0, c: 99.2 },
    ],
    annotations: [
      { type: 'level', price: 102.0, color: '#fbbf24', label: 'TRENDLINE' },
      { type: 'arrow', at: { i: 4, price: 102.5 }, direction: 'up', color: '#ef4444', label: 'EARLY = WRONG' },
    ],
    verdict: { label: 'CUT IF CLOSE DISAGREES', type: 'warn' },
    caption: 'Even with multi-confirm pre-close, if the bar reverses to close back inside, exit immediately. Rule overrules signal.',
  },
  {
    title: 'DEFAULT RULE — no exception, just wait',
    candles: [
      { o: 100, h: 100.4, l: 99.7, c: 100.0 },
      { o: 100.0, h: 100.5, l: 99.9, c: 100.4 },
      { o: 100.4, h: 100.8, l: 100.3, c: 100.7 },
      { o: 100.7, h: 101.2, l: 100.6, c: 101.1 },
      { o: 101.1, h: 102.4, l: 101.0, c: 102.3 }, // close above
      { o: 102.3, h: 103.0, l: 102.2, c: 102.9 },
      { o: 102.9, h: 103.8, l: 102.8, c: 103.7 },
      { o: 103.7, h: 104.5, l: 103.6, c: 104.4 },
    ],
    annotations: [
      { type: 'level', price: 102.0, color: '#fbbf24', label: 'TRENDLINE' },
      { type: 'arrow', at: { i: 4, price: 102.3 }, direction: 'up', color: '#22c55e', label: 'CLOSE' },
    ],
    verdict: { label: 'DEFAULT = WAIT FOR CLOSE', type: 'good' },
    caption: '95% of valid entries are this. Bar fully closes beyond the line, you enter on the close, simple.',
  },
];
