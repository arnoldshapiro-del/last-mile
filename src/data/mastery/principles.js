const principles = [
  {
    number: 1,
    title: "Pole First",
    short: "Find the pole before you look at any flag. The pole's direction is your trade direction.",
    body: "The pole is the impulsive move that earned the right to a continuation pattern. The flag is just a pause. Direction is set by the pole, not by the shape of the flag. A bullish flag inside a downward pole is not a trade \u2014 it is a retracement. The shape of the flag is identical in both directions; only the pole tells you which way to lean. Train the eye to find the pole first, every time. If you cannot identify the pole within five seconds of looking at a chart, there is no trade.",
    pillar: "structure",
    teachingUnits: [
      {
        question: "Why does direction live in the pole and not in the flag?",
        answer: "A bull flag and a bear flag are visually identical except for the prior move. The flag is just a pause; the pole is the conviction. If you read the flag without first identifying the pole, you are guessing direction. Pros never look at a flag in isolation \u2014 they look at what came before it and let that set the trade direction.",
        rules: [
          "Always identify the pole before evaluating the flag",
          "Pole direction = trade direction (no exceptions)",
          "A flag without a clearly identifiable pole = no trade"
        ]
      },
      {
        question: "What counts as a valid pole? Can it be just one candle?",
        answer: "Yes. A pole is defined by character, not by candle count. A single big candle on news-driven volume is a complete pole. Multi-candle poles (3-5 bars) work if there is minimal body overlap and a steep angle. A 1-3 bar pause inside the pole is OK as long as it retraces less than 30%. Choppy back-and-forth with 50%+ retracements is NOT a pole \u2014 it is just noise.",
        rules: [
          "Single big candle = complete pole (especially on news)",
          "Multi-candle poles need minimal body overlap",
          "Mid-pole bounce under 30% retrace = still one pole",
          "Choppy with 50%+ retracements = not a pole, just trend"
        ]
      },
      {
        question: "What is the 5-second test and why is it non-negotiable?",
        answer: "When a chart loads, give yourself five seconds to identify the pole. If you cannot point to it in five seconds, there is no setup. This is not a soft rule \u2014 it is a hard filter. Most missed trades and most chased trades come from skipping this step. The pole is either obvious or it is not there. If you are arguing for it, you are not seeing one.",
        rules: [
          "Five seconds \u2014 pole must be obvious",
          "If you have to argue, it is not a pole",
          "No pole = no trade, no exceptions"
        ]
      }
    ]
  },
  {
    number: 2,
    title: "Context Is Everything",
    short: "A clean setup in a ranging session loses. The same setup in a trending session wins.",
    body: "The 2-minute chart in front of you is not the trade. The session is the trade. Read the session first: is the market trending or ranging? Is volume expanding or contracting? Is the open driving in one direction, or chopping at the prior close? Identical setups produce opposite outcomes depending on context. The same bull flag at 10:15 in a trending tape wins; at 11:30 in a ranging tape it loses. Context is not background \u2014 it is the trade.",
    pillar: "context",
    teachingUnits: [
      {
        question: "How do I tell if a session is trending or ranging in the first 15 minutes?",
        answer: 'Three reads: (1) Is the open driving in one direction or chopping at the prior close? (2) Is volume expanding or contracting? (3) Is range building or compressing? Trending = drive + expansion + range. Ranging = chop + contraction + compression. Make the read in the first 15 minutes; revise as the session evolves. If your trend lines are crossing in conflicting directions, that is the system telling you "trend unclear" \u2014 pass on directional trades.',
        rules: [
          "Trending = drive + expansion + range",
          "Ranging = chop + contraction + compression",
          "Conflicting trend lines = trend unclear = pass"
        ]
      },
      {
        question: "What is the transition bar and how do I spot it?",
        answer: "Sessions transition. A trending morning becomes a ranging midday around 10:30-11:00 ET. The transition bar is usually a wide-range, low-conviction reversal that fails to follow through. After the transition, trend-trade setups stop carrying and range-trade setups start working. Read the transition bar; do not fight it. The playbook switches from poles-and-flags to range fades.",
        rules: [
          "Wide-range bar that fails to follow through = transition",
          "Trend morning \u2192 range midday around 10:30-11:00 ET",
          "After transition, switch from flag setups to range fades"
        ]
      },
      {
        question: "Why does the same setup win in one session and lose in another?",
        answer: "Setups are made by participants, not by shapes. A bull flag at 10:15 in a trending tape carries because the buyers driving the pole are still committed; their flag is a pause, not a fight. The same bull flag at 11:30 in a ranging tape fails because the buyers are gone \u2014 the flag is built by algos painting structure, not by committed money. Same shape, opposite outcome. Context decides the winner.",
        rules: [
          "Setups are made by participants, not shapes",
          "Trending tape: flags are pauses (real)",
          "Ranging tape: flags are paint (fake)"
        ]
      }
    ]
  },
  {
    number: 3,
    title: "Wait for the Close",
    short: "95% of entries require a 2-minute candle to fully close beyond the trendline. Wicks lie. Closes are truth.",
    body: "A wick through the trendline is not a breakout \u2014 it is a probe. Many wicks reverse before the candle closes, leaving traders who entered on the wick caught wrong-side at the end of the bar. Closes are commitments. A close beyond the trendline means the participants on the other side capitulated within the 2-minute window. Wait for the bar to fully close. The exception is rare and only after multi-confirmation has fired pre-close \u2014 and even then, the close must agree.",
    pillar: "execution",
    teachingUnits: [
      {
        question: "Why do wicks lie?",
        answer: "A wick is a probe. Many wicks reverse before the candle finishes \u2014 the buyers (or sellers) ran out of strength inside the 2-minute window and the close came back inside the trendline. Entering on the wick puts you on the wrong side of that reversal with full position size. The close is the verdict; the wick is just an attempt.",
        rules: [
          "Wicks are probes, not commitments",
          "Wick + close-back-inside = false breakout",
          "Closes are decisions"
        ]
      },
      {
        question: "What is the 5% exception and when does it apply?",
        answer: "Rare. When pattern, MACD, delta, and volume have ALL fired pre-close, and the bar is already 80%+ through its range with strong momentum, an early entry is defensible. Even then, the close must agree. If the bar reverses and closes back inside, the trade is wrong; cut and stand aside. The exception is not a license \u2014 it is a specific configuration with multi-confirmation.",
        rules: [
          "Exception requires explosive velocity AND volume surge AND delta flip",
          "All four pillars must be firing pre-close",
          "If close reverses, exit immediately"
        ]
      },
      {
        question: "What if I am right about direction but enter on the wick?",
        answer: "You are still wrong. The wick entry produces a worse stop and worse R:R. If price reverses inside the bar, you are stopped out for a loss on a setup that may still be valid \u2014 and you cannot re-enter at the close because the window has now passed. Patience on the close is free; the cost of skipping it is paying for a losing trade in a winning thesis.",
        rules: [
          "Right about direction, wrong about timing = still a loss",
          "Wait for the close every single time",
          "The cost of waiting is small; the cost of skipping is large"
        ]
      }
    ]
  },
  {
    number: 4,
    title: "The 50% Rule",
    short: "When a flag retraces more than 50% of the pole, the thesis is dead. Cancel and reassess.",
    body: 'A flag is a pause; a retracement past 50% of the pole is not a pause \u2014 it is a fight. Once price gives back more than half of the pole, the participants who built the pole are no longer in control. The thesis is dead. Cancel the trade. Do not "wait and see." Do not move the stop. Reassess from scratch \u2014 the new context may produce a setup in the opposite direction, but the old setup is finished.',
    pillar: "structure",
    teachingUnits: [
      {
        question: "How exactly do I draw the 50% line?",
        answer: "Draw a horizontal line at the midpoint between the pole start (close of the first pole bar) and the pole end (close of the last pole bar). Use closes, not wicks. The line should be drawn the moment the pole prints; this is the thesis-killer line. As price retraces in the flag, watch the line. A close beyond the line \u2014 not a wick \u2014 is the death of the thesis.",
        rules: [
          "Use closes (not wicks) for measurement",
          "Pole start close to pole end close, midpoint",
          "Draw the line as soon as the pole prints"
        ]
      },
      {
        question: "What if the wick tags 50% but the bar closes above? Trade still alive?",
        answer: "Yes. Wicks may probe the line; closes are the verdict. A wick into the 50% that closes back above is a successful retest, not a thesis kill. Hold the trade. The rule is binary on closes only: a candle that fully closes below the line cancels the thesis; anything else does not.",
        rules: [
          "Wick to 50% with close above = successful retest",
          "Trade only dies on a close below the line",
          "Do not act on intra-bar movement"
        ]
      },
      {
        question: "Why is moving the stop past the 50% line so expensive?",
        answer: 'Past the 50% break, the pole participants are no longer in control. The data has changed; the trade you sized into no longer exists. Widening the stop means you are now in a different (worse) trade with worse math. The original 1-point planned loss often becomes a 5-point realized loss. The 50% break IS the exit \u2014 not a suggestion to "give it room."',
        rules: [
          "Past 50% close = cancel, do not adjust",
          "Stop-widening turns small losses into big ones",
          "The 50% break is the data, not a moment to negotiate"
        ]
      }
    ]
  },
  {
    number: 5,
    title: "Each Flag Is Independent",
    short: "A trending market makes a staircase. Missing flag #1 doesn't disqualify flags #2 or #3.",
    body: "A trend is not one trade \u2014 it is a sequence of independent setups stacked on top of each other. Each flag in the staircase is judged on its own merits with the same rules. Missing the first flag in a session is not a reason to chase or to skip the second. The third flag in a staircase has the same statistical profile as the first, provided the same rules are met. Detach from the trade you missed. The next flag is the next trade.",
    pillar: "structure",
    teachingUnits: [
      {
        question: "If I missed flag #1, can I take flag #2 even though the trend has already moved?",
        answer: "Yes \u2014 absolutely. A trending market makes a staircase. Each pole-flag-pole-flag step is its own independent trade with the same rules. Second and third flags are often CLEANER setups because the trend has now confirmed itself. Apply the same checklist every time. The fact that flag #1 carried does not entitle flag #2 to skip a step; the fact that flag #1 was missed does not disqualify flag #2.",
        rules: [
          "Each flag is its own independent trade",
          "Apply the same rules every flag",
          "Missing one flag does not disqualify the next"
        ]
      },
      {
        question: "How do I tell if a staircase is tiring vs continuing?",
        answer: "Compare pole sizes step by step. Healthy staircase: poles are roughly the same size. Tiring staircase: poles get noticeably smaller each step (e.g., +2.5pt \u2192 +1.6pt \u2192 +0.65pt). When poles diminish, the trend energy is fading. Take smaller R:R targets, or skip the next setup entirely. The opposite \u2014 accelerating poles \u2014 is a parabola, which usually marks the end of the move.",
        rules: [
          "Diminishing pole sizes = trend tiring \u2192 smaller targets",
          "Accelerating poles = parabola \u2192 about to break",
          "Roughly equal pole sizes = healthy continuation"
        ]
      },
      {
        question: "What signals the end of a staircase?",
        answer: "Three signals: (1) the most recent pole's 50% line is broken on a close, (2) the session transitions out of trend (chop, range, conflicting trend lines), (3) multi-confirmation fails on a fresh setup that previously would have been clean. Any one of these = staircase done. Stop entering until a fresh pole forms.",
        rules: [
          "50% break of last pole = staircase end",
          "Session transition = staircase end",
          "Multi-confirmation failure on fresh setup = staircase end"
        ]
      }
    ]
  },
  {
    number: 6,
    title: "Missed = Gone",
    short: "When the entry window passes, the trade no longer exists. Late entries chase. Chasing kills accounts.",
    body: 'Every setup has a window \u2014 a 1-3 bar zone where the risk-reward math works. Outside that window, the same pattern is a different trade with worse math. The stop is too far, the target is too close, the volume signature has shifted. Late entries are not "the same trade a few seconds later." They are a different trade with a worse profile. If the window passed, the trade is gone. Wait for the next flag.',
    pillar: "execution",
    teachingUnits: [
      {
        question: "How long is the entry window in real terms?",
        answer: "The window is the 1-3 bars immediately after the breakout close. Bar 8 (the breakout bar) is the ideal entry. Bar 9 is still inside the window; R:R degrades slightly but stays acceptable. Bar 10 is the cliff \u2014 by here R:R has fallen below the 1.5:1 minimum. Bar 11 and beyond is a chase: same stop, much worse target, math is broken.",
        rules: [
          "Bar +0 (breakout bar) = ideal",
          "Bar +1, +2 = still in window",
          "Bar +3 and beyond = chase, R:R below threshold"
        ]
      },
      {
        question: "Why does chasing feel so right when it is so wrong?",
        answer: "Chasing feels right because the trend is real. Buyers driving the pole keep buying after you missed it. The chart goes higher. You feel late. Late feels like missing free money. But late is also where the trend ends \u2014 chasers buy the top because they are the last buyers. By the time chasing feels easy, the trade is over. The feeling and the math go in opposite directions.",
        rules: [
          "Chase feeling peaks right at the top",
          "Last buyers in the move are the ones trapped",
          "Trust math, not feeling"
        ]
      },
      {
        question: "What is the detachment drill for missed trades?",
        answer: 'Three sentences out loud: "I missed it." "That one is gone." "The next setup is the next trade." Drill until automatic. The hardest professional skill in trading is the ability to walk away clean from a missed trade. Without detachment, every missed trade poisons the next one with chase pressure.',
        rules: [
          'Name it: "I missed it"',
          'Accept it: "That one is gone"',
          'Reset: "Next setup is the next trade"'
        ]
      }
    ]
  },
  {
    number: 7,
    title: "Multi-Confirmation Required",
    short: "Pattern + MACD direction + Order Flow Delta + Volume must align. One out of four = pass.",
    body: "No single signal is enough. The pattern says one thing, but the trade is the four-pillar test: (1) pattern integrity, (2) MACD direction agrees, (3) order flow delta agrees, (4) volume confirms the breakout. When all four align, take the trade. When any one disagrees, pass. The pillars are not negotiable; they are not weighted; they are not majority-vote. Four out of four, or it is not a trade.",
    pillar: "confirmation",
    teachingUnits: [
      {
        question: "Why is three-out-of-four not good enough?",
        answer: "Three out of four is what every losing trade looks like before the loss. Almost-confirmation is the most expensive signal in trading because it feels like a green light but lacks the one pillar that would have warned you. The cost of waiting for the fourth pillar is missing some trades; the cost of skipping it is paying for trades that should not have been taken. The math is asymmetric \u2014 4/4 has high hit rate, 3/4 has roughly coin-flip outcomes.",
        rules: [
          "Three out of four = pass \u2014 no exceptions",
          "Almost-confirmation is the most expensive signal",
          "4/4 has edge; 3/4 is gambling"
        ]
      },
      {
        question: "What does it mean when MACD disagrees with a clean pattern?",
        answer: "MACD disagreement on a clean pattern is the most common reason a setup fails. The pattern looks valid, but MACD is rolling the other direction or flat. This is the market telling you the pole is not as strong as it looks \u2014 momentum is fading underneath the structure. The breakout that follows is usually fake. Pass.",
        rules: [
          "MACD disagrees \u2192 momentum fading \u2192 fake breakout incoming",
          "Pattern + MACD must agree on direction",
          "When in doubt, MACD is the tiebreaker"
        ]
      },
      {
        question: "What is order-flow delta and how do I read it?",
        answer: "Delta is the most direct read of who is winning each bar \u2014 net buyers minus net sellers in that 2-minute window. If price closes above the trendline but delta on that bar is negative, sellers absorbed the breakout. The pattern says one thing; the tape says another. Trust the tape. Delta-disagreement is the single most reliable warning of a fake breakout.",
        rules: [
          "Delta = net buyers \u2212 net sellers per bar",
          "Price up, delta down = absorption (fake)",
          "Trust the tape over the pattern"
        ]
      }
    ]
  },
  {
    number: 8,
    title: "The Daily Reset",
    short: "After 3 same-direction losses in a session, stop trading. Walking away IS the trade.",
    body: 'Three losses in the same direction in a single session is the market telling you the regime has shifted and your bias is wrong. The fourth attempt does not solve the prior three; it compounds them. Stop. Close the platform. Tomorrow is a new session with new context. The professional discipline is not "keep trying until it works" \u2014 it is "recognize when today is not your day and walk away." The day you walk away is the day you stop bleeding.',
    pillar: "psychology",
    teachingUnits: [
      {
        question: "Why three? Why not two or four?",
        answer: "Three is the statistical inflection point. After two losses, the data is ambiguous \u2014 it could be variance. After three losses in the same direction, the probability is overwhelming that the regime has shifted and your read is wrong. The data is unambiguous: traders who stop at three average significantly better outcomes than traders who keep going. The 4th attempt is statistically the worst trade of the day.",
        rules: [
          "3 losses in same direction = stop",
          "2 = could be variance; 4 = compounding error",
          "4th trade is statistically worst of the day"
        ]
      },
      {
        question: "What is recovery psychology and why is it dangerous?",
        answer: 'Recovery psychology is the headspace where the brain stops analyzing setups and starts trying to "make back" prior losses. Position size grows (revenge sizing). Stops get loose. Discipline slips. The trades taken in this state are not analyzed trades \u2014 they are emotional reactions. The 4th, 5th, 6th attempts after losses average 2-3x the planned loss size. Recovery psychology is how a normal red day becomes a blowup.',
        rules: [
          "Emotion replaces analysis after 3 losses",
          "Revenge sizing inflates losses",
          "Loose stops + emotional sizing = blowup risk"
        ]
      },
      {
        question: "What should I do AFTER the third loss?",
        answer: "Close the platform. Physically distance yourself from the chart. Do not journal at the desk \u2014 distance the day from the screens. When you do journal, journal each loss honestly: regime read, multi-confirm status, ignored signals. Tomorrow opens with that read. Watching the chart after 3 losses just primes the chase reflex; closing it removes the temptation entirely.",
        rules: [
          "Close the platform after L3",
          "Journal at distance, not at the desk",
          "Honest review of regime read & ignored signals"
        ]
      }
    ]
  },
  {
    number: 9,
    title: "Listen to Your Own Tools",
    short: "When your system flags the opposite signal while you're in a position, take it seriously.",
    body: 'You built the system to be smarter than you in the moment. When you are in a position and the system fires a contrary signal, the position is the bias and the signal is the truth. Do not rationalize. Do not "give it more time." The signal is what you would trust if you were flat. Trust it. Exit, reverse if appropriate, or stand aside. Position-defending is the bias talking; signal-following is the system talking.',
    pillar: "psychology",
    teachingUnits: [
      {
        question: "My pattern detector fired Bearish Engulfing while I am long \u2014 what now?",
        answer: 'Listen. That is your tool literally telling you "buyers were overpowered by sellers in this candle." Same for Bullish Engulfing while short, Evening Star while long, Morning Star while short. Reversal signals = balance just shifted. At minimum, raise your stop to break-even. More often, close the position on your own terms before the stop hits. The signal is the same one you would trust if you were flat \u2014 it does not stop being valid because you are in a position.',
        rules: [
          "Opposite reversal signal = exit consideration",
          "At minimum, tighten the stop",
          "Bias does not invalidate signals"
        ]
      },
      {
        question: "What is the difference between rationalizing and analyzing?",
        answer: 'Rationalizing starts with the conclusion ("I want this trade to work") and works backward to find evidence. Analyzing starts with the evidence and works forward to the conclusion. Rationalizing produces sentences like "give it more time" and "the pattern still looks OK." Analyzing produces sentences like "delta has flipped negative; the breakout has failed." Watch your own self-talk: if it sounds like you are defending the position, it is rationalization.',
        rules: [
          "Rationalizing: conclusion-first, evidence-shopping",
          "Analyzing: evidence-first, conclusion-following",
          "Defensive self-talk = rationalization warning"
        ]
      },
      {
        question: "How do I act on a signal in real-time without overthinking?",
        answer: "Pre-commit to the response. When the system fires the opposite signal, the response is automatic: tighten stop to entry, exit half, or exit full \u2014 depending on prior planning. The decision must be made BEFORE the moment, not in the moment. In-trade brain is biased; flat brain is honest. Use the flat brain to write the rules; use the in-trade brain only to execute them.",
        rules: [
          "Pre-commit to the response before entering",
          "In-trade decisions are bias-poisoned",
          "Execute the plan, do not negotiate it"
        ]
      }
    ]
  },
  {
    number: 10,
    title: "Capitulation Drops Reverse",
    short: "Massive-volume waterfalls in the first 30 minutes are often selling exhaustion, not trend start.",
    body: "A vertical drop on huge volume in the first 30 minutes of a session looks like a trend start to an unprepared eye. More often, it is the last sellers running out of inventory \u2014 a capitulation flush, not the beginning of a downtrend. Big drops at the open are short-seller traps: chasing them shorts the bottom. The signature is a long-tail hammer or a violent reclaim within 10-15 minutes. The play is not to short the drop; the play is to recognize the trap and look for the long reversal once the floor confirms.",
    pillar: "context",
    teachingUnits: [
      {
        question: "How do I recognize capitulation vs a real downtrend?",
        answer: "Three signs of capitulation: (1) volume on the drop is 2-3x the recent average, (2) the drop is steep and short \u2014 4-8 bars, not 20, (3) within 10-15 minutes after the low, a long-tail hammer or violent reclaim appears. When all three are present, you are looking at capitulation, not trend. A real downtrend has steady volume, gradual progression, and no climax-hammer.",
        rules: [
          "Capitulation: 2-3x volume + 4-8 bars + hammer/reclaim",
          "Real trend: steady volume + gradual + no hammer",
          "Climax bar prints the floor"
        ]
      },
      {
        question: "When is the right time to enter the long reversal?",
        answer: "Not on the hammer itself. Wait for the next bar to close higher than the hammer's close. That is the confirmation bar. Stop goes below the hammer's wick low (the absolute floor). Target is the post-capitulation rebound, which is often the same magnitude as the original drop or larger. Patience here beats prediction \u2014 entering on the hammer alone gets stopped 30% of the time.",
        rules: [
          "Wait for the bar AFTER the hammer to close higher",
          "Stop goes below the hammer wick low",
          "Target = magnitude of the original drop, often larger"
        ]
      },
      {
        question: "What is the trap that catches most traders?",
        answer: "The trap is shorting INTO the capitulation. The vertical drop looks like the start of a downtrend. New shorts pile in near the climax bar, expecting continuation. The hammer prints; the reversal begins; the new shorts are stopped out \u2014 and their forced covering adds fuel to the rally. Recognizing capitulation early means resisting the urge to short the move, AND being ready to fade it long once the floor confirms.",
        rules: [
          "Don't short into the climax bar",
          "New shorts power the reversal rally",
          "The reversal is the trade; the continuation is the trap"
        ]
      }
    ]
  }
];
export {
  principles
};
