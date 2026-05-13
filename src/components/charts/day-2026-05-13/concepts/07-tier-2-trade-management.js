// Teaching unit 7: Tier 2 as trade management — three uses beyond entry.
export const charts = [
  {
    title: 'Use 1 — HOLDING power through pullback noise',
    candles: [
      { o: 2832, h: 2834, l: 2832, c: 2833.5 },
      { o: 2833.5, h: 2837, l: 2833, c: 2836.5 },
      { o: 2836.5, h: 2837, l: 2834, c: 2834.5 },
      { o: 2834.5, h: 2835, l: 2832.5, c: 2833.5 },
      { o: 2833.5, h: 2835, l: 2832.8, c: 2834.5 },
      { o: 2834.5, h: 2838, l: 2834, c: 2837.5 },
      { o: 2837.5, h: 2840, l: 2837, c: 2839.5 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 1, price: 2836.5 }, direction: 'up', color: '#00D9A0', label: 'Long entry' },
      { type: 'badge', at: { i: 4, price: 2835 }, color: '#FBBF24', text: 'Hammer at pullback low' },
      { type: 'arrow', at: { i: 6, price: 2839.5 }, direction: 'up', color: '#00D9A0', label: 'HELD — runner ran' },
    ],
    verdict: { label: 'Tier 2 = "hold, don\'t cut on noise"', type: 'good' },
    caption: 'You\'re already long. Price pulls back. A small hammer prints at the pullback low. That Tier 2 signal is permission to HOLD through the noise instead of cutting early.',
  },
  {
    title: 'Use 2 — DEFENSIVE signal at resistance',
    candles: [
      { o: 2840, h: 2841, l: 2839, c: 2840.5 },
      { o: 2840.5, h: 2842, l: 2840, c: 2841.5 },
      { o: 2841.5, h: 2843, l: 2841, c: 2842.5 },
      { o: 2842.5, h: 2843.5, l: 2842, c: 2843 },
      { o: 2843, h: 2843.5, l: 2839, c: 2839.5 },
      { o: 2839.5, h: 2840, l: 2837, c: 2837.5 },
    ],
    annotations: [
      { type: 'level', price: 2843.5, color: '#FF3D5A', label: 'Resistance — pre-mapped', dash: true },
      { type: 'badge', at: { i: 4, price: 2843.5 }, color: '#FF3D5A', text: 'Bearish engulfing' },
      { type: 'arrow', at: { i: 4, price: 2843.5 }, direction: 'down', color: '#FBBF24', label: 'TIGHTEN OR PARTIAL' },
    ],
    verdict: { label: 'Tier 2 = "tighten stop, take partial"', type: 'warn' },
    caption: 'You\'re long. Price reaches resistance and a bearish engulfing prints. That Tier 2 signal is the cue to tighten the stop or take partial profits — defend the trade.',
  },
  {
    title: 'Use 3 — DON\'T-ADD warning (doji at key level)',
    candles: [
      { o: 2837, h: 2838, l: 2836, c: 2837.5 },
      { o: 2837.5, h: 2839, l: 2837, c: 2838.5 },
      { o: 2838.5, h: 2841, l: 2838, c: 2840.5 },
      { o: 2840.5, h: 2842, l: 2840, c: 2841.5 },
      { o: 2841.5, h: 2842.5, l: 2840.5, c: 2841.6 },
      { o: 2841.6, h: 2842, l: 2841.2, c: 2841.5 },
    ],
    annotations: [
      { type: 'level', price: 2842, color: '#FBBF24', label: 'Key level — decision zone', dash: true },
      { type: 'badge', at: { i: 5, price: 2842.5 }, color: '#FBBF24', text: 'DOJI — indecision' },
      { type: 'badge', at: { i: 4, price: 2843 }, color: '#FF3D5A', text: 'DO NOT ADD HERE' },
    ],
    verdict: { label: 'Tier 2 = "market is undecided, don\'t pyramid"', type: 'warn' },
    caption: 'A doji at a key level says the market is genuinely undecided here. Do NOT add to your position at the doji — wait for the next candle to resolve direction.',
  },
  {
    title: 'Three uses on one chart — entry, hold, defense',
    candles: [
      { o: 2826, h: 2826.5, l: 2824, c: 2824.5 },
      { o: 2824.5, h: 2828, l: 2823.5, c: 2827.5 },
      { o: 2827.5, h: 2832, l: 2827, c: 2831.5 },
      { o: 2831.5, h: 2832, l: 2829.5, c: 2830 },
      { o: 2830, h: 2834, l: 2829.8, c: 2833.5 },
      { o: 2833.5, h: 2838, l: 2833, c: 2837.5 },
      { o: 2837.5, h: 2841, l: 2837, c: 2840.5 },
      { o: 2840.5, h: 2843, l: 2840, c: 2842.5 },
      { o: 2842.5, h: 2843.5, l: 2840, c: 2840.5 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 2, price: 2832 }, direction: 'up', color: '#00D9A0', label: 'ENTRY (T1)' },
      { type: 'badge', at: { i: 3, price: 2832.5 }, color: '#FBBF24', text: 'Hammer = HOLD' },
      { type: 'badge', at: { i: 8, price: 2844 }, color: '#FF3D5A', text: 'Engulfing = DEFEND' },
    ],
    verdict: { label: 'Same brick, three jobs — read context', type: 'good' },
    caption: 'Tier 2 patterns have three management uses: hold through noise, defensive tighten, never-add warning. Same hammer means different things depending on WHERE it prints.',
  },
];
