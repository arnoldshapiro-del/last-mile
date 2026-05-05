import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { lockCommitments } from '../lib/store.js';
import { sounds } from '../lib/audio.js';
import { pickThreat } from '../data/threats.js';

export default function PreSession() {
  const nav = useNavigate();
  const [step, setStep] = useState(1);
  const [calmScore, setCalmScore] = useState(7);
  const [profitTarget, setProfitTarget] = useState(300);
  const [lossLimit, setLossLimit] = useState(300);
  const [maxTrades, setMaxTrades] = useState(5);
  const [patterns, setPatterns] = useState({ bearFlag: true, doubleTop: true });
  const [readWaitMs, setReadWaitMs] = useState(5000);
  const [threat] = useState(() => pickThreat());

  // Step 3 read-aloud delay
  useEffect(() => {
    if (step !== 3) return;
    setReadWaitMs(5000);
    const t = setInterval(() => {
      setReadWaitMs(ms => Math.max(0, ms - 100));
    }, 100);
    return () => clearInterval(t);
  }, [step]);

  // Calm gate
  if (step === 1 && calmScore < 7) {
    // remain on step 1, but show stop screen below
  }

  const togglePattern = (key) => setPatterns(p => ({ ...p, [key]: !p[key] }));

  const lockAndContinue = () => {
    lockCommitments({
      profitTarget, lossLimit, maxTrades,
      patterns: Object.entries(patterns).filter(([, v]) => v).map(([k]) => k),
      calmScore
    });
    setStep(3);
  };

  const finish = () => {
    sounds.ritualComplete();
    nav('/protocol/in-session');
  };

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-xl">
        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3, 4].map(n => (
            <div key={n} className={`h-1.5 rounded-full transition-all ${
              n === step ? 'w-10 bg-green' :
              n < step ? 'w-6 bg-green/40' : 'w-6 bg-surface2'
            }`} />
          ))}
        </div>

        {step === 1 && (
          <Step1Calm calmScore={calmScore} setCalmScore={setCalmScore} onContinue={() => setStep(2)} onAbort={() => nav('/')} />
        )}
        {step === 2 && (
          <Step2Lock
            profitTarget={profitTarget} setProfitTarget={setProfitTarget}
            lossLimit={lossLimit} setLossLimit={setLossLimit}
            maxTrades={maxTrades} setMaxTrades={setMaxTrades}
            patterns={patterns} togglePattern={togglePattern}
            onLock={lockAndContinue}
          />
        )}
        {step === 3 && (
          <Step3Read readWaitMs={readWaitMs} onContinue={() => setStep(4)} />
        )}
        {step === 4 && (
          <Step4Threat threat={threat} onContinue={finish} />
        )}
      </div>
    </div>
  );
}

function Step1Calm({ calmScore, setCalmScore, onContinue, onAbort }) {
  const blocked = calmScore < 7;
  return (
    <div className="card animate-slideUp">
      <div className="label mb-2">Step 1 of 4</div>
      <h2 className="h2 mb-2">Calm State Check</h2>
      <p className="text-text/80 mb-8">
        How calm do you feel right now? Not excited. Not anxious. Peaceful.
      </p>

      <div className="mb-6">
        <div className="flex items-end justify-between mb-3">
          <span className="text-xs text-muted">1 — revved up</span>
          <span className={`num text-5xl ${blocked ? 'text-red' : 'text-green'}`}>{calmScore}</span>
          <span className="text-xs text-muted">10 — peaceful</span>
        </div>
        <input type="range" min="1" max="10" step="1" value={calmScore} onChange={e => setCalmScore(parseInt(e.target.value))} />
      </div>

      {blocked ? (
        <div className="card-tight bg-amber/10 border-amber/40 mb-6">
          <div className="text-amber font-display font-semibold mb-2">⚠️ Calm State Principle violated</div>
          <p className="text-sm leading-relaxed mb-4">
            Below 7 means your nervous system is not regulated for the work ahead. Five and a half years of evidence: trading from this state ends in red.
          </p>
          <p className="text-sm leading-relaxed font-semibold">Do not trade today. Try again tomorrow.</p>
        </div>
      ) : (
        <p className="text-sm text-muted mb-6">7 or higher means you are clear-headed enough to proceed. Below 7 closes the day.</p>
      )}

      {blocked ? (
        <button onClick={onAbort} className="btn btn-amber w-full">I will not trade today</button>
      ) : (
        <button onClick={onContinue} className="btn btn-primary w-full">Continue</button>
      )}
    </div>
  );
}

