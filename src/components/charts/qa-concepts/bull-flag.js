
// Bull Flag — pattern_type concept gallery
// 6 charts: textbook, healthy variations, common mistakes, target.
export const charts = [
  {
    title: 'TEXTBOOK BULL FLAG — pole, pause, breakout',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 101.5, l: 99.95, c: 101.4 },
      { o: 101.4, h: 102.7, l: 101.3, c: 102.6 },
      { o: 102.6, h: 103.9, l: 102.5, c: 103.8 },
      { o: 103.8, h: 104.0, l: 103.0, c: 103.1 },
      { o: 103.1, h: 103.3, l: 102.7, c: 102.8 },
      { o: 102.8, h: 103.0, l: 102.4, c: 102.5 },
      { o: 102.5, h: 104.4, l: 102.45, c: 104.3 },
    ],
    annotations: [
      { type: 'zone', topPrice: 103.8, bottomPrice: 100.0, color: 'rgba(0, 217, 160, 0.07)', label: 'POLE' },
      { type: 'zone', topPrice: 104.0, bottomPrice: 102.4, color: 'rgba(94, 234, 212, 0.07)', label: 'FLAG' },
      { type: 'arrow', at: { i: 7, price: 104.3 }, direction: 'up', color: '#22c55e', label: 'ENTRY' },
    ],
    verdict: { label: 'TEXTBOOK SETUP', type: 'good' },
    caption: 'Strong bullish pole, shallow drift down on contracting volume, breakout on the close. The reference shape.',
  },
  {
    title: 'HEALTHY BULL FLAG — flag stays in upper half of pole',
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
      { type: 'level', price: 102.2, color: '#fbbf24', label: '50% LINE — flag holds above', dash: true },
      { type: 'arrow', at: { i: 7, price: 104.9 }, direction: 'up', color: '#22c55e', label: 'ENTRY' },
    ],
    verdict: { label: 'FLAG ABOVE 50% — VALID', type: 'good' },
    caption: 'Flag low (103.1) holds well above the 50% line (102.2). Pole participants still in control. Take the breakout.',
  },
  {
    title: 'BULL FLAG STOP PLACEMENT — under flag low',
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
      { type: 'level', price: 104.9, color: '#22c55e', label: 'ENTRY 104.9', dash: false },
      { type: 'level', price: 103.05, color: '#ef4444', label: 'STOP — 1 tick under flag low (103.1)', dash: true },
    ],
    verdict: { label: 'STOP STRUCTURE-BASED', type: 'good' },
    caption: 'Stop sits one tick below the flag low. Tight enough for clean R:R; deep enough that wick noise will not hit.',
  },
  {
    title: 'BULL FLAG TARGET — pole length projected from breakout',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },     // pole start = 100
      { o: 100.0, h: 102.0, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },  // pole top = 104.4 → length 4.4
      { o: 104.4, h: 104.6, l: 103.7, c: 103.8 },
      { o: 103.8, h: 104.0, l: 103.4, c: 103.5 },
      { o: 103.5, h: 103.7, l: 103.1, c: 103.2 },
      { o: 103.2, h: 105.0, l: 103.15, c: 104.9 }, // breakout = 104.9
    ],
    annotations: [
      { type: 'level', price: 104.9, color: '#22c55e', label: 'BREAKOUT 104.9' },
      { type: 'level', price: 109.3, color: '#5eead4', label: 'TARGET 109.3 (+4.4 pole length)', dash: true },
      { type: 'level', price: 103.1, color: '#ef4444', label: 'STOP', dash: true },
    ],
    verdict: { label: 'R:R 2.4:1 — TAKE IT', type: 'good' },
    caption: 'Pole length = 4.4 points. Project that from the breakout (104.9 + 4.4 = 109.3). R:R = 2.4:1. Required minimum: 1.5:1.',
  },
  {
    title: 'FAILED BULL FLAG — flag retraces past 50%, thesis dies',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.0, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.6, l: 103.0, c: 103.1 },
      { o: 103.1, h: 103.3, l: 101.5, c: 101.6 }, // CLOSE BELOW 50% (102.2)
      { o: 101.6, h: 101.8, l: 100.4, c: 100.5 },
      { o: 100.5, h: 100.7, l: 99.5, c: 99.6 },
    ],
    annotations: [
      { type: 'level', price: 102.2, color: '#ef4444', label: '50% LINE — BROKEN' },
      { type: 'badge', at: { i: 5, price: 101.6 }, text: 'CANCEL', color: '#ef4444' },
    ],
    verdict: { label: 'FLAG DEAD — DO NOT ENTER', type: 'bad' },
    caption: 'Flag closed below the 50% line. Pole participants no longer in control. Do not re-enter — wait for fresh setup.',
  },
  {
    title: 'CHASE TRAP — entered too late, R:R degraded',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.0, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.6, l: 103.7, c: 103.8 },
      { o: 103.8, h: 104.0, l: 103.4, c: 103.5 },
      { o: 103.5, h: 103.7, l: 103.1, c: 103.2 },
      { o: 103.2, h: 105.0, l: 103.15, c: 104.9 }, // breakout — IDEAL ENTRY
      { o: 104.9, h: 106.0, l: 104.8, c: 105.9 },
      { o: 105.9, h: 107.0, l: 105.85, c: 106.95 },
      { o: 106.95, h: 107.2, l: 106.4, c: 106.5 }, // chased here
    ],
    annotations: [
      { type: 'arrow', at: { i: 7, price: 104.9 }, direction: 'up', color: '#22c55e', label: 'IDEAL — R:R 3:1' },
      { type: 'arrow', at: { i: 10, price: 106.5 }, direction: 'up', color: '#ef4444', label: 'CHASE — R:R 0.5:1' },
      { type: 'level', price: 103.1, color: '#94a3b8', label: 'STOP same either way', dash: true },
    ],
    verdict: { label: 'LATE = WORSE TRADE', type: 'warn' },
    caption: 'Same stop required. Late entry pays 1.6 more for the same risk. Math, not feeling, draws the cliff at bar +3.',
  },
];
