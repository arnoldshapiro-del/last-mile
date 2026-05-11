// Teaching unit 4: Wick Below vs Body Close Below.
// Concept — a wick asks a question; a close gives the answer.
export const charts = [
  {
    title: 'TIER 1 — wick below, body RECOVERS — bullish spring',
    candles: [
      { o: 100.0, h: 100.3, l: 99.6, c: 99.7 },
      { o: 99.7,  h: 99.8,  l: 98.5, c: 98.7 },
      { o: 98.7,  h: 99.4,  l: 97.5, c: 97.7 },   // prior swing low
      { o: 97.7,  h: 98.4,  l: 97.6, c: 98.3 },
      { o: 98.3,  h: 98.9,  l: 98.0, c: 98.6 },
      { o: 98.6,  h: 98.7,  l: 97.0, c: 98.3 },   // wick to 97.0, body closes at 98.3
      { o: 98.3,  h: 99.5,  l: 98.2, c: 99.3 },   // confirmation candle — green, volume
      { o: 99.3,  h: 100.2, l: 99.2, c: 100.0 },
    ],
    annotations: [
      { type: 'level', price: 97.5, color: '#fbbf24', label: 'Prior swing low' },
      { type: 'arrow', at: { i: 5, price: 98.3 }, direction: 'up', color: '#22c55e', label: 'Body CLOSES inside = SPRING' },
      { type: 'badge', at: { i: 5, price: 96.7 }, text: 'wick only', color: '#94a3b8' },
    ],
    verdict: { label: 'BULLISH — spring entry', type: 'good' },
    caption: 'Wick pokes below the obvious low, body reclaims, volume strong. Spring confirmed. One of the highest-probability long setups.',
  },
  {
    title: 'TIER 2 — wick below, body closes NEAR the low — yellow flag',
    candles: [
      { o: 100.0, h: 100.3, l: 99.6, c: 99.7 },
      { o: 99.7,  h: 99.8,  l: 98.5, c: 98.7 },
      { o: 98.7,  h: 99.4,  l: 97.5, c: 97.7 },
      { o: 97.7,  h: 98.3,  l: 97.6, c: 98.2 },
      { o: 98.2,  h: 98.4,  l: 97.6, c: 97.7 },   // hovering at the low
      { o: 97.7,  h: 97.9,  l: 97.0, c: 97.55 },  // wick to 97.0, body closes right above prior low
      { o: 97.55, h: 97.7,  l: 97.0, c: 97.4 },   // next candle decides
    ],
    annotations: [
      { type: 'level', price: 97.5, color: '#fbbf24', label: 'Prior swing low' },
      { type: 'arrow', at: { i: 5, price: 97.55 }, direction: 'down', color: '#fbbf24', label: 'YELLOW FLAG — wait one candle' },
      { type: 'zone', topPrice: 97.7, bottomPrice: 97.4, color: 'rgba(251, 191, 36, 0.12)', label: 'undecided zone' },
    ],
    verdict: { label: 'WAIT — undecided', type: 'warn' },
    caption: 'Body closed slightly above the prior low — but barely. No conviction either way. Stand aside one candle and let the market commit.',
  },
  {
    title: 'TIER 3 — body CLOSES below — structure broken, exit',
    candles: [
      { o: 100.0, h: 100.3, l: 99.6, c: 99.7 },
      { o: 99.7,  h: 99.8,  l: 98.5, c: 98.7 },
      { o: 98.7,  h: 99.4,  l: 97.5, c: 97.7 },
      { o: 97.7,  h: 98.3,  l: 97.6, c: 98.2 },
      { o: 98.2,  h: 98.4,  l: 97.6, c: 97.7 },
      { o: 97.7,  h: 97.9,  l: 96.8, c: 96.9 },   // body CLOSES at 96.9 (below 97.5)
      { o: 96.9,  h: 97.1,  l: 95.9, c: 96.0 },   // continuation
      { o: 96.0,  h: 96.2,  l: 94.8, c: 95.0 },
    ],
    annotations: [
      { type: 'level', price: 97.5, color: '#ef4444', label: 'Prior swing low — STRUCTURE BROKEN' },
      { type: 'arrow', at: { i: 5, price: 96.9 }, direction: 'down', color: '#ef4444', label: 'Body close below = real break' },
      { type: 'badge', at: { i: 7, price: 94.5 }, text: 'NO LONGS', color: '#ef4444' },
    ],
    verdict: { label: 'STRUCTURE BROKEN — exit/avoid', type: 'bad' },
    caption: 'Body closes meaningfully below the level. Wait for new structure to form. Do not buy into broken structure.',
  },
  {
    title: 'OVERREADING WICKS — selling every bottom (the bad habit)',
    candles: [
      { o: 100.0, h: 100.3, l: 99.6, c: 99.7 },
      { o: 99.7,  h: 99.8,  l: 98.5, c: 98.7 },
      { o: 98.7,  h: 99.4,  l: 97.5, c: 97.7 },
      { o: 97.7,  h: 98.4,  l: 97.0, c: 98.3 },   // WICK to 97 — body recovers
      { o: 98.3,  h: 99.2,  l: 98.2, c: 99.0 },   // chart rallies AFTER you sold
      { o: 99.0,  h: 99.9,  l: 98.9, c: 99.7 },
      { o: 99.7,  h: 100.6, l: 99.6, c: 100.5 },
      { o: 100.5, h: 101.3, l: 100.4, c: 101.2 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 3, price: 96.8 }, direction: 'down', color: '#ef4444', label: 'You sold the wick' },
      { type: 'arrow', at: { i: 7, price: 101.3 }, direction: 'up', color: '#22c55e', label: 'Market kept going' },
      { type: 'zone', topPrice: 101.5, bottomPrice: 97.5, color: 'rgba(34, 197, 94, 0.06)' },
    ],
    verdict: { label: 'SOLD A SPRING — bad read', type: 'bad' },
    caption: 'Treating every wick as a break = selling every bottom. The wick was the spring; you became the seller institutions absorbed.',
  },
  {
    title: 'ES 7271 — actual close below, Tier 3 real break',
    candles: [
      { o: 7290, h: 7293, l: 7286, c: 7287 },
      { o: 7287, h: 7290, l: 7282, c: 7283 },
      { o: 7283, h: 7285, l: 7278, c: 7280 },
      { o: 7280, h: 7282, l: 7274, c: 7275 },
      { o: 7275, h: 7278, l: 7269, c: 7271 },     // CLOSE at 7271 — below prior 7280 swing low
      { o: 7271, h: 7273, l: 7266, c: 7268 },
      { o: 7268, h: 7270, l: 7263, c: 7265 },
    ],
    annotations: [
      { type: 'level', price: 7280, color: '#ef4444', label: 'Prior swing low 7280' },
      { type: 'level', price: 7271, color: '#ef4444', label: 'Close 7271 — REAL BREAK', dash: true },
      { type: 'badge', at: { i: 6, price: 7262 }, text: 'NO LONG', color: '#ef4444' },
    ],
    verdict: { label: 'REAL BREAK — Tier 3', type: 'bad' },
    caption: 'The body closed clean below the prior swing low. Not a wick. Not a question. An answer. No long entries from here until new structure forms.',
  },
  {
    title: 'IF ES had wicked to 7270 then closed 7278 — alternate spring scenario',
    candles: [
      { o: 7290, h: 7293, l: 7286, c: 7287 },
      { o: 7287, h: 7290, l: 7282, c: 7283 },
      { o: 7283, h: 7285, l: 7278, c: 7280 },
      { o: 7280, h: 7282, l: 7274, c: 7275 },
      { o: 7275, h: 7278, l: 7270, c: 7278 },     // wick to 7270, body closes at 7278 — INSIDE
      { o: 7278, h: 7285, l: 7277, c: 7284 },     // strong follow-through
      { o: 7284, h: 7290, l: 7283, c: 7289 },
      { o: 7289, h: 7294, l: 7288, c: 7293 },
    ],
    annotations: [
      { type: 'level', price: 7280, color: '#22c55e', label: 'Prior swing low — held' },
      { type: 'arrow', at: { i: 4, price: 7270 }, direction: 'up', color: '#a78bfa', label: 'Wick — sweep only' },
      { type: 'arrow', at: { i: 4, price: 7278 }, direction: 'up', color: '#22c55e', label: 'Body reclaims — SPRING' },
    ],
    verdict: { label: 'SPRING — same chart different close', type: 'good' },
    caption: 'Hypothetical: same wick depth, body closes back inside. Identical-looking chart with the OPPOSITE meaning. The close is the deciding factor.',
  },
];
