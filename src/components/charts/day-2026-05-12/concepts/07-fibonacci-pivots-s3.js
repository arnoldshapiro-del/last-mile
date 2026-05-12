// Teaching unit 7: Fibonacci pivots — what S3 actually is.
export const charts = [
  {
    title: "Pivot Point (PP) = (Yesterday's High + Low + Close) ÷ 3",
    candles: [
      { o: 7400, h: 7420, l: 7370, c: 7390 },
      { o: 7390, h: 7395, l: 7385, c: 7388 },
      { o: 7388, h: 7398, l: 7382, c: 7396 },
      { o: 7396, h: 7402, l: 7390, c: 7392 },
      { o: 7392, h: 7395, l: 7388, c: 7390 },
    ],
    annotations: [
      { type: 'level', price: 7420, color: '#FBBF24', label: "Yesterday's High 7420" },
      { type: 'level', price: 7370, color: '#FBBF24', label: "Yesterday's Low 7370", dash: true },
      { type: 'level', price: 7390, color: '#a78bfa', label: "Close 7390 → PP = 7393.33" },
    ],
    verdict: { label: 'PP = (7420 + 7370 + 7390) ÷ 3 = 7393.33', type: 'good' },
    caption: "The central pivot is the average of yesterday's high, low, and close. Everything else (R1-R3, S1-S3) is calculated as Fibonacci ratios of yesterday's range applied above/below PP.",
  },
  {
    title: "S1 / S2 / S3 = PP − range × {0.382, 0.618, 1.000}",
    candles: [
      { o: 7393, h: 7393.5, l: 7393, c: 7393.2 },
    ],
    annotations: [
      { type: 'level', price: 7393.33, color: '#a78bfa', label: 'PP 7393.33' },
      { type: 'level', price: 7374.23, color: '#FBBF24', label: 'S1 (−0.382 × range)', dash: true },
      { type: 'level', price: 7362.43, color: '#FBBF24', label: 'S2 (−0.618 × range)', dash: true },
      { type: 'level', price: 7343.33, color: '#FF3D5A', label: 'S3 (−1.000 × range)' },
    ],
    verdict: { label: 'S3 = yesterday\'s full range projected downward from PP', type: 'good' },
    caption: "S3 is the level where price has dropped one full prior-day range below today's pivot point. It's not magic — it's geometry applied to volume-weighted memory of yesterday.",
  },
  {
    title: 'Why traders care — S3 is a BATTLE ZONE, not destiny',
    candles: [
      { o: 7375, h: 7376, l: 7372, c: 7372.5 },
      { o: 7372.5, h: 7373, l: 7368, c: 7368.5 },
      { o: 7368.5, h: 7369, l: 7364, c: 7364.5 },
      { o: 7364.5, h: 7365, l: 7361, c: 7362 },
      { o: 7362, h: 7363, l: 7361, c: 7362.5 },
      { o: 7362.5, h: 7367, l: 7362, c: 7366.5 },
      { o: 7366.5, h: 7370, l: 7366, c: 7369.5 },
    ],
    annotations: [
      { type: 'level', price: 7363.08, color: '#FBBF24', label: 'S3 — 7363.08' },
      { type: 'arrow', at: { i: 4, price: 7361 }, direction: 'up', color: '#00D9A0', label: 'mean-rev buyers' },
      { type: 'arrow', at: { i: 4, price: 7363 }, direction: 'down', color: '#FF3D5A', label: 'breakdown shorts' },
    ],
    verdict: { label: 'Mean-rev buyers vs breakdown shorts cluster here', type: 'good' },
    caption: 'Two opposing forces meet at S3 — buyers fading the move and sellers riding the breakdown. That collision is why S3 produces sharp reversals OR violent breakdowns, never quiet drift.',
  },
];
