import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import {
  fetchAllEntries, entriesByWeek, entriesByMonth, masteryDistribution,
  topTagsByFrequency, weakestTopics, reviewStreak
} from '../../lib/journal.js';

const PIE_COLORS = ['#475569', '#FF3D5A', '#FFB44A', '#FBBF24', '#00D9A0', '#4A9EFF'];

export default function QAProgress() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAllEntries()
      .then(setEntries)
      .catch(e => setError(e?.message || 'Failed to load entries'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ color: '#94a3b8' }}>Loading progress...</p>;
  if (error) return <p style={{ color: '#FF3D5A' }}>Error: {error}</p>;

  const total = entries.length;
  const week = entriesByWeek(entries);
  const month = entriesByMonth(entries);
  const mastery = masteryDistribution(entries);
  const topTags = topTagsByFrequency(entries, 10);
  const weak = weakestTopics(entries, 5);
  const streak = reviewStreak(entries);

  return (
    <div>
      <h1 style={{ color: '#e2e8f0', fontFamily: 'Oxanium, sans-serif', fontSize: 24, marginBottom: 20, fontWeight: 700 }}>
        Progress
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12, marginBottom: 20 }}>
        <Stat label="Total entries" value={total} />
        <Stat label="This week" value={week} />
        <Stat label="This month" value={month} />
        <Stat label="Review streak" value={`${streak} ${streak === 1 ? 'day' : 'days'}`} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 16 }}>
        <div className="qa-card">
          <h3 style={{ fontFamily: 'Oxanium, sans-serif', fontSize: 16, marginTop: 0, marginBottom: 12, fontWeight: 700 }}>
            Mastery distribution
          </h3>
          {total === 0 ? <p style={{ color: '#94a3b8' }}>No data yet.</p> : (
            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Pie data={mastery} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={85} innerRadius={50} label>
                  {mastery.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>

        <div className="qa-card">
          <h3 style={{ fontFamily: 'Oxanium, sans-serif', fontSize: 16, marginTop: 0, marginBottom: 12, fontWeight: 700 }}>
            Top tags
          </h3>
          {topTags.length === 0 ? <p style={{ color: '#94a3b8' }}>No tags yet.</p> : (
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={topTags} layout="vertical" margin={{ left: 40 }}>
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: '#cbd5e1' }} width={100} />
                <Tooltip />
                <Bar dataKey="value" fill="#4A9EFF" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      <div className="qa-card" style={{ marginTop: 16 }}>
        <h3 style={{ fontFamily: 'Oxanium, sans-serif', fontSize: 16, marginTop: 0, marginBottom: 12, fontWeight: 700 }}>
          Weakest topics
          <span style={{ fontSize: 12, color: '#94a3b8', marginLeft: 8, fontWeight: 400 }}>
            (lowest avg confidence — focus your review here)
          </span>
        </h3>
        {weak.length === 0 ? (
          <p style={{ color: '#94a3b8' }}>Not enough data yet — keep reviewing entries to build this list.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {weak.map(w => (
              <li key={w.tag} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14 }}>
                <span className="qa-tag" style={{ minWidth: 100 }}>{w.tag}</span>
                <div style={{ flex: 1, height: 8, background: 'rgba(74, 158, 255, 0.10)', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ width: `${(w.avg / 5) * 100}%`, height: '100%', background: w.avg < 2.5 ? '#FF3D5A' : w.avg < 3.5 ? '#FFB44A' : '#00D9A0' }} />
                </div>
                <span style={{ minWidth: 80, fontVariantNumeric: 'tabular-nums', color: '#94a3b8', fontSize: 13 }}>
                  {w.avg.toFixed(1)} · {w.count} entries
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="qa-card" style={{ padding: 16 }}>
      <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#64748b', fontWeight: 700, marginBottom: 4 }}>
        {label}
      </div>
      <div style={{ fontSize: 28, fontWeight: 700, fontFamily: 'Oxanium, sans-serif', color: '#e2e8f0' }}>{value}</div>
    </div>
  );
}
