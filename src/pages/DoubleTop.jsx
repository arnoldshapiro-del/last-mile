import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import DoubleTopChart from '../components/DoubleTopChart.jsx';
import { examples } from '../data/doubleTopExamples.js';

export default function DoubleTop() {
  return (
    <div className="max-w-5xl mx-auto px-5 md:px-8 py-6 md:py-10 animate-fadeIn">
      <Header />
      <Section1Plain />
      <Section2ThreeParts />
      <Section2_5DrawingGuide />
      <Section3Timeframe />
      <Section4Gallery />
      <Section5DecisionTree />
      <Section6EntryTiers />
      <Section7Calculator />
      <Section8Stops />
      <Section9Volume />
      <Section10Mistakes />
      <Section11Lookalikes />
      <Section12TimeOfDay />
      <Section13Psychology />
      <Section14Checklist />
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
      <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-3">Double Top</h1>
      <p className="text-text/80 text-lg max-w-3xl leading-relaxed mb-4">
        The 2-minute scalper's complete double top treatment. Twelve large worked examples,
        a step-by-step neckline drawing guide, a breakout decision tree, three entry tiers,
        and a measured-move calculator. The neckline is the focal point of every chart.
      </p>
      <Link
        to="/second-signal/patterns/double-top"
        className="inline-flex items-center gap-2 text-sm border border-blue/30 bg-blue/5 text-text/85 hover:bg-blue/10 hover:border-blue/50 transition-colors px-3 py-2 rounded-lg no-underline max-w-3xl"
      >
        <span className="text-blue font-display font-medium">New to H2/L2?</span>
        <span>Learn the method first in Second Signal: Double Top</span>
        <span className="text-blue ml-auto">→</span>
      </Link>
    </div>
  );
}

/* ============================================================
   PLACEHOLDERS — sections injected via subsequent edits
   ============================================================ */
function Section1Plain() {
  return (
    <SectionShell n={1} title="What a Double Top Actually Is">
      <p className="mb-4">
        Price rallies to a high, sells off — that's the <span className="text-red font-semibold">FIRST PEAK</span>.
        Price rallies again, hits roughly the same high, gets rejected — that's the <span className="text-red font-semibold">SECOND PEAK</span>.
        Two failed attempts at the same level means buyers are exhausted at that price.
      </p>
      <p className="mb-4">
        Between the two peaks is a low — the trough. The HORIZONTAL line drawn at the trough is called the <span className="text-blue font-semibold">NECKLINE</span>.
        As long as price stays above the neckline, the pattern is forming, not yet complete.
      </p>
      <p>
        When price breaks DOWN through the neckline with a candle CLOSE below it, the double top is confirmed.
        Sellers have taken control. You short. Target = pattern height (peak to neckline) projected DOWN from the neckline.
      </p>
    </SectionShell>
  );
}
function Section2ThreeParts() {
  const ex = examples[0].pattern;
  return (
    <SectionShell n={2} title="The Three Parts">
      <p className="mb-5">A textbook double top, fully labeled. Take 30 seconds and trace each part with your eye — first peak, neckline at the trough, second peak, then the breakdown.</p>
      <DoubleTopChart pattern={ex} width={1200} height={600} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
        <Tile color="red" title="Two Peaks (the rejections)" body="Both peaks reject at the same price, within 2-3 ticks. Volume on the second peak is usually lower — fewer buyers willing to chase." />
        <Tile color="blue" title="The Neckline (horizontal)" body="Drawn at the lowest body close in the trough between the peaks. The pattern is alive while price is above this line." />
        <Tile color="amber" title="The Breakdown (short trigger)" body="A 2-min candle BODY CLOSES below the neckline by ≥1 tick. Sellers in control. Short on the close. Target = pattern height projected down." />
      </div>
    </SectionShell>
  );
}
function Section2_5DrawingGuide() {
  return (
    <SectionShell n="2.5" title="How to Draw the Neckline (Step by Step)">
      <p className="mb-5">
        Five numbered steps. Master these and you can mark up any 2-minute chart in seconds — and avoid the two biggest entry mistakes traders make on this pattern.
      </p>
      <div className="overflow-x-auto -mx-2 md:mx-0">
        <NecklineDrawingGuideSVG />
      </div>
      <div className="mt-5 card border-green/40 bg-green/[0.04]">
        <div className="font-display font-semibold text-green mb-3">Plain-language summary</div>
        <ol className="space-y-1.5 text-text/90 leading-relaxed">
          <li><span className="text-green num">1.</span> Find the lowest body CLOSE in the trough between the peaks.</li>
          <li><span className="text-green num">2.</span> Draw a horizontal line from there to the right.</li>
          <li><span className="text-green num">3.</span> Extend past the current candle.</li>
          <li><span className="text-green num">4.</span> Short only when a 2-minute candle BODY CLOSES below the line.</li>
          <li><span className="text-green num">5.</span> Confirm by waiting for the candle AFTER the break to follow through.</li>
        </ol>
      </div>
    </SectionShell>
  );
}

