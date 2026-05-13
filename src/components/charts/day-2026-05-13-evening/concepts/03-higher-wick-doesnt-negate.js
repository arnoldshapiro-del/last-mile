// Teaching unit 3: A higher wick on Peak 2 does NOT negate the double top — wicks are rejection.
export const charts = [
  {
    title: 'Higher wick on Peak 2, but CLOSE near Peak 1 = pattern STILL valid',
    candles: [
      { o: 2851, h: 2852, l: 2850.8, c: 2851.8 },
      { o: 2851.8, h: 2854, l: 2851.5, c: 2853.8 },
      { o: 2853.8, h: 2855.5, l: 2853.5, c: 2855.2 },
      { o: 2855.2, h: 2855.5, l: 2853, c: 2853.2 },
      { o: 2853.2, h: 2853.5, l: 2851.5, c: 2851.8 },
      { o: 2851.8, h: 2853, l: 2851.5, c: 2852.8 },
      { o: 2852.8, h: 2856.5, l: 2852.5, c: 2855.3 },
      { o: 2855.3, h: 2855.5, l: 2853, c: 2853.2 },
    ],
    annotations: [
      { type: 'pivot', at: { i: 2, side: 'high' }, color: '#FF3D5A', label: 'Peak 1 close = 2855.2' },
      { type: 'pivot', at: { i: 6, side: 'high' }, color: '#FF3D5A', label: 'Peak 2 close = 2855.3' },
      { type: 'badge', at: { i: 6, price: 2857 }, color: '#FBBF24', text: 'Higher WICK 2856.5' },
      { type: 'level', price: 2855.2, color: '#94a3b8', label: 'Peak 1 close', dash: true },
    ],
    verdict: { label: 'Wick higher, but CLOSE matches → still valid', type: 'good' },
    caption: 'Peak 2 wick reaches 2856.5 — above Peak 1\'s high — but the CLOSE comes back to 2855.3, essentially equal to Peak 1\'s close at 2855.2. The pattern is still a valid double top. Sellers were even more aggressive than the first time.',
  },
  {
    title: 'Higher wick = MORE rejection, not less',
    candles: [
      { o: 2853, h: 2856.5, l: 2852.5, c: 2853.5 },
    ],
    annotations: [
      { type: 'badge', at: { i: 0, price: 2857.2 }, color: '#FBBF24', text: 'Wick reached 2856.5' },
      { type: 'badge', at: { i: 0, price: 2851.5 }, color: '#FF3D5A', text: 'Closed at 2853.5 — REJECTED' },
      { type: 'arrow', at: { i: 0, price: 2858 }, direction: 'down', color: '#FF3D5A', label: '3-point rejection' },
    ],
    verdict: { label: 'Big wick + low close = strong rejection', type: 'good' },
    caption: 'A candle that wicks 3 points above the close is showing strong rejection. The market tried to break out, sellers stepped in hard, and price was stuffed back down on the same candle. That kind of single-bar rejection is one of the strongest short signals available.',
  },
  {
    title: 'Peak 2 close SIGNIFICANTLY above Peak 1 close = pattern BROKEN',
    candles: [
      { o: 2851, h: 2852, l: 2850.8, c: 2851.5 },
      { o: 2851.5, h: 2854, l: 2851.2, c: 2853.8 },
      { o: 2853.8, h: 2855, l: 2853.5, c: 2854.8 },
      { o: 2854.8, h: 2855, l: 2853, c: 2853.2 },
      { o: 2853.2, h: 2853.5, l: 2851.5, c: 2851.8 },
      { o: 2851.8, h: 2853, l: 2851.5, c: 2852.8 },
      { o: 2852.8, h: 2857, l: 2852.5, c: 2856.8 },
      { o: 2856.8, h: 2857.5, l: 2856.5, c: 2857.2 },
    ],
    annotations: [
      { type: 'pivot', at: { i: 2, side: 'high' }, color: '#FF3D5A', label: 'Peak 1 close = 2854.8' },
      { type: 'pivot', at: { i: 6, side: 'high' }, color: '#00D9A0', label: 'Peak 2 close = 2856.8 ← BROKE OUT' },
      { type: 'level', price: 2854.8, color: '#94a3b8', label: 'Peak 1 close — penetrated', dash: true },
      { type: 'arrow', at: { i: 7, price: 2858 }, direction: 'up', color: '#00D9A0', label: 'BREAKOUT — not a top' },
    ],
    verdict: { label: 'Close significantly above Peak 1 = NOT a double top', type: 'warn' },
    caption: 'When Peak 2 CLOSES meaningfully above Peak 1\'s close, the pattern is broken — this is now a breakout above resistance, not a top. The bullish read is correct. The dividing line is the close, not the wick. Same rule, opposite outcome.',
  },
];
