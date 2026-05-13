// Teaching unit 3: Break-even stops do their job even when trade closes flat.
export const charts = [
  {
    title: 'Stage 1 — Entry with structural stop',
    candles: [
      { o: 2829, h: 2829.5, l: 2828, c: 2828.5 },
      { o: 2828.5, h: 2832, l: 2828, c: 2831.5 },
      { o: 2831.5, h: 2833, l: 2831, c: 2832.5 },
      { o: 2832.5, h: 2834, l: 2832, c: 2833.5 },
    ],
    annotations: [
      { type: 'level', price: 2832, color: '#00D9A0', label: 'Entry 2832' },
      { type: 'level', price: 2827.5, color: '#FF3D5A', label: 'Structural stop 2827.5', dash: true },
      { type: 'arrow', at: { i: 1, price: 2832 }, direction: 'up', color: '#00D9A0', label: 'IN' },
    ],
    verdict: { label: '4.5 point risk — structural', type: 'good' },
    caption: 'Entry on the breakout. Stop placed 4.5 points below at the structural invalidation — the swing low that made the W. This is the only stop allowed to fire on its own.',
  },
  {
    title: 'Stage 2 — Partials fill, stop moves to BE',
    candles: [
      { o: 2832, h: 2834, l: 2832, c: 2833.5 },
      { o: 2833.5, h: 2837, l: 2833, c: 2836.5 },
      { o: 2836.5, h: 2839, l: 2836, c: 2838.5 },
      { o: 2838.5, h: 2839, l: 2837, c: 2837.5 },
    ],
    annotations: [
      { type: 'level', price: 2832, color: '#FBBF24', label: 'BE stop — was 2827.5', dash: true },
      { type: 'arrow', at: { i: 1, price: 2836.5 }, direction: 'up', color: '#00D9A0', label: 'T1 fill' },
      { type: 'arrow', at: { i: 2, price: 2838.5 }, direction: 'up', color: '#00D9A0', label: 'T2 fill' },
    ],
    verdict: { label: 'Risk eliminated — runner is free money', type: 'good' },
    caption: 'Once T1 + T2 fill, the stop ratchets up to break-even. From this moment forward the trade can only pay or pay nothing. It can no longer cost.',
  },
  {
    title: 'Stage 3 — BE stop fires, trade closes flat',
    candles: [
      { o: 2837.5, h: 2838, l: 2836, c: 2836.5 },
      { o: 2836.5, h: 2837, l: 2834, c: 2834.5 },
      { o: 2834.5, h: 2835, l: 2832.5, c: 2833 },
      { o: 2833, h: 2833.5, l: 2831.8, c: 2832 },
    ],
    annotations: [
      { type: 'level', price: 2832, color: '#FBBF24', label: 'BE stop 2832 — HIT', dash: true },
      { type: 'arrow', at: { i: 3, price: 2832 }, direction: 'down', color: '#FBBF24', label: 'BE EXIT' },
    ],
    verdict: { label: 'Flat exit — system worked', type: 'good' },
    caption: 'BE stop fires, runner exits at break-even. Trade closed FLAT — and that is a successful execution. The discipline ran on rails. Process > outcome on a single trade.',
  },
  {
    title: '"I\'ll probably stop out" — two meanings, two outcomes',
    candles: [
      { o: 2836, h: 2837, l: 2835, c: 2835.5 },
      { o: 2835.5, h: 2836, l: 2834, c: 2834.5 },
      { o: 2834.5, h: 2835, l: 2833, c: 2833.5 },
      { o: 2833.5, h: 2834, l: 2832.2, c: 2832.5 },
    ],
    annotations: [
      { type: 'badge', at: { i: 1, price: 2837 }, color: '#FF3D5A', text: '"I\'ll stop out" — MANUAL = nerves' },
      { type: 'badge', at: { i: 2, price: 2835.5 }, color: '#00D9A0', text: '"I\'ll GET stopped" — passive = healthy' },
      { type: 'level', price: 2832, color: '#FBBF24', label: 'BE stop 2832', dash: true },
    ],
    verdict: { label: 'Wording dictates action', type: 'warn' },
    caption: 'The phrase "I\'ll probably stop out" hides two opposite actions. ACTIVE override = bad. PASSIVE acceptance of BE doing its job = good. Same dollar outcome, different psychology.',
  },
];
