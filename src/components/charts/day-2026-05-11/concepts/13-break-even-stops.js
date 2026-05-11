// Teaching unit 13: Break-Even Stops — three approaches and when to use each.
// Concept — combine simplicity with structure. The optimal stop ties to price action.
export const charts = [
  {
    title: 'APPROACH A — BE after first partial profit (the default)',
    candles: [
      { o: 100.0, h: 100.4, l: 99.7, c: 100.3 },
      { o: 100.3, h: 101.2, l: 100.2, c: 101.1 },
      { o: 101.1, h: 102.0, l: 101.0, c: 101.9 },   // entry zone
      { o: 101.9, h: 102.6, l: 101.8, c: 102.5 },   // T1 hit → move to BE
      { o: 102.5, h: 102.7, l: 102.0, c: 102.1 },
      { o: 102.1, h: 103.0, l: 102.0, c: 102.9 },
    ],
    annotations: [
      { type: 'level', price: 101.5, color: '#22c55e', label: 'Entry 101.50' },
      { type: 'level', price: 100.6, color: '#94a3b8', label: 'Original stop' },
      { type: 'arrow', at: { i: 3, price: 102.7 }, direction: 'up', color: '#22c55e', label: 'T1 hit → BE' },
      { type: 'level', price: 101.5, color: '#22c55e', label: 'BE stop @ entry', dash: true },
    ],
    verdict: { label: 'SIMPLE — protects fast', type: 'good' },
    caption: 'Default for a scalper. T1 → BE. The trade can no longer lose. Simple. Effective. The right choice while structural identification is still being practiced.',
  },
  {
    title: 'APPROACH B — BE after 1R favorable move',
    candles: [
      { o: 100.0, h: 100.4, l: 99.7, c: 100.3 },
      { o: 100.3, h: 101.2, l: 100.2, c: 101.1 },
      { o: 101.1, h: 102.0, l: 101.0, c: 101.9 },   // entry
      { o: 101.9, h: 102.3, l: 101.8, c: 102.2 },
      { o: 102.2, h: 102.6, l: 102.1, c: 102.5 },   // hit 1R
      { o: 102.5, h: 102.7, l: 102.0, c: 102.1 },
    ],
    annotations: [
      { type: 'level', price: 101.5, color: '#22c55e', label: 'Entry 101.50' },
      { type: 'level', price: 100.5, color: '#94a3b8', label: 'Stop 100.50 (1R = 1.00)' },
      { type: 'level', price: 102.5, color: '#fbbf24', label: 'Trigger BE @ 1R favorable', dash: true },
      { type: 'arrow', at: { i: 4, price: 102.7 }, direction: 'up', color: '#22c55e', label: 'Move stop to entry' },
    ],
    verdict: { label: 'MATHEMATICAL — cleaner', type: 'good' },
    caption: 'Tie BE to a mathematical move (1R favorable). Less arbitrary than "after first partial." Best for traders who do not always take partials.',
  },
  {
    title: 'APPROACH C — Structure-based stop (optimal)',
    candles: [
      { o: 100.0, h: 100.4, l: 99.7, c: 100.3 },
      { o: 100.3, h: 101.2, l: 100.2, c: 101.1 },
      { o: 101.1, h: 102.0, l: 101.0, c: 101.9 },   // entry
      { o: 101.9, h: 102.6, l: 101.8, c: 102.5 },
      { o: 102.5, h: 102.7, l: 102.1, c: 102.3 },   // forms NEW higher low here
      { o: 102.3, h: 103.0, l: 102.2, c: 102.9 },
      { o: 102.9, h: 103.6, l: 102.8, c: 103.5 },
      { o: 103.5, h: 104.3, l: 103.4, c: 104.2 },
    ],
    annotations: [
      { type: 'level', price: 101.5, color: '#22c55e', label: 'Entry 101.50' },
      { type: 'level', price: 102.05, color: '#22c55e', label: 'NEW HL — stop just below', dash: true },
      { type: 'badge', at: { i: 4, price: 101.6 }, text: 'Structural stop active', color: '#22c55e' },
    ],
    verdict: { label: 'STRUCTURAL — optimal', type: 'good' },
    caption: 'Stop sits just below the newest higher low. Trails up as new HLs form. Lets winners breathe through normal volatility.',
  },
  {
    title: 'BE TOO FAST — winners-to-BE that should have been wins',
    candles: [
      { o: 100.0, h: 100.4, l: 99.7, c: 100.3 },
      { o: 100.3, h: 100.6, l: 100.0, c: 100.5 },
      { o: 100.5, h: 101.0, l: 100.4, c: 100.9 },   // entry
      { o: 100.9, h: 101.2, l: 100.8, c: 101.1 },   // tiny favorable move
      { o: 101.1, h: 101.3, l: 100.6, c: 100.9 },   // normal wiggle — BE hit (too early)
      { o: 100.9, h: 101.4, l: 100.8, c: 101.3 },
      { o: 101.3, h: 102.2, l: 101.2, c: 102.1 },   // chart kept going up
    ],
    annotations: [
      { type: 'level', price: 100.9, color: '#fbbf24', label: 'Entry' },
      { type: 'level', price: 100.9, color: '#fbbf24', label: 'BE moved too early', dash: true },
      { type: 'arrow', at: { i: 4, price: 100.5 }, direction: 'down', color: '#fbbf24', label: 'Wiggle hits BE' },
      { type: 'badge', at: { i: 6, price: 102.5 }, text: 'Trade WAS a winner', color: '#ef4444' },
    ],
    verdict: { label: 'BE TOO TIGHT', type: 'warn' },
    caption: 'Moving to BE before the trade has room is a death-by-paper-cuts pattern. Many "winners-to-BE" are winners robbed by an over-protective stop.',
  },
  {
    title: 'BE TOO SLOW — gave back the entire profit',
    candles: [
      { o: 100.0, h: 100.4, l: 99.7, c: 100.3 },
      { o: 100.3, h: 101.2, l: 100.2, c: 101.1 },   // entry
      { o: 101.1, h: 102.0, l: 101.0, c: 101.9 },
      { o: 101.9, h: 102.6, l: 101.8, c: 102.5 },
      { o: 102.5, h: 102.7, l: 102.0, c: 102.1 },   // no BE move yet
      { o: 102.1, h: 102.3, l: 101.4, c: 101.5 },   // reversal starting
      { o: 101.5, h: 101.7, l: 100.7, c: 100.8 },   // gave back profit
      { o: 100.8, h: 101.0, l: 100.3, c: 100.4 },   // stopped at original stop — small loss
    ],
    annotations: [
      { type: 'level', price: 100.6, color: '#ef4444', label: 'Original stop — never moved' },
      { type: 'badge', at: { i: 3, price: 103.0 }, text: 'Should have moved here', color: '#fbbf24' },
      { type: 'arrow', at: { i: 7, price: 100.6 }, direction: 'down', color: '#ef4444', label: 'STOPPED' },
    ],
    verdict: { label: 'BE TOO LATE', type: 'bad' },
    caption: 'Holding too long without protection. Trade went from +2R unrealized to a loss. Letting paper gains evaporate is a sin against the process.',
  },
  {
    title: 'COMBINED A+C — BE after first partial OR new HL forms (whichever first)',
    candles: [
      { o: 100.0, h: 100.4, l: 99.7, c: 100.3 },
      { o: 100.3, h: 101.2, l: 100.2, c: 101.1 },
      { o: 101.1, h: 102.0, l: 101.0, c: 101.9 },   // entry
      { o: 101.9, h: 102.6, l: 101.8, c: 102.5 },   // T1 partial → BE
      { o: 102.5, h: 102.7, l: 102.1, c: 102.3 },   // NEW HL forms
      { o: 102.3, h: 103.0, l: 102.2, c: 102.9 },
      { o: 102.9, h: 103.6, l: 102.8, c: 103.5 },
      { o: 103.5, h: 104.3, l: 103.4, c: 104.2 },
    ],
    annotations: [
      { type: 'level', price: 101.5, color: '#22c55e', label: 'Entry → BE after T1' },
      { type: 'level', price: 102.05, color: '#22c55e', label: 'Then trail to new HL', dash: true },
      { type: 'badge', at: { i: 4, price: 101.7 }, text: 'BEST PRACTICE', color: '#22c55e' },
    ],
    verdict: { label: 'A + C COMBO — recommended', type: 'good' },
    caption: 'Move to BE on first partial. Then transition to structure-based trailing as new HLs form. Best of both. Transition fully to (C) over time.',
  },
];
