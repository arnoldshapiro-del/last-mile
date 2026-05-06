import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addEntriesBatch, fetchAllEntries, findDuplicates, normalizeImported, todayISO } from '../../lib/journal.js';

const SAMPLE_JSON = `[
  {
    "entry_date": "${todayISO()}",
    "title": "Where to Measure Flagpole Length From",
    "context": "Bear flag on RTY 2-min after MBR",
    "question": "Where exactly do you measure from?",
    "answer": "The flagpole length is projected from the breakdown point of the flag, NOT from the bottom of the flagpole...",
    "key_takeaways": "1. Measure flagpole top-to-bottom\\n2. Find breakdown point\\n3. Subtract flagpole length from breakdown",
    "tags": ["bear-flag", "measured-move", "targets"],
    "pattern_type": "bear-flag",
    "instrument": "RTY",
    "time_of_day": "afternoon",
    "entry_type": "asked"
  }
]`;

export default function AddEntry() {
  const [text, setText] = useState('');
  const [parseError, setParseError] = useState('');
  const [parsed, setParsed] = useState(null);
  const [existing, setExisting] = useState([]);
  const [saving, setSaving] = useState(false);
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    fetchAllEntries().then(setExisting).catch(() => setExisting([]));
  }, []);

  const handleParse = () => {
    setParseError('');
    setSavedCount(0);
    try {
      const data = JSON.parse(text);
      if (!Array.isArray(data)) {
        setParseError('Top-level value must be an array of entries.');
        return;
      }
      const normalized = [];
      for (let i = 0; i < data.length; i++) {
        const result = normalizeImported(data[i]);
        if (result && 'error' in result) {
          setParseError(`Entry #${i + 1}: ${result.error}`);
          return;
        }
        normalized.push(result);
      }
      setParsed(normalized);
    } catch (e) {
      setParseError('Invalid JSON: ' + (e?.message || 'parse error'));
    }
  };

  const handleEditField = (index, field, value) => {
    if (!parsed) return;
    const next = [...parsed];
    if (field === 'tags') {
      next[index] = { ...next[index], tags: value.split(',').map(t => t.trim()).filter(Boolean) };
    } else {
      next[index] = { ...next[index], [field]: value || (field === 'pattern_type' || field === 'instrument' || field === 'time_of_day' || field === 'uni_bootcamp_link' ? null : value) };
    }
    setParsed(next);
  };

  const handleSave = async () => {
    if (!parsed) return;
    setSaving(true);
    try {
      const n = await addEntriesBatch(parsed);
      setSavedCount(n);
      setParsed(null);
      setText('');
      const fresh = await fetchAllEntries();
      setExisting(fresh);
    } catch (e) {
      setParseError('Save failed: ' + (e?.message || 'Unknown error'));
    } finally {
      setSaving(false);
    }
  };

  const dupes = parsed
    ? findDuplicates(parsed.map(p => ({ title: p.title, entry_date: p.entry_date })), existing)
    : new Set();

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto' }}>
      <h1 style={{ color: '#e2e8f0', fontFamily: 'Oxanium, sans-serif', fontSize: 24, marginBottom: 6, fontWeight: 700 }}>
        Add Entry — Smart Paste
      </h1>
      <p style={{ color: '#94a3b8', fontSize: 13, marginBottom: 16 }}>
        Paste a JSON array from Claude. Any number of entries (1 to 100). Required fields: entry_date (YYYY-MM-DD), title, question, answer.
      </p>

      {savedCount > 0 && (
        <div className="qa-card" style={{ background: 'rgba(0, 217, 160, 0.10)', borderColor: 'rgba(0, 217, 160, 0.4)', marginBottom: 16, color: '#00D9A0' }}>
          ✅ {savedCount} {savedCount === 1 ? 'entry' : 'entries'} saved.{' '}
          <Link to="/qa" style={{ color: '#4A9EFF', fontWeight: 600 }}>View them in Today's Lessons →</Link>
        </div>
      )}

      <textarea
        className="qa-textarea"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder={SAMPLE_JSON}
        style={{ minHeight: 240 }}
      />

      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <button className="qa-btn" onClick={handleParse} disabled={!text.trim()}>Parse & Preview</button>
        <button className="qa-btn qa-btn-ghost" onClick={() => { setText(SAMPLE_JSON); setParsed(null); setParseError(''); }}>
          Load example
        </button>
        <button className="qa-btn qa-btn-ghost" onClick={() => { setText(''); setParsed(null); setParseError(''); }}>
          Clear
        </button>
      </div>

      {parseError && (
        <div style={{ marginTop: 12, padding: 12, borderRadius: 8, background: 'rgba(255, 61, 90, 0.12)', color: '#FF3D5A', border: '1px solid rgba(255, 61, 90, 0.3)' }}>
          {parseError}
        </div>
      )}

      {parsed && parsed.length > 0 && (
        <div style={{ marginTop: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <h2 style={{ fontFamily: 'Oxanium, sans-serif', fontSize: 18, margin: 0, fontWeight: 700 }}>
              Preview · {parsed.length} {parsed.length === 1 ? 'entry' : 'entries'}
              {dupes.size > 0 && <span style={{ color: '#FFB44A', fontSize: 13, marginLeft: 8 }}>· {dupes.size} possible duplicate{dupes.size > 1 ? 's' : ''}</span>}
            </h2>
            <button className="qa-btn" onClick={handleSave} disabled={saving}>
              {saving ? 'Saving...' : `Save All (${parsed.length})`}
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {parsed.map((p, i) => (
              <div key={i} className="qa-card" style={dupes.has(i) ? { borderColor: '#FFB44A', borderWidth: 2 } : {}}>
                {dupes.has(i) && (
                  <div style={{ fontSize: 11, color: '#FFB44A', marginBottom: 8, fontWeight: 700 }}>
                    ⚠ Duplicate of an existing entry (same title + date)
                  </div>
                )}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  <Field label="Title">
                    <input className="qa-input" value={p.title} onChange={e => handleEditField(i, 'title', e.target.value)} />
                  </Field>
                  <Field label="Date">
                    <input className="qa-input" value={p.entry_date} onChange={e => handleEditField(i, 'entry_date', e.target.value)} />
                  </Field>
                </div>
                <Field label="Context">
                  <input className="qa-input" value={p.context} onChange={e => handleEditField(i, 'context', e.target.value)} />
                </Field>
                <Field label="Question">
                  <textarea className="qa-textarea" style={{ minHeight: 60 }} value={p.question} onChange={e => handleEditField(i, 'question', e.target.value)} />
                </Field>
                <Field label="Answer">
                  <textarea className="qa-textarea" style={{ minHeight: 100 }} value={p.answer} onChange={e => handleEditField(i, 'answer', e.target.value)} />
                </Field>
                <Field label="Key Takeaways">
                  <textarea className="qa-textarea" style={{ minHeight: 60 }} value={p.key_takeaways} onChange={e => handleEditField(i, 'key_takeaways', e.target.value)} />
                </Field>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                  <Field label="Tags (comma-separated)">
                    <input className="qa-input" value={(p.tags || []).join(', ')} onChange={e => handleEditField(i, 'tags', e.target.value)} />
                  </Field>
                  <Field label="Pattern type">
                    <input className="qa-input" value={p.pattern_type || ''} onChange={e => handleEditField(i, 'pattern_type', e.target.value)} />
                  </Field>
                  <Field label="Instrument">
                    <input className="qa-input" value={p.instrument || ''} onChange={e => handleEditField(i, 'instrument', e.target.value)} />
                  </Field>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                  <Field label="Time of day">
                    <input className="qa-input" value={p.time_of_day || ''} onChange={e => handleEditField(i, 'time_of_day', e.target.value)} />
                  </Field>
                  <Field label="Entry type">
                    <select className="qa-input" value={p.entry_type} onChange={e => handleEditField(i, 'entry_type', e.target.value)}>
                      <option>asked</option>
                      <option>observed</option>
                      <option>mistake</option>
                      <option>insight</option>
                    </select>
                  </Field>
                  <Field label="Uni link">
                    <input className="qa-input" value={p.uni_bootcamp_link || ''} onChange={e => handleEditField(i, 'uni_bootcamp_link', e.target.value)} />
                  </Field>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div style={{ marginTop: 8 }}>
      <label style={{ display: 'block', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#64748b', fontWeight: 700, marginBottom: 4 }}>
        {label}
      </label>
      {children}
    </div>
  );
}
