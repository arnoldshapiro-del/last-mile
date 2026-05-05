export function fmtMoney(n) {
  const sign = n < 0 ? '-' : '';
  const abs = Math.abs(n);
  return sign + '$' + abs.toFixed(2).replace(/\.00$/, '');
}

export function fmtMs(ms) {
  if (ms < 1000) return `${ms} ms`;
  return `${(ms / 1000).toFixed(1)} s`;
}

export function fmtPct(n, digits = 0) {
  if (!isFinite(n)) return '—';
  return `${n.toFixed(digits)}%`;
}

export function fmtClock(secondsLeft) {
  const s = Math.max(0, Math.floor(secondsLeft));
  const mm = Math.floor(s / 60);
  const ss = s % 60;
  return `${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
}

export function patternAccuracy(p) {
  if (!p || p.attempts === 0) return null;
  return (p.correct / p.attempts) * 100;
}

export function recentAccuracy(p, n = 20) {
  if (!p?.last20?.length) return null;
  const slice = p.last20.slice(0, n);
  const correct = slice.filter(x => x.correct).length;
  return (correct / slice.length) * 100;
}

export function avgResponseMs(p) {
  if (!p?.attempts) return null;
  return p.totalTimeMs / p.attempts;
}

// Pattern weighting: under 70% accuracy weights 3×
export function buildWeightedPool(byPattern, drillsByPattern) {
  const pool = [];
  for (const [pid, drills] of Object.entries(drillsByPattern)) {
    const stats = byPattern[pid];
    const acc = recentAccuracy(stats, 20);
    const weight = acc != null && acc < 70 ? 3 : 1;
    for (const d of drills) {
      for (let i = 0; i < weight; i++) pool.push(d);
    }
  }
  return pool;
}

export function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Deterministic shuffle by seed
export function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function clamp(n, lo, hi) {
  return Math.max(lo, Math.min(hi, n));
}

export function diffDays(a, b) {
  const ms = new Date(b).getTime() - new Date(a).getTime();
  return Math.round(ms / 86400000);
}
