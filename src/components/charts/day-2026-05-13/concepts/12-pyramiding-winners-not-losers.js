// Teaching unit 12: Pyramiding — add to winners, never to losers.
export const charts = [
  {
    title: 'RIGHT WAY — pyramid a WINNING position',
    candles: [
      { o: 2832, h: 2832.5, l: 2830, c: 2830.5 },
      { o: 2830.5, h: 2834, l: 2830, c: 2833.5 },
      { o: 2833.5, h: 2837, l: 2833, c: 2836.5 },
      { o: 2836.5, h: 2838, l: 2836, c: 2837.5 },
      { o: 2837.5, h: 2842, l: 2837, c: 2841.5 },
      { o: 2841.5, h: 2845, l: 2841, c: 2844.5 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 0, price: 2832 }, direction: 'up', color: '#00D9A0', label: 'Entry 1 — 2832' },
      { type: 'arrow', at: { i: 2, price: 2837 }, direction: 'up', color: '#00D9A0', label: 'ADD 2 — 2837' },
      { type: 'arrow', at: { i: 4, price: 2842 }, direction: 'up', color: '#00D9A0', label: 'ADD 3 — 2842' },
    ],
    verdict: { label: 'Each add has its own tight stop = great R:R', type: 'good' },
    caption: 'Livermore, Tudor Jones, Druckenmiller all pyramid. The rule: the position is ALREADY IN PROFIT when you add. Each add is a fresh trade with its own tight stop.',
  },
  {
    title: 'WRONG WAY — add while UNDERWATER (averaging down)',
    candles: [
      { o: 2837, h: 2837.5, l: 2836, c: 2836.5 },
      { o: 2836.5, h: 2837, l: 2834, c: 2834.5 },
      { o: 2834.5, h: 2835, l: 2832, c: 2832.5 },
      { o: 2832.5, h: 2837, l: 2832, c: 2836 },
      { o: 2836, h: 2840, l: 2835.5, c: 2836.5 },
      { o: 2836.5, h: 2841, l: 2836, c: 2840.5 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 0, price: 2837 }, direction: 'down', color: '#FF3D5A', label: 'Short 2837' },
      { type: 'badge', at: { i: 4, price: 2840.5 }, color: '#FF3D5A', text: '"strong engulfing — DOUBLE?"' },
      { type: 'arrow', at: { i: 5, price: 2841 }, direction: 'down', color: '#FF3D5A', label: 'DON\'T ADD' },
    ],
    verdict: { label: 'Adding to a loser = averaging down', type: 'bad' },
    caption: 'You\'re underwater. A strong reversal signal prints. Brain says "double up — this HAS to work." This is the trap. Adding while losing turns 1R into 2-3R loss. Don\'t.',
  },
  {
    title: 'The two-trade solution — exit, then re-enter fresh',
    candles: [
      { o: 2837, h: 2837.5, l: 2836, c: 2836.5 },
      { o: 2836.5, h: 2837, l: 2835, c: 2835.5 },
      { o: 2835.5, h: 2836, l: 2833, c: 2833.5 },
      { o: 2833.5, h: 2838, l: 2833, c: 2837.5 },
      { o: 2837.5, h: 2842, l: 2837, c: 2841.5 },
      { o: 2841.5, h: 2842.5, l: 2841, c: 2842 },
      { o: 2842, h: 2842.5, l: 2839, c: 2839.5 },
      { o: 2839.5, h: 2840, l: 2837, c: 2837.5 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 0, price: 2837 }, direction: 'down', color: '#FF3D5A', label: 'Short' },
      { type: 'arrow', at: { i: 4, price: 2841.5 }, direction: 'up', color: '#FBBF24', label: 'EXIT loser' },
      { type: 'arrow', at: { i: 7, price: 2837.5 }, direction: 'down', color: '#00D9A0', label: 'NEW short (fresh)' },
    ],
    verdict: { label: 'Two decisions, two trades — clean', type: 'good' },
    caption: 'If the new signal is THAT strong, the right play is: exit the underwater original (acknowledge it was premature), then re-enter on a fresh trigger with fresh sizing. Two trades.',
  },
  {
    title: 'The brain-trap statement — "I know it WILL work"',
    candles: [
      { o: 2837, h: 2837.5, l: 2836, c: 2836.5 },
      { o: 2836.5, h: 2837, l: 2835, c: 2835.5 },
      { o: 2835.5, h: 2836, l: 2834, c: 2834.5 },
      { o: 2834.5, h: 2839, l: 2834, c: 2838.5 },
    ],
    annotations: [
      { type: 'badge', at: { i: 1, price: 2837 }, color: '#FF3D5A', text: '"this signal is STRONG"' },
      { type: 'badge', at: { i: 2, price: 2836 }, color: '#FF3D5A', text: '"it HAS to work"' },
      { type: 'badge', at: { i: 3, price: 2839.5 }, color: '#FF3D5A', text: '"so I should double"' },
    ],
    verdict: { label: 'These three thoughts are the trap', type: 'bad' },
    caption: 'Three thoughts that precede every blown-up account: "the signal is strong" → "it has to work" → "so double up." Each one feels rational. Together they destroy capital.',
  },
];
