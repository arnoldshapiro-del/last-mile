// Teaching unit 2: Liquidity — the map of where the market wants to go.
// Concept — stops cluster at obvious levels; institutions sweep them.
export const charts = [
  {
    title: 'The setup — obvious swing low becomes a liquidity pool',
    candles: [
      { o: 100.0, h: 100.4, l: 99.7, c: 99.8 },
      { o: 99.8,  h: 99.9,  l: 98.6, c: 98.8 },
      { o: 98.8,  h: 99.2,  l: 97.5, c: 97.7 },   // swing low forms
      { o: 97.7,  h: 98.5,  l: 97.6, c: 98.3 },
      { o: 98.3,  h: 99.0,  l: 98.2, c: 98.9 },
      { o: 98.9,  h: 99.4,  l: 98.8, c: 99.3 },
      { o: 99.3,  h: 99.6,  l: 98.4, c: 98.6 },   // pullback approaching the low
      { o: 98.6,  h: 98.8,  l: 97.9, c: 98.1 },
      { o: 98.1,  h: 98.3,  l: 97.6, c: 97.8 },   // approaching pool
    ],
    annotations: [
      { type: 'level', price: 97.5, color: '#fbbf24', label: 'SWING LOW — obvious to everyone', dash: false },
      { type: 'zone', topPrice: 97.5, bottomPrice: 96.8, color: 'rgba(239, 68, 68, 0.12)', label: 'STOP POOL — sell-stops cluster here' },
      { type: 'arrow', at: { i: 8, price: 97.7 }, direction: 'down', color: '#fbbf24', label: 'price drawn to pool' },
    ],
    verdict: { label: 'TARGET FORMING', type: 'warn' },
    caption: 'Every retail long stopped below 97.50 is now sitting as a sell-order. Institutions need those sells to fill their buys. The pool acts like a magnet.',
  },
  {
    title: 'The SWEEP — wick below low, strong reversal up (Wyckoff spring)',
    candles: [
      { o: 100.0, h: 100.3, l: 99.5, c: 99.6 },
      { o: 99.6,  h: 99.8,  l: 98.4, c: 98.6 },
      { o: 98.6,  h: 98.9,  l: 97.5, c: 97.7 },    // prior swing low
      { o: 97.7,  h: 98.5,  l: 97.6, c: 98.3 },
      { o: 98.3,  h: 98.9,  l: 98.0, c: 98.6 },
      { o: 98.6,  h: 98.7,  l: 97.0, c: 98.4 },    // WICK below 97.5, body recovers — SPRING
      { o: 98.4,  h: 99.5,  l: 98.3, c: 99.4 },    // strong follow-through
      { o: 99.4,  h: 100.2, l: 99.3, c: 100.0 },
      { o: 100.0, h: 101.0, l: 99.9, c: 100.8 },
    ],
    annotations: [
      { type: 'level', price: 97.5, color: '#fbbf24', label: 'Prior swing low — stop pool', dash: false },
      { type: 'badge', at: { i: 5, price: 96.8 }, text: 'SWEEP', color: '#a78bfa' },
      { type: 'arrow', at: { i: 5, price: 98.4 }, direction: 'up', color: '#22c55e', label: 'SPRING entry — body reclaims' },
      { type: 'zone', topPrice: 97.5, bottomPrice: 96.9, color: 'rgba(167, 139, 250, 0.15)', label: 'stops triggered then absorbed' },
    ],
    verdict: { label: 'HIGH-PROBABILITY LONG', type: 'good' },
    caption: 'Wick punches below the obvious low, triggers panic sells, institutions absorb them, body closes back inside. Then up hard. This is the spring.',
  },
  {
    title: 'BUY-STOP sweep — wick above swing high triggers buy-stops, then down',
    candles: [
      { o: 100.0, h: 100.5, l: 99.7, c: 100.4 },
      { o: 100.4, h: 101.6, l: 100.3, c: 101.5 },
      { o: 101.5, h: 102.5, l: 101.4, c: 102.3 },   // swing HIGH forms
      { o: 102.3, h: 102.4, l: 101.6, c: 101.8 },
      { o: 101.8, h: 102.0, l: 101.0, c: 101.2 },
      { o: 101.2, h: 101.7, l: 101.1, c: 101.6 },
      { o: 101.6, h: 102.2, l: 101.5, c: 102.1 },   // approaching prior high
      { o: 102.1, h: 103.1, l: 102.0, c: 102.2 },   // WICK above 102.5, body rejects
      { o: 102.2, h: 102.3, l: 101.0, c: 101.2 },   // hard reversal
      { o: 101.2, h: 101.3, l: 100.1, c: 100.3 },
    ],
    annotations: [
      { type: 'level', price: 102.5, color: '#fbbf24', label: 'Prior high — buy-stops sit above' },
      { type: 'zone', topPrice: 103.2, bottomPrice: 102.5, color: 'rgba(239, 68, 68, 0.12)', label: 'BUY-STOP POOL' },
      { type: 'arrow', at: { i: 7, price: 102.2 }, direction: 'down', color: '#ef4444', label: 'SHORT — rejection candle' },
    ],
    verdict: { label: 'BEARISH UPTHRUST', type: 'good' },
    caption: 'Mirror image of a spring. Wick above the obvious high triggers retail buy-stops, fills institutional sells, then reversal. Same logic, opposite direction.',
  },
  {
    title: 'WRONG stop placement — at the obvious level (gets hunted)',
    candles: [
      { o: 100.0, h: 100.4, l: 99.7, c: 99.8 },
      { o: 99.8,  h: 99.9,  l: 98.5, c: 98.7 },
      { o: 98.7,  h: 99.1,  l: 97.5, c: 97.8 },    // swing low
      { o: 97.8,  h: 98.6,  l: 97.7, c: 98.5 },
      { o: 98.5,  h: 99.4,  l: 98.4, c: 99.3 },    // long entry zone
      { o: 99.3,  h: 99.7,  l: 98.6, c: 98.8 },
      { o: 98.8,  h: 99.0,  l: 97.5, c: 97.6 },    // wick eats the obvious-level stop
      { o: 97.6,  h: 98.4,  l: 97.4, c: 98.2 },    // chart rallies AFTER stopping you out
      { o: 98.2,  h: 99.3,  l: 98.1, c: 99.2 },
      { o: 99.2,  h: 100.2, l: 99.1, c: 100.0 },
    ],
    annotations: [
      { type: 'level', price: 97.55, color: '#ef4444', label: 'YOUR stop @ 97.55 — predictable', dash: true },
      { type: 'arrow', at: { i: 6, price: 97.55 }, direction: 'down', color: '#ef4444', label: 'STOPPED OUT' },
      { type: 'badge', at: { i: 9, price: 100.5 }, text: 'CHART RALLIES WITHOUT YOU', color: '#94a3b8' },
    ],
    verdict: { label: 'STOP TOO PREDICTABLE', type: 'bad' },
    caption: 'Stop placed at the obvious level. Gets swept like everyone else. Pattern works — without you in it. Same chart, smarter stop placement = winner.',
  },
  {
    title: 'RIGHT stop placement — BEYOND the obvious level',
    candles: [
      { o: 100.0, h: 100.4, l: 99.7, c: 99.8 },
      { o: 99.8,  h: 99.9,  l: 98.5, c: 98.7 },
      { o: 98.7,  h: 99.1,  l: 97.5, c: 97.8 },
      { o: 97.8,  h: 98.6,  l: 97.7, c: 98.5 },
      { o: 98.5,  h: 99.4,  l: 98.4, c: 99.3 },    // long entry zone
      { o: 99.3,  h: 99.7,  l: 98.6, c: 98.8 },
      { o: 98.8,  h: 99.0,  l: 97.5, c: 97.6 },    // wick hunts obvious-stop area
      { o: 97.6,  h: 98.4,  l: 97.4, c: 98.2 },
      { o: 98.2,  h: 99.3,  l: 98.1, c: 99.2 },
      { o: 99.2,  h: 100.2, l: 99.1, c: 100.0 },
      { o: 100.0, h: 101.4, l: 99.9, c: 101.3 },
    ],
    annotations: [
      { type: 'level', price: 97.5, color: '#fbbf24', label: 'Obvious low — pool sits here' },
      { type: 'level', price: 96.7, color: '#22c55e', label: 'YOUR stop @ 96.70 — beyond the pool', dash: true },
      { type: 'badge', at: { i: 6, price: 96.6 }, text: 'WICK DOES NOT REACH', color: '#22c55e' },
      { type: 'arrow', at: { i: 10, price: 101.0 }, direction: 'up', color: '#22c55e', label: 'STILL IN' },
    ],
    verdict: { label: 'STOP SURVIVES THE HUNT', type: 'good' },
    caption: 'Pad below the obvious stop pool. Hunt happens, your stop survives, you ride the reversal. The cost: a slightly wider stop. The benefit: the trade works.',
  },
  {
    title: 'The ES morning example — sweep below, reversal to highs',
    candles: [
      { o: 7290, h: 7293, l: 7282, c: 7283 },
      { o: 7283, h: 7285, l: 7275, c: 7276 },
      { o: 7276, h: 7278, l: 7271, c: 7272 },    // initial low
      { o: 7272, h: 7280, l: 7271, c: 7279 },
      { o: 7279, h: 7282, l: 7273, c: 7274 },
      { o: 7274, h: 7276, l: 7268, c: 7270 },    // sweep below — wick to 7268
      { o: 7270, h: 7278, l: 7269, c: 7277 },    // body reclaims, V-recovery starts
      { o: 7277, h: 7281, l: 7276, c: 7280 },
      { o: 7280, h: 7283, l: 7279, c: 7282 },
      { o: 7282, h: 7284, l: 7281, c: 7283 },
    ],
    annotations: [
      { type: 'level', price: 7271, color: '#fbbf24', label: 'Prior swing low — stop pool' },
      { type: 'badge', at: { i: 5, price: 7266 }, text: 'SWEEP', color: '#a78bfa' },
      { type: 'arrow', at: { i: 6, price: 7277 }, direction: 'up', color: '#22c55e', label: 'SPRING — V-recovery' },
      { type: 'level', price: 7283, color: '#22c55e', label: 'R2 — round trip target', dash: true },
    ],
    verdict: { label: 'TEXTBOOK SPRING', type: 'good' },
    caption: 'The morning ES move. Bull flag at 7271 died; structure swept the obvious stop pool; institutions filled their longs; reversal to R2 at 7283. New pattern, not old one resurrected.',
  },
];
