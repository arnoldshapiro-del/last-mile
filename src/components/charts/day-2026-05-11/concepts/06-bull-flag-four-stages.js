// Teaching unit 6: The Bull Flag Life Cycle — Four Stages.
// Concept — Pole, Flag, Breakout & Follow-Through, Continuation or Failure.
export const charts = [
  {
    title: 'STAGE 1 — POLE: big green run, expanding volume',
    candles: [
      { o: 100.0, h: 100.3, l: 99.7, c: 100.2 },
      { o: 100.2, h: 100.5, l: 100.0, c: 100.3 },
      { o: 100.3, h: 101.6, l: 100.2, c: 101.5 },   // pole c1 — large green body
      { o: 101.5, h: 102.8, l: 101.4, c: 102.7 },   // pole c2 — larger
      { o: 102.7, h: 104.0, l: 102.6, c: 103.9 },   // pole c3 — largest
      { o: 103.9, h: 104.2, l: 103.5, c: 103.8 },
    ],
    annotations: [
      { type: 'zone', topPrice: 104.2, bottomPrice: 100.2, color: 'rgba(34, 197, 94, 0.10)', label: 'POLE — 4 points, 4 candles, conviction' },
      { type: 'badge', at: { i: 4, price: 104.4 }, text: 'POLE TOP', color: '#22c55e' },
    ],
    verdict: { label: 'STAGE 1 — setup ingredient', type: 'good' },
    caption: 'The pole tells you whether the move has conviction. Watch for expanding range and volume. Three to six candles is the sweet spot.',
  },
  {
    title: 'STAGE 2 — FLAG: shallow, contracting, holds 20 EMA',
    candles: [
      { o: 100.0, h: 101.0, l: 99.9, c: 100.9 },
      { o: 100.9, h: 102.4, l: 100.8, c: 102.3 },
      { o: 102.3, h: 103.8, l: 102.2, c: 103.7 },   // pole top
      { o: 103.7, h: 103.8, l: 103.0, c: 103.2 },   // flag start — contracting
      { o: 103.2, h: 103.4, l: 102.7, c: 102.9 },
      { o: 102.9, h: 103.1, l: 102.6, c: 102.8 },
      { o: 102.8, h: 103.0, l: 102.5, c: 102.7 },   // 20 EMA holding
      { o: 102.7, h: 102.9, l: 102.4, c: 102.6 },
    ],
    annotations: [
      { type: 'zone', topPrice: 103.4, bottomPrice: 102.4, color: 'rgba(167, 139, 250, 0.10)', label: 'FLAG — shallow & holding' },
      { type: 'level', price: 102.5, color: '#a78bfa', label: '20 EMA — flag riding it', dash: true },
      { type: 'level', price: 102.95, color: '#fbbf24', label: '50% line — flag above' },
    ],
    verdict: { label: 'STAGE 2 — clean flag', type: 'good' },
    caption: 'Shallow pullback, contracting range, holds the 20 EMA, stays above the 50% line. Textbook stage 2.',
  },
  {
    title: 'STAGE 3 — BREAKOUT & FOLLOW-THROUGH (validation)',
    candles: [
      { o: 100.0, h: 101.0, l: 99.9, c: 100.9 },
      { o: 100.9, h: 102.4, l: 100.8, c: 102.3 },
      { o: 102.3, h: 103.8, l: 102.2, c: 103.7 },
      { o: 103.7, h: 103.8, l: 103.0, c: 103.2 },
      { o: 103.2, h: 103.4, l: 102.7, c: 102.9 },
      { o: 102.9, h: 103.1, l: 102.6, c: 102.8 },
      { o: 102.8, h: 104.2, l: 102.7, c: 104.1 },   // breakout candle
      { o: 104.1, h: 104.8, l: 104.0, c: 104.7 },   // higher high — VALIDATION
      { o: 104.7, h: 105.2, l: 104.5, c: 105.0 },
    ],
    annotations: [
      { type: 'level', price: 103.4, color: '#fbbf24', label: 'Flag high — breakout level' },
      { type: 'arrow', at: { i: 6, price: 104.0 }, direction: 'up', color: '#22c55e', label: 'BREAKOUT' },
      { type: 'arrow', at: { i: 7, price: 104.7 }, direction: 'up', color: '#22c55e', label: 'HH — validated' },
    ],
    verdict: { label: 'STAGE 3 — validated', type: 'good' },
    caption: 'Breakout candle closes outside the flag high; next candle prints a higher high. Without the HH, the breakout was just noise.',
  },
  {
    title: 'STAGE 3 FAIL — breakout without follow-through (just noise)',
    candles: [
      { o: 100.0, h: 101.0, l: 99.9, c: 100.9 },
      { o: 100.9, h: 102.4, l: 100.8, c: 102.3 },
      { o: 102.3, h: 103.8, l: 102.2, c: 103.7 },
      { o: 103.7, h: 103.8, l: 103.0, c: 103.2 },
      { o: 103.2, h: 103.4, l: 102.7, c: 102.9 },
      { o: 102.9, h: 103.1, l: 102.6, c: 102.8 },
      { o: 102.8, h: 103.8, l: 102.7, c: 103.6 },   // breakout
      { o: 103.6, h: 103.7, l: 102.6, c: 102.7 },   // immediately back inside
      { o: 102.7, h: 102.9, l: 102.0, c: 102.1 },   // pattern fails
    ],
    annotations: [
      { type: 'arrow', at: { i: 6, price: 103.9 }, direction: 'up', color: '#fbbf24', label: 'Breakout — no HH' },
      { type: 'arrow', at: { i: 7, price: 102.5 }, direction: 'down', color: '#ef4444', label: 'Back inside — fakeout' },
    ],
    verdict: { label: 'NO VALIDATION — failed breakout', type: 'bad' },
    caption: 'Breakout candle without a higher high on the next bar is just noise. Wait for the HH before sizing up. Exit at flag-top retest.',
  },
  {
    title: 'STAGE 4 — CONTINUATION (clean stair-step extension)',
    candles: [
      { o: 100.0, h: 101.0, l: 99.9, c: 100.9 },
      { o: 100.9, h: 102.4, l: 100.8, c: 102.3 },
      { o: 102.3, h: 103.8, l: 102.2, c: 103.7 },
      { o: 103.7, h: 103.8, l: 103.0, c: 103.2 },
      { o: 103.2, h: 103.4, l: 102.7, c: 102.9 },
      { o: 102.9, h: 104.2, l: 102.8, c: 104.1 },   // breakout
      { o: 104.1, h: 104.9, l: 104.0, c: 104.8 },
      { o: 104.8, h: 105.6, l: 104.7, c: 105.5 },   // higher high
      { o: 105.5, h: 106.4, l: 105.4, c: 106.3 },
      { o: 106.3, h: 107.2, l: 106.2, c: 107.1 },
    ],
    annotations: [
      { type: 'zone', topPrice: 107.3, bottomPrice: 103.4, color: 'rgba(34, 197, 94, 0.06)', label: 'STAIR-STEP — hold runners' },
      { type: 'arrow', at: { i: 9, price: 107.5 }, direction: 'up', color: '#22c55e', label: 'CONTINUATION' },
    ],
    verdict: { label: 'HOLD RUNNERS', type: 'good' },
    caption: 'Clean continuation after the breakout. Each candle making a higher high. Runners stay in.',
  },
  {
    title: 'STAGE 4 — FAILURE: stall at prior high + bearish engulfing = EXIT',
    candles: [
      { o: 100.0, h: 101.0, l: 99.9, c: 100.9 },
      { o: 100.9, h: 102.4, l: 100.8, c: 102.3 },
      { o: 102.3, h: 103.8, l: 102.2, c: 103.7 },
      { o: 103.7, h: 103.8, l: 103.0, c: 103.2 },
      { o: 103.2, h: 103.4, l: 102.7, c: 102.9 },
      { o: 102.9, h: 104.2, l: 102.8, c: 104.1 },
      { o: 104.1, h: 104.8, l: 104.0, c: 104.7 },
      { o: 104.7, h: 104.9, l: 104.6, c: 104.7 },   // stall
      { o: 104.7, h: 104.8, l: 103.6, c: 103.7 },   // BEARISH ENGULFING
      { o: 103.7, h: 103.8, l: 102.8, c: 102.9 },
    ],
    annotations: [
      { type: 'level', price: 105.0, color: '#fbbf24', label: 'Prior high — resistance' },
      { type: 'arrow', at: { i: 8, price: 105.0 }, direction: 'down', color: '#ef4444', label: 'Bearish engulfing — exit' },
    ],
    verdict: { label: 'EXIT RUNNERS', type: 'warn' },
    caption: 'Stage 4 turned. Bearish engulfing at prior high is the universal exit signal. Take what you have. Past beauty is finished history.',
  },
];
