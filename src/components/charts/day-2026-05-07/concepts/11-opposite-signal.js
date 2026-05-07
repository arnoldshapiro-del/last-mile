// Teaching unit 11: Opposite signal fires while in a position
export const charts = [
  {
    title: 'SHORT position + BULLISH ENGULFING fires — EXIT NOW',
    candles: [
      { o: 100, h: 100.3, l: 99.5, c: 99.7 },
      { o: 99.7, h: 99.8, l: 98.5, c: 98.6 },
      { o: 98.6, h: 98.7, l: 97.5, c: 97.7 }, // short entry
      { o: 97.7, h: 97.8, l: 96.5, c: 96.7 },
      { o: 96.7, h: 96.9, l: 96.0, c: 96.5 },
      { o: 96.5, h: 96.8, l: 96.0, c: 96.2 }, // small red — looks fine
      { o: 96.2, h: 98.0, l: 96.1, c: 97.9 }, // BULLISH ENGULFING: engulfs prior red
      { o: 97.9, h: 99.5, l: 97.8, c: 99.3 }, // ignored = pain
      { o: 99.3, h: 100.5, l: 99.2, c: 100.3 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 2, price: 97.5 }, direction: 'down', color: '#94a3b8', label: 'short' },
      { type: 'badge', at: { i: 6, price: 98.0 }, text: 'BULL ENGULF', color: '#22c55e' },
      { type: 'arrow', at: { i: 6, price: 96.5 }, direction: 'up', color: '#fbbf24', label: 'EXIT HERE' },
    ],
    verdict: { label: 'EXIT — signal overrules bias', type: 'warn' },
    caption: 'Short position + bull engulfing means buyers overpowered sellers in this candle. Take it seriously.',
  },
  {
    title: 'LONG position + BEARISH ENGULFING — EXIT NOW',
    candles: [
      { o: 100, h: 100.5, l: 99.7, c: 100.3 },
      { o: 100.3, h: 101.0, l: 100.2, c: 100.9 }, // long entry
      { o: 100.9, h: 101.8, l: 100.8, c: 101.6 },
      { o: 101.6, h: 102.5, l: 101.5, c: 102.3 },
      { o: 102.3, h: 102.8, l: 102.0, c: 102.6 },
      { o: 102.6, h: 102.9, l: 102.0, c: 102.2 }, // small green
      { o: 102.2, h: 102.4, l: 100.5, c: 100.7 }, // BEARISH ENGULFING
      { o: 100.7, h: 100.8, l: 99.0, c: 99.2 }, // ignored = pain
      { o: 99.2, h: 99.4, l: 97.8, c: 97.9 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 1, price: 100.5 }, direction: 'up', color: '#94a3b8', label: 'long' },
      { type: 'badge', at: { i: 6, price: 102.4 }, text: 'BEAR ENGULF', color: '#ef4444' },
      { type: 'arrow', at: { i: 6, price: 100.4 }, direction: 'down', color: '#fbbf24', label: 'EXIT HERE' },
    ],
    verdict: { label: 'EXIT — sellers took control', type: 'warn' },
    caption: 'Long position + bear engulfing = sellers took the bar back. Tighten stop or exit on your terms.',
  },
  {
    title: 'LONG position + EVENING STAR — exit signal',
    candles: [
      { o: 100, h: 100.5, l: 99.7, c: 100.3 },
      { o: 100.3, h: 101.5, l: 100.2, c: 101.3 },
      { o: 101.3, h: 102.5, l: 101.2, c: 102.3 },
      { o: 102.3, h: 103.5, l: 102.2, c: 103.3 }, // 1st: large green
      { o: 103.5, h: 103.7, l: 103.3, c: 103.4 }, // 2nd: small body (gap up)
      { o: 103.2, h: 103.3, l: 101.5, c: 101.7 }, // 3rd: large red (gap down)
      { o: 101.7, h: 101.8, l: 100.0, c: 100.2 },
      { o: 100.2, h: 100.4, l: 98.5, c: 98.7 },
    ],
    annotations: [
      { type: 'badge', at: { i: 4, price: 104.0 }, text: 'EVENING STAR', color: '#ef4444' },
      { type: 'arrow', at: { i: 5, price: 102.0 }, direction: 'down', color: '#fbbf24', label: 'EXIT' },
    ],
    verdict: { label: 'EVENING STAR — top reversal', type: 'warn' },
    caption: 'Three-bar reversal: large green, small body, large red. If long here, exit immediately.',
  },
  {
    title: 'SHORT position + MORNING STAR — exit signal',
    candles: [
      { o: 100, h: 100.3, l: 99.5, c: 99.7 },
      { o: 99.7, h: 99.8, l: 98.7, c: 98.9 },
      { o: 98.9, h: 99.0, l: 97.7, c: 97.9 },
      { o: 97.9, h: 98.0, l: 96.5, c: 96.7 }, // 1st: large red
      { o: 96.5, h: 96.8, l: 96.4, c: 96.6 }, // 2nd: small body (gap down)
      { o: 96.8, h: 98.5, l: 96.7, c: 98.3 }, // 3rd: large green (gap up)
      { o: 98.3, h: 99.5, l: 98.2, c: 99.3 },
      { o: 99.3, h: 100.5, l: 99.2, c: 100.3 },
    ],
    annotations: [
      { type: 'badge', at: { i: 4, price: 95.5 }, text: 'MORNING STAR', color: '#22c55e' },
      { type: 'arrow', at: { i: 5, price: 96.5 }, direction: 'up', color: '#fbbf24', label: 'EXIT short' },
    ],
    verdict: { label: 'MORNING STAR — bottom reversal', type: 'warn' },
    caption: 'Mirror of evening star at a low. If short, the floor just formed. Exit before the rally compounds.',
  },
  {
    title: 'IGNORED the signal → losing trade compounds',
    candles: [
      { o: 100, h: 100.3, l: 99.5, c: 99.7 },
      { o: 99.7, h: 99.8, l: 98.5, c: 98.6 },
      { o: 98.6, h: 98.7, l: 97.5, c: 97.7 }, // short entry
      { o: 97.7, h: 99.5, l: 97.6, c: 99.3 }, // BULL ENGULFING — IGNORED
      { o: 99.3, h: 100.5, l: 99.2, c: 100.3 }, // pain
      { o: 100.3, h: 101.5, l: 100.2, c: 101.3 }, // pain
      { o: 101.3, h: 102.5, l: 101.2, c: 102.3 }, // stop hit
      { o: 102.3, h: 103.0, l: 102.2, c: 102.8 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 2, price: 97.5 }, direction: 'down', color: '#94a3b8', label: 'short' },
      { type: 'badge', at: { i: 3, price: 99.5 }, text: 'IGNORED', color: '#ef4444' },
      { type: 'arrow', at: { i: 6, price: 102.5 }, direction: 'down', color: '#ef4444', label: 'STOPPED' },
    ],
    verdict: { label: 'IGNORED → MAX LOSS', type: 'bad' },
    caption: 'Refusing to trust the contrary signal turns a 50¢ loss into a $4 loss. Listen the first time.',
  },
  {
    title: 'LISTENED to the signal → exited clean, saved capital',
    candles: [
      { o: 100, h: 100.3, l: 99.5, c: 99.7 },
      { o: 99.7, h: 99.8, l: 98.5, c: 98.6 },
      { o: 98.6, h: 98.7, l: 97.5, c: 97.7 }, // short entry
      { o: 97.7, h: 99.5, l: 97.6, c: 99.3 }, // BULL ENGULF — listened, exit
      { o: 99.3, h: 100.5, l: 99.2, c: 100.3 },
      { o: 100.3, h: 101.5, l: 100.2, c: 101.3 },
      { o: 101.3, h: 102.5, l: 101.2, c: 102.3 },
      { o: 102.3, h: 103.0, l: 102.2, c: 102.8 },
    ],
    annotations: [
      { type: 'arrow', at: { i: 2, price: 97.5 }, direction: 'down', color: '#94a3b8', label: 'short' },
      { type: 'badge', at: { i: 3, price: 99.5 }, text: 'BULL ENGULF', color: '#22c55e' },
      { type: 'arrow', at: { i: 3, price: 97.5 }, direction: 'up', color: '#22c55e', label: 'EXITED' },
    ],
    verdict: { label: 'LISTENED — SAVED $3.5', type: 'good' },
    caption: 'Closed the short on the bull engulfing. Same trade, dramatically different outcome from "ignore-and-hope."',
  },
];