function Step2Lock({ profitTarget, setProfitTarget, lossLimit, setLossLimit, maxTrades, setMaxTrades, patterns, togglePattern, onLock }) {
  const canLock = profitTarget > 0 && lossLimit > 0 && maxTrades > 0 && (patterns.bearFlag || patterns.doubleTop);
  return (
    <div className="card animate-slideUp">
      <div className="label mb-2">Step 2 of 4</div>
      <h2 className="h2 mb-2">Lock Today's Commitments</h2>
      <p className="text-text/80 mb-6">
        Once locked, these cannot be edited until tomorrow.
      </p>

      <div className="space-y-5 mb-6">
        <NumField label="Profit target ($)" value={profitTarget} setValue={setProfitTarget} accent="green" />
        <NumField label="Loss limit ($)" value={lossLimit} setValue={setLossLimit} accent="red" />
        <NumField label="Max trades" value={maxTrades} setValue={setMaxTrades} accent="blue" />

        <div>
          <div className="label mb-2">Approved patterns</div>
          <div className="space-y-2">
            <label className="flex items-center gap-3 cursor-pointer card-tight hover:border-green/40">
              <input type="checkbox" checked={patterns.bearFlag} onChange={() => togglePattern('bearFlag')} />
              <span className="font-display font-medium">Bear Flag</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer card-tight hover:border-green/40">
              <input type="checkbox" checked={patterns.doubleTop} onChange={() => togglePattern('doubleTop')} />
              <span className="font-display font-medium">Double Top → Reversal</span>
            </label>
          </div>
        </div>
      </div>

      <button disabled={!canLock} onClick={onLock} className="btn btn-primary w-full">
        🔒 LOCK COMMITMENTS
      </button>
    </div>
  );
}

function NumField({ label, value, setValue, accent }) {
  const colors = { green: 'text-green', red: 'text-red', blue: 'text-blue' };
  return (
    <div>
      <div className="label mb-2">{label}</div>
      <input type="number" min="0" value={value}
        onChange={e => setValue(parseInt(e.target.value || 0))}
        className={`input ${colors[accent] || ''}`} />
    </div>
  );
}

function Step3Read({ readWaitMs, onContinue }) {
  const ready = readWaitMs <= 0;
  return (
    <div className="card animate-slideUp text-center">
      <div className="label mb-2">Step 3 of 4</div>
      <h2 className="h2 mb-8">Read this aloud</h2>

      <blockquote className="text-xl md:text-2xl leading-relaxed font-display font-medium mb-10 px-2">
        “I will stop at my profit target. The casino is always open. The casino wants me to keep playing. I am a professional. Professionals cash out and walk away.”
      </blockquote>

      <button disabled={!ready} onClick={onContinue} className="btn btn-primary w-full">
        {ready ? 'I have read this aloud' : `Wait ${(readWaitMs / 1000).toFixed(1)}s`}
      </button>
    </div>
  );
}

function Step4Threat({ threat, onContinue }) {
  return (
    <div className="card animate-slideUp">
      <div className="label mb-2">Step 4 of 4</div>
      <h2 className="h2 mb-6">Today's threat</h2>

      <div className="card-tight bg-red/5 border-red/30 mb-8">
        <p className="text-base md:text-lg leading-relaxed">{threat}</p>
      </div>

      <button onClick={onContinue} className="btn btn-primary w-full">
        I understand. Begin session.
      </button>
    </div>
  );
}
