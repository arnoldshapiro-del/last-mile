// Q&A pattern-type chart concept gallery — barrel export.
// Maps the journal entry's pattern_type field (lowercase, hyphenated) to a chart array.
// Also handles synonyms (alternate strings that should resolve to the same gallery).

import { charts as bullFlag } from './bull-flag';
import { charts as bearFlag } from './bear-flag';
import { charts as doubleTop } from './double-top';
import { charts as doubleBottom } from './double-bottom';
import { charts as breakouts } from './breakouts';
import { charts as orb } from './opening-range-breakout';
import { charts as vwap } from './vwap-rejection';
import { charts as insideBar } from './inside-bar';
import { charts as capitulation } from './capitulation';
import { charts as measuredMove } from './measured-move';
import { charts as stopPlacement } from './stop-placement';
import { charts as discipline } from './discipline';
import { charts as trendTrading } from './trend-trading';
import { charts as supportResistance } from './support-resistance';
import { charts as candlesticks } from './candlestick-patterns';

// Master concept catalog — used both for entry-card matching and the standalone Library view.

export const QA_CONCEPTS = [
  {
    slug: 'bull-flag',
    title: 'Bull Flag',
    description: 'Continuation pattern: pole, pause, breakout. The most common trend-day setup.',
    category: 'pattern',
    charts: bullFlag,
    synonyms: ['bull-flag', 'bullflag', 'bull flag', 'flag-bull'],
  },
  {
    slug: 'bear-flag',
    title: 'Bear Flag',
    description: 'Continuation pattern: pole down, drift up, breakdown. Mirror of the bull flag.',
    category: 'pattern',
    charts: bearFlag,
    synonyms: ['bear-flag', 'bearflag', 'bear flag', 'flag-bear'],
  },
  {
    slug: 'double-top',
    title: 'Double Top',
    description: 'Reversal pattern: twin peaks at the same price, then neckline break.',
    category: 'pattern',
    charts: doubleTop,
    synonyms: ['double-top', 'doubletop', 'double top', 'twin-top', 'M-pattern'],
  },
  {
    slug: 'double-bottom',
    title: 'Double Bottom',
    description: 'Reversal pattern: twin troughs at the same price, then neckline breakout.',
    category: 'pattern',
    charts: doubleBottom,
    synonyms: ['double-bottom', 'doublebottom', 'double bottom', 'twin-bottom', 'W-pattern'],
  },
  {
    slug: 'breakouts',
    title: 'Breakouts',
    description: 'Range and consolidation breakouts: the rules for entry, stop, target, and false-break detection.',
    category: 'pattern',
    charts: breakouts,
    synonyms: ['breakouts', 'breakout', 'range-break', 'consolidation-break'],
  },
  {
    slug: 'opening-range-breakout',
    title: 'Opening Range Breakout',
    description: 'First 30 minutes prints the OR; the first close beyond either side is the trade.',
    category: 'pattern',
    charts: orb,
    synonyms: ['opening-range-breakout', 'orb', 'or-break', 'opening-range'],
  },
  {
    slug: 'vwap-rejection',
    title: 'VWAP Rejection / Reclaim',
    description: 'Trend-following entries when price tags VWAP and rejects (continue) or reclaims (resume).',
    category: 'pattern',
    charts: vwap,
    synonyms: ['vwap-rejection', 'vwap', 'vwap-reclaim', 'vwap-touch'],
  },
  {
    slug: 'inside-bar',
    title: 'Inside Bar',
    description: 'Compression pattern: a bar entirely inside the prior bar. Break of either side is the trigger.',
    category: 'pattern',
    charts: insideBar,
    synonyms: ['inside-bar', 'inside-bars', 'ib', 'mother-bar'],
  },
  {
    slug: 'capitulation',
    title: 'Capitulation',
    description: 'Vertical drop on 2-3x volume followed by a long-tail hammer — the reversal trade.',
    category: 'pattern',
    charts: capitulation,
    synonyms: ['capitulation', 'flush', 'panic-low', 'capitulation-reversal'],
  },
  {
    slug: 'trend-trading',
    title: 'Trend Trading',
    description: 'HH/HL recognition, pullback entries, trendline breaks, and counter-trend timing.',
    category: 'concept',
    charts: trendTrading,
    synonyms: ['trend-trading', 'trend', 'pullback', 'trendline', 'hh-hl'],
  },
  {
    slug: 'support-resistance',
    title: 'Support & Resistance',
    description: 'Static levels, role reversals, prior-day high/low, VWAP as dynamic S/R, and confluence.',
    category: 'concept',
    charts: supportResistance,
    synonyms: ['support-resistance', 'support', 'resistance', 's/r', 'levels', 'pdh', 'pdl'],
  },
  {
    slug: 'candlestick-patterns',
    title: 'Candlestick Patterns',
    description: 'Engulfing, hammer, shooting star, doji — single-bar reversal signals at key levels.',
    category: 'concept',
    charts: candlesticks,
    synonyms: ['candlestick-patterns', 'candlestick', 'engulfing', 'hammer', 'shooting-star', 'doji'],
  },
  {
    slug: 'measured-move',
    title: 'Measured Move (Targets)',
    description: 'How to size targets across patterns: pole length, pattern height, OR width, fibonacci extensions.',
    category: 'concept',
    charts: measuredMove,
    synonyms: ['measured-move', 'targets', 'target', 'measured', 'fib-extension'],
  },
  {
    slug: 'stop-placement',
    title: 'Stop Placement',
    description: 'Structural vs arbitrary stops, ATR awareness, trailing rules, the never-widen rule.',
    category: 'concept',
    charts: stopPlacement,
    synonyms: ['stop-placement', 'stops', 'stop', 'risk-management', 'trailing-stop'],
  },
  {
    slug: 'discipline',
    title: 'Discipline / Psychology',
    description: '3-strike rule, give-back, FOMO, overtrading, walking away — the psychological toolkit.',
    category: 'psychology',
    charts: discipline,
    synonyms: ['discipline', 'psychology', 'three-strikes', 'give-back', 'fomo', 'overtrading', 'mistake', 'insight'],
  },
];

// Index by slug AND synonym for fast lookup from a JournalEntry.pattern_type
const SLUG_INDEX = new Map();
for (const c of QA_CONCEPTS) {
  SLUG_INDEX.set(c.slug, c);
  for (const s of (c.synonyms || [])) SLUG_INDEX.set(s.toLowerCase(), c);
}

export function findConceptForEntry(patternType, tags) {
  if (patternType) {
    const direct = SLUG_INDEX.get(patternType.toLowerCase().trim());
    if (direct) return direct;
  }
  // Fallback: try the entry's tags
  if (tags && tags.length) {
    for (const t of tags) {
      const m = SLUG_INDEX.get(t.toLowerCase().trim());
      if (m) return m;
    }
  }
  return null;
}
