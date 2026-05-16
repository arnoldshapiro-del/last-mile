// Teaching unit 8: The pre-flight check.
// One illustrative chart — the moment of clicking, with the three things to read.
export const charts = [
  {
    title: 'Read THREE things out loud before every click',
    candles: [
      { o: 2848, h: 2851, l: 2845, c: 2846 },
      { o: 2846, h: 2848, l: 2842, c: 2843 },
      { o: 2843, h: 2845, l: 2839, c: 2840 },
      { o: 2840, h: 2842, l: 2836, c: 2837 },
      { o: 2837, h: 2840, l: 2835, c: 2836 },
    ],
    annotations: [
      { type: 'badge', at: { i: 0, price: 2852 }, text: '① CHART symbol (top-left of chart)', color: '#FFB44A' },
      { type: 'badge', at: { i: 2, price: 2848 }, text: '② ATM template name (top-right of order panel)', color: '#FFB44A' },
      { type: 'badge', at: { i: 4, price: 2843 }, text: '③ QUANTITY field', color: '#FFB44A' },
      { type: 'arrow', at: { i: 4, price: 2836 }, direction: 'down', color: '#00D9A0', label: 'NOW click' },
      { type: 'zone', topPrice: 2853, bottomPrice: 2832, color: 'rgba(255, 180, 74, 0.05)' },
    ],
    verdict: { label: '3-second verbal verification — non-negotiable', type: 'good' },
    caption: 'Today\'s most expensive mistake (Mistake 1) was the cheapest one to prevent: MES chart, M2K-sized ATM, 16 contracts instead of 8. Say it out loud: "MES chart. MES ATM. 8 contracts." Only then click.',
  },
];
