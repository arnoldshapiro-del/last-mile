// Teaching unit 3: Morning Star variations — Standard, Doji Star.
export const charts = [
  {
    title: 'STANDARD — small-body middle candle (acceptable)',
    candles: [
      { o: 110, h: 110.2, l: 108, c: 108.2 },
      { o: 108.2, h: 108.5, l: 100, c: 100.5 },
      { o: 100.5, h: 101, l: 99, c: 99.5 },
      { o: 99.5, h: 105, l: 99, c: 104.7 },
      { o: 104.7, h: 106, l: 104.5, c: 105.8 },
    ],
    annotations: [
      { type: 'badge', at: { i: 2, price: 100.5 }, color: '#a78bfa', text: 'small body' },
    ],
    verdict: { label: '~65% with confluence', type: 'warn' },
    caption: 'Small body still shows sellers pausing, but not as decisively as a doji. The middle candle is short and stubby. Acceptable but second-tier signal.',
  },
  {
    title: 'DOJI STAR — open ≈ close (strongest variant)',
    candles: [
      { o: 110, h: 110.2, l: 108, c: 108.2 },
      { o: 108.2, h: 108.5, l: 100, c: 100.5 },
      { o: 100.5, h: 101, l: 99, c: 100.4 },
      { o: 100.4, h: 105, l: 100, c: 104.7 },
      { o: 104.7, h: 106, l: 104.5, c: 105.8 },
    ],
    annotations: [
      { type: 'badge', at: { i: 2, price: 100.4 }, color: '#FBBF24', text: 'DOJI' },
      { type: 'arrow', at: { i: 2, price: 100.5 }, direction: 'down', color: '#FBBF24', label: 'open = close' },
    ],
    verdict: { label: '~75% with confluence — wait for this', type: 'good' },
    caption: 'Open and close are essentially the same — the body is a flat line. Perfect equilibrium. Stronger signal because indecision is sharper. This is the variant worth waiting for.',
  },
  {
    title: 'ABANDONED BABY — rare; gap-isolated middle candle',
    candles: [
      { o: 110, h: 110.2, l: 108, c: 108.2 },
      { o: 108.2, h: 108.5, l: 100, c: 100.5 },
      { o: 96, h: 96.5, l: 95, c: 95.5 },
      { o: 102, h: 105, l: 102, c: 104.7 },
      { o: 104.7, h: 106, l: 104.5, c: 105.8 },
    ],
    annotations: [
      { type: 'badge', at: { i: 2, price: 96.5 }, color: '#FBBF24', text: 'ABANDONED' },
      { type: 'arrow', at: { i: 2, price: 100 }, direction: 'down', color: '#FF3D5A', label: 'gap' },
      { type: 'arrow', at: { i: 3, price: 102 }, direction: 'up', color: '#00D9A0', label: 'gap' },
    ],
    verdict: { label: 'Essentially never seen in futures', type: 'warn' },
    caption: 'Middle candle gaps DOWN from Candle 1 AND gaps UP into Candle 3, with shadows that don\'t overlap. Extremely rare in stocks, virtually nonexistent in 24-hour futures. Don\'t wait for this.',
  },
];
