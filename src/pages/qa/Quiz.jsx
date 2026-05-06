import React, { useEffect, useState } from 'react';
import { fetchAllEntries, pickReviewEntry, recordReview } from '../../lib/journal.js';

export default function Quiz() {
  const [entries, setEntries] = useState([]);
  const [current, setCurrent] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [seen, setSeen] = useState(0);

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
      setSeen(c => c + 1);
      const updated = entries.map(e => e.id === current.id
        ? { ...e, confidence_rating: rating, review_count: (e.review_count ?? 0) + 1 }
        : e);
      setEntries(updated);
      setCurrent(pickReviewEntry(updated, current.id));
      setRevealed(false);
    } catch (e) {
      setError(e?.message || 'Failed to save rating');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p style={{ color: '#94a3b8' }}>Loading quiz...</p>;
  if (error) return <p style={{ color: '#FF3D5A' }}>Error: {error}</p>;
  if (!current) {
    return (
      <div className="qa-card" style={{ textAlign: 'center', padding: 40 }}>
        <h2 style={{ marginTop: 0, fontFamily: 'Oxanium, sans-serif' }}>No entries to quiz on</h2>
        <p style={{ color: '#94a3b8' }}>Add some entries first.</p>
      </div>
    );
  }

  const selfRateBtn = (color) => ({
    padding: '12px 8px',
    borderRadius: 8,
    border: `2px solid ${color}`,
    background: 'transparent',
    color,
    fontWeight: 700,
    fontSize: 14,
    cursor: 'pointer',
    fontFamily: 'Oxanium, sans-serif',
    transition: 'all 0.15s'
  });

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14, color: '#94a3b8', fontSize: 13 }}>
        <span>Quiz Mode · Active Recall</span>
        <span>Seen: {seen}</span>
      </div>

      <div className="qa-card" style={{ padding: 24, minHeight: 400 }}>
        <h2 style={{ fontFamily: 'Oxanium, sans-serif', fontSize: 22, margin: '0 0 8px 0', fontWeight: 700 }}>{current.title}</h2>

        {current.context && (
          <p style={{ fontSize: 13, color: '#94a3b8', marginBottom: 16, fontStyle: 'italic' }}>
            Context: {current.context}
          </p>
        )}

        <div style={{ background: 'rgba(74, 158, 255, 0.10)', padding: 16, borderRadius: 8, marginBottom: 16 }}>
          <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#64748b', fontWeight: 700, marginBottom: 6 }}>
            Question
          </div>
          <p style={{ fontWeight: 600, fontSize: 16, margin: 0 }}>{current.question}</p>
        </div>

        {!revealed ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <button className="qa-btn" onClick={() => setRevealed(true)} style={{ fontSize: 16, padding: '12px 32px' }}>
              Show Answer
            </button>
            <p style={{ color: '#94a3b8', fontSize: 13, marginTop: 12 }}>
              Try to recall the answer first.
            </p>
          </div>
        ) : (
          <div>
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
                <div style={{ whiteSpace: 'pre-wrap', fontSize: 14, lineHeight: 1.6 }}>{current.key_takeaways}</div>
              </div>
            )}
            <div style={{ borderTop: '1px solid #1e293b', paddingTop: 16, marginTop: 16 }}>
              <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>Did I know this?</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
                <button disabled={saving} onClick={() => handleRate(2)} style={selfRateBtn('#FF3D5A')}>No</button>
                <button disabled={saving} onClick={() => handleRate(3)} style={selfRateBtn('#FFB44A')}>Sort of</button>
                <button disabled={saving} onClick={() => handleRate(5)} style={selfRateBtn('#00D9A0')}>Yes</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
