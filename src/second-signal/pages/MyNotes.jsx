import React, { useState, useEffect, useRef } from 'react';
import { loadString, saveString, markLessonComplete, NOTE_KEYS } from '../storage.js';

const SECTIONS = [
  { key: 'double-bottom', title: 'Double Bottom H2 notes',  placeholder: 'What jumps out at you about double bottoms? When have they worked? When have they failed?' },
  { key: 'double-top',    title: 'Double Top L2 notes',     placeholder: 'Mirror image of double bottom. What\'s tricking your eye? What pattern of failure shows up?' },
  { key: 'bull-flag',     title: 'Bull Flag H2 notes',      placeholder: 'How do you tell a real flag from a sideways drift? When does H2 work inside a flag vs not?' },
  { key: 'bear-flag',     title: 'Bear Flag L2 notes',      placeholder: 'Bounces inside downtrends. What\'s your tell that the bounce is actually done?' },
  { key: 'general',       title: 'General observations',    placeholder: 'Anything that doesn\'t fit one pattern. Emotional notes, market conditions, time-of-day patterns.' },
];

function formatTimestamp(ts) {
  if (!ts) return null;
  const d = new Date(ts);
  return d.toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

function NoteSection({ section }) {
  const storageKey = NOTE_KEYS[section.key];
  const tsKey = `${storageKey}-ts`;
  const [text, setText] = useState(() => loadString(storageKey, ''));
  const [lastSaved, setLastSaved] = useState(() => {
    const raw = loadString(tsKey, '');
    return raw ? Number(raw) : null;
  });
  const [savingFlash, setSavingFlash] = useState(false);
  const flashTimer = useRef(null);

  function commit() {
    saveString(storageKey, text);
    const now = Date.now();
    saveString(tsKey, String(now));
    setLastSaved(now);
    setSavingFlash(true);
    clearTimeout(flashTimer.current);
    flashTimer.current = setTimeout(() => setSavingFlash(false), 1400);
  }

  return (
    <div className="card space-y-3">
      <div className="flex items-baseline justify-between gap-3 flex-wrap">
        <h3 className="section-h3">{section.title}</h3>
        <span className="mono text-xs text-text-muted">
          {savingFlash
            ? <span className="text-bull-light">✓ Saved</span>
            : lastSaved
              ? `Last saved: ${formatTimestamp(lastSaved)}`
              : 'Not saved yet'}
        </span>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={commit}
        placeholder={section.placeholder}
        rows={8}
        className="w-full bg-bg-deep border border-default rounded-lg p-3 text-text-primary font-body text-base leading-relaxed focus:border-accent focus:outline-none resize-y"
        style={{ minHeight: 180 }}
        aria-label={section.title}
      />
      <div className="flex items-center justify-between gap-3">
        <span className="mono text-xs text-text-muted">{text.length} chars</span>
        <button type="button" className="btn-ghost mono text-sm" onClick={commit}>
          Save now
        </button>
      </div>
    </div>
  );
}

export default function MyNotes() {
  useEffect(() => { markLessonComplete('notes'); }, []);

  function downloadAll() {
    const lines = [];
    lines.push("Arnie's Second Signal — My Notes");
    lines.push(`Exported: ${new Date().toLocaleString()}`);
    lines.push('='.repeat(60));
    lines.push('');
    SECTIONS.forEach((s) => {
      lines.push(`## ${s.title}`);
      lines.push('-'.repeat(60));
      const body = loadString(NOTE_KEYS[s.key], '').trim();
      lines.push(body || '(empty)');
      lines.push('');
      lines.push('');
    });
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const stamp = new Date().toISOString().slice(0, 10);
    a.download = `second-signal-notes-${stamp}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return (
    <article className="space-y-6">
      <header className="space-y-3">
        <p className="mono text-xs uppercase tracking-widest text-text-muted">Section 6</p>
        <h1 className="section-h1">My Notes</h1>
        <p className="body-muted">
          Write what you see. Auto-saves when you tap outside the box.
        </p>
      </header>

      <div className="space-y-5">
        {SECTIONS.map((s) => (
          <NoteSection key={s.key} section={s} />
        ))}
      </div>

      <div className="pt-2">
        <button type="button" className="btn-primary" onClick={downloadAll}>
          ⤓ Download all notes as .txt
        </button>
      </div>
    </article>
  );
}
