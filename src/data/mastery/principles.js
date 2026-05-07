// The 10 Master Principles — the spine of Live Trading Mastery.
// These are the constants. Every daily lesson reinforces one or more of them.

export const principles = [
  {
    number: 1,
    title: 'Pole First',
    short: "Find the pole before you look at any flag. The pole's direction is your trade direction.",
    body: 'The pole is the impulsive move that earned the right to a continuation pattern. The flag is just a pause. Direction is set by the pole, not by the shape of the flag. A bullish flag inside a downward pole is not a trade — it is a retracement. The shape of the flag is identical in both directions; only the pole tells you which way to lean. Train the eye to find the pole first, every time. If you cannot identify the pole within five seconds of looking at a chart, there is no trade.',
    pillar: 'structure',
  },
  {
    number: 2,
    title: 'Context Is Everything',
    short: 'A clean setup in a ranging session loses. The same setup in a trending session wins.',
    body: 'The 2-minute chart in front of you is not the trade. The session is the trade. Read the session first: is the market trending or ranging? Is volume expanding or contracting? Is the open driving in one direction, or chopping at the prior close? Identical setups produce opposite outcomes depending on context. The same bull flag at 10:15 in a trending tape wins; at 11:30 in a ranging tape it loses. Context is not background — it is the trade.',
    pillar: 'context',
  },
  {
    number: 3,
    title: 'Wait for the Close',
    short: '95% of entries require a 2-minute candle to fully close beyond the trendline. Wicks lie. Closes are truth.',
    body: 'A wick through the trendline is not a breakout — it is a probe. Many wicks reverse before the candle closes, leaving traders who entered on the wick caught wrong-side at the end of the bar. Closes are commitments. A close beyond the trendline means the participants on the other side capitulated within the 2-minute window. Wait for the bar to fully close. The exception is rare and only after multi-confirmation has fired pre-close — and even then, the close must agree.',
    pillar: 'execution',
  },
  {
    number: 4,
    title: 'The 50% Rule',
    short: 'When a flag retraces more than 50% of the pole, the thesis is dead. Cancel and reassess.',
    body: 'A flag is a pause; a retracement past 50% of the pole is not a pause — it is a fight. Once price gives back more than half of the pole, the participants who built the pole are no longer in control. The thesis is dead. Cancel the trade. Do not "wait and see." Do not move the stop. Reassess from scratch — the new context may produce a setup in the opposite direction, but the old setup is finished.',
    pillar: 'structure',
  },
  {
    number: 5,
    title: 'Each Flag Is Independent',
    short: "A trending market makes a staircase. Missing flag #1 doesn't disqualify flags #2 or #3.",
    body: 'A trend is not one trade — it is a sequence of independent setups stacked on top of each other. Each flag in the staircase is judged on its own merits with the same rules. Missing the first flag in a session is not a reason to chase or to skip the second. The third flag in a staircase has the same statistical profile as the first, provided the same rules are met. Detach from the trade you missed. The next flag is the next trade.',
    pillar: 'structure',
  },
  {
    number: 6,
    title: 'Missed = Gone',
    short: 'When the entry window passes, the trade no longer exists. Late entries chase. Chasing kills accounts.',
    body: 'Every setup has a window — a 1-3 bar zone where the risk-reward math works. Outside that window, the same pattern is a different trade with worse math. The stop is too far, the target is too close, the volume signature has shifted. Late entries are not "the same trade a few seconds later." They are a different trade with a worse profile. If the window passed, the trade is gone. Wait for the next flag.',
    pillar: 'execution',
  },
  {
    number: 7,
    title: 'Multi-Confirmation Required',
    short: 'Pattern + MACD direction + Order Flow Delta + Volume must align. One out of four = pass.',
    body: 'No single signal is enough. The pattern says one thing, but the trade is the four-pillar test: (1) pattern integrity, (2) MACD direction agrees, (3) order flow delta agrees, (4) volume confirms the breakout. When all four align, take the trade. When any one disagrees, pass. The pillars are not negotiable; they are not weighted; they are not majority-vote. Four out of four, or it is not a trade.',
    pillar: 'confirmation',
  },
  {
    number: 8,
    title: 'The Daily Reset',
    short: 'After 3 same-direction losses in a session, stop trading. Walking away IS the trade.',
    body: 'Three losses in the same direction in a single session is the market telling you the regime has shifted and your bias is wrong. The fourth attempt does not solve the prior three; it compounds them. Stop. Close the platform. Tomorrow is a new session with new context. The professional discipline is not "keep trying until it works" — it is "recognize when today is not your day and walk away." The day you walk away is the day you stop bleeding.',
    pillar: 'psychology',
  },
  {
    number: 9,
    title: 'Listen to Your Own Tools',
    short: "When your system flags the opposite signal while you're in a position, take it seriously.",
    body: 'You built the system to be smarter than you in the moment. When you are in a position and the system fires a contrary signal, the position is the bias and the signal is the truth. Do not rationalize. Do not "give it more time." The signal is what you would trust if you were flat. Trust it. Exit, reverse if appropriate, or stand aside. Position-defending is the bias talking; signal-following is the system talking.',
    pillar: 'psychology',
  },
  {
    number: 10,
    title: 'Capitulation Drops Reverse',
    short: 'Massive-volume waterfalls in the first 30 minutes are often selling exhaustion, not trend start.',
    body: 'A vertical drop on huge volume in the first 30 minutes of a session looks like a trend start to an unprepared eye. More often, it is the last sellers running out of inventory — a capitulation flush, not the beginning of a downtrend. Big drops at the open are short-seller traps: chasing them shorts the bottom. The signature is a long-tail hammer or a violent reclaim within 10-15 minutes. The play is not to short the drop; the play is to recognize the trap and look for the long reversal once the floor confirms.',
    pillar: 'context',
  },
];
