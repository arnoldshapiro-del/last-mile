// Teaching unit 3: The 6-signal warning panel — when 'early entry' becomes gambling.
export const charts = [
  {
    title: 'Signal 1 — Higher-timeframe trend supportive (or at least neutral)',
    candles: [
      { o: 2843, h: 2843.5, l: 2840, c: 2840.2 },
      { o: 2840.2, h: 2841, l: 2836, c: 2836.5 },
      { o: 2836.5, h: 2837.2, l: 2831, c: 2831.5 },
      { o: 2831.5, h: 2832, l: 2826, c: 2826.5 },
      { o: 2826.5, h: 2827, l: 2821.5, c: 2822 },
      { o: 2822, h: 2823, l: 2820, c: 2820.8 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 2843.5 }, to: { i: 5, price: 2823 }, color: '#FF3D5A', label: 'Downtrend intact' },
      { type: 'level', price: 2843.5, color: '#FF3D5A', label: 'All MAs sloping down', dash: true },
    ],
    verdict: { label: 'RED — counter-trend = needs MORE confirmation', type: 'bad' },
    caption: 'Counter-trend longs need higher confirmation than trend-aligned longs. Strong downtrend = early entry has materially lower win rate. Skip if 3+ other signals also fail.',
  },
  {
    title: 'Signal 2 — Engulfing candle CLEAN (minimal upper wick)',
    candles: [
      { o: 2822, h: 2822.5, l: 2820, c: 2820.5 },
      { o: 2820.5, h: 2823.5, l: 2820, c: 2823 },
      { o: 2823, h: 2831.5, l: 2822.5, c: 2829 },
      { o: 2829, h: 2829.5, l: 2826, c: 2826.5 },
    ],
    annotations: [
      { type: 'level', price: 2831.5, color: '#FF3D5A', label: '1.5pt upper wick = supply' },
      { type: 'arrow', at: { i: 2, price: 2831.5 }, direction: 'down', color: '#FF3D5A', label: 'sellers rejected' },
    ],
    verdict: { label: 'RED — visible wick means sellers were active', type: 'bad' },
    caption: 'A meaningful upper wick on the engulfing candle is the footprint of supply. The bigger the wick relative to the body, the louder the warning. Clean engulfings have small or no wicks.',
  },
  {
    title: 'Signal 3 — Follow-through within 1-3 candles',
    candles: [
      { o: 2822, h: 2823, l: 2820, c: 2820.5 },
      { o: 2820.5, h: 2829, l: 2820, c: 2828 },
      { o: 2828, h: 2828.5, l: 2825, c: 2826 },
      { o: 2826, h: 2826.5, l: 2824, c: 2825 },
      { o: 2825, h: 2825.5, l: 2823, c: 2823.5 },
      { o: 2823.5, h: 2824, l: 2822, c: 2822.5 },
      { o: 2822.5, h: 2823, l: 2821, c: 2821.5 },
    ],
    annotations: [
      { type: 'level', price: 2829, color: '#FF3D5A', label: 'Engulfing high — never broken' },
      { type: 'arrow', at: { i: 1, price: 2829 }, direction: 'down', color: '#FBBF24', label: 'engulfing' },
      { type: 'arrow', at: { i: 6, price: 2821.5 }, direction: 'down', color: '#FF3D5A', label: 'fizzled' },
    ],
    verdict: { label: 'RED — 5+ candles of failed follow-through', type: 'bad' },
    caption: 'Real reversals get continuation within 1-3 candles. Five or more indecision candles after the engulfing means momentum did not transfer. Buyers got absorbed by sellers.',
  },
  {
    title: 'Signal 6 — Current candle bullish or at least not bearish at the lows',
    candles: [
      { o: 2828, h: 2829, l: 2825, c: 2825.5 },
      { o: 2825.5, h: 2826, l: 2822, c: 2822.5 },
      { o: 2822.5, h: 2823, l: 2820.5, c: 2821 },
    ],
    annotations: [
      { type: 'pivot', at: { i: 2, side: 'low' }, color: '#FF3D5A', label: '3rd test of lows' },
      { type: 'arrow', at: { i: 2, price: 2821 }, direction: 'down', color: '#FF3D5A', label: 'red @ lows' },
    ],
    verdict: { label: 'RED — third test of the same level often breaks', type: 'bad' },
    caption: 'A red candle testing the double bottom lows for a third time is bearish pressure RIGHT NOW. Buying into this is buying into active selling — the trade has no margin for error.',
  },
];
