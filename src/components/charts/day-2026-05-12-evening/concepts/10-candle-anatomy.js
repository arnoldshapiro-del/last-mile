// Teaching unit 10: Candle anatomy — body vs wicks, what each part tells you.
export const charts = [
  {
    title: 'The four prices in every candle — O, H, L, C',
    candles: [
      { o: 100, h: 103, l: 99, c: 102 },
    ],
    annotations: [
      { type: 'level', price: 103, color: '#FBBF24', label: 'H — High (top of upper wick)' },
      { type: 'level', price: 102, color: '#00D9A0', label: 'C — Close (top of body)' },
      { type: 'level', price: 100, color: '#a78bfa', label: 'O — Open (bottom of body)' },
      { type: 'level', price: 99, color: '#22D3EE', label: 'L — Low (bottom of lower wick)' },
    ],
    verdict: { label: 'Every candle = 4 prices. Memorize these 4.', type: 'good' },
    caption: 'Every candlestick is just four prices: Open, High, Low, Close. The body shows where Open→Close. The wicks show where price ran to (H) and fell to (L) before coming back.',
  },
  {
    title: 'Body = consensus. Wick = rejection.',
    candles: [
      { o: 100, h: 103, l: 99.5, c: 102 },
      { o: 102, h: 102.2, l: 99.8, c: 100.2 },
      { o: 100.2, h: 100.5, l: 100, c: 100.3 },
      { o: 100.3, h: 100.5, l: 100, c: 100.2 },
    ],
    annotations: [
      { type: 'badge', at: { i: 0, price: 103 }, color: '#FBBF24', text: 'body = where most trading happened' },
      { type: 'badge', at: { i: 1, price: 102.2 }, color: '#FF3D5A', text: 'wick = sellers came in here' },
      { type: 'badge', at: { i: 3, price: 100.5 }, color: '#a78bfa', text: 'flat body = doji' },
    ],
    verdict: { label: 'Read each candle through this lens', type: 'good' },
    caption: 'Body shows where buyers and sellers AGREED to stop trading (consensus zone). Wicks show where price went but couldn\'t hold — the footprint of rejection by the opposing side.',
  },
  {
    title: 'Same body size, different stories — wicks tell the journey',
    candles: [
      { o: 100, h: 100.2, l: 99.8, c: 102 },
      { o: 100, h: 105, l: 99.8, c: 102 },
      { o: 100, h: 102.2, l: 96, c: 102 },
    ],
    annotations: [
      { type: 'badge', at: { i: 0, price: 102 }, color: '#00D9A0', text: 'clean — no wicks' },
      { type: 'badge', at: { i: 1, price: 105 }, color: '#FF3D5A', text: 'sold from highs' },
      { type: 'badge', at: { i: 2, price: 96 }, color: '#00D9A0', text: 'hammered from lows' },
    ],
    verdict: { label: 'Three identical bodies — three different stories', type: 'good' },
    caption: 'All three candles closed at 102 from open 100 — same body. But Candle 1 was clean and confident. Candle 2 ran up and got sold. Candle 3 got hammered down and recovered. The wicks tell completely different stories.',
  },
];
