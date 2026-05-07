// Teaching unit 10: Trending vs ranging sessions
export const charts = [
  {
    title: 'TRENDING UP — higher highs + higher lows',
    candles: [
      { o: 100, h: 100.5, l: 99.7, c: 100.3 },
      { o: 100.3, h: 101.5, l: 100.2, c: 101.3 },
      { o: 101.3, h: 102.0, l: 100.8, c: 101.8 },
      { o: 101.8, h: 103.0, l: 101.6, c: 102.8 },
      { o: 102.8, h: 103.5, l: 102.3, c: 103.3 },
      { o: 103.3, h: 104.5, l: 103.1, c: 104.3 },
      { o: 104.3, h: 105.0, l: 103.8, c: 104.8 },
      { o: 104.8, h: 106.0, l: 104.6, c: 105.8 },
      { o: 105.8, h: 106.5, l: 105.4, c: 106.3 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 99.7 }, to: { i: 8, price: 105.4 }, color: '#22c55e', label: 'higher lows' },
    ],
    verdict: { label: 'TRENDING — flag setups WORK', type: 'good' },
    caption: 'HH + HL pattern on the 30-45 minute scale. Flags continue. Take trend trades.',
  },
  {
    title: 'TRENDING DOWN — lower highs + lower lows',
    candles: [
      { o: 110, h: 110.3, l: 109.4, c: 109.6 },
      { o: 109.6, h: 109.8, l: 108.5, c: 108.7 },
      { o: 108.7, h: 109.0, l: 107.8, c: 107.9 },
      { o: 107.9, h: 108.2, l: 106.8, c: 107.0 },
      { o: 107.0, h: 107.3, l: 106.0, c: 106.2 },
      { o: 106.2, h: 106.5, l: 105.0, c: 105.2 },
      { o: 105.2, h: 105.5, l: 104.0, c: 104.3 },
      { o: 104.3, h: 104.7, l: 103.2, c: 103.5 },
      { o: 103.5, h: 103.8, l: 102.5, c: 102.7 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 110.3 }, to: { i: 8, price: 103.8 }, color: '#ef4444', label: 'lower highs' },
    ],
    verdict: { label: 'TRENDING DOWN — short flags work', type: 'bad' },
    caption: 'LH + LL pattern. Bear flags continue lower. Same logic, opposite direction.',
  },
  {
    title: 'RANGING — oscillation between two levels',
    candles: [
      { o: 100, h: 102.5, l: 99.7, c: 102.3 },
      { o: 102.3, h: 102.8, l: 101.0, c: 101.2 },
      { o: 101.2, h: 101.5, l: 99.5, c: 99.7 },
      { o: 99.7, h: 102.5, l: 99.5, c: 102.4 },
      { o: 102.4, h: 102.8, l: 100.5, c: 100.7 },
      { o: 100.7, h: 101.0, l: 99.4, c: 99.6 },
      { o: 99.6, h: 102.5, l: 99.5, c: 102.4 },
      { o: 102.4, h: 102.7, l: 100.0, c: 100.2 },
      { o: 100.2, h: 100.5, l: 99.5, c: 100.1 },
    ],
    annotations: [
      { type: 'level', price: 102.6, color: '#fbbf24', label: 'range top' },
      { type: 'level', price: 99.5, color: '#fbbf24', label: 'range bottom' },
    ],
    verdict: { label: 'RANGING — skip flag setups', type: 'warn' },
    caption: 'Reversals at both ends, no follow-through. Flags fail here. Fade the extremes or stay flat.',
  },
  {
    title: 'CONFLICTING TRENDLINES — trend unclear, PASS',
    candles: [
      { o: 100, h: 101.5, l: 99.5, c: 101.3 },
      { o: 101.3, h: 101.5, l: 100.5, c: 100.6 },
      { o: 100.6, h: 102.5, l: 100.5, c: 102.3 },
      { o: 102.3, h: 102.5, l: 100.7, c: 100.9 },
      { o: 100.9, h: 101.5, l: 99.5, c: 99.7 },
      { o: 99.7, h: 102.0, l: 99.6, c: 101.8 },
      { o: 101.8, h: 102.5, l: 100.0, c: 100.2 },
      { o: 100.2, h: 102.5, l: 100.0, c: 102.3 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 99.5 }, to: { i: 7, price: 100.0 }, color: '#5eead4', dash: true },
      { type: 'trendline', from: { i: 0, price: 101.5 }, to: { i: 6, price: 100.5 }, color: '#fbbf24', dash: true },
      { type: 'badge', at: { i: 4, price: 101.0 }, text: 'CROSSING', color: '#ef4444' },
    ],
    verdict: { label: 'UNCLEAR — PASS', type: 'warn' },
    caption: "When trendlines cross or contradict, the system is telling you 'unclear.' That IS the signal — pass on directional trades.",
  },
  {
    title: "TODAY'S ES choppy session — clean engulfings, all reversed",
    candles: [
      { o: 100, h: 102.0, l: 99.5, c: 101.8 },
      { o: 101.8, h: 102.0, l: 99.0, c: 99.2 }, // bearish engulfing
      { o: 99.2, h: 101.8, l: 99.0, c: 101.6 }, // reversed
      { o: 101.6, h: 101.8, l: 98.7, c: 98.9 }, // another bearish engulfing
      { o: 98.9, h: 102.5, l: 98.8, c: 102.3 }, // reversed
      { o: 102.3, h: 102.5, l: 99.5, c: 99.7 }, // another bearish engulfing
      { o: 99.7, h: 102.0, l: 99.5, c: 101.8 }, // reversed
      { o: 101.8, h: 102.0, l: 99.0, c: 99.2 }, // another bearish engulfing
      { o: 99.2, h: 101.5, l: 99.1, c: 101.3 }, // reversed
    ],
    annotations: [
      { type: 'badge', at: { i: 1, price: 101.5 }, text: '×', color: '#ef4444' },
      { type: 'badge', at: { i: 3, price: 101.5 }, text: '×', color: '#ef4444' },
      { type: 'badge', at: { i: 5, price: 101.5 }, text: '×', color: '#ef4444' },
      { type: 'badge', at: { i: 7, price: 101.5 }, text: '×', color: '#ef4444' },
    ],
    verdict: { label: 'RANGE — every short failed', type: 'bad' },
    caption: 'Real ES from today. Bearish engulfings kept firing — but in a range, every short reversed. Read environment first.',
  },
  {
    title: 'CLEAN trending session — flag setup carries',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.5, l: 99.95, c: 102.3 },
      { o: 102.3, h: 102.6, l: 101.7, c: 101.9 },
      { o: 101.9, h: 102.1, l: 101.4, c: 101.6 },
      { o: 101.6, h: 102.5, l: 101.5, c: 102.4 },
      { o: 102.4, h: 104.5, l: 102.3, c: 104.3 },
      { o: 104.3, h: 105.5, l: 104.2, c: 105.4 },
      { o: 105.4, h: 106.5, l: 105.3, c: 106.3 },
      { o: 106.3, h: 107.5, l: 106.2, c: 107.3 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 99.7 }, to: { i: 8, price: 106.2 }, color: '#22c55e' },
      { type: 'arrow', at: { i: 4, price: 102.7 }, direction: 'up', color: '#22c55e', label: 'FLAG WORKS' },
    ],
    verdict: { label: 'TRENDING — TAKE THE TRADE', type: 'good' },
    caption: 'Same flag pattern as the failed-engulfing chart, but the environment is trending. Setup carries to target.',
  },
  {
    title: 'RANGE — fade the extremes (different playbook)',
    candles: [
      { o: 100, h: 100.3, l: 99.5, c: 99.8 },
      { o: 99.8, h: 100.0, l: 99.1, c: 99.3 },
      { o: 99.3, h: 99.5, l: 99.0, c: 99.2 }, // range low
      { o: 99.2, h: 100.5, l: 99.1, c: 100.3 }, // BUY THE LOW
      { o: 100.3, h: 101.5, l: 100.2, c: 101.3 },
      { o: 101.3, h: 102.0, l: 101.1, c: 101.8 }, // range high
      { o: 101.8, h: 102.0, l: 101.0, c: 101.1 }, // FADE THE HIGH
      { o: 101.1, h: 101.3, l: 100.0, c: 100.2 },
      { o: 100.2, h: 100.5, l: 99.2, c: 99.4 },
    ],
    annotations: [
      { type: 'level', price: 102.0, color: '#fbbf24', label: 'range top' },
      { type: 'level', price: 99.0, color: '#fbbf24', label: 'range bottom' },
      { type: 'arrow', at: { i: 3, price: 99.5 }, direction: 'up', color: '#22c55e', label: 'BUY' },
      { type: 'arrow', at: { i: 6, price: 101.7 }, direction: 'down', color: '#ef4444', label: 'SHORT' },
    ],
    verdict: { label: 'RANGE PLAYBOOK — fade extremes', type: 'info' },
    caption: 'In a range, BUY the bottom and SHORT the top. Mid-range, do nothing. Skip flags entirely.',
  },
];
