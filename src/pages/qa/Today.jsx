import React, { useEffect, useState } from 'react';
import { fetchAllEntries, entriesForToday, todayISO } from '../../lib/journal.js';
import EntryCard from './EntryCard.jsx';

export default function Today() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAllEntries()
      .then(all => setEntries(entriesForToday(all)))
      .catch(e => setError(e?.message || 'Failed to load entries'))
      .finally(() => setLoading(false));
  }, []);

  const todayLabel = new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });

  if (loading) return <p style={{ color: '#94a3b8' }}>Loading today's entries...</p>;
  if (error) return <p style={{ color: '#FF3D5A' }}>Error: {error}</p>;

  return (
    <div>
      <h1 style={{ color: '#e2e8f0', fontFamily: 'Oxanium, sans-serif', fontSize: 28, marginBottom: 6, fontWeight: 700 }}>
        Today's Lessons
      </h1>
      <p style={{ color: '#64748b', marginBottom: 20, fontSize: 13 }}>
        {todayLabel} · {todayISO()}
      </p>

      {entries.length === 0 ? (
        <div className="qa-card" style={{ textAlign: 'center', padding: 36 }}>
          <p style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}>No entries yet today.</p>
          <p style={{ color: '#94a3b8', fontSize: 13 }}>
            Ask Claude trading questions, then say "journal today" to capture them.
          </p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: 14, gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}>
          {entries.map(e => <EntryCard key={e.id} entry={e} />)}
        </div>
      )}
    </div>
  );
}
