// Teaching unit 6: Stop management has TWO phases.
// Setup phase: widening to structure is OK. Management phase: only tighten/trail.
export const charts = [
  {
    title: 'SETUP PHASE (first ~30 sec) — widening to structure is OK',
    candles: [
      { o: 2846, h: 2848, l: 2842, c: 2843 },
      { o: 2843, h: 2845, l: 2840, c: 2841 },
      { o: 2841, h: 2843, l: 2839, c: 2842 },
      { o: 2842, h: 2844, l: 2840, c: 2843 },
    ],
    annotations: [
      { type: 'level', price: 2848, color: '#00D9A0', label: 'TRUE swing wick (2848) — structural stop' },
      { type: 'level', price: 2846, color: '#FFB44A', dash: true, label: 'INITIAL stop (2846 — at body)' },
      { type: 'arrow', at: { i: 0, price: 2843 }, direction: 'down', color: '#888', label: 'entry' },
      { type: 'badge', at: { i: 1, price: 2847 }, text: 'within 30s: realize stop too tight → widen to 2848', color: '#00D9A0' },
    ],
    verdict: { label: 'Structurally justified widen = correct', type: 'good' },
    caption: 'Entered, then within 30 seconds noticed the swing wick was 2 ticks above the body. Widened the stop to the wick — structurally correct. The structure was already there; this is just placing the stop where the thesis actually dies.',
  },
  {
    title: 'MANAGEMENT PHASE (after price moves) — NEVER widen',
    candles: [
      { o: 2843, h: 2844, l: 2840, c: 2841 },
      { o: 2841, h: 2842, l: 2837, c: 2838 },
      { o: 2838, h: 2839, l: 2833, c: 2834 },
      { o: 2834, h: 2836, l: 2828, c: 2830 },
      { o: 2830, h: 2836, l: 2829, c: 2835 },
      { o: 2835, h: 2841, l: 2834, c: 2840 },
      { o: 2840, h: 2845, l: 2839, c: 2844 },
      { o: 2844, h: 2847, l: 2841, c: 2842 },
    ],
    annotations: [
      { type: 'level', price: 2848, color: '#00D9A0', label: 'structural stop (locked from setup phase)' },
      { type: 'level', price: 2828, color: '#00D9A0', dash: true, label: 'T1 (hit)' },
      { type: 'badge', at: { i: 3, price: 2826 }, text: 'T1 hit — pullback starts', color: '#00D9A0' },
      { type: 'arrow', at: { i: 7, price: 2847 }, direction: 'up', color: '#FF3D5A', label: 'tempted to widen — DO NOT' },
      { type: 'level', price: 2849, color: '#FF3D5A', dash: true, label: 'NEVER widen here — that\'s the trade trying to kill you' },
    ],
    verdict: { label: 'Hold the structural stop — let it work', type: 'good' },
    caption: 'Price moved. Pullback now threatens the stop. Self-check: am I widening because structure changed, or because I don\'t want to take this loss? Emotion = don\'t touch. Hold the stop. If it gets hit, that\'s the thesis dying.',
  },
];
