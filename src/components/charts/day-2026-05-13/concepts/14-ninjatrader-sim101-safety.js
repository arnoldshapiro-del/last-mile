// Teaching unit 14: NinjaTrader Sim101 error is a safety feature.
export const charts = [
  {
    title: 'The error message decoded',
    candles: [
      { o: 2850, h: 2851, l: 2849, c: 2850.5 },
      { o: 2850.5, h: 2851, l: 2850, c: 2850.8 },
      { o: 2850.8, h: 2852, l: 2850.5, c: 2851.5 },
      { o: 2851.5, h: 2852, l: 2851, c: 2851.8 },
    ],
    annotations: [
      { type: 'level', price: 2851.5, color: '#FF3D5A', label: 'BuyToCover 4 StopMarket @ 2851.5', dash: true },
      { type: 'badge', at: { i: 1, price: 2851.5 }, color: '#FF3D5A', text: 'Order quantity < 1' },
      { type: 'badge', at: { i: 2, price: 2852.5 }, color: '#FBBF24', text: 'Modification REJECTED' },
    ],
    verdict: { label: 'Rejected ≠ Cancelled', type: 'warn' },
    caption: 'Sim101 / order can\'t be changed / order quantity < 1. Translation: platform refused an invalid modification of your stop order. The change did NOT happen — the original survives.',
  },
  {
    title: 'What actually survived — the original stop',
    candles: [
      { o: 2848, h: 2849, l: 2847, c: 2848.5 },
      { o: 2848.5, h: 2850, l: 2848, c: 2849.5 },
      { o: 2849.5, h: 2850.5, l: 2849, c: 2850.2 },
      { o: 2850.2, h: 2851, l: 2849.5, c: 2850.5 },
    ],
    annotations: [
      { type: 'level', price: 2851, color: '#FBBF24', label: 'ORIGINAL stop 2851 — still WORKING', dash: true },
      { type: 'level', price: 2851.5, color: '#94a3b8', label: 'Attempted new stop — NEVER applied', dash: true },
      { type: 'badge', at: { i: 1, price: 2850 }, color: '#00D9A0', text: 'Protection intact' },
    ],
    verdict: { label: 'Position never unprotected', type: 'good' },
    caption: 'CRITICAL: when the modification was rejected, the original stop stayed at its original price. The position was never unprotected. The platform did the safe thing.',
  },
  {
    title: 'Three usual causes — drag, race, ATM conflict',
    candles: [
      { o: 2850, h: 2851, l: 2849.5, c: 2850.5 },
      { o: 2850.5, h: 2851, l: 2850, c: 2850.5 },
      { o: 2850.5, h: 2851, l: 2850, c: 2850.8 },
      { o: 2850.8, h: 2851, l: 2850.5, c: 2851 },
    ],
    annotations: [
      { type: 'badge', at: { i: 0, price: 2851.5 }, color: '#FBBF24', text: '1 — Drag grabbed quantity not price' },
      { type: 'badge', at: { i: 1, price: 2851.5 }, color: '#FBBF24', text: '2 — Order state changing mid-edit' },
      { type: 'badge', at: { i: 2, price: 2851.5 }, color: '#FBBF24', text: '3 — ATM auto-trail collision' },
    ],
    verdict: { label: 'All three = SAFETY, not failure', type: 'info' },
    caption: 'Three usual causes: drag-interpretation error, race condition (order changing state), or ATM auto-logic conflict with your manual edit. In every case, the platform protects you.',
  },
  {
    title: 'How to respond — three calm steps',
    candles: [
      { o: 2850, h: 2850.5, l: 2849, c: 2849.5 },
      { o: 2849.5, h: 2850, l: 2848.5, c: 2849 },
      { o: 2849, h: 2849.5, l: 2848, c: 2848.5 },
    ],
    annotations: [
      { type: 'badge', at: { i: 0, price: 2851 }, color: '#00D9A0', text: '1 — Click OK' },
      { type: 'badge', at: { i: 1, price: 2850.5 }, color: '#00D9A0', text: '2 — Verify Orders tab' },
      { type: 'badge', at: { i: 2, price: 2850 }, color: '#00D9A0', text: '3 — Try again, one stop at a time' },
    ],
    verdict: { label: 'Calm response — no panic clicks', type: 'good' },
    caption: 'Three steps when this fires: dismiss the dialog, verify the stop is still showing Working in the Orders tab, then retry the modification — one stop at a time, slower.',
  },
];
