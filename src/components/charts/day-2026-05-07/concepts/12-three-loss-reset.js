// Teaching unit 12: Three-loss daily reset rule
export const charts = [
  {
    title: 'Loss #1 — short fails, short setup looked clean',
    candles: [
      { o: 100, h: 100.3, l: 99.5, c: 99.8 },
      { o: 99.8, h: 100.0, l: 99.0, c: 99.1 },
      { o: 99.1, h: 99.2, l: 97.5, c: 97.7 }, // short on breakdown
      { o: 97.7, h: 99.0, l: 97.6, c: 98.8 }, // reversed
      { o: 98.8, h: 100.0, l: 98.7, c: 99.8 }, // stopped
    ],
    annotations: [
      { type: 'arrow', at: { i: 2, price: 97.4 }, direction: 'down', color: '#94a3b8', label: '#1 short' },
      { type: 'arrow', at: { i: 4, price: 100.2 }, direction: 'up', color: '#ef4444', label: 'STOP' },
    ],
    verdict: { label: 'LOSS 1', type: 'bad' },
    caption: 'First short of the session — clean breakdown, reversed almost immediately. Loss #1 of 3 allowed.',
  },
  {
    title: 'Loss #2 — same direction, same outcome',
    candles: [
      { o: 100, h: 100.3, l: 99.5, c: 99.8 },
      { o: 99.8, h: 100.5, l: 99.0, c: 100.3 }, // bounce
      { o: 100.3, h: 101.0, l: 99.8, c: 99.9 },
      { o: 99.9, h: 100.0, l: 98.5, c: 98.7 }, // 2nd short
      { o: 98.7, h: 99.5, l: 98.5, c: 99.3 },
      { o: 99.3, h: 100.5, l: 99.2, c: 100.3 }, // stop
    ],
    annotations: [
      { type: 'arrow', at: { i: 3, price: 98.4 }, direction: 'down', color: '#94a3b8', label: '#2 short' },
      { type: 'arrow', at: { i: 5, price: 100.7 }, direction: 'up', color: '#ef4444', label: 'STOP' },
    ],
    verdict: { label: 'LOSS 2 — same direction', type: 'bad' },
    caption: 'Second short, same general read, same outcome. Pattern is clear — direction is wrong.',
  },
  {
    title: 'Loss #3 — STOP. Walk away.',
    candles: [
      { o: 100, h: 101.5, l: 99.5, c: 101.3 },
      { o: 101.3, h: 102.0, l: 101.0, c: 101.8 },
      { o: 101.8, h: 102.5, l: 101.7, c: 102.3 },
      { o: 102.3, h: 103.0, l: 102.0, c: 102.2 },
      { o: 102.2, h: 102.5, l: 100.5, c: 100.7 }, // bear engulf — 3rd short
      { o: 100.7, h: 102.5, l: 100.6, c: 102.3 }, // reversed AGAIN
      { o: 102.3, h: 103.5, l: 102.2, c: 103.3 }, // stop
    ],
    annotations: [
      { type: 'arrow', at: { i: 4, price: 100.4 }, direction: 'down', color: '#94a3b8', label: '#3 short' },
      { type: 'arrow', at: { i: 6, price: 103.7 }, direction: 'up', color: '#ef4444', label: 'STOP — DAY DONE' },
    ],
    verdict: { label: 'LOSS 3 — STOP TRADING', type: 'bad' },
    caption: 'Three same-direction losses. Market is telling you the regime is wrong. Close the platform.',
  },
  {
    title: '4th attempt — RECOVERY PSYCHOLOGY trade — fails worst',
    candles: [
      { o: 103, h: 103.3, l: 102.5, c: 102.7 },
      { o: 102.7, h: 102.9, l: 101.0, c: 101.2 }, // looks like another setup
      { o: 101.2, h: 101.5, l: 100.0, c: 100.2 }, // 4th short — bigger size to "make it back"
      { o: 100.2, h: 100.5, l: 99.0, c: 99.2 }, // briefly green
      { o: 99.2, h: 102.5, l: 99.1, c: 102.3 }, // violent reversal
      { o: 102.3, h: 104.0, l: 102.2, c: 103.8 }, // stop hit huge
      { o: 103.8, h: 105.0, l: 103.7, c: 104.8 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 2, price: 99.7 }, direction: 'down', color: '#94a3b8', label: '#4 short — size up' },
      { type: 'arrow', at: { i: 5, price: 104.3 }, direction: 'up', color: '#ef4444', label: 'BIG STOP' },
      { type: 'badge', at: { i: 3, price: 99.5 }, text: 'tilted', color: '#ef4444' },
    ],
    verdict: { label: '4TH = WORST LOSS', type: 'bad' },
    caption: "After 3 losses you stop analyzing — you're trying to make it back. Bigger size, worse setup, biggest loss.",
  },
  {
    title: "TODAY'S FINAL TRADE — long into OBv resistance",
    candles: [
      { o: 100, h: 100.3, l: 99.0, c: 99.2 },
      { o: 99.2, h: 99.5, l: 98.0, c: 98.2 },
      { o: 98.2, h: 98.5, l: 97.0, c: 97.2 },
      { o: 97.2, h: 99.5, l: 97.1, c: 99.3 }, // bounce
      { o: 99.3, h: 100.5, l: 99.2, c: 100.3 },
      { o: 100.3, h: 101.5, l: 100.2, c: 101.3 },
      { o: 101.3, h: 102.0, l: 101.1, c: 101.9 }, // green close above 101.65 — long entry
      { o: 101.9, h: 102.0, l: 100.5, c: 100.7 }, // bear engulf hits OBv
      { o: 100.7, h: 100.8, l: 99.5, c: 99.7 },
      { o: 99.7, h: 100.0, l: 98.5, c: 98.7 },
    ],
    annotations: [
      { type: 'zone', topPrice: 102.2, bottomPrice: 101.7, color: 'rgba(239, 68, 68, 0.18)', label: 'OBv ZONE — institutional sellers' },
      { type: 'arrow', at: { i: 6, price: 102.5 }, direction: 'up', color: '#ef4444', label: 'LONG (after 3 losses)' },
      { type: 'arrow', at: { i: 8, price: 100.2 }, direction: 'down', color: '#ef4444', label: 'STOP $700' },
    ],
    verdict: { label: 'WHY THE RULE EXISTS', type: 'bad' },
    caption: 'After 3 short losses, switched to long INTO known OBv resistance. The Daily Reset Rule existed for this exact moment.',
  },
  {
    title: 'WALKING AWAY — no more losses, capital preserved',
    candles: [
      { o: 100, h: 101.5, l: 99.5, c: 101.3 },
      { o: 101.3, h: 102.5, l: 100.0, c: 100.2 },
      { o: 100.2, h: 101.0, l: 98.5, c: 98.7 },
      { o: 98.7, h: 100.5, l: 98.5, c: 100.3 },
      { o: 100.3, h: 101.5, l: 99.5, c: 99.7 },
      { o: 99.7, h: 100.5, l: 98.0, c: 98.2 },
      { o: 98.2, h: 99.0, l: 97.0, c: 97.2 },
      { o: 97.2, h: 98.5, l: 97.0, c: 98.3 },
    ],
    annotations: [
      { type: 'badge', at: { i: 0, price: 101.5 }, text: 'closed platform', color: '#22c55e' },
      { type: 'badge', at: { i: 4, price: 101.5 }, text: 'still chopping...', color: '#94a3b8' },
      { type: 'badge', at: { i: 7, price: 98.0 }, text: 'no more losses today', color: '#22c55e' },
    ],
    verdict: { label: 'WALKING AWAY = WINNING', type: 'good' },
    caption: 'After loss #3, closed the platform. Market kept being market. Tomorrow opens with capital intact.',
  },
];
