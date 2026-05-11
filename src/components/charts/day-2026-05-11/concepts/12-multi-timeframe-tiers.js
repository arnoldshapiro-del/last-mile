// Teaching unit 12: Multi-Timeframe Profit Tiers — where your edge hides.
// Concept — use 5/15/60-min resistance as tiers, not just 2-min.
export const charts = [
  {
    title: 'BAD — all tiers at 2-min resistance (small wins only)',
    candles: [
      { o: 100.0, h: 100.4, l: 99.7, c: 100.3 },
      { o: 100.3, h: 101.0, l: 100.2, c: 100.9 },
      { o: 100.9, h: 101.6, l: 100.8, c: 101.5 },
      { o: 101.5, h: 102.2, l: 101.4, c: 102.1 },
      { o: 102.1, h: 102.7, l: 102.0, c: 102.6 },
      { o: 102.6, h: 103.4, l: 102.5, c: 103.3 },
      { o: 103.3, h: 104.0, l: 103.2, c: 103.9 },
      { o: 103.9, h: 104.6, l: 103.8, c: 104.5 },
      { o: 104.5, h: 105.2, l: 104.4, c: 105.1 },
    ],
    annotations: [
      { type: 'level', price: 101.6, color: '#94a3b8', label: 'T1 — 2-min res' },
      { type: 'level', price: 102.2, color: '#94a3b8', label: 'T2 — next 2-min res' },
      { type: 'level', price: 102.7, color: '#94a3b8', label: 'T3 — next 2-min res' },
      { type: 'level', price: 103.4, color: '#94a3b8', label: 'T4 — next 2-min res' },
      { type: 'badge', at: { i: 4, price: 100.6 }, text: '+1R total — barely covers comms', color: '#ef4444' },
    ],
    verdict: { label: 'TINY TARGETS — small edge', type: 'bad' },
    caption: 'Every tier picked from the 2-min chart. Total move captured: tiny. Commission eats most of it.',
  },
  {
    title: 'GOOD — tiers laddered across 2/5/15/60-min levels',
    candles: [
      { o: 100.0, h: 100.4, l: 99.7, c: 100.3 },
      { o: 100.3, h: 101.0, l: 100.2, c: 100.9 },
      { o: 100.9, h: 101.6, l: 100.8, c: 101.5 },
      { o: 101.5, h: 102.4, l: 101.4, c: 102.3 },
      { o: 102.3, h: 103.2, l: 102.2, c: 103.1 },
      { o: 103.1, h: 104.4, l: 103.0, c: 104.3 },
      { o: 104.3, h: 105.6, l: 104.2, c: 105.5 },
      { o: 105.5, h: 107.0, l: 105.4, c: 106.9 },
      { o: 106.9, h: 108.4, l: 106.8, c: 108.3 },
    ],
    annotations: [
      { type: 'level', price: 101.6, color: '#22c55e', label: 'T1 — 2-min res (-25%)' },
      { type: 'level', price: 103.5, color: '#fbbf24', label: 'T2 — 5-min res (-25%)' },
      { type: 'level', price: 105.7, color: '#a78bfa', label: 'T3 — 15-min res (-25%)' },
      { type: 'level', price: 108.3, color: '#5eead4', label: 'T4 — 60-min trail (final 25%)' },
      { type: 'badge', at: { i: 8, price: 109.0 }, text: '+3R+ average', color: '#22c55e' },
    ],
    verdict: { label: 'BIG EDGE — full tier ladder', type: 'good' },
    caption: 'Tiers come from MULTIPLE timeframes. The runner stretches your average R from 1 to 3+ — same setup, dramatically better economics.',
  },
  {
    title: 'WHY HTF — markets respect 5/15/60-min, not 2-min',
    candles: [
      { o: 100.0, h: 100.4, l: 99.7, c: 100.3 },
      { o: 100.3, h: 101.5, l: 100.2, c: 101.4 },
      { o: 101.4, h: 102.8, l: 101.3, c: 102.7 },
      { o: 102.7, h: 104.2, l: 102.6, c: 104.1 },
      { o: 104.1, h: 105.6, l: 104.0, c: 105.5 },
      { o: 105.5, h: 107.0, l: 105.4, c: 106.9 },   // runs straight through 2-min levels
      { o: 106.9, h: 107.2, l: 106.8, c: 107.0 },   // stalls AT 15-min level
      { o: 107.0, h: 107.1, l: 106.5, c: 106.6 },
    ],
    annotations: [
      { type: 'level', price: 102.0, color: '#94a3b8', label: '2-min res — ignored' },
      { type: 'level', price: 104.5, color: '#94a3b8', label: '2-min res — ignored' },
      { type: 'level', price: 107.0, color: '#a78bfa', label: '15-min res — respected', dash: true },
    ],
    verdict: { label: 'HTF LEVELS = REAL DECISIONS', type: 'good' },
    caption: 'Watch how price ignores 2-min levels in a real move and then locks up at the 15-min level. Bigger players decide at bigger timeframes.',
  },
  {
    title: 'THE EDGE HIDES IN T4 — the runner does the heavy lifting',
    candles: [
      { o: 100.0, h: 100.4, l: 99.7, c: 100.3 },
      { o: 100.3, h: 101.6, l: 100.2, c: 101.5 },     // T1 hit
      { o: 101.5, h: 103.6, l: 101.4, c: 103.5 },     // T2 hit
      { o: 103.5, h: 105.6, l: 103.4, c: 105.5 },     // T3 hit
      { o: 105.5, h: 108.0, l: 105.4, c: 107.9 },
      { o: 107.9, h: 110.4, l: 107.8, c: 110.3 },
      { o: 110.3, h: 113.0, l: 110.2, c: 112.9 },     // T4 still riding
    ],
    annotations: [
      { type: 'zone', topPrice: 113.2, bottomPrice: 105.5, color: 'rgba(34, 197, 94, 0.10)', label: 'T4 RUNNER — biggest profit' },
      { type: 'badge', at: { i: 6, price: 114.5 }, text: 'Last 25% = 60% of total $', color: '#22c55e' },
    ],
    verdict: { label: 'EDGE = RUNNER', type: 'good' },
    caption: 'The last 25% of your position rides the biggest move. It is the difference between 1R months and 3R months.',
  },
  {
    title: 'PRE-TRADE TIER PLAN — mark before entering',
    candles: [
      { o: 100.0, h: 100.4, l: 99.7, c: 100.3 },
      { o: 100.3, h: 100.6, l: 100.0, c: 100.5 },
      { o: 100.5, h: 101.1, l: 100.4, c: 101.0 },
      { o: 101.0, h: 101.4, l: 100.9, c: 101.3 },
    ],
    annotations: [
      { type: 'level', price: 102.0, color: '#22c55e', label: 'T1 mark — 2-min res' },
      { type: 'level', price: 103.5, color: '#fbbf24', label: 'T2 mark — 5-min res' },
      { type: 'level', price: 105.7, color: '#a78bfa', label: 'T3 mark — 15-min res' },
      { type: 'level', price: 108.3, color: '#5eead4', label: 'T4 mark — 60-min trail' },
      { type: 'badge', at: { i: 3, price: 99.5 }, text: 'TIERS MARKED BEFORE ENTRY', color: '#22c55e' },
    ],
    verdict: { label: 'PLAN > IMPROVISE', type: 'good' },
    caption: 'Mark T1–T4 BEFORE entering. Decision under stress (during trade) is poor decision. Decide in calm; execute under stress.',
  },
  {
    title: 'M2K example — three tier targets, T3 hit on flag-in-flag',
    candles: [
      { o: 2870, h: 2872, l: 2868, c: 2870 },
      { o: 2870, h: 2878, l: 2869, c: 2877 },
      { o: 2877, h: 2884, l: 2876, c: 2882 },
      { o: 2882, h: 2888, l: 2881, c: 2886 },     // T1 zone
      { o: 2886, h: 2887, l: 2882, c: 2883 },
      { o: 2883, h: 2890, l: 2882, c: 2889 },     // T2 zone
      { o: 2889, h: 2893, l: 2887, c: 2888 },
      { o: 2888, h: 2895, l: 2887, c: 2894 },
      { o: 2894, h: 2905, l: 2893, c: 2904 },     // T3 hit (15-min level)
    ],
    annotations: [
      { type: 'level', price: 2886, color: '#22c55e', label: 'T1 — 2-min res' },
      { type: 'level', price: 2890, color: '#fbbf24', label: 'T2 — 5-min res' },
      { type: 'level', price: 2904, color: '#a78bfa', label: 'T3 — 15-min res', dash: true },
      { type: 'badge', at: { i: 8, price: 2908 }, text: '+$11.50 → +T2 → +T3', color: '#22c55e' },
    ],
    verdict: { label: 'TIERS DELIVERED', type: 'good' },
    caption: 'Real M2K trade. T1 paid for the day, T2 added cushion, T3 was the edge. Without HTF mapping, T3 never gets taken.',
  },
];
