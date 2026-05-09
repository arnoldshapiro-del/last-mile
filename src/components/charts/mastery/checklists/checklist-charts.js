const preTradeCharts = [
  {
    title: "PRE-TRADE 1 \u2014 POLE in 5 seconds",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.6, l: 103.7, c: 103.8 }
    ],
    annotations: [
      { type: "zone", topPrice: 104.4, bottomPrice: 100, color: "rgba(0, 217, 160, 0.07)", label: "POLE" },
      { type: "badge", at: { i: 2, price: 103.4 }, text: "\u2713 5-SEC", color: "#22c55e" }
    ],
    verdict: { label: "POLE OBVIOUS", type: "good" },
    caption: "First check on the list. The pole is either obvious in 5 seconds or it isn't there."
  },
  {
    title: "PRE-TRADE 2 \u2014 TRENDING vs RANGING \u2014 read first",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.2 },
      { o: 100.2, h: 101.4, l: 100.1, c: 101.3 },
      { o: 101.3, h: 102.5, l: 101.2, c: 102.4 },
      { o: 102.4, h: 103.6, l: 102.3, c: 103.5 },
      { o: 103.5, h: 104.7, l: 103.4, c: 104.6 }
    ],
    annotations: [
      { type: "badge", at: { i: 2, price: 102.4 }, text: "TRENDING", color: "#22c55e" }
    ],
    verdict: { label: "CONTEXT MATCHES", type: "good" },
    caption: "Drive + expansion = trend. Pole-and-flag carries. Take the setup with confidence."
  },
  {
    title: "PRE-TRADE 3 \u2014 50% LINE drawn before any consideration of entry",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 105, l: 103.3, c: 104.95 },
      { o: 104.95, h: 105, l: 103.7, c: 103.8 }
    ],
    annotations: [
      { type: "level", price: 102.5, color: "#fbbf24", label: "50% = 102.50", dash: true }
    ],
    verdict: { label: "LINE MARKED", type: "info" },
    caption: "Mark the 50% line the moment the pole prints. This is the thesis-killer; everything else depends on it."
  },
  {
    title: "PRE-TRADE 4 \u2014 FLAG HEALTHY (no fighting)",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.6, l: 103.7, c: 103.8 },
      { o: 103.8, h: 104, l: 103.4, c: 103.5 },
      { o: 103.5, h: 103.7, l: 103.1, c: 103.2 }
    ],
    annotations: [
      { type: "badge", at: { i: 5, price: 103.5 }, text: "CLEAN", color: "#22c55e" },
      { type: "level", price: 102.5, color: "#fbbf24", label: "50% LINE", dash: true }
    ],
    verdict: { label: "FLAG HEALTHY", type: "good" },
    caption: "Bars smaller than pole bars, contracting volume, no big counter-bars. Healthy flag."
  },
  {
    title: "PRE-TRADE 5 \u2014 4-PILLAR check (pattern + MACD + delta + volume)",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 100.4, l: 99.9, c: 100.3 },
      { o: 100.3, h: 100.7, l: 100.1, c: 100.5 },
      { o: 100.5, h: 100.9, l: 100.3, c: 100.6 },
      { o: 100.6, h: 100.8, l: 100.2, c: 100.4 },
      { o: 100.4, h: 100.7, l: 100, c: 100.5 },
      { o: 100.5, h: 102, l: 100.45, c: 101.95 }
    ],
    annotations: [
      { type: "volume", bars: [40, 45, 50, 45, 40, 35, 200] },
      { type: "badge", at: { i: 6, price: 102 }, text: "4/4 \u2713", color: "#22c55e" }
    ],
    verdict: { label: "ALL FOUR FIRE", type: "good" },
    caption: "Pattern integrity, MACD direction, delta net positive, breakout volume above average. Four checkmarks = trade."
  },
  {
    title: "PRE-TRADE 6 \u2014 ENTRY, STOP, TARGET defined BEFORE click",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.6, l: 103.7, c: 103.8 },
      { o: 103.8, h: 104, l: 103.4, c: 103.5 },
      { o: 103.5, h: 103.7, l: 103.1, c: 103.2 },
      { o: 103.2, h: 105, l: 103.15, c: 104.9 }
    ],
    annotations: [
      { type: "level", price: 104.9, color: "#22c55e", label: "ENTRY 104.9" },
      { type: "level", price: 103.1, color: "#ef4444", label: "STOP 103.1", dash: true },
      { type: "level", price: 109.3, color: "#5eead4", label: "TARGET 109.3", dash: true }
    ],
    verdict: { label: "PLAN COMPLETE", type: "good" },
    caption: "Three numbers committed before the click: entry, stop, target. R:R must be at least 1.5:1 or no trade."
  }
];
const inTradeCharts = [
  {
    title: "IN-TRADE \u2014 STOP HONORED, no widening",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.6, l: 103, c: 103.1 }
      // STOP HIT
    ],
    annotations: [
      { type: "level", price: 103.1, color: "#ef4444", label: "STOP \u2014 1.8pt risk taken", dash: true },
      { type: "badge", at: { i: 4, price: 103 }, text: "STOP HIT", color: "#ef4444" }
    ],
    verdict: { label: "STOP HONORED \u2014 small loss", type: "good" },
    caption: "Stop sits where it was set. No moving, no removing. The flat trader from 5 minutes ago was right."
  },
  {
    title: "IN-TRADE \u2014 50% LINE BREAK = exit immediately",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 105, l: 103.3, c: 104.95 },
      { o: 104.95, h: 105, l: 103.7, c: 103.8 },
      { o: 103.8, h: 104, l: 102.6, c: 102.7 },
      { o: 102.7, h: 102.8, l: 101.7, c: 101.8 }
      // closed below 50% (102.5)
    ],
    annotations: [
      { type: "level", price: 102.5, color: "#ef4444", label: "50% LINE \u2014 BROKEN" },
      { type: "arrow", at: { i: 6, price: 101.8 }, direction: "down", color: "#ef4444", label: "EXIT" }
    ],
    verdict: { label: "CLOSE BELOW = OUT", type: "bad" },
    caption: "Don't wait for the stop. The 50% close is the data event. Exit on that bar \u2014 saves 1-2 points vs riding to the stop."
  },
  {
    title: "IN-TRADE \u2014 opposite SIGNAL fires while in position",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      // long
      { o: 104.4, h: 104.6, l: 103.7, c: 103.8 },
      { o: 103.8, h: 104.6, l: 103.7, c: 104.5 },
      { o: 104.5, h: 104.6, l: 102.9, c: 103 }
      // BEARISH ENGULFING
    ],
    annotations: [
      { type: "arrow", at: { i: 3, price: 104.4 }, direction: "up", color: "#5eead4", label: "LONG" },
      { type: "badge", at: { i: 6, price: 103 }, text: "BEARISH ENGULF", color: "#ef4444" }
    ],
    verdict: { label: "LISTEN \u2014 EXIT", type: "warn" },
    caption: "Your own tool fired the opposite signal. The position is bias; the signal is data. Exit. Reverse if appropriate."
  },
  {
    title: "IN-TRADE \u2014 partial at first target, runner with trailing stop",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.6, l: 103.7, c: 103.8 },
      { o: 103.8, h: 104, l: 103.4, c: 103.5 },
      { o: 103.5, h: 105, l: 103.45, c: 104.9 },
      { o: 104.9, h: 106.5, l: 104.8, c: 106.4 },
      // partial at 1st target
      { o: 106.4, h: 107.5, l: 106.2, c: 107.4 }
      // runner
    ],
    annotations: [
      { type: "arrow", at: { i: 6, price: 104.9 }, direction: "up", color: "#22c55e", label: "ENTRY" },
      { type: "arrow", at: { i: 7, price: 106.4 }, direction: "up", color: "#fbbf24", label: "PARTIAL" },
      { type: "level", price: 105, color: "#5eead4", label: "TRAIL STOP", dash: true }
    ],
    verdict: { label: "BANKED PARTIAL", type: "good" },
    caption: "First measured-move target reached. Take half off; trail stop on remainder. Removes pressure, locks profit."
  }
];
const postTradeCharts = [
  {
    title: "POST-TRADE \u2014 review the pole quality",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 }
    ],
    annotations: [
      { type: "zone", topPrice: 104.4, bottomPrice: 100, color: "rgba(0, 217, 160, 0.07)", label: "POLE \u2014 was it clean?" }
    ],
    verdict: { label: "HONEST CHECK", type: "info" },
    caption: "Was the pole obvious in 5 seconds, or did you have to argue for it? Note honestly. The honest answer informs the next trade."
  },
  {
    title: "POST-TRADE \u2014 was the session read correct?",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100.2 },
      { o: 100.2, h: 100.6, l: 99.7, c: 99.8 },
      { o: 99.8, h: 100.4, l: 99.6, c: 100.3 },
      { o: 100.3, h: 100.5, l: 99.8, c: 99.9 },
      { o: 99.9, h: 100.4, l: 99.7, c: 100.2 }
    ],
    annotations: [
      { type: "level", price: 100.6, color: "#fbbf24", label: "CEILING" },
      { type: "level", price: 99.6, color: "#fbbf24", label: "FLOOR" },
      { type: "badge", at: { i: 2, price: 100.4 }, text: "RANGE", color: "#fbbf24" }
    ],
    verdict: { label: "WAS IT TREND OR RANGE?", type: "warn" },
    caption: "Looking back: was the read at entry correct? Did the session evolve as expected, or did regime change mid-trade?"
  },
  {
    title: "POST-TRADE \u2014 did all four pillars actually align?",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 100.4, l: 99.9, c: 100.3 },
      { o: 100.3, h: 100.7, l: 100.1, c: 100.5 },
      { o: 100.5, h: 100.9, l: 100.3, c: 100.6 },
      { o: 100.6, h: 100.8, l: 100.2, c: 100.4 },
      { o: 100.4, h: 100.7, l: 100, c: 100.5 },
      { o: 100.5, h: 102, l: 100.45, c: 101.95 }
    ],
    annotations: [
      { type: "volume", bars: [40, 45, 50, 45, 40, 35, 200] },
      { type: "badge", at: { i: 6, price: 102 }, text: "4/4 confirmed?", color: "#5eead4" }
    ],
    verdict: { label: "AUDIT EACH PILLAR", type: "info" },
    caption: "Was MACD really agreeing, or close-to-flat? Was delta really positive, or close-to-zero? Honest audit beats optimistic memory."
  },
  {
    title: "POST-TRADE \u2014 entry inside the 1-3 bar window?",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.6, l: 103.7, c: 103.8 },
      { o: 103.8, h: 104, l: 103.4, c: 103.5 },
      { o: 103.5, h: 103.7, l: 103.1, c: 103.2 },
      { o: 103.2, h: 105, l: 103.15, c: 104.9 },
      { o: 104.9, h: 106, l: 104.8, c: 105.9 }
    ],
    annotations: [
      { type: "zone", topPrice: 105, bottomPrice: 104.7, color: "rgba(34, 197, 94, 0.10)", label: "WINDOW" },
      { type: "badge", at: { i: 7, price: 104.9 }, text: "BAR 8?", color: "#5eead4" }
    ],
    verdict: { label: "EARLY, ON-TIME, OR LATE?", type: "info" },
    caption: "Be honest about which bar you actually entered on. Late = different trade. Track this \u2014 outcomes correlate with timing."
  }
];
export {
  inTradeCharts,
  postTradeCharts,
  preTradeCharts
};
