import React from 'react';
import { Link } from 'react-router-dom';
import { principles, coreLessons, formatDailyDate } from '../../data/mastery/index.js';
import { useDailyLessons } from '../../data/mastery/useFirestoreDailyLessons.js';

export default function MasteryOverview() {
  const { lessons: dailyLessons } = useDailyLessons();
  const latest = dailyLessons[0];
  const tiles = [
    {
      to: '/mastery/principles',
      title: '10 Master Principles',
      desc: 'The spine. The decision tree. The rules that never change.',
      stat: `${principles.length} principles`,
      accent: '#FFB44A',
    },
    {
      to: '/mastery/lessons',
      title: 'Core Lessons',
      desc: 'Pole mastery, flag mechanics, entry rules, multi-confirmation, the staircase, psychology.',
      stat: `${coreLessons.length} lessons`,
      accent: '#00D9A0',
    },
    {
      to: '/mastery/checklists',
      title: 'Master Checklists',
      desc: 'Pre-trade, in-trade, post-trade. The rituals that make the rules operational.',
      stat: '3 checklists',
      accent: '#4A9EFF',
    },
    {
      to: '/mastery/daily',
      title: 'Daily Lessons',
      desc: 'Every day a new lesson, organized by date, growing forever.',
      stat: `${dailyLessons.length} entries`,
      accent: '#FF3D5A',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Hero */}
      <section
        className="rounded-2xl p-6 md:p-8 relative overflow-hidden border"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 180, 74, 0.10) 0%, rgba(31, 31, 31, 0.50) 50%, rgba(74, 158, 255, 0.06) 100%)',
          borderColor: 'rgba(255, 180, 74, 0.25)',
        }}
      >
        <div className="text-[10px] uppercase tracking-[0.22em] mb-3 font-display" style={{ color: '#FFB44A' }}>
          The Mission
        </div>
        <h2 className="font-display font-semibold text-2xl md:text-3xl m-0 mb-3 leading-tight">
          Pattern recognition is not a strategy. <span style={{ color: '#FFB44A' }}>A decision tree applied identically every time</span> is.
        </h2>
        <p className="text-base leading-relaxed text-text/80 max-w-2xl m-0">
          This module is the spine. The 10 principles set the rules. The core lessons go deep.
          The checklists make it operational. The daily lessons grow it forever — every session
          adds a new entry. Open it before every trading day. Re-read after every session.
        </p>
      </section>

      {/* Tiles */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tiles.map(t => (
          <Link
            key={t.to}
            to={t.to}
            className="card hover:border-amber/40 transition-colors block no-underline"
            style={{ color: 'inherit' }}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0 border"
                style={{
                  background: `${t.accent}1f`,
                  borderColor: `${t.accent}55`,
                  color: t.accent,
                }}
              >
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: t.accent }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-display font-semibold text-lg m-0">{t.title}</h3>
                  <span className="text-muted">→</span>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-2 m-0">{t.desc}</p>
                <div className="text-xs uppercase tracking-[0.18em] num font-display font-medium" style={{ color: t.accent }}>
                  {t.stat}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Latest daily lesson */}
      {latest && (
        <section className="card">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <div className="text-xs uppercase tracking-[0.22em] text-muted font-display">Latest Daily Lesson</div>
            <div className="pill-amber num">{formatDailyDate(latest.date)}</div>
          </div>
          <h3 className="font-display font-semibold text-xl m-0 mb-2">{latest.title}</h3>
          <p className="text-sm text-text/80 leading-relaxed mb-4 m-0">{latest.sessionSummary}</p>
          <Link to={`/mastery/daily/${latest.date}`} className="btn btn-amber">
            Open today's lesson →
          </Link>
        </section>
      )}

      {/* How it works */}
      <section className="card-tight">
        <h3 className="font-display font-semibold text-base m-0 mb-3" style={{ color: '#FFB44A' }}>
          How the Daily Lessons Grow
        </h3>
        <ol className="list-none p-0 m-0 space-y-2 text-sm text-text/80">
          <li className="flex gap-3">
            <span className="num shrink-0" style={{ color: '#00D9A0' }}>01.</span>
            <span>End of trading day — save today's deep-work conversation as a JSON file named <code className="num text-amber">YYYY-MM-DD.json</code>.</span>
          </li>
          <li className="flex gap-3">
            <span className="num shrink-0" style={{ color: '#00D9A0' }}>02.</span>
            <span>Drop it into <code className="num text-amber">Google Drive\Trading-Lessons\daily-jsons\</code>.</span>
          </li>
          <li className="flex gap-3">
            <span className="num shrink-0" style={{ color: '#00D9A0' }}>03.</span>
            <span>Double-click <span className="num text-amber">Update Trading Lessons.bat</span> on the desktop.</span>
          </li>
          <li className="flex gap-3">
            <span className="num shrink-0" style={{ color: '#00D9A0' }}>04.</span>
            <span>The new lesson appears as the newest card in <strong>Daily Lessons</strong>.</span>
          </li>
        </ol>
      </section>
    </div>
  );
}
