// Teaching unit 6: 50% rule — when a flag retraces past 50% the thesis is dead
export const charts = [
  {
    title: '30% retrace — flag healthy, setup INTACT',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.0, l: 99.95, c: 101.9 },
      { o: 101.9, h: 104.0, l: 101.85, c: 103.9 },
      { o: 103.9, h: 106.0, l: 103.8, c: 105.9 }, // pole top = 106
      { o: 105.9, h: 106.0, l: 104.5, c: 104.7 }, // 22% back
      { o: 104.7, h: 104.9, l: 104.0, c: 104.2 }, // 30% back
      { o: 104.2, h: 104.4, l: 103.8, c: 104.0 },
      { o: 104.0, h: 105.7, l: 103.9, c: 105.5 },
      { o: 105.5, h: 107.0, l: 105.4, c: 106.8 },
    ],
    annotations: [
      { type: 'level', price: 100.0, color: '#a78bfa', label: 'pole start' },
      { type: 'level', price: 106.0, color: '#a78bfa', label: 'pole top' },
      { type: 'level', price: 103.0, color: '#fbbf24', label: '50% LINE', dash: true },
      { type: 'badge', at: { i: 5, price: 104.2 }, text: '~30% back', color: '#22c55e' },
    ],
    verdict: { label: 'INTACT — 30% retrace', type: 'good' },
    caption: 'Healthy flag retraces 25-50%. Pole players still in control. Setup remains valid.',
  },
  {
    title: '45% retrace — flag still INTACT (just barely)',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.0, l: 99.95, c: 101.9 },
      { o: 101.9, h: 104.0, l: 101.85, c: 103.9 },
      { o: 103.9, h: 106.0, l: 103.8, c: 105.9 },
      { o: 105.9, h: 106.0, l: 104.5, c: 104.6 },
      { o: 104.6, h: 104.7, l: 103.5, c: 103.7 },
      { o: 103.7, h: 103.8, l: 103.2, c: 103.3 }, // 45% back
      { o: 103.3, h: 105.0, l: 103.2, c: 104.8 },
      { o: 104.8, h: 106.5, l: 104.7, c: 106.3 },
    ],
    annotations: [
      { type: 'level', price: 100.0, color: '#a78bfa', label: 'pole start' },
      { type: 'level', price: 106.0, color: '#a78bfa', label: 'pole top' },
      { type: 'level', price: 103.0, color: '#fbbf24', label: '50% LINE', dash: true },
      { type: 'badge', at: { i: 6, price: 103.3 }, text: '45% back', color: '#22c55e' },
    ],
    verdict: { label: 'INTACT — close to line', type: 'good' },
    caption: 'Right at 45%. Still inside the band. Watch closely — one more bar of weakness and it dies.',
  },
  {
    title: '55% retrace — WARNING ZONE, weakening',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.0, l: 99.95, c: 101.9 },
      { o: 101.9, h: 104.0, l: 101.85, c: 103.9 },
      { o: 103.9, h: 106.0, l: 103.8, c: 105.9 },
      { o: 105.9, h: 106.0, l: 104.5, c: 104.6 },
      { o: 104.6, h: 104.7, l: 103.5, c: 103.6 },
      { o: 103.6, h: 103.7, l: 102.5, c: 102.7 }, // 55% back
      { o: 102.7, h: 103.0, l: 102.4, c: 102.6 },
      { o: 102.6, h: 102.8, l: 102.0, c: 102.2 },
    ],
    annotations: [
      { type: 'level', price: 100.0, color: '#a78bfa', label: 'pole start' },
      { type: 'level', price: 106.0, color: '#a78bfa', label: 'pole top' },
      { type: 'level', price: 103.0, color: '#fbbf24', label: '50% LINE', dash: true },
      { type: 'badge', at: { i: 6, price: 102.7 }, text: '55% back', color: '#FFB44A' },
    ],
    verdict: { label: 'WEAKENING — TIGHTEN STOP', type: 'warn' },
    caption: 'Past 50% but barely. The thesis is on life support. Defensive size, tight stop, accept it may die.',
  },
  {
    title: '70% retrace — THESIS DEAD, cancel',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.0, l: 99.95, c: 101.9 },
      { o: 101.9, h: 104.0, l: 101.85, c: 103.9 },
      { o: 103.9, h: 106.0, l: 103.8, c: 105.9 },
      { o: 105.9, h: 106.0, l: 104.0, c: 104.2 },
      { o: 104.2, h: 104.5, l: 103.0, c: 103.1 },
      { o: 103.1, h: 103.2, l: 101.8, c: 101.9 }, // 68% back
      { o: 101.9, h: 102.0, l: 101.0, c: 101.2 },
      { o: 101.2, h: 101.5, l: 100.5, c: 100.7 },
    ],
    annotations: [
      { type: 'level', price: 100.0, color: '#a78bfa', label: 'pole start' },
      { type: 'level', price: 106.0, color: '#a78bfa', label: 'pole top' },
      { type: 'level', price: 103.0, color: '#fbbf24', label: '50% LINE', dash: true },
      { type: 'badge', at: { i: 7, price: 101.5 }, text: '70% back', color: '#ef4444' },
    ],
    verdict: { label: 'DEAD — CANCEL', type: 'bad' },
    caption: 'Past 60% retrace. Setup is over. Do not search for new entries on this thesis.',
  },
  {
    title: '80-90% retrace — FULL REVERSAL in progress',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.0, l: 99.95, c: 101.9 },
      { o: 101.9, h: 104.0, l: 101.85, c: 103.9 },
      { o: 103.9, h: 106.0, l: 103.8, c: 105.9 },
      { o: 105.9, h: 106.0, l: 103.5, c: 103.6 },
      { o: 103.6, h: 103.8, l: 101.5, c: 101.6 },
      { o: 101.6, h: 101.7, l: 100.4, c: 100.6 }, // 90% back
      { o: 100.6, h: 100.8, l: 99.5, c: 99.6 },
      { o: 99.6, h: 99.8, l: 98.0, c: 98.2 },
    ],
    annotations: [
      { type: 'level', price: 100.0, color: '#a78bfa', label: 'pole start' },
      { type: 'level', price: 106.0, color: '#a78bfa', label: 'pole top' },
      { type: 'level', price: 103.0, color: '#fbbf24', label: '50% LINE', dash: true },
      { type: 'badge', at: { i: 6, price: 100.6 }, text: '90% back — REVERSAL', color: '#ef4444' },
    ],
    verdict: { label: 'REVERSAL IN PROGRESS', type: 'bad' },
    caption: 'No longer a flag — this is a reversal. Direction has changed. Stop fighting it.',
  },
  {
    title: "Today's RTY 9:00 AM — capitulation MISTAKEN for bear flag",
    candles: [
      { o: 100, h: 100.3, l: 99.5, c: 99.7 },
      { o: 99.7, h: 99.8, l: 96.0, c: 96.2 },   // big drop
      { o: 96.2, h: 96.3, l: 92.5, c: 92.8 },   // huge drop = pole?
      { o: 92.8, h: 95.5, l: 92.7, c: 95.3 },   // FLAG bouncing — already retraced 30%
      { o: 95.3, h: 97.5, l: 95.2, c: 97.3 },   // 60%+ retraced
      { o: 97.3, h: 99.0, l: 97.2, c: 98.8 },   // 80%+ retraced
      { o: 98.8, h: 100.0, l: 98.7, c: 99.8 },  // 95% retraced — pole dead
      { o: 99.8, h: 101.0, l: 99.7, c: 100.8 }, // sustained reversal
      { o: 100.8, h: 102.0, l: 100.7, c: 101.9 },
    ],
    annotations: [
      { type: 'level', price: 92.5, color: '#a78bfa', label: 'pole low' },
      { type: 'level', price: 100.0, color: '#a78bfa', label: 'pole start' },
      { type: 'level', price: 96.25, color: '#fbbf24', label: '50% LINE', dash: true },
      { type: 'badge', at: { i: 5, price: 98.8 }, text: '80%+ — bear thesis dies', color: '#ef4444' },
      { type: 'badge', at: { i: 7, price: 100.8 }, text: 'REVERSAL CONFIRMED', color: '#22c55e' },
    ],
    verdict: { label: '50% RULE WOULD HAVE SAVED IT', type: 'warn' },
    caption: "Real chart from today. The bounce blew through 50% on candle 4. Bear thesis dead. Yet I shorted into it.",
  },
];
