import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc, getDocs, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase.js';
import { dailyLessons as seedLessons } from '../../data/mastery/dailyLessons.js';

const ADMIN_CODE = 'arnie2026';
const SESSION_KEY = 'mastery_admin_authed';

function validateLesson(raw) {
  const errors = [];
  if (!raw || typeof raw !== 'object') return { ok: false, errors: ['JSON must be an object.'] };

  if (!raw.date || typeof raw.date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(raw.date)) {
    errors.push('Field "date" is required and must be YYYY-MM-DD format.');
  }
  if (!raw.title || typeof raw.title !== 'string' || raw.title.length < 3) {
    errors.push('Field "title" is required and must be at least 3 characters.');
  }
  if (!raw.sessionSummary || typeof raw.sessionSummary !== 'string' || raw.sessionSummary.length < 10) {
    errors.push('Field "sessionSummary" is required and must be at least 10 characters.');
  }
  if (!Array.isArray(raw.teachingUnits) || raw.teachingUnits.length < 1) {
    errors.push('Field "teachingUnits" is required and must have at least 1 entry.');
  }
  if (!Array.isArray(raw.keyRules)) errors.push('Field "keyRules" must be an array (can be empty).');
  if (!Array.isArray(raw.principlesReinforced)) errors.push('Field "principlesReinforced" must be an array of numbers.');
  if (typeof raw.whatIllDoDifferently !== 'string') errors.push('Field "whatIllDoDifferently" must be a string.');

  if (errors.length > 0) return { ok: false, errors };

  const normalized = {
    date: raw.date,
    title: raw.title,
    sessionSummary: raw.sessionSummary,
    teachingUnits: raw.teachingUnits,
    chartReferences: raw.chartReferences || raw.charts || [],
    keyRules: raw.keyRules || [],
    principlesReinforced: raw.principlesReinforced || [],
    whatIllDoDifferently: raw.whatIllDoDifferently || '',
    savedAt: serverTimestamp(),
  };
  return { ok: true, errors: [], normalized };
}

