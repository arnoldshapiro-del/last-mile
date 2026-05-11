// Teaching unit 9: Bear Flag Asymmetry — Why Bear Flags Aren't Inverted Bull Flags.
// Concept — markets fall faster than they rise. Bear flags need stricter conditions.
export const charts = [
  {
    title: 'VALID bear flag — 4-candle shallow bounce',
    candles: [
      { o: 102.0, h: 102.3, l: 101.6, c: 101.7 },
      { o: 101.7, h: 101.9, l: 100.4, c: 100.5 },   // pole down
      { o: 100.5, h: 100.7, l: 99.2, c: 99.3 },     // pole down
      { o: 99.3, h: 99.5, l: 97.9, c: 98.0 },       // pole down — 3 impulse candles
      { o: 98.0, h: 98.7, l: 97.9, c: 98.6 },       // bounce c1
      { o: 98.6, h: 99.0, l: 98.5, c: 98.9 },       // bounce c2
      { o: 98.9, h: 99.2, l: 98.7, c: 99.0 },       // bounce c3
      { o: 99.0, h: 99.3, l: 98.8, c: 99.1 },       // bounce c4 — stalling
      { o: 99.1, h: 99.2, l: 97.7, c: 97.8 },       // breakdown
      { o: 97.8, h: 97.9, l: 96.4, c: 96.5 },
    ],
    annotations: [
      { type: 'zone', topPrice: 102.0, bottomPrice: 97.9, color: 'rgba(239, 68, 68, 0.06)', label: 'POLE DOWN — 3 impulse candles' },
      { type: 'zone', topPrice: 99.3, bottomPrice: 98.5, color: 'rgba(167, 139, 250, 0.10)', label: 'BOUNCE 4 candles — shallow' },
      { type: 'arrow', at: { i: 8, price: 98.5 }, direction: 'down', color: '#ef4444', label: 'SHORT entry' },
    ],
    verdict: { label: 'VALID bear flag', type: 'good' },
    caption: 'Three impulse candles down, four shallow bounce candles up, breakdown. Textbook bear flag.',
  },
  {
    title: 'INVALID — 8+ candle bounce is a REVERSAL, not a flag',
    candles: [
      { o: 102.0, h: 102.3, l: 101.6, c: 101.7 },
      { o: 101.7, h: 101.9, l: 100.4, c: 100.5 },
      { o: 100.5, h: 100.7, l: 99.2, c: 99.3 },
      { o: 99.3, h: 99.5, l: 97.9, c: 98.0 },
      { o: 98.0, h: 98.5, l: 97.9, c: 98.4 },       // bounce
      { o: 98.4, h: 98.8, l: 98.3, c: 98.7 },
      { o: 98.7, h: 99.2, l: 98.6, c: 99.1 },
      { o: 99.1, h: 99.6, l: 99.0, c: 99.5 },
      { o: 99.5, h: 100.1, l: 99.4, c: 100.0 },
      { o: 100.0, h: 100.6, l: 99.9, c: 100.5 },     // 8th candle of bounce
      { o: 100.5, h: 101.1, l: 100.4, c: 101.0 },    // 9th — way too long
      { o: 101.0, h: 101.4, l: 100.9, c: 101.3 },    // chart reabsorbed back into uptrend
    ],
    annotations: [
      { type: 'zone', topPrice: 101.4, bottomPrice: 98.0, color: 'rgba(239, 68, 68, 0.06)' },
      { type: 'arrow', at: { i: 9, price: 100.9 }, direction: 'up', color: '#ef4444', label: 'NOT a flag — REVERSAL' },
      { type: 'badge', at: { i: 11, price: 101.8 }, text: 'UPTREND RESUMED', color: '#22c55e' },
    ],
    verdict: { label: 'NOT A BEAR FLAG — skip', type: 'bad' },
    caption: 'Drawing a clean upward trendline through 8-10 candles of bounce? Not a bear flag. The selloff failed and the uptrend reabsorbed it.',
  },
  {
    title: 'COMPARISON — bull flag pullback can be 7+ candles',
    candles: [
      { o: 100.0, h: 100.4, l: 99.9, c: 100.3 },
      { o: 100.3, h: 101.6, l: 100.2, c: 101.5 },
      { o: 101.5, h: 102.8, l: 101.4, c: 102.7 },
      { o: 102.7, h: 103.6, l: 102.6, c: 103.5 },
      { o: 103.5, h: 103.6, l: 102.9, c: 103.0 },   // pullback c1
      { o: 103.0, h: 103.2, l: 102.5, c: 102.7 },   // c2
      { o: 102.7, h: 102.9, l: 102.4, c: 102.6 },   // c3
      { o: 102.6, h: 102.8, l: 102.3, c: 102.5 },   // c4
      { o: 102.5, h: 102.7, l: 102.3, c: 102.5 },   // c5
      { o: 102.5, h: 102.8, l: 102.4, c: 102.7 },   // c6
      { o: 102.7, h: 103.9, l: 102.6, c: 103.8 },   // breakout — pullback was fine at 7 candles
    ],
    annotations: [
      { type: 'zone', topPrice: 103.3, bottomPrice: 102.2, color: 'rgba(34, 197, 94, 0.08)', label: 'BULL FLAG — 7 candles OK' },
      { type: 'badge', at: { i: 10, price: 104.2 }, text: 'PATIENT BUYERS', color: '#22c55e' },
    ],
    verdict: { label: 'BULL FLAG — long pullback OK', type: 'good' },
    caption: 'Buyers accumulate patiently. Bull flag pullbacks can run 7-10 candles without breaking the pattern. Bears do NOT have that luxury.',
  },
  {
    title: 'THE MES LOSS — V-recovery treated as bear flag bounce',
    candles: [
      { o: 7445, h: 7447, l: 7440, c: 7441 },
      { o: 7441, h: 7443, l: 7432, c: 7434 },       // ONE red candle "pole"
      { o: 7434, h: 7436, l: 7427, c: 7429 },
      { o: 7429, h: 7432, l: 7424, c: 7425 },       // deep low
      { o: 7425, h: 7431, l: 7424, c: 7430 },       // start of V
      { o: 7430, h: 7434, l: 7429, c: 7433 },
      { o: 7433, h: 7438, l: 7432, c: 7437 },
      { o: 7437, h: 7443, l: 7436, c: 7442 },       // bounce way over 50%
      { o: 7442, h: 7445, l: 7440, c: 7443 },       // chart reabsorbed up
    ],
    annotations: [
      { type: 'level', price: 7434, color: '#ef4444', label: 'Short entry 7434' },
      { type: 'level', price: 7437.75, color: '#ef4444', label: '50% level — EXCEEDED', dash: true },
      { type: 'arrow', at: { i: 8, price: 7444 }, direction: 'up', color: '#ef4444', label: 'STOPPED OUT — $290' },
    ],
    verdict: { label: 'NOT A BEAR FLAG — loss', type: 'bad' },
    caption: 'One red candle is not a pole. The bounce was too deep, too long, ate the 50% line. The short ate the stop.',
  },
  {
    title: 'THE MES WIN — proper short after LH/LL formed',
    candles: [
      { o: 7445, h: 7447, l: 7438, c: 7440 },
      { o: 7440, h: 7442, l: 7430, c: 7432 },       // impulse down c1
      { o: 7432, h: 7434, l: 7424, c: 7426 },       // impulse down c2
      { o: 7426, h: 7432, l: 7425, c: 7431 },       // bounce
      { o: 7431, h: 7438, l: 7430, c: 7437 },       // bounce — LH formed
      { o: 7437, h: 7440, l: 7436, c: 7439 },       // LH visible
      { o: 7439, h: 7440, l: 7432, c: 7433 },       // SHORT entry zone
      { o: 7433, h: 7434, l: 7426, c: 7427 },
      { o: 7427, h: 7429, l: 7420, c: 7421 },
      { o: 7421, h: 7423, l: 7414, c: 7415 },
    ],
    annotations: [
      { type: 'level', price: 7440, color: '#ef4444', label: 'LH confirmed' },
      { type: 'level', price: 7424, color: '#ef4444', label: 'LL formed' },
      { type: 'arrow', at: { i: 6, price: 7439.25 }, direction: 'down', color: '#22c55e', label: 'SHORT 7439.25' },
      { type: 'badge', at: { i: 9, price: 7413 }, text: '+$44.50', color: '#22c55e' },
    ],
    verdict: { label: 'VALID — booked profit', type: 'good' },
    caption: 'Same MES, same setup type, opposite outcome. Structure was actually bearish: LH AND LL confirmed before entry. The discriminator.',
  },
  {
    title: 'BOUNCE OVER 61.8% RETRACE — bear thesis DEAD',
    candles: [
      { o: 102.0, h: 102.3, l: 101.6, c: 101.7 },
      { o: 101.7, h: 101.9, l: 100.4, c: 100.5 },
      { o: 100.5, h: 100.7, l: 99.2, c: 99.3 },
      { o: 99.3, h: 99.5, l: 97.9, c: 98.0 },
      { o: 98.0, h: 98.6, l: 97.9, c: 98.5 },
      { o: 98.5, h: 99.4, l: 98.4, c: 99.3 },
      { o: 99.3, h: 100.2, l: 99.2, c: 100.1 },     // exceeded 50%
      { o: 100.1, h: 100.9, l: 100.0, c: 100.8 },   // exceeded 61.8% — done
      { o: 100.8, h: 101.4, l: 100.7, c: 101.3 },
    ],
    annotations: [
      { type: 'level', price: 100.0, color: '#fbbf24', label: '50% retrace' },
      { type: 'level', price: 100.5, color: '#ef4444', label: '61.8% retrace — bear thesis DEAD', dash: true },
      { type: 'arrow', at: { i: 7, price: 101.5 }, direction: 'up', color: '#ef4444', label: 'No short — thesis gone' },
    ],
    verdict: { label: 'NO SHORT — thesis broken', type: 'bad' },
    caption: 'Beyond 61.8% retrace, the prior downtrend is mechanically over. Do not short into a recovering trend disguised as a flag.',
  },
];
