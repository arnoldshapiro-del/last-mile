const charts = [
  {
    title: "LONG POSITION + BEARISH ENGULFING \u2014 your tool is talking",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 101.5, l: 99.95, c: 101.4 },
      { o: 101.4, h: 102.7, l: 101.3, c: 102.6 },
      { o: 102.6, h: 103.8, l: 102.5, c: 103.7 },
      { o: 103.7, h: 104, l: 103.4, c: 103.9 },
      // entered LONG ~103.9
      { o: 103.9, h: 104, l: 102.8, c: 102.9 },
      // small red — concern
      { o: 102.9, h: 104.1, l: 102.85, c: 103.95 },
      // green push — feels safe
      { o: 103.95, h: 104, l: 102.4, c: 102.5 },
      // BEARISH ENGULFING
      { o: 102.5, h: 102.7, l: 101, c: 101.1 }
    ],
    annotations: [
      { type: "arrow", at: { i: 4, price: 103.9 }, direction: "up", color: "#5eead4", label: "LONG" },
      { type: "badge", at: { i: 7, price: 102.5 }, text: "BEARISH ENGULFING", color: "#ef4444" },
      { type: "arrow", at: { i: 7, price: 103 }, direction: "down", color: "#ef4444", label: "EXIT NOW" }
    ],
    verdict: { label: "YOUR SYSTEM SPOKE \u2014 LISTEN", type: "bad" },
    caption: `Long, then a Bearish Engulfing fires on your own pattern detector. That is your tool literally saying "sellers won this bar." Exit. Don't debate.`
  },
  {
    title: "SHORT POSITION + BULLISH ENGULFING \u2014 same rule, opposite side",
    candles: [
      { o: 105, h: 105.3, l: 104.7, c: 105 },
      { o: 105, h: 105.1, l: 103.5, c: 103.6 },
      { o: 103.6, h: 103.8, l: 102.6, c: 102.7 },
      { o: 102.7, h: 102.9, l: 101.6, c: 101.7 },
      { o: 101.7, h: 101.9, l: 101, c: 101.1 },
      // entered SHORT
      { o: 101.1, h: 102, l: 101, c: 101.9 },
      // small green
      { o: 101.9, h: 102, l: 101.2, c: 101.3 },
      // pulled back — feels safe
      { o: 101.3, h: 102.7, l: 101.25, c: 102.6 },
      // BULLISH ENGULFING
      { o: 102.6, h: 104, l: 102.5, c: 103.9 }
    ],
    annotations: [
      { type: "arrow", at: { i: 4, price: 101.1 }, direction: "down", color: "#5eead4", label: "SHORT" },
      { type: "badge", at: { i: 7, price: 102.6 }, text: "BULLISH ENGULFING", color: "#22c55e" },
      { type: "arrow", at: { i: 7, price: 102 }, direction: "up", color: "#22c55e", label: "COVER NOW" }
    ],
    verdict: { label: "TOOL OVERRIDES BIAS", type: "bad" },
    caption: "Short, then Bullish Engulfing fires. Buyers overpowered sellers in this bar. Cover the short \u2014 do not wait for the stop."
  },
  {
    title: "POSITION = BIAS, SIGNAL = TRUTH",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 101.4, l: 99.9, c: 101.3 },
      { o: 101.3, h: 102.5, l: 101.2, c: 102.4 },
      { o: 102.4, h: 103.6, l: 102.3, c: 103.5 },
      { o: 103.5, h: 103.7, l: 103, c: 103.4 },
      { o: 103.4, h: 103.6, l: 102.7, c: 102.8 },
      { o: 102.8, h: 103, l: 101.6, c: 101.7 },
      // signal: rolling
      { o: 101.7, h: 101.9, l: 100.4, c: 100.5 }
    ],
    annotations: [
      { type: "badge", at: { i: 4, price: 103.4 }, text: "POSITION (LONG)", color: "#5eead4" },
      { type: "badge", at: { i: 6, price: 101.7 }, text: "SIGNAL (SHORT)", color: "#ef4444" },
      { type: "level", price: 103.5, color: "#94a3b8", label: "WHAT YOU WANT", dash: true },
      { type: "level", price: 100.5, color: "#ef4444", label: "WHAT THE TAPE SAYS", dash: true }
    ],
    verdict: { label: "TRUST THE SYSTEM", type: "warn" },
    caption: "When position and signal disagree, the position is your hope and the signal is the data. The system is smarter in the moment than your in-trade brain."
  },
  {
    title: 'RATIONALIZATION TRAP \u2014 "give it more time"',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 101.4, l: 99.9, c: 101.3 },
      { o: 101.3, h: 102.5, l: 101.2, c: 102.4 },
      { o: 102.4, h: 103.6, l: 102.3, c: 103.5 },
      { o: 103.5, h: 104, l: 103, c: 103.9 },
      // long here
      { o: 103.9, h: 104, l: 102.5, c: 102.6 },
      // signal #1 to exit (ignored)
      { o: 102.6, h: 102.9, l: 102, c: 102.1 },
      // signal #2 (ignored)
      { o: 102.1, h: 102.3, l: 100.5, c: 100.6 },
      // forced stop
      { o: 100.6, h: 100.8, l: 99, c: 99.1 }
    ],
    annotations: [
      { type: "arrow", at: { i: 4, price: 103.9 }, direction: "up", color: "#5eead4", label: "LONG" },
      { type: "badge", at: { i: 5, price: 102.6 }, text: '"too early"', color: "#fbbf24" },
      { type: "badge", at: { i: 6, price: 102.1 }, text: '"give it time"', color: "#fbbf24" },
      { type: "badge", at: { i: 7, price: 100.6 }, text: "STOPPED", color: "#ef4444" }
    ],
    verdict: { label: "EXCUSES = LARGER LOSS", type: "bad" },
    caption: "Two signals to exit. Both rationalized away. The stop hits 3 points lower than where the system told you to leave."
  },
  {
    title: "SIGNAL HONORED EARLY \u2014 small loss instead of big",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 101.4, l: 99.9, c: 101.3 },
      { o: 101.3, h: 102.5, l: 101.2, c: 102.4 },
      { o: 102.4, h: 103.6, l: 102.3, c: 103.5 },
      { o: 103.5, h: 104, l: 103, c: 103.9 },
      // long
      { o: 103.9, h: 104, l: 102.5, c: 102.6 },
      // signal — EXIT
      { o: 102.6, h: 102.9, l: 100.4, c: 100.5 }
      // would have stopped here
    ],
    annotations: [
      { type: "arrow", at: { i: 4, price: 103.9 }, direction: "up", color: "#5eead4", label: "LONG" },
      { type: "arrow", at: { i: 5, price: 102.6 }, direction: "down", color: "#fbbf24", label: "EXIT ON SIGNAL" },
      { type: "level", price: 100.5, color: "#94a3b8", label: "Where stop would have hit", dash: true }
    ],
    verdict: { label: "SAVED 2 POINTS", type: "good" },
    caption: "Signal-honored exit. Loss capped at 1.3 points instead of the 3.4 points the stop would have realized."
  },
  {
    title: "THE TOOL WAS RIGHT \u2014 confirmed after the fact",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 101.4, l: 99.9, c: 101.3 },
      { o: 101.3, h: 102.5, l: 101.2, c: 102.4 },
      { o: 102.4, h: 103.6, l: 102.3, c: 103.5 },
      { o: 103.5, h: 104, l: 103, c: 103.9 },
      { o: 103.9, h: 104, l: 102.5, c: 102.6 },
      // EXIT signal
      { o: 102.6, h: 102.9, l: 100.4, c: 100.5 },
      { o: 100.5, h: 100.8, l: 98.6, c: 98.7 },
      { o: 98.7, h: 98.9, l: 96.6, c: 96.7 }
      // continued lower
    ],
    annotations: [
      { type: "arrow", at: { i: 5, price: 102.6 }, direction: "down", color: "#22c55e", label: "TOOL EXIT" },
      { type: "badge", at: { i: 8, price: 96.7 }, text: "\u22127 PTS \u2014 TOOL WAS RIGHT", color: "#22c55e" }
    ],
    verdict: { label: "POST-MORTEM PROVES IT", type: "good" },
    caption: "The signal you ignored would have saved 7 points. After the fact, every ignored signal looks obvious. Train to honor it in the moment."
  }
];
export {
  charts
};
