// Teaching unit 15: The stop ladder — move stops UP as targets fill.
export const charts = [
  {
    title: 'Stage 0 — Initial structural stop',
    candles: [
      { o: 7377, h: 7378, l: 7376.5, c: 7377.5 },
      { o: 7377.5, h: 7378, l: 7376, c: 7376.5 },
      { o: 7376.5, h: 7377, l: 7375, c: 7375.5 },
      { o: 7375.5, h: 7376, l: 7374, c: 7374.5 },
      { o: 7374.5, h: 7378, l: 7374, c: 7377.5 },
    ],
    annotations: [
      { type: 'level', price: 7377.25, color: '#a78bfa', label: 'Entry 7377.25' },
      { type: 'level', price: 7370.50, color: '#FF3D5A', label: 'Stage 0 — structural stop' },
    ],
    verdict: { label: 'Risk = full position size × 6.75 points', type: 'warn' },
    caption: 'Stage 0 is the structural stop set BEFORE entry — below the swing low + 3 ticks. This is the only stop that can move WIDER, and only before the trade is taken.',
  },
  {
    title: 'Stage 1 — T1 fills → stop to BREAK-EVEN',
    candles: [
      { o: 7377, h: 7378, l: 7376.5, c: 7377.5 },
      { o: 7377.5, h: 7379, l: 7377, c: 7378.5 },
      { o: 7378.5, h: 7381, l: 7378, c: 7380.5 },
      { o: 7380.5, h: 7382, l: 7380, c: 7381.5 },
    ],
    annotations: [
      { type: 'level', price: 7377.25, color: '#00D9A0', label: 'Stage 1 — STOP TO BE 7377.25' },
      { type: 'level', price: 7381, color: '#FBBF24', label: 'T1 filled +1R', dash: true },
      { type: 'arrow', at: { i: 3, price: 7381 }, direction: 'down', color: '#00D9A0', label: 'T1 fill' },
    ],
    verdict: { label: 'Trade is now RISK-FREE on remaining 75%', type: 'good' },
    caption: 'Moment T1 fills, the stop moves to entry price. Worst case = scratch trade. Best case = runners to 8R. This is the psychological foundation of the framework.',
  },
  {
    title: 'Stage 2 — T2 fills → stop to T1 price (locks +1R minimum)',
    candles: [
      { o: 7381, h: 7382, l: 7380.5, c: 7381.5 },
      { o: 7381.5, h: 7383, l: 7381, c: 7382.5 },
      { o: 7382.5, h: 7385, l: 7382, c: 7384.5 },
      { o: 7384.5, h: 7385, l: 7384, c: 7384.8 },
    ],
    annotations: [
      { type: 'level', price: 7381, color: '#00D9A0', label: 'Stage 2 — stop to T1 price 7381' },
      { type: 'level', price: 7384.75, color: '#FBBF24', label: 'T2 filled +2R', dash: true },
      { type: 'arrow', at: { i: 3, price: 7384.75 }, direction: 'down', color: '#00D9A0', label: 'T2 fill' },
    ],
    verdict: { label: 'Worst case now = +1R locked on remaining 50%', type: 'good' },
    caption: 'T2 fills, ratchet stop UP to T1 price. Remaining 50% of position now has a +1R floor — even if the runner reverses, you keep at least one full R on the rest.',
  },
  {
    title: 'Stage 3 — T3 fills → stop to T2 price (locks +2R minimum)',
    candles: [
      { o: 7385, h: 7386, l: 7384.5, c: 7385.5 },
      { o: 7385.5, h: 7388, l: 7385, c: 7387.5 },
      { o: 7387.5, h: 7392, l: 7387, c: 7391.5 },
      { o: 7391.5, h: 7395, l: 7391, c: 7394.5 },
      { o: 7394.5, h: 7400, l: 7394, c: 7399.5 },
      { o: 7399.5, h: 7407, l: 7399, c: 7406.5 },
      { o: 7406.5, h: 7412, l: 7406, c: 7411.5 },
    ],
    annotations: [
      { type: 'level', price: 7384.75, color: '#00D9A0', label: 'Stage 3 — stop to T2 price' },
      { type: 'level', price: 7392.25, color: '#FBBF24', label: 'T3 filled +4R', dash: true },
      { type: 'level', price: 7407.25, color: '#a78bfa', label: 'T4 runner +8R' },
      { type: 'arrow', at: { i: 6, price: 7411.5 }, direction: 'down', color: '#00D9A0', label: 'T4 hit' },
    ],
    verdict: { label: 'Runner has +2R floor, +8R ceiling — pure asymmetric edge', type: 'good' },
    caption: 'T3 fills, stop ratchets to T2 price. The remaining 25% (the runner) now has a +2R minimum and can run to 8R+. Stops only ever move TOWARD profit — never widen mid-trade.',
  },
];
