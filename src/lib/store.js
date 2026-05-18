const PREFIX = 'lastmile:';

export const store = {
  get(key, fallback = null) {
    try {
      const raw = localStorage.getItem(PREFIX + key);
      if (raw == null) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  },
  set(key, val) {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(val));
      return true;
    } catch (e) {
      return false;
    }
  },
  remove(key) {
    localStorage.removeItem(PREFIX + key);
  },
  clearAll() {
    Object.keys(localStorage)
      .filter(k => k.startsWith(PREFIX))
      .forEach(k => localStorage.removeItem(k));
  }
};

// Convenience accessors keyed to spec
export const todayKey = () => new Date().toISOString().slice(0, 10);

export const KEYS = {
  COMMITMENTS: 'home:commitments',
  DRILL_STATS: 'drill:stats',
  SESSION_ACTIVE: 'session:active',
  JOURNAL: 'journal:entries',
  STREAK: 'streak',
  LAST_LOCKOUT: 'lockout',
  RITUAL_DONE: 'ritual:done',
  OVERRIDES: 'overrides:log'
};

export function getCommitments() {
  const c = store.get(KEYS.COMMITMENTS);
  if (!c) return null;
  if (c.date !== todayKey()) return null;
  return c;
}

export function lockCommitments({ profitTarget, lossLimit, maxTrades, patterns, calmScore }) {
  const data = {
    date: todayKey(),
    profitTarget,
    lossLimit,
    maxTrades,
    patterns,
    calmScore,
    lockedAt: new Date().toISOString()
  };
  store.set(KEYS.COMMITMENTS, data);
  store.set(KEYS.RITUAL_DONE, todayKey());
  return data;
}

export function isRitualDoneToday() {
  return store.get(KEYS.RITUAL_DONE) === todayKey();
}

const PATTERNS_INIT = {
  bearFlag:    { attempts: 0, correct: 0, totalTimeMs: 0, last20: [] },
  doubleTopS1: { attempts: 0, correct: 0, totalTimeMs: 0, last20: [] },
  doubleTopS2: { attempts: 0, correct: 0, totalTimeMs: 0, last20: [] },
  doubleTopS3: { attempts: 0, correct: 0, totalTimeMs: 0, last20: [] },
  bearishEng:  { attempts: 0, correct: 0, totalTimeMs: 0, last20: [] },
  threeBR:     { attempts: 0, correct: 0, totalTimeMs: 0, last20: [] },
  shootingStar:{ attempts: 0, correct: 0, totalTimeMs: 0, last20: [] },
  volDiv:      { attempts: 0, correct: 0, totalTimeMs: 0, last20: [] }
};

export function getDrillStats() {
  const s = store.get(KEYS.DRILL_STATS);
  if (!s) {
    const init = {
      byPattern: { ...PATTERNS_INIT },
      lastDrillDate: null,
      drillsToday: 0,
      streakDays: 0,
      historyByDate: {}
    };
    return init;
  }
  // Backfill any new patterns added later
  for (const k of Object.keys(PATTERNS_INIT)) {
    if (!s.byPattern[k]) s.byPattern[k] = { ...PATTERNS_INIT[k] };
  }
  return s;
}

export function recordDrill({ patternId, correct, responseMs }) {
  const stats = getDrillStats();
  const today = todayKey();
  if (stats.lastDrillDate !== today) {
    stats.drillsToday = 0;
  }
  stats.drillsToday += 1;
  stats.lastDrillDate = today;

  const p = stats.byPattern[patternId] || { attempts: 0, correct: 0, totalTimeMs: 0, last20: [] };
  p.attempts += 1;
  if (correct) p.correct += 1;
  p.totalTimeMs += responseMs;
  p.last20.unshift({ correct, ms: responseMs, at: Date.now() });
  if (p.last20.length > 20) p.last20.length = 20;
  stats.byPattern[patternId] = p;

  // History by date for streak tracking
  if (!stats.historyByDate) stats.historyByDate = {};
  if (!stats.historyByDate[today]) stats.historyByDate[today] = { drills: 0, correct: 0 };
  stats.historyByDate[today].drills += 1;
  if (correct) stats.historyByDate[today].correct += 1;

  store.set(KEYS.DRILL_STATS, stats);
  return stats;
}

// Journal
export function getJournalEntries() {
  return store.get(KEYS.JOURNAL, []);
}

export function saveJournalEntry(entry) {
  const list = getJournalEntries();
  // If today already exists, replace it
  const today = todayKey();
  const idx = list.findIndex(e => e.date === today);
  const final = { ...entry, date: today, savedAt: new Date().toISOString() };
  if (idx >= 0) list[idx] = final;
  else list.unshift(final);
  store.set(KEYS.JOURNAL, list);
  return list;
}