function NecklineDrawingGuideSVG() {
  const W = 1200, H = 600;
  const chartL = 30, chartT = 30, chartR = 720, chartB = 540;
  const capX = 750;
  // Hand-laid candles forming a clean double top with a clearly identifiable trough body close
  const candles = [
    { o: 98, h: 99, l: 97.6, c: 98.6 },
    { o: 98.6, h: 100.2, l: 98.4, c: 100.0 },
    { o: 100.0, h: 102.4, l: 99.8, c: 102.0 },
    // First peak idx 3 — top wick at 105
    { o: 102.0, h: 105.0, l: 101.8, c: 104.4 },
    { o: 104.4, h: 104.6, l: 102.4, c: 102.6 },
    { o: 102.6, h: 102.8, l: 100.6, c: 100.8 },
    // Trough — body close 99.8 (THE NECKLINE)
    { o: 100.8, h: 101.0, l: 99.6, c: 99.8 },
    { o: 99.8, h: 101.4, l: 99.6, c: 101.2 },
    { o: 101.2, h: 103.4, l: 101.0, c: 103.0 },
    // Second peak idx 9 — top wick 104.8
    { o: 103.0, h: 104.8, l: 102.8, c: 104.2 },
    { o: 104.2, h: 104.4, l: 102.0, c: 102.2 },
    { o: 102.2, h: 102.4, l: 100.0, c: 100.2 },
    // Wick-only break (idx 12) — wicks below neckline but body closes back above
    { o: 100.2, h: 100.4, l: 99.0, c: 100.0 },
    // Body close BELOW (idx 13) — confirmed break
    { o: 100.0, h: 100.2, l: 98.0, c: 98.2 },
    // Confirmation candle (idx 14)
    { o: 98.2, h: 98.4, l: 96.0, c: 96.2 }
  ];
  const minP = Math.min(...candles.map(c => c.l)) - 1;
  const maxP = Math.max(...candles.map(c => c.h)) + 1.5;
  const innerW = chartR - chartL;
  const innerH = chartB - chartT;
  const slot = innerW / candles.length;
  const bodyW = Math.max(8, slot * 0.65);
  const xFor = i => chartL + i * slot + slot / 2;
  const yFor = price => chartT + ((maxP - price) / (maxP - minP)) * innerH;

  const necklinePrice = 99.8;
  const necklineY = yFor(necklinePrice);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block rounded-xl border border-border w-full h-auto"
      style={{ background: '#0a0a0a', minWidth: '880px' }}>
      <text x={W / 2} y={20} fill="#10b981" fontSize={14} fontWeight="bold"
        fontFamily="'Oxanium', sans-serif" textAnchor="middle">
        DOUBLE TOP NECKLINE — 5 STEPS
      </text>
      {[0.25, 0.5, 0.75].map((t, i) => (
        <line key={i} x1={chartL} x2={chartR} y1={chartT + innerH * t} y2={chartT + innerH * t} stroke="#262626" strokeWidth={1} />
      ))}

      {/* Candles */}
      {candles.map((c, i) => {
        const x = xFor(i);
        const isUp = c.c >= c.o;
        const color = isUp ? '#10b981' : '#FF3D5A';
        const yO = yFor(c.o), yC = yFor(c.c), yH = yFor(c.h), yL = yFor(c.l);
        return (
          <g key={i}>
            <line x1={x} x2={x} y1={yH} y2={yL} stroke={color} strokeWidth={1.5} />
            <rect x={x - bodyW / 2} y={Math.min(yO, yC)} width={bodyW}
              height={Math.max(2, Math.abs(yC - yO))} fill={color} />
          </g>
        );
      })}

      {/* NECKLINE — thick cyan dashed horizontal */}
      <line x1={chartL + 4} y1={necklineY} x2={chartR - 4} y2={necklineY}
        stroke="#06b6d4" strokeWidth={3.5} strokeDasharray="9 5" />

      {/* Step 1 marker — at trough body close */}
      <NumCircle x={xFor(6)} y={yFor(99.8)} n="1" />

      {/* Step 2 — horizontal arrow extending right from trough */}
      <line x1={xFor(6) + 14} y1={necklineY - 22} x2={xFor(11) - 4} y2={necklineY - 22}
        stroke="#06b6d4" strokeWidth={2} />
      <polygon points={`${xFor(11) - 4},${necklineY - 22} ${xFor(11) - 14},${necklineY - 28} ${xFor(11) - 14},${necklineY - 16}`} fill="#06b6d4" />
      <NumCircle x={xFor(8)} y={necklineY - 22} n="2" color="#06b6d4" />

      {/* Step 3 — orange arrow at body-closed-below candle (idx 13) */}
      <line x1={xFor(13)} y1={yFor(98.2) + 14} x2={xFor(13)} y2={yFor(98.2) + 50} stroke="#f97316" strokeWidth={2.5} />
      <polygon points={`${xFor(13)},${yFor(98.2) + 56} ${xFor(13) - 7},${yFor(98.2) + 44} ${xFor(13) + 7},${yFor(98.2) + 44}`} fill="#f97316" />
      <NumCircle x={xFor(13)} y={yFor(98.2) + 70} n="3" color="#f97316" />

      {/* Step 4 — red X at wick-only candle (idx 12) */}
      <g transform={`translate(${xFor(12)},${yFor(100.0) - 35})`}>
        <g stroke="#FF3D5A" strokeWidth={3.5} opacity={0.85} strokeLinecap="round">
          <line x1={-12} y1={-12} x2={12} y2={12} />
          <line x1={12} y1={-12} x2={-12} y2={12} />
        </g>
        <NumCircle x={20} y={-20} n="4" color="#FF3D5A" />
      </g>

      {/* Step 5 — green checkmark at confirmation candle (idx 14) */}
      <g transform={`translate(${xFor(14)},${yFor(96.2) + 36})`}>
        <circle r={11} fill="#10b981" stroke="#000" strokeWidth={2} />
        <path d="M -5 0 L -1 4 L 5 -3" stroke="#000" strokeWidth={2.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <NumCircle x={xFor(14) - 22} y={yFor(96.2) + 36} n="5" color="#10b981" />

      {/* divider */}
      <line x1={chartR + 8} y1={chartT} x2={chartR + 8} y2={chartB} stroke="#262626" strokeWidth={1} />

      {/* Captions */}
      <CaptionBlock x={capX} y={50} num={1} color="#10b981"
        title="Find the lowest body close"
        body="The lowest CLOSE of any candle in the trough between the two peaks. Use the body close, NOT the lowest wick. The body is what matters." />
      <CaptionBlock x={capX} y={150} num={2} color="#06b6d4"
        title="Draw the line horizontally"
        body="Draw a HORIZONTAL line from that point straight to the right. The neckline is always horizontal for a double top — never diagonal." />
      <CaptionBlock x={capX} y={250} num={3} color="#f97316"
        title="Wait for a body close below"
        body="Wait until a 2-minute candle CLOSES below the line. Body close, not just a wick poke." />
      <CaptionBlock x={capX} y={350} num={4} color="#FF3D5A"
        title="Wicks below = NOT a signal"
        body="Wicks below the line are not signals. Buyers often defend the level on the close. Wait for a body close below." />
      <CaptionBlock x={capX} y={450} num={5} color="#10b981"
        title="Confirm with the next candle"
        body="Once a body has closed below, watch the NEXT candle. If it follows through with another red close, short on its close. Stop above the higher peak." />
    </svg>
  );
}
function Section3Timeframe() {
  const rows = [
    { tf: '1-minute',  peak: '8-20',         total: '15-40 candles' },
    { tf: '2-minute',  peak: '8-20',         total: '15-40 candles', highlight: true },
    { tf: '5-minute',  peak: '10-25',        total: '20-50 candles' },
    { tf: '15-minute', peak: '10-25',        total: '20-50 candles' },
    { tf: 'Daily',     peak: 'weeks-months', total: 'months' }
  ];
  return (
    <SectionShell n={3} title="How Long Should It Take? (Timeframe Table)">
      <p className="mb-5">Most pattern guides quote daily-chart durations. On the 2-minute scalper's chart they're irrelevant.</p>
      <div className="overflow-x-auto">
        <table className="w-full font-mono text-sm border-collapse">
          <thead>
            <tr className="text-left text-muted uppercase tracking-wider text-xs">
              <th className="py-2 px-3 border-b border-border">Timeframe</th>
              <th className="py-2 px-3 border-b border-border">Peak-to-peak time</th>
              <th className="py-2 px-3 border-b border-border">Total pattern</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={r.highlight ? 'bg-green/10 border-l-4 border-green' : ''}>
                <td className={`py-2 px-3 border-b border-border ${r.highlight ? 'text-green font-bold' : ''}`}>{r.tf}</td>
                <td className="py-2 px-3 border-b border-border">{r.peak}</td>
                <td className="py-2 px-3 border-b border-border">{r.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5 card-tight border-green/40 bg-green/5">
        <p className="text-green font-display font-bold text-base md:text-lg leading-relaxed">
          On 2-min: 15-40 minutes from first peak to neckline break. Within 5 min = noise.
          Beyond 60 min = stale, skip.
        </p>
      </div>
    </SectionShell>
  );
}
function Section4Gallery() {
  return (
    <SectionShell n={4} title="Twelve Large Examples — Each with Neckline Drawn Explicitly">
      <p className="mb-6">Each example is its own exhibit. Every chart shows both peaks marked, the neckline drawn at the trough body close with A and B endpoint markers, the pattern-height bracket, and where applicable the breakout arrow or failure overlay. Read the chart, then the caption.</p>
      <DoubleTopGallery />
    </SectionShell>
  );
}

function DoubleTopGallery() {
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
      <DoubleTopChart
        pattern={ex.pattern}
        width={1100}
        height={550}
        newsAtIndex={ex.pattern.newsAtIndex}
      />
      <p className="mt-4 leading-relaxed text-text/90 max-w-4xl">{ex.caption}</p>
    </div>
  );
}
function Section5DecisionTree() {
  return (
    <SectionShell n={5} title="The Neckline Break Decision Tree">
      <p className="mb-5">Three sequential questions. Click your answer; the next question reveals — or you get a verdict.</p>
      <DoubleTopDecisionTree />
    </SectionShell>
  );
}

