
// Core Lesson 3 — The 50% Rule deep dive — drawing the line precisely.
export const charts = [
  {
    title: 'WHERE TO MEASURE — close-to-close, not wick-to-wick',
    candles: [
      { o: 100, h: 100.4, l: 99.7, c: 100.0 },     // pole START — close 100.0
      { o: 100.0, h: 100.2, l: 99.85, c: 100.0 },
      { o: 100.0, h: 102.1, l: 99.95, c: 102.0 },
      { o: 102.0, h: 103.5, l: 101.9, c: 103.4 },
      { o: 103.4, h: 105.0, l: 103.3, c: 104.95 },
      { o: 104.95, h: 105.4, l: 104.85, c: 104.5 }, // pole END — close 104.5 (wick to 105.4)
      { o: 104.5, h: 104.6, l: 103.5, c: 103.6 },
    ],
    annotations: [
      { type: 'level', price: 100.0, color: '#5eead4', label: 'POLE START (close)', dash: false },
      { type: 'level', price: 104.5, color: '#5eead4', label: 'POLE END (close)', dash: false },
      { type: 'level', price: 102.25, color: '#fbbf24', label: '50% = 102.25', dash: true },
      { type: 'level', price: 105.4, color: '#94a3b8', label: 'WICK HIGH — ignore for measurement', dash: true },
    ],
    verdict: { label: 'CLOSE-TO-CLOSE WINS', type: 'info' },
    caption: 'Use the close of the first pole bar and the close of the last pole bar. Wicks are noise; closes are the trade.',
  },
  {
    title: 'THE LINE HOLDS ON TEST — keep the trade',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.0, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 105.0, l: 103.3, c: 104.95 },
      { o: 104.95, h: 105.0, l: 103.0, c: 103.1 },
      { o: 103.1, h: 103.4, l: 102.4, c: 102.5 }, // wick to 102.4 — 50% at 102.5
      { o: 102.5, h: 103.0, l: 102.4, c: 102.9 }, // tested 50% but closed above
      { o: 102.9, h: 103.5, l: 102.8, c: 103.4 },
      { o: 103.4, h: 105.5, l: 103.3, c: 105.4 },
    ],
    annotations: [
      { type: 'level', price: 102.5, color: '#fbbf24', label: '50% LINE', dash: true },
      { type: 'badge', at: { i: 5, price: 102.5 }, text: 'TESTED', color: '#fbbf24' },
      { type: 'badge', at: { i: 6, price: 102.9 }, text: 'HELD', color: '#22c55e' },
    ],
    verdict: { label: 'WICK + HELD = ALIVE', type: 'good' },
    caption: 'Bar 6 wicked into the 50% but the close came back above. That is a successful retest. Trade still alive.',
  },
  {
    title: 'CLOSE BELOW THE LINE — exit the same bar',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.0, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 105.0, l: 103.3, c: 104.95 },
      { o: 104.95, h: 105.0, l: 103.5, c: 103.6 },
      { o: 103.6, h: 103.8, l: 102.4, c: 102.5 },
      { o: 102.5, h: 102.7, l: 101.6, c: 101.7 }, // CLOSE 101.7 — well below 50%
      { o: 101.7, h: 102.0, l: 100.4, c: 100.5 },
      { o: 100.5, h: 100.7, l: 99.4, c: 99.5 },
    ],
    annotations: [
      { type: 'level', price: 102.5, color: '#ef4444', label: '50% LINE — CROSSED' },
      { type: 'arrow', at: { i: 6, price: 101.7 }, direction: 'down', color: '#ef4444', label: 'EXIT' },
    ],
    verdict: { label: 'BELOW LINE = OUT NOW', type: 'bad' },
    caption: 'Close below the 50% line at bar 7. Exit the same bar. Do not wait for confirmation; the close IS the confirmation.',
  },
  {
    title: 'MULTIPLE TIMEFRAMES — 50% on 2-min vs 5-min vs 15-min',
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100.4 },
      { o: 100.4, h: 102.0, l: 100.3, c: 101.9 },
      { o: 101.9, h: 103.5, l: 101.8, c: 103.4 },
      { o: 103.4, h: 105.0, l: 103.3, c: 104.9 },
      { o: 104.9, h: 105.4, l: 103.7, c: 103.8 }, // 50% of 2min
      { o: 103.8, h: 104.0, l: 102.5, c: 102.6 }, // 50% of 5min
      { o: 102.6, h: 103.0, l: 101.0, c: 101.1 }, // 50% of 15min
    ],
    annotations: [
      { type: 'level', price: 102.65, color: '#5eead4', label: '2-min 50%', dash: true },
      { type: 'level', price: 102.0, color: '#fbbf24', label: '5-min 50%', dash: true },
      { type: 'level', price: 101.5, color: '#a78bfa', label: '15-min 50%', dash: true },
    ],
    verdict: { label: 'ALIGN ACROSS TIMEFRAMES', type: 'info' },
    caption: 'Different timeframes have different 50% levels. The 2-min is the trade trigger; the 5-min is the regime; the 15-min is the structure.',
  },
  {
    title: 'GAP-FILL TEST — pole start with a gap creates ambiguous 50%',
    candles: [
      { o: 100, h: 100.4, l: 99.6, c: 100.0 },
      { o: 100.5, h: 102.0, l: 100.4, c: 101.9 }, // GAP UP at start of pole
      { o: 101.9, h: 103.4, l: 101.85, c: 103.3 },
      { o: 103.3, h: 104.7, l: 103.2, c: 104.6 },
      { o: 104.6, h: 104.8, l: 103.7, c: 103.8 },
      { o: 103.8, h: 104.0, l: 103.0, c: 103.1 },
      { o: 103.1, h: 103.3, l: 102.6, c: 102.7 }, // tests gap-fill, closes above
      { o: 102.7, h: 104.5, l: 102.65, c: 104.4 },
    ],
    annotations: [
      { type: 'level', price: 100.5, color: '#94a3b8', label: 'GAP-OPEN START', dash: true },
      { type: 'level', price: 102.55, color: '#fbbf24', label: '50% (from gap)', dash: true },
    ],
    verdict: { label: 'MEASURE FROM THE GAP', type: 'info' },
    caption: 'When the pole opens on a gap, measure 50% from the gap-open price. The pre-gap close is irrelevant to the new pole.',
  },
  {
    title: 'CONTAINMENT TEST — does the entire flag stay above 50%?',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.0, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 105.0, l: 103.3, c: 104.95 },
      { o: 104.95, h: 105.0, l: 104.0, c: 104.1 },
      { o: 104.1, h: 104.3, l: 103.6, c: 103.7 },
      { o: 103.7, h: 103.9, l: 103.4, c: 103.5 },
      { o: 103.5, h: 103.6, l: 103.0, c: 103.2 }, // closest to 50% but holds
      { o: 103.2, h: 105.2, l: 103.15, c: 105.1 },
    ],
    annotations: [
      { type: 'level', price: 102.5, color: '#fbbf24', label: '50% LINE', dash: true },
      { type: 'zone', topPrice: 105.0, bottomPrice: 102.5, color: 'rgba(34, 197, 94, 0.06)', label: 'CONTAINMENT ZONE' },
    ],
    verdict: { label: 'FLAG ABOVE 50% — VALID', type: 'good' },
    caption: 'Every flag candle close is above the 50% line. That is the containment test. As long as the test holds, the trade is alive.',
  },
];
