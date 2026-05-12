// Teaching unit 10: The four trades a trendline gives you.
export const charts = [
  {
    title: 'Trade 1 — FADE the line (continuation in trend direction)',
    candles: [
      { o: 105, h: 105.5, l: 104, c: 104.2 },
      { o: 104.2, h: 104.5, l: 103, c: 103.5 },
      { o: 103.5, h: 104, l: 102, c: 102.5 },
      { o: 102.5, h: 104.6, l: 102.3, c: 104.5 },
      { o: 104.5, h: 104.6, l: 103, c: 103.2 },
      { o: 103.2, h: 103.5, l: 101.5, c: 102 },
      { o: 102, h: 102.3, l: 100.5, c: 100.8 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 105.5 }, to: { i: 6, price: 102 }, color: '#00D9A0', label: 'Downtrend line' },
      { type: 'arrow', at: { i: 3, price: 104.6 }, direction: 'down', color: '#FF3D5A', label: 'SHORT here' },
    ],
    verdict: { label: 'Rally INTO the line + rejection candle = continuation short', type: 'good' },
    caption: 'When price rallies up to the line in a downtrend and prints a bearish rejection candle (shooting star, bearish engulfing), short with stop above the line. "Fade the line."',
  },
  {
    title: 'Trade 2 — BREAK of the line (trend change entry)',
    candles: [
      { o: 105, h: 105.5, l: 104, c: 104.2 },
      { o: 104.2, h: 104.5, l: 103, c: 103.5 },
      { o: 103.5, h: 104, l: 102.5, c: 103 },
      { o: 103, h: 103.5, l: 102, c: 102.5 },
      { o: 102.5, h: 104.5, l: 102.3, c: 104.3 },
      { o: 104.3, h: 104.5, l: 103.5, c: 103.8 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 105.5 }, to: { i: 4, price: 103.5 }, color: '#FF3D5A', dash: true, label: 'Broken' },
      { type: 'arrow', at: { i: 4, price: 104.3 }, direction: 'up', color: '#00D9A0', label: 'LONG on close above' },
    ],
    verdict: { label: 'Body close past the line = trade Trade 2 long', type: 'good' },
    caption: 'When a body CLOSES across the line decisively and stays there for 1-2 candles, the trend velocity has broken. Enter in the direction of the break. Stop on the other side of the line.',
  },
  {
    title: 'Trade 3 — RETEST after break (highest probability)',
    candles: [
      { o: 105, h: 105.5, l: 104, c: 104.2 },
      { o: 104.2, h: 104.5, l: 103, c: 103.5 },
      { o: 103.5, h: 104, l: 102.5, c: 103 },
      { o: 103, h: 104.8, l: 102.8, c: 104.6 },
      { o: 104.6, h: 105, l: 104.2, c: 104.8 },
      { o: 104.8, h: 105, l: 104, c: 104.2 },
      { o: 104.2, h: 105, l: 103.8, c: 104.9 },
      { o: 104.9, h: 105.5, l: 104.7, c: 105.4 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 105.5 }, to: { i: 7, price: 104 }, color: '#FBBF24', label: 'Former resistance → support' },
      { type: 'arrow', at: { i: 3, price: 104.6 }, direction: 'up', color: '#00D9A0', label: 'broke' },
      { type: 'arrow', at: { i: 5, price: 104.2 }, direction: 'up', color: '#00D9A0', label: 'retest = ENTER' },
    ],
    verdict: { label: 'Cleanest of the four — tight stop on wrong side', type: 'good' },
    caption: 'After a break, price often returns to retest the line from the other side — former resistance becomes support. Enter on the retest with a tight stop on the wrong side of the line.',
  },
  {
    title: 'Trade 4 — TARGET identification (extending the line forward)',
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100.2 },
      { o: 100.2, h: 101, l: 100, c: 100.8 },
      { o: 100.8, h: 102, l: 100.7, c: 101.5 },
      { o: 101.5, h: 103, l: 101.3, c: 102.5 },
      { o: 102.5, h: 104, l: 102.3, c: 103.5 },
      { o: 103.5, h: 105, l: 103.3, c: 104.5 },
      { o: 104.5, h: 106, l: 104.3, c: 105.5 },
      { o: 105.5, h: 107, l: 105.3, c: 106.5 },
      { o: 106.5, h: 108, l: 106.3, c: 107.5 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 100.5 }, to: { i: 8, price: 108.5 }, color: '#FBBF24', label: 'Project line forward to find next rejection zone' },
      { type: 'arrow', at: { i: 8, price: 108 }, direction: 'up', color: '#FBBF24', label: 'expected R' },
    ],
    verdict: { label: 'Extend the line — more art than science', type: 'good' },
    caption: 'Extending the trendline forward gives you a projected level where future rejections may occur. Useful for setting target zones and managing position scaling.',
  },
];
