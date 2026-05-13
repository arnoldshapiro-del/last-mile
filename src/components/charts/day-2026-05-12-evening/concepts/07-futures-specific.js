// Teaching unit 7: Morning Star on NQ/RTY — what's different in futures.
export const charts = [
  {
    title: 'Futures Morning Star — structural gaps, not actual gaps',
    candles: [
      { o: 7400, h: 7401, l: 7395, c: 7395.5 },
      { o: 7395.5, h: 7396, l: 7388, c: 7388.5 },
      { o: 7388.5, h: 7389, l: 7378, c: 7378.5 },
      { o: 7378.5, h: 7379, l: 7376, c: 7377 },
      { o: 7377, h: 7378, l: 7375.5, c: 7376.5 },
      { o: 7376.5, h: 7383, l: 7376, c: 7382.8 },
      { o: 7382.8, h: 7387, l: 7382.5, c: 7386.5 },
    ],
    annotations: [
      { type: 'level', price: 7378.5, color: '#FF3D5A', label: 'C1 close', dash: true },
      { type: 'level', price: 7378, color: '#a78bfa', label: 'C2 body BELOW C1 close' },
      { type: 'level', price: 7383.5, color: '#00D9A0', label: 'C3 body ABOVE C2 close' },
      { type: 'badge', at: { i: 2, price: 7388 }, color: '#FF3D5A', text: 'C1' },
      { type: 'badge', at: { i: 4, price: 7377 }, color: '#a78bfa', text: 'C2' },
      { type: 'badge', at: { i: 5, price: 7382.8 }, color: '#00D9A0', text: 'C3' },
    ],
    verdict: { label: 'Structural equivalent of a gap-down/gap-up Morning Star', type: 'good' },
    caption: 'In 24-hour futures, the classic Morning Star with two gaps almost never prints. Look for the STRUCTURAL equivalent: C2 body fully below C1 close, C3 body fully above C2 close. Same signal, different visual.',
  },
  {
    title: 'Session matters — 10AM ET vs 12:30PM lunch',
    candles: [
      { o: 7380, h: 7383, l: 7378.5, c: 7382.5 },
      { o: 7382.5, h: 7388, l: 7382, c: 7387.5 },
      { o: 7387.5, h: 7392, l: 7387, c: 7391.5 },
      { o: 7391.5, h: 7395, l: 7391, c: 7394.5 },
      { o: 7394.5, h: 7395, l: 7393, c: 7393.5 },
      { o: 7393.5, h: 7394, l: 7392, c: 7392.5 },
      { o: 7392.5, h: 7393.5, l: 7391.5, c: 7392 },
    ],
    annotations: [
      { type: 'badge', at: { i: 0, price: 7383 }, color: '#00D9A0', text: 'NY open' },
      { type: 'badge', at: { i: 5, price: 7394 }, color: '#FF3D5A', text: 'lunch — skip' },
      { type: 'arrow', at: { i: 1, price: 7387.5 }, direction: 'up', color: '#00D9A0', label: 'real volume' },
      { type: 'arrow', at: { i: 6, price: 7392 }, direction: 'down', color: '#FF3D5A', label: 'noise' },
    ],
    verdict: { label: 'Same chart — patterns at NY open trade; lunch ones don\'t', type: 'good' },
    caption: 'Morning Stars forming at NY/London open trade. Same pattern at 12:30 PM lunch hour is noise — volume is missing. Skip lunch-hour patterns (11:30 AM - 1:30 PM ET) regardless of how clean they look.',
  },
];
