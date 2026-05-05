import React, { useMemo } from 'react';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell, Legend
} from 'recharts';
import { getDrillStats, getJournalEntries, getStreak } from '../lib/store.js';
import { PATTERN_NAMES } from '../data/drills.js';
import { recentAccuracy, fmtPct, fmtMs } from '../lib/util.js';

export default function Progress() {
  const stats = getDrillStats();
  const journal = getJournalEntries();
  const streak = getStreak();

  // ====== Top numbers ======
  // Discipline streak
  const disciplineStreak = streak.count;

  // Pattern recognition accuracy (rolling 30 drills across all patterns)
  const recent30 = [];
  for (const p of Object.values(stats.byPattern)) {
    for (const r of (p.last20 || [])) recent30.push(r);
  }
  recent30.sort((a, b) => b.at - a.at);
  const top30 = recent30.slice(0, 30);
  const accuracy30 = top30.length > 0 ? (top30.filter(x => x.correct).length / top30.length) * 100 : null;

  // Stop-at-target rate (rolling 30 sessions)
  const journal30 = journal.slice(0, 30);
  const targetSessions = journal30.filter(e => e.stopAtTarget !== 'na');
  const stopRate = targetSessions.length > 0
    ? (targetSessions.filter(e => e.stopAtTarget === true).length / targetSessions.length) * 100
    : null;

  // ====== Chart 1: 30-day discipline streak (compliance per day) ======
  const disciplineData = useMemo(() => {
    const map = new Map();
    for (const e of journal) {
      map.set(e.date, e.complianceScore || 0);
    }
    const out = [];
    for (let i = 29; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      out.push({
        date: key.slice(5),
        score: map.has(key) ? map.get(key) : 0,
        had: map.has(key)
      });
    }
    return out;
  }, [journal]);

  // ====== Chart 2: Pattern accuracy by pattern (current rolling 20) ======
  const patternData = useMemo(() => {
    return Object.entries(stats.byPattern).map(([pid, p]) => ({
      name: shortName(PATTERN_NAMES[pid] || pid),
      acc: recentAccuracy(p, 20) || 0,
      attempts: p.attempts
    }));
  }, [stats]);

  // ====== Chart 3: Avg drill response time over time (running avg by date) ======
  const responseData = useMemo(() => {
    const byDate = {};
    for (const p of Object.values(stats.byPattern)) {
      for (const r of (p.last20 || [])) {
        const d = new Date(r.at).toISOString().slice(0, 10);
        if (!byDate[d]) byDate[d] = { ms: 0, n: 0 };
        byDate[d].ms += r.ms;
        byDate[d].n += 1;
      }
    }
    const dates = Object.keys(byDate).sort();
    return dates.slice(-30).map(d => ({
      date: d.slice(5),
      avg: byDate[d].n > 0 ? Math.round(byDate[d].ms / byDate[d].n) : 0
    }));
  }, [stats]);

  // ====== Chart 4: Stop-at-target rate over time (rolling 10) ======
  const stopRateOverTime = useMemo(() => {
    const sorted = [...journal].sort((a, b) => a.date.localeCompare(b.date));
    const out = [];
    for (let i = 0; i < sorted.length; i++) {
      const window = sorted.slice(Math.max(0, i - 9), i + 1).filter(e => e.stopAtTarget !== 'na');
      if (window.length === 0) {
        out.push({ date: sorted[i].date.slice(5), rate: null });
        continue;
      }
      const yes = window.filter(e => e.stopAtTarget === true).length;
      out.push({ date: sorted[i].date.slice(5), rate: (yes / window.length) * 100 });
    }
    return out;
  }, [journal]);

  // Honest mirror text
  const honesty = computeHonesty(journal);

  return (
    <div className="max-w-4xl mx-auto px-5 md:px-8 py-6 md:py-10 animate-fadeIn">
      <div className="label mb-1">The Mirror</div>
      <h1 className="h1 mb-2">Progress</h1>
      <p className="text-text/70 mb-6">What's actually changing — measured from your own data.</p>

      {/* Top Numbers */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        <BigStat label="Discipline streak" value={`${disciplineStreak}d`} hint="100% sessions in a row" accent="green" />
        <BigStat label="Pattern accuracy" value={accuracy30 != null ? fmtPct(accuracy30) : '—'} hint="rolling 30 drills" />
        <BigStat label="Stop-at-target rate" value={stopRate != null ? fmtPct(stopRate) : '—'} hint="rolling 30 sessions" accent={stopRate != null && stopRate >= 70 ? 'green' : stopRate != null && stopRate < 50 ? 'red' : 'amber'} />
      </section>

      {/* Charts */}
      <Section title="30-Day Discipline Streak" hint="Compliance score per session day. Green = 100%. Amber = 75-99. Red = under 75. Empty = no session.">
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={disciplineData}>
            <CartesianGrid stroke="#262626" vertical={false} />
            <XAxis dataKey="date" tick={{ fill: '#888', fontSize: 10 }} interval={2} />
            <YAxis domain={[0, 100]} tick={{ fill: '#888', fontSize: 10 }} />
            <Tooltip contentStyle={{ background: '#161616', border: '1px solid #262626' }} />
            <Bar dataKey="score" radius={[3, 3, 0, 0]}>
              {disciplineData.map((d, i) => (
                <Cell key={i} fill={!d.had ? '#222' : d.score >= 100 ? '#00D9A0' : d.score >= 75 ? '#FFB44A' : '#FF3D5A'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Section>

      <Section title="Pattern Accuracy" hint="Recent 20-drill rolling accuracy per pattern. Patterns under 70% get 3× weight in random selection.">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={patternData} layout="vertical" margin={{ left: 20 }}>
            <CartesianGrid stroke="#262626" horizontal={false} />
            <XAxis type="number" domain={[0, 100]} tick={{ fill: '#888', fontSize: 10 }} />
            <YAxis dataKey="name" type="category" tick={{ fill: '#aaa', fontSize: 10 }} width={120} />
            <Tooltip contentStyle={{ background: '#161616', border: '1px solid #262626' }} formatter={(v) => `${v.toFixed(0)}%`} />
            <Bar dataKey="acc" radius={[0, 3, 3, 0]}>
              {patternData.map((d, i) => (
                <Cell key={i} fill={d.acc >= 90 ? '#00D9A0' : d.acc >= 70 ? '#4A9EFF' : '#FFB44A'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Section>

      <Section title="Average Drill Response Time" hint="Lower = building reflex. Goal: identify in under 5 seconds (5000 ms).">
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={responseData}>
            <CartesianGrid stroke="#262626" />
            <XAxis dataKey="date" tick={{ fill: '#888', fontSize: 10 }} />
            <YAxis tick={{ fill: '#888', fontSize: 10 }} unit=" ms" />
            <Tooltip contentStyle={{ background: '#161616', border: '1px solid #262626' }} formatter={(v) => `${v} ms`} />
            <Line type="monotone" dataKey="avg" stroke="#4A9EFF" strokeWidth={2} dot={{ fill: '#4A9EFF', r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </Section>

      <Section title="Stop-at-Target Rate Over Time" hint="The single most important metric in this app. 10-session rolling window.">
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={stopRateOverTime}>
            <CartesianGrid stroke="#262626" />
            <XAxis dataKey="date" tick={{ fill: '#888', fontSize: 10 }} />
            <YAxis domain={[0, 100]} tick={{ fill: '#888', fontSize: 10 }} unit="%" />
            <Tooltip contentStyle={{ background: '#161616', border: '1px solid #262626' }} formatter={(v) => v == null ? '—' : `${v.toFixed(0)}%`} />
            <Line type="monotone" dataKey="rate" stroke="#00D9A0" strokeWidth={2.5} dot={{ fill: '#00D9A0', r: 4 }} connectNulls />
          </LineChart>
        </ResponsiveContainer>
      </Section>

      {/* Honesty Zone */}
      <section className="card border-amber/30 mt-2">
        <div className="label text-amber mb-2">The Honesty Zone</div>
        <p className="leading-relaxed text-text/90">{honesty}</p>
      </section>
    </div>
  );
}

function Section({ title, hint, children }) {
  return (
    <section className="card mb-5">
      <div className="mb-1 font-display font-semibold">{title}</div>
      <div className="text-xs text-muted mb-4">{hint}</div>
      {children}
    </section>
  );
}

function BigStat({ label, value, hint, accent }) {
  const colors = { green: 'text-green', red: 'text-red', amber: 'text-amber' };
  return (
    <div className="card">
      <div className="label mb-2">{label}</div>
      <div className={`num text-4xl mb-1 ${colors[accent] || 'text-text'}`}>{value}</div>
      <div className="text-xs text-muted">{hint}</div>
    </div>
  );
}

function shortName(s) {
  return s.replace('Double Top — ', 'DT ').replace('Bearish Engulfing', 'Bear Eng').replace('Stage 3 (break)', 'S3').replace('Stage 1', 'S1').replace('Stage 2', 'S2').replace('Volume Divergence', 'Vol Div').replace('Shooting Star', 'Shoot Star');
}

function computeHonesty(journal) {
  if (journal.length === 0) {
    return "No data yet. After 30 sessions, this panel will show whether your discipline is improving or stuck. The mechanical lock-in tools will be doing their work — what you'll measure is whether you let them.";
  }
  const sorted = [...journal].sort((a, b) => a.date.localeCompare(b.date));
  const last30 = sorted.slice(-30);
  const prior30 = sorted.slice(-60, -30);

  const stopRate = (arr) => {
    const elig = arr.filter(e => e.stopAtTarget !== 'na');
    if (elig.length === 0) return null;
    return (elig.filter(e => e.stopAtTarget === true).length / elig.length) * 100;
  };
  const targetHits = (arr) => arr.filter(e => e.stopAtTarget === true).length;
  const targetEligible = (arr) => arr.filter(e => e.stopAtTarget !== 'na').length;
  const giveBacks = (arr) => arr.filter(e => e.stopAtTarget === false).length;

  const last = stopRate(last30);
  const prior = stopRate(prior30);

  if (last == null) {
    return `${last30.length} session(s) logged but none reached the profit target. Until you hit a target, the give-back metric isn't measurable. Trade smaller, hit smaller targets, log them honestly.`;
  }

  if (prior == null) {
    const hit = targetHits(last30);
    const elig = targetEligible(last30);
    return `Last ${last30.length} sessions you hit profit target ${hit} day${hit === 1 ? '' : 's'}. You held it on ${hit - giveBacks(last30) >= 0 ? 'all' : ''} of those. ${last >= 80 ? 'Strong start. Keep going.' : 'Building the baseline. Need 30 sessions before this number means anything.'}`;
  }

  const delta = last - prior;
  const lastHits = targetHits(last30);
  const lastGive = giveBacks(last30);
  const lastRateStr = last.toFixed(0);
  const priorRateStr = prior.toFixed(0);

  if (delta > 5) {
    return `Last 30 sessions you hit profit target ${lastHits} day${lastHits === 1 ? '' : 's'}. You held it on ${lastHits - lastGive}. That's a ${(100 - last).toFixed(0)}% give-back rate, down from ${(100 - prior).toFixed(0)}% the prior 30 days. You are improving. Keep going.`;
  }

  if (Math.abs(delta) <= 5) {
    return `Last 30 sessions you hit profit target ${lastHits} day${lastHits === 1 ? '' : 's'}. You held it on ${lastHits - lastGive}. That's a ${(100 - last).toFixed(0)}% give-back rate. No improvement on the prior 30. The mechanical solution isn't working hard enough yet. Consider: smaller daily target, harder lockout, or extending sim time before live.`;
  }

  return `Last 30 sessions you hit profit target ${lastHits} day${lastHits === 1 ? '' : 's'}. You held it on ${lastHits - lastGive}. Give-back rate up to ${(100 - last).toFixed(0)}% from ${(100 - prior).toFixed(0)}% the prior 30 days. This is regression. Tomorrow: cut size in half until the rate goes back up. Honesty over comfort.`;
}
