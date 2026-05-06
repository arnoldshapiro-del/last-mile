import React, { useEffect, useMemo, useState } from 'react';
import { fetchAllEntries } from '../../lib/journal.js';
import EntryCard from './EntryCard.jsx';

const PAGE_SIZE = 20;

export default function Browse() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [search, setSearch] = useState('');
  const [tagFilter, setTagFilter] = useState('');
  const [patternFilter, setPatternFilter] = useState('');
  const [instrumentFilter, setInstrumentFilter] = useState('');
  const [confidenceFilter, setConfidenceFilter] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchAllEntries()
      .then(setEntries)
      .catch(e => setError(e?.message || 'Failed to load entries'))
      .finally(() => setLoading(false));
  }, []);

  const allTags = useMemo(() => {
    const s = new Set();
    for (const e of entries) for (const t of (e.tags || [])) s.add(t);
    return [...s].sort();
  }, [entries]);
  const allPatterns = useMemo(() => {
    const s = new Set();
    for (const e of entries) if (e.pattern_type) s.add(e.pattern_type);
    return [...s].sort();
  }, [entries]);
  const allInstruments = useMemo(() => {
    const s = new Set();
    for (const e of entries) if (e.instrument) s.add(e.instrument);
    return [...s].sort();
  }, [entries]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return entries.filter(e => {
      if (q) {
        const hay = (e.title + ' ' + e.question + ' ' + e.answer + ' ' + (e.context || '')).toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (tagFilter && !(e.tags || []).includes(tagFilter)) return false;
      if (patternFilter && e.pattern_type !== patternFilter) return false;
      if (instrumentFilter && e.instrument !== instrumentFilter) return false;
      if (confidenceFilter !== '' && e.confidence_rating !== Number(confidenceFilter)) return false;
      if (dateFrom && e.entry_date < dateFrom) return false;
      if (dateTo && e.entry_date > dateTo) return false;
      return true;
    });
  }, [entries, search, tagFilter, patternFilter, instrumentFilter, confidenceFilter, dateFrom, dateTo]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageEntries = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  if (loading) return <p style={{ color: '#94a3b8' }}>Loading library...</p>;
  if (error) return <p style={{ color: '#FF3D5A' }}>Error: {error}</p>;

  const clearFilters = () => {
    setSearch(''); setTagFilter(''); setPatternFilter(''); setInstrumentFilter('');
    setConfidenceFilter(''); setDateFrom(''); setDateTo(''); setPage(1);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(220px, 280px) 1fr', gap: 24 }}>
      <aside style={{ position: 'sticky', top: 80, alignSelf: 'flex-start' }}>
        <div className="qa-card">
          <h3 style={{ fontSize: 14, marginTop: 0, fontFamily: 'Oxanium, sans-serif' }}>Filters</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <input className="qa-input" placeholder="Search title / question / answer" value={search} onChange={e => { setSearch(e.target.value); setPage(1); }} />
            <select className="qa-input" value={tagFilter} onChange={e => { setTagFilter(e.target.value); setPage(1); }}>
              <option value="">All tags</option>
              {allTags.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <select className="qa-input" value={patternFilter} onChange={e => { setPatternFilter(e.target.value); setPage(1); }}>
              <option value="">All patterns</option>
              {allPatterns.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
            <select className="qa-input" value={instrumentFilter} onChange={e => { setInstrumentFilter(e.target.value); setPage(1); }}>
              <option value="">All instruments</option>
              {allInstruments.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
            <select className="qa-input" value={confidenceFilter} onChange={e => { setConfidenceFilter(e.target.value); setPage(1); }}>
              <option value="">Any confidence</option>
              <option value="1">1 — Forgot</option>
              <option value="2">2 — Hard</option>
              <option value="3">3 — OK</option>
              <option value="4">4 — Good</option>
              <option value="5">5 — Easy</option>
            </select>
            <label style={{ fontSize: 11, color: '#64748b' }}>From</label>
            <input className="qa-input" type="date" value={dateFrom} onChange={e => { setDateFrom(e.target.value); setPage(1); }} />
            <label style={{ fontSize: 11, color: '#64748b' }}>To</label>
            <input className="qa-input" type="date" value={dateTo} onChange={e => { setDateTo(e.target.value); setPage(1); }} />
            <button className="qa-btn qa-btn-ghost" onClick={clearFilters}>Clear</button>
          </div>
        </div>
      </aside>

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <h1 style={{ color: '#e2e8f0', fontFamily: 'Oxanium, sans-serif', fontSize: 24, margin: 0, fontWeight: 700 }}>
            Browse All
          </h1>
          <span style={{ color: '#94a3b8', fontSize: 13 }}>
            {filtered.length === entries.length
              ? `${entries.length} entries in library`
              : `${filtered.length} of ${entries.length} entries`}
          </span>
        </div>

        {pageEntries.length === 0 ? (
          <div className="qa-card" style={{ textAlign: 'center', padding: 32 }}>
            <p>No entries match your filters.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {pageEntries.map(e => <EntryCard key={e.id} entry={e} />)}
          </div>
        )}

        {totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, marginTop: 20 }}>
            <button className="qa-btn qa-btn-ghost" disabled={page === 1} onClick={() => setPage(p => Math.max(1, p - 1))}>← Prev</button>
            <span style={{ color: '#94a3b8', fontSize: 13 }}>Page {page} of {totalPages}</span>
            <button className="qa-btn qa-btn-ghost" disabled={page === totalPages} onClick={() => setPage(p => Math.min(totalPages, p + 1))}>Next →</button>
          </div>
        )}
      </div>
    </div>
  );
}
