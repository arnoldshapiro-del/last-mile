// Daily Lessons — the living, growing part of Live Trading Mastery.
// Reverse-chronological by date. New lessons get added by the daily prompt.

const foundationDay = {
  date: '2026-05-06',
  title: 'Foundation Day — Building the Spine',
  sessionSummary:
    "The first conversation establishing the 10 Master Principles framework. Aligned on pole-first thinking, the bull-flag-as-spine concept, and the move from pattern recognition (5.5 years of it) to systematic execution. The framework's purpose is not to teach more patterns; it is to enforce one decision tree consistently every time.",
  teachingUnits: [
    {
      question: 'Why has 5.5 years of pattern recognition not produced consistent profitability?',
      answer:
        'Pattern recognition without a decision tree leaves every setup re-litigated in the moment. The chart triggers an emotional read; the read triggers a take or a pass; the take or pass is rationalized after the fact. The fix is not more patterns; the fix is one decision tree applied identically every time. The 10 Master Principles are that decision tree. The job from here is not to learn more shapes — it is to apply the same rules with no exceptions.',
      rules: [
        'Pattern recognition is a prerequisite, not a strategy',
        'A decision tree applied identically every time beats more patterns applied inconsistently',
      ],
      principleReinforced: 7,
    },
    {
      question: 'Why "pole first" before any other read?',
      answer:
        'A bull flag and a bear flag are visually identical except for direction. The shape of the flag does not tell you the direction of the trade — only the prior pole does. Reading the flag without first identifying the pole is guessing direction. Five-second test: if the pole is not obvious in five seconds, there is no setup. This filter eliminates 60-70% of "almost-trades" that have been the source of the missed-reset losses.',
      rules: [
        'Find the pole within 5 seconds — or pass',
        'Pole defines direction; flag is confirmation only',
      ],
      principleReinforced: 1,
    },
    {
      question: 'What does the 50% line do that nothing else can?',
      answer:
        "The 50% retrace line is the single binary signal on the chart that does not require interpretation. Under 50%, the pole's participants are still in control. Over 50%, control has shifted. There is no 'almost' or 'wait and see.' Closing past 50% is the cleanest thesis-kill signal and is the line that should have ended dozens of past trades 5-15 minutes earlier than they were closed.",
      rules: [
        'Mark the 50% line on every pole — non-negotiable',
        'Close past 50% = cancel and reassess; do not adjust',
      ],
      principleReinforced: 4,
    },
    {
      question: 'How does the staircase change how to handle a missed first flag?',
      answer:
        'A trend is not one trade — it is a stack of independent flags. The participants who built pole #2 are not the same participants who built pole #1; the volume signature, MACD agreement, and delta are all fresh. Missing flag #1 is not a reason to chase, and it is not a reason to skip flag #2. Flag #2 is a clean trade with clean rules. The professional move is to detach from flag #1 the moment the window closes and approach flag #2 as if walking up to the chart cold.',
      rules: [
        'Each flag judged independently — same rules every time',
        'Detach from missed trade the moment the window closes',
      ],
      principleReinforced: 5,
    },
    {
      question: 'Why "wait for the close" is non-negotiable',
      answer:
        'Wicks are probes. A wick through the trendline that closes back inside means the participants on the other side were stronger than the wick suggested. A close beyond the trendline is a market commitment — the other side capitulated within the 2-minute window. The cost of waiting for the close is missing a small fraction of the move. The cost of entering on the wick is being on the wrong side of every probe-and-reverse. The math favors the close every time.',
      rules: [
        '95% of valid entries require a fully-closed bar beyond the trendline',
        'Wicks lie; closes are commitments',
      ],
      principleReinforced: 3,
    },
  ],
  chartReferences: [
    {
      caption: 'Reference: Bull Flag template from Uni at TTG',
      analysis:
        'The textbook bull flag is the visual reference for what a healthy pole-and-flag looks like: a 4-8 bar pole on expanding volume, a 3-7 bar drift on contracting volume, the flag staying inside the upper half of the pole (above the 50% line), and a breakout close on volume confirmation. This is the shape the eye is being trained to find — and only when found, to act on.',
      symbol: 'Reference',
    },
  ],
  keyRules: [
    'Pole first, every time — five-second test or pass',
    'Mark the 50% line on every pole',
    'Wait for the 2-minute close — wicks lie',
    'Each flag in a staircase is independent',
    'Pattern + MACD + Delta + Volume must all align — four out of four',
  ],
  principlesReinforced: [1, 3, 4, 5, 7],
  whatIllDoDifferently:
    'Stop reacting to flag shape. Identify the pole first, every single time. Mark the 50% line as soon as the pole forms. Wait for the close. Apply the four-pillar test to every entry — no exceptions, no "this one looks too good to wait."',
};