export function isJournalDoneToday() {
  return getJournalEntries().some(e => e.date === todayKey());
}

// Session
export function getActiveSession() {
  return store.get(KEYS.SESSION_ACTIVE);
}

export function startSession() {
  const c = getCommitments();
  if (!c) return null;
  const s = {
    startedAt: new Date().toISOString(),
    pnl: 0,
    peakPnl: 0,
    troughPnl: 0,
    tradesTaken: 0,
    profitTargetHit: false,
    lockOutEndsAt: null,
    overrides: [],
    ended: false,
    endedAt: null,
    endReason: null
  };
  store.set(KEYS.SESSION_ACTIVE, s);
  return s;
}

export function updateSession(patch) {
  const s = getActiveSession();
  if (!s) return null;
  const next = { ...s, ...patch };
  if (next.pnl > next.peakPnl) next.peakPnl = next.pnl;
  if (next.pnl < next.troughPnl) next.troughPnl = next.pnl;
  store.set(KEYS.SESSION_ACTIVE, next);
  return next;
}

export function endSession(reason = 'manual') {
  const s = getActiveSession();
  if (!s) return null;
  const ended = { ...s, ended: true, endedAt: new Date().toISOString(), endReason: reason };
  store.set(KEYS.SESSION_ACTIVE, ended);
  return ended;
}

export function clearSession() {
  store.remove(KEYS.SESSION_ACTIVE);
}

// Streak
export function getStreak() {
  return store.get(KEYS.STREAK, { count: 0, lastDate: null });
}

export function bumpStreakIfPerfect(complianceScore) {
  const today = todayKey();
  const cur = getStreak();
  if (cur.lastDate === today) return cur;
  if (complianceScore >= 100) {
    const next = { count: cur.count + 1, lastDate: today };
    store.set(KEYS.STREAK, next);
    return next;
  } else {
    const next = { count: 0, lastDate: today };
    store.set(KEYS.STREAK, next);
    return next;
  }
}

// ---- Brooks Discipline Layer (Phase C) ----

const BROOKS_PRE_KEY  = 'brooks:premarket';     // { date, checks: {...}, method }
const BROOKS_TRADE_KEY = 'brooks:pertrade';     // [{ at, date, checks, decision }]
const BROOKS_POST_KEY  = 'brooks:posttrade';    // [{ at, date, fields }]

const PRE_CHECKLIST_ITEMS = [
  'reviewed_15min_trend',
  'identified_sr',
  'method_chosen',
  'max_risk_300',
  'starting_size_1_2',
  'reviewed_decision_tree',
  'skip_first_15',
];

export const BROOKS_PRE_ITEMS = PRE_CHECKLIST_ITEMS;

export function getBrooksPreMarket(date = todayKey()) {
  const raw = store.get(BROOKS_PRE_KEY);
  if (!raw || raw.date !== date) {
    return { date, checks: {}, method: 'patterns_on_2min' };
  }
  return raw;
}

export function setBrooksPreMarket(next) {
  const today = todayKey();
  store.set(BROOKS_PRE_KEY, { ...next, date: today });
  return getBrooksPreMarket(today);
}

export function isBrooksPreMarketComplete(state) {
  if (!state || state.date !== todayKey()) return false;
  return PRE_CHECKLIST_ITEMS.every(k => state.checks?.[k] === true);
}

export function logBrooksPerTrade({ checks, decision }) {
  const list = store.get(BROOKS_TRADE_KEY, []);
  const row = {
    at: new Date().toISOString(),
    date: todayKey(),
    checks,
    decision,            // 'taken' | 'skipped'
  };
  list.unshift(row);
  if (list.length > 200) list.length = 200;
  store.set(BROOKS_TRADE_KEY, list);
  return list;
}

export function getBrooksPerTradeToday() {
  const list = store.get(BROOKS_TRADE_KEY, []);
  return list.filter(r => r.date === todayKey());
}

export function logBrooksPostTrade(fields) {
  const list = store.get(BROOKS_POST_KEY, []);
  const row = {
    at: new Date().toISOString(),
    date: todayKey(),
    fields,
  };
  list.unshift(row);
  if (list.length > 200) list.length = 200;
  store.set(BROOKS_POST_KEY, list);
  return list;
}

export function getBrooksPostTradeToday() {
  const list = store.get(BROOKS_POST_KEY, []);
  return list.filter(r => r.date === todayKey());
}

export function logOverride(reason) {
  const overrides = store.get(KEYS.OVERRIDES, []);
  overrides.unshift({ at: new Date().toISOString(), reason });
  store.set(KEYS.OVERRIDES, overrides);
}
