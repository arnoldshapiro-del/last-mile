
// Double Top — pattern_type concept gallery
export const charts = [
  {
    title: 'TEXTBOOK DOUBLE TOP — twin peaks, neckline break',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.0, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 }, // peak 1
      { o: 104.4, h: 104.6, l: 102.5, c: 102.6 }, // pullback to neckline area
      { o: 102.6, h: 103.5, l: 102.5, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 }, // peak 2 = peak 1
      { o: 104.4, h: 104.5, l: 103.0, c: 103.1 }, // neckline break starts
      { o: 103.1, h: 103.2, l: 101.5, c: 101.6 }, // neckline broken
    ],
    annotations: [
      { type: 'level', price: 104.5, color: '#fbbf24', label: 'TWIN PEAKS' },
      { type: 'level', price: 102.5, color: '#ef4444', label: 'NECKLINE — broken', dash: false },
      { type: 'arrow', at: { i: 8, price: 101.6 }, direction: 'down', color: '#22c55e', label: 'ENTRY' },
    ],
    verdict: { label: 'TEXTBOOK SETUP', type: 'good' },
    caption: 'Two peaks at the same price, pullback to neckline, then breakdown. Classic top reversal.',
  },
  {
    title: 'NECKLINE = the trough between the two peaks',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.0, l: 99.95, c: 101.95 },
      { o: 101.95, h: 104.4, l: 101.9, c: 104.3 }, // peak 1
      { o: 104.3, h: 104.5, l: 102.5, c: 102.6 }, // trough = NECKLINE
      { o: 102.6, h: 104.4, l: 102.5, c: 104.3 }, // peak 2
      { o: 104.3, h: 104.4, l: 102.4, c: 102.5 },
    ],
    annotations: [
      { type: 'badge', at: { i: 2, price: 104.3 }, text: 'PEAK 1', color: '#fbbf24' },
      { type: 'badge', at: { i: 4, price: 104.3 }, text: 'PEAK 2', color: '#fbbf24' },
      { type: 'badge', at: { i: 3, price: 102.5 }, text: 'NECKLINE', color: '#ef4444' },
    ],
    verdict: { label: 'NECKLINE = LOW BETWEEN PEAKS', type: 'info' },
    caption: 'The neckline is the lowest close between the two peaks — the level that defines whether the pattern triggers.',
  },
  {
    title: 'STOP PLACEMENT — over second peak (bulletproof)',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.0, l: 99.95, c: 101.95 },
      { o: 101.95, h: 104.4, l: 101.9, c: 104.3 },
      { o: 104.3, h: 104.5, l: 102.5, c: 102.6 },
      { o: 102.6, h: 104.4, l: 102.5, c: 104.3 },
      { o: 104.3, h: 104.4, l: 102.4, c: 102.5 },
      { o: 102.5, h: 102.6, l: 101.0, c: 101.1 }, // entry
    ],
    annotations: [
      { type: 'level', price: 101.1, color: '#22c55e', label: 'ENTRY 101.1' },
      { type: 'level', price: 104.7, color: '#ef4444', label: 'STOP — over 2nd peak', dash: true },
      { type: 'level', price: 103.4, color: '#fbbf24', label: 'MIDPOINT STOP — tighter', dash: true },
    ],
    verdict: { label: 'TWO STOP CHOICES', type: 'info' },
    caption: 'Bulletproof: just over peak 2 (3.6pt risk). Tighter: midpoint between neckline and peak (2.3pt risk, smaller R:R).',
  },
  {
    title: 'MEASURED-MOVE TARGET — peak-to-neckline projected DOWN',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.0, l: 99.95, c: 101.95 },
      { o: 101.95, h: 104.4, l: 101.9, c: 104.3 }, // peak = 104.3
      { o: 104.3, h: 104.5, l: 102.5, c: 102.6 }, // neckline = 102.5 → height = 1.8
      { o: 102.6, h: 104.4, l: 102.5, c: 104.3 },
      { o: 104.3, h: 104.4, l: 102.4, c: 102.5 },
      { o: 102.5, h: 102.6, l: 101.0, c: 101.1 },
    ],
    annotations: [
      { type: 'level', price: 104.3, color: '#fbbf24', label: 'PEAK', dash: true },
      { type: 'level', price: 102.5, color: '#ef4444', label: 'NECKLINE 102.5' },
      { type: 'level', price: 100.7, color: '#5eead4', label: 'TARGET 100.7 (-1.8 pattern height)', dash: true },
    ],
    verdict: { label: 'MIN TARGET = PATTERN HEIGHT', type: 'info' },
    caption: 'Pattern height = peak - neckline = 1.8pt. Project DOWN from neckline: 102.5 - 1.8 = 100.7. Most patterns extend further.',
  },
  {
    title: 'FAILED DOUBLE TOP — second peak EXCEEDS first (no longer a top)',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.0 },
      { o: 100.0, h: 102.0, l: 99.95, c: 101.95 },
      { o: 101.95, h: 104.4, l: 101.9, c: 104.3 }, // peak 1
      { o: 104.3, h: 104.5, l: 102.8, c: 102.9 },
      { o: 102.9, h: 105.5, l: 102.85, c: 105.4 }, // peak 2 EXCEEDS peak 1 = no top
      { o: 105.4, h: 106.5, l: 105.3, c: 106.4 },
    ],
    annotations: [
      { type: 'level', price: 104.3, color: '#94a3b8', label: 'PEAK 1', dash: true },
      { type: 'badge', at: { i: 4, price: 105.4 }, text: 'EXCEEDED', color: '#ef4444' },
    ],
    verdict: { label: 'NOT A TOP — uptrend continues', type: 'bad' },
    caption: 'If peak 2 closes above peak 1, it is no longer a double top. It is a continuation. Do not short — flip the read.',
  },
  {
    title: 'DOUBLE TOP IN A DOWNTREND CONTEXT — strongest setup',
    candles: [
      { o: 110, h: 110.3, l: 109.7, c: 110.0 },
      { o: 110.0, h: 110.2, l: 108.5, c: 108.6 }, // already downtrending
      { o: 108.6, h: 108.8, l: 107.2, c: 107.3 },
      { o: 107.3, h: 107.5, l: 106.0, c: 106.1 },
      { o: 106.1, h: 107.2, l: 106.0, c: 107.1 }, // bounce
      { o: 107.1, h: 107.3, l: 106.3, c: 106.4 },
      { o: 106.4, h: 107.2, l: 106.3, c: 107.1 }, // 2nd bounce — double top against trend
      { o: 107.1, h: 107.2, l: 105.5, c: 105.6 }, // breakdown resumes trend
    ],
    annotations: [
      { type: 'level', price: 107.2, color: '#fbbf24', label: 'TWIN PEAKS' },
      { type: 'level', price: 106.0, color: '#ef4444', label: 'NECKLINE' },
      { type: 'arrow', at: { i: 7, price: 105.6 }, direction: 'down', color: '#22c55e', label: 'ENTRY' },
    ],
    verdict: { label: 'TREND-ALIGNED = STRONGEST', type: 'good' },
    caption: 'A double top INSIDE a downtrend has the highest hit rate — it is a continuation pattern dressed as a reversal.',
  },
];
