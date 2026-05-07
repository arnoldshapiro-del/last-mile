import React from 'react';
import { Link } from 'react-router-dom';
import { formatDailyDate, principles } from '../../data/mastery/index.js';
import { useDailyLessons } from '../../data/mastery/useFirestoreDailyLessons.js';

const monthAbbrev = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

export default function DailyLessonsIndex() {
  const { lessons: dailyLessons, source } = useDailyLessons();
  return (
    <div className="space-y-5">
      <section
        className="card border"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 61, 90, 0.08) 0%, rgba(31, 31, 31, 0.40) 100%)',
          borderColor: 'rgba(255, 61, 90, 0.25)',
        }}
      >
        <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
          <div>
            <h2 className="font-display font-semibold text-xl m-0" style={{ color: '#FF3D5A' }}>
              Daily Lessons
            </h2>
            <div className="text-[10px] uppercase tracking-[0.22em] mt-1 text-muted font-display">
              {source === 'firestore' ? 'Synced live from Firestore' : 'Local seeds — admin to migrate'}
            </div>
          </div>
          <Link to="/mastery/add-lesson" className="btn btn-primary">
            + Add Today's Lesson
          </Link>
        </div>
        <p className="text-sm leading-relaxed m-0 text-text/80">
          Every trading day adds a new entry. Newest first. Click any card to open the full
          lesson — teaching units, charts, key rules, and the principles reinforced. The
          spine never changes; the daily lessons grow forever.
        </p>
      </section>

      <div className="space-y-3">
        {dailyLessons.map((l, i) => {
          const opacity = Math.max(0.65, 1 - i * 0.06);
          const isLatest = i === 0;
          const [y, m, d] = l.date.split('-');
          return (
            <Link
              key={l.date}
              to={`/mastery/daily/${l.date}`}
              className="card hover:border-amber/40 block no-underline relative"
              style={{ color: 'inherit', opacity }}
            >
              {isLatest && (
                <div
                  className="absolute -top-2 right-4 num text-[10px] tracking-[0.2em] px-2 py-0.5 rounded-full font-display font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #FFB44A, #D08F2E)',
                    color: '#0a0a0a',
                    boxShadow: '0 4px 12px rgba(255, 180, 74, 0.30)',
                  }}
                >
                  LATEST
                </div>
              )}
              <div className="flex items-start gap-4">
                <div
                  className="num shrink-0 rounded-xl p-3 text-center border"
                  style={{
                    background: 'rgba(255, 61, 90, 0.10)',
                    borderColor: 'rgba(255, 61, 90, 0.25)',
                    minWidth: '4rem',
                  }}
                >
                  <div className="text-[10px] uppercase tracking-[0.2em]" style={{ color: '#FF3D5A' }}>
                    {monthAbbrev[parseInt(m, 10) - 1]}
                  </div>
                  <div className="text-xl font-bold leading-none mt-1 text-text">{d}</div>
                  <div className="text-[10px] mt-0.5 text-muted">{y}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-xs num text-muted">{formatDailyDate(l.date)}</span>
                  </div>
                  <h3 className="font-display font-semibold text-base md:text-lg m-0 mb-2 leading-tight">
                    {l.title}
                  </h3>
                  <p className="text-xs leading-relaxed mb-3 text-muted">
                    {l.sessionSummary.length > 200
                      ? l.sessionSummary.slice(0, 200).trim() + '…'
                      : l.sessionSummary}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {l.principlesReinforced.map(n => {
                      const p = principles.find(x => x.number === n);
                      return (
                        <span
                          key={n}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] border font-display font-medium"
                          style={{
                            background: 'rgba(255, 180, 74, 0.08)',
                            borderColor: 'rgba(255, 180, 74, 0.22)',
                            color: '#FFB44A',
                          }}
                        >
                          <span className="num">{String(n).padStart(2, '0')}</span>
                          {p && <span className="hidden sm:inline">{p.title}</span>}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <span className="shrink-0 mt-3 text-muted">→</span>
              </div>
            </Link>
          );
        })}
      </div>

      {dailyLessons.length < 3 && (
        <section
          className="rounded-2xl p-5 border border-dashed"
          style={{ background: '#161616', borderColor: '#2a2a2a' }}
        >
          <div className="text-xs uppercase tracking-[0.22em] mb-2 text-muted font-display">
            Tomorrow's Lesson
          </div>
          <p className="text-sm leading-relaxed m-0 text-text/80">
            Save tomorrow's deep-work conversation as <code className="num text-amber">YYYY-MM-DD.json</code> in
            <code className="num text-amber"> Google Drive\Trading-Lessons\daily-jsons\</code>, then
            double-click <span className="num text-amber">Update Trading Lessons.bat</span> on the desktop.
            The new entry appears here automatically.
          </p>
        </section>
      )}
    </div>
  );
}
