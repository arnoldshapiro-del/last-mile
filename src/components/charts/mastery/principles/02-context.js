
// Principle 2 — Context Is Everything
// Trending vs ranging session, transition bars, why same setup wins/loses.
export const charts = [
  {
    title: 'TRENDING SESSION — bull flag carries to target',
    candles: [
      { o: 100.0, h: 100.5, l: 99.6, c: 100.4 },
      { o: 100.4, h: 102.0, l: 100.3, c: 101.9 },
      { o: 101.9, h: 103.4, l: 101.8, c: 103.3 },
      { o: 103.3, h: 104.7, l: 103.2, c: 104.6 },
      { o: 104.6, h: 104.9, l: 103.9, c: 104.0 },
      { o: 104.0, h: 104.3, l: 103.7, c: 103.9 },
      { o: 103.9, h: 104.2, l: 103.6, c: 103.8 },
      { o: 103.8, h: 105.6, l: 103.75, c: 105.5 },
      { o: 105.5, h: 106.8, l: 105.4, c: 106.7 },
      { o: 106.7, h: 108.0, l: 106.6, c: 107.9 },
    ],
    annotations: [
      { type: 'badge', at: { i: 3, price: 104.0 }, text: 'TRENDING', color: '#22c55e' },
      { type: 'arrow', at: { i: 7, price: 105.5 }, direction: 'up', color: '#22c55e', label: 'BREAKOUT' },
      { type: 'level', price: 108.0, color: '#22c55e', label: 'TARGET HIT', dash: true },
    ],
    verdict: { label: 'CONTEXT MATCHES SETUP — WIN', type: 'good' },
    caption: 'Drive + expansion + range. Bull flag at 10:15 carries because committed buyers are still in the tape.',
  },
  {
    title: 'RANGING SESSION — IDENTICAL bull flag fails',
    candles: [
      { o: 100.0, h: 100.8, l: 99.4, c: 100.6 },
      { o: 100.6, h: 101.0, l: 99.8, c: 99.9 },
      { o: 99.9, h: 100.7, l: 99.5, c: 100.5 },
      { o: 100.5, h: 100.9, l: 99.8, c: 100.0 },
      { o: 100.0, h: 100.7, l: 99.6, c: 100.6 },
      { o: 100.6, h: 100.8, l: 100.3, c: 100.5 },
      { o: 100.5, h: 100.7, l: 100.2, c: 100.4 },
      { o: 100.4, h: 100.6, l: 100.0, c: 100.3 },
      { o: 100.3, h: 101.0, l: 100.25, c: 100.95 }, // micro breakout
      { o: 100.95, h: 101.0, l: 99.6, c: 99.7 },    // immediate fade
      { o: 99.7, h: 99.9, l: 99.2, c: 99.4 },       // back into range low
    ],
    annotations: [
      { type: 'level', price: 101.0, color: '#fbbf24', label: 'RANGE TOP' },
      { type: 'level', price: 99.4, color: '#fbbf24', label: 'RANGE BOTTOM' },
      { type: 'arrow', at: { i: 8, price: 100.95 }, direction: 'up', color: '#ef4444', label: 'FALSE BREAK' },
      { type: 'badge', at: { i: 5, price: 100.5 }, text: 'RANGING', color: '#ef4444' },
    ],
    verdict: { label: 'WRONG CONTEXT — TRAP', type: 'bad' },
    caption: 'Same shape, opposite outcome. Range tops fade. Buyers committed enough to drive a flag are not in this tape.',
  },
  {
    title: 'TRENDING DAY FOOTPRINT — how to recognize it in 15 minutes',
    candles: [
      { o: 100.0, h: 100.4, l: 99.7, c: 100.2 },   // open
      { o: 100.2, h: 101.4, l: 100.1, c: 101.3 },  // expansion bar 1
      { o: 101.3, h: 102.5, l: 101.2, c: 102.4 },  // expansion bar 2
      { o: 102.4, h: 103.6, l: 102.3, c: 103.5 },  // expansion bar 3
      { o: 103.5, h: 103.8, l: 102.9, c: 103.0 },  // small pullback
      { o: 103.0, h: 104.4, l: 102.95, c: 104.3 }, // expansion
      { o: 104.3, h: 105.5, l: 104.2, c: 105.4 },
    ],
    annotations: [
      { type: 'zone', topPrice: 105.5, bottomPrice: 99.7, color: 'rgba(0, 217, 160, 0.07)', label: 'DRIVE + EXPANSION + RANGE' },
      { type: 'badge', at: { i: 0, price: 100.2 }, text: 'OPEN', color: '#5eead4' },
      { type: 'badge', at: { i: 6, price: 105.4 }, text: '+5% in 15 min', color: '#22c55e' },
    ],
    verdict: { label: 'TREND — TRADE FLAG SETUPS', type: 'good' },
    caption: 'First 15 minutes drove one direction with expanding range. This is the signature: pole-and-flag tactics carry today.',
  },
  {
    title: 'RANGING DAY FOOTPRINT — chop, contraction, compression',
    candles: [
      { o: 100.0, h: 100.5, l: 99.6, c: 100.3 },
      { o: 100.3, h: 100.6, l: 99.8, c: 99.9 },
      { o: 99.9, h: 100.4, l: 99.7, c: 100.3 },
      { o: 100.3, h: 100.5, l: 99.85, c: 100.0 },
      { o: 100.0, h: 100.4, l: 99.75, c: 100.3 },
      { o: 100.3, h: 100.45, l: 99.85, c: 100.0 },
      { o: 100.0, h: 100.35, l: 99.8, c: 100.25 },
      { o: 100.25, h: 100.4, l: 99.9, c: 100.05 },
      { o: 100.05, h: 100.3, l: 99.85, c: 100.2 },
      { o: 100.2, h: 100.35, l: 99.95, c: 100.1 },
    ],
    annotations: [
      { type: 'level', price: 100.5, color: '#fbbf24', label: 'CEILING' },
      { type: 'level', price: 99.6, color: '#fbbf24', label: 'FLOOR' },
      { type: 'badge', at: { i: 5, price: 100.0 }, text: 'CHOP', color: '#fbbf24' },
    ],
    verdict: { label: 'RANGE — fade extremes only', type: 'warn' },
    caption: 'Bars shrinking, no commitment to either side. Pole-and-flag dies here. Switch to range-fade playbook or sit out.',
  },
  {
    title: 'TRANSITION BAR — trend morning rolls into ranging midday',
    candles: [
      { o: 100.0, h: 101.4, l: 99.9, c: 101.3 },
      { o: 101.3, h: 102.5, l: 101.2, c: 102.4 },
      { o: 102.4, h: 103.4, l: 102.3, c: 103.3 },
      { o: 103.3, h: 104.0, l: 103.2, c: 103.95 },
      { o: 103.95, h: 104.0, l: 102.9, c: 103.0 },  // big counter — TRANSITION BAR
      { o: 103.0, h: 103.4, l: 102.7, c: 103.1 },
      { o: 103.1, h: 103.3, l: 102.6, c: 102.8 },
      { o: 102.8, h: 103.2, l: 102.5, c: 102.9 },
      { o: 102.9, h: 103.1, l: 102.4, c: 102.6 },
      { o: 102.6, h: 103.1, l: 102.5, c: 103.0 },
    ],
    annotations: [
      { type: 'badge', at: { i: 4, price: 103.4 }, text: 'TRANSITION', color: '#fbbf24' },
      { type: 'level', price: 104.0, color: '#94a3b8', label: 'High of trend' },
      { type: 'zone', topPrice: 103.4, bottomPrice: 102.4, color: 'rgba(251, 191, 36, 0.10)', label: 'RANGE BORN' },
    ],
    verdict: { label: 'PLAYBOOK CHANGES NOW', type: 'warn' },
    caption: 'A wide-range bar that fails to follow through is the transition signal. After this bar, fade ceilings/floors instead of chasing flags.',
  },
  {
    title: 'WRONG CONTEXT, RIGHT SETUP — the most expensive trade in your book',
    candles: [
      { o: 100.0, h: 100.4, l: 99.6, c: 100.3 },
      { o: 100.3, h: 100.5, l: 99.8, c: 99.9 },
      { o: 99.9, h: 100.4, l: 99.7, c: 100.3 },
      { o: 100.3, h: 100.5, l: 99.8, c: 100.0 },
      { o: 100.0, h: 101.2, l: 99.95, c: 101.1 },   // small "pole"
      { o: 101.1, h: 101.4, l: 100.8, c: 100.9 },   // "flag"
      { o: 100.9, h: 101.15, l: 100.7, c: 100.8 },
      { o: 100.8, h: 101.1, l: 100.5, c: 100.6 },
      { o: 100.6, h: 101.4, l: 100.55, c: 101.3 },  // breakout
      { o: 101.3, h: 101.4, l: 100.0, c: 100.1 },   // immediate fail
      { o: 100.1, h: 100.4, l: 99.6, c: 99.8 },
    ],
    annotations: [
      { type: 'level', price: 101.4, color: '#fbbf24', label: 'RANGE TOP — failed before' },
      { type: 'arrow', at: { i: 8, price: 101.3 }, direction: 'up', color: '#ef4444', label: 'ENTRY = TRAP' },
      { type: 'badge', at: { i: 0, price: 100.3 }, text: 'CONTEXT = RANGE', color: '#ef4444' },
    ],
    verdict: { label: 'CLEAN PATTERN, WRONG TAPE', type: 'bad' },
    caption: 'Pattern looks textbook in isolation. Zoom out: it lives inside a four-hour range. The setup that wins in trends loses here.',
  },
];
