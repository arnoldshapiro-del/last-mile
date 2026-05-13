// Teaching unit 9: Neckline = lowest closing price between peaks using bodies.
export const charts = [
  {
    title: 'The neckline = the LOWEST CLOSE between two peaks',
    candles: [
      { o: 2832, h: 2832.5, l: 2830, c: 2830.5 },
      { o: 2830.5, h: 2835, l: 2830, c: 2834.5 },
      { o: 2834.5, h: 2841, l: 2834, c: 2840.5 },
      { o: 2840.5, h: 2841.2, l: 2839, c: 2839.5 },
      { o: 2839.5, h: 2840, l: 2837, c: 2837.5 },
      { o: 2837.5, h: 2838, l: 2835.5, c: 2836.2 },
      { o: 2836.2, h: 2840, l: 2836.1, c: 2839.5 },
      { o: 2839.5, h: 2841.3, l: 2839, c: 2840.8 },
    ],
    annotations: [
      { type: 'pivot', at: { i: 2, side: 'high' }, color: '#FF3D5A', label: 'Peak 1' },
      { type: 'pivot', at: { i: 7, side: 'high' }, color: '#FF3D5A', label: 'Peak 2' },
      { type: 'badge', at: { i: 5, price: 2837 }, color: '#FBBF24', text: 'Lowest close 2836.2' },
      { type: 'level', price: 2836.2, color: '#FBBF24', label: 'NECKLINE — body close = 2836.2', dash: true },
    ],
    verdict: { label: 'Body close, not wick low', type: 'good' },
    caption: 'The neckline of a double top is the LOWEST CLOSING PRICE of any candle in the pullback between the two peaks. Bodies. Not wicks. Find the closest red close at the bottom.',
  },
  {
    title: 'Body = CONSENSUS. Wick = REJECTION.',
    candles: [
      { o: 2839, h: 2840, l: 2835, c: 2836.5 },
      { o: 2836.5, h: 2837, l: 2835.5, c: 2836.2 },
      { o: 2836.2, h: 2837, l: 2836.1, c: 2836.8 },
    ],
    annotations: [
      { type: 'level', price: 2836.2, color: '#00D9A0', label: 'BODY low = consensus 2836.2', dash: true },
      { type: 'level', price: 2835, color: '#FF3D5A', label: 'WICK low = momentary 2835', dash: true },
      { type: 'badge', at: { i: 0, price: 2835 }, color: '#FF3D5A', text: 'WICK — rejected' },
      { type: 'badge', at: { i: 1, price: 2837 }, color: '#00D9A0', text: 'BODY — agreed' },
    ],
    verdict: { label: 'Use the body — the wick is noise', type: 'good' },
    caption: 'The body shows where the market AGREED for that period. The wick shows where price momentarily went but was rejected. Use the body for the neckline — wicks are noise.',
  },
  {
    title: 'Wrong neckline = wrong trigger = wrong R:R',
    candles: [
      { o: 2838, h: 2839, l: 2837, c: 2837.5 },
      { o: 2837.5, h: 2838, l: 2836.5, c: 2836.8 },
      { o: 2836.8, h: 2837.5, l: 2836.5, c: 2837 },
      { o: 2837, h: 2837.5, l: 2836.2, c: 2836.5 },
      { o: 2836.5, h: 2837, l: 2835.8, c: 2836.4 },
      { o: 2836.4, h: 2837.5, l: 2836, c: 2837.2 },
    ],
    annotations: [
      { type: 'level', price: 2837, color: '#94a3b8', label: 'WRONG — Claude eyeballed 2837', dash: true },
      { type: 'level', price: 2836.2, color: '#FBBF24', label: 'RIGHT — Arnie precise 2836.2', dash: true },
      { type: 'badge', at: { i: 1, price: 2838 }, color: '#FF3D5A', text: '0.8 pt difference' },
      { type: 'badge', at: { i: 5, price: 2837.5 }, color: '#00D9A0', text: 'Trigger did NOT fire' },
    ],
    verdict: { label: 'Be PRECISE — exact tick matters', type: 'good' },
    caption: 'A 0.8-point difference determined whether the neckline ever broke (it didn\'t) and whether the trade was structurally valid (it wasn\'t). Pull the exact tick from the chart.',
  },
  {
    title: 'Why wick-break is a fake — the close decides',
    candles: [
      { o: 2837, h: 2837.5, l: 2836.5, c: 2837 },
      { o: 2837, h: 2837.2, l: 2835.5, c: 2837 },
      { o: 2837, h: 2837.5, l: 2836.5, c: 2837.2 },
    ],
    annotations: [
      { type: 'level', price: 2836.2, color: '#FBBF24', label: 'Neckline 2836.2', dash: true },
      { type: 'badge', at: { i: 1, price: 2835.3 }, color: '#FF3D5A', text: 'Wick broke — close didn\'t' },
      { type: 'arrow', at: { i: 2, price: 2837.5 }, direction: 'up', color: '#00D9A0', label: 'Recovered above' },
    ],
    verdict: { label: 'Wick alone = FAKE break', type: 'bad' },
    caption: 'A candle wicks BELOW the neckline at 2835.3 but closes ABOVE it at 2837. The market tested the level and rejected — the close confirms there was no real break. Wait for the close.',
  },
];
