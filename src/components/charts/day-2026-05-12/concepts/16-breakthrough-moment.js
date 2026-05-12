// Teaching unit 16: The breakthrough — same charts, different ceiling.
export const charts = [
  {
    title: 'The OLD ceiling — caps before the move even confirms',
    candles: [
      { o: 7377, h: 7378, l: 7376.5, c: 7377.5 },
      { o: 7377.5, h: 7379, l: 7377, c: 7378.5 },
      { o: 7378.5, h: 7382, l: 7378, c: 7381.5 },
      { o: 7381.5, h: 7385, l: 7381, c: 7384.5 },
      { o: 7384.5, h: 7388, l: 7384, c: 7387.5 },
      { o: 7387.5, h: 7392, l: 7387, c: 7391.5 },
      { o: 7391.5, h: 7400, l: 7391, c: 7399.5 },
      { o: 7399.5, h: 7407, l: 7399, c: 7406.5 },
      { o: 7406.5, h: 7412, l: 7406, c: 7411.5 },
    ],
    annotations: [
      { type: 'level', price: 7389.75, color: '#FF3D5A', label: 'OLD T4 ceiling — flat here' },
      { type: 'arrow', at: { i: 4, price: 7387.5 }, direction: 'up', color: '#FF3D5A', label: 'old you exits' },
      { type: 'arrow', at: { i: 8, price: 7411.5 }, direction: 'down', color: '#FF3D5A', label: 'market keeps going' },
    ],
    verdict: { label: '5.5 years of capped winners — this is what kept it that way', type: 'bad' },
    caption: 'The old ceiling at 7389.75 closed the entire position before the neckline at 7395 broke. The trade you correctly read ran to 7411.5 — without you. This was every winner for 5.5 years.',
  },
  {
    title: 'The NEW ceiling — let the runner run',
    candles: [
      { o: 7377, h: 7378, l: 7376.5, c: 7377.5 },
      { o: 7377.5, h: 7379, l: 7377, c: 7378.5 },
      { o: 7378.5, h: 7382, l: 7378, c: 7381.5 },
      { o: 7381.5, h: 7385, l: 7381, c: 7384.5 },
      { o: 7384.5, h: 7388, l: 7384, c: 7387.5 },
      { o: 7387.5, h: 7392, l: 7387, c: 7391.5 },
      { o: 7391.5, h: 7400, l: 7391, c: 7399.5 },
      { o: 7399.5, h: 7407, l: 7399, c: 7406.5 },
      { o: 7406.5, h: 7412, l: 7406, c: 7411.5 },
    ],
    annotations: [
      { type: 'level', price: 7381, color: '#FBBF24', label: 'T1 +1R fill' },
      { type: 'level', price: 7384.75, color: '#FBBF24', label: 'T2 +2R fill' },
      { type: 'level', price: 7392.25, color: '#00D9A0', label: 'T3 +4R fill' },
      { type: 'level', price: 7407.25, color: '#a78bfa', label: 'T4 +8R RUNNER fill' },
      { type: 'arrow', at: { i: 8, price: 7411.5 }, direction: 'down', color: '#00D9A0', label: '+$1,227 sim' },
    ],
    verdict: { label: 'Same chart, same hands, same brain. Different ceiling.', type: 'good' },
    caption: 'Same setup type Arnie has read for 5.5 years. The ONLY change: TP ladder uncapped to 8R. Result: T3 and T4 both filled. +$1,227 sim session. The breakthrough was in the template.',
  },
  {
    title: 'The mindset shift — write this on a sticky note',
    candles: [
      { o: 100, h: 100.1, l: 99.9, c: 100 },
    ],
    annotations: [
      { type: 'level', price: 100, color: '#FBBF24', label: 'The market decides how far it runs' },
      { type: 'level', price: 99.5, color: '#00D9A0', label: 'My job is to not get in its way', dash: true },
    ],
    verdict: { label: 'Lock the discipline into the template — not heroic willpower', type: 'good' },
    caption: 'Save the templates as M2K_1R_2R_4R_8R_RUNNER and MES_1R_2R_4R_8R_RUNNER. The discipline is now mechanical. The market does its job. You stay out of its way.',
  },
];
