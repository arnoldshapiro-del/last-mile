// Teaching unit 10: Bear Flag Setup Checklist — 5 Conditions That MUST Be True.
// Concept — five questions, NO on any one = no trade.
export const charts = [
  {
    title: 'ALL 5 PASS — clean short setup',
    candles: [
      { o: 102.0, h: 102.3, l: 101.6, c: 101.7 },
      { o: 101.7, h: 101.9, l: 100.4, c: 100.5 },
      { o: 100.5, h: 100.7, l: 99.4, c: 99.5 },     // impulse pole c1
      { o: 99.5, h: 99.6, l: 98.4, c: 98.5 },       // pole c2 — LL formed
      { o: 98.5, h: 99.2, l: 98.4, c: 99.1 },       // bounce c1
      { o: 99.1, h: 99.5, l: 98.9, c: 99.3 },       // bounce c2
      { o: 99.3, h: 99.7, l: 99.1, c: 99.6 },       // LH at prior support → resistance
      { o: 99.6, h: 99.8, l: 98.4, c: 98.5 },       // breakdown
      { o: 98.5, h: 98.6, l: 97.3, c: 97.4 },
    ],
    annotations: [
      { type: 'level', price: 99.7, color: '#22c55e', label: '✓1 LH formed' },
      { type: 'level', price: 98.4, color: '#22c55e', label: '✓2 LL formed' },
      { type: 'zone', topPrice: 100.5, bottomPrice: 98.4, color: 'rgba(239, 68, 68, 0.06)', label: '✓3 Multi-candle pole' },
      { type: 'level', price: 99.0, color: '#22c55e', label: '✓4 Bounce shallow (under 50%)', dash: true },
      { type: 'arrow', at: { i: 7, price: 98.9 }, direction: 'down', color: '#22c55e', label: '✓5 HTF bearish — short' },
    ],
    verdict: { label: '5/5 — short approved', type: 'good' },
    caption: 'LH ✓ LL ✓ multi-candle pole ✓ shallow bounce ✓ HTF aligned ✓. Five out of five passes. Take the short.',
  },
  {
    title: 'FAILS #1 — no LH/LL formed yet',
    candles: [
      { o: 102.0, h: 102.3, l: 101.6, c: 101.7 },
      { o: 101.7, h: 102.4, l: 101.6, c: 102.3 },   // higher highs still
      { o: 102.3, h: 103.1, l: 102.2, c: 103.0 },
      { o: 103.0, h: 103.3, l: 102.4, c: 102.5 },   // one red candle
      { o: 102.5, h: 102.7, l: 101.7, c: 101.8 },   // another red
      { o: 101.8, h: 102.5, l: 101.7, c: 102.4 },   // bouncing
    ],
    annotations: [
      { type: 'arrow', at: { i: 4, price: 101.5 }, direction: 'down', color: '#ef4444', label: '✗1 No LH/LL — uptrend intact' },
    ],
    verdict: { label: 'NO TRADE — fails #1', type: 'bad' },
    caption: 'Higher highs still printing. No structural lower high or lower low. Shorting here is shorting into an uptrend.',
  },
  {
    title: 'FAILS #2 — one-candle "pole" does not qualify',
    candles: [
      { o: 102.0, h: 102.3, l: 101.6, c: 101.7 },
      { o: 101.7, h: 102.0, l: 101.5, c: 101.9 },
      { o: 101.9, h: 102.1, l: 100.5, c: 100.6 },   // ONE big red — "pole"?
      { o: 100.6, h: 101.5, l: 100.5, c: 101.3 },   // bounce
      { o: 101.3, h: 101.8, l: 101.2, c: 101.7 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 2, price: 100.3 }, direction: 'up', color: '#ef4444', label: '✗2 One candle ≠ pole' },
    ],
    verdict: { label: 'NO TRADE — fails #2', type: 'bad' },
    caption: 'A real pole has multiple impulse candles OR confirmed structure break. One red candle is a hiccup, not a pole.',
  },
  {
    title: 'FAILS #3 — bounce exceeds 50%, thesis broken',
    candles: [
      { o: 102.0, h: 102.3, l: 101.6, c: 101.7 },
      { o: 101.7, h: 101.9, l: 100.4, c: 100.5 },
      { o: 100.5, h: 100.7, l: 99.4, c: 99.5 },
      { o: 99.5, h: 99.6, l: 98.4, c: 98.5 },
      { o: 98.5, h: 99.6, l: 98.4, c: 99.5 },
      { o: 99.5, h: 100.4, l: 99.4, c: 100.3 },     // exceeded 50%
      { o: 100.3, h: 100.6, l: 99.9, c: 100.5 },
    ],
    annotations: [
      { type: 'level', price: 100.0, color: '#fbbf24', label: '50% retrace' },
      { type: 'arrow', at: { i: 5, price: 100.7 }, direction: 'up', color: '#ef4444', label: '✗3 Bounce > 50%' },
    ],
    verdict: { label: 'NO TRADE — fails #3', type: 'bad' },
    caption: 'Bounce ate more than half the move. Bear thesis broken. Sellers no longer in control.',
  },
  {
    title: 'FAILS #4 — bouncing THROUGH resistance with RISING volume',
    candles: [
      { o: 102.0, h: 102.3, l: 101.6, c: 101.7 },
      { o: 101.7, h: 101.9, l: 100.4, c: 100.5 },
      { o: 100.5, h: 100.7, l: 99.4, c: 99.5 },
      { o: 99.5, h: 99.6, l: 98.4, c: 98.5 },
      { o: 98.5, h: 99.0, l: 98.4, c: 98.9 },
      { o: 98.9, h: 99.4, l: 98.8, c: 99.3 },       // approach resistance
      { o: 99.3, h: 99.8, l: 99.2, c: 99.7 },       // pushing through
      { o: 99.7, h: 100.3, l: 99.6, c: 100.2 },     // through resistance — buyers strong
    ],
    annotations: [
      { type: 'level', price: 99.5, color: '#fbbf24', label: 'Prior support → resistance' },
      { type: 'arrow', at: { i: 7, price: 100.4 }, direction: 'up', color: '#ef4444', label: '✗4 Cut THROUGH — buyers winning' },
    ],
    verdict: { label: 'NO TRADE — fails #4', type: 'bad' },
    caption: 'Bounce stalling at resistance with declining volume = short. Cutting through with rising volume = buyers winning. Pass.',
  },
  {
    title: 'FAILS #5 — HTF still bullish, size down or skip',
    candles: [
      // 2-min looks bearish
      { o: 102.0, h: 102.3, l: 101.6, c: 101.7 },
      { o: 101.7, h: 101.9, l: 100.4, c: 100.5 },
      { o: 100.5, h: 100.7, l: 99.4, c: 99.5 },
      { o: 99.5, h: 99.6, l: 98.4, c: 98.5 },
      { o: 98.5, h: 99.2, l: 98.4, c: 99.1 },
      { o: 99.1, h: 99.5, l: 99.0, c: 99.4 },
      { o: 99.4, h: 99.7, l: 99.3, c: 99.6 },
    ],
    annotations: [
      { type: 'zone', topPrice: 102.5, bottomPrice: 98.4, color: 'rgba(239, 68, 68, 0.06)', label: '2-min: bearish flag' },
      { type: 'badge', at: { i: 3, price: 103.5 }, text: 'But 15-min HTF UP', color: '#fbbf24' },
    ],
    verdict: { label: 'SIZE DOWN — fails #5', type: 'warn' },
    caption: 'Short setup on the 2-min, but the 15-min is still trending up. Counter-trend trades: smaller size or skip.',
  },
  {
    title: 'THE $290 LOSS — failed checks 1, 2, AND 3',
    candles: [
      { o: 7445, h: 7447, l: 7440, c: 7441 },
      { o: 7441, h: 7443, l: 7432, c: 7434 },       // one candle "pole" — ✗2
      { o: 7434, h: 7436, l: 7427, c: 7429 },
      { o: 7429, h: 7432, l: 7424, c: 7425 },       // no prior LH/LL — ✗1
      { o: 7425, h: 7431, l: 7424, c: 7430 },
      { o: 7430, h: 7436, l: 7429, c: 7435 },       // bounce > 50% — ✗3
      { o: 7435, h: 7440, l: 7434, c: 7439 },
      { o: 7439, h: 7443, l: 7438, c: 7442 },
    ],
    annotations: [
      { type: 'level', price: 7434, color: '#ef4444', label: 'Entry — checklist not run' },
      { type: 'badge', at: { i: 1, price: 7430 }, text: '✗2 one-candle pole', color: '#ef4444' },
      { type: 'badge', at: { i: 3, price: 7422 }, text: '✗1 no LH/LL', color: '#ef4444' },
      { type: 'badge', at: { i: 5, price: 7438 }, text: '✗3 bounce > 50%', color: '#ef4444' },
    ],
    verdict: { label: '3 of 5 FAILED — $290 lost', type: 'bad' },
    caption: 'Three checks failed. Checklist would have prevented the trade. Discipline at the checklist saves more money than skill at the trigger.',
  },
];
