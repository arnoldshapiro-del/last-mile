// Persistent storage with graceful fallback.
// Tries window.storage (artifact API) first, then localStorage, then in-memory.

const memCache = {};

function hasArtifactStorage() {
  try {
    return typeof window !== 'undefined' && window.storage && typeof window.storage.setItem === 'function';
  } catch {
    return false;
  }
}

function hasLocalStorage() {
  try {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  } catch {
    return false;
  }
}

export function loadJSON(key, fallback) {
  try {
    if (hasArtifactStorage()) {
      const raw = window.storage.getItem(key);
      if (raw != null) return JSON.parse(raw);
    }
    if (hasLocalStorage()) {
      const raw = window.localStorage.getItem(key);
      if (raw != null) return JSON.parse(raw);
    }
    if (key in memCache) return memCache[key];
  } catch {
    // swallow — return fallback
  }
  return fallback;
}

export function saveJSON(key, value) {
  const str = JSON.stringify(value);
  memCache[key] = value;
  try {
    if (hasArtifactStorage()) {
      window.storage.setItem(key, str);
      return true;
    }
    if (hasLocalStorage()) {
      window.localStorage.setItem(key, str);
      return true;
    }
  } catch {
    // memory only
  }
  return false;
}

export function loadString(key, fallback = '') {
  try {
    if (hasArtifactStorage()) {
      const raw = window.storage.getItem(key);
      if (raw != null) return raw;
    }
    if (hasLocalStorage()) {
      const raw = window.localStorage.getItem(key);
      if (raw != null) return raw;
    }
    if (key in memCache) return memCache[key];
  } catch {}
  return fallback;
}

export function saveString(key, value) {
  memCache[key] = value;
  try {
    if (hasArtifactStorage()) {
      window.storage.setItem(key, value);
      return true;
    }
    if (hasLocalStorage()) {
      window.localStorage.setItem(key, value);
      return true;
    }
  } catch {}
  return false;
}

export function removeKey(key) {
  delete memCache[key];
  try {
    if (hasArtifactStorage()) window.storage.removeItem(key);
    if (hasLocalStorage()) window.localStorage.removeItem(key);
  } catch {}
}

// --- Domain helpers -------------------------------------------------------

export const PRACTICE_STATS_KEY = 'practice-stats';
export const COMPLETED_LESSONS_KEY = 'completed-lessons';

export function getPracticeStats() {
  return loadJSON(PRACTICE_STATS_KEY, {
    total: 0,
    correct: 0,
    perPattern: {
      'double-bottom': { total: 0, correct: 0 },
      'double-top': { total: 0, correct: 0 },
      'bull-flag': { total: 0, correct: 0 },
      'bear-flag': { total: 0, correct: 0 },
      other: { total: 0, correct: 0 },
    },
  });
}

export function recordPracticeAnswer(patternKey, wasCorrect) {
  const stats = getPracticeStats();
  stats.total += 1;
  if (wasCorrect) stats.correct += 1;
  const bucket = stats.perPattern[patternKey] || stats.perPattern.other;
  bucket.total += 1;
  if (wasCorrect) bucket.correct += 1;
  stats.perPattern[patternKey] = bucket;
  saveJSON(PRACTICE_STATS_KEY, stats);
  return stats;
}

export function resetPracticeStats() {
  saveJSON(PRACTICE_STATS_KEY, {
    total: 0,
    correct: 0,
    perPattern: {
      'double-bottom': { total: 0, correct: 0 },
      'double-top': { total: 0, correct: 0 },
      'bull-flag': { total: 0, correct: 0 },
      'bear-flag': { total: 0, correct: 0 },
      other: { total: 0, correct: 0 },
    },
  });
}

export function getCompletedLessons() {
  return loadJSON(COMPLETED_LESSONS_KEY, []);
}

export function markLessonComplete(id) {
  const arr = getCompletedLessons();
  if (!arr.includes(id)) {
    arr.push(id);
    saveJSON(COMPLETED_LESSONS_KEY, arr);
  }
  return arr;
}

export function isLessonComplete(id) {
  return getCompletedLessons().includes(id);
}

export const NOTE_KEYS = {
  'double-bottom': 'notes-double-bottom',
  'double-top': 'notes-double-top',
  'bull-flag': 'notes-bull-flag',
  'bear-flag': 'notes-bear-flag',
  general: 'notes-general',
};
