import React, { useState } from 'react';

const ENDPOINT = '/.netlify/functions/save-lessons';

// In-app replacement for the desktop "Save Today's Lesson.bat" — reads
// clipboard JSON, POSTs to the Netlify Function which atomically commits
// every lesson to the unis-ta-bootcamp-day1 repo's public/lessons/ tree
// in ONE GitHub commit. Mirrors the SaveLessonsButton in the Bootcamp
// Brooks Hub.
export default function SaveLessonsButton({ onSaved }) {
  const [status, setStatus] = useState('idle'); // idle | reading | saving | success | error
  const [message, setMessage] = useState('');
  const [result, setResult] = useState(null);

  const handleClick = async () => {
    setStatus('reading');
    setMessage('');
    setResult(null);

    let text = '';
    try {
      text = await navigator.clipboard.readText();
    } catch (e) {
      setStatus('error');
      setMessage('Could not read clipboard. The browser may have blocked access — click again and approve when prompted.');
      return;
    }
    if (!text || !text.trim()) {
      setStatus('error');
      setMessage('Clipboard is empty. Copy the JSON block from Claude first.');
      return;
    }

    let parsed;
    try {
      parsed = JSON.parse(text.trim());
    } catch (e) {
      const sample = text.trim().slice(0, 80);
      setStatus('error');
      setMessage(`Clipboard does not contain valid lesson JSON. Did you copy the JSON block from Claude? First 80 chars: "${sample}…"`);
      return;
    }

    setStatus('saving');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lessons: parsed }),
      });
      const json = await res.json();
      if (!res.ok || json.ok !== true) {
        setStatus('error');
        setMessage(typeof json.error === 'string' ? json.error : `HTTP ${res.status}`);
        return;
      }
      setResult(json);
      setStatus('success');
      setMessage(`Saved ${json.saved} lesson${json.saved === 1 ? '' : 's'} via GitHub commit. Netlify rebuild starts in ~30 s.`);
      if (onSaved) onSaved();
    } catch (e) {
      setStatus('error');
      setMessage(`Network error: ${e.message || String(e)}`);
    }
  };

  const isBusy = status === 'reading' || status === 'saving';

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={isBusy}
        className={[
          'inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold border transition-colors',
          isBusy
            ? 'bg-slate-800 text-slate-400 border-slate-700 cursor-wait'
            : 'bg-slate-900 text-teal-300 border-teal-700/40 hover:bg-teal-900/20 hover:border-teal-500',
        ].join(' ')}
      >
        <span aria-hidden>{isBusy ? '⏳' : '📥'}</span>
        {status === 'reading'
          ? 'Reading clipboard…'
          : status === 'saving'
            ? 'Saving to GitHub…'
            : "SAVE TODAY'S LESSONS FROM CLIPBOARD"}
      </button>

      {status === 'success' && result && (
        <div className="mt-3 rounded-lg border border-green-500/40 bg-green-500/5 p-3 text-sm">
          <div className="font-semibold text-green-400">
            ✅ Saved {result.saved} lesson{result.saved === 1 ? '' : 's'}.
          </div>
          <div className="text-slate-300 mt-1">
            {Object.entries(result.breakdown || {})
              .sort((a, b) => a[0].localeCompare(b[0]))
              .map(([k, v]) => `${v} ${k}`)
              .join(' · ')}
          </div>
          <div className="text-xs text-slate-400 mt-1">{message}</div>
          {result.commit_url && (
            <a
              href={result.commit_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-xs underline text-teal-300"
            >
              View commit on GitHub →
            </a>
          )}
          {Array.isArray(result.warnings) && result.warnings.length > 0 && (
            <ul className="mt-2 text-xs text-amber-400 list-disc pl-5 m-0">
              {result.warnings.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {status === 'error' && (
        <div className="mt-3 rounded-lg border border-red-500/40 bg-red-500/5 p-3 text-sm">
          <div className="font-semibold text-red-400">Save failed</div>
          <div className="text-slate-300 mt-1">{message}</div>
        </div>
      )}
    </div>
  );
}
