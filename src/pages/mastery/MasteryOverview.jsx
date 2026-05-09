import { Link } from 'react-router-dom';
import { Target, BookOpen, ListChecks, Calendar, ArrowRight, TrendingUp, Eye } from 'lucide-react';
import { principles, coreLessons, formatDailyDate } from '../../data/mastery';
import { useDailyLessons } from '../../data/mastery/useFirestoreDailyLessons';
import { ChartGallery } from '../../components/charts/day-2026-05-07/ChartGallery';
import { OVERVIEW_HERO_CHARTS } from '../../components/charts/mastery';

export default function MasteryOverview() {
  const { lessons: dailyLessons } = useDailyLessons();
  const latest = dailyLessons[0];
  const tiles = [
    {
      to: '/mastery/principles',
      icon: Target,
      title: '10 Master Principles',
      desc: 'The spine. The decision tree. Each principle now has 6 teaching charts and 3 Q&A units.',
      stat: `${principles.length} principles · 60 charts`,
      accent: '#fbbf24',
    },
    {
      to: '/mastery/lessons',
      icon: BookOpen,
      title: 'Core Lessons',
      desc: 'Pole mastery, flag mechanics, entry rules, multi-confirmation, the staircase, psychology — each with 6 charts.',
      stat: `${coreLessons.length} lessons · 60 charts`,
      accent: '#14b8a6',
    },
    {
      to: '/mastery/checklists',
      icon: ListChecks,
      title: 'Master Checklists',
      desc: 'Pre-trade, in-trade, post-trade. Each phase has its own visual companion gallery.',
      stat: '3 checklists · 14 charts',
      accent: '#5eead4',
    },
    {
      to: '/mastery/daily',
      icon: Calendar,
      title: 'Daily Lessons',
      desc: 'Every day a new lesson, organized by date, growing forever. Click any card to open it.',
      stat: `${dailyLessons.length} entries`,
      accent: '#a78bfa',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Hero */}
      <section
        className="rounded-2xl p-6 md:p-8 relative overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, rgba(20, 184, 166, 0.10) 0%, rgba(15, 23, 42, 0.40) 50%, rgba(124, 58, 237, 0.08) 100%)',
          border: '1px solid rgba(20, 184, 166, 0.25)',
        }}
      >
        <div className="relative z-10 max-w-2xl">
          <div className="text-xs uppercase tracking-[0.22em] mb-3" style={{ color: '#5eead4' }}>
            The Mission
          </div>
          <h2 className="text-2xl md:text-3xl mb-3 leading-tight">
            Pattern recognition is not a strategy. <span style={{ color: '#5eead4' }}>A decision tree applied identically every time</span> is.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: '#cbd5e1' }}>
            This module is the spine. The 10 principles set the rules. The core lessons go deep.
            The checklists make it operational. The daily lessons grow it forever — every session
            adds a new entry. Open it before every trading day. Re-read after every session.
          </p>
        </div>
        <div
          className="absolute right-6 top-6 hidden md:flex items-center justify-center w-24 h-24 rounded-2xl"
          style={{
            background: 'rgba(20, 184, 166, 0.12)',
            border: '1px solid rgba(20, 184, 166, 0.30)',
          }}
        >
          <TrendingUp className="w-12 h-12" style={{ color: '#5eead4' }} />
        </div>
      </section>

      {/* The system at a glance — hero gallery */}
      <section
        className="rounded-2xl p-5 md:p-6"
        style={{
          background:
            'linear-gradient(135deg, rgba(94, 234, 212, 0.06) 0%, rgba(15, 23, 42, 0.40) 100%)',
          border: '1px solid rgba(94, 234, 212, 0.20)',
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Eye className="w-4 h-4" style={{ color: '#5eead4' }} />
          <h3 className="text-lg m-0" style={{ color: '#5eead4' }}>The System At A Glance</h3>
        </div>
        <p className="text-sm leading-relaxed mb-4" style={{ color: '#cbd5e1' }}>
          Six charts, the whole framework. The complete setup, the four pillars, trending vs ranging,
          the 50% line, the staircase, and the 3-strike rule. Scroll through — these are the visual
          touchstones every trade comes back to.
        </p>
        <ChartGallery conceptId="overview-hero" charts={OVERVIEW_HERO_CHARTS} />
      </section>

      {/* Tiles */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tiles.map(t => (
          <Link
            key={t.to}
            to={t.to}
            className="mastery-card no-underline block"
            style={{ color: 'inherit' }}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0"
                style={{
                  background: `${t.accent}1f`,
                  border: `1px solid ${t.accent}55`,
                }}
              >
                <t.icon className="w-5 h-5" style={{ color: t.accent }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-lg m-0">{t.title}</h3>
                  <ArrowRight className="w-4 h-4 shrink-0" style={{ color: '#94a3b8' }} />
                </div>
                <p className="text-sm leading-relaxed mb-2" style={{ color: '#94a3b8' }}>
                  {t.desc}
                </p>
                <div
                  className="text-xs uppercase tracking-[0.18em] num"
                  style={{ color: t.accent }}
                >
                  {t.stat}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Latest daily lesson preview */}
      {latest && (
        <section className="mastery-card">
          <div className="flex items-center gap-2 mb-3">
            <div className="text-xs uppercase tracking-[0.22em]" style={{ color: '#94a3b8' }}>
              Latest Daily Lesson
            </div>
            <div
              className="text-xs num px-2 py-0.5 rounded-full"
              style={{
                background: 'rgba(20, 184, 166, 0.12)',
                color: '#5eead4',
                border: '1px solid rgba(20, 184, 166, 0.30)',
              }}
            >
              {formatDailyDate(latest.date)}
            </div>
          </div>
          <h3 className="text-xl mb-2">{latest.title}</h3>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#cbd5e1' }}>
            {latest.sessionSummary}
          </p>
          <Link
            to={`/mastery/daily/${latest.date}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold no-underline"
            style={{
              background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
              color: '#070c18',
              fontFamily: 'Oxanium, system-ui, sans-serif',
            }}
          >
            Open today's lesson 
          </Link>
        </section>
      )}

      {/* How it works */}
      <section
        className="rounded-2xl p-5"
        style={{
          background: 'rgba(255, 255, 255, 0.025)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <h3 className="text-base mb-3" style={{ color: '#5eead4' }}>
          How the Daily Lessons Grow
        </h3>
        <ol
          className="list-none p-0 m-0 space-y-2 text-sm"
          style={{ color: '#cbd5e1' }}
        >
          <li className="flex gap-3">
            <span className="num shrink-0" style={{ color: '#5eead4' }}>01.</span>
            <span>End of trading day — save today's deep-work conversation<code className="num" style={{ color: '#fbbf24' }}>YYYY-MM-DD.json</code>.</span>
          </li>
          <li className="flex gap-3">
            <span className="num shrink-0" style={{ color: '#5eead4' }}>02.</span>
            <span>Drop it into <code className="num" style={{ color: '#fbbf24' }}>Google Drive\Trading-Lessons\daily-jsons\</code>.</span>
          </li>
          <li className="flex gap-3">
            <span className="num shrink-0" style={{ color: '#5eead4' }}>03.</span>
            <span>Double-click <span className="num" style={{ color: '#fbbf24' }}>Update Trading Lessons.bat</span> on the desktop.</span>
          </li>
          <li className="flex gap-3">
            <span className="num shrink-0" style={{ color: '#5eead4' }}>04.</span>
            <span>The new lesson appears<strong>Daily Lessons</strong> — both apps, in sync.</span>
          </li>
        </ol>
      </section>
    </div>
  );
}
