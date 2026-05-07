// Master Checklists — pre-trade, in-trade, post-trade.

export const preTradeChecklist = [
  {
    id: 'pre-1',
    text: 'Identify the pole — five-second test',
    detail: 'If you cannot point to a clear pole within five seconds, there is no setup. The pole is the impulsive move that earned the right to a flag.',
    principleRef: 1,
  },
  {
    id: 'pre-2',
    text: 'Read the session — trending or ranging?',
    detail: 'Trending = drive + expansion + range. Ranging = chop + contraction + compression. Trend setups belong in trending sessions. Range setups belong in ranging sessions. Do not mix.',
    principleRef: 2,
  },
  {
    id: 'pre-3',
    text: 'Mark the 50% line of the pole',
    detail: 'Draw a horizontal line at the midpoint between the pole start and pole end. This line is your thesis-killer.',
    principleRef: 4,
  },
  {
    id: 'pre-4',
    text: 'Confirm the flag is healthy, not fighting',
    detail: '3-7 bars, contracting volume, smaller bars than the pole. Counter-bars bigger than pole bars = warning.',
    principleRef: 4,
  },
  {
    id: 'pre-5',
    text: 'Multi-confirmation check — all four pillars',
    detail: 'Pattern integrity + MACD agrees + delta agrees + volume confirms. Three out of four = pass.',
    principleRef: 7,
  },
  {
    id: 'pre-6',
    text: 'Define entry, stop, and target before entering',
    detail: 'Entry: breakout close. Stop: under the flag low (bull) or over the flag high (bear). Target: measured move from pole length. R:R must be at least 1.5:1.',
    principleRef: 3,
  },
  {
    id: 'pre-7',
    text: 'Confirm trade window is open (1-3 bars after breakout)',
    detail: 'If the breakout already happened more than 3 bars ago, the window is closed. Wait for the next setup.',
    principleRef: 6,
  },
  {
    id: 'pre-8',
    text: 'Check loss count — under 3 same-direction losses today?',
    detail: 'If 3 same-direction losses already, stop. Walk away. Tomorrow is a new session.',
    principleRef: 8,
  },
];

export const inTradeChecklist = [
  {
    id: 'in-1',
    text: 'Stop is honored — no widening, no removing',
    detail: 'The stop was set on a fresh read; the in-trade brain wants to defend the position. Trust the flat-trader you were two minutes ago.',
    principleRef: 9,
  },
  {
    id: 'in-2',
    text: 'Watch for the 50% line break',
    detail: 'If price closes back through the 50% line of the pole, the thesis is dead. Exit immediately, do not "give it room."',
    principleRef: 4,
  },
  {
    id: 'in-3',
    text: 'Watch for system contradiction',
    detail: 'If your system fires the opposite signal while you are in the position, treat the signal as the truth and the position as the bias. Do not rationalize.',
    principleRef: 9,
  },
  {
    id: 'in-4',
    text: 'No averaging down — ever',
    detail: 'Averaging down is a hope-trade. The thesis was the thesis at entry; if it fails, exit. Adding to a loser is how a normal loss becomes a session-ender.',
  },
  {
    id: 'in-5',
    text: 'Take partial at first target if defined',
    detail: 'If your plan included a partial, take it at target. Banking partial profit removes the chase-the-stop pressure on the rest.',
  },
  {
    id: 'in-6',
    text: 'Trail stop only on confirmed structure',
    detail: 'Trail to break-even after the first measured move bar; trail higher only after a fresh higher low (bull) or lower high (bear). Do not trail on emotion.',
  },
];

export const postTradeChecklist = [
  {
    id: 'post-1',
    text: 'Was the pole clear in five seconds?',
    detail: 'If you had to argue for the pole, the trade started wrong. Note it.',
    principleRef: 1,
  },
  {
    id: 'post-2',
    text: 'Was the session read correctly?',
    detail: 'Trending vs ranging — was the read right at entry, and did the session evolve as expected?',
    principleRef: 2,
  },
  {
    id: 'post-3',
    text: 'Did all four pillars align at entry?',
    detail: 'Honest review: pattern + MACD + delta + volume. If any was missing or weak, note it.',
    principleRef: 7,
  },
  {
    id: 'post-4',
    text: 'Was the entry inside the 1-3 bar window?',
    detail: 'If late, the math was already worse. Note whether the trade outcome reflects that.',
    principleRef: 6,
  },
  {
    id: 'post-5',
    text: 'Was the stop honored without adjustment?',
    detail: 'If you moved or removed the stop, the trade is invalidated as a clean data point. Note honestly.',
    principleRef: 9,
  },
  {
    id: 'post-6',
    text: 'Did the 50% line hold (if breakout) or break (if loss)?',
    detail: 'The 50% line is the cleanest data point in the trade. Did it confirm the thesis or kill it?',
    principleRef: 4,
  },
  {
    id: 'post-7',
    text: 'What was the session loss count after this trade?',
    detail: 'If 3 same-direction losses, the day is over. Confirm you stopped trading.',
    principleRef: 8,
  },
  {
    id: 'post-8',
    text: 'One sentence: what would I do differently?',
    detail: 'Force the answer to one sentence. If you cannot articulate it in one sentence, the lesson is not yet clear.',
  },
];
