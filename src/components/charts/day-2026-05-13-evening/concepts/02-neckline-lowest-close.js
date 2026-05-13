// Teaching unit 2: The neckline = lowest CLOSE in the valley between two peaks.
export const charts = [
  {
    title: 'The neckline is the LOWEST BODY CLOSE in the valley',
    candles: [
      { o: 2853, h: 2856, l: 2852.8, c: 2855.5 },
      { o: 2855.5, h: 2855.8, l: 2854, c: 2854.2 },
      { o: 2854.2, h: 2854.5, l: 2852.5, c: 2852.8 },
      { o: 2852.8, h: 2853, l: 2851.2, c: 2851.5 },
      { o: 2851.5, h: 2852, l: 2850.5, c: 2851 },
      { o: 2851, h: 2853, l: 2850.8, c: 2852.8 },
      { o: 2852.8, h: 2855.4, l: 2852.5, c: 2855.2 },
    ],
    annotations: [
      { type: 'pivot', at: { i: 0, side: 'high' }, color: '#FF3D5A', label: 'Peak 1 — 2855.5 close' },
      { type: 'pivot', at: { i: 6, side: 'high' }, color: '#FF3D5A', label: 'Peak 2 — 2855.2 close' },
      { type: 'badge', at: { i: 4, price: 2849.8 }, color: '#FBBF24', text: 'Lowest close = 2851' },
      { type: 'level', price: 2851, color: '#FBBF24', label: 'NECKLINE = 2851 (body close, not wick)', dash: true },
    ],
    verdict: { label: 'Use the BODY close — not the wick low', type: 'good' },
    caption: 'The neckline is precisely defined as the lowest closing price of any candle in the pullback valley. Bodies show consensus — where the market AGREED for the period. Wicks show momentary excursions that were rejected. Use bodies.',
  },
  {
    title: 'Body = CONSENSUS. Wick = REJECTION.',
    candles: [
      { o: 2852, h: 2852.5, l: 2849, c: 2851 },
      { o: 2851, h: 2851.5, l: 2850.5, c: 2851 },
      { o: 2851, h: 2852, l: 2850.8, c: 2851.5 },
    ],
    annotations: [
      { type: 'level', price: 2851, color: '#00D9A0', label: 'BODY low = consensus 2851', dash: true },
      { type: 'level', price: 2849, color: '#FF3D5A', label: 'WICK low = momentary 2849', dash: true },
      { type: 'badge', at: { i: 0, price: 2848.5 }, color: '#FF3D5A', text: 'WICK — 2-pt rejection' },
      { type: 'badge', at: { i: 1, price: 2852 }, color: '#00D9A0', text: 'BODY — agreement' },
    ],
    verdict: { label: 'Wicks are noise — bodies are signal', type: 'good' },
    caption: 'The body shows where the market agreed for that period. The wick shows where price went momentarily but was rejected. The neckline must be drawn from consensus prices because the trigger requires consensus to break it.',
  },
  {
    title: 'Confirmation = a body close BELOW the neckline',
    candles: [
      { o: 2853, h: 2853.5, l: 2852, c: 2852.5 },
      { o: 2852.5, h: 2853, l: 2851.5, c: 2851.8 },
      { o: 2851.8, h: 2852, l: 2851, c: 2851.3 },
      { o: 2851.3, h: 2851.5, l: 2849.5, c: 2849.8 },
      { o: 2849.8, h: 2850, l: 2848, c: 2848.2 },
      { o: 2848.2, h: 2848.5, l: 2846, c: 2846.5 },
    ],
    annotations: [
      { type: 'level', price: 2851, color: '#FBBF24', label: 'Neckline 2851', dash: true },
      { type: 'arrow', at: { i: 3, price: 2849.8 }, direction: 'down', color: '#00D9A0', label: 'TRIGGER — close 2849.8 BELOW' },
    ],
    verdict: { label: 'Body close below neckline = entry', type: 'good' },
    caption: 'The trigger is one specific event: a candle whose body CLOSES below the neckline. Not a wick that pierces. Not a candle that touches and bounces. A close. That close is the entry. Anything before is impatience.',
  },
  {
    title: 'Wick break alone = FAKE — wait for the close',
    candles: [
      { o: 2851.5, h: 2852, l: 2851, c: 2851.5 },
      { o: 2851.5, h: 2851.8, l: 2849.5, c: 2851.3 },
      { o: 2851.3, h: 2852, l: 2851, c: 2851.8 },
    ],
    annotations: [
      { type: 'level', price: 2851, color: '#FBBF24', label: 'Neckline 2851', dash: true },
      { type: 'badge', at: { i: 1, price: 2849 }, color: '#FF3D5A', text: 'Wick broke — close did NOT' },
      { type: 'arrow', at: { i: 2, price: 2852.2 }, direction: 'up', color: '#00D9A0', label: 'Recovered above' },
    ],
    verdict: { label: 'Wick alone = NO trigger', type: 'bad' },
    caption: 'A candle wicks below 2851 to 2849.5 but closes back above at 2851.3. The market tested the level and rejected. There is no real break — the close confirms it. Trading the wick fires you on noise.',
  },
];
