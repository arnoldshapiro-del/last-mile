// Teaching unit 3: Layer 3 — PATTERN at the LOCATION.
// Two charts: bearish engulfing at the 5-min swing high (PATTERN + LOCATION),
// vs. bearish engulfing in the middle of a range (PATTERN ALONE = noise).
export const charts = [
  {
    title: 'Bearish engulfing AT the 5-min swing high',
    candles: [
      { o: 2832, h: 2836, l: 2830, c: 2835 },
      { o: 2835, h: 2840, l: 2834, c: 2839 },
      { o: 2839, h: 2845, l: 2838, c: 2844 },
      { o: 2844, h: 2850, l: 2843, c: 2848 },
      { o: 2848, h: 2853, l: 2847, c: 2850 },
      { o: 2850, h: 2853, l: 2845, c: 2846 },
      { o: 2846, h: 2848, l: 2840, c: 2841 },
      { o: 2841, h: 2843, l: 2836, c: 2838 },
    ],
    annotations: [
      { type: 'level', price: 2853, color: '#00D9A0', label: '5-min swing high (LOCATION)' },
      { type: 'badge', at: { i: 5, price: 2856 }, text: 'BEARISH ENGULFING right at the level', color: '#00D9A0' },
      { type: 'arrow', at: { i: 5, price: 2846 }, direction: 'down', color: '#00D9A0', label: 'engulfing closes below prior body' },
      { type: 'arrow', at: { i: 7, price: 2838 }, direction: 'down', color: '#00D9A0', label: 'continuation' },
    ],
    verdict: { label: 'Pattern + Location = considered trade', type: 'good' },
    caption: 'Bearish engulfing prints AT the prior swing-high level. The pattern is the market saying "I tested this and rejected it" in real time. THIS is the setup.',
  },
  {
    title: 'Same pattern, NO location = noise',
    candles: [
      { o: 2832, h: 2836, l: 2830, c: 2835 },
      { o: 2835, h: 2838, l: 2833, c: 2837 },
      { o: 2837, h: 2841, l: 2836, c: 2840 },
      { o: 2840, h: 2842, l: 2837, c: 2838 },
      { o: 2838, h: 2843, l: 2836, c: 2841 },
      { o: 2841, h: 2843, l: 2837, c: 2838 },
      { o: 2838, h: 2842, l: 2837, c: 2841 },
      { o: 2841, h: 2845, l: 2840, c: 2844 },
      { o: 2844, h: 2849, l: 2843, c: 2848 },
    ],
    annotations: [
      { type: 'level', price: 2853, color: '#888', dash: true, label: '5-min swing high (far above — no location here)' },
      { type: 'badge', at: { i: 5, price: 2845 }, text: 'BEARISH ENGULFING in mid-range', color: '#FF3D5A' },
      { type: 'arrow', at: { i: 5, price: 2837 }, direction: 'down', color: '#FF3D5A' },
      { type: 'arrow', at: { i: 8, price: 2848 }, direction: 'up', color: '#FF3D5A', label: 'pattern failed — price continued up' },
    ],
    verdict: { label: 'Pattern alone = guess, not edge', type: 'bad' },
    caption: 'Identical pattern. NOT at a meaningful level. The market is not rejecting anything — just two candles printed a shape. Price continued higher. Pattern alone is noise.',
  },
];
