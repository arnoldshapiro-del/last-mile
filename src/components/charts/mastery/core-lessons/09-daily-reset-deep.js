
// Core Lesson 9 — The Daily Reset deep dive — emotional cycle, capital curve.
export const charts = [
  {
    title: 'THREE STRIKES — the emotional ladder of a losing day',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 100.4, l: 99.0, c: 99.1 }, // L1 — analytical
      { o: 99.1, h: 99.7, l: 99.0, c: 99.6 },
      { o: 99.6, h: 100.6, l: 99.5, c: 100.5 },
      { o: 100.5, h: 100.6, l: 99.5, c: 99.6 }, // L2 — frustrated
      { o: 99.6, h: 100.0, l: 99.4, c: 99.9 },
      { o: 99.9, h: 101.2, l: 99.85, c: 101.1 },
      { o: 101.1, h: 101.3, l: 100.0, c: 100.1 }, // L3 — angry
      { o: 100.1, h: 100.4, l: 99.9, c: 100.3 },
    ],
    annotations: [
      { type: 'badge', at: { i: 1, price: 99.1 }, text: 'L1: ANALYZE', color: '#fbbf24' },
      { type: 'badge', at: { i: 4, price: 99.6 }, text: 'L2: FRUSTRATE', color: '#ef4444' },
      { type: 'badge', at: { i: 7, price: 100.1 }, text: 'L3: STOP', color: '#ef4444' },
    ],
    verdict: { label: 'STOP NOW — protect tomorrow', type: 'warn' },
    caption: 'Each loss compounds emotionally. By L3, judgment is already compromised. The 4th attempt is statistically the worst trade of the day.',
  },
  {
    title: 'L4 GRAVEYARD — the trade you take after 3 losses is the worst',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 100.4, l: 99.0, c: 99.1 },
      { o: 99.1, h: 99.7, l: 99.0, c: 99.6 },
      { o: 99.6, h: 100.6, l: 99.5, c: 100.5 },
      { o: 100.5, h: 100.6, l: 99.5, c: 99.6 },
      { o: 99.6, h: 100.0, l: 99.4, c: 99.9 },
      { o: 99.9, h: 101.2, l: 99.85, c: 101.1 },
      { o: 101.1, h: 101.3, l: 100.0, c: 100.1 },
      { o: 100.1, h: 102.0, l: 100.05, c: 101.95 }, // L4 chase
      { o: 101.95, h: 102.0, l: 99.5, c: 99.6 },     // BIG loss
    ],
    annotations: [
      { type: 'arrow', at: { i: 8, price: 101.95 }, direction: 'down', color: '#ef4444', label: 'L4' },
      { type: 'badge', at: { i: 9, price: 99.6 }, text: '2x LOSS', color: '#ef4444' },
    ],
    verdict: { label: 'L4 IS RECOVERY PSYCH', type: 'bad' },
    caption: 'Position size grows after losses (revenge), discipline slips, judgment is impaired. The 4th loss averages 2-3x larger.',
  },
  {
    title: 'CAPITAL CURVE — 3-strike vs no-rule trader',
    candles: [
      { o: 100, h: 100.4, l: 99.5, c: 99.7 },
      { o: 99.7, h: 100.0, l: 99.2, c: 99.4 },
      { o: 99.4, h: 99.6, l: 98.9, c: 99.1 },
      { o: 99.1, h: 99.3, l: 98.7, c: 98.9 },
      { o: 98.9, h: 99.0, l: 98.2, c: 98.3 },
      { o: 98.3, h: 98.4, l: 97.5, c: 97.6 },
      { o: 97.6, h: 97.7, l: 96.4, c: 96.5 },
      { o: 96.5, h: 96.6, l: 95.2, c: 95.3 },
      { o: 95.3, h: 95.4, l: 93.8, c: 93.9 },
    ],
    annotations: [
      { type: 'level', price: 98.9, color: '#22c55e', label: '3-STRIKE STOPS HERE' },
      { type: 'level', price: 93.9, color: '#ef4444', label: 'NO-RULE FLOOR' },
    ],
    verdict: { label: 'RULE-FOLLOWERS BLEED LESS', type: 'info' },
    caption: 'Identical setups; only difference is the 3-strike rule. Rule-follower bleeds 1.1pt; no-rule bleeds 6.1pt. Same day, same data.',
  },
  {
    title: 'WALKING AWAY — the chart goes wherever, you are flat',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 100.4, l: 99.0, c: 99.1 },
      { o: 99.1, h: 99.7, l: 99.0, c: 99.6 },
      { o: 99.6, h: 100.6, l: 99.5, c: 100.5 },
      { o: 100.5, h: 100.6, l: 99.5, c: 99.6 },
      { o: 99.6, h: 100.0, l: 99.4, c: 99.9 },
      { o: 99.9, h: 101.2, l: 99.85, c: 101.1 },
      { o: 101.1, h: 101.3, l: 100.0, c: 100.1 }, // L3 — closed platform
      { o: 100.1, h: 102.0, l: 100.05, c: 101.95 }, // chart goes up — not your problem
      { o: 101.95, h: 103.0, l: 101.85, c: 102.95 },
    ],
    annotations: [
      { type: 'badge', at: { i: 7, price: 100.1 }, text: 'PLATFORM CLOSED', color: '#22c55e' },
      { type: 'badge', at: { i: 9, price: 102.95 }, text: 'NOT YOUR P&L', color: '#94a3b8' },
    ],
    verdict: { label: 'FLAT = SAFE', type: 'good' },
    caption: 'After L3, closed everything. The chart did what it did. You weren\'t there to lose money on it. Capital preserved.',
  },
  {
    title: 'JOURNAL AT DISTANCE — not at the desk',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 100.4, l: 99.0, c: 99.1 },
      { o: 99.1, h: 99.7, l: 99.0, c: 99.6 },
      { o: 99.6, h: 100.6, l: 99.5, c: 100.5 },
      { o: 100.5, h: 100.6, l: 99.5, c: 99.6 },
      { o: 99.6, h: 100.0, l: 99.4, c: 99.9 },
      { o: 99.9, h: 101.2, l: 99.85, c: 101.1 },
      { o: 101.1, h: 101.3, l: 100.0, c: 100.1 },
    ],
    annotations: [
      { type: 'badge', at: { i: 1, price: 99.1 }, text: 'L1: regime?', color: '#5eead4' },
      { type: 'badge', at: { i: 4, price: 99.6 }, text: 'L2: signal?', color: '#5eead4' },
      { type: 'badge', at: { i: 7, price: 100.1 }, text: 'L3: ignore?', color: '#5eead4' },
    ],
    verdict: { label: 'JOURNAL HONEST', type: 'info' },
    caption: 'Step away from the desk. Journal each loss: regime read, multi-confirm, signal ignored. Tomorrow opens with that read.',
  },
  {
    title: 'TOMORROW = FRESH SESSION — emotional capital rebuilds overnight',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },     // tomorrow open
      { o: 100.0, h: 102.0, l: 99.95, c: 101.95 }, // clean trend
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.6, l: 103.7, c: 103.8 },
      { o: 103.8, h: 104.0, l: 103.4, c: 103.5 },
      { o: 103.5, h: 105.0, l: 103.45, c: 104.9 }, // clean entry
      { o: 104.9, h: 106.0, l: 104.8, c: 105.9 },
    ],
    annotations: [
      { type: 'badge', at: { i: 0, price: 100.0 }, text: 'FRESH', color: '#22c55e' },
      { type: 'arrow', at: { i: 6, price: 104.9 }, direction: 'up', color: '#22c55e', label: 'CLEAN ENTRY' },
    ],
    verdict: { label: 'FULL SIZE — FULL DISCIPLINE', type: 'good' },
    caption: 'Yesterday is gone. The capital is intact. The brain is rested. The first clean setup tomorrow is where the bleed stops.',
  },
];
