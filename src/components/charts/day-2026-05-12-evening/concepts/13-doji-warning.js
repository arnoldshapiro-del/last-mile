// Teaching unit 13: Doji — warning not signal. Wait for the next candle.
export const charts = [
  {
    title: 'Doji at a top — WARNING (don\'t short the doji)',
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100.2 },
      { o: 100.2, h: 101, l: 100, c: 100.8 },
      { o: 100.8, h: 102, l: 100.7, c: 101.8 },
      { o: 101.8, h: 102.5, l: 101.7, c: 102.3 },
      { o: 102.3, h: 103, l: 102.2, c: 102.8 },
      { o: 102.8, h: 103.5, l: 101.5, c: 102.85 },
      { o: 102.85, h: 103, l: 102.7, c: 102.8 },
    ],
    annotations: [
      { type: 'badge', at: { i: 5, price: 103 }, color: '#FBBF24', text: 'DOJI — wait' },
      { type: 'arrow', at: { i: 5, price: 102.85 }, direction: 'down', color: '#FBBF24', label: 'indecision' },
    ],
    verdict: { label: 'Doji = pay attention, NOT enter', type: 'warn' },
    caption: 'A doji at the top of an uptrend is a yellow flag — buyers and sellers just matched up. Most beginners short here. The right move is to wait for the next candle to confirm direction.',
  },
  {
    title: 'Doji resolved DOWN — short on next candle break',
    candles: [
      { o: 102.8, h: 103.5, l: 101.5, c: 102.85 },
      { o: 102.85, h: 103, l: 100, c: 100.2 },
      { o: 100.2, h: 100.5, l: 99, c: 99.3 },
      { o: 99.3, h: 99.5, l: 98, c: 98.5 },
    ],
    annotations: [
      { type: 'level', price: 101.5, color: '#FBBF24', label: 'Doji low — break = signal', dash: true },
      { type: 'arrow', at: { i: 1, price: 100.2 }, direction: 'up', color: '#FF3D5A', label: 'SHORT trigger' },
    ],
    verdict: { label: 'Next candle answers the doji\'s question', type: 'good' },
    caption: 'The candle AFTER the doji broke below the doji\'s low — that\'s the trigger. Short on the close, stop above the doji\'s wick high. The doji set up the trade; the next candle triggered it.',
  },
  {
    title: 'Doji resolved UP — uptrend resumes, no short',
    candles: [
      { o: 102.8, h: 103.5, l: 101.5, c: 102.85 },
      { o: 102.85, h: 105, l: 102.8, c: 104.7 },
      { o: 104.7, h: 106, l: 104.5, c: 105.7 },
      { o: 105.7, h: 107, l: 105.5, c: 106.8 },
    ],
    annotations: [
      { type: 'level', price: 103.5, color: '#FBBF24', label: 'Doji high — break = trend continues', dash: true },
      { type: 'arrow', at: { i: 1, price: 105 }, direction: 'down', color: '#00D9A0', label: 'NO short — trend resumes' },
    ],
    verdict: { label: 'Doji resolved UP — short would have been wrong', type: 'good' },
    caption: 'If you had shorted the doji ITSELF, you would have been stopped. Waiting for the next candle saved you. The next candle broke ABOVE the doji high — uptrend resumes. No trade.',
  },
];
