// Teaching unit 11: The Bear Flag Re-entry Framework.
// Concept — bounces become potential re-entries only at specific kinds of levels.
export const charts = [
  {
    title: 'Best re-entry zone — BROKEN SUPPORT flipping to RESISTANCE',
    candles: [
      { o: 102.0, h: 102.3, l: 101.6, c: 101.7 },
      { o: 101.7, h: 101.9, l: 100.4, c: 100.5 },
      { o: 100.5, h: 100.7, l: 99.4, c: 99.5 },
      { o: 99.5, h: 99.6, l: 98.4, c: 98.5 },
      { o: 98.5, h: 98.6, l: 97.4, c: 97.5 },       // broke support 99.5 → now resistance
      { o: 97.5, h: 97.7, l: 96.4, c: 96.5 },
      { o: 96.5, h: 97.0, l: 96.3, c: 96.9 },
      { o: 96.9, h: 97.6, l: 96.8, c: 97.5 },       // bouncing toward broken support
      { o: 97.5, h: 97.7, l: 97.3, c: 97.4 },       // testing broken support FROM BELOW
      { o: 97.4, h: 97.6, l: 96.8, c: 96.9 },       // rejected — confirmed resistance
      { o: 96.9, h: 97.0, l: 95.6, c: 95.7 },       // continuation down
    ],
    annotations: [
      { type: 'level', price: 97.5, color: '#fbbf24', label: 'Broken support → resistance' },
      { type: 'arrow', at: { i: 9, price: 97.5 }, direction: 'down', color: '#22c55e', label: 'Re-entry — bearish candle confirms' },
      { type: 'badge', at: { i: 10, price: 95.4 }, text: 'CLEANEST RE-ENTRY', color: '#22c55e' },
    ],
    verdict: { label: 'BEST RE-ENTRY', type: 'good' },
    caption: 'Price returns to broken support from below, rejects, prints bearish confirmation, continues down. Cleanest re-entry zone.',
  },
  {
    title: 'Re-entry at 20 EMA from below',
    candles: [
      { o: 102.0, h: 102.3, l: 101.6, c: 101.7 },
      { o: 101.7, h: 101.9, l: 100.4, c: 100.5 },
      { o: 100.5, h: 100.7, l: 99.4, c: 99.5 },
      { o: 99.5, h: 99.6, l: 98.4, c: 98.5 },
      { o: 98.5, h: 98.6, l: 97.4, c: 97.5 },
      { o: 97.5, h: 97.7, l: 96.4, c: 96.5 },
      { o: 96.5, h: 97.4, l: 96.4, c: 97.3 },       // bouncing toward 20 EMA
      { o: 97.3, h: 97.6, l: 97.2, c: 97.5 },
      { o: 97.5, h: 97.7, l: 97.3, c: 97.4 },       // at 20 EMA — rejection
      { o: 97.4, h: 97.5, l: 96.6, c: 96.7 },
    ],
    annotations: [
      { type: 'level', price: 97.5, color: '#a78bfa', label: '20 EMA — from below' },
      { type: 'arrow', at: { i: 8, price: 97.4 }, direction: 'down', color: '#22c55e', label: 'Re-entry at EMA rejection' },
    ],
    verdict: { label: 'VALID re-entry', type: 'good' },
    caption: 'Trending shorts: the falling 20 EMA from below is a clean re-entry zone. Watch for rejection candle + declining volume.',
  },
  {
    title: 'Re-entry at prior swing low that just broke',
    candles: [
      { o: 102.0, h: 102.3, l: 101.6, c: 101.7 },
      { o: 101.7, h: 101.9, l: 100.4, c: 100.5 },
      { o: 100.5, h: 100.7, l: 99.4, c: 99.5 },     // prior swing low #1
      { o: 99.5, h: 100.3, l: 99.4, c: 100.2 },     // bounce
      { o: 100.2, h: 100.4, l: 99.0, c: 99.1 },     // broke prior swing low — flip
      { o: 99.1, h: 99.3, l: 97.9, c: 98.0 },
      { o: 98.0, h: 98.5, l: 97.9, c: 98.4 },
      { o: 98.4, h: 99.2, l: 98.3, c: 99.1 },       // bouncing back to broken level
      { o: 99.1, h: 99.3, l: 98.8, c: 98.9 },       // rejection
      { o: 98.9, h: 99.0, l: 97.6, c: 97.7 },
    ],
    annotations: [
      { type: 'level', price: 99.4, color: '#fbbf24', label: 'Prior swing low — now resistance' },
      { type: 'arrow', at: { i: 8, price: 98.8 }, direction: 'down', color: '#22c55e', label: 'Re-entry' },
    ],
    verdict: { label: 'VALID re-entry', type: 'good' },
    caption: 'Broken swing low becomes resistance. Bounces back into it are sell-signals when paired with confirmation.',
  },
  {
    title: 'WRONG re-entry — chasing without bearish confirmation candle',
    candles: [
      { o: 102.0, h: 102.3, l: 101.6, c: 101.7 },
      { o: 101.7, h: 101.9, l: 100.4, c: 100.5 },
      { o: 100.5, h: 100.7, l: 99.4, c: 99.5 },
      { o: 99.5, h: 99.6, l: 98.4, c: 98.5 },
      { o: 98.5, h: 99.4, l: 98.4, c: 99.3 },
      { o: 99.3, h: 100.0, l: 99.2, c: 99.9 },      // approaching prior support
      { o: 99.9, h: 100.4, l: 99.8, c: 100.3 },     // re-entered HERE — too early, no rejection
      { o: 100.3, h: 100.8, l: 100.2, c: 100.7 },   // chart kept going up — stopped
    ],
    annotations: [
      { type: 'arrow', at: { i: 6, price: 99.7 }, direction: 'down', color: '#ef4444', label: 'Re-entered too early' },
      { type: 'badge', at: { i: 7, price: 101.3 }, text: 'No rejection — STOPPED', color: '#ef4444' },
    ],
    verdict: { label: 'CHASED — bad', type: 'bad' },
    caption: 'You must wait for the bearish confirmation candle at the level. Re-entering on the approach is chasing.',
  },
  {
    title: 'Volume DECLINING on bounce — re-entry approved',
    candles: [
      { o: 102.0, h: 102.3, l: 101.6, c: 101.7 },
      { o: 101.7, h: 101.9, l: 100.4, c: 100.5 },
      { o: 100.5, h: 100.7, l: 99.4, c: 99.5 },
      { o: 99.5, h: 99.6, l: 98.4, c: 98.5 },
      { o: 98.5, h: 99.0, l: 98.4, c: 98.9 },      // small green — vol low
      { o: 98.9, h: 99.3, l: 98.8, c: 99.2 },      // smaller green
      { o: 99.2, h: 99.5, l: 99.1, c: 99.4 },      // smallest — declining
      { o: 99.4, h: 99.5, l: 98.5, c: 98.6 },      // sellers return
    ],
    annotations: [
      { type: 'zone', topPrice: 99.5, bottomPrice: 98.4, color: 'rgba(167, 139, 250, 0.08)', label: 'Declining-volume bounce' },
      { type: 'arrow', at: { i: 7, price: 98.5 }, direction: 'down', color: '#22c55e', label: 'Re-entry — bears reload' },
    ],
    verdict: { label: 'VALID', type: 'good' },
    caption: 'Each bounce bar smaller than the last = buyers exhausted. Re-entry candle is the first close below the prior bar low.',
  },
  {
    title: 'Smaller size on re-entry — do NOT give back what you just made',
    candles: [
      { o: 102.0, h: 102.3, l: 101.6, c: 101.7 },
      { o: 101.7, h: 101.9, l: 100.4, c: 100.5 },
      { o: 100.5, h: 100.7, l: 99.4, c: 99.5 },
      { o: 99.5, h: 99.6, l: 98.4, c: 98.5 },
      { o: 98.5, h: 99.0, l: 98.4, c: 98.9 },
      { o: 98.9, h: 99.4, l: 98.8, c: 99.3 },
      { o: 99.3, h: 99.5, l: 98.4, c: 98.5 },      // re-entry — half size
      { o: 98.5, h: 98.6, l: 97.5, c: 97.6 },
    ],
    annotations: [
      { type: 'badge', at: { i: 6, price: 99.7 }, text: 'Re-entry — half size', color: '#22c55e' },
      { type: 'arrow', at: { i: 7, price: 97.4 }, direction: 'down', color: '#22c55e', label: 'Smaller risk, bonus profit' },
    ],
    verdict: { label: 'PROTECT GAINS', type: 'good' },
    caption: 'Re-entries are bonus, not the main trade. Half the size of initial entry. The first short paid the rent; the re-entry is extra.',
  },
];
