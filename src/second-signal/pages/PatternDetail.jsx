import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import ExpandableChart from '../components/ExpandableChart.jsx';
import { generatePattern } from '../patterns.js';
import { markLessonComplete } from '../storage.js';

const PATTERNS = {
  'double-bottom': {
    slug: 'double-bottom',
    name: 'Double Bottom H2',
    direction: 'long',
    sigName: 'H',
    tone: 'bull',
    intro:
      'Price drops hard. It hits a level — a prior low, a round number, a moving average — and the first bull bar fires. That bar is H1. The pullback that follows stays above H1\'s low. Then a second strong bull bar prints. That is H2. Buy 1 tick above its high.',
    h1Test: [
      'Was there a real down move before this bar? (Multiple red bars in a row, not just choppy sideways action.)',
      'Is this candle a real signal bar? (Big green body, closes near high, small lower wick.)',
      'Is the price at or near a meaningful level? (Prior low, round number, moving average, support line.)',
    ],
    h2Test: [
      'Did H1 fail to launch a real rally? (Price stalled or pulled back instead of running.)',
      'Did the pullback from H1 stay ABOVE H1\'s low? (Critical — if price went below H1\'s low by even one tick, the count resets.)',
      'Did the pullback form a clean higher low? (Clear low point where price stopped going down and reversed.)',
      'Is this new candle a real signal bar? (Same anatomy rules as H1.)',
    ],
    entry: 'Buy 1 tick above H2\'s high.',
    stop: '3 ticks below the signal bar\'s low (3 ticks is the empirical sweet spot for MES 2-min — not 1 tick).',
    target:
      'Take partial at the neckline (the swing high between H1 and H2). Take the rest at the measured move (pattern height projected up from the neckline).',
  },
  'double-top': {
    slug: 'double-top',
    name: 'Double Top L2',
    direction: 'short',
    sigName: 'L',
    tone: 'bear',
    intro:
      'Price rallies hard. It hits a level — a prior high, a round number, a moving average — and the first bear bar fires. That bar is L1. The pullback that follows stays below L1\'s high. Then a second strong bear bar prints. That is L2. Sell 1 tick below its low.',
    h1Test: [
      'Was there a real up move before this bar? (Multiple green bars in a row.)',
      'Is this candle a real signal bar? (Big red body, closes near low, small upper wick.)',
      'Is the price at or near a meaningful level? (Prior high, round number, moving average, resistance.)',
    ],
    h2Test: [
      'Did L1 fail to launch a real drop? (Price stalled or pulled back instead of running.)',
      'Did the pullback from L1 stay BELOW L1\'s high? (Critical — if price went above L1\'s high by even one tick, the count resets.)',
      'Did the pullback form a clean lower high? (Clear high point where price stopped going up and reversed.)',
      'Is this new candle a real signal bar? (Same anatomy rules as L1.)',
    ],
    entry: 'Sell 1 tick below L2\'s low.',
    stop: '3 ticks above the signal bar\'s high.',
    target:
      'Take partial at the neckline (the swing low between L1 and L2). Take the rest at the measured move (pattern height projected down from the neckline).',
  },
  'bull-flag': {
    slug: 'bull-flag',
    name: 'Bull Flag H2',
    direction: 'long',
    sigName: 'H',
    tone: 'bull',
    intro:
      'A strong rally (the flagpole) finishes. Price pulls back gently — 2 to 4 bars, small bodies. The first bull bar inside that pullback is H1. The micro-pullback that follows stays above H1\'s low. The next strong bull bar is H2 — the continuation entry.',
    h1Test: [
      'Was there a real up move (flagpole) before the pullback? (Multiple strong green bars.)',
      'Is this candle a real signal bar inside the flag? (Big green body, closes near high, small lower wick.)',
      'Is the flag still a tight pullback (no big bear bars breaking the structure)?',
    ],
    h2Test: [
      'Did H1 fail to immediately resume the rally? (One small bar of hesitation is fine.)',
      'Did the micro-pullback stay ABOVE H1\'s low?',
      'Did the pullback form a clean higher low inside the flag?',
      'Is this new candle a real signal bar (big body, closes near high)?',
    ],
    entry: 'Buy 1 tick above H2\'s high.',
    stop: '3 ticks below H2\'s low (or below the flag\'s low if it\'s tighter).',
    target: 'Project the flagpole height from the H2 entry. Take partial there; trail the rest if trend continues.',
  },
  'bear-flag': {
    slug: 'bear-flag',
    name: 'Bear Flag L2',
    direction: 'short',
    sigName: 'L',
    tone: 'bear',
    intro:
      'A strong drop (the flagpole) finishes. Price bounces gently — 2 to 4 bars, small bodies. The first bear bar inside that bounce is L1. The micro-bounce that follows stays below L1\'s high. The next strong bear bar is L2 — the continuation entry.',
    h1Test: [
      'Was there a real down move (flagpole) before the bounce?',
      'Is this candle a real signal bar inside the flag (big red body, closes near low, small upper wick)?',
      'Is the flag still a tight bounce (no big bull bars breaking structure)?',
    ],
    h2Test: [
      'Did L1 fail to immediately resume the drop?',
      'Did the micro-bounce stay BELOW L1\'s high?',
      'Did the bounce form a clean lower high inside the flag?',
      'Is this new candle a real signal bar (big body, closes near low)?',
    ],
    entry: 'Sell 1 tick below L2\'s low.',
    stop: '3 ticks above L2\'s high (or above the flag\'s high if tighter).',
    target: 'Project the flagpole height down from the L2 entry. Take partial there; trail the rest if trend continues.',
  },
};

