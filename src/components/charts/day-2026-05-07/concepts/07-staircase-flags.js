// Teaching unit 7: Staircase / multiple flags — second & third flag entries
export const charts = [
  {
    title: 'STAIRCASE — pole-flag-pole-flag-pole-flag (3 entries)',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.5, l: 99.95, c: 102.3 }, // pole 1
      { o: 102.3, h: 102.6, l: 101.7, c: 101.9 }, // flag 1
      { o: 101.9, h: 102.1, l: 101.4, c: 101.6 },
      { o: 101.6, h: 103.8, l: 101.5, c: 103.7 }, // pole 2
      { o: 103.7, h: 105.5, l: 103.6, c: 105.3 },
      { o: 105.3, h: 105.6, l: 104.5, c: 104.7 }, // flag 2
      { o: 104.7, h: 105.0, l: 104.2, c: 104.4 },
      { o: 104.4, h: 106.5, l: 104.3, c: 106.3 }, // pole 3
      { o: 106.3, h: 108.0, l: 106.2, c: 107.8 },
      { o: 107.8, h: 108.0, l: 107.0, c: 107.2 }, // flag 3
      { o: 107.2, h: 109.5, l: 107.1, c: 109.3 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 4, price: 101.7 }, direction: 'up', color: '#22c55e', label: '#1' },
      { type: 'arrow', at: { i: 8, price: 104.5 }, direction: 'up', color: '#22c55e', label: '#2' },
      { type: 'arrow', at: { i: 11, price: 107.4 }, direction: 'up', color: '#22c55e', label: '#3' },
    ],
    verdict: { label: '3 INDEPENDENT TRADES', type: 'good' },
    caption: 'Each flag in the sequence is its own trade with the same rules. Three valid setups in one trend.',
  },
  {
    title: 'Missed flag #1 — flag #2 is a clean SECOND chance',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.5, l: 99.95, c: 102.3 },
      { o: 102.3, h: 102.6, l: 101.7, c: 101.9 },
      { o: 101.9, h: 102.1, l: 101.4, c: 101.6 },
      { o: 101.6, h: 102.5, l: 101.5, c: 102.4 }, // flag 1 breaks — missed
      { o: 102.4, h: 104.5, l: 102.3, c: 104.3 },
      { o: 104.3, h: 105.5, l: 104.2, c: 105.4 }, // pole 2
      { o: 105.4, h: 105.6, l: 104.5, c: 104.7 }, // flag 2
      { o: 104.7, h: 105.0, l: 104.2, c: 104.4 },
      { o: 104.4, h: 106.5, l: 104.3, c: 106.3 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 4, price: 102.6 }, direction: 'up', color: '#94a3b8', label: 'missed' },
      { type: 'arrow', at: { i: 9, price: 104.5 }, direction: 'up', color: '#22c55e', label: 'TAKE THIS' },
    ],
    verdict: { label: 'FLAG #2 = FRESH TRADE', type: 'good' },
    caption: 'Missing #1 does not disqualify #2. Apply the same rules from scratch. Often #2 is cleaner because trend is confirmed.',
  },
  {
    title: 'Don\'t CHASE between flags — wait for the next flag to form',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.5, l: 99.95, c: 102.3 },
      { o: 102.3, h: 102.6, l: 101.7, c: 101.9 },
      { o: 101.9, h: 102.4, l: 101.5, c: 102.3 },
      { o: 102.3, h: 104.0, l: 102.2, c: 103.9 }, // mid-pole 2
      { o: 103.9, h: 104.5, l: 103.7, c: 103.8 }, // chase here is BAD
      { o: 103.8, h: 105.0, l: 103.7, c: 104.9 },
      { o: 104.9, h: 105.0, l: 102.5, c: 102.7 }, // pullback hits chase stop
      { o: 102.7, h: 102.8, l: 101.5, c: 101.6 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 5, price: 104.5 }, direction: 'up', color: '#ef4444', label: 'CHASE' },
      { type: 'arrow', at: { i: 8, price: 102.0 }, direction: 'down', color: '#ef4444', label: 'STOPPED' },
    ],
    verdict: { label: 'CHASE BETWEEN FLAGS — BAD', type: 'bad' },
    caption: 'Mid-pole entry has no defined stop. Wait for the next flag to form, then take it cleanly.',
  },
  {
    title: 'DIMINISHING POLES — trend is tiring',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 103.5, l: 99.95, c: 103.3 }, // big pole 1 (3.3 pts)
      { o: 103.3, h: 103.5, l: 102.5, c: 102.7 },
      { o: 102.7, h: 103.0, l: 102.4, c: 102.6 },
      { o: 102.6, h: 105.0, l: 102.5, c: 104.9 }, // medium pole 2 (2.3 pts)
      { o: 104.9, h: 105.1, l: 104.3, c: 104.5 },
      { o: 104.5, h: 104.7, l: 104.2, c: 104.3 },
      { o: 104.3, h: 105.5, l: 104.2, c: 105.4 }, // small pole 3 (1.1 pts)
      { o: 105.4, h: 105.6, l: 105.0, c: 105.2 },
      { o: 105.2, h: 105.4, l: 104.0, c: 104.1 }, // and stalls
    ],
    annotations: [
      { type: 'badge', at: { i: 1, price: 101.7 }, text: '3.3pt', color: '#22c55e' },
      { type: 'badge', at: { i: 4, price: 103.7 }, text: '2.3pt', color: '#FFB44A' },
      { type: 'badge', at: { i: 7, price: 104.9 }, text: '1.1pt', color: '#ef4444' },
    ],
    verdict: { label: 'TREND TIRING — SKIP', type: 'warn' },
    caption: 'Pole sizes shrinking step-to-step. Take smaller targets or skip the next flag entirely.',
  },
  {
    title: 'Bearish staircase — DOWN trend with 3 flags',
    candles: [
      { o: 110, h: 110.3, l: 109.7, c: 110.0 },
      { o: 110.0, h: 110.05, l: 107.5, c: 107.7 },
      { o: 107.7, h: 108.5, l: 107.6, c: 108.3 },
      { o: 108.3, h: 108.5, l: 107.9, c: 108.0 },
      { o: 108.0, h: 108.1, l: 105.5, c: 105.7 },
      { o: 105.7, h: 106.5, l: 105.6, c: 106.3 },
      { o: 106.3, h: 106.5, l: 105.9, c: 106.0 },
      { o: 106.0, h: 106.1, l: 103.5, c: 103.7 },
      { o: 103.7, h: 104.5, l: 103.6, c: 104.3 },
      { o: 104.3, h: 104.4, l: 102.0, c: 102.2 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 4, price: 106.0 }, direction: 'down', color: '#ef4444', label: '#1' },
      { type: 'arrow', at: { i: 7, price: 104.0 }, direction: 'down', color: '#ef4444', label: '#2' },
      { type: 'arrow', at: { i: 9, price: 103.0 }, direction: 'down', color: '#ef4444', label: '#3' },
    ],
    verdict: { label: 'BEARISH STAIRCASE', type: 'bad' },
    caption: 'Same logic, opposite direction. Each lower-high flag is its own short setup with the same rules.',
  },
  {
    title: 'Staircase ENDS on 50% retrace — final flag dies',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.5, l: 99.95, c: 102.3 },
      { o: 102.3, h: 102.6, l: 101.7, c: 101.9 },
      { o: 101.9, h: 104.0, l: 101.85, c: 103.9 },
      { o: 103.9, h: 105.5, l: 103.8, c: 105.4 },
      { o: 105.4, h: 105.6, l: 104.5, c: 104.7 }, // start of flag 3
      { o: 104.7, h: 104.9, l: 103.0, c: 103.2 }, // breaks 50% of pole 3
      { o: 103.2, h: 103.5, l: 102.0, c: 102.2 },
      { o: 102.2, h: 102.5, l: 100.5, c: 100.7 },
    ],
    annotations: [
      { type: 'level', price: 104.7, color: '#fbbf24', label: '50% line of pole 3', dash: true },
      { type: 'badge', at: { i: 6, price: 103.2 }, text: 'STAIRCASE OVER', color: '#ef4444' },
    ],
    verdict: { label: 'TREND OVER — DO NOT FIGHT', type: 'bad' },
    caption: 'Staircase ends when a flag breaks 50%. The next "flag" forming is a new trend down, not a continuation.',
  },
];
