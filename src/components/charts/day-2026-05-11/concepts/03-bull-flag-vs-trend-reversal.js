// Teaching unit 3: Bull Flag vs Trend Reversal — the Structure Test.
// Concept — structure (not shape) tells you which one you are in.
export const charts = [
  {
    title: 'BULL FLAG — most recent higher low holds, continuation valid',
    candles: [
      { o: 100.0, h: 100.4, l: 99.7, c: 100.2 },
      { o: 100.2, h: 101.6, l: 100.1, c: 101.5 },  // pole
      { o: 101.5, h: 102.4, l: 101.4, c: 102.3 },  // pole
      { o: 102.3, h: 103.5, l: 102.2, c: 103.4 },  // pole top
      { o: 103.4, h: 103.6, l: 102.6, c: 102.8 },  // pullback starts
      { o: 102.8, h: 103.0, l: 102.3, c: 102.5 },  // pullback
      { o: 102.5, h: 102.7, l: 102.2, c: 102.4 },  // flag low — HOLDS above prior HL
      { o: 102.4, h: 103.0, l: 102.3, c: 102.9 },
      { o: 102.9, h: 103.8, l: 102.8, c: 103.7 },  // breakout
      { o: 103.7, h: 104.6, l: 103.6, c: 104.4 },  // continuation
    ],
    annotations: [
      { type: 'level', price: 102.2, color: '#22c55e', label: 'Prior HL — intact', dash: false },
      { type: 'zone', topPrice: 103.5, bottomPrice: 102.2, color: 'rgba(34, 197, 94, 0.06)', label: 'FLAG — pullback shallow' },
      { type: 'arrow', at: { i: 8, price: 103.5 }, direction: 'up', color: '#22c55e', label: 'ENTRY — continuation' },
    ],
    verdict: { label: 'BULL FLAG VALID', type: 'good' },
    caption: 'The most recent higher low holds. Pullback under 50%. Character shallow. Take the trade.',
  },
  {
    title: 'TREND REVERSAL — lower low prints, bull flag thesis is DEAD',
    candles: [
      { o: 100.0, h: 100.4, l: 99.7, c: 100.2 },
      { o: 100.2, h: 101.6, l: 100.1, c: 101.5 },
      { o: 101.5, h: 102.4, l: 101.4, c: 102.3 },
      { o: 102.3, h: 103.5, l: 102.2, c: 103.4 },  // pole top
      { o: 103.4, h: 103.6, l: 102.6, c: 102.8 },
      { o: 102.8, h: 103.0, l: 102.0, c: 102.1 },
      { o: 102.1, h: 102.3, l: 101.5, c: 101.7 },  // approaching prior HL
      { o: 101.7, h: 101.9, l: 101.0, c: 101.2 },  // BROKE prior HL — LL printed
      { o: 101.2, h: 101.5, l: 100.4, c: 100.6 },
      { o: 100.6, h: 100.8, l: 99.7,  c: 99.9 },   // continued down — reversal real
    ],
    annotations: [
      { type: 'level', price: 101.5, color: '#ef4444', label: 'Prior HL — BROKEN', dash: false },
      { type: 'arrow', at: { i: 7, price: 101.0 }, direction: 'down', color: '#ef4444', label: 'LL — uptrend over' },
      { type: 'badge', at: { i: 9, price: 99.5 }, text: 'NO LONG', color: '#ef4444' },
    ],
    verdict: { label: 'BULL FLAG DEAD — stand aside', type: 'bad' },
    caption: 'The instant price prints a lower low, the uptrend is mechanically over on this timeframe. No flag entry. Stand aside or flip bias.',
  },
  {
    title: 'THE TRAP — flag and reversal look identical for the first 2 candles',
    candles: [
      { o: 100.0, h: 100.4, l: 99.7, c: 100.2 },
      { o: 100.2, h: 101.6, l: 100.1, c: 101.5 },
      { o: 101.5, h: 102.4, l: 101.4, c: 102.3 },
      { o: 102.3, h: 103.5, l: 102.2, c: 103.4 },  // pole top
      { o: 103.4, h: 103.6, l: 102.6, c: 102.8 },  // pullback C1
      { o: 102.8, h: 103.0, l: 102.3, c: 102.5 },  // pullback C2 — IDENTICAL TO C1 OF FLAG
    ],
    annotations: [
      { type: 'zone', topPrice: 103.5, bottomPrice: 102.0, color: 'rgba(251, 191, 36, 0.12)', label: 'AMBIGUOUS — flag or reversal?' },
      { type: 'badge', at: { i: 5, price: 102.0 }, text: 'WAIT', color: '#fbbf24' },
    ],
    verdict: { label: 'DECISION POINT — structure not yet decided', type: 'warn' },
    caption: 'First two candles of a pullback look the same in both scenarios. Patience: the third candle relative to the most recent HL is what decides it.',
  },
  {
    title: '5-POINT CHECKLIST — pullback long PASSES all five',
    candles: [
      { o: 100.0, h: 100.4, l: 99.7, c: 100.2 },
      { o: 100.2, h: 101.8, l: 100.1, c: 101.7 },
      { o: 101.7, h: 102.6, l: 101.6, c: 102.5 },
      { o: 102.5, h: 103.6, l: 102.4, c: 103.5 },  // pole top
      { o: 103.5, h: 103.7, l: 102.8, c: 103.0 },  // pullback shallow
      { o: 103.0, h: 103.2, l: 102.7, c: 102.9 },  // flag low above prior HL
      { o: 102.9, h: 103.5, l: 102.8, c: 103.4 },
      { o: 103.4, h: 104.0, l: 103.3, c: 103.9 },
    ],
    annotations: [
      { type: 'level', price: 102.5, color: '#22c55e', label: 'Prior HL — INTACT (✓1)', dash: false },
      { type: 'level', price: 102.75, color: '#a78bfa', label: '50% line — pullback above (✓2)', dash: true },
      { type: 'zone', topPrice: 103.7, bottomPrice: 102.7, color: 'rgba(34, 197, 94, 0.08)', label: 'Character SHALLOW (✓3)' },
      { type: 'arrow', at: { i: 7, price: 104.0 }, direction: 'up', color: '#22c55e', label: 'Entry — 5/5 pass' },
    ],
    verdict: { label: 'ALL 5 BOXES CHECKED', type: 'good' },
    caption: 'Structure intact. Pullback under 50%. Character shallow. MA holding. HTF aligned. Five out of five.',
  },
  {
    title: '5-POINT CHECKLIST — pullback long FAILS at structure',
    candles: [
      { o: 100.0, h: 100.4, l: 99.7, c: 100.2 },
      { o: 100.2, h: 101.8, l: 100.1, c: 101.7 },
      { o: 101.7, h: 102.6, l: 101.6, c: 102.5 },
      { o: 102.5, h: 103.6, l: 102.4, c: 103.5 },  // pole top
      { o: 103.5, h: 103.7, l: 102.4, c: 102.5 },
      { o: 102.5, h: 102.7, l: 101.8, c: 102.0 },
      { o: 102.0, h: 102.2, l: 101.3, c: 101.5 },  // BROKE PRIOR HL
      { o: 101.5, h: 102.3, l: 101.4, c: 102.2 },  // bounce — looks like flag bottom
    ],
    annotations: [
      { type: 'level', price: 101.5, color: '#ef4444', label: 'Prior HL — BROKEN (✗1)', dash: false },
      { type: 'arrow', at: { i: 7, price: 102.2 }, direction: 'down', color: '#ef4444', label: 'NO TRADE — structure failed' },
    ],
    verdict: { label: 'FAILS CHECK #1 — skip', type: 'bad' },
    caption: 'One NO answer = no trade. The trade you save is the trade you do not take. Skip and look for a new setup once structure resolves.',
  },
  {
    title: 'ES MORNING — broke prior swing low BEFORE the trendline break entry',
    candles: [
      { o: 7290, h: 7293, l: 7282, c: 7283 },
      { o: 7283, h: 7290, l: 7280, c: 7288 },
      { o: 7288, h: 7295, l: 7286, c: 7293 },     // pole forming
      { o: 7293, h: 7298, l: 7291, c: 7296 },     // pole top
      { o: 7296, h: 7297, l: 7288, c: 7289 },
      { o: 7289, h: 7290, l: 7280, c: 7282 },     // approaching prior HL
      { o: 7282, h: 7283, l: 7273, c: 7274 },     // BROKE — LL printed
      { o: 7274, h: 7276, l: 7271, c: 7272 },
      { o: 7272, h: 7273, l: 7268, c: 7270 },     // continuing down — would-be trendline entry trigger AFTER break
    ],
    annotations: [
      { type: 'level', price: 7280, color: '#ef4444', label: 'Prior swing low — BROKEN early' },
      { type: 'zone', topPrice: 7298, bottomPrice: 7270, color: 'rgba(239, 68, 68, 0.06)' },
      { type: 'arrow', at: { i: 6, price: 7274 }, direction: 'down', color: '#ef4444', label: 'STRUCTURE FAILED before entry' },
      { type: 'badge', at: { i: 8, price: 7266 }, text: 'NO LONG', color: '#ef4444' },
    ],
    verdict: { label: 'TRENDLINE LONG INVALID', type: 'bad' },
    caption: "The textbook entry rule (trendline break) requires the trend to still be intact. ES morning had already broken structure. Applying the rule inside broken structure is buying at the worst possible spot.",
  },
];
