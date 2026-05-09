import { useEffect, useMemo, useState } from 'react';
import { BarChart3, Target, Flame } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { fetchAllEntries, entriesByWeek, entriesByMonth, masteryDistribution, topTagsByFrequency, weakestTopics, reviewStreak } from '../../lib/journal';
import { QA_CONCEPTS, findConceptForEntry } from '../../components/charts/qa-concepts';

const PIE_COLORS = ['#475569', '#ef4444', '#f59e0b', '#fbbf24', '#22c55e', '#14b8a6'];

export default function MasteryProgress() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAllEntries()
      .then(setEntries)
      .catch(e => setError(e?.message || 'Failed to load entries'))
      .finally(() => setLoading(false));
  }, []);

  const masteryByConcept = useMemo(() => {
    const stats = [];
    for (const concept of QA_CONCEPTS) {
      const matching = entries.filter(e => findConceptForEntry(e.pattern_type, e.tags)?.slug === concept.slug);
      const rated = matching.filter(e => e.confidence_rating != null);
      const avg = rated.length > 0
        ? rated.reduce((s, e) => s + (e.confidence_rating || 0), 0) / rated.length
        : 0;
      if (matching.length > 0) {
        stats.push({ slug: concept.slug, title: concept.title, count: matching.length, avg });
      }
    }
    return stats.sort((a, b) => a.avg - b.avg);
  }, [entries]);

  const renderIntro = () => (
    <section
      className="rounded-2xl p-5 md:p-6"
      style={{
        background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.08) 0%, rgba(15, 23, 42, 0.40) 100%)',
        border: '1px solid rgba(251, 191, 36, 0.25)',
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className="flex items-center justify-center w-10 h-10 rounded-xl"
          style={{ background: 'rgba(251, 191, 36, 0.15)', border: '1px solid rgba(251, 191, 36, 0.35)' }}
        >
          <BarChart3 className="w-5 h-5" style={{ color: '#fbbf24' }} />
        </div>
        <h2 className="text-xl m-0">Progress</h2>
      </div>
      <p className="text-sm leading-relaxed m-0" style={{ color: '#cbd5e1' }}>
        Your learning report card. Mastery distribution, top tags, weakest topics, review streak,
        and confidence-by-concept. Drill the patterns at the top of the weakest list.
      </p>
    </section>
  );

  if (loading) return <div className="space-y-5">{renderIntro()}<p style={{ color: '#94a3b8' }}>Loading progress...</p></div>;
  if (error) {
    const isAuth = error.includes('permissions') || error.includes('insufficient');
    return (
      <div className="space-y-5">
        {renderIntro()}
        <div className="rounded-xl px-4 py-3" style={{ background: 'rgba(239, 68, 68, 0.10)', border: '1px solid rgba(239, 68, 68, 0.40)', color: '#fca5a5' }}>
          {isAuth ? 'Sign in to load your journal entries — Progress charts your saved Q&A.' : `Error: ${error}`}
        </div>
      </div>
    );
  }

  const total = entries.length;
  const week = entriesByWeek(entries);
  const month = entriesByMonth(entries);
  const mastery = masteryDistribution(entries);
  const topTags = topTagsByFrequency(entries, 10);
  const weak = weakestTopics(entries, 5);
  const streak = reviewStreak(entries);

  return (
    <div className="space-y-5">
      {/* Intro */}
      <section
        className="rounded-2xl p-5 md:p-6"
        style={{
          background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.08) 0%, rgba(15, 23, 42, 0.40) 100%)',
          border: '1px solid rgba(251, 191, 36, 0.25)',
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div
            className="flex items-center justify-center w-10 h-10 rounded-xl"
            style={{ background: 'rgba(251, 191, 36, 0.15)', border: '1px solid rgba(251, 191, 36, 0.35)' }}
          >
            <BarChart3 className="w-5 h-5" style={{ color: '#fbbf24' }} />
          </div>
          <h2 className="text-xl m-0">Progress</h2>
        </div>
        <p className="text-sm leading-relaxed m-0" style={{ color: '#cbd5e1' }}>
          Your learning report card. Mastery distribution, top tags, weakest topics, review streak,
          and confidence-by-concept. Drill the patterns at the top of the weakest list.
        </p>
      </section>

      {/* Stats row */}
      <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
        <Stat label="Total entries" value={total} accent="#5eead4" />
        <Stat label="This week" value={week} accent="#a78bfa" />
        <Stat label="This month" value={month} accent="#fbbf24" />
        <Stat label="Review streak" value={`${streak} ${streak === 1 ? 'day' : 'days'}`} accent="#22c55e" icon={<Flame className="w-4 h-4" />} />
      </div>

      {/* Two-column charts */}
      <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))' }}>
        <section className="rounded-2xl p-5" style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <h3 className="text-base m-0 mb-3" style={{ color: '#5eead4', fontFamily: 'Oxanium, system-ui, sans-serif' }}>
            Mastery Distribution
          </h3>
          {total === 0 ? (
            <p className="text-sm" style={{ color: '#94a3b8' }}>No data yet.</p>
          ) : (
            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Pie data={mastery} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={85} innerRadius={50} label={{ fill: '#e2e8f0', fontSize: 11 }}>
                  {mastery.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} stroke="#070c18" strokeWidth={2} />)}
                </Pie>
                <Tooltip contentStyle={{ background: '#0a1020', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 8, color: '#e2e8f0' }} />
              </PieChart>
            </ResponsiveContainer>
          )}
        </section>

        <section className="rounded-2xl p-5" style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <h3 className="text-base m-0 mb-3" style={{ color: '#5eead4', fontFamily: 'Oxanium, system-ui, sans-serif' }}>
            Top Tags
          </h3>
          {topTags.length === 0 ? (
            <p className="text-sm" style={{ color: '#94a3b8' }}>No tags yet.</p>
          ) : (
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={topTags} layout="vertical" margin={{ left: 40 }}>
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: '#cbd5e1' }} width={110} />
                <Tooltip contentStyle={{ background: '#0a1020', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 8, color: '#e2e8f0' }} />
                <Bar dataKey="value" fill="#a78bfa" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </section>
      </div>

      {/* Mastery by concept (NEW — Mastery-specific) */}
      {masteryByConcept.length > 0 && (
        <section
          className="rounded-2xl p-5 md:p-6"
          style={{ background: 'rgba(94, 234, 212, 0.04)', border: '1px solid rgba(94, 234, 212, 0.20)' }}
        >
          <h3 className="text-base m-0 mb-1 flex items-center gap-2" style={{ color: '#5eead4', fontFamily: 'Oxanium, system-ui, sans-serif' }}>
            <Target className="w-4 h-4" />
            Mastery by Concept
          </h3>
          <p className="text-xs mb-4" style={{ color: '#94a3b8' }}>
            Confidence average for each pattern_type with chart galleries available — sorted weakest first. Drill the top items.
          </p>
          <ul className="list-none p-0 m-0 space-y-2">
            {masteryByConcept.map(c => (
              <li key={c.slug} className="flex items-center gap-3 text-sm">
                <span
                  className="num text-[10px] px-2 py-0.5 rounded-full uppercase tracking-[0.18em]"
                  style={{ background: 'rgba(167, 139, 250, 0.10)', color: '#c4b5fd', border: '1px solid rgba(167, 139, 250, 0.30)', minWidth: 130, textAlign: 'center' }}
                >
                  {c.title}
                </span>
                <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255, 255, 255, 0.06)' }}>
                  <div
                    className="h-full"
                    style={{
                      width: `${(c.avg / 5) * 100}%`,
                      background: c.avg < 2.5 ? '#ef4444' : c.avg < 3.5 ? '#f59e0b' : '#22c55e',
                    }}
                  />
                </div>
                <span className="num text-xs" style={{ color: '#94a3b8', minWidth: 90 }}>
                  {c.avg.toFixed(1)} · {c.count} {c.count === 1 ? 'entry' : 'entries'}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Weakest topics */}
      <section className="rounded-2xl p-5 md:p-6" style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <h3 className="text-base m-0 mb-1" style={{ color: '#5eead4', fontFamily: 'Oxanium, system-ui, sans-serif' }}>
          Weakest Topics
        </h3>
        <p className="text-xs mb-3" style={{ color: '#94a3b8' }}>
          Lowest average confidence by tag — focus your drill sessions here.
        </p>
        {weak.length === 0 ? (
          <p className="text-sm" style={{ color: '#94a3b8' }}>Not enough data yet — keep reviewing entries to build this list.</p>
        ) : (
          <ul className="list-none p-0 m-0 space-y-2">
            {weak.map(w => (
              <li key={w.tag} className="flex items-center gap-3 text-sm">
                <span className="num text-[11px] px-2 py-0.5 rounded-full" style={{ background: 'rgba(167, 139, 250, 0.06)', color: '#c4b5fd', border: '1px solid rgba(167, 139, 250, 0.16)', minWidth: 100, textAlign: 'center' }}>
                  {w.tag}
                </span>
                <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255, 255, 255, 0.06)' }}>
                  <div
                    className="h-full"
                    style={{
                      width: `${(w.avg / 5) * 100}%`,
                      background: w.avg < 2.5 ? '#ef4444' : w.avg < 3.5 ? '#f59e0b' : '#22c55e',
                    }}
                  />
                </div>
                <span className="num text-xs" style={{ color: '#94a3b8', minWidth: 80 }}>
                  {w.avg.toFixed(1)} · {w.count} entries
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function Stat({ label, value, accent, icon }) {
  return (
    <div className="rounded-2xl p-4" style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="text-[10px] uppercase tracking-[0.22em] num mb-1 flex items-center gap-1.5" style={{ color: accent }}>
        {icon}
        {label}
      </div>
      <div className="text-2xl font-bold" style={{ fontFamily: 'Oxanium, system-ui, sans-serif', color: '#f5f9ff' }}>
        {value}
      </div>
    </div>
  );
}
