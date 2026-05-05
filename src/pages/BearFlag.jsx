import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import BearFlagChart from '../components/BearFlagChart.jsx';
import { examples } from '../data/bearFlagExamples.js';

export default function BearFlag() {
  return (
    <div className="max-w-5xl mx-auto px-5 md:px-8 py-6 md:py-10 animate-fadeIn">
      <Header />
      <Section1Plain />
      <Section2ThreeParts />
      <Section3Timeframe />
      <Section4Gallery />
      <Section5DecisionTree />
      <Section6EntryTiers />
      <Section7Calculator />
      <Section8Stops />
      <Section9Volume />
      <Section10Mistakes />
      <Section11Psychology />
      <Section12Checklist />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        <Link to="/" className="text-muted hover:text-text">←</Link>
        <div className="label">Setup Lab</div>
      </div>
      <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-3">Bear Flag</h1>
      <p className="text-text/80 text-lg max-w-3xl leading-relaxed">
        The 2-minute scalper's complete bear flag treatment. Twelve large worked examples,
        a breakout decision tree, three entry tiers, and a measured-move calculator.
      </p>
    </div>
  );
}

// ============================================================
// SECTION 1
// ============================================================
function Section1Plain() {
  return (
    <SectionShell n={1} title="What a Bear Flag Actually Is">
      <p className="mb-4">
        Price drops hard. That hard drop is called the <span className="text-red font-semibold">POLE</span>.
        The drop happens because a lot of people sold at the same time.
      </p>
      <p className="mb-4">
        After that drop, price stops falling and drifts sideways or slightly upward for a few minutes.
        This drift is called the <span className="text-green font-semibold">FLAG</span>.
        The drift happens because some sellers take profits and a few buyers try to catch the bottom.
      </p>
      <p>
        When the buyers fail and price breaks down again below the flag, that's your signal that
        sellers are back in control and the next leg down is starting. That third move is the <span className="text-amber font-semibold">BREAKOUT</span>.
      </p>
    </SectionShell>
  );
}

// ============================================================
// SECTION 2
// ============================================================
function Section2ThreeParts() {
  // Use Example 1's pattern with all three zones labeled
  const ex = examples[0].pattern;
  return (
    <SectionShell n={2} title="The Three Parts">
      <p className="mb-5">A perfect bear flag, fully labeled. Take 30 seconds and trace each part with your eye.</p>
      <BearFlagChart
        pattern={ex}
        width={1100}
        height={520}
        zonePole={[2, 5]}
        zoneFlag={[6, 11]}
        zoneBreakout={[12, 12]}
        poleLabel="1. THE DROP (POLE)"
        flagLabel="2. THE PAUSE (FLAG)"
        breakoutLabel="3. THE CONTINUATION"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
        <Tile color="red" title="The Drop (Pole)" body="3-6 sharp red candles. High volume. Sellers in control." />
        <Tile color="green" title="The Pause (Flag)" body="4-8 candles drifting up shallowly. Volume fades. Profit-taking." />
        <Tile color="amber" title="The Continuation (Breakout)" body="A red candle closes below the flag's lower line. Volume surges. Sellers back." />
      </div>
    </SectionShell>
  );
}

