const charts = [
  {
    title: "THE ENTIRE SYSTEM IN ONE CHART \u2014 pole, flag, 50%, breakout",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      // pole start
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      // pole end
      { o: 104.4, h: 104.6, l: 103.7, c: 103.8 },
      { o: 103.8, h: 104, l: 103.4, c: 103.5 },
      { o: 103.5, h: 103.7, l: 103.1, c: 103.2 },
      { o: 103.2, h: 105, l: 103.15, c: 104.9 },
      // breakout — ENTRY
      { o: 104.9, h: 106, l: 104.8, c: 105.9 },
      { o: 105.9, h: 107, l: 105.85, c: 106.95 }
      // continuation
    ],
    annotations: [
      { type: "zone", topPrice: 104.4, bottomPrice: 100, color: "rgba(0, 217, 160, 0.06)", label: "\u2460 POLE" },
      { type: "zone", topPrice: 104.6, bottomPrice: 103.1, color: "rgba(94, 234, 212, 0.06)", label: "\u2461 FLAG" },
      { type: "level", price: 102.2, color: "#fbbf24", label: "\u2462 50% LINE", dash: true },
      { type: "arrow", at: { i: 7, price: 104.9 }, direction: "up", color: "#22c55e", label: "\u2463 ENTRY" },
      { type: "level", price: 109.3, color: "#5eead4", label: "\u2464 TARGET (+pole length)", dash: true }
    ],
    verdict: { label: "COMPLETE SETUP \u2014 TAKE IT", type: "good" },
    caption: "The whole system: pole \u2192 flag \u2192 50% line \u2192 breakout close \u2192 measured-move target. Five steps, every trade, every time."
  },
  {
    title: "THE FOUR PILLARS \u2014 pattern + MACD + delta + volume",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 100.4, l: 99.9, c: 100.3 },
      { o: 100.3, h: 100.7, l: 100.1, c: 100.5 },
      { o: 100.5, h: 100.9, l: 100.3, c: 100.6 },
      { o: 100.6, h: 100.8, l: 100.2, c: 100.4 },
      { o: 100.4, h: 100.7, l: 100, c: 100.5 },
      { o: 100.5, h: 102, l: 100.45, c: 101.95 },
      { o: 101.95, h: 103, l: 101.85, c: 102.9 }
    ],
    annotations: [
      { type: "volume", bars: [40, 45, 50, 45, 40, 35, 200, 150] },
      { type: "badge", at: { i: 0, price: 100.4 }, text: "\u2460PATTERN", color: "#5eead4" },
      { type: "badge", at: { i: 2, price: 100.7 }, text: "\u2461MACD", color: "#a78bfa" },
      { type: "badge", at: { i: 4, price: 100.7 }, text: "\u2462DELTA", color: "#fbbf24" },
      { type: "badge", at: { i: 6, price: 102 }, text: "\u2463VOLUME", color: "#22c55e" }
    ],
    verdict: { label: "4 OF 4 = TRADE", type: "good" },
    caption: "Every entry needs four checkmarks: pattern integrity, MACD direction, order flow delta, breakout volume. 3-of-4 always fails."
  },
  {
    title: "TRENDING vs RANGING \u2014 context decides the playbook",
    candles: [
      { o: 100, h: 100.4, l: 99.7, c: 100.3 },
      { o: 100.3, h: 101.4, l: 100.2, c: 101.3 },
      { o: 101.3, h: 102.5, l: 101.2, c: 102.4 },
      { o: 102.4, h: 103.6, l: 102.3, c: 103.5 },
      { o: 103.5, h: 103.8, l: 103, c: 103.4 },
      { o: 103.4, h: 103.5, l: 103, c: 103.2 },
      { o: 103.2, h: 103.4, l: 102.9, c: 103 },
      { o: 103, h: 103.4, l: 102.95, c: 103.3 }
    ],
    annotations: [
      { type: "zone", topPrice: 103.6, bottomPrice: 99.7, color: "rgba(0, 217, 160, 0.06)", label: "TREND PHASE" },
      { type: "zone", topPrice: 103.5, bottomPrice: 102.9, color: "rgba(251, 191, 36, 0.10)", label: "RANGE PHASE" },
      { type: "badge", at: { i: 6, price: 103.5 }, text: "PLAYBOOK SHIFT", color: "#fbbf24" }
    ],
    verdict: { label: "READ FIRST, TRADE SECOND", type: "info" },
    caption: "Same chart, two regimes. First half: pole-and-flag. Second half: range fade. The same setup wins or loses by context alone."
  },
  {
    title: "THE 50% LINE \u2014 the single binary decision on the chart",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 105, l: 103.3, c: 104.95 },
      { o: 104.95, h: 105, l: 103.5, c: 103.6 },
      { o: 103.6, h: 103.8, l: 102.5, c: 102.6 },
      { o: 102.6, h: 102.8, l: 101.6, c: 101.7 },
      // closes below 50% — DEAD
      { o: 101.7, h: 102, l: 100.4, c: 100.5 },
      { o: 100.5, h: 100.7, l: 99.4, c: 99.5 }
    ],
    annotations: [
      { type: "level", price: 102.5, color: "#ef4444", label: "50% LINE \u2014 BROKEN" },
      { type: "arrow", at: { i: 6, price: 101.7 }, direction: "down", color: "#ef4444", label: "CANCEL" }
    ],
    verdict: { label: "BELOW 50% = OUT", type: "bad" },
    caption: "No interpretation needed. Above the line, the trade is alive. Below, it is dead. The line is the entire data point."
  },
  {
    title: "THE STAIRCASE \u2014 three independent entries in a single trend",
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.1 },
      { o: 100.1, h: 101.6, l: 100, c: 101.5 },
      { o: 101.5, h: 102.8, l: 101.4, c: 102.7 },
      { o: 102.7, h: 102.9, l: 102, c: 102.1 },
      { o: 102.1, h: 103.3, l: 102.05, c: 103.2 },
      { o: 103.2, h: 104.4, l: 103.1, c: 104.3 },
      { o: 104.3, h: 104.5, l: 103.7, c: 103.8 },
      { o: 103.8, h: 105, l: 103.75, c: 104.9 },
      { o: 104.9, h: 106.1, l: 104.8, c: 106 },
      { o: 106, h: 106.2, l: 105.4, c: 105.5 },
      { o: 105.5, h: 106.7, l: 105.45, c: 106.6 }
    ],
    annotations: [
      { type: "arrow", at: { i: 4, price: 103.2 }, direction: "up", color: "#22c55e", label: "#1" },
      { type: "arrow", at: { i: 7, price: 104.9 }, direction: "up", color: "#22c55e", label: "#2" },
      { type: "arrow", at: { i: 10, price: 106.6 }, direction: "up", color: "#22c55e", label: "#3" }
    ],
    verdict: { label: "3 TRADES, 1 TREND", type: "good" },
    caption: "A trend is not one trade. It is a stack of independent setups. Same checklist each step. Compound risk-defined moves."
  },
  {
    title: "THE 3-STRIKE RULE \u2014 capital preservation always wins",
    candles: [
      { o: 100, h: 100.4, l: 99.5, c: 99.7 },
      { o: 99.7, h: 100, l: 99.2, c: 99.4 },
      { o: 99.4, h: 99.6, l: 98.9, c: 99.1 },
      { o: 99.1, h: 99.3, l: 98.7, c: 98.9 },
      { o: 98.9, h: 99, l: 98.2, c: 98.3 },
      { o: 98.3, h: 98.4, l: 97.5, c: 97.6 },
      { o: 97.6, h: 97.7, l: 96.4, c: 96.5 }
    ],
    annotations: [
      { type: "level", price: 98.9, color: "#22c55e", label: "3-STRIKE STOPS HERE \u2014 flat from here" },
      { type: "level", price: 96.5, color: "#ef4444", label: "NO-RULE BLEEDS HERE", dash: true }
    ],
    verdict: { label: "WALK AWAY = TOMORROW WINS", type: "info" },
    caption: "Three same-direction losses ends the day. The 4th attempt is statistically the worst trade. Walk away \u2014 preserve capital."
  }
];
export {
  charts
};
