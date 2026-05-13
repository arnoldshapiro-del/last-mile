// Teaching unit 10: Four levels of confirmation ranked.
export const charts = [
  {
    title: 'LEVEL 1 — Trendline break alone (weakest)',
    candles: [
      { o: 2840, h: 2841, l: 2839, c: 2839.5 },
      { o: 2839.5, h: 2840, l: 2838, c: 2838.5 },
      { o: 2838.5, h: 2839, l: 2837.5, c: 2837.8 },
      { o: 2837.8, h: 2838.5, l: 2837, c: 2837.5 },
    ],
    annotations: [
      { type: 'trendline', from: { i: 0, price: 2839 }, to: { i: 3, price: 2837.5 }, color: '#94a3b8', label: 'Internal TL broken', dash: true },
      { type: 'badge', at: { i: 3, price: 2838 }, color: '#FF3D5A', text: 'L1 — fast + WEAK' },
    ],
    verdict: { label: 'Fast trigger, low probability', type: 'bad' },
    caption: 'Trendline break alone fires fast and is wrong often. Most retail traders camp here. The math is brutal — fastest signal AND lowest probability is the worst trade-off.',
  },
  {
    title: 'LEVEL 2 — Wick break (NEVER use)',
    candles: [
      { o: 2837, h: 2837.5, l: 2836, c: 2836.5 },
      { o: 2836.5, h: 2837, l: 2835.5, c: 2836.8 },
      { o: 2836.8, h: 2837.5, l: 2836.5, c: 2837.2 },
    ],
    annotations: [
      { type: 'level', price: 2836.2, color: '#FBBF24', label: 'Neckline 2836.2', dash: true },
      { type: 'badge', at: { i: 1, price: 2835.3 }, color: '#FF3D5A', text: 'WICK broke' },
      { type: 'arrow', at: { i: 2, price: 2837.5 }, direction: 'up', color: '#00D9A0', label: 'Recovered' },
    ],
    verdict: { label: 'False-break risk — DON\'T USE', type: 'bad' },
    caption: 'A wick poke below the neckline that doesn\'t close below is a FAKE break. Waiting for wicks kills R:R AND adds false-break risk. Worst of both worlds. Never use this level.',
  },
  {
    title: 'LEVEL 3 — Body CLOSE beyond neckline (sweet spot)',
    candles: [
      { o: 2837, h: 2837.5, l: 2836.5, c: 2836.8 },
      { o: 2836.8, h: 2837, l: 2836, c: 2836.3 },
      { o: 2836.3, h: 2836.5, l: 2834, c: 2834.5 },
      { o: 2834.5, h: 2835, l: 2832, c: 2832.5 },
    ],
    annotations: [
      { type: 'level', price: 2836.2, color: '#FBBF24', label: 'Neckline 2836.2', dash: true },
      { type: 'arrow', at: { i: 2, price: 2834.5 }, direction: 'down', color: '#00D9A0', label: 'L3 — CLOSE below = TRIGGER' },
    ],
    verdict: { label: 'Sweet spot — this is THE trigger', type: 'good' },
    caption: 'A body CLOSE beyond the neckline is the sweet spot. Trader knows the market actually traded below 2836.2 for a full bar — not just touched it. This is the correct trigger.',
  },
  {
    title: 'LEVEL 4 — Close + retest (highest probability, often missed)',
    candles: [
      { o: 2837, h: 2837.5, l: 2836.5, c: 2836.8 },
      { o: 2836.8, h: 2837, l: 2834, c: 2834.5 },
      { o: 2834.5, h: 2836.5, l: 2834, c: 2836.2 },
      { o: 2836.2, h: 2836.4, l: 2835.5, c: 2835.8 },
      { o: 2835.8, h: 2836, l: 2833, c: 2833.5 },
      { o: 2833.5, h: 2834, l: 2831, c: 2831.5 },
    ],
    annotations: [
      { type: 'level', price: 2836.2, color: '#FBBF24', label: 'Neckline = former support, now resistance', dash: true },
      { type: 'arrow', at: { i: 1, price: 2834.5 }, direction: 'down', color: '#94a3b8', label: 'L3 trigger' },
      { type: 'arrow', at: { i: 3, price: 2836.2 }, direction: 'down', color: '#00D9A0', label: 'L4 RETEST entry' },
    ],
    verdict: { label: 'Highest probability — but often you miss it', type: 'good' },
    caption: 'Level 4: close below, then retest from below. Former support = resistance. The cleanest entry of all — but you miss trades waiting for it. Pull trigger on L3 OR wait for L4.',
  },
];