function DoubleTopDecisionTree() {
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
          q={"Have BOTH peaks formed AND has a candle CLOSED below the neckline by at least 1 tick?"}
          svg={<MiniNecklineSVG variant="close-below" />}
          options={[
            { label: 'No — pattern not complete or only wicked', verdict: { kind: 'red', text: 'Pattern not complete. Wait. Don\'t anticipate. A wick poke is not a close.' } },
            { label: 'Yes — both peaks formed and body closed below', next: 2 }
          ]}
          choose={choose}
        />
      )}

      {step === 2 && (
        <DTQuestion
          n={2}
          q="What does the candle right AFTER the neckline break look like?"
          svg={<MiniNecklineSVG variant="after-candle" />}
          options={[
            { label: 'Red body, lower close, rising volume', verdict: { kind: 'green', text: 'Confirmed. Short on this candle\'s close. Stop above the higher peak. Target = pattern height projected below the neckline.' }, next: 3, gotoNext: true },
            { label: 'Small body / doji / low volume', verdict: { kind: 'amber', text: 'Stalled. Wait one more candle. If still stalled or turning green, abort.' } },
            { label: 'Green body that closes back above the neckline', verdict: { kind: 'red', text: 'Failed break. Stand down. Often becomes continuation up — watch for the third test.' } }
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
          q="Was breakout volume higher than the average volume of the trough?"
          svg={<MiniNecklineSVG variant="volume" />}
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
      <h4 className="font-display font-semibold text-lg mb-4">{q}</h4>
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

function MiniNecklineSVG({ variant }) {
  const w = 600, h = 160;
  if (variant === 'close-below') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        <line x1={20} y1={90} x2={580} y2={90} stroke="#06b6d4" strokeWidth={2.5} strokeDasharray="8 4" />
        <text x={24} y={84} fill="#06b6d4" fontSize={10} fontFamily="'Space Mono', monospace">neckline</text>
        {/* wick-only candle */}
        <g transform="translate(180,0)">
          <line x1={0} x2={0} y1={70} y2={120} stroke="#FF3D5A" strokeWidth={1.5} />
          <rect x={-8} y={75} width={16} height={10} fill="#FF3D5A" />
          <text x={0} y={138} fill="#FF3D5A" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">wick only</text>
          <text x={0} y={152} fill="#FF3D5A" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">NOT valid</text>
        </g>
        {/* body close below */}
        <g transform="translate(420,0)">
          <line x1={0} x2={0} y1={75} y2={140} stroke="#FF3D5A" strokeWidth={1.5} />
          <rect x={-8} y={80} width={16} height={45} fill="#FF3D5A" />
          <text x={0} y={148} fill="#10b981" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">body closed below</text>
          <text x={0} y={158} fill="#10b981" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">VALID</text>
        </g>
      </svg>
    );
  }
  if (variant === 'after-candle') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        <line x1={20} y1={70} x2={580} y2={70} stroke="#06b6d4" strokeWidth={2} strokeDasharray="6 4" opacity={0.7} />
        {/* breakout candle */}
        <g transform="translate(70,0)">
          <line x1={0} x2={0} y1={50} y2={110} stroke="#FF3D5A" strokeWidth={1.5} />
          <rect x={-8} y={60} width={16} height={45} fill="#FF3D5A" />
          <text x={0} y={130} fill="#888" fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">break</text>
        </g>
        <g transform="translate(180,0)">
          <line x1={0} x2={0} y1={75} y2={135} stroke="#FF3D5A" strokeWidth={1.5} />
          <rect x={-8} y={85} width={16} height={45} fill="#FF3D5A" />
          <text x={0} y={150} fill="#10b981" fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">A — confirm</text>
        </g>
        <g transform="translate(330,0)">
          <line x1={0} x2={0} y1={70} y2={120} stroke="#888" strokeWidth={1.5} />
          <rect x={-8} y={94} width={16} height={4} fill="#888" />
          <text x={0} y={150} fill="#FFB44A" fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">B — stalled</text>
        </g>
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
        {[60, 50, 42, 36].map((h2, i) => (
          <rect key={i} x={70 + i * 30} y={140 - h2} width={20} height={h2} fill="#10b981" opacity={0.5} />
        ))}
        <rect x={220} y={40} width={20} height={100} fill="#FF3D5A" opacity={0.7} />
        <text x={230} y={30} fill="#10b981" fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">YES — high</text>
        <line x1={290} x2={290} y1={20} y2={150} stroke="#262626" />
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
function Section6EntryTiers() {
  const tiers = [
    {
      name: 'Aggressive', tag: 'TIER 1', color: 'amber',
      entry: 'Close of the candle that breaks below the neckline',
      stop: 'Above the higher of the two peaks',
      rr: '2:1 to 3:1',
      win: 'Lower (more false signals)',
      use: 'Strong rejection at both peaks, momentum bearish',
      size: '25-50%',
      svg: <DTTierSVG variant="aggressive" />
    },
    {
      name: 'Confirmation', tag: 'TIER 2', color: 'green',
      entry: 'Close of the candle AFTER the break, only if it follows through',
      stop: 'Above the higher of the two peaks',
      rr: '2:1 to 2.5:1',
      win: 'Higher',
      use: 'Standard trade — the daily default',
      size: 'Full size',
      svg: <DTTierSVG variant="confirm" />
    },
    {
      name: 'Retest', tag: 'TIER 3', color: 'blue',
      entry: 'Rejection candle after price rallies back to the neckline from below',
      stop: 'Above the rejection candle\'s high',
      rr: '1.5:1 to 2:1',
      win: 'Highest',
      use: 'You missed Tier 1 and Tier 2, or you only take A+ setups',
      size: 'Full size, tight stop',
      svg: <DTTierSVG variant="retest" />
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
              <Row label="Entry" v={t.entry} />
              <Row label="Stop" v={t.stop} />
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

function DTTierSVG({ variant }) {
  const w = 280, h = 130;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
      {/* neckline at y=78 */}
      <line x1={20} y1={78} x2={260} y2={78} stroke="#06b6d4" strokeWidth={1.8} strokeDasharray="6 3" opacity={0.85} />
      {/* peak 1 */}
      <line x1={70} x2={70} y1={28} y2={78} stroke="#10b981" strokeWidth={1.5} />
      <rect x={66} y={32} width={8} height={20} fill="#10b981" />
      {/* trough */}
      <line x1={110} x2={110} y1={62} y2={86} stroke="#FF3D5A" strokeWidth={1.5} />
      <rect x={106} y={68} width={8} height={14} fill="#FF3D5A" />
      {/* peak 2 */}
      <line x1={150} x2={150} y1={28} y2={78} stroke="#10b981" strokeWidth={1.5} />
      <rect x={146} y={32} width={8} height={20} fill="#10b981" />
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
function Section7Calculator() {
  const [peak, setPeak] = useState(22050);
  const [neckline, setNeckline] = useState(22030);
  const [breakout, setBreakout] = useState(22028);
  const patternHeight = useMemo(() => peak - neckline, [peak, neckline]);
  const target = useMemo(() => breakout - patternHeight, [breakout, patternHeight]);
  const valid = patternHeight > 0;

  return (
    <SectionShell n={7} title="Measured-Move Target Calculator">
      <p className="mb-3">Pattern height (peak − neckline) projected DOWN from the breakout = your measured-move target.</p>
      <p className="mb-5 text-sm text-muted">Tick math: <span className="text-text/80">NQ = $5/tick (0.25 pt) · RTY = $5/tick (0.10 pt) · ES = $12.50/tick (0.25 pt)</span></p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
        <NumInput label="Peak price (higher of two)" v={peak} onChange={setPeak} />
        <NumInput label="Neckline price (trough body close)" v={neckline} onChange={setNeckline} />
        <NumInput label="Breakout price (body close below)" v={breakout} onChange={setBreakout} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        <Outcome label="Pattern height" v={valid ? patternHeight.toFixed(2) : '—'} accent="red" />
        <Outcome label="Drop projection" v={valid ? `-${patternHeight.toFixed(2)}` : '—'} accent="amber" />
        <Outcome label="Target price" v={valid ? target.toFixed(2) : '—'} accent="green" />
      </div>
      <DTCalculatorChart peak={peak} neckline={neckline} breakout={breakout} target={target} valid={valid} />
    </SectionShell>
  );
}

function DTCalculatorChart({ peak, neckline, breakout, target, valid }) {
  if (!valid) return null;
  const w = 1100, h = 340;
  const padL = 60, padR = 130, padT = 30, padB = 30;
  const innerW = w - padL - padR;
  const innerH = h - padT - padB;
  const range = peak - target;
  const yMax = peak + range * 0.08;
  const yMin = target - range * 0.08;
  const yRange = yMax - yMin;
  const y = price => padT + ((yMax - price) / yRange) * innerH;

  const xPeak1 = padL + innerW * 0.10;
  const xTrough = padL + innerW * 0.28;
  const xPeak2 = padL + innerW * 0.46;
  const xBreakout = padL + innerW * 0.62;
  const xTarget = padL + innerW * 0.92;

  return (
    <div className="overflow-x-auto -mx-2 md:mx-0">
      <svg viewBox={`0 0 ${w} ${h}`} className="block rounded-xl border border-border" style={{ background: '#0a0a0a', minWidth: '880px' }}>
        {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
          <line key={i} x1={padL} x2={w - padR} y1={padT + innerH * t} y2={padT + innerH * t} stroke="#262626" strokeWidth={1} />
        ))}

        {/* M-shape outline */}
        <polyline
          points={`${xPeak1},${y(neckline) + 10} ${xPeak1},${y(peak)} ${xTrough},${y(neckline)} ${xPeak2},${y(peak)} ${xPeak2 + 30},${y(neckline) + 10}`}
          fill="none" stroke="#FF3D5A" strokeWidth={2.5} opacity={0.85}
        />

        {/* PEAK markers */}
        <circle cx={xPeak1} cy={y(peak)} r={6} fill="#FF3D5A" stroke="#000" strokeWidth={1.5} />
        <text x={xPeak1} y={y(peak) - 12} fill="#FF3D5A" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">Peak 1 {peak.toFixed(1)}</text>
        <circle cx={xPeak2} cy={y(peak)} r={6} fill="#FF3D5A" stroke="#000" strokeWidth={1.5} />
        <text x={xPeak2} y={y(peak) - 12} fill="#FF3D5A" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">Peak 2 {peak.toFixed(1)}</text>

        {/* NECKLINE — horizontal cyan dashed */}
        <line x1={padL} x2={w - padR} y1={y(neckline)} y2={y(neckline)} stroke="#06b6d4" strokeWidth={3.5} strokeDasharray="9 5" />
        <rect x={w - padR + 6} y={y(neckline) - 11} width={padR - 10} height={22} rx={3} fill="#0a0a0a" stroke="#06b6d4" />
        <text x={w - padR + 12} y={y(neckline) + 5} fill="#06b6d4" fontSize={12} fontFamily="'Space Mono', monospace">NL {neckline.toFixed(1)}</text>

        {/* PATTERN HEIGHT bracket */}
        <line x1={padL + 12} y1={y(peak)} x2={padL + 24} y2={y(peak)} stroke="#FF3D5A" strokeWidth={2} />
        <line x1={padL + 12} y1={y(neckline)} x2={padL + 24} y2={y(neckline)} stroke="#FF3D5A" strokeWidth={2} />
        <line x1={padL + 18} y1={y(peak)} x2={padL + 18} y2={y(neckline)} stroke="#FF3D5A" strokeWidth={2} />
        <text x={padL + 28} y={y((peak + neckline) / 2) + 4} fill="#FF3D5A" fontSize={11} fontFamily="'Space Mono', monospace">
          H = {(peak - neckline).toFixed(2)}
        </text>

        {/* BREAKOUT marker */}
        <circle cx={xBreakout} cy={y(breakout)} r={6} fill="#FFB44A" stroke="#000" strokeWidth={1.5} />
        <text x={xBreakout} y={y(breakout) - 12} fill="#FFB44A" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">break {breakout.toFixed(1)}</text>

        {/* PROJECTION arrow down */}
        <line x1={xBreakout} x2={xTarget} y1={y(breakout)} y2={y(target)} stroke="#00D9A0" strokeWidth={3} strokeDasharray="6 5" />
        <polygon points={`${xTarget},${y(target)} ${xTarget - 8},${y(target) - 8} ${xTarget - 8},${y(target) + 8}`} fill="#00D9A0" />
        <text x={(xBreakout + xTarget) / 2} y={y((breakout + target) / 2) + 18} fill="#00D9A0"
          fontSize={13} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight="bold">
          PROJECT DOWN {patternHeightStr(peak, neckline)}
        </text>

        {/* TARGET line */}
        <line x1={padL} x2={w - padR} y1={y(target)} y2={y(target)} stroke="#00D9A0" strokeWidth={1.5} strokeDasharray="6 4" opacity={0.85} />
        <rect x={w - padR + 6} y={y(target) - 11} width={padR - 10} height={22} rx={3} fill="#0a0a0a" stroke="#00D9A0" />
        <text x={w - padR + 12} y={y(target) + 5} fill="#00D9A0" fontSize={12} fontFamily="'Space Mono', monospace">
          TGT {target.toFixed(1)}
        </text>
      </svg>
    </div>
  );
}

function patternHeightStr(peak, neckline) {
  return (peak - neckline).toFixed(2);
}
function Section8Stops() {
  const stops = [
    { kind: 'CORRECT', color: 'green', title: 'Above the higher peak (+1-2 ticks)',
      body: 'Stop sits 1-2 ticks above the higher of the two peaks. Survives test failures and stop-hunt wicks. This is the default.',
      svg: <DTStopSVG variant="correct" /> },
    { kind: 'TOO TIGHT', color: 'red', title: 'At second peak\'s exact level',
      body: 'Tempting because risk looks small. Reality: gets wicked out by the very-common test-failure overshoot. Right idea, dead trader.',
      svg: <DTStopSVG variant="tight" /> },
    { kind: 'TOO LOOSE', color: 'amber', title: 'Way above the higher peak',
      body: 'Now risk is so large the R:R doesn\'t work. Even if you\'re right about direction, you can\'t take a fair size — so the win is too small to matter.',
      svg: <DTStopSVG variant="loose" /> }
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
            <h4 className={`font-display font-semibold mb-3 ${colors[s.color].text}`}>{s.title}</h4>
            <div className="mb-3">{s.svg}</div>
            <p className="text-sm text-text/85 leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function DTStopSVG({ variant }) {
  const w = 280, h = 160;
  const candles = (
    <g>
      {/* neckline */}
      <line x1={20} y1={100} x2={260} y2={100} stroke="#06b6d4" strokeWidth={1.8} strokeDasharray="6 3" opacity={0.85} />
      {/* peak 1 */}
      <line x1={70} x2={70} y1={48} y2={102} stroke="#10b981" strokeWidth={1.5} />
      <rect x={66} y={52} width={8} height={28} fill="#10b981" />
      {/* trough */}
      <line x1={110} x2={110} y1={84} y2={108} stroke="#FF3D5A" strokeWidth={1.5} />
      <rect x={106} y={90} width={8} height={14} fill="#FF3D5A" />
      {/* peak 2 */}
      <line x1={150} x2={150} y1={48} y2={102} stroke="#10b981" strokeWidth={1.5} />
      <rect x={146} y={52} width={8} height={28} fill="#10b981" />
      {/* breakout */}
      <line x1={200} x2={200} y1={100} y2={140} stroke="#FF3D5A" strokeWidth={1.5} />
      <rect x={196} y={104} width={8} height={32} fill="#FF3D5A" />
    </g>
  );
  let stop;
  if (variant === 'correct') {
    stop = (
      <g>
        <line x1={20} x2={260} y1={42} y2={42} stroke="#10b981" strokeWidth={2} strokeDasharray="6 3" />
        <text x={140} y={34} fill="#10b981" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">stop · above higher peak</text>
      </g>
    );
  } else if (variant === 'tight') {
    stop = (
      <g>
        <line x1={20} x2={260} y1={50} y2={50} stroke="#FF3D5A" strokeWidth={2} strokeDasharray="6 3" />
        <text x={140} y={42} fill="#FF3D5A" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">stop · at peak (too tight)</text>
        {/* test-failure wick */}
        <line x1={150} x2={150} y1={36} y2={48} stroke="#FFB44A" strokeWidth={2} />
        <text x={170} y={42} fill="#FFB44A" fontSize={9} fontFamily="'Space Mono', monospace">wicked!</text>
      </g>
    );
  } else if (variant === 'loose') {
    stop = (
      <g>
        <line x1={20} x2={260} y1={20} y2={20} stroke="#FFB44A" strokeWidth={2} strokeDasharray="6 3" />
        <text x={140} y={14} fill="#FFB44A" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">stop · way above (too loose)</text>
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
function Section9Volume() {
  return (
    <SectionShell n={9} title="Volume Rules">
      <p className="mb-5">Three volume profiles side by side. Only one is a tradable double top.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DTVolCard tag="VALID" color="green"
          body="Volume highest on the FIRST peak. Lower on the second peak (declining buyer enthusiasm). Volume SURGES on the neckline break candle. Sellers re-engage. This is the only profile to trade."
          svg={<DTVolSVG variant="valid" />} />
        <DTVolCard tag="SUSPECT" color="amber"
          body="Volume is roughly equal on both peaks. Modest, unconvincing volume on neckline break. The break may work, but the probability is half what a valid setup gives you. Half size or skip."
          svg={<DTVolSVG variant="suspect" />} />
        <DTVolCard tag="INVALID" color="red"
          body="Volume RISING on the second peak vs the first — buyers are getting MORE aggressive. Tiny volume on the neckline break. Skip. These flip up almost every time."
          svg={<DTVolSVG variant="invalid" />} />
      </div>
    </SectionShell>
  );
}

function DTVolCard({ tag, color, body, svg }) {
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

function DTVolSVG({ variant }) {
  const w = 280, h = 130;
  // 9 bars: rise to P1, fall, rise to P2, neckline break
  // Index meanings: [rise1, P1, fall1, fall2, rise2, P2, fall3, fall4, BREAK]
  let bars;
  if (variant === 'valid') {
    bars = [60, 110, 65, 50, 50, 75, 65, 70, 120]; // P1 highest, P2 lower, big break
  } else if (variant === 'suspect') {
    bars = [60, 80, 55, 50, 55, 78, 60, 60, 65]; // P1 ≈ P2, weak break
  } else {
    bars = [55, 70, 50, 45, 60, 95, 55, 50, 45]; // P2 > P1, tiny break
  }
  const max = Math.max(...bars);
  const colors = bars.map((_, i) => {
    if (i === 1 || i === 5) return '#10b981'; // peaks
    if (i === 8) return '#f97316'; // break
    return '#888';
  });
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
      <text x={20} y={18} fill="#666" fontSize={10} fontFamily="'Space Mono', monospace">VOLUME</text>
      {bars.map((b, i) => {
        const barH = (b / max) * 90;
        return (
          <g key={i}>
            <rect x={26 + i * 26} y={120 - barH} width={18} height={barH} fill={colors[i]} opacity={0.7} />
          </g>
        );
      })}
      <text x={26 + 1 * 26 + 9} y={28} fill="#10b981" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">P1</text>
      <text x={26 + 5 * 26 + 9} y={28} fill="#10b981" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">P2</text>
      <text x={26 + 8 * 26 + 9} y={28} fill="#f97316" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">brk</text>
    </svg>
  );
}
function Section10Mistakes() {
  const mistakes = [
    { n: 1, title: 'Shorting at the second peak before neckline breaks', body: 'You see two rejections at the same level and pull the trigger before the neckline confirms. Often the second peak briefly wicks higher (the test failure overshoot) and stops you out — then the pattern works without you. Patience costs nothing.', svg: <DTMistakeSVG variant="premature" /> },
    { n: 2, title: 'Drawing the neckline at the wrong level', body: 'Use the lowest body CLOSE in the trough — not the lowest wick. Wicks are noise. The body close is what matters because that\'s where buyers and sellers actually settled.', svg: <DTMistakeSVG variant="wickline" /> },
    { n: 3, title: 'Trading double tops in a strong uptrend (context blindness)', body: 'A double top inside a roaring uptrend is a pullback in disguise. The larger trend grinds you flat. Always zoom out one timeframe before entering. Double tops only work in neutral or downtrending context.', svg: <DTMistakeSVG variant="uptrend" /> },
    { n: 4, title: 'Stop too tight (just above second peak)', body: 'Right direction, wrong stop. Test-failure overshoots wick out tight stops then continue down without you. Stop above the HIGHER peak by 1-2 ticks — never at the exact level.', svg: <DTMistakeSVG variant="tight" /> },
    { n: 5, title: 'Holding past the measured-move target', body: 'Pattern height is the projection. Past that you\'re on hope. Take the target. Big sellers who created the rejection are taking profits — and so should you.', svg: <DTMistakeSVG variant="greed" /> },
    { n: 6, title: 'Trading within 5 minutes of FOMC, NFP, CPI, earnings', body: 'Scheduled news invalidates technical setups. A perfect double top on the chart means nothing if Powell speaks in 4 minutes. Always check the economic calendar before entering.', svg: <DTMistakeSVG variant="news" /> }
  ];
  return (
    <SectionShell n={10} title="Six Mistakes That Kill Double Top Trades">
      <div className="space-y-3">
        {mistakes.map(m => (
          <div key={m.n} className="card flex flex-col md:flex-row gap-4 items-start">
            <div className="w-12 h-12 rounded-lg bg-red/15 text-red border border-red/40 flex items-center justify-center font-display font-bold text-xl shrink-0">
              {m.n}
            </div>
            <div className="flex-1">
              <h4 className="font-display font-semibold text-lg mb-2">{m.title}</h4>
              <p className="text-text/85 leading-relaxed">{m.body}</p>
            </div>
            <div className="w-full md:w-48 shrink-0">{m.svg}</div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function DTMistakeSVG({ variant }) {
  const w = 200, h = 110;
  if (variant === 'premature') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        <line x1={20} y1={68} x2={180} y2={68} stroke="#06b6d4" strokeWidth={1.5} strokeDasharray="5 3" />
        <line x1={50} x2={50} y1={28} y2={70} stroke="#10b981" strokeWidth={1.4} />
        <rect x={46} y={32} width={8} height={20} fill="#10b981" />
        <line x1={120} x2={120} y1={20} y2={68} stroke="#FFB44A" strokeWidth={1.4} />
        <rect x={116} y={32} width={8} height={20} fill="#10b981" />
        <text x={140} y={26} fill="#FFB44A" fontSize={9} fontFamily="'Space Mono', monospace">wick spike</text>
        <circle cx={120} cy={32} r={4} fill="#FF3D5A" />
        <text x={120} y={92} fill="#FF3D5A" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">stopped</text>
      </svg>
    );
  }
  if (variant === 'wickline') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        <line x1={20} y1={88} x2={180} y2={88} stroke="#FF3D5A" strokeWidth={1.5} strokeDasharray="4 3" />
        <text x={100} y={102} fill="#FF3D5A" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">wick line — WRONG</text>
        <line x1={20} y1={70} x2={180} y2={70} stroke="#06b6d4" strokeWidth={2} strokeDasharray="5 3" />
        <text x={100} y={62} fill="#06b6d4" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">body line — RIGHT</text>
        <line x1={100} x2={100} y1={50} y2={90} stroke="#FF3D5A" strokeWidth={1.4} />
        <rect x={96} y={62} width={8} height={10} fill="#FF3D5A" />
      </svg>
    );
  }
  if (variant === 'uptrend') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        {/* uptrend */}
        <polyline points="20,90 50,75 80,55 110,40 140,30 170,20" fill="none" stroke="#10b981" strokeWidth={2} />
        {/* tiny double top inside */}
        <g transform="translate(105,35)">
          <line x1={0} x2={0} y1={0} y2={12} stroke="#FF3D5A" strokeWidth={1} />
          <rect x={-3} y={2} width={6} height={6} fill="#FF3D5A" />
          <line x1={12} x2={12} y1={0} y2={12} stroke="#FF3D5A" strokeWidth={1} />
          <rect x={9} y={2} width={6} height={6} fill="#FF3D5A" />
        </g>
        <text x={100} y={104} fill="#FF3D5A" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">trend wins</text>
      </svg>
    );
  }
  if (variant === 'tight') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        <line x1={20} x2={180} y1={48} y2={48} stroke="#FF3D5A" strokeWidth={2} strokeDasharray="4 3" />
        <text x={100} y={42} fill="#FF3D5A" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">stop too tight</text>
        <line x1={80} x2={80} y1={36} y2={88} stroke="#10b981" strokeWidth={1.5} />
        <rect x={76} y={50} width={8} height={28} fill="#10b981" />
        <line x1={110} x2={110} y1={32} y2={88} stroke="#FFB44A" strokeWidth={1.5} />
        <rect x={106} y={50} width={8} height={28} fill="#10b981" />
        <text x={140} y={48} fill="#FFB44A" fontSize={9} fontFamily="'Space Mono', monospace">wicked!</text>
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
  if (variant === 'news') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        <rect x={70} y={20} width={60} height={20} rx={4} fill="#FFB44A" />
        <text x={100} y={34} fill="#000" fontSize={10} textAnchor="middle" fontWeight="bold" fontFamily="'Space Mono', monospace">FOMC</text>
        <line x1={100} x2={100} y1={42} y2={102} stroke="#FFB44A" strokeWidth={2} strokeDasharray="3 3" opacity={0.85} />
        {/* fake double top getting wrecked by news */}
        <line x1={50} x2={50} y1={62} y2={92} stroke="#FF3D5A" strokeWidth={1.2} />
        <rect x={46} y={66} width={8} height={14} fill="#FF3D5A" />
        <line x1={150} x2={150} y1={48} y2={102} stroke="#10b981" strokeWidth={1.5} />
        <rect x={146} y={52} width={8} height={45} fill="#10b981" />
        <text x={170} y={56} fill="#10b981" fontSize={9} fontFamily="'Space Mono', monospace">RIPS</text>
      </svg>
    );
  }
  return null;
}
function Section11Lookalikes() {
  const items = [
    {
      tag: 'vs Triple Top', svg: <LookalikeSVG variant="triple" />,
      caption: "If price tests the same level a THIRD time, often resolves UP. Buyers keep showing up at resistance — that's accumulation, not exhaustion. If you shorted thinking double top, cut and reassess. Three tests = caution."
    },
    {
      tag: 'vs Head and Shoulders', svg: <LookalikeSVG variant="hns" />,
      caption: "If the middle peak is clearly higher than the surrounding two, it's H&S — not a double top. Different pattern, different rules. The H&S neckline is drawn through the two TROUGHS between peaks, not at one trough."
    },
    {
      tag: 'vs Range / Consolidation', svg: <LookalikeSVG variant="range" />,
      caption: "True double tops have SHARP rejections at peaks (long upper wicks, strong sellers). Ranges have lazy drifts. If the peaks aren't crisp — if they look more like a ceiling than a wall — it's chop, not a double top."
    }
  ];
  return (
    <SectionShell n={11} title="Double Top vs Lookalike Patterns">
      <p className="mb-5">Three patterns that LOOK like double tops but trade differently.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((it, i) => (
          <div key={i} className="card border-amber/30">
            <div className="label text-amber mb-2">{it.tag}</div>
            <div className="mb-3">{it.svg}</div>
            <p className="text-sm text-text/85 leading-relaxed">{it.caption}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function LookalikeSVG({ variant }) {
  const w = 280, h = 150;
  if (variant === 'triple') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        <line x1={20} y1={100} x2={260} y2={100} stroke="#06b6d4" strokeWidth={1.5} strokeDasharray="5 3" />
        <text x={140} y={140} fill="#888" fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">three peaks → often breaks UP</text>
        {/* three peaks at same level */}
        <polyline points="20,100 50,40 80,80 120,40 160,80 200,40 240,80" fill="none" stroke="#10b981" strokeWidth={2} />
        <circle cx={50} cy={40} r={4} fill="#FF3D5A" />
        <circle cx={120} cy={40} r={4} fill="#FF3D5A" />
        <circle cx={200} cy={40} r={4} fill="#FF3D5A" />
        <line x1={240} y1={80} x2={260} y2={30} stroke="#10b981" strokeWidth={2} />
        <polygon points="260,30 252,38 252,28" fill="#10b981" />
      </svg>
    );
  }
  if (variant === 'hns') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        <text x={140} y={140} fill="#888" fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">middle peak HIGHER → H&S</text>
        {/* L shoulder, head, R shoulder */}
        <polyline points="20,100 50,60 80,90 120,30 160,90 200,60 240,100" fill="none" stroke="#10b981" strokeWidth={2} />
        <text x={50} y={56} fill="#FFB44A" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">LS</text>
        <text x={120} y={26} fill="#FF3D5A" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">HEAD</text>
        <text x={200} y={56} fill="#FFB44A" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">RS</text>
        {/* H&S neckline through troughs */}
        <line x1={20} y1={90} x2={260} y2={90} stroke="#06b6d4" strokeWidth={1.8} strokeDasharray="6 4" />
        <text x={250} y={86} fill="#06b6d4" fontSize={9} textAnchor="end" fontFamily="'Space Mono', monospace">H&S neckline</text>
      </svg>
    );
  }
  if (variant === 'range') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        <text x={140} y={140} fill="#888" fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">no sharp rejections = chop</text>
        {/* Sloppy ceiling-bound waves with no clear peaks */}
        <polyline points="20,100 40,75 60,85 80,72 100,82 120,68 140,80 160,72 180,82 200,75 220,80 240,72 260,85" fill="none" stroke="#888" strokeWidth={1.8} />
        <line x1={20} y1={68} x2={260} y2={68} stroke="#FFB44A" strokeWidth={1.4} strokeDasharray="3 3" opacity={0.7} />
        <text x={250} y={62} fill="#FFB44A" fontSize={9} textAnchor="end" fontFamily="'Space Mono', monospace">ceiling, not peaks</text>
      </svg>
    );
  }
  return null;
}
function Section12TimeOfDay() {
  const zones = [
    { from: '9:30',  to: '10:00', label: 'OPENING DRIVE',     color: 'amber',
      body: 'Morning high prints, often becomes first peak. Don\'t trade — just watch.' },
    { from: '10:00', to: '10:15', label: 'TRANSITION',        color: 'muted',
      body: 'First peak in, watch for retreat to morning low. Setup forming.' },
    { from: '10:15', to: '12:00', label: 'YOUR WINDOW',       color: 'green', highlight: true,
      body: 'Highest quality. Second-wave rally tests morning high. 10:30-11:30 is cleanest. Your zone.' },
    { from: '12:00', to: '14:00', label: 'LUNCH CHOP',        color: 'red',
      body: 'Avoid. Fake double tops everywhere. Low volume, traders away. Skip.' },
    { from: '14:00', to: '15:00', label: 'AFTERNOON RESTART', color: 'amber',
      body: 'Decent quality on retests of morning highs. Take quality only.' },
    { from: '15:00', to: '16:00', label: 'POWER HOUR',        color: 'amber',
      body: 'Variable. Trapped longs can produce squeeze rallies. Smaller size.' }
  ];
  const colors = {
    green: 'border-green/40 text-green',
    amber: 'border-amber/40 text-amber',
    red: 'border-red/40 text-red',
    muted: 'border-border text-muted'
  };
  return (
    <SectionShell n={12} title="Time of Day">
      <p className="mb-5">When during the session does this pattern fire? When should you skip?</p>

      {/* Horizontal timeline */}
      <div className="card mb-5 overflow-x-auto">
        <svg viewBox="0 0 1100 120" className="block w-full h-auto" style={{ background: '#0a0a0a', borderRadius: 8, minWidth: 880 }}>
          {/* axis */}
          <line x1={50} y1={70} x2={1050} y2={70} stroke="#555" strokeWidth={1.5} />
          {/* zones */}
          {[
            { from: 50,   to: 175,  color: '#FFB44A', label: '9:30-10:00 OPEN' },
            { from: 175,  to: 240,  color: '#666',    label: '10:00-10:15 TRANSITION' },
            { from: 240,  to: 680,  color: '#10b981', label: '10:15-12:00 YOUR WINDOW' },
            { from: 680,  to: 870,  color: '#FF3D5A', label: '12:00-14:00 LUNCH CHOP' },
            { from: 870,  to: 960,  color: '#FFB44A', label: '14:00-15:00 RESTART' },
            { from: 960,  to: 1050, color: '#FFB44A', label: '15:00-16:00 POWER HR' }
          ].map((z, i) => (
            <g key={i}>
              <rect x={z.from} y={50} width={z.to - z.from} height={40} fill={z.color} opacity={0.3} stroke={z.color} strokeWidth={1.2} />
              <text x={(z.from + z.to) / 2} y={75} fill={z.color} fontSize={11} textAnchor="middle" fontWeight="bold" fontFamily="'Space Mono', monospace">{z.label}</text>
            </g>
          ))}
          {/* tick labels */}
          {[
            [50, '9:30'], [175, '10:00'], [240, '10:15'],
            [460, '11:00'], [680, '12:00'], [870, '14:00'],
            [960, '15:00'], [1050, '16:00']
          ].map(([x, lbl], i) => (
            <g key={i}>
              <line x1={x} x2={x} y1={88} y2={96} stroke="#888" strokeWidth={1} />
              <text x={x} y={110} fill="#888" fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">{lbl}</text>
            </g>
          ))}
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {zones.map((z, i) => (
          <div key={i} className={`card-tight border ${colors[z.color]} ${z.highlight ? 'bg-green/5' : ''}`}>
            <div className="font-mono text-xs text-muted mb-1">{z.from} – {z.to} ET</div>
            <div className="font-display font-bold mb-2">{z.label}</div>
            <p className="text-sm text-text/80 leading-relaxed">{z.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 card border-green/40 bg-green/[0.04]">
        <p className="text-green font-display font-bold leading-relaxed">
          Your 10:15-12:00 window is ideal. Morning highs get tested in this exact window.
          The opening drive provides the first peak; the second-wave rally provides the second peak.
        </p>
      </div>
    </SectionShell>
  );
}
function Section13Psychology() {
  return (
    <SectionShell n={13} title="Why the Pattern Forms (Psychology in 4 Sentences)">
      <div className="space-y-3 text-text/90 leading-relaxed">
        <p><span className="text-green font-semibold">1.</span> Buyers push price to a new high but big sellers defend the level. <span className="text-muted">(first peak)</span></p>
        <p><span className="text-red font-semibold">2.</span> Price retreats as profit-taking and shorts pressure it down. <span className="text-muted">(trough — neckline forms here)</span></p>
        <p><span className="text-green font-semibold">3.</span> Buyers regroup, retry the high, the same big sellers defend the same level again. <span className="text-muted">(second peak)</span></p>
        <p><span className="text-amber font-semibold">4.</span> When buyers fail twice and then break the trough, trapped longs and sidelined shorts both sell aggressively — measured move down equal to pattern height. <span className="text-muted">(breakdown)</span></p>
      </div>
    </SectionShell>
  );
}
function Section14Checklist() {
  const items = [
    'Larger trend down or neutral (not strongly up)',
    'Two distinct peaks within 2-3 ticks (or slight test failure)',
    'Peaks 8-25 candles apart',
    'Volume on second peak ≤ first peak',
    'Neckline at lowest CLOSE of trough (not wick)',
    'A candle CLOSED below neckline by ≥1 tick',
    'Candle AFTER break confirmed (red body, lower close, rising volume)',
    'No major news within next 5 minutes',
    'Time of day favorable (avoid 12:00-14:00 ET)',
    'Stop above higher of the two peaks',
    'Target ≥2x risk',
    'One of my two trades for the session'
  ];
  return (
    <SectionShell n={14} title="Scalping Checklist (Print This)">
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

/* ============================================================
   SHARED HELPERS
   ============================================================ */
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
    amber: 'border-amber/40 text-amber',
    blue: 'border-blue/40 text-blue'
  };
  return (
    <div className={`card-tight border ${colors[color]}`}>
      <div className={`font-display font-bold mb-2`}>{title}</div>
      <p className="text-sm text-text/80 leading-relaxed">{body}</p>
    </div>
  );
}

function NumCircle({ x, y, n, color = '#10b981' }) {
  return (
    <g>
      <circle cx={x} cy={y} r={11} fill={color} stroke="#000" strokeWidth={2} />
      <text x={x} y={y + 4.5} fill="#000" fontSize={13} fontWeight="bold"
        fontFamily="'Oxanium', sans-serif" textAnchor="middle">{n}</text>
    </g>
  );
}

function CaptionBlock({ x, y, num, color, title, body }) {
  const words = body.split(' ');
  const lines = [];
  let line = [];
  let lineLen = 0;
  for (const w of words) {
    if (lineLen + w.length + 1 > 50) { lines.push(line.join(' ')); line = [w]; lineLen = w.length; }
    else { line.push(w); lineLen += w.length + 1; }
  }
  if (line.length) lines.push(line.join(' '));
  return (
    <g>
      <NumCircle x={x + 14} y={y + 14} n={num} color={color} />
      <text x={x + 36} y={y + 18} fill={color} fontSize={14} fontWeight="bold" fontFamily="'Oxanium', sans-serif">{title}</text>
      {lines.map((ln, i) => (
        <text key={i} x={x + 36} y={y + 38 + i * 14} fill="#cbd5e1" fontSize={11} fontFamily="'Inter', sans-serif">{ln}</text>
      ))}
    </g>
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

function Footer() {
  return (
    <footer className="mt-16 pt-8 border-t border-border">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-muted text-sm">2-minute scalper's complete double top treatment.</div>
        <Link to="/drill" className="btn btn-primary px-6">Drill this pattern →</Link>
      </div>
    </footer>
  );
}
