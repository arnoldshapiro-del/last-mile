// Teaching unit 6: Four faster-than-W entries.
export const charts = [
  {
    title: 'Entry 1 — Bullish rejection candle AT known support',
    candles: [
      { o: 7375, h: 7376, l: 7373, c: 7373.5 },
      { o: 7373.5, h: 7374, l: 7369, c: 7369.5 },
      { o: 7369.5, h: 7370, l: 7365, c: 7365.5 },
      { o: 7365.5, h: 7366, l: 7362, c: 7363.5 },
      { o: 7363.5, h: 7370, l: 7362.5, c: 7369 },
      { o: 7369, h: 7373, l: 7368.5, c: 7372.5 },
    ],
    annotations: [
      { type: 'level', price: 7363.08, color: '#FBBF24', label: 'S3 — 7363.08' },
      { type: 'pivot', at: { i: 4, side: 'low' }, color: '#00D9A0', label: 'Hammer at S3' },
      { type: 'arrow', at: { i: 4, price: 7369 }, direction: 'up', color: '#00D9A0', label: 'ENTER on close' },
    ],
    verdict: { label: 'Stop just below S3 — 3-5 point risk', type: 'good' },
    caption: 'Price drops to a known support (S3 here). A hammer or bullish engulfing prints AT the level. Enter on the close. Stop a few ticks below. No double bottom required.',
  },
  {
    title: 'Entry 2 — Trendline break (body close above descending line)',
    candles: [
      { o: 7400, h: 7401, l: 7395, c: 7395.5 },
      { o: 7395.5, h: 7396, l: 7390, c: 7390.5 },
      { o: 7390.5, h: 7391, l: 7385, c: 7385.5 },
      { o: 7385.5, h: 7386, l: 7378, c: 7378.5 },
      { o: 7378.5, h: 7380, l: 7376, c: 7376.5 },
      { o: 7376.5, h: 7385, l: 7376, c: 7384 },
      { o: 7384, h: 7387, l: 7383, c: 7386.5 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 7401 }, to: { i: 5, price: 7382 }, color: '#FF3D5A', label: 'Descending line' },
      { type: 'arrow', at: { i: 5, price: 7384 }, direction: 'up', color: '#00D9A0', label: 'BODY CLOSE above' },
    ],
    verdict: { label: 'Trend structurally broken — enter or wait for retest', type: 'good' },
    caption: 'When a 2-min candle CLOSES above the descending trendline, the trend velocity is broken. Enter on the close OR on the retest (former resistance becomes support).',
  },
  {
    title: 'Entry 3 — First higher low + break of intervening high',
    candles: [
      { o: 7385, h: 7385.5, l: 7380, c: 7380.5 },
      { o: 7380.5, h: 7381, l: 7375, c: 7375.5 },
      { o: 7375.5, h: 7376, l: 7372, c: 7372.5 },
      { o: 7372.5, h: 7378, l: 7372, c: 7377.5 },
      { o: 7377.5, h: 7378, l: 7375, c: 7375.5 },
      { o: 7375.5, h: 7376, l: 7374, c: 7374.5 },
      { o: 7374.5, h: 7378.5, l: 7374, c: 7378 },
    ],
    annotations: [
      { type: 'pivot', at: { i: 2, side: 'low' }, color: '#22D3EE', label: 'Low 1 — 7372' },
      { type: 'pivot', at: { i: 5, side: 'low' }, color: '#00D9A0', label: 'Higher Low — 7374' },
      { type: 'pivot', at: { i: 3, side: 'high' }, color: '#FBBF24', label: 'Intervening high 7378' },
      { type: 'arrow', at: { i: 6, price: 7378 }, direction: 'up', color: '#00D9A0', label: 'BREAK = ENTRY' },
    ],
    verdict: { label: 'Structural reversal confirmed — faster than full W', type: 'good' },
    caption: 'Two confirmed swing lows: the higher one is the signal. When price then breaks the intervening swing high, you have a structural reversal — faster than waiting for a textbook double bottom.',
  },
  {
    title: 'Entry 4 — Failed breakdown (stop-hunt + reclaim)',
    candles: [
      { o: 7368, h: 7368.5, l: 7365, c: 7365.5 },
      { o: 7365.5, h: 7366, l: 7363.5, c: 7364 },
      { o: 7364, h: 7364.5, l: 7360, c: 7361 },
      { o: 7361, h: 7368, l: 7360.5, c: 7367.5 },
      { o: 7367.5, h: 7371, l: 7367, c: 7370.5 },
    ],
    annotations: [
      { type: 'level', price: 7363, color: '#FBBF24', label: 'Known support 7363' },
      { type: 'arrow', at: { i: 2, price: 7360 }, direction: 'up', color: '#FF3D5A', label: 'stop-hunt wick' },
      { type: 'arrow', at: { i: 3, price: 7367.5 }, direction: 'up', color: '#00D9A0', label: 'RECLAIM = ENTER' },
    ],
    verdict: { label: 'One of the cleanest reversal setups in the book', type: 'good' },
    caption: 'Price pokes BELOW known support, triggers panic sell-stops, then reclaims back above the level within 1-2 candles. Enter on the reclaim. Stop below the wick low.',
  },
];
