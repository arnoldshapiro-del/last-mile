// Teaching unit 5: Tier 1 fires, Tier 2 stacks — size is binary.
export const charts = [
  {
    title: 'TIER 1 — Triggers (fire the trade)',
    candles: [
      { o: 2840, h: 2840.5, l: 2836, c: 2836.5 },
      { o: 2836.5, h: 2837, l: 2830, c: 2830.5 },
      { o: 2830.5, h: 2831, l: 2823, c: 2823.5 },
      { o: 2823.5, h: 2828, l: 2823, c: 2827.5 },
      { o: 2827.5, h: 2828, l: 2826, c: 2826.5 },
      { o: 2826.5, h: 2827, l: 2823.5, c: 2824 },
      { o: 2824, h: 2832, l: 2823.5, c: 2831.8 },
    ],
    annotations: [
      { type: 'level', price: 2831, color: '#00D9A0', label: 'Neckline close above = TIER 1 trigger', dash: true },
      { type: 'badge', at: { i: 6, price: 2831.8 }, color: '#00D9A0', text: 'TIER 1 — TRADE ON' },
    ],
    verdict: { label: 'Tier 1 = the entry happens', type: 'good' },
    caption: 'Double bottom + neckline close. Double top + neckline close. Flag break on close. These are TIER 1 — they PULL the trigger. The trade exists because they fired.',
  },
  {
    title: 'TIER 2 — Confluence (stacks on top, never alone)',
    candles: [
      { o: 2828, h: 2828.5, l: 2826, c: 2826.5 },
      { o: 2826.5, h: 2827, l: 2824, c: 2824.5 },
      { o: 2824.5, h: 2825, l: 2823, c: 2823.5 },
      { o: 2823.5, h: 2828, l: 2823, c: 2827.5 },
      { o: 2827.5, h: 2828.5, l: 2827, c: 2828 },
    ],
    annotations: [
      { type: 'badge', at: { i: 0, price: 2828.5 }, color: '#FBBF24', text: 'Hammer 60%' },
      { type: 'badge', at: { i: 3, price: 2828 }, color: '#FBBF24', text: 'Engulfing 63%' },
      { type: 'badge', at: { i: 4, price: 2828.5 }, color: '#FBBF24', text: 'Morning Star 65%' },
    ],
    verdict: { label: 'Tier 2 = stacking bricks', type: 'warn' },
    caption: 'Hammer, engulfing, morning star, tweezer — TIER 2 patterns are not triggers. They are CONFLUENCE bricks you stack on top of a Tier 1 trigger or pile at a major level.',
  },
  {
    title: 'Size is BINARY — full or zero, never sliding',
    candles: [
      { o: 2826, h: 2828, l: 2826, c: 2827 },
      { o: 2827, h: 2830, l: 2827, c: 2829.5 },
      { o: 2829.5, h: 2832, l: 2829, c: 2831.5 },
      { o: 2831.5, h: 2834, l: 2831, c: 2833.5 },
    ],
    annotations: [
      { type: 'badge', at: { i: 0, price: 2828.5 }, color: '#FF3D5A', text: '✗ 4 contracts "tester"' },
      { type: 'badge', at: { i: 1, price: 2830.5 }, color: '#FF3D5A', text: '✗ 6 contracts "kinda confident"' },
      { type: 'badge', at: { i: 3, price: 2834.5 }, color: '#00D9A0', text: '✓ 16 contracts FULL SIZE' },
    ],
    verdict: { label: 'Take or pass — never "kinda"', type: 'good' },
    caption: 'Position size never varies by tier. Either the setup has enough confluence to take at FULL SIZE, or it doesn\'t. Varying size is how accounts bleed on hundred small bets.',
  },
  {
    title: 'Tier 1 + Tier 2 stacked = the high-conviction trade',
    candles: [
      { o: 2830, h: 2830.5, l: 2826, c: 2826.5 },
      { o: 2826.5, h: 2827, l: 2823, c: 2823.5 },
      { o: 2823.5, h: 2828, l: 2823, c: 2827.5 },
      { o: 2827.5, h: 2828, l: 2826, c: 2826.5 },
      { o: 2826.5, h: 2828, l: 2823.5, c: 2823.5 },
      { o: 2823.5, h: 2829, l: 2823.5, c: 2828.5 },
      { o: 2828.5, h: 2832, l: 2828, c: 2831.5 },
    ],
    annotations: [
      { type: 'badge', at: { i: 4, price: 2826 }, color: '#FBBF24', text: 'Hammer T2' },
      { type: 'badge', at: { i: 5, price: 2829.5 }, color: '#FBBF24', text: 'Engulfing T2' },
      { type: 'level', price: 2831, color: '#00D9A0', label: 'Neckline T1', dash: true },
      { type: 'arrow', at: { i: 6, price: 2831.5 }, direction: 'up', color: '#00D9A0', label: 'MAX CONVICTION' },
    ],
    verdict: { label: 'Same size — max conviction to HOLD', type: 'good' },
    caption: 'Tier 1 fires the trade. Tier 2 patterns inside the setup raised the conviction. Same entry, same stop, same size — but holding power is much stronger.',
  },
];
