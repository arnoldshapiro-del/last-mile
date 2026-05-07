// Teaching unit 8: Missed entry — can I enter late? No.
export const charts = [
  {
    title: 'IDEAL ENTRY — close + 1-3 bar window',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.5, l: 99.95, c: 102.3 },
      { o: 102.3, h: 105.0, l: 102.2, c: 104.8 },
      { o: 104.8, h: 105.5, l: 104.0, c: 104.2 }, // flag
      { o: 104.2, h: 104.4, l: 103.5, c: 103.7 },
      { o: 103.7, h: 105.7, l: 103.6, c: 105.5 }, // breakout — IN WINDOW
      { o: 105.5, h: 106.5, l: 105.4, c: 106.3 }, // bar +1 still OK
      { o: 106.3, h: 107.5, l: 106.2, c: 107.3 }, // bar +2 still OK
      { o: 107.3, h: 108.5, l: 107.2, c: 108.3 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 5, price: 105.7 }, direction: 'up', color: '#22c55e', label: 'BAR 0' },
      { type: 'arrow', at: { i: 6, price: 106.5 }, direction: 'up', color: '#86efac', label: 'BAR +1 OK' },
      { type: 'arrow', at: { i: 7, price: 107.5 }, direction: 'up', color: '#86efac', label: 'BAR +2 OK' },
    ],
    verdict: { label: 'IN WINDOW — VALID', type: 'good' },
    caption: 'Entry on the breakout close (bar 0), bar+1, or bar+2 keeps stop tight and R:R clean.',
  },
  {
    title: 'CHASED 5 bars late — stop too far, R:R destroyed',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.5, l: 99.95, c: 102.3 },
      { o: 102.3, h: 105.0, l: 102.2, c: 104.8 },
      { o: 104.8, h: 105.5, l: 104.0, c: 104.2 },
      { o: 104.2, h: 104.4, l: 103.5, c: 103.7 },
      { o: 103.7, h: 105.7, l: 103.6, c: 105.5 }, // breakout — missed
      { o: 105.5, h: 106.5, l: 105.4, c: 106.3 },
      { o: 106.3, h: 107.5, l: 106.2, c: 107.3 },
      { o: 107.3, h: 108.5, l: 107.2, c: 108.3 },
      { o: 108.3, h: 109.0, l: 108.1, c: 108.7 }, // CHASE 5 bars later
      { o: 108.7, h: 108.9, l: 107.0, c: 107.2 }, // pullback hits chase stop
    ],
    annotations: [
      { type: 'level', price: 103.5, color: '#94a3b8', label: 'original stop = 2pts away', dash: true },
      { type: 'level', price: 105.5, color: '#94a3b8', label: 'original entry' },
      { type: 'arrow', at: { i: 9, price: 108.7 }, direction: 'up', color: '#ef4444', label: 'CHASE entry — stop now 5pts away' },
    ],
    verdict: { label: 'WORSE MATH — BAD', type: 'bad' },
    caption: 'Late entry: same target, wider stop, R:R degrades from 2:1 to 0.6:1. Different trade.',
  },
  {
    title: 'Right direction, WRONG TIMING — still a loss',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.5, l: 99.95, c: 102.3 },
      { o: 102.3, h: 105.0, l: 102.2, c: 104.8 },
      { o: 104.8, h: 107.0, l: 104.7, c: 106.8 },
      { o: 106.8, h: 108.5, l: 106.7, c: 108.3 },
      { o: 108.3, h: 110.0, l: 108.2, c: 109.8 }, // late entry near top
      { o: 109.8, h: 110.0, l: 107.5, c: 107.7 }, // retraces
      { o: 107.7, h: 108.0, l: 105.5, c: 105.7 }, // chase stop hit
      { o: 105.7, h: 106.0, l: 104.0, c: 104.2 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 5, price: 110.0 }, direction: 'up', color: '#ef4444', label: 'LATE' },
      { type: 'arrow', at: { i: 7, price: 105.5 }, direction: 'down', color: '#ef4444', label: 'STOPPED' },
      { type: 'badge', at: { i: 6, price: 108.7 }, text: 'still went up after — irrelevant', color: '#94a3b8' },
    ],
    verdict: { label: 'TIMING > DIRECTION', type: 'bad' },
    caption: "Direction was right — but late entry at the top got stopped on the pullback. The trade going up after means nothing once you've been stopped.",
  },
  {
    title: 'JUST THIS ONCE — first chase becomes habit',
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100.2 },
      { o: 100.2, h: 102.5, l: 100.1, c: 102.3 },
      { o: 102.3, h: 104.5, l: 102.2, c: 104.3 },
      { o: 104.3, h: 105.5, l: 103.5, c: 103.8 },
      { o: 103.8, h: 104.0, l: 103.0, c: 103.2 },
      { o: 103.2, h: 105.5, l: 103.1, c: 105.3 }, // missed
      { o: 105.3, h: 106.0, l: 104.5, c: 104.7 },
      { o: 104.7, h: 105.0, l: 103.5, c: 103.7 }, // chase here was wrong
    ],
    annotations: [
      { type: 'arrow', at: { i: 6, price: 106.5 }, direction: 'up', color: '#ef4444', label: '"just this once"' },
      { type: 'arrow', at: { i: 7, price: 103.5 }, direction: 'down', color: '#ef4444', label: 'STOPPED' },
    ],
    verdict: { label: 'RULES BROKEN — FUTURE LOSSES', type: 'bad' },
    caption: 'The single most expensive sentence: "just this once." Every broken rule makes the next break easier.',
  },
  {
    title: 'WAIT for the next setup — patience pays',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.5, l: 99.95, c: 102.3 },
      { o: 102.3, h: 102.6, l: 101.7, c: 101.9 },
      { o: 101.9, h: 102.4, l: 101.5, c: 102.3 }, // missed flag #1
      { o: 102.3, h: 104.0, l: 102.2, c: 103.9 },
      { o: 103.9, h: 105.5, l: 103.8, c: 105.4 },
      { o: 105.4, h: 105.6, l: 104.5, c: 104.7 }, // flag 2 forms
      { o: 104.7, h: 104.9, l: 104.2, c: 104.3 },
      { o: 104.3, h: 106.5, l: 104.2, c: 106.3 }, // ENTRY
    ],
    annotations: [
      { type: 'arrow', at: { i: 5, price: 105.7 }, direction: 'up', color: '#94a3b8', label: 'missed' },
      { type: 'arrow', at: { i: 8, price: 104.4 }, direction: 'up', color: '#22c55e', label: 'PATIENCE PAYS' },
    ],
    verdict: { label: 'WAITED — FRESH ENTRY', type: 'good' },
    caption: 'Skipped the chase. Next flag formed in 4 bars. Clean entry, defined stop, full R:R.',
  },
  {
    title: 'MISSING IS FREE — chasing is expensive',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 100.5, l: 99.6, c: 100.2 },
      { o: 100.2, h: 102.5, l: 100.1, c: 102.3 }, // chance 1 — missed
      { o: 102.3, h: 102.5, l: 101.5, c: 101.7 },
      { o: 101.7, h: 102.0, l: 101.3, c: 101.5 },
      { o: 101.5, h: 103.5, l: 101.4, c: 103.3 }, // chance 2
      { o: 103.3, h: 103.5, l: 102.5, c: 102.7 },
      { o: 102.7, h: 102.9, l: 102.2, c: 102.4 },
      { o: 102.4, h: 104.5, l: 102.3, c: 104.3 }, // chance 3 — take this
    ],
    annotations: [
      { type: 'badge', at: { i: 2, price: 101.0 }, text: '$0 cost', color: '#94a3b8' },
      { type: 'badge', at: { i: 5, price: 102.5 }, text: '$0 cost', color: '#94a3b8' },
      { type: 'arrow', at: { i: 8, price: 104.5 }, direction: 'up', color: '#22c55e', label: 'TAKE' },
    ],
    verdict: { label: 'MISSING COSTS NOTHING', type: 'good' },
    caption: 'Missing 3 setups in a row costs zero. Chasing one bad late entry can cost the day.',
  },
];
