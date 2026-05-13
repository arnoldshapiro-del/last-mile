// Teaching unit 6: Three scenarios for Tier 2 in practice.
export const charts = [
  {
    title: 'Scenario 1 — Tier 2 ALONE in chop = NO TRADE',
    candles: [
      { o: 2830, h: 2831, l: 2829, c: 2830.5 },
      { o: 2830.5, h: 2831, l: 2830, c: 2830.2 },
      { o: 2830.2, h: 2831, l: 2828, c: 2828.5 },
      { o: 2828.5, h: 2831, l: 2828.3, c: 2830.5 },
      { o: 2830.5, h: 2831, l: 2829, c: 2830 },
      { o: 2830, h: 2831, l: 2829.5, c: 2830.5 },
    ],
    annotations: [
      { type: 'badge', at: { i: 3, price: 2831 }, color: '#FBBF24', text: 'Hammer (random)' },
      { type: 'zone', topPrice: 2831, bottomPrice: 2828, color: 'rgba(148, 163, 184, 0.10)', label: 'CHOP — no structure' },
    ],
    verdict: { label: 'Tier 2 in chop = pass', type: 'bad' },
    caption: 'A hammer floating in mid-range chop is a 60% pattern with no structural support. Without Tier 1 around it, this is not the trader\'s edge. Pass.',
  },
  {
    title: 'Scenario 2 — Tier 2 INSIDE a forming Tier 1',
    candles: [
      { o: 2830, h: 2830.5, l: 2826, c: 2826.5 },
      { o: 2826.5, h: 2827, l: 2824, c: 2824.5 },
      { o: 2824.5, h: 2825, l: 2823, c: 2823.5 },
      { o: 2823.5, h: 2828, l: 2823, c: 2827.5 },
      { o: 2827.5, h: 2828, l: 2825, c: 2825.5 },
      { o: 2825.5, h: 2826, l: 2823.5, c: 2823.8 },
      { o: 2823.8, h: 2828, l: 2823.5, c: 2827.5 },
      { o: 2827.5, h: 2832, l: 2827, c: 2831.8 },
    ],
    annotations: [
      { type: 'pivot', at: { i: 2, side: 'low' }, color: '#22D3EE', label: 'Low 1' },
      { type: 'pivot', at: { i: 5, side: 'low' }, color: '#22D3EE', label: 'Low 2 + Hammer T2' },
      { type: 'badge', at: { i: 5, price: 2824 }, color: '#FBBF24', text: 'Hammer at Low 2' },
      { type: 'level', price: 2831, color: '#00D9A0', label: 'T1 neckline close', dash: true },
    ],
    verdict: { label: 'Same trade — more conviction to HOLD', type: 'good' },
    caption: 'The hammer printed at the second-low candle as the W formed. It did not trigger the trade — the neckline close did. The hammer told you the W was MORE likely to complete.',
  },
  {
    title: 'Scenario 3 — Multiple Tier 2 stacked at a MAJOR level',
    candles: [
      { o: 2826, h: 2826.5, l: 2824, c: 2824.5 },
      { o: 2824.5, h: 2825, l: 2823, c: 2823.5 },
      { o: 2823.5, h: 2828, l: 2823, c: 2827.5 },
      { o: 2827.5, h: 2832, l: 2827, c: 2831.5 },
      { o: 2831.5, h: 2834, l: 2831, c: 2833.5 },
    ],
    annotations: [
      { type: 'level', price: 2824, color: '#FBBF24', label: 'Prior major support — pre-mapped', dash: true },
      { type: 'badge', at: { i: 2, price: 2828 }, color: '#FBBF24', text: 'Engulfing' },
      { type: 'badge', at: { i: 3, price: 2832.5 }, color: '#FBBF24', text: 'TL break' },
      { type: 'badge', at: { i: 4, price: 2834 }, color: '#FBBF24', text: 'MA reclaim' },
      { type: 'volume', bars: [80, 100, 220, 280, 240] },
    ],
    verdict: { label: 'Stack of 5 at level = full size, no Tier 1 needed', type: 'good' },
    caption: 'At a pre-mapped major support: engulfing + TL break + MA reclaim + volume + delta = FIVE Tier 2 signals. The stack itself becomes the setup. Full size, fresh stop, take the trade.',
  },
  {
    title: 'The articulation test — say it aloud before you click',
    candles: [
      { o: 2826, h: 2826.5, l: 2824, c: 2824.5 },
      { o: 2824.5, h: 2826, l: 2823.5, c: 2825.5 },
      { o: 2825.5, h: 2828, l: 2825, c: 2827.5 },
    ],
    annotations: [
      { type: 'badge', at: { i: 0, price: 2826.5 }, color: '#94a3b8', text: '"hmm a hammer"' },
      { type: 'badge', at: { i: 1, price: 2827 }, color: '#FBBF24', text: '"+at prior support"' },
      { type: 'badge', at: { i: 2, price: 2828.5 }, color: '#00D9A0', text: '"+volume +TL break"' },
    ],
    verdict: { label: 'If you can\'t list 2-3 stacked, you don\'t trade', type: 'good' },
    caption: 'The discipline rule — articulate the evidence aloud before clicking. "Hammer alone" = no. "Hammer at support + volume + TL break" = yes. The bricks must stack.',
  },
];
