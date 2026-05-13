// Teaching unit 16: Claude Max usage — two limits + 1M context truth.
export const charts = [
  {
    title: 'Two limits — session (5hr) and weekly (Saturday)',
    candles: [
      { o: 2830, h: 2832, l: 2830, c: 2831 },
      { o: 2831, h: 2833, l: 2831, c: 2832 },
      { o: 2832, h: 2834, l: 2832, c: 2833 },
      { o: 2833, h: 2835, l: 2833, c: 2834 },
      { o: 2834, h: 2836, l: 2834, c: 2835 },
      { o: 2835, h: 2837, l: 2835, c: 2836 },
    ],
    annotations: [
      { type: 'zone', topPrice: 2832, bottomPrice: 2830, color: 'rgba(0, 217, 160, 0.15)', label: 'SESSION 23% used → fresh in 1hr' },
      { type: 'zone', topPrice: 2836.5, bottomPrice: 2834.5, color: 'rgba(255, 61, 90, 0.15)', label: 'WEEKLY 77% used → Saturday reset' },
    ],
    verdict: { label: 'Two buckets — both real', type: 'warn' },
    caption: 'Max 5x has TWO independent limits: a 5-hour session bucket and a 7-day weekly bucket. "5 prompts left" on phone is reading the WEEKLY bucket, even when session is fresh.',
  },
  {
    title: 'Anthropic doubled session — NOT weekly',
    candles: [
      { o: 2830, h: 2832, l: 2830, c: 2831 },
      { o: 2831, h: 2833, l: 2831, c: 2832 },
      { o: 2832, h: 2834, l: 2832, c: 2833 },
      { o: 2833, h: 2835, l: 2833, c: 2834 },
    ],
    annotations: [
      { type: 'badge', at: { i: 0, price: 2833 }, color: '#00D9A0', text: 'Session 1x → 2x ✓' },
      { type: 'badge', at: { i: 2, price: 2835 }, color: '#FF3D5A', text: 'Weekly = SAME ✗' },
    ],
    verdict: { label: 'Faster session burn, same weekly cap', type: 'warn' },
    caption: 'Recent announcement doubled the 5-hour rate-limit window. The weekly caps did NOT change. So you can drain the weekly bucket FASTER than before — feels worse, not better.',
  },
  {
    title: 'Long image-heavy chat = maximum burn',
    candles: [
      { o: 2830, h: 2831, l: 2829, c: 2830.5 },
      { o: 2830.5, h: 2832, l: 2830, c: 2831.5 },
      { o: 2831.5, h: 2833, l: 2831, c: 2832.5 },
      { o: 2832.5, h: 2834.5, l: 2832, c: 2834 },
      { o: 2834, h: 2837, l: 2833.5, c: 2836.5 },
      { o: 2836.5, h: 2840, l: 2836, c: 2839.5 },
    ],
    annotations: [
      { type: 'badge', at: { i: 0, price: 2832 }, color: '#94a3b8', text: '1 chart = 1k tokens' },
      { type: 'badge', at: { i: 2, price: 2834 }, color: '#FBBF24', text: '+ web searches' },
      { type: 'badge', at: { i: 4, price: 2838 }, color: '#FF3D5A', text: '+ full history resent EACH msg' },
      { type: 'badge', at: { i: 5, price: 2841 }, color: '#FF3D5A', text: '20× cost per turn' },
    ],
    verdict: { label: 'Each new message resends entire history', type: 'bad' },
    caption: 'Long chats burn 10-20× more per message because every new turn re-sends the ENTIRE history. Charts (~1k tokens each), web searches, long responses — all compound.',
  },
  {
    title: '1M vs 200K — same per-token price, MORE tokens burned',
    candles: [
      { o: 2830, h: 2831, l: 2830, c: 2830.5 },
      { o: 2830.5, h: 2832, l: 2830, c: 2831.5 },
      { o: 2831.5, h: 2834, l: 2831, c: 2833.5 },
      { o: 2833.5, h: 2837, l: 2833, c: 2836.5 },
      { o: 2836.5, h: 2840, l: 2836, c: 2839.5 },
    ],
    annotations: [
      { type: 'badge', at: { i: 0, price: 2831.5 }, color: '#00D9A0', text: '200K = auto-compact' },
      { type: 'badge', at: { i: 2, price: 2834.5 }, color: '#FF3D5A', text: '1M = never compacts' },
      { type: 'badge', at: { i: 4, price: 2841 }, color: '#FBBF24', text: 'Same RATE, 3× COUNT' },
    ],
    verdict: { label: '200K for routine work — 1M for big codebases', type: 'good' },
    caption: 'Per-token PRICE is identical between 1M and 200K. But 1M sessions never auto-compact → 3× more tokens burned in practice. Use 200K for routine. Reserve 1M for large codebases.',
  },
];
