import { useEffect, useMemo, useState } from 'react';
import { Brain, HelpCircle, Eye, Filter, RotateCcw } from 'lucide-react';
import { fetchAllEntries, pickReviewEntry, recordReview, REVIEW_BUTTONS } from '../../lib/journal';
import { ChartGallery } from '../../components/charts/day-2026-05-07/ChartGallery';
import { findConceptForEntry, QA_CONCEPTS } from '../../components/charts/qa-concepts';


export default function MasteryDrill() {
  const [mode, setMode] = useState('quiz');
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [current, setCurrent] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [showCharts, setShowCharts] = useState(false);
  const [saving, setSaving] = useState(false);
  const [seen, setSeen] = useState(0);
  const [patternFilter, setPatternFilter] = useState('');

  useEffect(() => {
    fetchAllEntries()
      .then(all => {
        setEntries(all);
        setCurrent(pickReviewEntry(all));
      })
      .catch(e => setError(e?.message || 'Failed to load entries'))
      .finally(() => setLoading(false));
  }, []);

  const filteredPool = useMemo(() => {
    if (!patternFilter) return entries;
    return entries.filter(e => e.pattern_type === patternFilter);
  }, [entries, patternFilter]);

  const allPatterns = useMemo(() => {
    const s = new Set();
    for (const e of entries) if (e.pattern_type) s.add(e.pattern_type);
    return [...s].sort();
  }, [entries]);

  const advance = (excludeId) => {
    setCurrent(pickReviewEntry(filteredPool.length ? filteredPool : entries, excludeId));
    setRevealed(false);
    setShowCharts(false);
  };

  const handleRate = async (rating) => {
    if (!current?.id) return;
    setSaving(true);
    try {
      await recordReview(current.id, rating);
      setSeen(c => c + 1);
      const updated = entries.map(e => e.id === current.id
        ? { ...e, confidence_rating: rating, review_count: e.review_count + 1 }
        : e);
      setEntries(updated);
      advance(current.id);
    } catch (e) {
      setError((e)?.message || 'Failed to save rating');
    } finally {
      setSaving(false);
    }
  };

  const concept = current ? findConceptForEntry(current.pattern_type, current.tags) : null;

  const renderIntro = () => (
    <section
      className="rounded-2xl p-5 md:p-6"
      style={{
        background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.08) 0%, rgba(15, 23, 42, 0.40) 100%)',
        border: '1px solid rgba(167, 139, 250, 0.25)',
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className="flex items-center justify-center w-10 h-10 rounded-xl"
          style={{ background: 'rgba(167, 139, 250, 0.15)', border: '1px solid rgba(167, 139, 250, 0.35)' }}
        >
          <Brain className="w-5 h-5" style={{ color: '#c4b5fd' }} />
        </div>
        <h2 className="text-xl m-0">Drill</h2>
      </div>
      <p className="text-sm leading-relaxed m-0" style={{ color: '#cbd5e1' }}>
        Active recall + spaced repetition. <strong>Quiz</strong> hides the answer until you reveal
        it; <strong>Review</strong> grades you on a 4-point scale to schedule the next encounter.
        Both pull from your library — and after you self-rate, you can flip the chart gallery to
        see the pattern visually.
      </p>
    </section>
  );

  if (loading) return <div className="space-y-5">{renderIntro()}<p style={{ color: '#94a3b8' }}>Loading drill queue...</p></div>;
  if (error) {
    const isAuth = error.includes('permissions') || error.includes('insufficient');
    return (
      <div className="space-y-5">
        {renderIntro()}
        <div className="rounded-xl px-4 py-3" style={{ background: 'rgba(239, 68, 68, 0.10)', border: '1px solid rgba(239, 68, 68, 0.40)', color: '#fca5a5' }}>
          {isAuth ? 'Sign in to load your journal entries — Drill needs your saved Q&A.' : `Error: ${error}`}
        </div>
      </div>
    );
  }
  if (entries.length === 0) {
    return (
      <div className="space-y-5">
        {renderIntro()}
        <div className="rounded-2xl p-8 text-center" style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <h3 className="text-lg m-0 mb-2" style={{ fontFamily: 'Oxanium, system-ui, sans-serif' }}>No entries to drill yet</h3>
          <p style={{ color: '#94a3b8' }}>Add entries through the Library tab, then come back here.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Intro */}
      <section
        className="rounded-2xl p-5 md:p-6"
        style={{
          background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.08) 0%, rgba(15, 23, 42, 0.40) 100%)',
          border: '1px solid rgba(167, 139, 250, 0.25)',
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div
            className="flex items-center justify-center w-10 h-10 rounded-xl"
            style={{ background: 'rgba(167, 139, 250, 0.15)', border: '1px solid rgba(167, 139, 250, 0.35)' }}
          >
            <Brain className="w-5 h-5" style={{ color: '#c4b5fd' }} />
          </div>
          <h2 className="text-xl m-0">Drill</h2>
        </div>
        <p className="text-sm leading-relaxed m-0" style={{ color: '#cbd5e1' }}>
          Active recall + spaced repetition. <strong>Quiz</strong> hides the answer until you reveal
          it; <strong>Review</strong> grades you on a 4-point scale to schedule the next encounter.
          Both pull from your library — and after you self-rate, you can flip the chart gallery to
          see the pattern visually.
        </p>
      </section>

      {/* Mode + filter row */}
      <div className="flex items-center gap-2 flex-wrap">
        {(['quiz', 'review']).map(m => {
          const isActive = mode === m;
          const Icon = m === 'quiz' ? HelpCircle : Brain;
          const label = m === 'quiz' ? 'Quiz Mode (Active Recall)' : 'Review Mode (Spaced Repetition)';
          return (
            <button
              key={m}
              type="button"
              onClick={() => { setMode(m); setRevealed(false); setShowCharts(false); }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold"
              style={{
                background: isActive ? 'rgba(167, 139, 250, 0.18)' : 'rgba(255, 255, 255, 0.025)',
                border: `1px solid ${isActive ? 'rgba(167, 139, 250, 0.50)' : 'rgba(255, 255, 255, 0.08)'}`,
                color: isActive ? '#c4b5fd' : '#94a3b8',
                fontFamily: 'Oxanium, system-ui, sans-serif',
                cursor: 'pointer',
              }}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          );
        })}

        <div className="ml-auto flex items-center gap-2">
          <Filter className="w-3.5 h-3.5" style={{ color: '#94a3b8' }} />
          <select
            value={patternFilter}
            onChange={e => { setPatternFilter(e.target.value); advance(); }}
            className="text-sm rounded-lg px-3 py-2"
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.10)',
              color: '#e2e8f0',
            }}
          >
            <option value="">All patterns</option>
            {allPatterns.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
      </div>

      {/* Stats row */}
      <div className="flex items-center gap-3 text-xs" style={{ color: '#94a3b8' }}>
        <span>Drilled this session: <span className="num" style={{ color: '#c4b5fd' }}>{seen}</span></span>
        <span>·</span>
        <span>Pool: <span className="num" style={{ color: '#5eead4' }}>{filteredPool.length || entries.length}</span> entries</span>
      </div>

      {/* Current card */}
      {current && (
        <article
          className="rounded-2xl p-5 md:p-6"
          style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.08)' }}
        >
          <div className="flex items-center gap-2 flex-wrap mb-3">
            <span className="num text-xs px-2.5 py-1 rounded-full" style={{ background: 'rgba(167, 139, 250, 0.12)', color: '#c4b5fd', border: '1px solid rgba(167, 139, 250, 0.30)' }}>
              {current.entry_date}
            </span>
            {current.instrument && (
              <span className="num text-xs" style={{ color: '#94a3b8' }}>· {current.instrument}</span>
            )}
            {current.confidence_rating != null && (
              <span className="num text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(251, 191, 36, 0.10)', color: '#fbbf24', border: '1px solid rgba(251, 191, 36, 0.30)' }}>
                Last: {current.confidence_rating}/5
              </span>
            )}
            <span className="num text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(94, 234, 212, 0.10)', color: '#5eead4', border: '1px solid rgba(94, 234, 212, 0.30)' }}>
              Reviews: {current.review_count}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl m-0 mb-2 leading-tight" style={{ fontFamily: 'Oxanium, system-ui, sans-serif' }}>
            {current.title}
          </h3>

          {current.context && (
            <p className="text-sm mb-4 m-0" style={{ color: '#94a3b8', fontStyle: 'italic' }}>
              Context: {current.context}
            </p>
          )}

          <div className="rounded-xl px-4 py-3 mb-4" style={{ background: 'rgba(167, 139, 250, 0.08)', border: '1px solid rgba(167, 139, 250, 0.25)' }}>
            <div className="text-[10px] uppercase tracking-[0.22em] num mb-1" style={{ color: '#c4b5fd' }}>
              Question
            </div>
            <p className="text-base font-semibold m-0" style={{ color: '#f5f9ff' }}>
              {current.question}
            </p>
          </div>

          {/* Quiz mode: hide until revealed. Review mode: always show. */}
          {(mode === 'review' || revealed) && (
            <div className="space-y-3 mb-4">
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] num mb-1.5" style={{ color: '#5eead4' }}>
                  Answer
                </div>
                <div className="text-sm leading-relaxed whitespace-pre-wrap" style={{ color: '#e2e8f0' }}>
                  {current.answer}
                </div>
              </div>
              {current.key_takeaways && (
                <div className="rule-callout">
                  <div className="text-[10px] uppercase tracking-[0.22em] num mb-2" style={{ color: '#5eead4' }}>
                    Key Takeaways
                  </div>
                  <div className="text-sm leading-relaxed whitespace-pre-wrap" style={{ color: '#e2e8f0' }}>
                    {current.key_takeaways}
                  </div>
                </div>
              )}
            </div>
          )}

          {mode === 'quiz' && !revealed ? (
            <div className="text-center py-6">
              <button
                type="button"
                onClick={() => setRevealed(true)}
                className="text-base px-6 py-3 rounded-lg font-semibold"
                style={{
                  background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
                  color: '#070c18',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Oxanium, system-ui, sans-serif',
                }}
              >
                Show Answer
              </button>
              <p className="text-xs mt-3 m-0" style={{ color: '#94a3b8' }}>
                Try to recall the answer first.
              </p>
            </div>
          ) : (
            <>
              {/* Chart gallery — only available after reveal in quiz mode */}
              {concept && (
                <div className="mb-4">
                  <button
                    type="button"
                    onClick={() => setShowCharts(s => !s)}
                    className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full"
                    style={{
                      background: 'rgba(94, 234, 212, 0.10)',
                      color: '#5eead4',
                      border: '1px solid rgba(94, 234, 212, 0.30)',
                      cursor: 'pointer',
                      fontFamily: 'Oxanium, system-ui, sans-serif',
                    }}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    {showCharts ? 'Hide' : 'Show'} {concept.charts.length} teaching charts · {concept.title}
                  </button>
                  {showCharts && (
                    <div className="mt-3">
                      <ChartGallery conceptId={'drill-' + (current.id || 'x')} charts={concept.charts} />
                    </div>
                  )}
                </div>
              )}

              {/* Rate buttons — different sets for quiz vs review */}
              {mode === 'review' ? (
                <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
                  {REVIEW_BUTTONS.map(btn => (
                    <button
                      key={btn.value}
                      disabled={saving}
                      onClick={() => handleRate(btn.value)}
                      className="px-3 py-3 rounded-lg text-sm font-bold"
                      style={{
                        background: 'transparent',
                        border: `2px solid ${btn.color}`,
                        color: btn.color,
                        cursor: saving ? 'not-allowed' : 'pointer',
                        fontFamily: 'Oxanium, system-ui, sans-serif',
                      }}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              ) : (
                <div>
                  <p className="text-sm font-semibold m-0 mb-2" style={{ color: '#f5f9ff' }}>Did I know this?</p>
                  <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                    <button
                      disabled={saving}
                      onClick={() => handleRate(2)}
                      className="px-3 py-3 rounded-lg text-sm font-bold"
                      style={{ background: 'transparent', border: '2px solid #ef4444', color: '#ef4444', cursor: saving ? 'not-allowed' : 'pointer', fontFamily: 'Oxanium, system-ui, sans-serif' }}
                    >
                      No
                    </button>
                    <button
                      disabled={saving}
                      onClick={() => handleRate(3)}
                      className="px-3 py-3 rounded-lg text-sm font-bold"
                      style={{ background: 'transparent', border: '2px solid #f59e0b', color: '#f59e0b', cursor: saving ? 'not-allowed' : 'pointer', fontFamily: 'Oxanium, system-ui, sans-serif' }}
                    >
                      Sort of
                    </button>
                    <button
                      disabled={saving}
                      onClick={() => handleRate(5)}
                      className="px-3 py-3 rounded-lg text-sm font-bold"
                      style={{ background: 'transparent', border: '2px solid #22c55e', color: '#22c55e', cursor: saving ? 'not-allowed' : 'pointer', fontFamily: 'Oxanium, system-ui, sans-serif' }}
                    >
                      Yes
                    </button>
                  </div>
                </div>
              )}

              <div className="text-right mt-3">
                <button
                  type="button"
                  onClick={() => advance(current.id)}
                  disabled={saving}
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg"
                  style={{
                    background: 'rgba(255, 255, 255, 0.025)',
                    border: '1px solid rgba(255, 255, 255, 0.10)',
                    color: '#94a3b8',
                    cursor: saving ? 'not-allowed' : 'pointer',
                  }}
                >
                  <RotateCcw className="w-3 h-3" />
                  Skip / Next
                </button>
              </div>
            </>
          )}
        </article>
      )}

      {/* Available concept galleries (the visual library at a glance) */}
      <div className="text-xs pt-2" style={{ color: '#64748b' }}>
        Chart galleries available for: {QA_CONCEPTS.map(c => c.title).join(' · ')}
      </div>
    </div>
  );
}
