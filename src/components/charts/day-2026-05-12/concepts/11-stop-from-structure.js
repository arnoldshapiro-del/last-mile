// Teaching unit 11: Stop from structure. Size from wallet.
export const charts = [
  {
    title: 'Step 1 — Find the structural invalidation point',
    candles: [
      { o: 2815, h: 2816, l: 2814.5, c: 2815.5 },
      { o: 2815.5, h: 2816.5, l: 2815, c: 2816 },
      { o: 2816, h: 2817, l: 2815.5, c: 2816.5 },
      { o: 2816.5, h: 2817, l: 2814, c: 2814.5 },
      { o: 2814.5, h: 2815, l: 2811, c: 2811.5 },
      { o: 2811.5, h: 2812, l: 2810, c: 2810.5 },
      { o: 2810.5, h: 2815, l: 2810, c: 2814.5 },
      { o: 2814.5, h: 2816, l: 2814, c: 2815.5 },
    ],
    annotations: [
      { type: 'pivot', at: { i: 5, side: 'low' }, color: '#FF3D5A', label: 'Swing low — invalidation' },
      { type: 'level', price: 2810, color: '#FF3D5A', label: 'Wick low 2810' },
    ],
    verdict: { label: 'Stop goes 2-4 ticks BELOW this wick', type: 'good' },
    caption: 'The structural invalidation is the most recent confirmed swing low (2 candles each side with higher lows). On a long trade, this is the "I was wrong" line.',
  },
  {
    title: 'Step 2 — Add 2-4 ticks of buffer below the WICK',
    candles: [
      { o: 2811, h: 2812, l: 2810.5, c: 2811.5 },
      { o: 2811.5, h: 2812, l: 2810, c: 2810.2 },
      { o: 2810.2, h: 2810.5, l: 2810, c: 2810.3 },
      { o: 2810.3, h: 2813, l: 2810, c: 2812.5 },
      { o: 2812.5, h: 2815, l: 2812, c: 2814.5 },
    ],
    annotations: [
      { type: 'level', price: 2810, color: '#FF3D5A', label: 'Wick low 2810' },
      { type: 'level', price: 2809.7, color: '#FBBF24', label: 'Structural STOP 2809.7 (3-tick buffer)' },
    ],
    verdict: { label: '3-tick buffer protects against stop-hunt wicks', type: 'good' },
    caption: 'Stops 1-2 ticks below the wick get hit by algorithmic stop-hunts. A 3-4 tick buffer keeps the stop OUTSIDE the noise band while remaining structurally tight.',
  },
  {
    title: 'Step 3-5 — Size FLEXES, stop STAYS',
    candles: [
      { o: 2815, h: 2816, l: 2814.5, c: 2815.5 },
      { o: 2815.5, h: 2816, l: 2815, c: 2815.6 },
      { o: 2815.6, h: 2816, l: 2814.5, c: 2815.8 },
      { o: 2815.8, h: 2816.5, l: 2815.5, c: 2816.2 },
    ],
    annotations: [
      { type: 'level', price: 2815.6, color: '#00D9A0', label: 'Entry 2815.6' },
      { type: 'level', price: 2809.7, color: '#FF3D5A', label: 'Stop 2809.7 (struct)' },
      { type: 'level', price: 2813.4, color: '#FBBF24', label: 'WRONG — tightened to fit wallet', dash: true },
    ],
    verdict: { label: 'Reduce contracts. Never tighten the stop.', type: 'good' },
    caption: 'If 12 contracts × 5.9 points × $5 = $354 exceeds your $200 risk max, trade 6 contracts at the SAME stop ($177 risk). Position size flexes — stops do not.',
  },
  {
    title: 'The tight-stop death trap — what kills traders',
    candles: [
      { o: 2815, h: 2816, l: 2814, c: 2814.5 },
      { o: 2814.5, h: 2815, l: 2813, c: 2813.5 },
      { o: 2813.5, h: 2814, l: 2812.5, c: 2813.2 },
      { o: 2813.2, h: 2814, l: 2812, c: 2813.5 },
      { o: 2813.5, h: 2816, l: 2813, c: 2815.5 },
      { o: 2815.5, h: 2818, l: 2815, c: 2817.5 },
      { o: 2817.5, h: 2820, l: 2817, c: 2819.5 },
    ],
    annotations: [
      { type: 'level', price: 2813.4, color: '#FF3D5A', label: 'TIGHT stop 2813.4 — HIT' },
      { type: 'arrow', at: { i: 3, price: 2812 }, direction: 'up', color: '#FF3D5A', label: 'stopped' },
      { type: 'arrow', at: { i: 6, price: 2819.5 }, direction: 'down', color: '#00D9A0', label: 'move ran without you' },
    ],
    verdict: { label: 'Tight stop gets hit on noise then watches the move run', type: 'bad' },
    caption: 'The expensive lesson: a stop tightened to fit a wallet gets knocked out by normal price wiggle. Then the same trade idea runs to target — without you in it.',
  },
];