// ============================================================
// SECTION 3
// ============================================================
function Section3Timeframe() {
  const rows = [
    { tf: '1-minute',  pole: '3-5',   flag: '4-7',   total: '~8-12'  },
    { tf: '2-minute',  pole: '3-6',   flag: '4-8',   total: '~8-14',  highlight: true },
    { tf: '5-minute',  pole: '5-10',  flag: '6-12',  total: '~12-22' },
    { tf: '15-minute', pole: '5-12',  flag: '6-15',  total: '~12-25' },
    { tf: 'Daily',     pole: '5-15',  flag: '5-20',  total: '~10-35' }
  ];
  return (
    <SectionShell n={3} title="How Many Candles? (Timeframe Table)">
      <p className="mb-5">The "5-15 candles" guidance you've seen elsewhere is a <em>daily-chart</em> rule. On the 2-minute it's wrong.</p>
      <div className="overflow-x-auto">
        <table className="w-full font-mono text-sm border-collapse">
          <thead>
            <tr className="text-left text-muted uppercase tracking-wider text-xs">
              <th className="py-2 px-3 border-b border-border">Timeframe</th>
              <th className="py-2 px-3 border-b border-border">Pole candles</th>
              <th className="py-2 px-3 border-b border-border">Flag candles</th>
              <th className="py-2 px-3 border-b border-border">Total pattern</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={r.highlight ? 'bg-green/10 border-l-4 border-green' : ''}>
                <td className={`py-2 px-3 border-b border-border ${r.highlight ? 'text-green font-bold' : ''}`}>{r.tf}</td>
                <td className="py-2 px-3 border-b border-border">{r.pole}</td>
                <td className="py-2 px-3 border-b border-border">{r.flag}</td>
                <td className="py-2 px-3 border-b border-border">{r.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5 card-tight border-green/40 bg-green/5">
        <p className="text-green font-display font-bold text-base md:text-lg leading-relaxed">
          On the 2-minute chart you scalp, expect roughly 3-6 pole candles and 4-8 flag candles.
          Anything claiming you need 10+ pole candles is using daily-chart rules.
        </p>
      </div>
    </SectionShell>
  );
}

// ============================================================
// SECTION 4 — TWELVE EXAMPLES
// ============================================================
function Section4Gallery() {
  return (
    <SectionShell n={4} title="Twelve Large Examples — Study Each One">
      <p className="mb-6">Each example is its own exhibit. The chart, then a short caption explaining what to learn from it. Read both.</p>
      <BearFlagGallery />
    </SectionShell>
  );
}

function BearFlagGallery() {
  return (
    <div className="space-y-8">
      {examples.map(ex => (
        <Exhibit key={ex.n} ex={ex} />
      ))}
    </div>
  );
}

function Exhibit({ ex }) {
  return (
    <div className="card border-border">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-lg bg-green/20 text-green border border-green/40 flex items-center justify-center font-display font-bold text-lg shrink-0">
          {ex.n}
        </div>
        <h3 className="font-display font-semibold text-xl md:text-2xl">{ex.title}</h3>
      </div>
      <BearFlagChart
        pattern={ex.pattern}
        width={1100}
        height={520}
        newsAtIndex={ex.pattern.newsAtIndex}
      />
      <p className="mt-4 leading-relaxed text-text/90 max-w-4xl">{ex.caption}</p>
    </div>
  );
}

// ============================================================
// SECTION 5 — DECISION TREE
// ============================================================
function Section5DecisionTree() {
  return (
    <SectionShell n={5} title="The Breakout Decision Tree">
      <p className="mb-5">Three sequential questions. Click your answer; the next question reveals — or you get a verdict.</p>
      <BreakoutDecisionTree />
    </SectionShell>
  );
}

function BreakoutDecisionTree() {
  const [step, setStep] = useState(1);
  const [verdict, setVerdict] = useState(null);
  const [path, setPath] = useState([]);

  const reset = () => { setStep(1); setVerdict(null); setPath([]); };

  const choose = (label, nextStep, finalVerdict) => {
    setPath([...path, label]);
    if (finalVerdict) {
      setVerdict(finalVerdict);
      setStep(0);
    } else {
      setStep(nextStep);
    }
  };

  return (
    <div className="space-y-3">
      {/* Path crumbs */}
      {path.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 text-xs mb-2">
          {path.map((p, i) => (
            <React.Fragment key={i}>
              <span className="pill-blue">{p}</span>
              {i < path.length - 1 && <span className="text-muted">→</span>}
            </React.Fragment>
          ))}
          <button onClick={reset} className="ml-auto text-muted hover:text-text underline text-xs">Reset</button>
        </div>
      )}

      {step === 1 && (
        <DTQuestion
          n={1}
          q={"Did a candle CLOSE (not just wick) below the flag's lower trendline by at least 1 tick?"}
          svg={<MiniBreakoutSVG variant="close-below" />}
          options={[
            { label: 'No — only wicked through', verdict: { kind: 'red', text: 'Not a valid breakout. Wait. Don\'t anticipate. A wick poke is not a close.' } },
            { label: 'Yes — body closed below', next: 2 }
          ]}
          choose={choose}
        />
      )}

      {step === 2 && (
        <DTQuestion
          n={2}
          q="What does the candle right AFTER the breakout candle look like?"
          svg={<MiniBreakoutSVG variant="after-candle" />}
          options={[
            { label: 'Red body, lower close, rising volume', verdict: { kind: 'green', text: 'Confirmed. Short on this candle\'s close. Stop above the flag\'s high. Target = pole length projected down from the breakout point.' }, next: 3, gotoNext: true },
            { label: 'Small body / doji / low volume', verdict: { kind: 'amber', text: 'Stalled. Wait one more candle. If still stalled or turning green, abort.' } },
            { label: 'Green body that closes back above the broken trendline', verdict: { kind: 'red', text: 'Failed breakout. Stand down. Watch for shorts on the rally instead.' } }
          ]}
          choose={(label, _next, fv, opt) => {
            setPath([...path, label]);
            if (opt?.gotoNext) {
              setStep(3);
            } else {
              setVerdict(fv);
              setStep(0);
            }
          }}
        />
      )}

      {step === 3 && (
        <DTQuestion
          n={3}
          q="Was breakout volume higher than the average flag volume?"
          svg={<MiniBreakoutSVG variant="volume" />}
          options={[
            { label: 'Yes — clearly higher', verdict: { kind: 'green', text: 'High-confidence trade. Full size. This is exactly what you want — body close + follow-through + volume.' } },
            { label: 'No / about the same', verdict: { kind: 'amber', text: 'Half size or skip. Low-volume breaks fail more than half the time even with confirmation.' } }
          ]}
          choose={choose}
        />
      )}

      {verdict && (
        <div className={`card-tight ${
          verdict.kind === 'green' ? 'border-green/50 bg-green/10' :
          verdict.kind === 'amber' ? 'border-amber/50 bg-amber/10' :
          'border-red/50 bg-red/10'
        } animate-slideUp`}>
          <div className={`label mb-2 ${
            verdict.kind === 'green' ? 'text-green' : verdict.kind === 'amber' ? 'text-amber' : 'text-red'
          }`}>Verdict</div>
          <p className="leading-relaxed text-base">{verdict.text}</p>
          <button onClick={reset} className="btn btn-ghost text-sm py-2 mt-4">Run again</button>
        </div>
      )}
    </div>
  );
}

