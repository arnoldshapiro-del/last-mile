// Teaching unit 8: Flag Inside a Flag — When the Original Thesis Resumes.
// Concept — bearish reversal candle at top doesn't always invalidate; watch 20 EMA.
export const charts = [
  {
    title: 'THE SETUP — bearish engulfing, then secondary consolidation',
    candles: [
      { o: 100.0, h: 101.0, l: 99.9, c: 100.9 },
      { o: 100.9, h: 102.4, l: 100.8, c: 102.3 },
      { o: 102.3, h: 103.8, l: 102.2, c: 103.7 },
      { o: 103.7, h: 103.8, l: 103.0, c: 103.2 },
      { o: 103.2, h: 103.4, l: 102.7, c: 102.9 },
      { o: 102.9, h: 104.2, l: 102.8, c: 104.1 },  // breakout
      { o: 104.1, h: 104.9, l: 104.0, c: 104.8 },
      { o: 104.8, h: 104.8, l: 103.6, c: 103.7 },  // BEARISH ENGULFING
      { o: 103.7, h: 104.3, l: 103.6, c: 104.2 },  // secondary consolidation
      { o: 104.2, h: 104.4, l: 103.9, c: 104.1 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 7, price: 105.0 }, direction: 'down', color: '#fbbf24', label: 'Bearish engulfing' },
      { type: 'zone', topPrice: 104.4, bottomPrice: 103.6, color: 'rgba(167, 139, 250, 0.10)', label: 'SECONDARY FLAG' },
      { type: 'level', price: 103.7, color: '#a78bfa', label: '20 EMA — currently holding', dash: true },
    ],
    verdict: { label: 'OBSERVE — EMA decides', type: 'warn' },
    caption: 'The bearish engulfing did not kill the trend — it just paused it. Watch the 20 EMA. If it holds, the original thesis is still alive.',
  },
  {
    title: 'EMA HOLDS — original thesis resumes (continuation)',
    candles: [
      { o: 100.0, h: 102.4, l: 99.9, c: 102.3 },
      { o: 102.3, h: 103.8, l: 102.2, c: 103.7 },
      { o: 103.7, h: 104.2, l: 103.0, c: 103.2 },
      { o: 103.2, h: 104.2, l: 102.8, c: 104.1 },
      { o: 104.1, h: 104.9, l: 104.0, c: 104.8 },
      { o: 104.8, h: 104.8, l: 103.6, c: 103.7 },   // engulfing
      { o: 103.7, h: 104.3, l: 103.6, c: 104.2 },
      { o: 104.2, h: 104.4, l: 103.9, c: 104.1 },   // EMA holds
      { o: 104.1, h: 105.3, l: 104.0, c: 105.2 },   // breakout from secondary flag
      { o: 105.2, h: 106.4, l: 105.1, c: 106.3 },
      { o: 106.3, h: 107.4, l: 106.2, c: 107.3 },
    ],
    annotations: [
      { type: 'level', price: 103.9, color: '#22c55e', label: '20 EMA — HELD' },
      { type: 'arrow', at: { i: 8, price: 105.0 }, direction: 'up', color: '#22c55e', label: 'Original thesis resumes' },
      { type: 'badge', at: { i: 10, price: 107.8 }, text: 'T3 HIT', color: '#22c55e' },
    ],
    verdict: { label: 'FLAG-IN-FLAG WORKED', type: 'good' },
    caption: 'EMA held through the consolidation. Secondary flag broke out. Original trend resumed. Runners ride to T3.',
  },
  {
    title: 'EMA BREAKS — reversal is real, exit runners',
    candles: [
      { o: 100.0, h: 102.4, l: 99.9, c: 102.3 },
      { o: 102.3, h: 103.8, l: 102.2, c: 103.7 },
      { o: 103.7, h: 104.2, l: 103.0, c: 103.2 },
      { o: 103.2, h: 104.2, l: 102.8, c: 104.1 },
      { o: 104.1, h: 104.9, l: 104.0, c: 104.8 },
      { o: 104.8, h: 104.8, l: 103.6, c: 103.7 },
      { o: 103.7, h: 103.8, l: 103.0, c: 103.1 },   // testing EMA
      { o: 103.1, h: 103.2, l: 102.4, c: 102.5 },   // BROKE EMA
      { o: 102.5, h: 102.7, l: 101.6, c: 101.7 },
      { o: 101.7, h: 101.9, l: 100.8, c: 100.9 },
    ],
    annotations: [
      { type: 'level', price: 103.0, color: '#ef4444', label: '20 EMA — BROKEN' },
      { type: 'arrow', at: { i: 7, price: 102.5 }, direction: 'down', color: '#ef4444', label: 'EMA fails — exit' },
      { type: 'badge', at: { i: 9, price: 100.0 }, text: 'REVERSAL REAL', color: '#ef4444' },
    ],
    verdict: { label: 'EXIT RUNNERS', type: 'bad' },
    caption: 'EMA broke with conviction. The reversal is real. BE protection prevented loss; lesson is to read the EMA decisively.',
  },
  {
    title: 'M2K SECONDARY FLAG — actual trade, T3 hit',
    candles: [
      { o: 2870, h: 2873, l: 2868, c: 2872 },
      { o: 2872, h: 2880, l: 2871, c: 2879 },
      { o: 2879, h: 2886, l: 2878, c: 2885 },
      { o: 2885, h: 2890, l: 2882, c: 2884 },
      { o: 2884, h: 2885, l: 2880, c: 2881 },   // flag low — Inverted Hammer entry near here
      { o: 2881, h: 2886, l: 2880, c: 2885 },
      { o: 2885, h: 2891, l: 2884, c: 2890 },   // breakout
      { o: 2890, h: 2893, l: 2887, c: 2888 },   // bearish engulfing
      { o: 2888, h: 2892, l: 2887, c: 2891 },   // secondary flag forming
      { o: 2891, h: 2893, l: 2889, c: 2892 },
      { o: 2892, h: 2898, l: 2891, c: 2897 },   // resumes — T2
      { o: 2897, h: 2905, l: 2896, c: 2904 },   // T3 — runner home
    ],
    annotations: [
      { type: 'level', price: 2884.5, color: '#22c55e', label: 'Entry 2884.50' },
      { type: 'level', price: 2889, color: '#a78bfa', label: '20 EMA — held' },
      { type: 'badge', at: { i: 7, price: 2884 }, text: 'BE scare', color: '#fbbf24' },
      { type: 'badge', at: { i: 11, price: 2908 }, text: 'T3', color: '#22c55e' },
    ],
    verdict: { label: 'FRAMEWORK WORKED', type: 'good' },
    caption: 'M2K bull flag, bearish engulfing scare at top, secondary flag held the 20 EMA, then breakout to T3. Process trumped outcome.',
  },
  {
    title: 'FALSE flag-in-flag — EMA holds briefly, then breaks',
    candles: [
      { o: 100.0, h: 102.4, l: 99.9, c: 102.3 },
      { o: 102.3, h: 103.8, l: 102.2, c: 103.7 },
      { o: 103.7, h: 104.2, l: 103.0, c: 103.2 },
      { o: 103.2, h: 104.2, l: 102.8, c: 104.1 },
      { o: 104.1, h: 104.9, l: 104.0, c: 104.8 },
      { o: 104.8, h: 104.8, l: 103.6, c: 103.7 },
      { o: 103.7, h: 104.3, l: 103.6, c: 104.0 },   // appears to hold
      { o: 104.0, h: 104.1, l: 103.0, c: 103.1 },   // EMA breaks NOW
      { o: 103.1, h: 103.3, l: 102.0, c: 102.2 },
    ],
    annotations: [
      { type: 'level', price: 103.5, color: '#fbbf24', label: '20 EMA — held one bar, then failed' },
      { type: 'arrow', at: { i: 7, price: 103.0 }, direction: 'down', color: '#ef4444', label: 'Delayed break — still a break' },
    ],
    verdict: { label: 'EXIT — even late', type: 'warn' },
    caption: 'EMA can hold one or two bars then fail. Watch closes, not wicks. A second-bar EMA close-below is still a structural break.',
  },
  {
    title: 'CHARACTER MATTERS — calm rest vs panicked drop',
    candles: [
      { o: 100.0, h: 102.4, l: 99.9, c: 102.3 },
      { o: 102.3, h: 103.8, l: 102.2, c: 103.7 },
      { o: 103.7, h: 104.8, l: 103.6, c: 104.7 },
      { o: 104.7, h: 104.8, l: 103.6, c: 103.7 },
      // Path A: calm consolidation (continuation likely)
      { o: 103.7, h: 104.0, l: 103.6, c: 103.9 },
      { o: 103.9, h: 104.1, l: 103.7, c: 104.0 },
      { o: 104.0, h: 105.0, l: 103.9, c: 104.9 },
    ],
    annotations: [
      { type: 'zone', topPrice: 104.1, bottomPrice: 103.6, color: 'rgba(34, 197, 94, 0.10)', label: 'CALM consolidation — narrow range' },
      { type: 'arrow', at: { i: 6, price: 105.2 }, direction: 'up', color: '#22c55e', label: 'Continues up' },
    ],
    verdict: { label: 'REST = THESIS LIVES', type: 'good' },
    caption: 'Calm narrow-range consolidation = market resting. Panicked wide bars going down = reversal. Read the character.',
  },
];