const EXAMPLES = [
  { variant: 'clean-1',        title: 'Clean win 1',     tone: 'bull',
    caption: 'Textbook setup. Down move, H1, pullback above H1 low, H2 fires, trade works.' },
  { variant: 'clean-2',        title: 'Clean win 2',     tone: 'bull',
    caption: 'Slight variation — slower pullback. Same logic, same outcome.' },
  { variant: 'clean-3',        title: 'Clean win 3',     tone: 'bull',
    caption: 'Compressed version. Fewer bars, faster move, but the structure is identical.' },
  { variant: 'count-restart',  title: 'Count restart',   tone: 'warn',
    caption: 'H1 prints, then price breaks the H1 low by more than a tick. Count restarts. A new H1 forms at the new low. This is NOT H2 — wait for H2 at the new low.' },
  { variant: 'failed-h2',      title: 'Failed H2 (loss)', tone: 'bear',
    caption: 'Even good H2 setups fail about 35% of the time. This is the cost of the method. Take the loss and move on.' },
  { variant: 'near-miss',      title: 'Near-miss — skip', tone: 'warn',
    caption: 'Looks like it might be H2, but the signal bar is weak (tiny body, big upper wick). One of the four tests fails. Skip.' },
];

// Mirror example titles for short-side patterns (L1/L2 not H1/H2)
function exampleTitle(slug, base) {
  const isShort = slug === 'double-top' || slug === 'bear-flag';
  if (!isShort) return base;
  return base
    .replace('H2', 'L2')
    .replace('h2', 'l2')
    .replace('H1', 'L1')
    .replace('h1', 'l1');
}

function exampleCaption(slug, base) {
  const isShort = slug === 'double-top' || slug === 'bear-flag';
  if (!isShort) return base;
  return base
    .replaceAll('H2', 'L2')
    .replaceAll('H1', 'L1')
    .replaceAll('h2', 'l2')
    .replaceAll('h1', 'l1')
    .replaceAll('down move', 'up move')
    .replaceAll('upper wick', 'lower wick')
    .replaceAll('new low', 'new high');
}

function Collapsible({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="card !p-0 overflow-hidden">
      <button
        type="button"
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left hover:bg-bg-elevated transition-colors tap-target"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        style={{ minHeight: 56 }}
      >
        <span className="mono font-bold text-base text-text-primary">{title}</span>
        <span className="mono text-accent text-lg" aria-hidden="true">
          {open ? '−' : '+'}
        </span>
      </button>
      {open && <div className="px-5 pb-5 pt-1 space-y-3 border-t border-default">{children}</div>}
    </div>
  );
}

