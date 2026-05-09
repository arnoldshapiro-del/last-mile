const charts = [
  {
    title: "TREND DAY OPEN \u2014 drive + expansion in first 15 minutes",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.2 },
      { o: 100.2, h: 101.4, l: 100.1, c: 101.3 },
      { o: 101.3, h: 102.5, l: 101.2, c: 102.4 },
      { o: 102.4, h: 103.6, l: 102.3, c: 103.5 },
      { o: 103.5, h: 103.8, l: 102.9, c: 103 },
      { o: 103, h: 104.4, l: 102.95, c: 104.3 },
      { o: 104.3, h: 105.5, l: 104.2, c: 105.4 }
    ],
    annotations: [
      { type: "zone", topPrice: 105.5, bottomPrice: 99.7, color: "rgba(34, 197, 94, 0.07)", label: "TREND DRIVE" },
      { type: "badge", at: { i: 6, price: 105.4 }, text: "+5pt in 7 bars", color: "#22c55e" }
    ],
    verdict: { label: "TREND DAY \u2014 MAX SIZE FOR FLAGS", type: "good" },
    caption: "When the open drives and bars expand, the day is trending. Pole-and-flag tactics carry today. Allocate normal size."
  },
  {
    title: "RANGE DAY OPEN \u2014 chop, contraction, no commitment",
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100.4 },
      { o: 100.4, h: 100.7, l: 99.8, c: 99.9 },
      { o: 99.9, h: 100.5, l: 99.6, c: 100.4 },
      { o: 100.4, h: 100.6, l: 99.85, c: 100 },
      { o: 100, h: 100.4, l: 99.75, c: 100.3 },
      { o: 100.3, h: 100.5, l: 99.85, c: 100 },
      { o: 100, h: 100.4, l: 99.8, c: 100.25 }
    ],
    annotations: [
      { type: "level", price: 100.5, color: "#fbbf24", label: "CEILING" },
      { type: "level", price: 99.6, color: "#fbbf24", label: "FLOOR" },
      { type: "badge", at: { i: 3, price: 100.6 }, text: "CHOP", color: "#fbbf24" }
    ],
    verdict: { label: "RANGE DAY \u2014 fade extremes only", type: "warn" },
    caption: "Bars overlap, range tight, no committed direction. Pole-and-flag dies in this tape. Switch playbook to fade extremes or sit out."
  },
  {
    title: "OPENING-RANGE BREAKOUT \u2014 30 minutes establishes the range",
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100.4 },
      { o: 100.4, h: 100.7, l: 99.8, c: 99.9 },
      { o: 99.9, h: 100.5, l: 99.6, c: 100.4 },
      { o: 100.4, h: 100.7, l: 99.7, c: 100 },
      { o: 100, h: 100.6, l: 99.75, c: 100.3 },
      { o: 100.3, h: 102, l: 100.25, c: 101.95 },
      // BREAKOUT of OR high
      { o: 101.95, h: 103, l: 101.85, c: 102.9 },
      { o: 102.9, h: 104, l: 102.8, c: 103.9 }
    ],
    annotations: [
      { type: "level", price: 100.7, color: "#fbbf24", label: "OR HIGH" },
      { type: "level", price: 99.5, color: "#fbbf24", label: "OR LOW" },
      { type: "arrow", at: { i: 5, price: 101.95 }, direction: "up", color: "#22c55e", label: "OR-BREAK" }
    ],
    verdict: { label: "TRENDS START AFTER OR", type: "good" },
    caption: "First 30 minutes prints the Opening Range. A clean break of OR high or low is when the trend day begins. Trade that break."
  },
  {
    title: "TRANSITION BAR \u2014 wide-range candle that fails to follow through",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.2 },
      { o: 100.2, h: 101.4, l: 100.1, c: 101.3 },
      { o: 101.3, h: 102.5, l: 101.2, c: 102.4 },
      { o: 102.4, h: 103.6, l: 102.3, c: 103.5 },
      { o: 103.5, h: 104.8, l: 103.4, c: 104.7 },
      { o: 104.7, h: 105, l: 103, c: 103.1 },
      // BIG range bar — fails next
      { o: 103.1, h: 103.4, l: 102.6, c: 102.9 },
      { o: 102.9, h: 103.2, l: 102.5, c: 102.7 },
      { o: 102.7, h: 102.9, l: 102.3, c: 102.5 }
    ],
    annotations: [
      { type: "badge", at: { i: 5, price: 103.5 }, text: "TRANSITION", color: "#fbbf24" },
      { type: "zone", topPrice: 103.4, bottomPrice: 102.3, color: "rgba(251, 191, 36, 0.10)", label: "NEW RANGE" }
    ],
    verdict: { label: "PLAYBOOK SHIFT", type: "warn" },
    caption: "Wide-range bar that fails to follow through is the transition bar. After this, fade ceilings/floors instead of chasing flags."
  },
  {
    title: "MIDDAY DRIFT \u2014 11:30-1:30 ET \u2014 usually fade-and-balance",
    candles: [
      { o: 100, h: 100.4, l: 99.6, c: 100.2 },
      { o: 100.2, h: 100.5, l: 99.7, c: 99.8 },
      { o: 99.8, h: 100.4, l: 99.5, c: 100.3 },
      { o: 100.3, h: 100.5, l: 99.6, c: 99.7 },
      { o: 99.7, h: 100.3, l: 99.4, c: 100.2 },
      { o: 100.2, h: 100.45, l: 99.65, c: 99.8 },
      { o: 99.8, h: 100.4, l: 99.5, c: 100.2 },
      { o: 100.2, h: 100.5, l: 99.7, c: 99.85 }
    ],
    annotations: [
      { type: "level", price: 100.5, color: "#94a3b8", label: "MIDDAY CEILING" },
      { type: "level", price: 99.4, color: "#94a3b8", label: "MIDDAY FLOOR" },
      { type: "badge", at: { i: 3, price: 100.4 }, text: "BALANCE", color: "#94a3b8" }
    ],
    verdict: { label: "NO TREND TRADES MIDDAY", type: "warn" },
    caption: "Midday tends to balance. Pole-and-flag setups during 11:30-1:30 ET have the lowest hit rate of the day. Default to skip."
  },
  {
    title: "AFTERNOON RESUMPTION \u2014 2:00 ET often re-trends",
    candles: [
      { o: 100, h: 100.4, l: 99.6, c: 100.2 },
      { o: 100.2, h: 100.5, l: 99.7, c: 99.8 },
      { o: 99.8, h: 100.4, l: 99.5, c: 100.3 },
      { o: 100.3, h: 100.6, l: 99.95, c: 100.4 },
      { o: 100.4, h: 100.7, l: 100, c: 100.2 },
      // 2:00 area
      { o: 100.2, h: 101.5, l: 100.15, c: 101.4 },
      // RESUMPTION
      { o: 101.4, h: 102.5, l: 101.3, c: 102.4 },
      { o: 102.4, h: 103.5, l: 102.3, c: 103.4 }
    ],
    annotations: [
      { type: "badge", at: { i: 4, price: 100.7 }, text: "2:00 ET", color: "#5eead4" },
      { type: "arrow", at: { i: 5, price: 101.4 }, direction: "up", color: "#22c55e", label: "TREND RESUMES" }
    ],
    verdict: { label: "AFTERNOON TREND VALID", type: "good" },
    caption: "After midday balance, 2:00 ET often re-trends \u2014 institutional desks come back. Pole-and-flag works here again."
  }
];
export {
  charts
};
