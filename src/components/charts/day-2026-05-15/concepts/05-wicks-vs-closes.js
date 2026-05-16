// Teaching unit 5: Wicks vs Closes — the test/break distinction.
// Two charts: a WICK through a level (a test — continuation),
// vs a CLOSE through a level (a break — invalidation).
export const charts = [
  {
    title: 'WICK through = TEST (often strong continuation)',
    candles: [
      { o: 2842, h: 2845, l: 2840, c: 2844 },
      { o: 2844, h: 2847, l: 2842, c: 2846 },
      { o: 2846, h: 2849, l: 2844, c: 2847 },
      { o: 2847, h: 2853, l: 2846, c: 2848 },
      { o: 2848, h: 2850, l: 2843, c: 2844 },
      { o: 2844, h: 2846, l: 2839, c: 2840 },
      { o: 2840, h: 2842, l: 2836, c: 2837 },
      { o: 2837, h: 2839, l: 2832, c: 2833 },
    ],
    annotations: [
      { type: 'level', price: 2850, color: '#FFB44A', label: 'RESISTANCE 2850' },
      { type: 'arrow', at: { i: 3, price: 2853 }, direction: 'up', color: '#00D9A0', label: 'wick to 2853 — TEST' },
      { type: 'badge', at: { i: 3, price: 2856 }, text: 'wick rejected — sellers smacked it back', color: '#00D9A0' },
      { type: 'arrow', at: { i: 7, price: 2833 }, direction: 'down', color: '#00D9A0', label: 'continuation lower' },
    ],
    verdict: { label: 'Wick test = bullish for the sellers — held the line', type: 'good' },
    caption: 'Buyers stuck their head through 2850. Sellers smacked them back. Bar closed below the level. The TEST was bearish proof of resistance — and the short thesis was reinforced, not invalidated.',
  },
  {
    title: 'CLOSE through = BREAK (invalidation)',
    candles: [
      { o: 2842, h: 2845, l: 2840, c: 2844 },
      { o: 2844, h: 2847, l: 2842, c: 2846 },
      { o: 2846, h: 2849, l: 2844, c: 2847 },
      { o: 2847, h: 2851, l: 2845, c: 2848 },
      { o: 2848, h: 2854, l: 2848, c: 2853 },
      { o: 2853, h: 2858, l: 2852, c: 2856 },
      { o: 2856, h: 2860, l: 2854, c: 2858 },
      { o: 2858, h: 2862, l: 2857, c: 2861 },
    ],
    annotations: [
      { type: 'level', price: 2850, color: '#FF3D5A', label: 'RESISTANCE 2850' },
      { type: 'arrow', at: { i: 4, price: 2853 }, direction: 'up', color: '#FF3D5A', label: 'CLOSE above 2850 — BREAK' },
      { type: 'badge', at: { i: 4, price: 2856 }, text: 'thesis INVALIDATED', color: '#FF3D5A' },
      { type: 'arrow', at: { i: 7, price: 2861 }, direction: 'up', color: '#FF3D5A', label: 'price runs higher' },
    ],
    verdict: { label: 'Close = supply genuinely shifted — flip the bias', type: 'bad' },
    caption: 'Same level. Different result. Bar CLOSED above 2850 — supply moved out of the way. This is the invalidation. Stop hit on the bar that closed above. Bias flips: no longer a short setup.',
  },
];
