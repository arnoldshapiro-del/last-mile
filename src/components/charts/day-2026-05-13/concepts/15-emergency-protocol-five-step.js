// Teaching unit 15: Five-step emergency protocol for any order error.
export const charts = [
  {
    title: 'Step 1 — STOP. No new decisions in panic mode.',
    candles: [
      { o: 2850, h: 2851, l: 2849, c: 2850 },
      { o: 2850, h: 2850.5, l: 2849.5, c: 2850 },
      { o: 2850, h: 2850.5, l: 2849.5, c: 2850 },
    ],
    annotations: [
      { type: 'badge', at: { i: 1, price: 2851 }, color: '#FF3D5A', text: 'PANIC = wrong moves' },
      { type: 'badge', at: { i: 1, price: 2849 }, color: '#00D9A0', text: 'BREATHE. 5 seconds.' },
    ],
    verdict: { label: 'No clicks until you understand state', type: 'warn' },
    caption: 'The most dangerous moment in trading is the second after an error appears. Don\'t click anything. Don\'t reflexively re-enter. Don\'t assume you know what happened. Pause first.',
  },
  {
    title: 'Step 2 — VERIFY in the Orders tab',
    candles: [
      { o: 2850, h: 2850.5, l: 2849.5, c: 2850 },
      { o: 2850, h: 2850.5, l: 2849.5, c: 2850 },
      { o: 2850, h: 2850.5, l: 2849.5, c: 2850 },
    ],
    annotations: [
      { type: 'badge', at: { i: 0, price: 2851 }, color: '#00D9A0', text: 'Control Center → Orders tab' },
      { type: 'badge', at: { i: 1, price: 2850.5 }, color: '#00D9A0', text: 'Stop status = "Working"?' },
      { type: 'badge', at: { i: 2, price: 2851 }, color: '#FBBF24', text: 'Or "Rejected" / "Cancelled"?' },
    ],
    verdict: { label: 'Verify state BEFORE acting', type: 'good' },
    caption: 'Open Control Center, click Orders tab. If your stop shows "Working" at its original price = you\'re protected. If "Rejected" or "Cancelled" = you\'re exposed, go to step 3.',
  },
  {
    title: 'Step 3 — FLATTEN if uncertain (market exit)',
    candles: [
      { o: 2850, h: 2851, l: 2849, c: 2849.5 },
      { o: 2849.5, h: 2850, l: 2848, c: 2848.5 },
      { o: 2848.5, h: 2849, l: 2846, c: 2846.5 },
      { o: 2846.5, h: 2847, l: 2845, c: 2845.5 },
    ],
    annotations: [
      { type: 'badge', at: { i: 1, price: 2851 }, color: '#FF3D5A', text: 'Stop missing/rejected' },
      { type: 'arrow', at: { i: 2, price: 2848 }, direction: 'down', color: '#FBBF24', label: 'FLATTEN NOW' },
      { type: 'badge', at: { i: 3, price: 2844 }, color: '#00D9A0', text: 'Position flat = SAFE' },
    ],
    verdict: { label: 'Take the market — safer than running exposed', type: 'good' },
    caption: 'If any stop is missing or rejected, hit Flatten immediately. Take the current P&L at market. INFINITELY better than trying to replace the stop while market moves against you.',
  },
  {
    title: 'Step 4-5 — Breathe, re-evaluate, fresh order',
    candles: [
      { o: 2845.5, h: 2846, l: 2845, c: 2845.5 },
      { o: 2845.5, h: 2846, l: 2845, c: 2845.5 },
      { o: 2845.5, h: 2848, l: 2845.5, c: 2847.5 },
      { o: 2847.5, h: 2850, l: 2847, c: 2849.5 },
    ],
    annotations: [
      { type: 'badge', at: { i: 0, price: 2847 }, color: '#00D9A0', text: '4 — Breathe' },
      { type: 'badge', at: { i: 1, price: 2847 }, color: '#00D9A0', text: 'Re-evaluate setup' },
      { type: 'arrow', at: { i: 2, price: 2847.5 }, direction: 'up', color: '#00D9A0', label: '5 — FRESH order if appropriate' },
    ],
    verdict: { label: 'Two trades, two decisions — clean', type: 'good' },
    caption: 'Once flat: breathe, re-evaluate whether the trade still has edge, then submit a brand new ATM with brand new stops if the setup is still valid. Never re-enter blindly.',
  },
];
