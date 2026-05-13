// Teaching unit 5: Success rates — pattern alone vs pattern + context.
export const charts = [
  {
    title: 'Pattern WITHOUT context — sub-50% (a coin flip)',
    candles: [
      { o: 105, h: 105.5, l: 104, c: 104.5 },
      { o: 104.5, h: 105, l: 103.5, c: 104 },
      { o: 104, h: 104.5, l: 102.5, c: 103 },
      { o: 103, h: 103.2, l: 102, c: 102.5 },
      { o: 102.5, h: 102.8, l: 102, c: 102.4 },
      { o: 102.4, h: 104, l: 102, c: 103.8 },
      { o: 103.8, h: 104.5, l: 103, c: 103.5 },
      { o: 103.5, h: 104, l: 102.8, c: 103 },
      { o: 103, h: 103.5, l: 102.5, c: 103.2 },
    ],
    annotations: [
      { type: 'badge', at: { i: 3, price: 103 }, color: '#FBBF24', text: 'MStar' },
      { type: 'arrow', at: { i: 5, price: 103.8 }, direction: 'up', color: '#FF3D5A', label: 'no follow-through' },
    ],
    verdict: { label: 'Same shape — but in chop, no support, no volume', type: 'bad' },
    caption: 'A Morning Star in mid-air, in chop, with no support beneath and no volume expansion. The pattern is technically there but the context makes it sub-50%.',
  },
  {
    title: 'Pattern WITH context — 75-85% (real edge)',
    candles: [
      { o: 115, h: 116, l: 113, c: 113.5 },
      { o: 113.5, h: 114, l: 109, c: 109.5 },
      { o: 109.5, h: 110, l: 105, c: 105.5 },
      { o: 105.5, h: 106, l: 102, c: 102.5 },
      { o: 102.5, h: 102.8, l: 100, c: 100.5 },
      { o: 100.5, h: 101, l: 100, c: 100.3 },
      { o: 100.3, h: 106, l: 100, c: 105.7 },
      { o: 105.7, h: 109, l: 105.5, c: 108.5 },
      { o: 108.5, h: 112, l: 108, c: 111.5 },
    ],
    annotations: [
      { type: 'level', price: 100, color: '#00D9A0', label: 'KEY support + 200 EMA' },
      { type: 'badge', at: { i: 5, price: 100.3 }, color: '#FBBF24', text: 'MStar' },
      { type: 'arrow', at: { i: 7, price: 108.5 }, direction: 'down', color: '#00D9A0', label: 'strong follow-through' },
    ],
    verdict: { label: 'Same shape — at support, with volume, after real downtrend', type: 'good' },
    caption: 'Identical Morning Star, but at a major support level, after an extended decline, with volume expansion on Candle 3. Now you have edge. Same pattern, completely different trade.',
  },
];
