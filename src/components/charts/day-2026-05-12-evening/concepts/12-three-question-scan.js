// Teaching unit 12: The 3-question mental shortcut for every candle.
export const charts = [
  {
    title: 'Q1 — Is there a long wick? → Pin Bar territory',
    candles: [
      { o: 100, h: 100.2, l: 96, c: 99.8 },
      { o: 99.8, h: 104, l: 99.5, c: 100 },
    ],
    annotations: [
      { type: 'badge', at: { i: 0, price: 100.5 }, color: '#FBBF24', text: 'hammer' },
      { type: 'badge', at: { i: 1, price: 104 }, color: '#FF3D5A', text: 'shooting star' },
      { type: 'arrow', at: { i: 0, price: 96 }, direction: 'up', color: '#22D3EE', label: 'long lower' },
      { type: 'arrow', at: { i: 1, price: 104 }, direction: 'down', color: '#FF3D5A', label: 'long upper' },
    ],
    verdict: { label: 'YES = Pin Bar', type: 'good' },
    caption: 'Question 1: look at the candle. Is there a long wick (2x the body or more)? If yes, you have a pin bar — someone got rejected. Direction depends on which end the wick is on.',
  },
  {
    title: 'Q2 — Body coverage? → Engulfing or Inside Bar',
    candles: [
      { o: 100, h: 100.5, l: 99, c: 99.5 },
      { o: 99.5, h: 102, l: 99, c: 101.8 },
      { o: 101.8, h: 102, l: 100, c: 101 },
      { o: 101, h: 101.5, l: 100.5, c: 101.2 },
    ],
    annotations: [
      { type: 'badge', at: { i: 1, price: 102 }, color: '#00D9A0', text: 'engulfs candle 1' },
      { type: 'badge', at: { i: 3, price: 101.5 }, color: '#a78bfa', text: 'inside candle 3' },
    ],
    verdict: { label: 'YES = Engulfing OR Inside Bar', type: 'good' },
    caption: 'Question 2: did one candle\'s body completely cover or get covered by another? Engulfing = reversal. Inside Bar = continuation pause. Both worth trading with context.',
  },
  {
    title: 'Q3 — No wicks? → Marubozu',
    candles: [
      { o: 100, h: 100.2, l: 99.8, c: 100 },
      { o: 100, h: 103, l: 100, c: 103 },
      { o: 103, h: 103.2, l: 102.8, c: 103 },
    ],
    annotations: [
      { type: 'badge', at: { i: 1, price: 103 }, color: '#FBBF24', text: 'MARUBOZU' },
      { type: 'arrow', at: { i: 1, price: 100 }, direction: 'down', color: '#FBBF24', label: 'no wicks' },
    ],
    verdict: { label: 'YES = Marubozu', type: 'good' },
    caption: 'Question 3: is the candle all body, no wicks? That\'s a marubozu — pure one-sided momentum. Buyers (or sellers) owned the bar bell-to-bell. Ride it.',
  },
];