const may7_2026 = {
  date: '2026-05-07',
  title: 'The Day Five Years Started to Turn',
  sessionSummary:
    'A foundational deep-dive covering pole identification, flag mechanics, entry timing, the 50% retracement rule, multiple-flag staircase trading, capitulation drops vs trend starts, trending vs ranging environments, and the psychological patterns behind repeated same-direction losses. Six losing live trades analyzed in detail, each producing a specific rule. Established the 10 Master Principles foundation. Built and verified the Live Trading Mastery module across both training programs. Final live attempt — long into OBv resistance — confirmed the value of the Daily Reset Rule and became the reason to stop. Today is the day the system started doing its job.',
  teachingUnits: [
    {
      question: 'Where should the stop go on a double bottom — below the trough, below the neckline, or in between?',
      answer:
        "There's no universal answer — it depends on entry quality and R:R needs. Bulkowski's research shows tight stops near recent lows get hit 61.5% of the time within a month, while throwbacks routinely test or dip 1-3% below the neckline on winning patterns. The hybrid solution: hard stop at the midpoint between neckline and second trough — that's the 'I was wrong about this trade' line. Add a mental rule that any candle CLOSING below the neckline = exit immediately, regardless of where the hard stop is. Verify before entry that the midpoint distance is at least 1.5x ATR. If it's tighter than that, the noise band will eat the stop.",
      rules: [
        'Hard stop at midpoint between neckline and second trough',
        'Mental exit rule: candle close below neckline = out, regardless of stop',
        'ATR check: midpoint distance must be at least 1.5x current ATR',
        'If midpoint is too tight for ATR, default to below the second trough',
      ],
      principleReinforced: 7,
    },
    {
      question: 'How do I tell if a chart is showing a bull flag or a bear flag when the consolidation looks identical in both?',
      answer:
        "They ARE identical in shape. The flag never tells you direction. Only the pole does. A flag is always a continuation of whatever came before it. Strong move up + pause = bull flag. Strong move down + pause = bear flag. The consolidation in the middle looks the same in both cases. Pros don't try to read it — they look at the prior impulse. Find the pole first. Always.",
      rules: [
        'Before any flag analysis, identify the prior impulsive move (the pole)',
        'Pole direction equals trade direction — flag shape never decides it',
        "If you can't immediately identify a clear pole, there is no flag — just noise",
        'Use the 5-minute timeframe to confirm pole quality if 2-minute is unclear',
      ],
      principleReinforced: 1,
    },
    {
      question: 'What actually counts as a valid pole? Can it be just one candle on a 2-minute chart?',
      answer:
        "Yes — a single large candle absolutely qualifies, especially on news-driven moves or open spikes. The pole is defined by character, not candle count. Valid poles include: one big candle, 3-5 consecutive candles with minimal body overlap, or candles with one shallow bounce inside (if the bounce retraces less than 30% of the prior move). What's NOT a pole: choppy back-and-forth where each down move retraces 50% or more before continuing. Test: zoom out to 5-minute. If it still looks like one strong impulse, it's a pole.",
      rules: [
        'Single candle on high volume can be a complete pole',
        'Multiple candles need minimal body overlap and steep angle',
        'A bounce within the pole is OK only if it retraces less than 30 percent',
        'Choppy with 50%+ retracements equals not a pole, just a trend',
        'Zoom-out test on the 5-minute confirms or denies pole quality',
      ],
      principleReinforced: 1,
    },
    {
      question: 'On a flag breakout entry, do I wait for the full candle to close, or can I enter when it breaks the trendline?',
      answer:
        "Wait for the close. 95% of entries should require a full 2-minute candle to close beyond the trendline. Wicks pierce trendlines constantly on fast timeframes and snap back — the close is your confirmation that buyers or sellers actually won that bar. There's a narrow exception: if price breaks with explosive velocity (4-6 points already past the line with time still left in the bar), and volume is surging, AND delta has flipped strongly in your direction. But this exception requires all three together. Make 'wait for the close' automatic.",
      rules: [
        'Default rule: a 2-minute candle must CLOSE beyond the trendline',
        'Wicks lie. Closes are truth.',
        'Exception requires explosive velocity AND volume surge AND delta flip',
        'When in doubt, wait for the close every single time',
      ],
      principleReinforced: 3,
    },
    {
      question: 'Are breakout entries always risky? You said the bull flag breakout was risky but the double bottom neckline breakout is fine — why?',
      answer:
        "Breakouts aren't the problem — stop logic is. Every entry, breakout or pullback, is only valid if the pattern structure gives a nearby, logical stop that creates acceptable R:R. The double bottom neckline breakout works because the pattern defines the stop. The bull flag trendline breakout works because the flag's low defines the stop. The risky breakout is the 'immediate resumption' move where there's no flag structure formed yet. Unifying rule: never enter where you can't immediately answer 'where exactly is my stop?' If you can't answer in 5 seconds, don't take the trade.",
      rules: [
        'Every entry needs a structurally defined stop that creates acceptable R:R',
        'Pattern structure (flag low, second trough, neckline) gives clean stops',
        'No defined structure equals no logical stop equals pass',
        '5-second test: can you state your stop and R:R immediately?',
      ],
      principleReinforced: 7,
    },
    {
      question: 'When does a flag setup get invalidated? How much retracement is too much?',
      answer:
        'When the flag retraces more than 50% of the pole, the flag thesis is dead. Cancel it. A clean flag retraces 25-50% of the pole. When the retrace exceeds 50-60%, you no longer have a flag — you have a reversal in progress. This is exactly what happened on the RTY capitulation chart today: the bounce retraced 80-90% of the initial drop, which meant the bear flag thesis died. Continuing to short into that retracement was fighting a market that had clearly changed direction.',
      rules: [
        'Flag retraces less than 50% of pole = setup intact',
        'Flag retraces 50-60% = warning, weakening setup',
        'Flag retraces more than 60% = setup is DEAD, cancel the trade idea',
        "Don't search for new entries on a setup that has been invalidated",
      ],
      principleReinforced: 4,
    },
    {
      question: 'If I missed the first flag in a trend, can I take the second or third flag that forms?',
      answer:
        'Yes — absolutely. A trending market makes a staircase. Each pole-flag-pole-flag step is its own independent trade with the same rules. Second and third flags are often CLEANER setups because the trend has now confirmed itself. Apply the same checklist every time. Warning sign: if poles are getting noticeably shorter step by step, the trend is tiring — take a smaller target or skip.',
      rules: [
        'Each flag in a sequence is its own independent trade',
        'Second and third flags are often more reliable because trend is confirmed',
        'Apply identical entry rules every time',
        'Diminishing pole sizes step-to-step means trend is tiring',
      ],
      principleReinforced: 5,
    },
    {
      question: 'I missed the entry but the setup still looks valid. Can I just enter late?',
      answer:
        "No. When the entry window passes, the trade no longer exists. There is no 'late entry' on a flag setup. Once price has moved meaningfully past the entry candle, you're chasing. Chasing means worse stop, worse R:R, no structural support. This is the impulse that costs the most money: 'I was right about direction, I just want to get in anyway.' Right about direction, wrong about timing — that combination compounds into the biggest losses.",
      rules: [
        "No such thing as a 'late entry' on a flag setup",
        'Once the entry candle has passed, that specific trade no longer exists',
        "Don't chase — entering late means bad stop, bad R:R, no structure",
        'Missing the entry is free; chasing the entry is expensive',
      ],
      principleReinforced: 6,
    },
    {
      question: "What's a capitulation drop and why does it often reverse instead of continue?",
      answer:
        'A capitulation drop is a massive-volume waterfall, usually in the first 30 minutes, that LOOKS like the start of a downtrend but is actually selling exhaustion. Every seller who wanted out sells at once. After that, no sellers left. Going short here is the trap. Counterintuitively, a huge volume spike on a sharp drop at the open is often a buy signal. Clues: volume several times the recent average, sharper than the prior trend, retraces more than 50% of the drop within the first hour. When all three are true, the bear thesis is dead.',
      rules: [
        'Big-volume waterfall in first 30 minutes does not equal trend start',
        'Capitulation means exhaustion, not initiation',
        'If price retraces more than 50% of the drop quickly, the short setup is dead',
        'Watch for the reversal trade after capitulation, not the continuation trade',
      ],
      principleReinforced: 10,
    },
    {
      question: 'How do I know if a session is trending or ranging — and why does it matter?',
      answer:
        "It matters more than the setup itself. Flags only work in trending sessions. In ranging sessions, breakouts get faded. Identify by looking at the prior 30-45 minutes. Higher highs + higher lows = trending up. Lower highs + lower lows = trending down. Oscillation between two levels with reversals at both ends = ranging. If your own system's trend lines are crossing in conflicting directions, that's the system telling you 'trend unclear' — pass on directional trades. The ES choppy day was the example: clean bear engulfings kept firing, real shorts kept getting reversed, because the environment was a range.",
      rules: [
        'Identify trending vs ranging BEFORE looking at any setup',
        'Higher highs + higher lows OR lower highs + lower lows = trending',
        'Oscillation with reversals at both ends = ranging — skip flag setups',
        'Conflicting or crossing trend lines = trend unclear = pass',
      ],
      principleReinforced: 2,
    },
    {
      question: "When my own pattern detector fires the opposite signal while I'm in a position, what should I do?",
      answer:
        "Listen to it. When you're short and a Bullish Engulfing fires on your chart, that is your tool literally telling you 'buyers just overpowered sellers in this candle.' That's not background noise. Same for Bearish Engulfing while long, Evening Star while long, Morning Star while short. Reversal signals = balance just shifted. At minimum raise your stop. More often, close the position on your own terms before the stop hits.",
      rules: [
        'Opposite-direction reversal pattern while in position = take it seriously',
        'Bullish Engulfing while short = consider exit or tighten stop immediately',
        'Bearish Engulfing while long = consider exit or tighten stop immediately',
        'Tools exist to inform you, not to be ignored when they go against your bias',
      ],
      principleReinforced: 9,
    },
    {
      question: 'How many losing trades before I should stop trading for the day?',
      answer:
        "Three same-direction losses in a session equals stop trading. Today is not your day. Walking away IS the trade. After three failed shorts (or three failed longs), the market is telling you this direction is not working today. The fourth attempt is almost always worse because by then your judgment is compromised by recovery psychology — you're not analyzing, you're trying to make back losses. Today's session ended with multiple losses culminating in a long entry into known OBv resistance at 7370. The Daily Reset Rule existed precisely for that moment.",
      rules: [
        'Three same-direction losses = stop trading the rest of the session',
        "Don't switch to opposite direction either if you're emotionally hot",
        'Recovery psychology produces worse trades, not better ones',
        'Walking away is a valid — and often the best — trade',
      ],
      principleReinforced: 8,
    },
  ],
  chartReferences: [
    {
      caption: 'RTY 2-min: Double bottom counter-trend trade',
      analysis:
        'Entered long on a perceived double bottom in the middle of an established intraday downtrend. Setup was technically valid in shape but invalid in environment. Counter-trend setups need higher confirmation than trend-aligned setups, and none of the secondary signals (delta flip, MACD cross, higher-timeframe alignment) were present.',
      symbol: 'RTY',
      timeframe: '2-minute',
      date: '2026-05-07',
    },
    {
      caption: 'ES 2-min: Bull flag in bearish session context',
      analysis:
        "Right pattern shape, wrong environment. The 'pole' was actually a recovery bounce within a larger downtrend (not a clean impulse), the flag candles were choppy, and delta was net negative through the consolidation. Entry into the breakout failed because the underlying flow was still bearish.",
      symbol: 'ES',
      timeframe: '2-minute',
      date: '2026-05-07',
    },
    {
      caption: 'RTY 2-min: Missed bear flag entry then chased',
      analysis:
        "After a clean morning waterfall and Evening Star formation, the ideal short entry was at the close of the Evening Star's third candle. Hesitated through that window. By the time entry was taken, price had recovered most of the original drop. Trade entered against an active recovery — a continuation entry into a reversal already in motion.",
      symbol: 'RTY',
      timeframe: '2-minute',
      date: '2026-05-07',
    },
    {
      caption: 'RTY 2-min: Capitulation reversal mistaken for bear flag',
      analysis:
        'Massive-volume waterfall at 9:00 looked like a bear flag setup. Entered short expecting continuation. Bounce retraced 80-90% of the drop — invalidating the bear flag thesis (50% rule) — and continued into a sustained reversal. Initial drop was a capitulation event, not a trend start.',
      symbol: 'RTY',
      timeframe: '2-minute',
      date: '2026-05-07',
    },
    {
      caption: 'ES 2-min: Multiple shorts in a choppy ranging session',
      analysis:
        "Took multiple short entries on bearish engulfing signals throughout a session that turned out to be a range, not a trend. Conflicting trend lines should have been read as 'trend unclear' — a hard pass on directional trades. Position sizing remained full despite repeated losses. Total commissions over $2,300 on a losing day. Symptom of being married to short direction.",
      symbol: 'ES',
      timeframe: '2-minute',
      date: '2026-05-07',
    },
    {
      caption: 'ES 2-min: Long entry into OBv resistance — the final loss',
      analysis:
        "After multiple losses, attempted to switch direction and go long on a green candle close above 7365. Entry was 2-5 points below an Order Block Validated zone at 7370 where institutional sellers were active. Bearish Engulfing #65 fired immediately at the OBv level. Trade had no room to develop — straight into resistance, reversed in one candle for $700 loss. Structural error: bought on first approach to developing neckline rather than waiting for confirmed breakout AFTER second low forms. Behavioral error: continued trading after multiple losses. This was the trade that proved the Daily Reset Rule's value.",
      symbol: 'ES',
      timeframe: '2-minute',
      date: '2026-05-07',
    },
  ],
  keyRules: [
    'Find the pole BEFORE looking at any flag — pole direction equals trade direction',
    'Identify trending vs ranging environment before considering any directional trade',
    'Wait for the 2-minute candle to fully CLOSE beyond the trendline — wicks lie',
    'Flag retracement greater than 50% of the pole means the thesis is dead — cancel the trade',
    'Each flag in a staircase is independent — apply the same rules every time',
    "When the entry window passes, the trade no longer exists — don't chase",
    'Pattern + MACD direction + Order Flow Delta + Volume must all align before entry',
    'Three same-direction losses in a session means stop trading immediately',
    "When your own system fires the opposite signal while you're in a position, listen to it",
    'Massive-volume drops in the first 30 minutes are often capitulation reversals, not trend starts',
    'Stop logic is everything — every entry needs a structurally defined stop nearby',
    "Don't buy into a known resistance level (OBv overhead) — wait for the break and close above it",
    'The 5-minute chart is the truth-filter for setups visible on the 2-minute chart',
    'Hybrid stop on double bottoms: hard stop at midpoint plus mental exit on neckline close',
    'Recovery psychology produces worse trades — the 4th trade after 3 losses is rarely better than the 1st',
  ],
  principlesReinforced: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  whatIllDoDifferently:
    "Tomorrow opens a fresh session and a fresh chat with Claude. The first thing I do before any trade is identify whether the session is trending or ranging — if it's not clearly trending, I pass on flag setups entirely. The first thing I do before any flag is find the pole — if I can't immediately point to a clean impulsive move, there's no trade. I wait for every entry candle to fully close before pulling the trigger, no exceptions. I count my losses — three in the same direction and I stop trading for the day, no matter how good the next setup looks. I respect my own tools — when a Bullish Engulfing fires while I'm short, or a Bearish Engulfing fires while I'm long, I take it seriously. Today proved every one of these rules in real losses. Tomorrow they're not theory — they're reflexes. The system is built. The principles are written. The losses today became the curriculum. Five years end here.",
};

export const dailyLessons = [may7_2026, foundationDay];

export function getDailyLesson(date) {
  return dailyLessons.find(l => l.date === date);
}

export function formatDailyDate(date) {
  const [y, m, d] = date.split('-').map(Number);
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];
  return `${months[m - 1]} ${d}, ${y}`;
}
