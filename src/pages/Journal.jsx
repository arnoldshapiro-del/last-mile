import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveJournalEntry, getJournalEntries, isJournalDoneToday, bumpStreakIfPerfect, todayKey } from '../lib/store.js';
import { sounds } from '../lib/audio.js';

const SETUP_OPTIONS = [
  { id: 'bearFlag', label: 'Bear Flag', allowed: true },
  { id: 'doubleTop', label: 'Double Top → Reversal', allowed: true },
  { id: 'other', label: 'Other (rule violation)', allowed: false }
];

export default function Journal() {
  const nav = useNavigate();
  const [showOnboard, setShowOnboard] = useState(false);
  const [setupTypes, setSetupTypes] = useState([]);
  const [confirmEntry, setConfirmEntry] = useState(null);
  const [stopAtTarget, setStopAtTarget] = useState(null);
  const [stopBefore12, setStopBefore12] = useState(null);
  const [lesson, setLesson] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem('lastmile:journal:onboarded')) {
      setShowOnboard(true);
    }
    if (isJournalDoneToday()) {
      const todays = getJournalEntries().find(e => e.date === todayKey());
      if (todays) {
        setSetupTypes(todays.setupTypes || []);
        setConfirmEntry(todays.confirmEntry);
        setStopAtTarget(todays.stopAtTarget);
        setStopBefore12(todays.stopBefore12);
        setLesson(todays.lesson || '');
      }
    }
  }, []);

  const dismissOnboard = () => {
    localStorage.setItem('lastmile:journal:onboarded', '1');
    setShowOnboard(false);
  };

  const toggleSetup = (id) => {
    setSetupTypes(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const canSubmit =
    setupTypes.length > 0 &&
    confirmEntry !== null &&
    stopAtTarget !== null &&
    stopBefore12 !== null &&
    lesson.trim().length > 0;

  const submit = () => {
    const onlyAllowed = setupTypes.every(id => SETUP_OPTIONS.find(o => o.id === id)?.allowed);
    let s = 0;
    if (onlyAllowed) s += 25;
    if (confirmEntry === true) s += 25;
    if (stopAtTarget === true || stopAtTarget === 'na') s += 25;
    if (stopBefore12 === true) s += 25;
    saveJournalEntry({
      setupTypes,
      confirmEntry,
      stopAtTarget,
      stopBefore12,
      lesson: lesson.trim().slice(0, 200),
      complianceScore: s
    });
    bumpStreakIfPerfect(s);
    setScore(s);
    setSubmitted(true);
    sounds.tick();
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-5 md:px-8 py-10 animate-fadeIn">
        <div className="card text-center">
          <div className="text-6xl mb-4">{score >= 100 ? '🎯' : score >= 75 ? '✓' : '⚠️'}</div>
          <h1 className="h2 mb-3">Saved.</h1>
          <p className="text-text/80 mb-6">
            Compliance score today: <span className={`num text-2xl ${score >= 100 ? 'text-green' : score >= 75 ? 'text-amber' : 'text-red'}`}>{score}%</span>
          </p>
          <p className="text-sm text-muted mb-6">
            {score >= 100 && 'Streak extended. Tomorrow\'s pre-session ritual will be available.'}
            {score >= 75 && score < 100 && 'Better than nothing. Streak resets — but you can rebuild starting tomorrow.'}
            {score < 75 && 'Streak reset. The data shows what the data shows. Tomorrow is a new day.'}
          </p>
          <button onClick={() => nav('/')} className="btn btn-primary w-full">Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-5 md:px-8 py-6 md:py-10 animate-fadeIn">
      <div className="label mb-1">End-of-Session</div>
      <h1 className="h1 mb-1">Five Questions</h1>
      <p className="text-text/70 mb-8">~60 seconds. Required to start tomorrow's session.</p>

      {showOnboard && (
        <div className="card-tight bg-blue/5 border-blue/30 mb-6">
          <p className="text-sm leading-relaxed mb-3">
            <strong>You're a psychiatrist.</strong> You know: what gets measured gets managed. But measuring everything is paralysis. Measuring the RIGHT five things creates change.
          </p>
          <p className="text-sm leading-relaxed mb-3">
            Track price levels and contract counts? You won't do it. Track DISCIPLINE? You will. After 30 sessions, this journal will show you patterns no spreadsheet ever could.
          </p>
          <p className="text-sm leading-relaxed mb-4 font-semibold">
            Five questions. Sixty seconds. Every session. Period.
          </p>
          <button onClick={dismissOnboard} className="btn btn-ghost text-sm py-2">Got it</button>
        </div>
      )}

      <div className="space-y-6">
        <Question num={1} label="Setup type traded today">
          <div className="space-y-2">
            {SETUP_OPTIONS.map(opt => {
              const active = setupTypes.includes(opt.id);
              return (
                <label key={opt.id} className={`flex items-center gap-3 cursor-pointer card-tight transition-colors ${
                  active && !opt.allowed ? 'border-red bg-red/5' :
                  active ? 'border-green bg-green/5' :
                  'hover:border-blue/40'
                }`}>
                  <input type="checkbox" checked={active} onChange={() => toggleSetup(opt.id)} />
                  <span className="font-medium">{opt.label}</span>
                  {active && !opt.allowed && <span className="pill-red ml-auto">Rule violation</span>}
                </label>
              );
            })}
          </div>
        </Question>

        <Question num={2} label="Did I wait for body-close confirmation on every entry?">
          <YesNo value={confirmEntry} setValue={setConfirmEntry} />
        </Question>

        <Question num={3} label='Did I stop at my profit target without "one more trade"?'>
          <YesNo value={stopAtTarget} setValue={setStopAtTarget} extra="na" extraLabel="Didn't hit target today" />
        </Question>

        <Question num={4} label="Did I stop trading by 12:00 PM?">
          <YesNo value={stopBefore12} setValue={setStopBefore12} />
        </Question>

        <Question num={5} label="One sentence: what did I learn today?">
          <textarea
            value={lesson}
            onChange={e => setLesson(e.target.value.slice(0, 200))}
            rows={3}
            className="input font-body text-base"
            placeholder="The body close kept me out of one fakeout..."
          />
          <div className="text-xs text-muted mt-1 text-right">{lesson.length}/200</div>
        </Question>

        <button disabled={!canSubmit} onClick={submit} className="btn btn-primary w-full text-lg py-4 mt-4">
          Save and end day
        </button>
      </div>
    </div>
  );
}

function Question({ num, label, children }) {
  return (
    <div>
      <div className="flex items-baseline gap-3 mb-3">
        <div className="num text-green text-sm">Q{num}</div>
        <div className="font-display font-medium">{label}</div>
      </div>
      {children}
    </div>
  );
}

function YesNo({ value, setValue, extra, extraLabel }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <button onClick={() => setValue(true)}
        className={`card-tight text-center font-display font-medium transition-colors ${
          value === true ? 'border-green bg-green/10 text-green' : 'hover:border-green/30'
        }`}>Yes</button>
      <button onClick={() => setValue(false)}
        className={`card-tight text-center font-display font-medium transition-colors ${
          value === false ? 'border-red bg-red/10 text-red' : 'hover:border-red/30'
        }`}>No</button>
      {extra && (
        <button onClick={() => setValue(extra)}
          className={`col-span-2 card-tight text-center font-display font-medium text-sm transition-colors ${
            value === extra ? 'border-blue bg-blue/10 text-blue' : 'hover:border-blue/30'
          }`}>{extraLabel}</button>
      )}
    </div>
  );
}
