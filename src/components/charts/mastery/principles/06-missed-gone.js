
// Principle 6 — Missed = Gone
export const charts = [
  {
    title: 'WINDOW OPEN — entry within 1-3 bars after breakout close',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.1 },
      { o: 100.1, h: 101.5, l: 100.0, c: 101.4 },
      { o: 101.4, h: 102.6, l: 101.3, c: 102.5 },
      { o: 102.5, h: 102.8, l: 102.0, c: 102.1 },
      { o: 102.1, h: 102.3, l: 101.7, c: 102.0 },
      { o: 102.0, h: 102.2, l: 101.6, c: 101.9 },
      { o: 101.9, h: 103.2, l: 101.85, c: 103.1 }, // breakout close — bar 7
      { o: 103.1, h: 103.6, l: 102.95, c: 103.4 }, // window: bar 8 (still OK)
      { o: 103.4, h: 104.0, l: 103.3, c: 103.9 }, // window: bar 9 (last call)
      { o: 103.9, h: 104.6, l: 103.85, c: 104.5 },
    ],
    annotations: [
      { type: 'zone', topPrice: 104.0, bottomPrice: 102.95, color: 'rgba(34, 197, 94, 0.10)', label: 'WINDOW — bars 7-9' },
      { type: 'arrow', at: { i: 6, price: 103.1 }, direction: 'up', color: '#22c55e', label: 'IDEAL ENTRY' },
      { type: 'badge', at: { i: 8, price: 103.9 }, text: 'STILL OK', color: '#fbbf24' },
    ],
    verdict: { label: 'INSIDE WINDOW = TRADE LIVE', type: 'good' },
    caption: '1-3 bars after the breakout close. Stop is reasonable, target is reachable, R:R is favorable. Take the trade.',
  },
  {
    title: 'WINDOW CLOSED — chase entry has wide stop, narrow target',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.1 },
      { o: 100.1, h: 101.5, l: 100.0, c: 101.4 },
      { o: 101.4, h: 102.6, l: 101.3, c: 102.5 },
      { o: 102.5, h: 102.8, l: 102.0, c: 102.1 },
      { o: 102.1, h: 102.3, l: 101.7, c: 102.0 },
      { o: 102.0, h: 102.2, l: 101.6, c: 101.9 },
      { o: 101.9, h: 103.2, l: 101.85, c: 103.1 },
      { o: 103.1, h: 103.6, l: 102.95, c: 103.4 },
      { o: 103.4, h: 104.0, l: 103.3, c: 103.9 },
      { o: 103.9, h: 104.6, l: 103.85, c: 104.5 },
      { o: 104.5, h: 105.4, l: 104.4, c: 105.3 },
      { o: 105.3, h: 105.6, l: 104.9, c: 105.0 }, // entered HERE
      { o: 105.0, h: 105.2, l: 104.0, c: 104.1 }, // pullback
    ],
    annotations: [
      { type: 'arrow', at: { i: 11, price: 105.0 }, direction: 'up', color: '#ef4444', label: 'CHASE ENTRY' },
      { type: 'level', price: 102.0, color: '#ef4444', label: 'STOP — 3pt away', dash: true },
      { type: 'level', price: 105.5, color: '#fbbf24', label: 'Target — 0.5pt away', dash: true },
    ],
    verdict: { label: 'R:R DEGRADED — chase math broken', type: 'bad' },
    caption: 'Stop now lives below the original flag (3 points away). Target is the next 50¢ resistance. R:R is 1:6 against you.',
  },
  {
    title: 'LATE ENTRY ANATOMY — same setup, worse stop, worse target',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.1 },
      { o: 100.1, h: 101.5, l: 100.0, c: 101.4 },
      { o: 101.4, h: 102.6, l: 101.3, c: 102.5 },
      { o: 102.5, h: 102.7, l: 102.0, c: 102.1 },
      { o: 102.1, h: 102.3, l: 101.7, c: 102.0 },
      { o: 102.0, h: 103.2, l: 101.95, c: 103.1 }, // breakout — IDEAL ENTRY
      { o: 103.1, h: 103.6, l: 102.95, c: 103.4 },
      { o: 103.4, h: 104.0, l: 103.3, c: 103.9 },
      { o: 103.9, h: 104.6, l: 103.85, c: 104.5 },
      { o: 104.5, h: 104.7, l: 104.0, c: 104.2 }, // late entered HERE
    ],
    annotations: [
      { type: 'arrow', at: { i: 5, price: 103.1 }, direction: 'up', color: '#22c55e', label: 'IDEAL — R:R 3:1' },
      { type: 'arrow', at: { i: 9, price: 104.2 }, direction: 'up', color: '#ef4444', label: 'LATE — R:R 1:1' },
      { type: 'level', price: 102.0, color: '#94a3b8', label: 'STOP REGARDLESS', dash: true },
    ],
    verdict: { label: 'SAME STOP, WORSE FILL', type: 'warn' },
    caption: 'Stop has to be at the same level (flag low). But the entry moved up 1+ point — your R:R fell from 3:1 to 1:1.',
  },
  {
    title: 'CHASING CREATES THE TOP — last buyers buy the high',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.1 },
      { o: 100.1, h: 101.5, l: 100.0, c: 101.4 },
      { o: 101.4, h: 103.0, l: 101.3, c: 102.9 },
      { o: 102.9, h: 104.4, l: 102.8, c: 104.3 },
      { o: 104.3, h: 105.5, l: 104.2, c: 105.4 },
      { o: 105.4, h: 106.4, l: 105.3, c: 106.3 },
      { o: 106.3, h: 107.0, l: 106.2, c: 106.95 }, // climax — chasers in
      { o: 106.95, h: 107.05, l: 105.5, c: 105.6 }, // immediate roll
      { o: 105.6, h: 105.8, l: 104.5, c: 104.6 },
      { o: 104.6, h: 104.8, l: 103.5, c: 103.6 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 6, price: 106.95 }, direction: 'up', color: '#ef4444', label: 'CHASE TOP' },
      { type: 'badge', at: { i: 7, price: 105.6 }, text: 'TRAPPED', color: '#ef4444' },
    ],
    verdict: { label: 'TOP IS WHERE CHASES GO', type: 'bad' },
    caption: 'When chasing feels easy, the trade is over. The last money in is the top. Recognize the pattern — pass.',
  },
  {
    title: 'DETACHMENT DRILL — name it, accept it, move on',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.1 },
      { o: 100.1, h: 101.5, l: 100.0, c: 101.4 },
      { o: 101.4, h: 102.6, l: 101.3, c: 102.5 },
      { o: 102.5, h: 102.8, l: 102.0, c: 102.1 },
      { o: 102.1, h: 102.3, l: 101.8, c: 102.0 },
      { o: 102.0, h: 103.3, l: 101.95, c: 103.2 }, // breakout — MISSED
      { o: 103.2, h: 104.5, l: 103.1, c: 104.4 },
      { o: 104.4, h: 104.7, l: 103.7, c: 103.8 }, // setup #2 forming
      { o: 103.8, h: 104.0, l: 103.5, c: 103.6 },
      { o: 103.6, h: 103.8, l: 103.3, c: 103.5 },
      { o: 103.5, h: 105.0, l: 103.45, c: 104.95 }, // SETUP #2 — fresh entry
    ],
    annotations: [
      { type: 'badge', at: { i: 5, price: 103.2 }, text: 'NAMED: MISSED', color: '#94a3b8' },
      { type: 'arrow', at: { i: 10, price: 104.95 }, direction: 'up', color: '#22c55e', label: 'FRESH ENTRY' },
    ],
    verdict: { label: 'WALKED UP COLD', type: 'good' },
    caption: 'Trade #1 missed. Detached. Treated trade #2 as if just walking up to the chart. Same checklist, fresh entry.',
  },
  {
    title: 'JUST-THIS-ONCE TRAP — one chase becomes a habit',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.1 },
      { o: 100.1, h: 101.5, l: 100.0, c: 101.4 },
      { o: 101.4, h: 102.5, l: 101.3, c: 102.4 },
      { o: 102.4, h: 102.6, l: 101.9, c: 102.0 },
      { o: 102.0, h: 102.2, l: 101.7, c: 101.9 },
      { o: 101.9, h: 103.0, l: 101.85, c: 102.95 },
      { o: 102.95, h: 104.2, l: 102.9, c: 104.1 },
      { o: 104.1, h: 104.5, l: 103.5, c: 103.7 }, // chased here yesterday
      { o: 103.7, h: 104.0, l: 103.4, c: 103.5 }, // chased here today
      { o: 103.5, h: 104.0, l: 103.0, c: 103.2 },
      { o: 103.2, h: 103.5, l: 102.4, c: 102.5 },
    ],
    annotations: [
      { type: 'badge', at: { i: 7, price: 104.1 }, text: 'CHASE 1', color: '#fbbf24' },
      { type: 'badge', at: { i: 8, price: 103.7 }, text: 'CHASE 2', color: '#ef4444' },
      { type: 'badge', at: { i: 10, price: 102.5 }, text: 'CHASE 3?', color: '#ef4444' },
    ],
    verdict: { label: 'RULES BROKEN ONCE = NO RULES', type: 'bad' },
    caption: 'Once you chase, you will chase again. The rule has to be absolute or it is not a rule. Missed = gone, every time.',
  },
];