export default function PatternDetail() {
  const { slug } = useParams();
  const pattern = PATTERNS[slug];

  useEffect(() => {
    if (pattern) markLessonComplete(slug);
  }, [slug, pattern]);

  const mainChart = useMemo(
    () => (pattern ? generatePattern(pattern.slug, 'clean-1') : null),
    [pattern]
  );

  if (!pattern) return <Navigate to="/second-signal/patterns" replace />;

  const sigName = pattern.sigName; // "H" or "L"
  const isShort = pattern.direction === 'short';
  const otherIdx = ['double-bottom', 'double-top', 'bull-flag', 'bear-flag'];
  const curIdx = otherIdx.indexOf(slug);
  const prev = otherIdx[(curIdx - 1 + 4) % 4];
  const next = otherIdx[(curIdx + 1) % 4];

  return (
    <article className="space-y-10">
      <header className="space-y-3">
        <Link to="/second-signal/patterns" className="mono text-sm text-text-muted no-underline hover:text-accent">
          ← All four patterns
        </Link>
        <h1 className="section-h1">{pattern.name}</h1>
      </header>

      {/* A. Level 1 simple version */}
      <section className="space-y-4">
        <h2 className="section-h2">The simple version</h2>
        <p className="text-text-primary leading-relaxed">{pattern.intro}</p>
        <ExpandableChart
          candles={mainChart.candles}
          annotations={mainChart.annotations}
          ariaLabel={`${pattern.name} — main animated example`}
          caption={`The whole pattern in one chart. Tap Replay to watch the bars build.`}
          captionTone={pattern.tone}
          animateInline
          inlineHeight={300}
        />
      </section>

      {/* B. 3-question H1/L1 test */}
      <section className="card space-y-4">
        <h2 className="section-h2">
          How to spot {sigName}1 — the FIRST try
        </h2>
        <ol className="space-y-3">
          {pattern.h1Test.map((q, i) => (
            <li key={i} className="flex gap-3">
              <span className={`mono shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm ${
                pattern.tone === 'bull' ? 'bg-bull/20 text-bull-light' : 'bg-bear/20 text-bear-light'
              }`}>
                {i + 1}
              </span>
              <p className="leading-relaxed">{q}</p>
            </li>
          ))}
        </ol>
        <div className="card-elevated">
          <p>
            If all three are YES → that bar is {sigName}1. <span className="mono text-warn font-bold">Don't enter on it.</span>{' '}
            Just mark it mentally and watch what happens next.
          </p>
        </div>
      </section>

      {/* C. 4-question H2/L2 test */}
      <section className="card space-y-4 border-accent/40">
        <h2 className="section-h2">
          How to spot {sigName}2 — the SECOND try{' '}
          <span className="text-accent">(this is your entry)</span>
        </h2>
        <ol className="space-y-3">
          {pattern.h2Test.map((q, i) => (
            <li key={i} className="flex gap-3">
              <span className="mono shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm bg-accent/20 text-accent">
                {i + 1}
              </span>
              <p className="leading-relaxed">{q}</p>
            </li>
          ))}
        </ol>
        <div className="card-elevated">
          <p>
            If all four are YES → this is <span className="mono font-bold text-accent">{sigName}2</span>. Take the trade.
          </p>
        </div>
      </section>

      {/* D. Trade execution */}
      <section className="space-y-4">
        <h2 className="section-h2">The trade</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card space-y-2">
            <p className="mono text-xs uppercase tracking-wider text-accent">Entry</p>
            <p className="text-text-primary leading-relaxed">{pattern.entry}</p>
          </div>
          <div className="card space-y-2">
            <p className="mono text-xs uppercase tracking-wider text-warn">Stop</p>
            <p className="text-text-primary leading-relaxed">{pattern.stop}</p>
          </div>
          <div className="card space-y-2">
            <p className={`mono text-xs uppercase tracking-wider ${
              pattern.tone === 'bull' ? 'text-bull-light' : 'text-bear-light'
            }`}>
              Target
            </p>
            <p className="text-text-primary leading-relaxed">{pattern.target}</p>
          </div>
        </div>
      </section>

      {/* E. Six examples */}
      <section className="space-y-4">
        <h2 className="section-h2">Six examples</h2>
        <p className="body-muted">
          Three wins, one count restart, one loss, one skip. Tap any chart to study it fullscreen.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {EXAMPLES.map((ex) => {
            const data = generatePattern(slug, ex.variant);
            return (
              <div key={ex.variant} className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span
                    className={`mono text-xs px-2 py-0.5 rounded ${
                      ex.tone === 'bull'
                        ? 'bg-bull/20 text-bull-light'
                        : ex.tone === 'bear'
                        ? 'bg-bear/20 text-bear-light'
                        : 'bg-warn/20 text-warn'
                    }`}
                  >
                    {exampleTitle(slug, ex.title)}
                  </span>
                </div>
                <ExpandableChart
                  candles={data.candles}
                  annotations={data.annotations}
                  ariaLabel={`${pattern.name} example: ${ex.title}`}
                  caption={exampleCaption(slug, ex.caption)}
                  captionTone={ex.tone}
                  inlineHeight={240}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* F. Level 3 collapsible */}
      <section className="space-y-3">
        <Collapsible title="Show advanced details (optional)">
          <p className="body-muted text-base">
            You don't need any of this to be profitable. Come back to it once the basics feel automatic.
          </p>
          <ul className="space-y-2 text-text-primary">
            <li>
              <span className="mono text-accent">Stop placement variations:</span>{' '}
              1 tick beyond extreme is tight (more stop-outs). 3 ticks is the empirical sweet spot for MES 2-min.
              Swing high/low gives the widest stop and the highest win rate but worst R-multiple.
            </li>
            <li>
              <span className="mono text-accent">5-minute confluence:</span>{' '}
              If the 5-min chart is in a strong opposite trend, skip even valid {sigName}2 setups.
              You're fighting too much pressure.
            </li>
            <li>
              <span className="mono text-accent">Climactic exhaustion:</span>{' '}
              After 3+ consecutive trend bars closing on the extreme,
              the {sigName}1 sometimes works as a reversal entry. Rare exception. Don't make it your default.
            </li>
            <li>
              <span className="mono text-accent">Always-in direction:</span>{' '}
              Trade {sigName}2 in the direction the chart is already pushing.
              Counter-trend {sigName}2 is lower probability — wait for it to align.
            </li>
          </ul>
          <p className="text-text-muted text-base">
            For the full Level 3 chapter, see{' '}
            <Link to="/second-signal/advanced" className="text-accent underline">Level 3 — Advanced</Link>.
          </p>
        </Collapsible>
      </section>

      {/* Cross-reference into Last Mile's existing Pattern Lab.
          This section is Last-Mile-only — it is NOT part of the standalone.
          Placed below all standalone teaching content, above the pattern pager. */}
      <section>
        <Link
          to={`/lab/${slug}`}
          className="card hover:bg-bg-elevated transition-colors no-underline flex items-center justify-between gap-4 group"
        >
          <div>
            <p className="mono text-xs uppercase tracking-wider text-accent mb-1">Practice in Last Mile</p>
            <p className="text-text-primary leading-snug">
              Practice this pattern on <span className="mono font-bold">12 example charts</span> in the {pattern.name.replace(/ H2| L2/, '')} Lab
            </p>
          </div>
          <span className={`mono text-2xl shrink-0 ${pattern.tone === 'bull' ? 'text-bull-light' : 'text-bear-light'} group-hover:translate-x-1 transition-transform`} aria-hidden="true">→</span>
        </Link>
      </section>

      {/* Pager */}
      <nav className="grid grid-cols-2 gap-4 pt-4">
        <Link to={`/second-signal/patterns/${prev}`} className="btn-secondary text-center no-underline">
          ← {PATTERNS[prev].name}
        </Link>
        <Link to={`/second-signal/patterns/${next}`} className="btn-secondary text-center no-underline">
          {PATTERNS[next].name} →
        </Link>
      </nav>
    </article>
  );
}
