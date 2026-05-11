// Teaching unit 14: The Lunch Hour Trap — why 11:30-1:30 ET destroys accounts.
// Concept — pattern shapes still form during lunch, but the volume that makes
// patterns work is absent.
export const charts = [
  {
    title: 'MORNING (real volume) — bear flag breaks down cleanly',
    candles: [
      { o: 102.0, h: 102.3, l: 101.6, c: 101.7 },
      { o: 101.7, h: 101.9, l: 100.4, c: 100.5 },   // wide impulse
      { o: 100.5, h: 100.7, l: 99.4, c: 99.5 },     // wide impulse
      { o: 99.5, h: 99.6, l: 98.4, c: 98.5 },       // wide impulse
      { o: 98.5, h: 99.0, l: 98.4, c: 98.9 },
      { o: 98.9, h: 99.2, l: 98.8, c: 99.1 },
      { o: 99.1, h: 99.3, l: 97.8, c: 97.9 },       // breakdown — wide candle
      { o: 97.9, h: 98.0, l: 96.5, c: 96.6 },       // continuation
    ],
    annotations: [
      { type: 'zone', topPrice: 102.5, bottomPrice: 96.4, color: 'rgba(239, 68, 68, 0.05)', label: 'MORNING — wide range bars' },
      { type: 'arrow', at: { i: 6, price: 97.6 }, direction: 'down', color: '#22c55e', label: 'Real breakdown — real volume' },
    ],
    verdict: { label: 'REAL MARKET', type: 'good' },
    caption: 'Morning bars are wide. Breakouts hold. Patterns deliver what they promise. This is when the setup-to-result math is good.',
  },
  {
    title: 'LUNCH (volume collapses) — same shape, fake breakdown',
    candles: [
      { o: 102.0, h: 102.2, l: 101.9, c: 102.0 },
      { o: 102.0, h: 102.1, l: 101.7, c: 101.8 },   // narrow
      { o: 101.8, h: 101.9, l: 101.5, c: 101.6 },   // narrow
      { o: 101.6, h: 101.7, l: 101.4, c: 101.5 },   // narrow
      { o: 101.5, h: 101.7, l: 101.4, c: 101.6 },
      { o: 101.6, h: 101.8, l: 101.5, c: 101.7 },
      { o: 101.7, h: 101.8, l: 101.3, c: 101.4 },   // "breakdown" — narrow
      { o: 101.4, h: 101.7, l: 101.3, c: 101.6 },   // immediately back inside
      { o: 101.6, h: 101.9, l: 101.5, c: 101.8 },
      { o: 101.8, h: 102.0, l: 101.6, c: 101.9 },
    ],
    annotations: [
      { type: 'zone', topPrice: 102.2, bottomPrice: 101.3, color: 'rgba(251, 191, 36, 0.10)', label: 'LUNCH — narrow bars, no conviction' },
      { type: 'arrow', at: { i: 6, price: 101.2 }, direction: 'down', color: '#fbbf24', label: 'Fake breakdown' },
      { type: 'arrow', at: { i: 7, price: 101.7 }, direction: 'up', color: '#ef4444', label: 'Reabsorbed instantly' },
    ],
    verdict: { label: 'NO TRADE — lunch', type: 'bad' },
    caption: 'Same pattern shape. Different time of day. Lunch breakdowns have no volume to sustain them. Setup deceives, market does not commit.',
  },
  {
    title: '12:20 PM — looks like a bear flag, is actually nothing',
    candles: [
      { o: 102.0, h: 102.2, l: 101.8, c: 101.9 },
      { o: 101.9, h: 102.1, l: 101.6, c: 101.7 },
      { o: 101.7, h: 101.8, l: 101.4, c: 101.5 },
      { o: 101.5, h: 101.6, l: 101.2, c: 101.3 },
      { o: 101.3, h: 101.5, l: 101.2, c: 101.4 },
      { o: 101.4, h: 101.6, l: 101.3, c: 101.5 },
      { o: 101.5, h: 101.7, l: 101.4, c: 101.6 },
    ],
    annotations: [
      { type: 'zone', topPrice: 102.2, bottomPrice: 101.2, color: 'rgba(251, 191, 36, 0.12)', label: 'Looks like a bear flag at 12:20 PM' },
      { type: 'badge', at: { i: 3, price: 100.9 }, text: 'PAUSE — lunch hour', color: '#22c55e' },
    ],
    verdict: { label: 'PAUSED — skipped trade', type: 'good' },
    caption: 'The actual 12:20 PM ET setup from today. Shape says short. Time-of-day says no. The pause was the win.',
  },
  {
    title: 'AFTERNOON (volume returns) — clean setup at 2:00 PM',
    candles: [
      { o: 102.0, h: 102.2, l: 101.8, c: 101.9 },
      { o: 101.9, h: 102.0, l: 101.6, c: 101.7 },
      // 2:00 PM — volume returns
      { o: 101.7, h: 101.9, l: 100.8, c: 100.9 },
      { o: 100.9, h: 101.0, l: 100.0, c: 100.1 },
      { o: 100.1, h: 100.2, l: 99.2, c: 99.3 },
      { o: 99.3, h: 99.9, l: 99.2, c: 99.8 },
      { o: 99.8, h: 100.2, l: 99.7, c: 100.1 },
      { o: 100.1, h: 100.2, l: 98.8, c: 98.9 },
    ],
    annotations: [
      { type: 'level', price: 101.7, color: '#94a3b8', label: 'Lunch close' },
      { type: 'badge', at: { i: 2, price: 102.3 }, text: '2:00 PM — vol returns', color: '#22c55e' },
      { type: 'arrow', at: { i: 7, price: 98.7 }, direction: 'down', color: '#22c55e', label: 'Setup works' },
    ],
    verdict: { label: 'REAL TRADE WINDOW', type: 'good' },
    caption: 'Volume returns around 2:00 PM. Bars widen. Pattern setups deliver. Best afternoon window: 2:00–3:00 PM ET.',
  },
  {
    title: 'THE 1:00-1:30 WINDOW — most dangerous (price moves, vol does not)',
    candles: [
      { o: 102.0, h: 102.4, l: 101.7, c: 102.3 },
      { o: 102.3, h: 102.6, l: 102.0, c: 102.5 },   // looks alive
      { o: 102.5, h: 102.7, l: 102.0, c: 102.1 },
      { o: 102.1, h: 102.3, l: 101.5, c: 101.6 },   // appears to break
      { o: 101.6, h: 102.0, l: 101.4, c: 101.9 },
      { o: 101.9, h: 102.3, l: 101.8, c: 102.2 },   // and reabsorbed
      { o: 102.2, h: 102.4, l: 101.9, c: 102.0 },
    ],
    annotations: [
      { type: 'zone', topPrice: 102.7, bottomPrice: 101.4, color: 'rgba(239, 68, 68, 0.08)', label: '1:00-1:30 — looks tradeable, is not' },
      { type: 'arrow', at: { i: 3, price: 101.4 }, direction: 'down', color: '#ef4444', label: 'Trapped shorts' },
    ],
    verdict: { label: 'WAIT FOR 1:30+', type: 'bad' },
    caption: 'Price moves in the 1:00-1:30 window, but liquidity has not caught up. Worst of both worlds: looks like a market, is not yet one.',
  },
  {
    title: 'VOLUME FOOTPRINT — morning vs lunch (visualized)',
    candles: [
      { o: 100.0, h: 100.6, l: 99.4, c: 100.5 },    // tall bar
      { o: 100.5, h: 101.2, l: 100.4, c: 101.1 },   // tall
      { o: 101.1, h: 101.8, l: 101.0, c: 101.7 },   // tall
      { o: 101.7, h: 102.0, l: 101.6, c: 101.8 },   // shrinking
      { o: 101.8, h: 101.9, l: 101.7, c: 101.8 },   // tiny
      { o: 101.8, h: 101.9, l: 101.7, c: 101.8 },   // tiny — lunch
      { o: 101.8, h: 102.0, l: 101.7, c: 101.9 },   // tiny
      { o: 101.9, h: 102.0, l: 101.7, c: 101.8 },   // tiny
      { o: 101.8, h: 102.1, l: 101.7, c: 102.0 },   // returning
      { o: 102.0, h: 102.7, l: 101.9, c: 102.6 },   // returning
    ],
    annotations: [
      { type: 'zone', topPrice: 102.0, bottomPrice: 99.4, color: 'rgba(34, 197, 94, 0.06)', label: 'MORNING — vol HIGH' },
      { type: 'zone', topPrice: 102.0, bottomPrice: 101.7, color: 'rgba(251, 191, 36, 0.15)', label: 'LUNCH — vol LOW' },
      { type: 'zone', topPrice: 102.8, bottomPrice: 101.7, color: 'rgba(34, 197, 94, 0.06)', label: 'AFTERNOON — vol RETURNS' },
    ],
    verdict: { label: 'SEE THE WAVE', type: 'good' },
    caption: 'Look at the bar widths. Volume is a wave: high in the morning, dead in lunch, back in the afternoon. Trade with the wave.',
  },
];
