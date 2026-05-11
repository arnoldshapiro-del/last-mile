// Teaching unit 5: Patterns Die, Charts Keep Trading.
// Concept — when a pattern invalidates, a new setup often forms underneath.
export const charts = [
  {
    title: 'BULL FLAG DIES — but a SPRING forms underneath',
    candles: [
      { o: 100.0, h: 100.3, l: 99.7, c: 100.2 },
      { o: 100.2, h: 101.0, l: 100.1, c: 100.9 },
      { o: 100.9, h: 102.0, l: 100.8, c: 101.9 },  // pole
      { o: 101.9, h: 102.6, l: 101.8, c: 102.5 },  // pole top
      { o: 102.5, h: 102.6, l: 101.4, c: 101.5 },  // pullback
      { o: 101.5, h: 101.7, l: 100.4, c: 100.5 },  // broke prior HL — flag DEAD
      { o: 100.5, h: 100.7, l: 99.6,  c: 100.6 },  // wick to 99.6, reclaims — SPRING forms
      { o: 100.6, h: 101.4, l: 100.5, c: 101.3 },  // confirmation
      { o: 101.3, h: 102.2, l: 101.2, c: 102.0 },
      { o: 102.0, h: 102.7, l: 101.9, c: 102.5 },
    ],
    annotations: [
      { type: 'badge', at: { i: 5, price: 100.2 }, text: 'FLAG DEAD', color: '#ef4444' },
      { type: 'level', price: 99.6, color: '#a78bfa', label: 'Spring wick' },
      { type: 'arrow', at: { i: 6, price: 100.6 }, direction: 'up', color: '#22c55e', label: 'NEW pattern — SPRING' },
      { type: 'zone', topPrice: 102.8, bottomPrice: 99.5, color: 'rgba(34, 197, 94, 0.05)' },
    ],
    verdict: { label: 'NEW PATTERN ENTRY — different setup', type: 'good' },
    caption: 'Same chart, different pattern. The bull flag is gone. The spring is new. Different rules, different entry, different stop.',
  },
  {
    title: 'WRONG — averaging down into the DEAD pattern',
    candles: [
      { o: 100.0, h: 100.3, l: 99.7, c: 100.2 },
      { o: 100.2, h: 101.0, l: 100.1, c: 100.9 },
      { o: 100.9, h: 102.0, l: 100.8, c: 101.9 },
      { o: 101.9, h: 102.6, l: 101.8, c: 102.5 },
      { o: 102.5, h: 102.6, l: 101.4, c: 101.5 },
      { o: 101.5, h: 101.7, l: 100.4, c: 100.5 },  // flag dead — but trader doubles down
      { o: 100.5, h: 100.6, l: 99.0,  c: 99.2 },   // bleeds
      { o: 99.2,  h: 99.4,  l: 97.6,  c: 97.8 },
      { o: 97.8,  h: 98.0,  l: 96.2,  c: 96.4 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 5, price: 100.3 }, direction: 'up', color: '#ef4444', label: 'Added — already wrong' },
      { type: 'arrow', at: { i: 7, price: 97.6 }, direction: 'up', color: '#ef4444', label: 'Added again — wronger' },
      { type: 'badge', at: { i: 8, price: 95.8 }, text: 'STILL HOLDING', color: '#ef4444' },
    ],
    verdict: { label: 'ARGUING WITH THE CHART', type: 'bad' },
    caption: 'Adding to a dead pattern is paying to be right. The chart already told you the answer. Listen.',
  },
  {
    title: 'BULL FLAG → BEAR FLAG — full reversal sequence',
    candles: [
      { o: 100.0, h: 101.6, l: 99.9, c: 101.5 },   // pole up
      { o: 101.5, h: 102.4, l: 101.4, c: 102.3 },
      { o: 102.3, h: 103.0, l: 101.2, c: 101.3 },  // big pullback breaks HL
      { o: 101.3, h: 101.5, l: 100.4, c: 100.5 },  // continues down — pole DOWN
      { o: 100.5, h: 100.7, l: 99.4,  c: 99.5 },   // pole down extends
      { o: 99.5,  h: 100.2, l: 99.4,  c: 100.1 },  // small bounce — bear flag forming
      { o: 100.1, h: 100.4, l: 99.7,  c: 100.0 },  // bear flag
      { o: 100.0, h: 100.2, l: 99.4,  c: 99.5 },   // break down from flag
      { o: 99.5,  h: 99.6,  l: 98.4,  c: 98.5 },
    ],
    annotations: [
      { type: 'badge', at: { i: 1, price: 103.0 }, text: 'BULL POLE', color: '#22c55e' },
      { type: 'badge', at: { i: 4, price: 99.0 }, text: 'BEAR POLE', color: '#ef4444' },
      { type: 'zone', topPrice: 100.4, bottomPrice: 99.4, color: 'rgba(239, 68, 68, 0.10)', label: 'BEAR FLAG' },
      { type: 'arrow', at: { i: 7, price: 99.5 }, direction: 'down', color: '#ef4444', label: 'Short entry' },
    ],
    verdict: { label: 'OPPOSITE-DIRECTION SETUP', type: 'good' },
    caption: 'Bull flag dies → bear pole forms → bear flag sets up → short entry. Same chart, four different patterns in sequence.',
  },
  {
    title: 'RIGHT — step back, watch for the NEXT setup',
    candles: [
      { o: 100.0, h: 100.3, l: 99.7, c: 100.2 },
      { o: 100.2, h: 101.0, l: 100.1, c: 100.9 },
      { o: 100.9, h: 102.0, l: 100.8, c: 101.9 },
      { o: 101.9, h: 102.6, l: 101.8, c: 102.5 },
      { o: 102.5, h: 102.6, l: 101.4, c: 101.5 },
      { o: 101.5, h: 101.7, l: 100.4, c: 100.5 },  // flag dies
      { o: 100.5, h: 100.7, l: 100.2, c: 100.4 },  // STAND ASIDE
      { o: 100.4, h: 100.6, l: 100.1, c: 100.3 },  // STAND ASIDE
      { o: 100.3, h: 100.5, l: 99.9,  c: 100.1 },  // STAND ASIDE
      { o: 100.1, h: 100.4, l: 100.0, c: 100.3 },  // STAND ASIDE
      { o: 100.3, h: 101.0, l: 100.2, c: 100.9 },  // new structure starting
    ],
    annotations: [
      { type: 'badge', at: { i: 5, price: 100.2 }, text: 'EXIT', color: '#fbbf24' },
      { type: 'zone', topPrice: 100.7, bottomPrice: 99.9, color: 'rgba(251, 191, 36, 0.10)', label: 'WAITING ZONE — no setup yet' },
      { type: 'badge', at: { i: 10, price: 101.3 }, text: 'WATCH FOR NEW', color: '#22c55e' },
    ],
    verdict: { label: 'PATIENCE PAYS', type: 'good' },
    caption: 'Pattern died. Stand aside. Watch. New structure is coming — but it has to form on its own time. No forcing.',
  },
  {
    title: 'PATTERN TRANSITION — wedge dies, then breakout forms',
    candles: [
      { o: 100.0, h: 100.6, l: 99.7, c: 100.3 },
      { o: 100.3, h: 100.9, l: 99.9, c: 100.5 },
      { o: 100.5, h: 101.0, l: 100.0, c: 100.4 },  // converging
      { o: 100.4, h: 100.8, l: 100.0, c: 100.3 },
      { o: 100.3, h: 100.7, l: 100.1, c: 100.4 },
      { o: 100.4, h: 100.5, l: 99.8, c: 99.9 },    // wedge broke down — pattern dead
      { o: 99.9,  h: 100.2, l: 99.6, c: 99.8 },    // re-test
      { o: 99.8,  h: 100.4, l: 99.7, c: 100.3 },
      { o: 100.3, h: 101.0, l: 100.2, c: 100.9 },
      { o: 100.9, h: 101.7, l: 100.8, c: 101.6 },  // breakout from re-test
    ],
    annotations: [
      { type: 'badge', at: { i: 5, price: 99.7 }, text: 'WEDGE DOWN', color: '#ef4444' },
      { type: 'level', price: 100.5, color: '#22c55e', label: 'Re-test then breakout' },
      { type: 'arrow', at: { i: 9, price: 101.5 }, direction: 'up', color: '#22c55e', label: 'New pattern entry' },
    ],
    verdict: { label: 'PATTERN B — different setup', type: 'good' },
    caption: 'Wedge fails down, re-test forms, breakout up. Three patterns on one chart — only the third was tradeable.',
  },
  {
    title: 'EMOTIONAL TRAP — refusing to let the dead pattern go',
    candles: [
      { o: 100.0, h: 100.3, l: 99.7, c: 100.2 },
      { o: 100.2, h: 101.2, l: 100.1, c: 101.1 },
      { o: 101.1, h: 102.0, l: 101.0, c: 101.9 },
      { o: 101.9, h: 102.5, l: 101.8, c: 102.4 },
      { o: 102.4, h: 102.5, l: 101.6, c: 101.7 },
      { o: 101.7, h: 101.9, l: 100.6, c: 100.7 },  // broke HL
      { o: 100.7, h: 100.9, l: 99.8,  c: 100.0 },
      { o: 100.0, h: 100.2, l: 99.0,  c: 99.2 },
      { o: 99.2,  h: 99.4,  l: 98.0,  c: 98.2 },
      { o: 98.2,  h: 98.4,  l: 97.0,  c: 97.2 },
    ],
    annotations: [
      { type: 'badge', at: { i: 5, price: 100.4 }, text: 'PATTERN DEAD', color: '#ef4444' },
      { type: 'badge', at: { i: 9, price: 96.8 }, text: "Still 'waiting for bounce'", color: '#ef4444' },
    ],
    verdict: { label: 'IDENTITY > CHART = LOSS', type: 'bad' },
    caption: '"It’ll come back" is the most expensive sentence in trading. The chart already moved on. The trader didn’t.',
  },
];
