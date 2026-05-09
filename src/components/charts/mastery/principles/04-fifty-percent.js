
// Principle 4 — The 50% Rule
// Six teaching scenarios on the most important number on the chart.
export const charts = [
  {
    title: 'FLAG STAYS ABOVE 50% — thesis alive, breakout valid',
    candles: [
      { o: 100.0, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.1, l: 99.9, c: 102.0 },
      { o: 102.0, h: 103.4, l: 101.9, c: 103.3 },
      { o: 103.3, h: 104.6, l: 103.2, c: 104.5 },
      { o: 104.5, h: 104.7, l: 103.6, c: 103.8 },
      { o: 103.8, h: 104.0, l: 103.3, c: 103.5 },
      { o: 103.5, h: 103.7, l: 103.0, c: 103.2 },
      { o: 103.2, h: 103.5, l: 102.8, c: 103.1 },
      { o: 103.1, h: 105.0, l: 103.05, c: 104.9 }, // breakout
    ],
    annotations: [
      { type: 'level', price: 102.25, color: '#fbbf24', label: '50% LINE — held', dash: true },
      { type: 'level', price: 100.0, color: '#94a3b8', label: 'POLE START', dash: true },
      { type: 'level', price: 104.5, color: '#94a3b8', label: 'POLE END', dash: true },
      { type: 'arrow', at: { i: 8, price: 104.9 }, direction: 'up', color: '#22c55e', label: 'ENTRY' },
    ],
    verdict: { label: 'ABOVE 50% = ALIVE', type: 'good' },
    caption: 'Flag low (102.8) is above the 50% line (102.25). Pole participants still in control. Breakout is the trade.',
  },
  {
    title: 'CLOSE BREAKS 50% — thesis dead, cancel the trade',
    candles: [
      { o: 100.0, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.1, l: 99.9, c: 102.0 },
      { o: 102.0, h: 103.4, l: 101.9, c: 103.3 },
      { o: 103.3, h: 104.6, l: 103.2, c: 104.5 },
      { o: 104.5, h: 104.7, l: 103.5, c: 103.6 },
      { o: 103.6, h: 103.8, l: 102.4, c: 102.5 },
      { o: 102.5, h: 102.7, l: 101.9, c: 102.0 },  // CLOSE 102.0 = below 50%
      { o: 102.0, h: 102.3, l: 100.8, c: 100.9 },  // continues lower
      { o: 100.9, h: 101.0, l: 99.6, c: 99.7 },
    ],
    annotations: [
      { type: 'level', price: 102.25, color: '#ef4444', label: '50% LINE — CLOSED BELOW' },
      { type: 'arrow', at: { i: 6, price: 102.0 }, direction: 'down', color: '#ef4444', label: 'CANCEL TRADE' },
      { type: 'badge', at: { i: 6, price: 102.0 }, text: 'THESIS DEAD', color: '#ef4444' },
    ],
    verdict: { label: 'BELOW 50% CLOSE = OUT', type: 'bad' },
    caption: 'Bar 7 closes 102.0 — below the 50% line. The pole participants no longer control. Walk away — this trade is done.',
  },
  {
    title: 'WICK to 50% but CLOSE above — alive, hold',
    candles: [
      { o: 100.0, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.1, l: 99.9, c: 102.0 },
      { o: 102.0, h: 103.4, l: 101.9, c: 103.3 },
      { o: 103.3, h: 104.6, l: 103.2, c: 104.5 },
      { o: 104.5, h: 104.7, l: 103.6, c: 103.8 },
      { o: 103.8, h: 104.0, l: 103.0, c: 103.4 },
      { o: 103.4, h: 103.6, l: 102.1, c: 103.0 },  // wick to 102.1, close 103.0
      { o: 103.0, h: 103.4, l: 102.7, c: 103.2 },
      { o: 103.2, h: 105.0, l: 103.15, c: 104.9 },
    ],
    annotations: [
      { type: 'level', price: 102.25, color: '#fbbf24', label: '50% LINE', dash: true },
      { type: 'badge', at: { i: 6, price: 102.1 }, text: 'WICK ONLY', color: '#fbbf24' },
      { type: 'arrow', at: { i: 8, price: 104.9 }, direction: 'up', color: '#22c55e', label: 'ENTRY' },
    ],
    verdict: { label: 'WICK SURVIVED — STILL ALIVE', type: 'good' },
    caption: 'Wick tagged the 50% line but the bar closed above. That is a successful retest, not a thesis kill. Hold.',
  },
  {
    title: 'WIDENING THE STOP PAST 50% — the most expensive impulse',
    candles: [
      { o: 100.0, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.1, l: 99.9, c: 102.0 },
      { o: 102.0, h: 103.4, l: 101.9, c: 103.3 },
      { o: 103.3, h: 104.6, l: 103.2, c: 104.5 },
      { o: 104.5, h: 104.7, l: 103.5, c: 103.6 },
      { o: 103.6, h: 103.8, l: 102.4, c: 102.5 },
      { o: 102.5, h: 102.7, l: 101.9, c: 102.0 },
      { o: 102.0, h: 102.2, l: 100.7, c: 100.9 },
      { o: 100.9, h: 101.0, l: 98.6, c: 98.7 },     // stop should have hit
      { o: 98.7, h: 98.9, l: 97.0, c: 97.1 },       // moved stop, deeper loss
    ],
    annotations: [
      { type: 'level', price: 102.25, color: '#ef4444', label: '50% LINE — WHERE TRADE DIED' },
      { type: 'level', price: 102.0, color: '#fbbf24', label: 'ORIGINAL STOP', dash: true },
      { type: 'level', price: 99.5, color: '#ef4444', label: 'WIDENED STOP', dash: true },
      { type: 'badge', at: { i: 9, price: 97.1 }, text: '5x LARGER LOSS', color: '#ef4444' },
    ],
    verdict: { label: 'STOP-WIDENING = ACCOUNT KILLER', type: 'bad' },
    caption: '50% was the exit. Widening the stop turned a 1-point planned loss into a 5-point realized loss. Past 50%, the only valid action is cancel.',
  },
  {
    title: 'DRAWING THE 50% LINE — pole start to pole end midpoint',
    candles: [
      { o: 100.0, h: 100.4, l: 99.7, c: 100.0 },
      { o: 100.0, h: 100.3, l: 99.85, c: 100.0 },   // pole start = 100.0
      { o: 100.0, h: 102.0, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 105.0, l: 103.3, c: 104.95 },
      { o: 104.95, h: 106.5, l: 104.85, c: 106.45 },
      { o: 106.45, h: 108.05, l: 106.4, c: 108.0 }, // pole end = 108.0 (top wick)
      { o: 108.0, h: 108.1, l: 107.2, c: 107.4 },
    ],
    annotations: [
      { type: 'level', price: 100.0, color: '#5eead4', label: '① POLE START 100.00' },
      { type: 'level', price: 108.0, color: '#5eead4', label: '② POLE END 108.00' },
      { type: 'level', price: 104.0, color: '#fbbf24', label: '③ 50% = 104.00 — DRAW HERE' },
    ],
    verdict: { label: 'MIDPOINT BY MEASUREMENT', type: 'info' },
    caption: 'Pole start 100, pole end 108, 50% line at 104. Draw it the moment the pole prints. This line is your thesis-killer.',
  },
  {
    title: 'TRAP OF HOPE — flag broke 50%, but stayed in trade for the bounce',
    candles: [
      { o: 100.0, h: 100.4, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.1, l: 99.9, c: 102.0 },
      { o: 102.0, h: 103.4, l: 101.9, c: 103.3 },
      { o: 103.3, h: 104.6, l: 103.2, c: 104.5 },
      { o: 104.5, h: 104.7, l: 103.5, c: 103.6 },
      { o: 103.6, h: 103.8, l: 102.4, c: 102.5 },
      { o: 102.5, h: 102.7, l: 101.9, c: 102.0 }, // closed below 50% — trade DEAD
      { o: 102.0, h: 102.5, l: 101.8, c: 102.4 }, // tiny bounce — "I knew it!"
      { o: 102.4, h: 102.5, l: 101.0, c: 101.1 }, // continues lower — bigger loss
      { o: 101.1, h: 101.2, l: 99.5, c: 99.6 },
    ],
    annotations: [
      { type: 'level', price: 102.25, color: '#ef4444', label: '50% LINE — broken' },
      { type: 'badge', at: { i: 7, price: 102.4 }, text: '"BOUNCE!"', color: '#fbbf24' },
      { type: 'arrow', at: { i: 9, price: 99.6 }, direction: 'down', color: '#ef4444', label: 'TRAP COMPLETED' },
    ],
    verdict: { label: 'HOPE = SLOW LOSS', type: 'bad' },
    caption: 'Saw a tiny bounce after the 50% break and held. Bounce was a relief rally, not a recovery. The data changed; the trade was already dead.',
  },
];
