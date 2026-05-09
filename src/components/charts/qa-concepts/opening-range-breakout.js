
// Opening Range Breakout (ORB) — pattern_type concept gallery
export const charts = [
  {
    title: 'CLEAN ORB — first 30 minutes prints range, then breaks',
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100.4 },
      { o: 100.4, h: 100.7, l: 99.7, c: 99.8 },
      { o: 99.8, h: 100.5, l: 99.5, c: 100.3 },
      { o: 100.3, h: 100.7, l: 99.7, c: 99.9 },
      { o: 99.9, h: 100.5, l: 99.6, c: 100.4 },
      { o: 100.4, h: 100.6, l: 99.85, c: 100.0 }, // 30 min mark — OR established
      { o: 100.0, h: 101.5, l: 99.95, c: 101.4 }, // ORB-up
      { o: 101.4, h: 102.5, l: 101.3, c: 102.4 },
    ],
    annotations: [
      { type: 'level', price: 100.7, color: '#fbbf24', label: 'OR HIGH' },
      { type: 'level', price: 99.5, color: '#fbbf24', label: 'OR LOW' },
      { type: 'badge', at: { i: 5, price: 100.0 }, text: '9:30+30', color: '#5eead4' },
      { type: 'arrow', at: { i: 6, price: 101.4 }, direction: 'up', color: '#22c55e', label: 'ORB ENTRY' },
    ],
    verdict: { label: 'CLEAN ORB-UP', type: 'good' },
    caption: 'First 30 minutes prints high+low. After 9:30+30 (or 10:00 ET), the first close beyond either is the trade.',
  },
  {
    title: 'ORB STOP — opposite side of OR',
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100.4 },
      { o: 100.4, h: 100.7, l: 99.8, c: 100.0 },
      { o: 100.0, h: 100.5, l: 99.6, c: 100.3 },
      { o: 100.3, h: 100.7, l: 99.7, c: 99.9 },
      { o: 99.9, h: 100.5, l: 99.65, c: 100.4 },
      { o: 100.4, h: 100.6, l: 99.85, c: 100.0 },
      { o: 100.0, h: 101.5, l: 99.95, c: 101.4 },
      { o: 101.4, h: 102.0, l: 101.3, c: 101.9 },
    ],
    annotations: [
      { type: 'level', price: 101.4, color: '#22c55e', label: 'ENTRY' },
      { type: 'level', price: 99.5, color: '#ef4444', label: 'STOP — OR LOW (opposite side)', dash: true },
      { type: 'level', price: 100.0, color: '#fbbf24', label: 'TIGHT STOP — mid-OR', dash: true },
    ],
    verdict: { label: 'TWO STOP CHOICES', type: 'info' },
    caption: 'Bulletproof ORB stop = opposite extreme of OR. Tighter ORB stop = mid-OR. Use mid-OR if R:R is otherwise too small.',
  },
  {
    title: 'ORB TARGET — 1x OR width minimum',
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100.4 },
      { o: 100.4, h: 100.7, l: 99.8, c: 100.0 },
      { o: 100.0, h: 100.5, l: 99.6, c: 100.3 },
      { o: 100.3, h: 100.7, l: 99.7, c: 99.9 },
      { o: 99.9, h: 100.5, l: 99.65, c: 100.4 },
      { o: 100.4, h: 100.6, l: 99.85, c: 100.0 },
      { o: 100.0, h: 101.5, l: 99.95, c: 101.4 }, // entry
    ],
    annotations: [
      { type: 'level', price: 100.7, color: '#fbbf24', label: 'OR HIGH' },
      { type: 'level', price: 99.5, color: '#fbbf24', label: 'OR LOW' },
      { type: 'level', price: 101.4, color: '#22c55e', label: 'ENTRY' },
      { type: 'level', price: 102.6, color: '#5eead4', label: 'TARGET +1.2 (OR width 1.2)', dash: true },
    ],
    verdict: { label: 'MIN TARGET = 1x OR', type: 'info' },
    caption: 'Project the OR width from the breakout level. Most trend ORBs extend 1.5-2x OR width — leave a runner for that.',
  },
  {
    title: 'ORB DOWN — same playbook, opposite direction',
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100.0 },
      { o: 100.0, h: 100.4, l: 99.7, c: 100.3 },
      { o: 100.3, h: 100.6, l: 99.7, c: 99.8 },
      { o: 99.8, h: 100.3, l: 99.5, c: 100.2 },
      { o: 100.2, h: 100.5, l: 99.7, c: 99.9 },
      { o: 99.9, h: 100.4, l: 99.65, c: 100.0 },
      { o: 100.0, h: 100.1, l: 98.5, c: 98.6 }, // ORB-down
      { o: 98.6, h: 98.7, l: 97.5, c: 97.6 },
    ],
    annotations: [
      { type: 'level', price: 100.6, color: '#fbbf24', label: 'OR HIGH' },
      { type: 'level', price: 99.5, color: '#fbbf24', label: 'OR LOW' },
      { type: 'arrow', at: { i: 6, price: 98.6 }, direction: 'down', color: '#22c55e', label: 'ORB-DOWN ENTRY' },
    ],
    verdict: { label: 'CLEAN ORB-DOWN', type: 'good' },
    caption: 'Same setup, opposite direction. Stop = OR high. Target = 1x OR width below the breakdown.',
  },
  {
    title: 'OR-INSIDE DAY — no break either way until late, skip ORBs',
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100.4 },
      { o: 100.4, h: 100.6, l: 99.8, c: 100.0 },
      { o: 100.0, h: 100.4, l: 99.6, c: 100.3 },
      { o: 100.3, h: 100.5, l: 99.7, c: 99.9 },
      { o: 99.9, h: 100.4, l: 99.65, c: 100.2 },
      { o: 100.2, h: 100.45, l: 99.85, c: 100.0 },
      { o: 100.0, h: 100.4, l: 99.7, c: 100.2 },
      { o: 100.2, h: 100.5, l: 99.6, c: 99.85 },
      { o: 99.85, h: 100.4, l: 99.7, c: 100.3 },
    ],
    annotations: [
      { type: 'level', price: 100.6, color: '#fbbf24', label: 'OR HIGH' },
      { type: 'level', price: 99.5, color: '#fbbf24', label: 'OR LOW' },
      { type: 'badge', at: { i: 5, price: 100.0 }, text: 'INSIDE DAY', color: '#94a3b8' },
    ],
    verdict: { label: 'NO BREAK = NO TRADE', type: 'warn' },
    caption: 'Inside the OR for 90+ minutes? Switch to range-fade plays at the OR extremes. No ORB if there is no break.',
  },
  {
    title: 'FAKE ORB → REVERSAL — most painful pattern of the day',
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100.4 },
      { o: 100.4, h: 100.7, l: 99.8, c: 100.0 },
      { o: 100.0, h: 100.5, l: 99.6, c: 100.3 },
      { o: 100.3, h: 100.7, l: 99.7, c: 99.9 },
      { o: 99.9, h: 100.5, l: 99.65, c: 100.4 },
      { o: 100.4, h: 100.6, l: 99.85, c: 100.0 },
      { o: 100.0, h: 101.4, l: 99.95, c: 101.3 }, // ORB-up entry
      { o: 101.3, h: 101.4, l: 100.5, c: 100.6 }, // immediate roll
      { o: 100.6, h: 100.8, l: 99.0, c: 99.1 }, // close BELOW OR low
      { o: 99.1, h: 99.3, l: 98.0, c: 98.1 }, // ORB-DOWN now valid
    ],
    annotations: [
      { type: 'level', price: 100.7, color: '#fbbf24', label: 'OR HIGH' },
      { type: 'level', price: 99.5, color: '#fbbf24', label: 'OR LOW' },
      { type: 'arrow', at: { i: 6, price: 101.3 }, direction: 'up', color: '#ef4444', label: 'FAKE' },
      { type: 'arrow', at: { i: 8, price: 99.1 }, direction: 'down', color: '#22c55e', label: 'TRUE' },
    ],
    verdict: { label: 'FAKE BREAKS REVERSE', type: 'warn' },
    caption: 'When ORB-up fails AND price closes below OR low same day, the trapped longs power a strong ORB-down. Trade the second break.',
  },
];
