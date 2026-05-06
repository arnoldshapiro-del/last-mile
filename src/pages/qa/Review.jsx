import React, { useEffect, useState } from 'react';
import { fetchAllEntries, pickReviewEntry, recordReview, REVIEW_BUTTONS } from '../../lib/journal.js';

export default function Review() {
  const [entries, setEntries] = useState([]);
  const [current, setCurrent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [reviewedToday, setReviewedToday] = useState(0);

  useEffect(() => {
    fetchAllEntries()
      .then(all => {
        setEntries(all);
        setCurrent(pickReviewEntry(all));
      })
      .catch(e => setError(e?.message || 'Failed to load entries'))
      .finally(() => setLoading(false));
  }, []);

  const handleRate = async (rating) => {
    if (!current?.id) return;
    setSaving(true);
    try {
      await recordReview(current.id, rating);
      setReviewedToday(c => c + 1);
      const updated = entries.map(e => e.id === current.id
        ? { ...e, confidence_rating: rating, review_count: (e.review_count ?? 0) + 1 }
        : e);
      setEntries(updated);
      setCurrent(pickReviewEntry(updated, current.id));
    } catch (e) {
      setError(e?.message || 'Failed to save rating');
    } finally {
      setSaving(false);
    }
  };

  const handleNext = () => {
    setCurrent(pickReviewEntry(entries, current?.id));
  };

  if (loading) return <p style={{ color: '#94a3b8' }}>Loading review queue...</p>;
  if (error) return <p style={{ color: '#FF3D5A' }}>Error: {error}</p>;
  if (!current) {
    return (
      <div className="qa-card" style={{ textAlign: 'center', padding: 40 }}>
        <h2 style={{ marginTop: 0, fontFamily: 'Oxanium, sans-serif' }}>Nothing to review yet</h2>
        <p style={{ color: '#94a3b8' }}>Add some entries first.</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14, color: '#94a3b8', fontSize: 13 }}>
        <span>Review Mode · Spaced Repetition</span>
        <span>Reviewed this session: {reviewedToday}</span>
      </div>

      <div className="qa-card" style={{ padding: 24 }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', fontSize: 11, color: '#64748b' }}>
          <span>{current.entry_date}</span>
          {current.instrument && <span>· {current.instrument}</span>}
          {current.confidence_rating != null && <span className="qa-tag">Last: {current.confidence_rating}/5</span>}
          <span className="qa-tag">Reviews: {current.review_count ?? 0}</span>
        </div>

        <h2 style={{ fontFamily: 'Oxanium, sans-serif', fontSize: 24, margin: '0 0 12px 0', fontWeight: 700 }}>{current.title}</h2>

        {current.context && (
          <p style={{ fontSize: 13, color: '#94a3b8', marginBottom: 12, fontStyle: 'italic' }}>
            Context: {current.context}
          </p>
        )}

        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#64748b', fontWeight: 700, marginBottom: 4 }}>
            Question
          </div>
          <p style={{ fontWeight: 600, fontSize: 16, margin: 0 }}>{current.question}</p>
        </div>

        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#64748b', fontWeight: 700, marginBottom: 4 }}>
            Answer
          </div>
          <div style={{ whiteSpace: 'pre-wrap', fontSize: 14, lineHeight: 1.6 }}>{current.answer}</div>
        </div>

        {current.key_takeaways && (
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#64748b', fontWeight: 700, marginBottom: 4 }}>
              Key Takeaways
            </div>
            <div style={{ whiteSpace: 'pre-wrap', background: 'rgba(74, 158, 255, 0.10)', padding: 12, borderRadius: 8, fontSize: 14, lineHeight: 1.6 }}>
              {current.key_takeaways}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 20 }}>
          {(current.tags || []).map(t => <span key={t} className="qa-tag">{t}</span>)}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 8, marginBottom: 12 }}>
          {REVIEW_BUTTONS.map(btn => (
            <button
              key={btn.value}
              disabled={saving}
              onClick={() => handleRate(btn.value)}
              style={{
                padding: '12px 8px',
                borderRadius: 8,
                border: `2px solid ${btn.color}`,
                background: 'transparent',
                color: btn.color,
                fontWeight: 700,
                fontSize: 13,
                cursor: saving ? 'not-allowed' : 'pointer',
                fontFamily: 'Oxanium, sans-serif',
                transition: 'all 0.15s'
              }}
              onMouseEnter={e => { if (!saving) e.currentTarget.style.background = btn.color + '22'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div style={{ textAlign: 'right' }}>
          <button className="qa-btn qa-btn-ghost" onClick={handleNext} disabled={saving}>Skip / Next →</button>
        </div>
      </div>
    </div>
  );
}
