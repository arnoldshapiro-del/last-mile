
// Core Lesson 7 — The Staircase deep dive — multi-flag tactics.
export const charts = [
  {
    title: 'PERFECT 3-FLAG STAIRCASE — entry, entry, entry',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.1 },
      { o: 100.1, h: 101.6, l: 100.0, c: 101.5 },
      { o: 101.5, h: 102.8, l: 101.4, c: 102.7 },
      { o: 102.7, h: 102.9, l: 102.0, c: 102.1 },
      { o: 102.1, h: 102.3, l: 101.7, c: 101.9 },
      { o: 101.9, h: 103.2, l: 101.85, c: 103.1 }, // FLAG 1 BREAK
      { o: 103.1, h: 104.4, l: 103.0, c: 104.3 },
      { o: 104.3, h: 104.5, l: 103.6, c: 103.7 },
      { o: 103.7, h: 103.9, l: 103.4, c: 103.5 },
      { o: 103.5, h: 104.9, l: 103.45, c: 104.8 }, // FLAG 2 BREAK
      { o: 104.8, h: 106.0, l: 104.7, c: 105.95 },
      { o: 105.95, h: 106.1, l: 105.3, c: 105.4 },
      { o: 105.4, h: 105.6, l: 105.0, c: 105.1 },
      { o: 105.1, h: 106.6, l: 105.05, c: 106.5 }, // FLAG 3 BREAK
    ],
    annotations: [
      { type: 'arrow', at: { i: 5, price: 103.1 }, direction: 'up', color: '#22c55e', label: '#1' },
      { type: 'arrow', at: { i: 9, price: 104.8 }, direction: 'up', color: '#22c55e', label: '#2' },
      { type: 'arrow', at: { i: 13, price: 106.5 }, direction: 'up', color: '#22c55e', label: '#3' },
    ],
    verdict: { label: '3 INDEPENDENT TRADES', type: 'good' },
    caption: 'Three poles, three flags, three independent entries. Same checklist each time. Compounded risk-defined moves.',
  },
  {
    title: 'MISSED #1, #2 IS CLEANER — fresh setup, no chase',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.1 },
      { o: 100.1, h: 101.6, l: 100.0, c: 101.5 },
      { o: 101.5, h: 102.8, l: 101.4, c: 102.7 },
      { o: 102.7, h: 102.9, l: 102.0, c: 102.1 },
      { o: 102.1, h: 103.2, l: 102.05, c: 103.1 }, // missed #1
      { o: 103.1, h: 104.4, l: 103.0, c: 104.3 },
      { o: 104.3, h: 104.5, l: 103.6, c: 103.7 },
      { o: 103.7, h: 103.9, l: 103.4, c: 103.5 },
      { o: 103.5, h: 104.9, l: 103.45, c: 104.8 }, // FLAG 2 — entered HERE
    ],
    annotations: [
      { type: 'badge', at: { i: 4, price: 103.1 }, text: 'MISSED', color: '#94a3b8' },
      { type: 'arrow', at: { i: 8, price: 104.8 }, direction: 'up', color: '#22c55e', label: 'FLAG 2' },
    ],
    verdict: { label: 'WALKED UP COLD', type: 'good' },
    caption: 'Missed #1. Did not chase. Treated #2 as if just walking up to the chart. Same rules; clean entry.',
  },
  {
    title: 'COUNTING POLES — when the staircase becomes a parabola',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.1 },
      { o: 100.1, h: 101.6, l: 100.0, c: 101.5 },
      { o: 101.5, h: 102.8, l: 101.4, c: 102.7 },
      { o: 102.7, h: 104.0, l: 102.6, c: 103.9 },
      { o: 103.9, h: 105.4, l: 103.8, c: 105.3 },
      { o: 105.3, h: 107.0, l: 105.2, c: 106.95 },
      { o: 106.95, h: 109.0, l: 106.9, c: 108.95 }, // accelerating
      { o: 108.95, h: 111.5, l: 108.9, c: 111.4 }, // parabolic
    ],
    annotations: [
      { type: 'badge', at: { i: 7, price: 111.4 }, text: 'PARABOLA', color: '#fbbf24' },
    ],
    verdict: { label: 'PARABOLA = RIPPLES BEFORE BREAK', type: 'warn' },
    caption: 'When poles get bigger every step instead of smaller, the move is parabolic. Late-stage entries here usually mark the top.',
  },
  {
    title: 'DIMINISHING POLES — staircase tiring, take smaller targets',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.1 },
      { o: 100.1, h: 102.8, l: 100.0, c: 102.7 }, // pole 1 — 2.7
      { o: 102.7, h: 102.9, l: 102.1, c: 102.2 },
      { o: 102.2, h: 102.4, l: 101.8, c: 102.0 },
      { o: 102.0, h: 103.7, l: 101.95, c: 103.6 }, // pole 2 — 1.6
      { o: 103.6, h: 103.8, l: 103.2, c: 103.3 },
      { o: 103.3, h: 104.0, l: 103.25, c: 103.95 }, // pole 3 — 0.65
      { o: 103.95, h: 104.05, l: 103.7, c: 103.8 },
    ],
    annotations: [
      { type: 'badge', at: { i: 1, price: 102.7 }, text: '+2.7', color: '#22c55e' },
      { type: 'badge', at: { i: 4, price: 103.6 }, text: '+1.6', color: '#fbbf24' },
      { type: 'badge', at: { i: 6, price: 103.95 }, text: '+0.65', color: '#ef4444' },
    ],
    verdict: { label: 'POLES SHRINKING — caution', type: 'warn' },
    caption: 'Each pole smaller than the last. Take smaller R:R, or skip the next setup. Trend energy is dissipating.',
  },
  {
    title: 'STAIRCASE END — 50% break of the LAST pole',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.1 },
      { o: 100.1, h: 101.6, l: 100.0, c: 101.5 },
      { o: 101.5, h: 102.8, l: 101.4, c: 102.7 },
      { o: 102.7, h: 104.0, l: 102.6, c: 103.9 },
      { o: 103.9, h: 105.0, l: 103.8, c: 104.9 }, // last pole top
      { o: 104.9, h: 105.0, l: 104.0, c: 104.1 },
      { o: 104.1, h: 104.3, l: 103.5, c: 103.6 },
      { o: 103.6, h: 103.8, l: 102.7, c: 102.8 }, // 50% of last pole = 103.4 — broken
      { o: 102.8, h: 103.0, l: 102.0, c: 102.1 },
    ],
    annotations: [
      { type: 'level', price: 103.4, color: '#ef4444', label: '50% of last pole — BROKEN' },
      { type: 'badge', at: { i: 7, price: 102.8 }, text: 'STAIRCASE END', color: '#ef4444' },
    ],
    verdict: { label: 'TREND DONE — STOP', type: 'warn' },
    caption: 'When the most recent pole\'s 50% is broken, the staircase has ended. No more flag entries. Wait for new pole.',
  },
  {
    title: 'BEAR STAIRCASE — short cascade, same rules in reverse',
    candles: [
      { o: 105.0, h: 105.3, l: 104.7, c: 105.0 },
      { o: 105.0, h: 105.1, l: 103.5, c: 103.6 },
      { o: 103.6, h: 103.8, l: 102.6, c: 102.7 },
      { o: 102.7, h: 103.4, l: 102.6, c: 103.3 }, // flag 1
      { o: 103.3, h: 103.5, l: 102.9, c: 103.0 },
      { o: 103.0, h: 103.1, l: 101.5, c: 101.6 }, // BREAK 1
      { o: 101.6, h: 101.7, l: 100.0, c: 100.1 },
      { o: 100.1, h: 100.8, l: 100.0, c: 100.7 }, // flag 2
      { o: 100.7, h: 100.9, l: 100.3, c: 100.4 },
      { o: 100.4, h: 100.5, l: 99.0, c: 99.1 }, // BREAK 2
    ],
    annotations: [
      { type: 'arrow', at: { i: 5, price: 101.6 }, direction: 'down', color: '#22c55e', label: '#1' },
      { type: 'arrow', at: { i: 9, price: 99.1 }, direction: 'down', color: '#22c55e', label: '#2' },
    ],
    verdict: { label: 'BEAR STAIRCASE — VALID', type: 'good' },
    caption: 'Bear staircase: same rules, opposite direction. Each lower-low pole + bounce-flag is its own short setup.',
  },
];
