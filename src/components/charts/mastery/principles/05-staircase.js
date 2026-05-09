
// Principle 5 — Each Flag Is Independent (the staircase)
export const charts = [
  {
    title: 'CLEAN STAIRCASE — three poles, three flags, three independent trades',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100, h: 101.5, l: 99.95, c: 101.4 },     // pole 1
      { o: 101.4, h: 102.6, l: 101.3, c: 102.5 },
      { o: 102.5, h: 102.8, l: 102.0, c: 102.1 },   // flag 1
      { o: 102.1, h: 102.3, l: 101.8, c: 102.0 },
      { o: 102.0, h: 103.2, l: 101.95, c: 103.1 },  // breakout 1
      { o: 103.1, h: 104.3, l: 103.0, c: 104.2 },   // pole 2
      { o: 104.2, h: 104.5, l: 103.5, c: 103.7 },   // flag 2
      { o: 103.7, h: 103.9, l: 103.4, c: 103.6 },
      { o: 103.6, h: 104.8, l: 103.55, c: 104.7 },  // breakout 2
      { o: 104.7, h: 105.9, l: 104.6, c: 105.8 },   // pole 3
      { o: 105.8, h: 106.0, l: 105.2, c: 105.4 },   // flag 3
      { o: 105.4, h: 106.6, l: 105.35, c: 106.5 },  // breakout 3
    ],
    annotations: [
      { type: 'badge', at: { i: 5, price: 103.1 }, text: 'FLAG 1', color: '#22c55e' },
      { type: 'badge', at: { i: 9, price: 104.7 }, text: 'FLAG 2', color: '#22c55e' },
      { type: 'badge', at: { i: 12, price: 106.5 }, text: 'FLAG 3', color: '#22c55e' },
    ],
    verdict: { label: 'THREE INDEPENDENT TRADES', type: 'good' },
    caption: 'Each pole-flag is judged on its own. Same rules every step. Three trades, three setups, one trend.',
  },
  {
    title: 'MISSED FLAG #1 — flag #2 is still a clean trade',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.1 },
      { o: 100.1, h: 101.5, l: 100.0, c: 101.4 },   // pole 1
      { o: 101.4, h: 102.6, l: 101.3, c: 102.5 },
      { o: 102.5, h: 102.8, l: 102.0, c: 102.1 },   // flag 1 — MISSED
      { o: 102.1, h: 103.2, l: 102.05, c: 103.1 },  // missed breakout 1
      { o: 103.1, h: 104.3, l: 103.0, c: 104.2 },
      { o: 104.2, h: 104.4, l: 103.5, c: 103.6 },   // flag 2 begins
      { o: 103.6, h: 103.8, l: 103.3, c: 103.5 },
      { o: 103.5, h: 103.7, l: 103.2, c: 103.4 },
      { o: 103.4, h: 104.7, l: 103.35, c: 104.6 },  // FLAG 2 BREAKOUT — entry
      { o: 104.6, h: 105.8, l: 104.5, c: 105.7 },
    ],
    annotations: [
      { type: 'badge', at: { i: 4, price: 103.1 }, text: 'FLAG 1 MISSED', color: '#94a3b8' },
      { type: 'arrow', at: { i: 9, price: 104.6 }, direction: 'up', color: '#22c55e', label: 'FLAG 2 ENTRY' },
    ],
    verdict: { label: 'FLAG 2 = FRESH TRADE', type: 'good' },
    caption: 'Missing the first flag does not disqualify the second. Walk up cold to flag #2 and apply the same rules.',
  },
  {
    title: 'CHASING MID-POLE — wide stop, narrow target, bad math',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.1 },
      { o: 100.1, h: 101.5, l: 100.0, c: 101.4 },
      { o: 101.4, h: 102.6, l: 101.3, c: 102.5 },
      { o: 102.5, h: 102.8, l: 102.0, c: 102.1 },
      { o: 102.1, h: 103.2, l: 102.05, c: 103.1 },
      { o: 103.1, h: 104.3, l: 103.0, c: 104.2 },   // entered HERE — chasing
      { o: 104.2, h: 104.5, l: 104.0, c: 104.1 },
      { o: 104.1, h: 104.3, l: 103.5, c: 103.6 },   // pullback hits stop
      { o: 103.6, h: 104.0, l: 103.2, c: 103.8 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 5, price: 104.2 }, direction: 'up', color: '#ef4444', label: 'CHASE ENTRY' },
      { type: 'level', price: 103.5, color: '#ef4444', label: 'WIDE STOP @ 103.5', dash: true },
      { type: 'badge', at: { i: 7, price: 103.6 }, text: 'STOPPED', color: '#ef4444' },
    ],
    verdict: { label: 'BAD R:R — CHASE FAILED', type: 'bad' },
    caption: 'Entered mid-pole with no flag structure. Stop is far below; target is near. Math broke before the trade started.',
  },
  {
    title: 'DIMINISHING POLES — the staircase is tiring, take smaller targets',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.1 },
      { o: 100.1, h: 102.5, l: 100.0, c: 102.4 },   // pole 1 — 2.5pt
      { o: 102.4, h: 102.7, l: 101.9, c: 102.0 },
      { o: 102.0, h: 103.7, l: 101.95, c: 103.6 },  // pole 2 — 1.7pt
      { o: 103.6, h: 103.8, l: 103.2, c: 103.3 },
      { o: 103.3, h: 104.4, l: 103.25, c: 104.3 },  // pole 3 — 1.0pt
      { o: 104.3, h: 104.4, l: 103.9, c: 104.0 },
      { o: 104.0, h: 104.5, l: 103.8, c: 103.9 },   // tiny pole
    ],
    annotations: [
      { type: 'badge', at: { i: 1, price: 102.4 }, text: '+2.5', color: '#22c55e' },
      { type: 'badge', at: { i: 3, price: 103.6 }, text: '+1.7', color: '#fbbf24' },
      { type: 'badge', at: { i: 5, price: 104.3 }, text: '+1.0', color: '#fbbf24' },
      { type: 'badge', at: { i: 7, price: 104.5 }, text: 'tired', color: '#ef4444' },
    ],
    verdict: { label: 'POLES SHRINKING — caution', type: 'warn' },
    caption: 'Each pole smaller than the last. The trend has spent its participants. Smaller targets, or skip the next setup.',
  },
  {
    title: 'FLAG #2 MULTI-CONFIRM — same checklist every flag',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.1 },
      { o: 100.1, h: 101.6, l: 100.0, c: 101.5 },
      { o: 101.5, h: 102.8, l: 101.4, c: 102.7 },
      { o: 102.7, h: 102.9, l: 102.1, c: 102.2 },
      { o: 102.2, h: 102.4, l: 101.8, c: 102.0 },
      { o: 102.0, h: 102.2, l: 101.7, c: 101.9 },
      { o: 101.9, h: 103.4, l: 101.85, c: 103.3 },  // FLAG 2 BREAKOUT — verify all 4 pillars
      { o: 103.3, h: 104.5, l: 103.2, c: 104.4 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 6, price: 103.3 }, direction: 'up', color: '#22c55e', label: 'PATTERN+MACD+DELTA+VOL' },
      { type: 'badge', at: { i: 5, price: 101.9 }, text: '4-PILLAR CHECK', color: '#5eead4' },
    ],
    verdict: { label: 'CONFIRMED ON ITS OWN', type: 'good' },
    caption: 'Flag #2 must pass the four-pillar test independently. The success of flag #1 does not entitle flag #2 to skip a step.',
  },
  {
    title: 'STAIRCASE END — 50% break or session transition',
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.1 },
      { o: 100.1, h: 101.5, l: 100.0, c: 101.4 },
      { o: 101.4, h: 102.6, l: 101.3, c: 102.5 },
      { o: 102.5, h: 103.7, l: 102.4, c: 103.6 },
      { o: 103.6, h: 104.8, l: 103.5, c: 104.7 },   // top of trend
      { o: 104.7, h: 104.9, l: 104.0, c: 104.1 },
      { o: 104.1, h: 104.3, l: 103.4, c: 103.5 },   // bigger pullback
      { o: 103.5, h: 103.7, l: 102.8, c: 102.9 },   // 50% break of last pole
      { o: 102.9, h: 103.0, l: 102.1, c: 102.2 },
      { o: 102.2, h: 102.4, l: 101.6, c: 101.7 },
    ],
    annotations: [
      { type: 'level', price: 103.6, color: '#fbbf24', label: '50% LINE of last pole — broken', dash: true },
      { type: 'badge', at: { i: 7, price: 102.9 }, text: 'STAIRCASE END', color: '#ef4444' },
      { type: 'arrow', at: { i: 9, price: 101.7 }, direction: 'down', color: '#ef4444' },
    ],
    verdict: { label: 'TREND DONE — STOP', type: 'warn' },
    caption: 'Staircase ended on the 50% break of the last pole. Do not try to re-enter — wait for a new pole to form.',
  },
];
