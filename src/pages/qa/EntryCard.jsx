import React, { useState } from 'react';

export default function EntryCard({ entry, defaultExpanded = false }) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="qa-card" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <button
        onClick={() => setExpanded(v => !v)}
        style={{
          background: 'transparent',
          border: 'none',
          textAlign: 'left',
          padding: 0,
          cursor: 'pointer',
          color: 'inherit',
          display: 'flex',
          alignItems: 'flex-start',
          gap: 8,
          width: '100%'
        }}
      >
        <span style={{ color: '#4A9EFF', fontSize: 14 }}>{expanded ? '▼' : '▶'}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, margin: 0, fontFamily: 'Oxanium, sans-serif' }}>
            {entry.title}
          </h3>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 4, flexWrap: 'wrap', fontSize: 11, color: '#64748b' }}>
            <span>{entry.entry_date}</span>
            {entry.instrument && <span>· {entry.instrument}</span>}
            {entry.time_of_day && <span>· {entry.time_of_day}</span>}
            {entry.confidence_rating != null && (
              <span style={{ color: '#4A9EFF' }}>★ {entry.confidence_rating}/5</span>
            )}
          </div>
        </div>
      </button>

      {!expanded && entry.question && (
        <p style={{ fontSize: 13, color: '#cbd5e1', opacity: 0.9, margin: '4px 0 0 22px' }}>
          {entry.question.length > 160 ? entry.question.slice(0, 160) + '...' : entry.question}
        </p>
      )}

      <div style={{ marginLeft: 22, display: 'flex', flexWrap: 'wrap', gap: 4 }}>
        {(entry.tags || []).map(t => <span key={t} className="qa-tag">{t}</span>)}
      </div>

      {expanded && (
        <div style={{ marginLeft: 22, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14, lineHeight: 1.6 }}>
          {entry.context && <Section label="Context">{entry.context}</Section>}
          <Section label="Question">
            <strong style={{ fontWeight: 600 }}>{entry.question}</strong>
          </Section>
          <Section label="Answer">
            <div style={{ whiteSpace: 'pre-wrap' }}>{entry.answer}</div>
          </Section>
          {entry.key_takeaways && (
            <Section label="Key Takeaways">
              <div style={{ whiteSpace: 'pre-wrap', background: 'rgba(74, 158, 255, 0.10)', padding: 10, borderRadius: 6 }}>
                {entry.key_takeaways}
              </div>
            </Section>
          )}
          {(entry.uni_bootcamp_link || entry.did_apply_correctly || entry.pattern_type || entry.entry_type) && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 8, fontSize: 12, color: '#94a3b8' }}>
              {entry.entry_type && <div><strong>Type:</strong> {entry.entry_type}</div>}
              {entry.pattern_type && <div><strong>Pattern:</strong> {entry.pattern_type}</div>}
              {entry.uni_bootcamp_link && <div><strong>Uni link:</strong> {entry.uni_bootcamp_link}</div>}
              {entry.did_apply_correctly && <div><strong>Applied:</strong> {entry.did_apply_correctly}</div>}
            </div>
          )}
          {entry.screenshot_url && (
            <a href={entry.screenshot_url} target="_blank" rel="noopener noreferrer" style={{ color: '#4A9EFF', fontSize: 13 }}>
              View screenshot →
            </a>
          )}
        </div>
      )}
    </div>
  );
}

function Section({ label, children }) {
  return (
    <div>
      <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#64748b', fontWeight: 700, marginBottom: 4 }}>
        {label}
      </div>
      {children}
    </div>
  );
}
