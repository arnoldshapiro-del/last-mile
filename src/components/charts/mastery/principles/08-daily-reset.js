
// Principle 8 — The Daily Reset (3-strikes rule)
export const charts = [
  {
    title: 'THREE SHORT LOSSES — the day is telling you the regime is wrong',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 100.4, l: 99.0, c: 99.1 },     // bear setup #1
      { o: 99.1, h: 99.6, l: 99.0, c: 99.5 },       // bounce — stopped
      { o: 99.5, h: 100.5, l: 99.4, c: 100.4 },
      { o: 100.4, h: 100.6, l: 99.5, c: 99.6 },     // bear #2
      { o: 99.6, h: 100.0, l: 99.4, c: 99.9 },      // bounce — stopped
      { o: 99.9, h: 101.2, l: 99.85, c: 101.1 },
      { o: 101.1, h: 101.3, l: 100.0, c: 100.1 },   // bear #3
      { o: 100.1, h: 100.4, l: 99.9, c: 100.3 },    // bounce — stopped
      { o: 100.3, h: 102.5, l: 100.25, c: 102.4 }, // tempting #4 setup
    ],
    annotations: [
      { type: 'badge', at: { i: 1, price: 99.1 }, text: 'L1', color: '#ef4444' },
      { type: 'badge', at: { i: 4, price: 99.6 }, text: 'L2', color: '#ef4444' },
      { type: 'badge', at: { i: 7, price: 100.1 }, text: 'L3', color: '#ef4444' },
      { type: 'badge', at: { i: 9, price: 102.4 }, text: '#4 = STOP', color: '#fbbf24' },
    ],
    verdict: { label: '3 SAME-DIRECTION LOSSES = OUT', type: 'bad' },
    caption: 'Three short attempts, three losses. The market is buying every dip. Direction is wrong. Stop trading — close the platform.',
  },
  {
    title: 'THE FOURTH ATTEMPT GRAVEYARD — usually the worst trade of the day',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 100.5, l: 99.0, c: 99.1 },
      { o: 99.1, h: 99.7, l: 99.0, c: 99.6 },
      { o: 99.6, h: 100.6, l: 99.5, c: 100.5 },
      { o: 100.5, h: 100.8, l: 99.6, c: 99.7 },
      { o: 99.7, h: 100.2, l: 99.6, c: 100.1 },
      { o: 100.1, h: 101.4, l: 100.0, c: 101.3 },
      { o: 101.3, h: 101.5, l: 100.3, c: 100.4 },
      { o: 100.4, h: 100.8, l: 100.3, c: 100.7 },
      { o: 100.7, h: 102.0, l: 100.6, c: 101.9 },   // continued melting up
      { o: 101.9, h: 103.4, l: 101.8, c: 103.3 },   // attempt #4 BLOWS UP
    ],
    annotations: [
      { type: 'arrow', at: { i: 8, price: 100.7 }, direction: 'down', color: '#ef4444', label: 'CHASE #4' },
      { type: 'badge', at: { i: 10, price: 103.3 }, text: '2x normal loss', color: '#ef4444' },
    ],
    verdict: { label: '4TH COMPOUNDS 1-2-3', type: 'bad' },
    caption: 'After 3 losses, the trader is rattled. Position sizing increases (revenge), discipline slips. The 4th is statistically the worst of the day.',
  },
  {
    title: 'WALKING AWAY = TOMORROW STARTS FLAT',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 100.4, l: 99.0, c: 99.1 },
      { o: 99.1, h: 99.7, l: 99.0, c: 99.6 },
      { o: 99.6, h: 100.6, l: 99.5, c: 100.5 },
      { o: 100.5, h: 100.7, l: 99.5, c: 99.6 },
      { o: 99.6, h: 100.0, l: 99.4, c: 99.9 },
      { o: 99.9, h: 101.0, l: 99.8, c: 100.9 },
      { o: 100.9, h: 101.1, l: 100.0, c: 100.1 },
      { o: 100.1, h: 100.3, l: 99.9, c: 100.2 },    // L3 stopped — walk away
    ],
    annotations: [
      { type: 'badge', at: { i: 1, price: 99.1 }, text: 'L1', color: '#ef4444' },
      { type: 'badge', at: { i: 4, price: 99.6 }, text: 'L2', color: '#ef4444' },
      { type: 'badge', at: { i: 7, price: 100.1 }, text: 'L3 → STOP', color: '#fbbf24' },
      { type: 'badge', at: { i: 8, price: 100.2 }, text: '🚪 WALKED', color: '#22c55e' },
    ],
    verdict: { label: 'CAPITAL PRESERVED', type: 'good' },
    caption: 'Closed the platform after L3. No 4th attempt. Damage capped at 3 small stops. Tomorrow opens fresh, fully capitalized.',
  },
  {
    title: 'RECOVERY PSYCHOLOGY — the worst headspace to trade in',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 100.5, l: 99.0, c: 99.1 },
      { o: 99.1, h: 100.0, l: 99.0, c: 99.9 },
      { o: 99.9, h: 100.1, l: 99.0, c: 99.1 },      // L1
      { o: 99.1, h: 99.7, l: 99.0, c: 99.6 },
      { o: 99.6, h: 99.7, l: 98.6, c: 98.7 },       // L2
      { o: 98.7, h: 99.5, l: 98.6, c: 99.4 },
      { o: 99.4, h: 99.5, l: 98.4, c: 98.5 },       // L3
      { o: 98.5, h: 100.0, l: 98.4, c: 99.9 },
      { o: 99.9, h: 100.0, l: 98.0, c: 98.1 },      // L4 — desperate, full size
      { o: 98.1, h: 98.4, l: 96.5, c: 96.6 },       // big loss
    ],
    annotations: [
      { type: 'badge', at: { i: 7, price: 98.5 }, text: 'BIAS', color: '#fbbf24' },
      { type: 'badge', at: { i: 9, price: 98.1 }, text: 'EMOTION', color: '#ef4444' },
      { type: 'badge', at: { i: 10, price: 96.6 }, text: 'BLOWUP', color: '#ef4444' },
    ],
    verdict: { label: 'EMOTION ≠ ANALYSIS', type: 'bad' },
    caption: 'After 3 losses, the brain shifts from analysis to "make it back." Position sizing grows. Stops get loose. The big red bar finds you.',
  },
  {
    title: 'CAPITAL CURVE — 3-strike trader vs no-rule trader',
    candles: [
      { o: 100, h: 100.4, l: 99.5, c: 99.7 },
      { o: 99.7, h: 100.0, l: 99.2, c: 99.4 },
      { o: 99.4, h: 99.6, l: 98.9, c: 99.1 },
      { o: 99.1, h: 99.3, l: 98.7, c: 98.9 },     // 3-strike STOPS here, flat
      { o: 98.9, h: 99.0, l: 98.2, c: 98.3 },
      { o: 98.3, h: 98.4, l: 97.5, c: 97.6 },
      { o: 97.6, h: 97.7, l: 96.4, c: 96.5 },
      { o: 96.5, h: 96.6, l: 95.2, c: 95.3 },     // no-rule trader keeps bleeding
      { o: 95.3, h: 95.4, l: 93.8, c: 93.9 },
    ],
    annotations: [
      { type: 'level', price: 98.9, color: '#22c55e', label: '3-STRIKE STOP — flat from here', dash: true },
      { type: 'level', price: 93.9, color: '#ef4444', label: 'NO-RULE END — 6 pts below', dash: true },
    ],
    verdict: { label: 'RULES SAVE 60%+ OF LOSSES', type: 'info' },
    caption: 'On bad days, the 3-strike trader stops near the top of the loss curve. The no-rule trader rides it to the bottom every time.',
  },
  {
    title: 'CLOSE THE PLATFORM — physical distance from the chart',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 100.5, l: 99.0, c: 99.1 },
      { o: 99.1, h: 99.7, l: 99.0, c: 99.6 },
      { o: 99.6, h: 100.4, l: 99.5, c: 100.3 },
      { o: 100.3, h: 100.5, l: 99.5, c: 99.6 },
      { o: 99.6, h: 100.0, l: 99.4, c: 99.9 },
      { o: 99.9, h: 100.6, l: 99.8, c: 100.5 },
      { o: 100.5, h: 100.7, l: 99.6, c: 99.7 }, // L3
      { o: 99.7, h: 102.5, l: 99.65, c: 102.4 }, // chart explodes — but you are not watching
    ],
    annotations: [
      { type: 'badge', at: { i: 7, price: 99.7 }, text: 'PLATFORM CLOSED', color: '#22c55e' },
      { type: 'badge', at: { i: 8, price: 102.4 }, text: 'NOT YOUR PROBLEM', color: '#94a3b8' },
    ],
    verdict: { label: 'NOT WATCHING = NOT TEMPTED', type: 'good' },
    caption: 'After L3, close the platform. Walk outside. The chart will keep going. The next trade is tomorrow, not in 5 minutes.',
  },
];