function DTQuestion({ n, q, svg, options, choose }) {
  return (
    <div className="card animate-fadeIn">
      <div className="label mb-2">Question {n}</div>
      <h4 className="font-display font-semibold text-lg mb-4">{q.replace(/\\'/g, "'")}</h4>
      {svg && <div className="mb-4">{svg}</div>}
      <div className="space-y-2">
        {options.map((opt, i) => (
          <button key={i}
            onClick={() => choose(opt.label, opt.next, opt.verdict, opt)}
            className="w-full card-tight text-left hover:border-green/40 transition-colors flex items-center gap-3">
            <span className="num text-xs text-muted">{String.fromCharCode(65 + i)}</span>
            <span className="flex-1">{opt.label}</span>
            <span className="text-muted">→</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// Tiny illustrative SVGs that accompany each decision-tree question
function MiniBreakoutSVG({ variant }) {
  const w = 600, h = 160;
  if (variant === 'close-below') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        {/* trendline */}
        <line x1={20} y1={90} x2={580} y2={90} stroke="#10b981" strokeWidth={1.5} strokeDasharray="6 4" />
        <text x={24} y={84} fill="#10b981" fontSize={10} fontFamily="'Space Mono', monospace">flag low trendline</text>
        {/* wick-only candle */}
        <g transform="translate(180,0)">
          <line x1={0} x2={0} y1={50} y2={110} stroke="#FF3D5A" strokeWidth={1.5} />
          <rect x={-8} y={60} width={16} height={20} fill="#FF3D5A" />
          <text x={0} y={130} fill="#FF3D5A" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">wick only</text>
          <text x={0} y={144} fill="#FF3D5A" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">NOT valid</text>
        </g>
        {/* body close below */}
        <g transform="translate(420,0)">
          <line x1={0} x2={0} y1={40} y2={130} stroke="#FF3D5A" strokeWidth={1.5} />
          <rect x={-8} y={70} width={16} height={45} fill="#FF3D5A" />
          <text x={0} y={148} fill="#10b981" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">body closed below</text>
          <text x={0} y={158} fill="#10b981" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">VALID ✓</text>
        </g>
      </svg>
    );
  }
  if (variant === 'after-candle') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        <line x1={20} y1={70} x2={580} y2={70} stroke="#10b981" strokeWidth={1.2} strokeDasharray="6 4" opacity={0.5} />
        {/* breakout candle */}
        <g transform="translate(70,0)">
          <line x1={0} x2={0} y1={50} y2={110} stroke="#FF3D5A" strokeWidth={1.5} />
          <rect x={-8} y={60} width={16} height={45} fill="#FF3D5A" />
          <text x={0} y={130} fill="#888" fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">breakout</text>
        </g>
        {/* A: red continuation */}
        <g transform="translate(180,0)">
          <line x1={0} x2={0} y1={75} y2={135} stroke="#FF3D5A" strokeWidth={1.5} />
          <rect x={-8} y={85} width={16} height={45} fill="#FF3D5A" />
          <text x={0} y={150} fill="#10b981" fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">A — confirm</text>
        </g>
        {/* B: doji */}
        <g transform="translate(330,0)">
          <line x1={0} x2={0} y1={70} y2={120} stroke="#888" strokeWidth={1.5} />
          <rect x={-8} y={94} width={16} height={4} fill="#888" />
          <text x={0} y={150} fill="#FFB44A" fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">B — stalled</text>
        </g>
        {/* C: green reversal */}
        <g transform="translate(480,0)">
          <line x1={0} x2={0} y1={50} y2={110} stroke="#10b981" strokeWidth={1.5} />
          <rect x={-8} y={60} width={16} height={45} fill="#10b981" />
          <text x={0} y={130} fill="#FF3D5A" fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">C — failed</text>
        </g>
      </svg>
    );
  }
  if (variant === 'volume') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        <text x={20} y={20} fill="#666" fontSize={10} fontFamily="'Space Mono', monospace">VOLUME PROFILE</text>
        {/* flag bars (declining) */}
        {[60, 50, 42, 36].map((h2, i) => (
          <rect key={i} x={70 + i * 30} y={140 - h2} width={20} height={h2} fill="#10b981" opacity={0.5} />
        ))}
        {/* breakout — high */}
        <rect x={220} y={40} width={20} height={100} fill="#FF3D5A" opacity={0.7} />
        <text x={230} y={30} fill="#10b981" fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">YES — high</text>
        {/* divider */}
        <line x1={290} x2={290} y1={20} y2={150} stroke="#262626" />
        {/* flag bars 2 */}
        {[50, 48, 50, 52].map((h2, i) => (
          <rect key={i} x={320 + i * 30} y={140 - h2} width={20} height={h2} fill="#10b981" opacity={0.5} />
        ))}
        <rect x={460} y={95} width={20} height={45} fill="#FF3D5A" opacity={0.7} />
        <text x={470} y={85} fill="#FFB44A" fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">NO — same</text>
      </svg>
    );
  }
  return null;
}

// ============================================================
// SECTION 6 — ENTRY TIERS
// ============================================================
function Section6EntryTiers() {
  const tiers = [
    {
      name: 'Aggressive', tag: 'TIER 1', color: 'amber',
      entry: 'Close of the candle that breaks below the flag\'s lower trendline',
      stop: 'Above the flag\'s upper trendline (or above its highest wick)',
      rr: '3:1 to 4:1',
      win: 'Lower (more false signals)',
      use: 'Strong trend day, several flags have already worked',
      size: '25-50%',
      svg: <TierSVG variant="aggressive" />
    },
    {
      name: 'Confirmation', tag: 'TIER 2', color: 'green',
      entry: 'Close of the candle AFTER the breakout, only if it follows through',
      stop: 'Above the flag\'s upper trendline',
      rr: '2:1 to 3:1',
      win: 'Higher',
      use: 'Balance of speed and confirmation — the daily default',
      size: 'Full size',
      svg: <TierSVG variant="confirm" />
    },
    {
      name: 'Retest', tag: 'TIER 3', color: 'blue',
      entry: 'Rejection candle after price rallies back to the broken trendline from below',
      stop: 'Above the rejection candle\'s high',
      rr: '1.5:1 to 2.5:1',
      win: 'Highest',
      use: 'You missed Tier 1 and Tier 2, or you only take A+ setups',
      size: 'Full size, tight stop',
      svg: <TierSVG variant="retest" />
    }
  ];
  const colors = {
    amber: 'border-amber/40 hover:border-amber',
    green: 'border-green/40 hover:border-green',
    blue: 'border-blue/40 hover:border-blue'
  };
  const accents = { amber: 'text-amber', green: 'text-green', blue: 'text-blue' };
  return (
    <SectionShell n={6} title="The Three Entry Tiers">
      <p className="mb-5">Three valid entry timings, each with a different risk/reward and win-rate trade-off.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tiers.map((t, i) => (
          <div key={i} className={`card transition-colors ${colors[t.color]}`}>
            <div className={`label mb-1 ${accents[t.color]}`}>{t.tag}</div>
            <h3 className={`font-display font-bold text-2xl mb-3 ${accents[t.color]}`}>{t.name}</h3>
            <div className="mb-4">{t.svg}</div>
            <dl className="space-y-2 text-sm">
              <Row label="Entry" v={t.entry.replace(/\\'/g, "'")} />
              <Row label="Stop" v={t.stop.replace(/\\'/g, "'")} />
              <Row label="Typical R:R" v={t.rr} />
              <Row label="Win rate" v={t.win} />
              <Row label="Use when" v={t.use} />
              <Row label="Size" v={t.size} />
            </dl>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function Row({ label, v }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-wider text-muted font-display">{label}</dt>
      <dd className="text-text/90">{v}</dd>
    </div>
  );
}

function TierSVG({ variant }) {
  const w = 280, h = 130;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
      {/* common: flag trendline */}
      <line x1={20} y1={70} x2={260} y2={70} stroke="#10b981" strokeWidth={1.2} strokeDasharray="4 3" opacity={0.5} />
      {/* pole */}
      {[
        [40, 30, 50, 28],
        [60, 38, 50, 38],
        [80, 48, 50, 48],
        [100, 58, 50, 58]
      ].map(([x, y, hi, hg], i) => (
        <g key={i}>
          <line x1={x} x2={x} y1={y - 5} y2={y + hi} stroke="#FF3D5A" strokeWidth={1.2} />
          <rect x={x - 4} y={y} width={8} height={hg / 1.5} fill="#FF3D5A" />
        </g>
      ))}
      {/* flag */}
      {[120, 135, 150, 165].map((x, i) => (
        <g key={i}>
          <line x1={x} x2={x} y1={64 - i * 1} y2={86 - i * 1} stroke="#10b981" strokeWidth={1.2} />
          <rect x={x - 4} y={68 - i * 1} width={8} height={14} fill="#10b981" />
        </g>
      ))}
      {variant === 'aggressive' && (
        <g>
          <line x1={185} x2={185} y1={75} y2={110} stroke="#FF3D5A" strokeWidth={1.5} />
          <rect x={181} y={80} width={8} height={26} fill="#FF3D5A" />
          <circle cx={185} cy={106} r={6} fill="#FFB44A" stroke="#000" strokeWidth={1.5} />
          <text x={195} y={110} fill="#FFB44A" fontSize={10} fontFamily="'Space Mono', monospace">enter</text>
        </g>
      )}
      {variant === 'confirm' && (
        <g>
          <line x1={185} x2={185} y1={75} y2={108} stroke="#FF3D5A" strokeWidth={1.5} />
          <rect x={181} y={80} width={8} height={24} fill="#FF3D5A" />
          <line x1={205} x2={205} y1={92} y2={120} stroke="#FF3D5A" strokeWidth={1.5} />
          <rect x={201} y={97} width={8} height={20} fill="#FF3D5A" />
          <circle cx={205} cy={117} r={6} fill="#10b981" stroke="#000" strokeWidth={1.5} />
          <text x={215} y={121} fill="#10b981" fontSize={10} fontFamily="'Space Mono', monospace">enter</text>
        </g>
      )}
      {variant === 'retest' && (
        <g>
          <line x1={185} x2={185} y1={75} y2={108} stroke="#FF3D5A" strokeWidth={1.5} />
          <rect x={181} y={80} width={8} height={24} fill="#FF3D5A" />
          <line x1={205} x2={205} y1={75} y2={102} stroke="#10b981" strokeWidth={1.5} />
          <rect x={201} y={80} width={8} height={18} fill="#10b981" />
          <line x1={225} x2={225} y1={68} y2={100} stroke="#FF3D5A" strokeWidth={1.5} />
          <rect x={221} y={72} width={8} height={20} fill="#FF3D5A" />
          <circle cx={225} cy={92} r={6} fill="#4A9EFF" stroke="#000" strokeWidth={1.5} />
          <text x={234} y={96} fill="#4A9EFF" fontSize={10} fontFamily="'Space Mono', monospace">enter</text>
        </g>
      )}
    </svg>
  );
}

// ============================================================
// SECTION 7 — MEASURED MOVE CALCULATOR
// ============================================================
function Section7Calculator() {
  const [poleStart, setPoleStart] = useState(2510.4);
  const [poleEnd, setPoleEnd] = useState(2500.6);
  const [breakoutPrice, setBreakoutPrice] = useState(2499.8);
  const poleLength = useMemo(() => poleStart - poleEnd, [poleStart, poleEnd]);
  const target = useMemo(() => breakoutPrice - poleLength, [breakoutPrice, poleLength]);
  const valid = poleLength > 0;

  return (
    <SectionShell n={7} title="Measured-Move Target Calculator">
      <p className="mb-5">Pole length projected down from the breakout = your measured-move target.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
        <NumInput label="Pole start price" v={poleStart} onChange={setPoleStart} />
        <NumInput label="Pole end price (low)" v={poleEnd} onChange={setPoleEnd} />
        <NumInput label="Breakout price (body close)" v={breakoutPrice} onChange={setBreakoutPrice} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        <Outcome label="Pole length" v={valid ? poleLength.toFixed(2) : '—'} accent="red" />
        <Outcome label="Drop projection" v={valid ? `-${poleLength.toFixed(2)}` : '—'} accent="amber" />
        <Outcome label="Target price" v={valid ? target.toFixed(2) : '—'} accent="green" />
      </div>
      <CalculatorChart poleStart={poleStart} poleEnd={poleEnd} breakoutPrice={breakoutPrice} target={target} valid={valid} />
    </SectionShell>
  );
}

function NumInput({ label, v, onChange }) {
  return (
    <div>
      <div className="label mb-2">{label}</div>
      <input type="number" step="0.1" value={v}
        onChange={e => onChange(parseFloat(e.target.value || 0))}
        className="input" />
    </div>
  );
}

function Outcome({ label, v, accent }) {
  const colors = { green: 'text-green', red: 'text-red', amber: 'text-amber' };
  return (
    <div className="card-tight">
      <div className="label mb-1">{label}</div>
      <div className={`num text-2xl ${colors[accent]}`}>{v}</div>
    </div>
  );
}

function CalculatorChart({ poleStart, poleEnd, breakoutPrice, target, valid }) {
  if (!valid) return null;
  const w = 1100, h = 320;
  const padL = 60, padR = 110, padT = 30, padB = 30;
  const innerW = w - padL - padR;
  const innerH = h - padT - padB;
  const yMax = Math.max(poleStart) + (poleStart - target) * 0.05;
  const yMin = target - (poleStart - target) * 0.05;
  const yRange = yMax - yMin;
  const y = price => padT + ((yMax - price) / yRange) * innerH;

  // x positions
  const xStart = padL + innerW * 0.1;
  const xEnd = padL + innerW * 0.4;
  const xBreakout = padL + innerW * 0.55;
  const xTarget = padL + innerW * 0.85;

  return (
    <div className="overflow-x-auto -mx-2 md:mx-0">
      <svg viewBox={`0 0 ${w} ${h}`} className="block rounded-xl border border-border" style={{ background: '#0a0a0a', minWidth: '880px' }}>
        {/* Grid */}
        {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
          <line key={i} x1={padL} x2={w - padR} y1={padT + innerH * t} y2={padT + innerH * t} stroke="#262626" strokeWidth={1} />
        ))}
        {/* Pole arrow (red, going down) */}
        <line x1={xStart} x2={xEnd} y1={y(poleStart)} y2={y(poleEnd)} stroke="#FF3D5A" strokeWidth={3} />
        <polygon points={`${xEnd},${y(poleEnd)} ${xEnd - 8},${y(poleEnd) - 8} ${xEnd - 8},${y(poleEnd) + 8}`} fill="#FF3D5A" />
        <text x={(xStart + xEnd) / 2} y={y((poleStart + poleEnd) / 2) - 12} fill="#FF3D5A"
          fontSize={13} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight="bold">
          POLE = {(poleStart - poleEnd).toFixed(2)}
        </text>
        {/* Flag (cyan small bracket) */}
        <line x1={xEnd} x2={xBreakout} y1={y(poleEnd) - 6} y2={y(poleEnd) - 6} stroke="#10b981" strokeWidth={2} strokeDasharray="4 3" />
        <text x={(xEnd + xBreakout) / 2} y={y(poleEnd) - 14} fill="#10b981" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">flag</text>
        {/* Breakout marker */}
        <circle cx={xBreakout} cy={y(breakoutPrice)} r={6} fill="#FFB44A" stroke="#000" strokeWidth={1.5} />
        <text x={xBreakout} y={y(breakoutPrice) - 12} fill="#FFB44A" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">
          breakout {breakoutPrice.toFixed(2)}
        </text>
        {/* Projection arrow */}
        <line x1={xBreakout} x2={xTarget} y1={y(breakoutPrice)} y2={y(target)} stroke="#00D9A0" strokeWidth={3} strokeDasharray="6 5" />
        <polygon points={`${xTarget},${y(target)} ${xTarget - 8},${y(target) - 8} ${xTarget - 8},${y(target) + 8}`} fill="#00D9A0" />
        <text x={(xBreakout + xTarget) / 2} y={y((breakoutPrice + target) / 2) + 16} fill="#00D9A0"
          fontSize={13} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight="bold">
          PROJECTION = {(poleStart - poleEnd).toFixed(2)}
        </text>
        {/* Target line */}
        <line x1={padL} x2={w - padR} y1={y(target)} y2={y(target)} stroke="#00D9A0" strokeWidth={1.5} strokeDasharray="6 4" opacity={0.85} />
        <rect x={w - padR + 6} y={y(target) - 11} width={padR - 10} height={22} rx={3} fill="#0a0a0a" stroke="#00D9A0" />
        <text x={w - padR + 12} y={y(target) + 5} fill="#00D9A0" fontSize={12} fontFamily="'Space Mono', monospace">
          TARGET {target.toFixed(2)}
        </text>
        {/* Start marker */}
        <text x={padL - 8} y={y(poleStart) + 4} fill="#FF3D5A" fontSize={11} textAnchor="end" fontFamily="'Space Mono', monospace">
          {poleStart.toFixed(2)}
        </text>
        <text x={padL - 8} y={y(poleEnd) + 4} fill="#FF3D5A" fontSize={11} textAnchor="end" fontFamily="'Space Mono', monospace">
          {poleEnd.toFixed(2)}
        </text>
      </svg>
    </div>
  );
}

// ============================================================
// SECTION 8 — STOPS
// ============================================================
function Section8Stops() {
  const stops = [
    { kind: 'CORRECT', color: 'green', title: 'Above the flag\'s highest wick',
      body: 'Stop sits above the highest point any candle in the flag reached. Survives normal noise and stop-hunt wicks. This is the default.',
      svg: <StopSVG variant="correct" /> },
    { kind: 'TOO TIGHT', color: 'red', title: 'Just above the breakout candle\'s high',
      body: 'Tempting because risk looks small. Reality: gets stop-hunted by the very-common retest move. Right idea, dead trader.',
      svg: <StopSVG variant="tight" /> },
    { kind: 'TOO LOOSE', color: 'amber', title: 'Above the pole\'s high',
      body: 'Now risk is so large the R:R doesn\'t work. Even if you\'re right about direction, you can\'t take a fair size — so the win is too small to matter.',
      svg: <StopSVG variant="loose" /> }
  ];
  const colors = {
    green: { border: 'border-green/40', text: 'text-green' },
    red:   { border: 'border-red/40',   text: 'text-red' },
    amber: { border: 'border-amber/40', text: 'text-amber' }
  };
  return (
    <SectionShell n={8} title="Stop Placement">
      <p className="mb-5">Three options. Only one is correct.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stops.map((s, i) => (
          <div key={i} className={`card ${colors[s.color].border}`}>
            <div className={`label mb-2 ${colors[s.color].text}`}>{s.kind}</div>
            <h4 className={`font-display font-semibold mb-3 ${colors[s.color].text}`}>{s.title.replace(/\\'/g, "'")}</h4>
            <div className="mb-3">{s.svg}</div>
            <p className="text-sm text-text/85 leading-relaxed">{s.body.replace(/\\'/g, "'")}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function StopSVG({ variant }) {
  const w = 280, h = 160;
  // Common: pole + flag + breakout
  const candles = (
    <g>
      {/* trendline */}
      <line x1={20} y1={88} x2={260} y2={88} stroke="#10b981" strokeWidth={1.2} strokeDasharray="4 3" opacity={0.5} />
      {/* pole 4 candles */}
      {[40, 60, 80, 100].map((x, i) => (
        <g key={i}>
          <line x1={x} x2={x} y1={30 + i * 8} y2={50 + i * 8 + 18} stroke="#FF3D5A" strokeWidth={1.2} />
          <rect x={x - 4} y={30 + i * 8} width={8} height={18} fill="#FF3D5A" />
        </g>
      ))}
      {/* flag 5 candles drifting up slightly */}
      {[120, 135, 150, 165, 180].map((x, i) => (
        <g key={i}>
          <line x1={x} x2={x} y1={70 - i * 1.5} y2={92 - i * 1.5} stroke="#10b981" strokeWidth={1.2} />
          <rect x={x - 4} y={74 - i * 1.5} width={8} height={14} fill="#10b981" />
        </g>
      ))}
      {/* breakout candle */}
      <line x1={200} x2={200} y1={80} y2={120} stroke="#FF3D5A" strokeWidth={1.5} />
      <rect x={196} y={84} width={8} height={32} fill="#FF3D5A" />
    </g>
  );
  let stop;
  if (variant === 'correct') {
    stop = (
      <g>
        <line x1={20} x2={260} y1={66} y2={66} stroke="#10b981" strokeWidth={2} strokeDasharray="6 3" />
        <text x={150} y={58} fill="#10b981" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">stop · above flag high</text>
      </g>
    );
  } else if (variant === 'tight') {
    stop = (
      <g>
        <line x1={20} x2={260} y1={82} y2={82} stroke="#FF3D5A" strokeWidth={2} strokeDasharray="6 3" />
        <text x={150} y={76} fill="#FF3D5A" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">stop · breakout high (too tight)</text>
      </g>
    );
  } else if (variant === 'loose') {
    stop = (
      <g>
        <line x1={20} x2={260} y1={28} y2={28} stroke="#FFB44A" strokeWidth={2} strokeDasharray="6 3" />
        <text x={150} y={22} fill="#FFB44A" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">stop · pole high (too loose)</text>
      </g>
    );
  }
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
      {candles}
      {stop}
    </svg>
  );
}

// ============================================================
// SECTION 9 — VOLUME RULES
// ============================================================
function Section9Volume() {
  return (
    <SectionShell n={9} title="Volume Rules">
      <p className="mb-5">Three volume profiles side by side. Only one is a tradable bear flag.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <VolCard tag="VALID" color="green"
          body="Volume falls during the flag (sellers paused, buyers timid). Volume SURGES on the breakout candle. Sellers re-engage. This is the only profile to trade."
          svg={<VolSVG variant="valid" />} />
        <VolCard tag="SUSPECT" color="amber"
          body="Volume is flat through the flag. Modest, unconvincing volume on breakout. The break may work, but the probability is half what a valid setup gives you. Half size or skip."
          svg={<VolSVG variant="suspect" />} />
        <VolCard tag="INVALID" color="red"
          body="Volume RISES during the flag — someone is accumulating long. Tiny volume on breakout. Do not trade. These flip up almost every time."
          svg={<VolSVG variant="invalid" />} />
      </div>
    </SectionShell>
  );
}

function VolCard({ tag, color, body, svg }) {
  const colors = {
    green: { border: 'border-green/40', text: 'text-green' },
    amber: { border: 'border-amber/40', text: 'text-amber' },
    red:   { border: 'border-red/40',   text: 'text-red' }
  };
  return (
    <div className={`card ${colors[color].border}`}>
      <div className={`label mb-2 ${colors[color].text}`}>{tag}</div>
      <div className="mb-3">{svg}</div>
      <p className="text-sm text-text/85 leading-relaxed">{body}</p>
    </div>
  );
}

function VolSVG({ variant }) {
  const w = 280, h = 130;
  let bars;
  if (variant === 'valid') {
    bars = [70, 60, 50, 38, 32, 26, 22, 110]; // declining flag, big breakout
  } else if (variant === 'suspect') {
    bars = [55, 50, 52, 48, 50, 52, 50, 60]; // flat
  } else {
    bars = [30, 38, 48, 58, 68, 78, 84, 38]; // rising flag, tiny breakout
  }
  const colors = bars.map((_, i) => i < 7 ? '#10b981' : '#FF3D5A');
  const max = Math.max(...bars);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
      <text x={20} y={20} fill="#666" fontSize={10} fontFamily="'Space Mono', monospace">VOLUME</text>
      {bars.map((b, i) => {
        const barH = (b / max) * 90;
        return (
          <g key={i}>
            <rect x={30 + i * 30} y={120 - barH} width={20} height={barH} fill={colors[i]} opacity={0.6} />
          </g>
        );
      })}
      {/* divider before breakout */}
      <line x1={235} x2={235} y1={20} y2={125} stroke="#262626" strokeDasharray="3 3" />
      <text x={245} y={20} fill="#666" fontSize={9} fontFamily="'Space Mono', monospace">brk</text>
    </svg>
  );
}

// ============================================================
// SECTION 10 — FIVE MISTAKES
// ============================================================
function Section10Mistakes() {
  const mistakes = [
    { n: 1, title: 'Shorting in an uptrend (context blindness)', body: 'You spotted a tiny bear flag inside a roaring uptrend. The larger structure crushes you. Always zoom out one timeframe first.', svg: <MistakeSVG variant="uptrend" /> },
    { n: 2, title: 'Entering before the flag has 4 candles', body: 'Two-candle "flag"? That is a continuation in progress, not a setup. Wait. Let the structure form.', svg: <MistakeSVG variant="early" /> },
    { n: 3, title: 'Ignoring volume divergence', body: 'Flag shows rising volume = buyers accumulating. The pattern looks textbook but the tape says no. Trust the tape.', svg: <MistakeSVG variant="vol" /> },
    { n: 4, title: 'Stop too tight (above the breakout candle)', body: 'Right direction, wrong stop. Standard retest moves wick out tight stops, then continue down without you.', svg: <MistakeSVG variant="tight" /> },
    { n: 5, title: 'Holding past the measured-move target hoping for more', body: 'Pole length is the projection. Past that you\'re on hope. Banks who built the move are taking profits — and so should you.', svg: <MistakeSVG variant="greed" /> }
  ];
  return (
    <SectionShell n={10} title="Five Mistakes That Kill Bear Flag Trades">
      <div className="space-y-3">
        {mistakes.map(m => (
          <div key={m.n} className="card flex flex-col md:flex-row gap-4 items-start">
            <div className="w-12 h-12 rounded-lg bg-red/15 text-red border border-red/40 flex items-center justify-center font-display font-bold text-xl shrink-0">
              {m.n}
            </div>
            <div className="flex-1">
              <h4 className="font-display font-semibold text-lg mb-2">{m.title}</h4>
              <p className="text-text/85 leading-relaxed">{m.body.replace(/\\'/g, "'")}</p>
            </div>
            <div className="w-full md:w-48 shrink-0">{m.svg}</div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function MistakeSVG({ variant }) {
  const w = 200, h = 110;
  if (variant === 'uptrend') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        {/* uptrend candles rising */}
        {[
          [20, 80, 70, 16],
          [40, 70, 60, 16],
          [60, 60, 50, 16],
          [80, 50, 40, 16],
          [100, 40, 30, 16]
        ].map(([x, y, hi, hg], i) => (
          <g key={i}>
            <line x1={x} x2={x} y1={y - 8} y2={y + 18} stroke="#10b981" strokeWidth={1.2} />
            <rect x={x - 4} y={y} width={8} height={hg} fill="#10b981" />
          </g>
        ))}
        {/* tiny bear flag inside */}
        <g transform="translate(120,0)">
          <line x1={20} x2={20} y1={42} y2={56} stroke="#FF3D5A" strokeWidth={1} />
          <rect x={16} y={45} width={8} height={9} fill="#FF3D5A" />
          <line x1={36} x2={36} y1={48} y2={62} stroke="#FF3D5A" strokeWidth={1} />
          <rect x={32} y={52} width={8} height={8} fill="#FF3D5A" />
        </g>
        <text x={100} y={104} fill="#FF3D5A" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">larger trend wins</text>
      </svg>
    );
  }
  if (variant === 'early') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        {[40, 60, 80, 100].map((x, i) => (
          <g key={i}>
            <line x1={x} x2={x} y1={20 + i * 12} y2={42 + i * 12} stroke="#FF3D5A" strokeWidth={1.2} />
            <rect x={x - 4} y={22 + i * 12} width={8} height={18} fill="#FF3D5A" />
          </g>
        ))}
        <line x1={120} x2={120} y1={62} y2={80} stroke="#10b981" strokeWidth={1} />
        <rect x={116} y={66} width={8} height={12} fill="#10b981" />
        <text x={150} y={68} fill="#FFB44A" fontSize={9} fontFamily="'Space Mono', monospace">entry?</text>
        <text x={150} y={80} fill="#FFB44A" fontSize={9} fontFamily="'Space Mono', monospace">no flag yet</text>
      </svg>
    );
  }
  if (variant === 'vol') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        {[20, 30, 40, 50, 60, 70].map((vol, i) => (
          <rect key={i} x={20 + i * 24} y={100 - vol} width={16} height={vol} fill="#10b981" opacity={0.6} />
        ))}
        <text x={100} y={20} fill="#FF3D5A" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">RISING VOL</text>
        <text x={100} y={104} fill="#666" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">buyers loading</text>
      </svg>
    );
  }
  if (variant === 'tight') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        <line x1={20} x2={180} y1={48} y2={48} stroke="#FF3D5A" strokeWidth={2} strokeDasharray="4 3" />
        <text x={100} y={42} fill="#FF3D5A" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">stop too tight</text>
        <line x1={80} x2={80} y1={40} y2={88} stroke="#FF3D5A" strokeWidth={1.5} />
        <rect x={76} y={50} width={8} height={32} fill="#FF3D5A" />
        <line x1={110} x2={110} y1={32} y2={92} stroke="#10b981" strokeWidth={1.5} />
        <rect x={106} y={48} width={8} height={28} fill="#10b981" />
        <text x={140} y={50} fill="#FFB44A" fontSize={9} fontFamily="'Space Mono', monospace">wicked!</text>
      </svg>
    );
  }
  if (variant === 'greed') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        <line x1={20} x2={180} y1={70} y2={70} stroke="#00D9A0" strokeWidth={2} strokeDasharray="4 3" />
        <text x={100} y={64} fill="#00D9A0" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">target — TAKE IT</text>
        {[40, 60, 80, 100].map((x, i) => (
          <g key={i}>
            <line x1={x} x2={x} y1={30 + i * 8} y2={50 + i * 8 + 14} stroke="#FF3D5A" strokeWidth={1.2} />
            <rect x={x - 4} y={32 + i * 8} width={8} height={14} fill="#FF3D5A" />
          </g>
        ))}
        <line x1={130} x2={130} y1={75} y2={92} stroke="#10b981" strokeWidth={1} />
        <rect x={126} y={78} width={8} height={12} fill="#10b981" />
        <line x1={150} x2={150} y1={70} y2={88} stroke="#10b981" strokeWidth={1} />
        <rect x={146} y={74} width={8} height={12} fill="#10b981" />
      </svg>
    );
  }
  return null;
}

// ============================================================
// SECTION 11 — PSYCHOLOGY
// ============================================================
function Section11Psychology() {
  return (
    <SectionShell n={11} title="Why the Pattern Forms (Psychology)">
      <div className="space-y-3 text-text/90 leading-relaxed">
        <p><span className="text-red font-semibold">1.</span> Big sellers dump → price drops sharply. <span className="text-muted">(the pole)</span></p>
        <p><span className="text-green font-semibold">2.</span> Some sellers take profits and a few bottom-fishers buy → price drifts up. <span className="text-muted">(the flag)</span></p>
        <p><span className="text-amber font-semibold">3.</span> The bottom-fishers run out of buying power and sellers return → price breaks down. <span className="text-muted">(the breakout)</span></p>
        <p><span className="text-red font-semibold">4.</span> The same big sellers continue, often hitting the same percentage drop again. <span className="text-muted">(the measured move)</span></p>
      </div>
    </SectionShell>
  );
}

// ============================================================
// SECTION 12 — CHECKLIST
// ============================================================
function Section12Checklist() {
  const items = [
    'Larger trend is down (or at minimum, neutral)',
    'Pole has 3-6 sharp red candles',
    'Flag has 4-8 candles drifting up or sideways',
    "Flag's slope is shallow, not steep",
    'Volume declined during the flag',
    "A candle closed below the flag's lower trendline",
    'The candle AFTER the breakout confirmed (red body, lower close, rising volume)',
    'No major economic news within next 5 minutes',
    "Stop is above the flag's high",
    'Measured-move target is at least 2x my risk'
  ];
  return (
    <SectionShell n={12} title="Scalping Checklist (Print This)">
      <p className="mb-5">Mentally run this list before every entry. If any answer is "no" — pass.</p>
      <div className="card border-green/40 bg-green/[0.03]">
        <ul className="space-y-3">
          {items.map((it, i) => (
            <li key={i} className="flex items-start gap-3">
              <input type="checkbox" />
              <span className="text-base">{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}

// ============================================================
// SHELL + UTILITIES
// ============================================================
function SectionShell({ n, title, children }) {
  return (
    <section className="mb-12">
      <div className="flex items-baseline gap-3 mb-5">
        <div className="font-mono text-sm text-green tracking-tight">§ {String(n).padStart(2, '0')}</div>
        <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Tile({ color, title, body }) {
  const colors = {
    red: 'border-red/40 text-red',
    green: 'border-green/40 text-green',
    amber: 'border-amber/40 text-amber'
  };
  return (
    <div className={`card-tight border ${colors[color]}`}>
      <div className={`font-display font-bold mb-2`}>{title}</div>
      <p className="text-sm text-text/80 leading-relaxed">{body}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-16 pt-8 border-t border-border">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-muted text-sm">2-minute scalper's complete bear flag treatment.</div>
        <Link to="/drill" className="btn btn-primary px-6">Drill this pattern →</Link>
      </div>
    </footer>
  );
}
