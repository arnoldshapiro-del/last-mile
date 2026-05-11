// Teaching unit 7: Process vs Outcome — Protected Risk Always Wins.
// Concept — manage risk so neither outcome breaks you.
export const charts = [
  {
    title: 'THE COIN FLIP — bearish engulfing at top of flag',
    candles: [
      { o: 100.0, h: 101.0, l: 99.9, c: 100.9 },
      { o: 100.9, h: 102.4, l: 100.8, c: 102.3 },
      { o: 102.3, h: 103.8, l: 102.2, c: 103.7 },
      { o: 103.7, h: 103.8, l: 103.0, c: 103.2 },
      { o: 103.2, h: 103.4, l: 102.7, c: 102.9 },
      { o: 102.9, h: 104.2, l: 102.8, c: 104.1 },  // breakout
      { o: 104.1, h: 104.9, l: 104.0, c: 104.8 },
      { o: 104.8, h: 105.0, l: 104.6, c: 104.7 },
      { o: 104.7, h: 104.8, l: 103.6, c: 103.7 },  // BEARISH ENGULFING
    ],
    annotations: [
      { type: 'arrow', at: { i: 8, price: 105.0 }, direction: 'down', color: '#fbbf24', label: 'BEARISH ENGULFING' },
      { type: 'zone', topPrice: 104.9, bottomPrice: 103.6, color: 'rgba(251, 191, 36, 0.12)', label: '50/50 — predict OR protect' },
    ],
    verdict: { label: 'DECISION POINT', type: 'warn' },
    caption: 'Coin-flip moment. You cannot tell what happens next. Your job is not to guess. Your job is to make BOTH outcomes survivable.',
  },
  {
    title: 'WRONG — predicting reversal: close out the whole trade',
    candles: [
      { o: 100.0, h: 101.0, l: 99.9, c: 100.9 },
      { o: 100.9, h: 102.4, l: 100.8, c: 102.3 },
      { o: 102.3, h: 103.8, l: 102.2, c: 103.7 },
      { o: 103.7, h: 103.8, l: 103.0, c: 103.2 },
      { o: 103.2, h: 103.4, l: 102.7, c: 102.9 },
      { o: 102.9, h: 104.2, l: 102.8, c: 104.1 },
      { o: 104.1, h: 104.9, l: 104.0, c: 104.8 },
      { o: 104.8, h: 104.8, l: 103.6, c: 103.7 },
      { o: 103.7, h: 104.4, l: 103.6, c: 104.3 },
      { o: 104.3, h: 105.5, l: 104.2, c: 105.4 },  // chart kept going!
      { o: 105.4, h: 106.6, l: 105.3, c: 106.5 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 7, price: 103.3 }, direction: 'down', color: '#ef4444', label: 'Closed early — predicted reversal' },
      { type: 'badge', at: { i: 10, price: 107.0 }, text: 'Left $$ on table', color: '#ef4444' },
    ],
    verdict: { label: 'PREDICTED — LOST RUNNERS', type: 'bad' },
    caption: 'Closing on a guess. Bearish engulfing was a warning, not a sentence. The runner-targets were the entire edge — gone.',
  },
  {
    title: 'WRONG — predicting continuation: add to the trade',
    candles: [
      { o: 100.0, h: 101.0, l: 99.9, c: 100.9 },
      { o: 100.9, h: 102.4, l: 100.8, c: 102.3 },
      { o: 102.3, h: 103.8, l: 102.2, c: 103.7 },
      { o: 103.7, h: 103.8, l: 103.0, c: 103.2 },
      { o: 103.2, h: 103.4, l: 102.7, c: 102.9 },
      { o: 102.9, h: 104.2, l: 102.8, c: 104.1 },
      { o: 104.1, h: 104.9, l: 104.0, c: 104.8 },
      { o: 104.8, h: 104.8, l: 103.6, c: 103.7 },
      { o: 103.7, h: 103.8, l: 102.7, c: 102.8 },
      { o: 102.8, h: 102.9, l: 101.6, c: 101.7 },  // reversal real
    ],
    annotations: [
      { type: 'arrow', at: { i: 7, price: 103.3 }, direction: 'up', color: '#ef4444', label: 'Added — predicting continuation' },
      { type: 'badge', at: { i: 9, price: 101.2 }, text: 'Larger size INTO reversal', color: '#ef4444' },
    ],
    verdict: { label: 'PREDICTED — DOUBLED THE LOSS', type: 'bad' },
    caption: 'Adding at the bearish engulfing is paying to be right. When the reversal is real, the larger size compounds the loss.',
  },
  {
    title: 'RIGHT — protect: tighten to BE on runners',
    candles: [
      { o: 100.0, h: 101.0, l: 99.9, c: 100.9 },
      { o: 100.9, h: 102.4, l: 100.8, c: 102.3 },
      { o: 102.3, h: 103.8, l: 102.2, c: 103.7 },
      { o: 103.7, h: 103.8, l: 103.0, c: 103.2 },
      { o: 103.2, h: 103.4, l: 102.7, c: 102.9 },
      { o: 102.9, h: 104.2, l: 102.8, c: 104.1 },
      { o: 104.1, h: 104.9, l: 104.0, c: 104.8 },
      { o: 104.8, h: 104.8, l: 103.6, c: 103.7 },
    ],
    annotations: [
      { type: 'level', price: 103.0, color: '#22c55e', label: 'BE stop set @ 103.00', dash: true },
      { type: 'arrow', at: { i: 5, price: 103.2 }, direction: 'up', color: '#22c55e', label: 'Original entry' },
      { type: 'badge', at: { i: 7, price: 105.0 }, text: 'PROTECT, not predict', color: '#22c55e' },
    ],
    verdict: { label: 'BE PROTECTION SET', type: 'good' },
    caption: 'You did not predict. You protected. If reversal: no loss. If continuation: runners still in. Both outcomes acceptable.',
  },
  {
    title: 'OUTCOME A — reversal happens, BE stop exits flat',
    candles: [
      { o: 100.0, h: 101.0, l: 99.9, c: 100.9 },
      { o: 100.9, h: 102.4, l: 100.8, c: 102.3 },
      { o: 102.3, h: 103.8, l: 102.2, c: 103.7 },
      { o: 103.7, h: 103.8, l: 103.0, c: 103.2 },
      { o: 103.2, h: 103.4, l: 102.7, c: 102.9 },
      { o: 102.9, h: 104.2, l: 102.8, c: 104.1 },
      { o: 104.1, h: 104.9, l: 104.0, c: 104.8 },
      { o: 104.8, h: 104.8, l: 103.6, c: 103.7 },
      { o: 103.7, h: 103.8, l: 102.7, c: 102.8 },  // hits BE — flat
      { o: 102.8, h: 102.9, l: 101.6, c: 101.7 },
    ],
    annotations: [
      { type: 'level', price: 103.0, color: '#22c55e', label: 'BE stop @ 103.00', dash: true },
      { type: 'arrow', at: { i: 8, price: 103.0 }, direction: 'down', color: '#22c55e', label: 'Exit FLAT — zero loss' },
    ],
    verdict: { label: 'NO LOSS — framework worked', type: 'good' },
    caption: 'Reversal was real. BE protection kicked in. You kept the partial profits from the first targets. Zero damage on the runners.',
  },
  {
    title: 'OUTCOME B — continuation, runners ride to target',
    candles: [
      { o: 100.0, h: 101.0, l: 99.9, c: 100.9 },
      { o: 100.9, h: 102.4, l: 100.8, c: 102.3 },
      { o: 102.3, h: 103.8, l: 102.2, c: 103.7 },
      { o: 103.7, h: 103.8, l: 103.0, c: 103.2 },
      { o: 103.2, h: 103.4, l: 102.7, c: 102.9 },
      { o: 102.9, h: 104.2, l: 102.8, c: 104.1 },
      { o: 104.1, h: 104.9, l: 104.0, c: 104.8 },
      { o: 104.8, h: 104.8, l: 103.6, c: 103.7 },  // bearish engulfing scare
      { o: 103.7, h: 104.4, l: 103.6, c: 104.3 },  // consolidation
      { o: 104.3, h: 105.5, l: 104.2, c: 105.4 },  // resumes
      { o: 105.4, h: 106.6, l: 105.3, c: 106.5 },
      { o: 106.5, h: 107.8, l: 106.4, c: 107.7 },  // T3
    ],
    annotations: [
      { type: 'level', price: 103.0, color: '#22c55e', label: 'BE stop held' },
      { type: 'level', price: 107.0, color: '#22c55e', label: 'Target 3 hit', dash: true },
      { type: 'arrow', at: { i: 11, price: 108.0 }, direction: 'up', color: '#22c55e', label: 'Runners home' },
    ],
    verdict: { label: 'FULL UPSIDE — framework worked', type: 'good' },
    caption: 'Continuation real. Runners stayed in. Hit T3. Same framework that protected outcome A captured outcome B.',
  },
  {
    title: 'OUTCOMES DO NOT VALIDATE THE FRAMEWORK — process does',
    candles: [
      { o: 100.0, h: 101.5, l: 99.9, c: 101.4 },
      { o: 101.4, h: 102.8, l: 101.3, c: 102.7 },
      { o: 102.7, h: 102.8, l: 101.6, c: 101.7 },
      { o: 101.7, h: 101.9, l: 101.0, c: 101.2 },   // forced trade — looked similar to a winner
      { o: 101.2, h: 101.4, l: 100.4, c: 100.6 },   // but no setup
      { o: 100.6, h: 101.5, l: 100.5, c: 101.4 },   // lucky bounce
      { o: 101.4, h: 102.5, l: 101.3, c: 102.4 },   // won anyway
    ],
    annotations: [
      { type: 'arrow', at: { i: 3, price: 102.5 }, direction: 'down', color: '#fbbf24', label: 'Forced trade — bad process' },
      { type: 'badge', at: { i: 6, price: 103.0 }, text: 'Won by accident', color: '#fbbf24' },
    ],
    verdict: { label: 'GOOD OUTCOME, BAD PROCESS', type: 'warn' },
    caption: 'One lucky outcome from a forced setup does NOT validate the setup. Reinforcing this pattern is how good months become bad years.',
  },
];
