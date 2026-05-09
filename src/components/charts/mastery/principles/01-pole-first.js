
// Principle 1 — Pole First
// 6 charts: textbook bull pole, textbook bear pole, no pole = no trade,
// argued-for pole = pass, reading flag without pole = wrong direction,
// 5-second test passes vs fails.
export const charts = [
  {
    title: 'TEXTBOOK BULL POLE — direction set, flag is just confirmation',
    candles: [
      { o: 100.0, h: 100.4, l: 99.6, c: 100.0 },
      { o: 100.0, h: 100.3, l: 99.7, c: 99.9 },
      { o: 99.9, h: 101.5, l: 99.85, c: 101.4 },   // pole bar 1
      { o: 101.4, h: 102.6, l: 101.3, c: 102.5 },  // pole bar 2
      { o: 102.5, h: 103.6, l: 102.4, c: 103.5 },  // pole bar 3
      { o: 103.5, h: 104.5, l: 103.4, c: 104.4 },  // pole bar 4
      { o: 104.4, h: 105.4, l: 104.2, c: 105.2 },  // pole bar 5
      { o: 105.2, h: 105.4, l: 104.4, c: 104.5 },  // flag bar 1
      { o: 104.5, h: 104.8, l: 104.0, c: 104.2 },  // flag bar 2
      { o: 104.2, h: 104.5, l: 103.9, c: 104.1 },  // flag bar 3
      { o: 104.1, h: 104.4, l: 103.8, c: 104.0 },  // flag bar 4
      { o: 104.0, h: 105.6, l: 103.95, c: 105.4 }, // breakout
    ],
    annotations: [
      { type: 'zone', topPrice: 105.4, bottomPrice: 99.85, color: 'rgba(0, 217, 160, 0.07)', label: 'POLE — 5 bars, expanding range' },
      { type: 'level', price: 102.6, color: '#fbbf24', label: '50% of pole', dash: true },
      { type: 'arrow', at: { i: 11, price: 105.4 }, direction: 'up', color: '#22c55e', label: 'ENTRY (after close)' },
      { type: 'badge', at: { i: 4, price: 103.0 }, text: 'POLE', color: '#22c55e' },
    ],
    verdict: { label: 'DIRECTION CLEAR — long bias only', type: 'good' },
    caption: 'Pole identified in 2 seconds: 5 green bars, expanding range, no overlap. Flag rests above 50%. Trade direction is set.',
  },
  {
    title: 'TEXTBOOK BEAR POLE — flag identical in shape, opposite direction',
    candles: [
      { o: 100.0, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 100.2, l: 99.8, c: 100.0 },
      { o: 100.0, h: 100.1, l: 98.6, c: 98.7 },    // pole bar 1
      { o: 98.7, h: 98.8, l: 97.5, c: 97.6 },      // pole bar 2
      { o: 97.6, h: 97.7, l: 96.4, c: 96.5 },      // pole bar 3
      { o: 96.5, h: 96.6, l: 95.4, c: 95.5 },      // pole bar 4
      { o: 95.5, h: 95.6, l: 94.6, c: 94.7 },      // pole bar 5
      { o: 94.7, h: 95.5, l: 94.6, c: 95.4 },      // flag bar 1
      { o: 95.4, h: 95.9, l: 95.3, c: 95.7 },      // flag bar 2
      { o: 95.7, h: 96.0, l: 95.5, c: 95.8 },      // flag bar 3
      { o: 95.8, h: 95.95, l: 95.5, c: 95.6 },     // flag bar 4
      { o: 95.6, h: 95.7, l: 94.0, c: 94.1 },      // breakdown
    ],
    annotations: [
      { type: 'zone', topPrice: 100.0, bottomPrice: 94.7, color: 'rgba(255, 61, 90, 0.07)', label: 'POLE — 5 bars, sustained drop' },
      { type: 'level', price: 97.35, color: '#fbbf24', label: '50% of pole', dash: true },
      { type: 'arrow', at: { i: 11, price: 94.1 }, direction: 'down', color: '#22c55e', label: 'ENTRY (after close)' },
      { type: 'badge', at: { i: 4, price: 96.5 }, text: 'POLE', color: '#ef4444' },
    ],
    verdict: { label: 'DIRECTION CLEAR — short bias only', type: 'good' },
    caption: 'Same flag shape as the bull case — but the pole is bearish. Direction is the pole. Always.',
  },
  {
    title: 'NO POLE — choppy noise looks like a flag, no setup',
    candles: [
      { o: 100.0, h: 100.6, l: 99.5, c: 100.4 },
      { o: 100.4, h: 100.7, l: 99.8, c: 99.9 },
      { o: 99.9, h: 100.5, l: 99.6, c: 100.3 },
      { o: 100.3, h: 100.6, l: 99.9, c: 100.0 },
      { o: 100.0, h: 100.5, l: 99.7, c: 100.4 },
      { o: 100.4, h: 100.8, l: 100.0, c: 100.1 },
      { o: 100.1, h: 100.5, l: 99.7, c: 100.3 },
      { o: 100.3, h: 100.6, l: 99.85, c: 100.0 },
      { o: 100.0, h: 100.4, l: 99.7, c: 100.2 },
      { o: 100.2, h: 100.7, l: 99.9, c: 100.5 },
      { o: 100.5, h: 100.6, l: 100.0, c: 100.1 },
      { o: 100.1, h: 100.6, l: 99.7, c: 100.3 },
    ],
    annotations: [
      { type: 'zone', topPrice: 100.8, bottomPrice: 99.5, color: 'rgba(239, 68, 68, 0.06)', label: 'NO POLE — chop only' },
      { type: 'badge', at: { i: 5, price: 100.4 }, text: 'NO TRADE', color: '#ef4444' },
    ],
    verdict: { label: 'NO SETUP — pole absent', type: 'bad' },
    caption: 'Five-second test fails. No impulsive move earned a flag. The next pole is coming — wait for it.',
  },
  {
    title: 'ARGUED-FOR POLE — too many counter-bars and overlap',
    candles: [
      { o: 100.0, h: 100.5, l: 99.8, c: 100.4 },
      { o: 100.4, h: 100.9, l: 100.2, c: 100.7 },   // up
      { o: 100.7, h: 100.9, l: 100.3, c: 100.4 },   // counter
      { o: 100.4, h: 101.0, l: 100.3, c: 100.95 },  // up
      { o: 100.95, h: 101.1, l: 100.6, c: 100.7 },  // counter
      { o: 100.7, h: 101.3, l: 100.6, c: 101.25 },  // up
      { o: 101.25, h: 101.4, l: 100.9, c: 101.0 },  // counter
      { o: 101.0, h: 101.5, l: 100.95, c: 101.45 }, // up
      { o: 101.45, h: 101.5, l: 100.8, c: 100.9 },  // flag
      { o: 100.9, h: 101.2, l: 100.7, c: 100.85 },
      { o: 100.85, h: 101.1, l: 100.6, c: 100.7 },
      { o: 100.7, h: 101.5, l: 100.65, c: 101.4 },  // breakout
    ],
    annotations: [
      { type: 'zone', topPrice: 101.45, bottomPrice: 100.0, color: 'rgba(251, 191, 36, 0.07)', label: 'POLE? — 4 counter-bars in 8' },
      { type: 'badge', at: { i: 4, price: 100.95 }, text: 'COUNTER', color: '#fbbf24' },
      { type: 'badge', at: { i: 6, price: 101.25 }, text: 'COUNTER', color: '#fbbf24' },
    ],
    verdict: { label: 'IF YOU HAVE TO ARGUE — IT ISN\'T', type: 'warn' },
    caption: 'Counter-bars and bar overlap mean this is a slow grind, not a pole. The breakout often fails. Pass.',
  },
  {
    title: 'READING FLAG WITHOUT POLE — same shape, wrong direction',
    candles: [
      { o: 105.0, h: 105.3, l: 104.5, c: 104.6 },   // pole start (HIDDEN by zoom)
      { o: 104.6, h: 104.8, l: 103.5, c: 103.6 },   // dropping
      { o: 103.6, h: 103.8, l: 102.6, c: 102.8 },
      { o: 102.8, h: 103.0, l: 101.6, c: 101.8 },   // bear pole continuing
      { o: 101.8, h: 102.0, l: 100.7, c: 100.9 },
      { o: 100.9, h: 102.0, l: 100.85, c: 101.9 },  // flag bar 1 (LOOKS bullish if you only see this part!)
      { o: 101.9, h: 102.4, l: 101.85, c: 102.3 },  // flag bar 2
      { o: 102.3, h: 102.6, l: 102.1, c: 102.5 },   // flag bar 3
      { o: 102.5, h: 102.7, l: 102.3, c: 102.4 },   // flag bar 4
      { o: 102.4, h: 102.55, l: 101.0, c: 101.2 },  // breakdown CONTINUES bear pole
    ],
    annotations: [
      { type: 'zone', topPrice: 102.7, bottomPrice: 100.85, color: 'rgba(254, 240, 138, 0.10)', label: 'FLAG — looks bullish in isolation' },
      { type: 'badge', at: { i: 5, price: 101.4 }, text: 'WRONG READ → LONG', color: '#ef4444' },
      { type: 'arrow', at: { i: 9, price: 101.2 }, direction: 'down', color: '#ef4444', label: 'BEAR POLE WINS' },
    ],
    verdict: { label: 'FLAG-ONLY READ = WRONG SIDE', type: 'bad' },
    caption: 'Without the pole context, traders go long this shape. The pole tells you it is a bear-flag continuation. Find the pole first.',
  },
  {
    title: '5-SECOND TEST PASSES — pole obvious at a glance',
    candles: [
      { o: 200.0, h: 200.2, l: 199.7, c: 199.9 },
      { o: 199.9, h: 200.1, l: 199.6, c: 199.8 },
      { o: 199.8, h: 202.5, l: 199.7, c: 202.4 },   // pole 1
      { o: 202.4, h: 204.6, l: 202.2, c: 204.5 },   // pole 2
      { o: 204.5, h: 207.0, l: 204.4, c: 206.9 },   // pole 3 — explosive
      { o: 206.9, h: 207.2, l: 205.6, c: 205.8 },
      { o: 205.8, h: 206.2, l: 205.3, c: 205.5 },
      { o: 205.5, h: 205.8, l: 205.0, c: 205.2 },
      { o: 205.2, h: 207.4, l: 205.1, c: 207.2 },
    ],
    annotations: [
      { type: 'zone', topPrice: 207.0, bottomPrice: 199.7, color: 'rgba(0, 217, 160, 0.09)', label: 'POLE — visible in 1 second' },
      { type: 'badge', at: { i: 3, price: 203.5 }, text: '✓ 5-SEC PASS', color: '#22c55e' },
      { type: 'arrow', at: { i: 8, price: 207.2 }, direction: 'up', color: '#22c55e', label: 'CONTINUATION' },
    ],
    verdict: { label: 'POLE OBVIOUS — TRADE ON', type: 'good' },
    caption: '3 explosive bars covering 7+ points. No counter-bars. Volume signature obvious. This is the look you train your eye for.',
  },
  {
    title: '5-SECOND TEST FAILS — by the time you decide, the trade is gone',
    candles: [
      { o: 100.0, h: 100.4, l: 99.6, c: 100.3 },
      { o: 100.3, h: 100.7, l: 99.9, c: 100.0 },
      { o: 100.0, h: 100.5, l: 99.7, c: 100.4 },
      { o: 100.4, h: 100.8, l: 100.0, c: 100.6 },   // is this the pole?
      { o: 100.6, h: 101.0, l: 100.4, c: 100.5 },   // counter
      { o: 100.5, h: 100.9, l: 100.2, c: 100.8 },   // up again
      { o: 100.8, h: 101.1, l: 100.5, c: 100.6 },   // counter
      { o: 100.6, h: 101.0, l: 100.3, c: 100.9 },   // up
      { o: 100.9, h: 101.2, l: 100.6, c: 100.75 },  // pause
      { o: 100.75, h: 101.0, l: 100.5, c: 100.9 },  // pause
      { o: 100.9, h: 101.0, l: 100.65, c: 100.85 }, // pause
      { o: 100.85, h: 101.1, l: 100.7, c: 100.95 }, // micro breakout
      { o: 100.95, h: 101.0, l: 100.7, c: 100.8 },  // and faded
    ],
    annotations: [
      { type: 'zone', topPrice: 101.2, bottomPrice: 99.6, color: 'rgba(251, 191, 36, 0.06)', label: 'AMBIGUOUS — can\'t name the pole' },
      { type: 'badge', at: { i: 6, price: 100.9 }, text: '?', color: '#fbbf24' },
    ],
    verdict: { label: 'AMBIGUOUS — pass', type: 'warn' },
    caption: 'If you have to scroll back-and-forth to find the pole, there isn\'t one. Move on. The next clean pole is ten minutes away.',
  },
  {
    title: 'POLE-FIRST WORKFLOW — 3 steps before any flag analysis',
    candles: [
      { o: 100.0, h: 100.3, l: 99.7, c: 99.9 },
      { o: 99.9, h: 100.2, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.2, l: 99.9, c: 102.1 },    // 1️⃣ POLE BAR
      { o: 102.1, h: 103.3, l: 102.0, c: 103.2 },   // 2️⃣ POLE BAR
      { o: 103.2, h: 104.4, l: 103.1, c: 104.3 },   // 3️⃣ POLE BAR
      { o: 104.3, h: 104.5, l: 103.6, c: 103.7 },
      { o: 103.7, h: 103.9, l: 103.3, c: 103.5 },
      { o: 103.5, h: 103.8, l: 103.2, c: 103.4 },
      { o: 103.4, h: 105.0, l: 103.35, c: 104.9 },
    ],
    annotations: [
      { type: 'level', price: 102.15, color: '#fbbf24', label: '② Mark 50% line', dash: true },
      { type: 'badge', at: { i: 3, price: 103.2 }, text: '① POLE FIRST', color: '#22c55e' },
      { type: 'badge', at: { i: 7, price: 103.4 }, text: '③ Then read flag', color: '#5eead4' },
    ],
    verdict: { label: 'WORKFLOW — pole, line, flag', type: 'info' },
    caption: 'The order is non-negotiable: (1) name the pole, (2) draw the 50% line, (3) only then look at the flag. Skip step 1 and you guess direction.',
  },
];