export default function AddLessonPage() {
  const navigate = useNavigate();
  const [authed, setAuthed] = useState(false);
  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState('');
  const [json, setJson] = useState('');
  const [status, setStatus] = useState({ kind: 'idle', message: '' });
  const [seedStatus, setSeedStatus] = useState({ kind: 'idle', message: '' });

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === '1') setAuthed(true);
  }, []);

  const handleAuth = (e) => {
    e.preventDefault();
    if (code.trim() === ADMIN_CODE) {
      sessionStorage.setItem(SESSION_KEY, '1');
      setAuthed(true);
      setCodeError('');
    } else {
      setCodeError('Incorrect admin code.');
    }
  };

  const handleSave = async () => {
    setStatus({ kind: 'saving', message: 'Validating JSON...' });
    let parsed;
    try {
      parsed = JSON.parse(json);
    } catch (e) {
      setStatus({ kind: 'error', message: 'JSON parse error: ' + e.message });
      return;
    }
    const v = validateLesson(parsed);
    if (!v.ok) {
      setStatus({ kind: 'error', message: 'Validation failed:\n  ' + v.errors.join('\n  ') });
      return;
    }
    const date = v.normalized.date;
    setStatus({ kind: 'saving', message: 'Saving to Firestore (id=' + date + ')...' });
    try {
      await setDoc(doc(db, 'dailyLessons', date), v.normalized);
      setStatus({ kind: 'success', message: 'Lesson saved! Redirecting to view it...' });
      setTimeout(() => navigate('/mastery/daily/' + date), 1500);
    } catch (e) {
      setStatus({ kind: 'error', message: 'Firestore write failed: ' + e.message });
    }
  };

  const handleSeed = async () => {
    setSeedStatus({ kind: 'busy', message: 'Checking Firestore...' });
    try {
      const snap = await getDocs(collection(db, 'dailyLessons'));
      const existingCount = snap.size;
      const writes = seedLessons.map((l) =>
        setDoc(doc(db, 'dailyLessons', l.date), { ...l, savedAt: serverTimestamp() })
      );
      await Promise.all(writes);
      setSeedStatus({
        kind: 'done',
        message: 'Seeded ' + seedLessons.length + ' lessons. (Existing docs before: ' + existingCount + '.)',
      });
    } catch (e) {
      setSeedStatus({ kind: 'error', message: 'Seed failed: ' + e.message });
    }
  };

  if (!authed) {
    return (
      <div className="max-w-md mx-auto">
        <section className="card border" style={{ borderColor: 'rgba(0, 217, 160, 0.30)' }}>
          <div className="flex items-center gap-3 mb-3">
            <span style={{ color: '#00D9A0', fontSize: '1.25rem' }}>🔒</span>
            <h2 className="font-display font-semibold text-xl m-0">Admin — Add Lesson</h2>
          </div>
          <p className="text-sm leading-relaxed mb-4 m-0 text-text/80">
            This page writes to the shared Firestore <code className="num text-amber">dailyLessons</code> collection.
            Both apps read from it in real-time. Enter the admin code to continue.
          </p>
          <form onSubmit={handleAuth} className="space-y-3">
            <input
              type="password"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Admin code"
              autoFocus
              className="input"
            />
            <button type="submit" className="btn btn-primary w-full">Unlock</button>
            {codeError && <div className="text-sm text-red">{codeError}</div>}
          </form>
        </section>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-5">
      <section
        className="card border"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 217, 160, 0.10) 0%, rgba(31, 31, 31, 0.40) 100%)',
          borderColor: 'rgba(0, 217, 160, 0.30)',
        }}
      >
        <h2 className="font-display font-semibold text-xl m-0 mb-2" style={{ color: '#00D9A0' }}>
          Add Today's Lesson
        </h2>
        <p className="text-sm leading-relaxed m-0 text-text/80">
          Paste the JSON below and click Save. The lesson writes to Firestore as a document with id =
          <code className="num text-amber mx-1">YYYY-MM-DD</code>
          and appears in BOTH apps within a second.
        </p>
      </section>

      <section className="card">
        <label htmlFor="lesson-json" className="label block mb-3">
          Daily Lesson JSON
        </label>
        <textarea
          id="lesson-json"
          value={json}
          onChange={(e) => setJson(e.target.value)}
          placeholder='{"date":"2026-05-08","title":"...","sessionSummary":"...","teachingUnits":[...]}'
          rows={20}
          spellCheck={false}
          className="w-full px-4 py-3 rounded-xl text-sm"
          style={{
            background: '#0a0a0a',
            border: '1px solid #262626',
            color: '#e8e8e8',
            fontFamily: '"Space Mono", ui-monospace, monospace',
            resize: 'vertical',
            minHeight: '320px',
          }}
        />
        <div className="flex items-center justify-between gap-3 mt-3 flex-wrap">
          <div className="text-xs num text-muted">
            {json.length.toLocaleString()} characters
          </div>
          <button
            type="button"
            onClick={handleSave}
            disabled={status.kind === 'saving' || json.trim().length === 0}
            className="btn btn-primary"
          >
            {status.kind === 'saving' ? 'Saving...' : 'Save Lesson'}
          </button>
        </div>
      </section>

      {status.kind !== 'idle' && (
        <section
          className="rounded-2xl p-5 border"
          style={{
            background:
              status.kind === 'success' ? 'rgba(0, 217, 160, 0.10)' :
              status.kind === 'error' ? 'rgba(255, 61, 90, 0.10)' :
              'rgba(74, 158, 255, 0.10)',
            borderColor:
              status.kind === 'success' ? 'rgba(0, 217, 160, 0.30)' :
              status.kind === 'error' ? 'rgba(255, 61, 90, 0.30)' :
              'rgba(74, 158, 255, 0.30)',
          }}
        >
          <pre
            className="text-sm whitespace-pre-wrap m-0"
            style={{
              color:
                status.kind === 'success' ? '#00D9A0' :
                status.kind === 'error' ? '#FF3D5A' :
                '#4A9EFF',
              fontFamily: 'Inter, system-ui, sans-serif',
            }}
          >
            {status.kind === 'success' ? '✓ ' : status.kind === 'error' ? '✗ ' : '… '}
            {status.message}
          </pre>
        </section>
      )}

      <details className="card-tight">
        <summary
          className="cursor-pointer text-sm flex items-center gap-2 text-muted"
          style={{ fontFamily: 'Oxanium, system-ui, sans-serif' }}
        >
          ⚙ Seed default lessons (one-time bootstrap)
        </summary>
        <div className="pt-3 space-y-3">
          <p className="text-xs leading-relaxed m-0 text-muted">
            Writes the {seedLessons.length} baseline lessons (Foundation Day + The Day Five Years Started to Turn) to Firestore.
            Safe to re-run — overwrites existing docs with the same dates.
          </p>
          <button
            type="button"
            onClick={handleSeed}
            disabled={seedStatus.kind === 'busy'}
            className="btn btn-ghost"
          >
            {seedStatus.kind === 'busy' ? 'Seeding...' : 'Run Seed'}
          </button>
          {seedStatus.kind !== 'idle' && (
            <div
              className="text-xs"
              style={{
                color:
                  seedStatus.kind === 'done' ? '#00D9A0' :
                  seedStatus.kind === 'error' ? '#FF3D5A' :
                  '#888888',
              }}
            >
              {seedStatus.message}
            </div>
          )}
        </div>
      </details>
    </div>
  );
}
