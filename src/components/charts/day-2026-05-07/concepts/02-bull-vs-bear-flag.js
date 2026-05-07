// Teaching unit 2: Bull flag vs bear flag — pole determines direction
export const charts = [
  {
    title: 'BULL FLAG — UP pole + identical-shape consolidation',
    candles: [
      { o: 100, h: 100.5, l: 99.8, c: 100.2 },
      { o: 100.2, h: 102.5, l: 100.1, c: 102.3 }, // pole bars
      { o: 102.3, h: 104.5, l: 102.2, c: 104.3 },
      { o: 104.3, h: 106.5, l: 104.2, c: 106.3 },
      { o: 106.3, h: 107.0, l: 105.4, c: 105.6 }, // flag bars
      { o: 105.6, h: 105.9, l: 104.9, c: 105.1 },
      { o: 105.1, h: 105.4, l: 104.5, c: 104.7 },
      { o: 104.7, h: 105.1, l: 104.2, c: 104.5 },
      { o: 104.5, h: 106.5, l: 104.4, c: 106.3 }, // breakout
    ],
    annotations: [
      { type: 'trendline', from: { i: 4, price: 107.0 }, to: { i: 7, price: 105.1 }, color: '#5eead4', label: 'flag top' },
      { type: 'trendline', from: { i: 4, price: 105.4 }, to: { i: 7, price: 104.2 }, color: '#5eead4', dash: true, label: 'flag bottom' },
      { type: 'arrow', at: { i: 1, price: 100.5 }, direction: 'up', color: '#22c55e', label: 'POLE START' },
      { type: 'arrow', at: { i: 8, price: 106.0 }, direction: 'up', color: '#22c55e', label: 'BREAKOUT' },
    ],
    verdict: { label: 'BULL FLAG — go LONG', type: 'good' },
    caption: 'Strong UP pole + descending consolidation = continuation higher. Pole sets direction.',
  },
  {
    title: 'BEAR FLAG — IDENTICAL flag shape but DOWN pole',
    candles: [
      { o: 110, h: 110.2, l: 109.8, c: 109.9 },
      { o: 109.9, h: 110.0, l: 107.7, c: 107.9 }, // pole down
      { o: 107.9, h: 108.0, l: 105.7, c: 105.9 },
      { o: 105.9, h: 106.0, l: 103.7, c: 103.9 },
      { o: 103.9, h: 105.2, l: 103.8, c: 105.0 }, // flag bars (rising)
      { o: 105.0, h: 105.3, l: 104.6, c: 105.1 },
      { o: 105.1, h: 105.7, l: 105.0, c: 105.5 },
      { o: 105.5, h: 105.9, l: 105.3, c: 105.7 },
      { o: 105.7, h: 105.8, l: 103.7, c: 103.9 }, // breakdown
    ],
    annotations: [
      { type: 'trendline', from: { i: 4, price: 105.2 }, to: { i: 7, price: 105.9 }, color: '#5eead4', label: 'flag top' },
      { type: 'trendline', from: { i: 4, price: 103.8 }, to: { i: 7, price: 105.3 }, color: '#5eead4', dash: true, label: 'flag bottom' },
      { type: 'arrow', at: { i: 1, price: 109.7 }, direction: 'down', color: '#ef4444', label: 'POLE START' },
      { type: 'arrow', at: { i: 8, price: 104.0 }, direction: 'down', color: '#ef4444', label: 'BREAKDOWN' },
    ],
    verdict: { label: 'BEAR FLAG — go SHORT', type: 'bad' },
    caption: 'Same consolidation shape as the bull flag — but the prior pole is DOWN. Continuation lower.',
  },
  {
    title: 'NO POLE — just chop. Not a flag, not a trade.',
    candles: [
      { o: 100, h: 100.4, l: 99.6, c: 99.9 },
      { o: 99.9, h: 100.5, l: 99.6, c: 100.3 },
      { o: 100.3, h: 100.6, l: 99.5, c: 99.7 },
      { o: 99.7, h: 100.4, l: 99.4, c: 100.2 },
      { o: 100.2, h: 100.5, l: 99.7, c: 99.9 },
      { o: 99.9, h: 100.3, l: 99.5, c: 100.1 },
      { o: 100.1, h: 100.5, l: 99.7, c: 99.8 },
      { o: 99.8, h: 100.4, l: 99.6, c: 100.2 },
      { o: 100.2, h: 100.5, l: 99.6, c: 99.9 },
    ],
    annotations: [
      { type: 'badge', at: { i: 4, price: 99.5 }, text: 'NO POLE', color: '#ef4444' },
    ],
    verdict: { label: 'NOT A FLAG — JUST NOISE', type: 'bad' },
    caption: "If you can't immediately point to a clean impulsive move, there is no flag. Pass.",
  },
  {
    title: '5-MINUTE truth-filter — uptrend confirms ambiguous 2-min',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100, h: 102, l: 99.9, c: 101.9 },
      { o: 101.9, h: 104, l: 101.8, c: 103.8 },
      { o: 103.8, h: 106, l: 103.7, c: 105.9 },
      { o: 105.9, h: 108, l: 105.8, c: 107.9 },
      { o: 107.9, h: 110, l: 107.8, c: 109.9 },
      { o: 109.9, h: 110.5, l: 108.5, c: 108.8 },
      { o: 108.8, h: 109.5, l: 107.8, c: 108.0 },
      { o: 108.0, h: 110.5, l: 107.9, c: 110.3 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 99.7 }, to: { i: 5, price: 110 }, color: '#5eead4', label: '5-min trend = UP' },
      { type: 'badge', at: { i: 7, price: 107.8 }, text: 'BULL FLAG (5m confirmed)', color: '#22c55e' },
    ],
    verdict: { label: 'BULL FLAG via 5-MIN CHECK', type: 'good' },
    caption: 'When 2-min is unclear, drop to 5-min. The bigger timeframe reveals the pole.',
  },
  {
    title: 'WEAK pole — no real impulse — flag is a fake',
    candles: [
      { o: 100, h: 100.5, l: 99.8, c: 100.1 },
      { o: 100.1, h: 100.6, l: 99.7, c: 100.4 },
      { o: 100.4, h: 100.9, l: 100.1, c: 100.7 }, // weak grind
      { o: 100.7, h: 101.2, l: 100.4, c: 101.0 },
      { o: 101.0, h: 101.5, l: 100.7, c: 101.3 },
      { o: 101.3, h: 101.5, l: 100.9, c: 101.0 }, // "flag"
      { o: 101.0, h: 101.2, l: 100.6, c: 100.8 },
      { o: 100.8, h: 101.0, l: 100.5, c: 100.7 },
      { o: 100.7, h: 100.9, l: 100.1, c: 100.2 }, // breaks down
    ],
    annotations: [
      { type: 'badge', at: { i: 2, price: 100.4 }, text: 'WEAK POLE', color: '#ef4444' },
    ],
    verdict: { label: 'NOT A TRUE FLAG', type: 'bad' },
    caption: 'Slow grind = not a pole. Without a real impulse, the "flag" has no momentum to continue.',
  },
  {
    title: 'TEXTBOOK BULL FLAG — pole + clean flag + breakout',
    candles: [
      { o: 100, h: 100.4, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.5, l: 99.95, c: 102.3 },
      { o: 102.3, h: 105.0, l: 102.2, c: 104.8 },
      { o: 104.8, h: 107.5, l: 104.7, c: 107.3 },
      { o: 107.3, h: 108.0, l: 106.5, c: 106.7 },
      { o: 106.7, h: 107.0, l: 106.0, c: 106.2 },
      { o: 106.2, h: 106.5, l: 105.6, c: 105.8 },
      { o: 105.8, h: 106.2, l: 105.4, c: 106.0 },
      { o: 106.0, h: 108.5, l: 105.9, c: 108.3 },
      { o: 108.3, h: 110.5, l: 108.2, c: 110.3 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 4, price: 108.0 }, to: { i: 7, price: 106.2 }, color: '#5eead4', label: 'flag top' },
      { type: 'trendline', from: { i: 4, price: 106.5 }, to: { i: 7, price: 105.4 }, color: '#5eead4', dash: true },
      { type: 'arrow', at: { i: 8, price: 107.5 }, direction: 'up', color: '#22c55e', label: 'ENTRY' },
    ],
    verdict: { label: 'TEXTBOOK SETUP', type: 'good' },
    caption: '4-bar pole, expanding volume on pole, contracting flag, breakout closes above flag top. Take it.',
  },
  {
    title: 'TEXTBOOK BEAR FLAG — same template, opposite direction',
    candles: [
      { o: 110, h: 110.3, l: 109.6, c: 110.0 },
      { o: 110.0, h: 110.05, l: 107.5, c: 107.7 },
      { o: 107.7, h: 107.8, l: 105.0, c: 105.2 },
      { o: 105.2, h: 105.3, l: 102.5, c: 102.7 },
      { o: 102.7, h: 104.0, l: 102.6, c: 103.8 },
      { o: 103.8, h: 104.5, l: 103.4, c: 104.2 },
      { o: 104.2, h: 104.7, l: 103.8, c: 104.5 },
      { o: 104.5, h: 105.0, l: 104.1, c: 104.7 },
      { o: 104.7, h: 104.8, l: 102.5, c: 102.7 },
      { o: 102.7, h: 102.8, l: 100.0, c: 100.2 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 4, price: 104.0 }, to: { i: 7, price: 105.0 }, color: '#5eead4', dash: true },
      { type: 'trendline', from: { i: 4, price: 102.6 }, to: { i: 7, price: 104.1 }, color: '#5eead4', label: 'flag bottom' },
      { type: 'arrow', at: { i: 8, price: 103.5 }, direction: 'down', color: '#ef4444', label: 'ENTRY' },
    ],
    verdict: { label: 'TEXTBOOK SETUP', type: 'bad' },
    caption: 'The flag candles RISE here — exactly the opposite shape from the pole — yet still continues lower because the pole was down.',
  },
];
