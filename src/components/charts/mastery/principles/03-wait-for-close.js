
// Principle 3 — Wait for the Close
// Wicks lie. Closes are commitments. Six teaching scenarios.
export const charts = [
  {
    title: 'WICK PROBES TRENDLINE — closes back inside, no trade',
    candles: [
      { o: 100.0, h: 100.4, l: 99.7, c: 100.3 },
      { o: 100.3, h: 100.7, l: 100.0, c: 100.5 },
      { o: 100.5, h: 100.8, l: 100.2, c: 100.6 },
      { o: 100.6, h: 100.9, l: 100.3, c: 100.4 },
      { o: 100.4, h: 100.7, l: 100.0, c: 100.3 },
      { o: 100.3, h: 100.6, l: 100.0, c: 100.5 },
      { o: 100.5, h: 101.2, l: 100.4, c: 100.45 }, // wick PIERCES trendline, closes inside
      { o: 100.45, h: 100.6, l: 100.1, c: 100.2 },
      { o: 100.2, h: 100.5, l: 99.9, c: 100.0 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 100.7 }, to: { i: 8, price: 101.0 }, color: '#fbbf24', label: 'TRENDLINE' },
      { type: 'arrow', at: { i: 6, price: 101.2 }, direction: 'up', color: '#ef4444', label: 'WICK ONLY' },
      { type: 'badge', at: { i: 6, price: 100.45 }, text: 'CLOSE INSIDE', color: '#ef4444' },
    ],
    verdict: { label: 'WICK = NOT A BREAKOUT', type: 'bad' },
    caption: 'High of the bar pierced the line; close came back inside. Anyone who entered on the wick is offside in the same bar.',
  },
  {
    title: 'CLOSE BEYOND TRENDLINE — that is a commitment, take it',
    candles: [
      { o: 100.0, h: 100.4, l: 99.7, c: 100.3 },
      { o: 100.3, h: 100.7, l: 100.0, c: 100.5 },
      { o: 100.5, h: 100.8, l: 100.2, c: 100.6 },
      { o: 100.6, h: 100.85, l: 100.3, c: 100.4 },
      { o: 100.4, h: 100.7, l: 100.0, c: 100.3 },
      { o: 100.3, h: 100.6, l: 100.0, c: 100.5 },
      { o: 100.5, h: 101.5, l: 100.4, c: 101.4 },  // FULL CLOSE beyond trendline
      { o: 101.4, h: 102.2, l: 101.3, c: 102.1 },
      { o: 102.1, h: 102.8, l: 102.0, c: 102.7 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 100.7 }, to: { i: 8, price: 101.0 }, color: '#fbbf24', label: 'TRENDLINE' },
      { type: 'arrow', at: { i: 6, price: 101.4 }, direction: 'up', color: '#22c55e', label: 'ENTRY ON CLOSE' },
      { type: 'badge', at: { i: 6, price: 101.4 }, text: 'COMMITMENT', color: '#22c55e' },
    ],
    verdict: { label: 'CLOSE = ENTRY', type: 'good' },
    caption: 'Bar fully closed beyond the line. Sellers ran out of inventory inside the 2-minute window. Now the trade is alive.',
  },
  {
    title: 'EARLY ENTRY ON THE WICK — caught wrong-side at the close',
    candles: [
      { o: 100.0, h: 100.3, l: 99.7, c: 100.1 },
      { o: 100.1, h: 100.5, l: 99.9, c: 100.4 },
      { o: 100.4, h: 100.6, l: 100.1, c: 100.5 },
      { o: 100.5, h: 100.8, l: 100.3, c: 100.4 },
      { o: 100.4, h: 100.6, l: 100.1, c: 100.3 },
      { o: 100.3, h: 100.5, l: 99.95, c: 100.2 },
      { o: 100.2, h: 101.4, l: 100.15, c: 100.25 }, // wick way up, close right back at open
      { o: 100.25, h: 100.4, l: 99.5, c: 99.6 },    // immediate breakdown
      { o: 99.6, h: 99.8, l: 99.0, c: 99.1 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 100.6 }, to: { i: 8, price: 100.9 }, color: '#fbbf24', label: 'TRENDLINE' },
      { type: 'arrow', at: { i: 6, price: 101.0 }, direction: 'up', color: '#ef4444', label: 'EARLY ENTRY' },
      { type: 'badge', at: { i: 7, price: 99.6 }, text: 'STOPPED', color: '#ef4444' },
    ],
    verdict: { label: 'WICK ENTRY = INSTANT LOSS', type: 'bad' },
    caption: 'Pulled the trigger on the wick. The bar reversed by close. Trade was stopped within 2 minutes of entry.',
  },
  {
    title: 'PATIENT ENTRY ON THE CLOSE — same setup, different outcome',
    candles: [
      { o: 100.0, h: 100.3, l: 99.7, c: 100.1 },
      { o: 100.1, h: 100.5, l: 99.9, c: 100.4 },
      { o: 100.4, h: 100.6, l: 100.1, c: 100.5 },
      { o: 100.5, h: 100.8, l: 100.3, c: 100.4 },
      { o: 100.4, h: 100.6, l: 100.1, c: 100.3 },
      { o: 100.3, h: 100.5, l: 99.95, c: 100.2 },
      { o: 100.2, h: 101.4, l: 100.15, c: 100.25 }, // wick + close inside (skipped!)
      { o: 100.25, h: 100.5, l: 100.0, c: 100.4 },
      { o: 100.4, h: 100.7, l: 100.2, c: 100.6 },
      { o: 100.6, h: 101.5, l: 100.55, c: 101.4 },  // REAL breakout close
      { o: 101.4, h: 102.2, l: 101.3, c: 102.1 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 100.6 }, to: { i: 10, price: 100.9 }, color: '#fbbf24', label: 'TRENDLINE' },
      { type: 'arrow', at: { i: 9, price: 101.4 }, direction: 'up', color: '#22c55e', label: 'PATIENT ENTRY' },
      { type: 'badge', at: { i: 6, price: 100.25 }, text: 'SKIPPED WICK', color: '#94a3b8' },
    ],
    verdict: { label: 'PATIENCE PAID', type: 'good' },
    caption: 'Skipped the false-wick on bar 7. Waited 4 bars. Took the real close on bar 10. Same chart, opposite P&L.',
  },
  {
    title: 'THE 5% EXCEPTION — multi-confirm fires before the close',
    candles: [
      { o: 100.0, h: 100.3, l: 99.7, c: 100.1 },
      { o: 100.1, h: 100.4, l: 99.9, c: 100.3 },
      { o: 100.3, h: 100.6, l: 100.1, c: 100.5 },
      { o: 100.5, h: 100.7, l: 100.3, c: 100.4 },
      { o: 100.4, h: 100.65, l: 100.1, c: 100.5 },
      { o: 100.5, h: 102.4, l: 100.45, c: 102.3 },  // EXPLOSIVE — 80% range up, all confirm
      { o: 102.3, h: 103.2, l: 102.2, c: 103.1 },
      { o: 103.1, h: 104.0, l: 103.0, c: 103.9 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 100.6 }, to: { i: 7, price: 100.9 }, color: '#fbbf24', label: 'TRENDLINE' },
      { type: 'badge', at: { i: 5, price: 102.3 }, text: 'PATTERN+MACD+DELTA+VOL', color: '#22c55e' },
      { type: 'arrow', at: { i: 5, price: 101.5 }, direction: 'up', color: '#fbbf24', label: 'EARLY OK' },
    ],
    verdict: { label: 'EXCEPTION VALID — all 4 align mid-bar', type: 'warn' },
    caption: 'Rare. Velocity is explosive, all 4 pillars firing pre-close. Even then, if the close reverses, cut. The exception is not a license.',
  },
  {
    title: 'FAILED BREAKOUT — close looked good, next bar killed it',
    candles: [
      { o: 100.0, h: 100.4, l: 99.7, c: 100.3 },
      { o: 100.3, h: 100.6, l: 100.0, c: 100.5 },
      { o: 100.5, h: 100.8, l: 100.2, c: 100.6 },
      { o: 100.6, h: 100.9, l: 100.3, c: 100.4 },
      { o: 100.4, h: 100.7, l: 100.0, c: 100.3 },
      { o: 100.3, h: 100.6, l: 100.0, c: 100.5 },
      { o: 100.5, h: 101.3, l: 100.4, c: 101.2 },  // close ABOVE — entry
      { o: 101.2, h: 101.3, l: 100.0, c: 100.1 },  // bar 8 KILLS the breakout
      { o: 100.1, h: 100.3, l: 99.5, c: 99.6 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 100.7 }, to: { i: 8, price: 101.0 }, color: '#fbbf24', label: 'TRENDLINE' },
      { type: 'arrow', at: { i: 6, price: 101.2 }, direction: 'up', color: '#fbbf24', label: 'ENTRY' },
      { type: 'badge', at: { i: 7, price: 100.1 }, text: 'CLOSE BACK INSIDE = OUT', color: '#ef4444' },
    ],
    verdict: { label: 'CLOSE-BACK-INSIDE = INVALID', type: 'warn' },
    caption: 'Even after a clean breakout close, the next bar that closes back inside the trendline cancels the trade. Honor it — exit, do not negotiate.',
  },
];
