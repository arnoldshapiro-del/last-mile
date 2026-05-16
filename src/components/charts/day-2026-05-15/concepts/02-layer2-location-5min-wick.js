// Teaching unit 2: Layer 2 — LOCATION on the 5-minute chart.
// Two charts: swing high marked at WICK (correct) vs at BODY (mistake).
export const charts = [
  {
    title: 'Mark the swing high at the WICK (correct)',
    candles: [
      { o: 2832, h: 2834, l: 2829, c: 2831 },
      { o: 2831, h: 2834, l: 2828, c: 2830 },
      { o: 2830, h: 2836, l: 2829, c: 2835 },
      { o: 2835, h: 2842, l: 2834, c: 2841 },
      { o: 2841, h: 2848, l: 2840, c: 2846 },
      { o: 2846, h: 2853, l: 2845, c: 2847 },
      { o: 2847, h: 2849, l: 2843, c: 2844 },
      { o: 2844, h: 2846, l: 2840, c: 2842 },
      { o: 2842, h: 2845, l: 2838, c: 2839 },
      { o: 2839, h: 2841, l: 2836, c: 2837 },
    ],
    annotations: [
      { type: 'level', price: 2853, color: '#00D9A0', label: '5-min swing HIGH at WICK (2853) — STOP goes just above this' },
      { type: 'level', price: 2847, color: '#FF3D5A', dash: true, label: 'BODY high (2847) — DO NOT mark here' },
      { type: 'arrow', at: { i: 5, price: 2853 }, direction: 'down', color: '#00D9A0', label: 'sellers rejected here' },
      { type: 'badge', at: { i: 5, price: 2854 }, text: 'TRUE swing — wick = where sellers stepped in', color: '#00D9A0' },
    ],
    verdict: { label: 'Stop above wick — gives the level room to be tested', type: 'good' },
    caption: 'The wick at 2853 is where sellers actually appeared. The body close at 2847 is where they took profit. The TEST happens at the wick. Stop goes there.',
  },
  {
    title: 'Marking at the BODY = stop too tight (mistake)',
    candles: [
      { o: 2832, h: 2834, l: 2829, c: 2831 },
      { o: 2831, h: 2834, l: 2828, c: 2830 },
      { o: 2830, h: 2836, l: 2829, c: 2835 },
      { o: 2835, h: 2842, l: 2834, c: 2841 },
      { o: 2841, h: 2848, l: 2840, c: 2846 },
      { o: 2846, h: 2853, l: 2845, c: 2847 },
      { o: 2847, h: 2849, l: 2843, c: 2844 },
      { o: 2844, h: 2850, l: 2842, c: 2843 },
      { o: 2843, h: 2846, l: 2840, c: 2841 },
      { o: 2841, h: 2843, l: 2838, c: 2840 },
    ],
    annotations: [
      { type: 'level', price: 2847, color: '#FF3D5A', label: 'Body-high stop (2847) — STOPPED OUT on normal test' },
      { type: 'level', price: 2853, color: '#888', dash: true, label: '(true swing wick — should have been here)' },
      { type: 'arrow', at: { i: 7, price: 2850 }, direction: 'up', color: '#FF3D5A', label: 'normal test wicks through body-stop' },
      { type: 'badge', at: { i: 7, price: 2851 }, text: 'STOPPED — wick reached 2850', color: '#FF3D5A' },
    ],
    verdict: { label: 'Body-stop too tight, stopped on normal noise', type: 'bad' },
    caption: 'Same setup. Stop at the BODY instead of the wick. Normal upper wick of a continuation test reached 2850 — stop hit, trade dead, and price then resumed down to where the thesis was right.',
  },
];
