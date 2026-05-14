// Teaching unit 16: The platform receipt — the position box is truth, never restructure a live ATM.
export const charts = [
  {
    title: '16 minus 12 is not missing — Target 1 filled',
    candles: [
      { o: 2868.2, h: 2870.0, l: 2868.0, c: 2869.5 },
      { o: 2869.5, h: 2871.0, l: 2869.0, c: 2870.5 },
      { o: 2870.5, h: 2872.8, l: 2870.0, c: 2872.6 },
      { o: 2872.6, h: 2874.0, l: 2872.0, c: 2873.5 },
    ],
    annotations: [
      { type: 'level', price: 2872.6, color: '#00D9A0', label: 'Target 1 filled — 4 booked' },
      { type: 'level', price: 2871.0, color: '#4A9EFF', dash: true, label: 'Stop 4 → break-even' },
      { type: 'badge', at: { i: 3, price: 2874.0 }, color: '#00D9A0', text: 'POSITION = 12' },
    ],
    verdict: { label: 'Nothing vanished — the ATM worked exactly right', type: 'good' },
    caption: '16 minus 12 = the 4 that Target 1 booked. The stop ratcheted to break-even. By design.',
  },
  {
    title: 'Splitting brackets re-dices the position',
    candles: [
      { o: 2872.6, h: 2874.0, l: 2872.0, c: 2873.5 },
      { o: 2873.5, h: 2874.5, l: 2873.0, c: 2874.3 },
      { o: 2874.3, h: 2875.2, l: 2873.5, c: 2874.1 },
    ],
    annotations: [
      { type: 'level', price: 2873.3, color: '#FFB44A', label: 'Stop 4(2) + Stop 5(1) + Stop 6(1) = 4 shown' },
      { type: 'badge', at: { i: 2, price: 2875.2 }, color: '#00D9A0', text: 'POSITION = 8' },
    ],
    verdict: { label: 'Re-diced across stacked brackets — still 8', type: 'warn' },
    caption: 'Right-clicking to add targets re-slices the contracts. Labels look unfamiliar — none are lost.',
  },
  {
    title: 'Position box + Orders tab = truth',
    candles: [
      { o: 2872.0, h: 2873.0, l: 2871.5, c: 2872.6 },
      { o: 2872.6, h: 2874.5, l: 2872.0, c: 2874.0 },
      { o: 2874.0, h: 2875.5, l: 2873.5, c: 2875.0 },
    ],
    annotations: [
      { type: 'badge', at: { i: 0, price: 2873.5 }, color: '#00D9A0', text: 'POSITION BOX' },
      { type: 'badge', at: { i: 2, price: 2876.0 }, color: '#00D9A0', text: 'ORDERS TAB' },
      { type: 'arrow', at: { i: 1, price: 2874.0 }, direction: 'up', color: '#00D9A0', label: 'the receipt wins' },
    ],
    verdict: { label: 'The chart is a picture — the Orders tab is the receipt', type: 'good' },
    caption: 'Count working stop quantities in the Orders tab — they total your real position. Always.',
  },
  {
    title: 'Cannot read it in 2 seconds? FLATTEN',
    candles: [
      { o: 2874.0, h: 2875.0, l: 2873.0, c: 2874.5 },
      { o: 2874.5, h: 2875.5, l: 2873.5, c: 2874.0 },
      { o: 2874.0, h: 2874.5, l: 2872.0, c: 2872.5 },
    ],
    annotations: [
      { type: 'badge', at: { i: 1, price: 2876.5 }, color: '#FF3D5A', text: 'UNKNOWN STATE' },
      { type: 'arrow', at: { i: 2, price: 2872.5 }, direction: 'down', color: '#FF3D5A', label: 'FLATTEN — get to a known state' },
    ],
    verdict: { label: 'Flat is a known state — never sit in an unknown one', type: 'bad' },
    caption: 'If you cannot answer "how many contracts, where are my stops" in 2 seconds, the next click is FLATTEN.',
  },
];
