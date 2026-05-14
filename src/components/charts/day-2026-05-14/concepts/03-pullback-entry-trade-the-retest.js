// Teaching unit 3: The pullback entry — trade the retest, not the extension.
export const charts = [
  {
    title: 'The retest entry recipe',
    candles: [
      { o: 7488, h: 7493, l: 7486, c: 7491 },
      { o: 7491, h: 7503, l: 7490, c: 7502 },
      { o: 7502, h: 7505, l: 7501, c: 7504 },
      { o: 7504, h: 7505, l: 7497, c: 7498 },
      { o: 7498, h: 7499, l: 7493, c: 7495 },
      { o: 7495, h: 7497, l: 7493, c: 7496 },
      { o: 7496, h: 7504, l: 7495, c: 7503 },
    ],
    annotations: [
      { type: 'level', price: 7493, color: '#00D9A0', label: '7493 — broken level' },
      { type: 'pivot', at: { i: 4, side: 'low' }, color: '#00D9A0', label: 'holds + higher low' },
      { type: 'arrow', at: { i: 5, price: 7496 }, direction: 'up', color: '#00D9A0', label: 'ENTER on the retest' },
    ],
    verdict: { label: 'Good location, real stop, honest R:R', type: 'good' },
    caption: 'Price pulls back to the broken level, holds it, prints a rejection candle. That is the entry.',
  },
  {
    title: 'Lower volume on the pullback',
    candles: [
      { o: 7491, h: 7503, l: 7490, c: 7502 },
      { o: 7502, h: 7505, l: 7501, c: 7504 },
      { o: 7504, h: 7505, l: 7497, c: 7498 },
      { o: 7498, h: 7499, l: 7493, c: 7495 },
      { o: 7495, h: 7497, l: 7493, c: 7496 },
      { o: 7496, h: 7504, l: 7495, c: 7503 },
    ],
    annotations: [
      { type: 'volume', bars: [90, 52, 30, 18, 16, 60] },
      { type: 'arrow', at: { i: 3, price: 7495 }, direction: 'up', color: '#00D9A0', label: 'lazy pullback' },
    ],
    verdict: { label: 'The pullback should look lazy, not aggressive', type: 'good' },
    caption: 'Volume dies through the pullback, then expands again on the rejection candle — confirmation.',
  },
  {
    title: 'Ceiling becomes floor',
    candles: [
      { o: 7488, h: 7493, l: 7486, c: 7490 },
      { o: 7490, h: 7493, l: 7487, c: 7491 },
      { o: 7491, h: 7502, l: 7490, c: 7501 },
      { o: 7501, h: 7504, l: 7497, c: 7498 },
      { o: 7498, h: 7499, l: 7493, c: 7495 },
      { o: 7495, h: 7503, l: 7494, c: 7502 },
      { o: 7502, h: 7508, l: 7501, c: 7507 },
    ],
    annotations: [
      { type: 'level', price: 7493, color: '#FFB44A', label: '7493 — ceiling, then floor' },
      { type: 'pivot', at: { i: 1, side: 'high' }, color: '#FF3D5A', label: 'ceiling' },
      { type: 'pivot', at: { i: 4, side: 'low' }, color: '#00D9A0', label: 'floor' },
    ],
    verdict: { label: 'Old resistance flips to support', type: 'good' },
    caption: 'The retest that holds is the level flipping from ceiling to floor — that is the trade.',
  },
  {
    title: 'What Arnie saw at 10:25 — the pullback forming',
    candles: [
      { o: 7505, h: 7506, l: 7500, c: 7501 },
      { o: 7501, h: 7502, l: 7495, c: 7496 },
      { o: 7496, h: 7497, l: 7488, c: 7489 },
      { o: 7489, h: 7491, l: 7483, c: 7485 },
      { o: 7485, h: 7488, l: 7483, c: 7487 },
      { o: 7487, h: 7497, l: 7486, c: 7496 },
      { o: 7496, h: 7506, l: 7495, c: 7505 },
    ],
    annotations: [
      { type: 'zone', topPrice: 7485, bottomPrice: 7483, color: 'rgba(0, 217, 160, 0.10)', label: 'pullback holds 7483-7485' },
      { type: 'pivot', at: { i: 3, side: 'low' }, color: '#00D9A0' },
      { type: 'arrow', at: { i: 4, price: 7487 }, direction: 'up', color: '#00D9A0', label: 'the real entry was here' },
    ],
    verdict: { label: 'The raw material was forming — not at 7506', type: 'good' },
    caption: 'The second chart showed price holding 7483-7485 — the pullback entry was right there.',
  },
];
