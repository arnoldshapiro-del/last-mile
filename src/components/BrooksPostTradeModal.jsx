import React, { useState } from 'react';
import { logBrooksPostTrade } from '../lib/store.js';

const PATTERNS = [
  'Double Bottom',
  'Bull Flag',
  'Double Top',
  'Bear Flag',
  'Inside Bar Breakout',
  'Wedge',
  'H2',
  'L2',
  'Other',
];

const SIGNAL_OPTS = ['Yes — 4/4', 'Compromised on 1 of 4', 'Compromised on 2 of 4', 'Compromised on 3 of 4', 'No clear signal bar'];
const STOP_OPTS   = ['Yes', 'Too tight', 'Too wide'];
const EXIT_OPTS   = ['Yes', 'Took less', 'Held longer'];

// Post-trade Brooks review (Card 3 — modal). Captures the lesson into
// localStorage. Data feeds the daily JSON workflow (Arnie pastes
// his Claude.ai JSON later — these notes are the rough draft).
export default function BrooksPostTradeModal({ open, onClose }) {
  const [pattern, setPattern] = useState('');
  const [signal, setSignal] = useState('');
  const [stop, setStop] = useState('');
  const [exit, setExit] = useState('');
  const [lesson, setLesson] = useState('');
  const [saved, setSaved] = useState(false);

  if (!open) return null;

  const ready = pattern && signal && stop && exit && lesson.trim().length >= 10;

  const reset = () => {
    setPattern(''); setSignal(''); setStop(''); setExit(''); setLesson(''); setSaved(false);
  };
  const close = () => { reset(); onClose?.(); };

  const save = () => {
    logBrooksPostTrade({ pattern, signal, stop, exit, lesson });
    setSaved(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-surface border border-border rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
        <header className="px-5 py-4 border-b border-border flex items-baseline justify-between">
          <div>
            <div className="label">After the trade closed</div>
            <h2 className="h2">Post-Trade Brooks Review</h2>
          </div>
          <button onClick={close} className="text-muted hover:text-text text-xl leading-none" aria-label="Close">×</button>
        </header>

        <div className="p-5 space-y-4">
          <Field label="Did the setup match a named Brooks pattern?">
            <select value={pattern} onChange={e => setPattern(e.target.value)} className="input">
              <option value="">Pick one…</option>
              {PATTERNS.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </Field>

          <Field label="Was the signal bar 4/4 quality?">
            <RadioGroup value={signal} setValue={setSignal} options={SIGNAL_OPTS} />
          </Field>

          <Field label="Was stop placement correct (1 tick beyond signal bar)?">
            <RadioGroup value={stop} setValue={setStop} options={STOP_OPTS} />
          </Field>

          <Field label="Did I exit at the planned profit target?">
            <RadioGroup value={exit} setValue={setExit} options={EXIT_OPTS} />
          </Field>

          <Field label="What's the ONE lesson from this trade?">
            <textarea
              value={lesson}
              onChange={e => setLesson(e.target.value)}
              placeholder="One specific, actionable lesson…"
              rows={3}
              className="input w-full resize-none"
            />
            <div className="text-xs text-muted mt-1">{lesson.trim().length} chars (10 minimum)</div>
          </Field>

          {saved && (
            <div className="p-3 rounded-lg border border-green/40 bg-green/10 text-green text-sm">
              ✓ Saved locally. Will surface in your end-of-day JSON build.
            </div>
          )}
        </div>

        <footer className="px-5 py-4 border-t border-border flex gap-2">
          {!saved ? (
            <>
              <button onClick={save} disabled={!ready} className="btn btn-primary flex-1 disabled:opacity-40">
                Save review
              </button>
              <button onClick={close} className="btn btn-ghost px-4">
                Skip
              </button>
            </>
          ) : (
            <button onClick={close} className="btn btn-primary w-full">
              Close
            </button>
          )}
        </footer>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <div className="label mb-2">{label}</div>
      {children}
    </div>
  );
}

function RadioGroup({ value, setValue, options }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(opt => {
        const on = value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => setValue(opt)}
            className={`px-3 py-1.5 rounded-lg text-xs font-display font-medium border transition-colors ${
              on
                ? 'bg-green/15 text-green border-green/40'
                : 'bg-bg text-text/80 border-border hover:border-text/30'
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
