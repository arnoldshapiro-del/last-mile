// Teaching unit 12: 'It is going to turn around' — the most expensive sentence in trading.
export const charts = [
  {
    title: 'The sentence said at every green candle',
    candles: [
      { o: 7500, h: 7506, l: 7499, c: 7505 },
      { o: 7505, h: 7512, l: 7504, c: 7511 },
      { o: 7511, h: 7518, l: 7510, c: 7517 },
      { o: 7517, h: 7524, l: 7516, c: 7523 },
      { o: 7523, h: 7529, l: 7522, c: 7528 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 1, price: 7511 }, direction: 'down', color: '#FF3D5A', label: '"turn around soon"' },
      { type: 'arrow', at: { i: 2, price: 7517 }, direction: 'down', color: '#FF3D5A', label: '"any candle now"' },
      { type: 'arrow', at: { i: 3, price: 7523 }, direction: 'down', color: '#FF3D5A', label: '"it HAS to top"' },
    ],
    verdict: { label: 'Said at every candle — answered with more up', type: 'bad' },
    caption: 'The most expensive sentence in trading, said at each green candle, answered each time by up.',
  },
  {
    title: 'Reversals need a TIRED trend',
    candles: [
      { o: 7510, h: 7517, l: 7509, c: 7516 },
      { o: 7516, h: 7521, l: 7515, c: 7520 },
      { o: 7520, h: 7523, l: 7519, c: 7522 },
      { o: 7522, h: 7524, l: 7521, c: 7522 },
      { o: 7522, h: 7523, l: 7520, c: 7521 },
      { o: 7521, h: 7522, l: 7518, c: 7519 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 7509 }, to: { i: 5, price: 7521 }, color: '#FFB44A', label: 'momentum dying' },
      { type: 'arrow', at: { i: 4, price: 7521 }, direction: 'down', color: '#FFB44A', label: 'NOW look for a top' },
    ],
    verdict: { label: 'Flattening, shrinking candles = tired', type: 'info' },
    caption: 'A reversal needs an exhausted trend — flattening, weakening, momentum visibly dying.',
  },
  {
    title: 'This trend was accelerating, not tired',
    candles: [
      { o: 7500, h: 7504, l: 7499, c: 7503 },
      { o: 7503, h: 7509, l: 7502, c: 7508 },
      { o: 7508, h: 7516, l: 7507, c: 7515 },
      { o: 7515, h: 7525, l: 7514, c: 7524 },
      { o: 7524, h: 7536, l: 7523, c: 7535 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 3, price: 7524 }, direction: 'up', color: '#00D9A0', label: 'bodies EXPANDING' },
    ],
    verdict: { label: 'Accelerating trend = not tired = no top', type: 'bad' },
    caption: 'Expanding green bodies, price riding the MAs up — hunting a top here bets against the chart.',
  },
  {
    title: 'Flip the thought — is it still HH / HL?',
    candles: [
      { o: 7505, h: 7510, l: 7504, c: 7509 },
      { o: 7509, h: 7512, l: 7506, c: 7507 },
      { o: 7507, h: 7509, l: 7505, c: 7508 },
      { o: 7508, h: 7516, l: 7507, c: 7515 },
      { o: 7515, h: 7522, l: 7514, c: 7521 },
    ],
    annotations: [
      { type: 'pivot', at: { i: 0, side: 'high' }, color: '#FFB44A' },
      { type: 'pivot', at: { i: 2, side: 'low' }, color: '#00D9A0', label: 'higher low' },
      { type: 'arrow', at: { i: 3, price: 7508 }, direction: 'up', color: '#00D9A0', label: 'still HH/HL = trade WITH it' },
    ],
    verdict: { label: 'Thought = signal to do the opposite', type: 'good' },
    caption: 'When "it has to turn" arrives, ask: still higher highs and lows? If yes, the only trade is with it.',
  },
];
