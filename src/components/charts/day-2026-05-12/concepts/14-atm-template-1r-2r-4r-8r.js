// Teaching unit 14: ATM template — 1R / 2R / 4R / 8R geometric progression.
export const charts = [
  {
    title: 'M2K Template — 16 contracts split 4-4-4-4',
    candles: [
      { o: 2810, h: 2810.5, l: 2809.5, c: 2810.2 },
      { o: 2810.2, h: 2811, l: 2810, c: 2810.8 },
      { o: 2810.8, h: 2813, l: 2810.5, c: 2812.5 },
      { o: 2812.5, h: 2815, l: 2812, c: 2814.5 },
      { o: 2814.5, h: 2818, l: 2814, c: 2817.5 },
      { o: 2817.5, h: 2822, l: 2817, c: 2821.5 },
      { o: 2821.5, h: 2826, l: 2821, c: 2825.5 },
      { o: 2825.5, h: 2830, l: 2825, c: 2829.5 },
    ],
    annotations: [
      { type: 'level', price: 2808.5, color: '#FF3D5A', label: 'Stop −15 ticks' },
      { type: 'level', price: 2811.5, color: '#FBBF24', label: 'T1 +15 = 1R · 4 contracts' },
      { type: 'level', price: 2813, color: '#FBBF24', label: 'T2 +30 = 2R · 4 contracts' },
      { type: 'level', price: 2816, color: '#FBBF24', label: 'T3 +60 = 4R · 4 contracts' },
      { type: 'level', price: 2822, color: '#00D9A0', label: 'T4 +120 = 8R · 4 contracts' },
    ],
    verdict: { label: 'Risk $120 → max reward $450 → blended 3.75R if all hit', type: 'good' },
    caption: 'M2K 16 contracts, stop 15 ticks all targets, TPs at 15/30/60/120 ticks. T4 at 120 ticks = 12 points — only hits on real trend days. That is what makes it a runner.',
  },
  {
    title: 'MES Template — 8 contracts split 2-2-2-2',
    candles: [
      { o: 7377, h: 7378, l: 7376.5, c: 7377.5 },
      { o: 7377.5, h: 7379, l: 7377, c: 7378.5 },
      { o: 7378.5, h: 7382, l: 7378, c: 7381.5 },
      { o: 7381.5, h: 7385, l: 7381, c: 7384.5 },
      { o: 7384.5, h: 7388, l: 7384, c: 7387.5 },
      { o: 7387.5, h: 7392, l: 7387, c: 7391.5 },
      { o: 7391.5, h: 7400, l: 7391, c: 7399.5 },
      { o: 7399.5, h: 7407, l: 7399, c: 7406.5 },
    ],
    annotations: [
      { type: 'level', price: 7373.5, color: '#FF3D5A', label: 'Stop −15 ticks' },
      { type: 'level', price: 7381, color: '#FBBF24', label: 'T1 +15 = 1R · 2 contracts' },
      { type: 'level', price: 7384.75, color: '#FBBF24', label: 'T2 +30 = 2R · 2 contracts' },
      { type: 'level', price: 7392.25, color: '#FBBF24', label: 'T3 +60 = 4R · 2 contracts' },
      { type: 'level', price: 7407.25, color: '#00D9A0', label: 'T4 +120 = 8R · 2 contracts' },
    ],
    verdict: { label: 'Risk $150 → max reward $562.50 → blended 3.75R if all hit', type: 'good' },
    caption: 'MES 8 contracts, stop 15 ticks all targets, TPs at 15/30/60/120 ticks. T4 at 30 points = a real day-trend move. Hits ~5-10% of the time and pays for multiple losers.',
  },
  {
    title: 'Why NOT Fibonacci multiples — they cap the runner',
    candles: [
      { o: 100, h: 100.1, l: 99.9, c: 100 },
    ],
    annotations: [
      { type: 'level', price: 100, color: '#a78bfa', label: 'Entry / 0R' },
      { type: 'level', price: 101, color: '#FBBF24', label: '1R T1' },
      { type: 'level', price: 101.618, color: '#FBBF24', label: '1.618R T2 (Fib)', dash: true },
      { type: 'level', price: 102.618, color: '#FBBF24', label: '2.618R T3 (Fib)', dash: true },
      { type: 'level', price: 104.236, color: '#FF3D5A', label: '4.236R cap (Fib) — too low' },
      { type: 'level', price: 108, color: '#00D9A0', label: '8R ladder — better' },
    ],
    verdict: { label: 'Fibonacci caps at 4.236R. Geometric ladder caps at 8R+', type: 'good' },
    caption: 'Fibonacci is elegant but caps your max blended reward. The 1/2/4/8 geometric doubling ladder pushes harder on the runner — exactly where the asymmetric edge lives.',
  },
];
