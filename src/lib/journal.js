// Trading Q&A Journal — Last Mile data layer (plain JS)
// Reads/writes the SAME journal_entries collection as the Bootcamp app.
import {
  collection, doc, addDoc, updateDoc, getDocs, query, orderBy,
  serverTimestamp, writeBatch
} from 'firebase/firestore';
import { db } from './firebase.js';

const COLLECTION = 'journal_entries';

export async function fetchAllEntries() {
  const q = query(collection(db, COLLECTION), orderBy('created_at', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function entriesForToday(all) {
  const t = todayISO();
  return all.filter(e => e.entry_date === t);
}

export async function addEntry(e) {
  const ref = await addDoc(collection(db, COLLECTION), { ...e, created_at: serverTimestamp() });
  return ref.id;
}

export async function addEntriesBatch(entries) {
  const batch = writeBatch(db);
  for (const e of entries) {
    const ref = doc(collection(db, COLLECTION));
    batch.set(ref, { ...e, created_at: serverTimestamp() });
  }
  await batch.commit();
  return entries.length;
}

export async function updateEntry(id, fields) {
  await updateDoc(doc(db, COLLECTION, id), fields);
}

export async function recordReview(id, confidence) {
  const all = await fetchAllEntries();
  const cur = all.find(x => x.id === id);
  await updateDoc(doc(db, COLLECTION, id), {
    confidence_rating: confidence,
    last_reviewed_at: serverTimestamp(),
    review_count: (cur?.review_count ?? 0) + 1
  });
}

export function srScore(e) {
  const conf = e.confidence_rating ?? 0;
  const confBoost = (5 - conf) * 12;
  let daysSince = 30;
  if (e.last_reviewed_at && typeof e.last_reviewed_at.toMillis === 'function') {
    const ms = Date.now() - e.last_reviewed_at.toMillis();
    daysSince = Math.min(60, ms / (1000 * 60 * 60 * 24));
  }
  const dayBoost = Math.min(40, daysSince * 5);
  const random = Math.random() * 15;
  return confBoost + dayBoost + random;
}

export function pickReviewEntry(all, excludeId) {
  const pool = all.filter(e => e.id !== excludeId);
  if (pool.length === 0) return null;
  const scored = pool.map(e => ({ e, s: srScore(e) }));
  scored.sort((a, b) => b.s - a.s);
  const top = scored.slice(0, Math.min(3, scored.length));
  return top[Math.floor(Math.random() * top.length)].e;
}

export function findDuplicates(newEntries, existing) {
  const dupes = new Set();
  newEntries.forEach((n, i) => {
    if (existing.some(e =>
      e.title.trim().toLowerCase() === n.title.trim().toLowerCase() &&
      e.entry_date === n.entry_date
    )) dupes.add(i);
  });
  return dupes;
}

export const REVIEW_BUTTONS = [
  { label: 'Forgot (Again)', value: 1, color: '#FF3D5A' },
  { label: 'Struggled (Hard)', value: 2, color: '#FFB44A' },
  { label: 'Knew it (Good)', value: 4, color: '#00D9A0' },
  { label: 'Got it ✓ (Easy)', value: 5, color: '#4A9EFF' }
];

export function entriesByWeek(all) {
  const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  return all.filter(e => e.created_at && typeof e.created_at.toMillis === 'function' && e.created_at.toMillis() >= weekAgo).length;
}

export function entriesByMonth(all) {
  const monthAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
  return all.filter(e => e.created_at && typeof e.created_at.toMillis === 'function' && e.created_at.toMillis() >= monthAgo).length;
}

export function masteryDistribution(all) {
  const buckets = [0, 0, 0, 0, 0, 0];
  for (const e of all) {
    const c = e.confidence_rating ?? 0;
    buckets[Math.max(0, Math.min(5, c))]++;
  }
  return [
    { name: 'Unrated', value: buckets[0] },
    { name: '1 — Forgot', value: buckets[1] },
    { name: '2 — Hard', value: buckets[2] },
    { name: '3 — OK', value: buckets[3] },
    { name: '4 — Good', value: buckets[4] },
    { name: '5 — Easy', value: buckets[5] }
  ];
}

export function topTagsByFrequency(all, limit = 10) {
  const counts = new Map();
  for (const e of all) {
    for (const t of (e.tags || [])) counts.set(t, (counts.get(t) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([name, value]) => ({ name, value }));
}

export function weakestTopics(all, limit = 5) {
  const sums = new Map();
  for (const e of all) {
    if (e.confidence_rating == null) continue;
    for (const t of (e.tags || [])) {
      const cur = sums.get(t) ?? { sum: 0, n: 0 };
      cur.sum += e.confidence_rating;
      cur.n += 1;
      sums.set(t, cur);
    }
  }
  return [...sums.entries()]
    .map(([tag, { sum, n }]) => ({ tag, avg: sum / n, count: n }))
    .filter(x => x.count >= 2)
    .sort((a, b) => a.avg - b.avg)
    .slice(0, limit);
}

export function reviewStreak(all) {
  const days = new Set();
  for (const e of all) {
    if (!e.last_reviewed_at || typeof e.last_reviewed_at.toDate !== 'function') continue;
    const d = e.last_reviewed_at.toDate();
    days.add(`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`);
  }
  let streak = 0;
  const today = new Date();
  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    if (days.has(key)) streak++;
    else if (i > 0) break;
  }
  return streak;
}

export function normalizeImported(raw) {
  const required = ['entry_date', 'title', 'question', 'answer'];
  for (const k of required) {
    if (!raw[k] || typeof raw[k] !== 'string') return { error: `Missing required field: ${k}` };
  }
  const dateStr = String(raw.entry_date);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return { error: `Invalid entry_date "${dateStr}" — must be YYYY-MM-DD` };

  const tags = Array.isArray(raw.tags) ? raw.tags.filter(t => typeof t === 'string') : [];
  const allowedEntryTypes = ['asked', 'observed', 'mistake', 'insight'];
  const entry_type = (typeof raw.entry_type === 'string' && allowedEntryTypes.includes(raw.entry_type)) ? raw.entry_type : 'asked';

  return {
    entry_date: dateStr,
    title: String(raw.title),
    context: typeof raw.context === 'string' ? raw.context : '',
    question: String(raw.question),
    answer: String(raw.answer),
    key_takeaways: typeof raw.key_takeaways === 'string' ? raw.key_takeaways : '',
    tags,
    pattern_type: typeof raw.pattern_type === 'string' ? raw.pattern_type : null,
    instrument: typeof raw.instrument === 'string' ? raw.instrument : null,
    time_of_day: typeof raw.time_of_day === 'string' ? raw.time_of_day : null,
    screenshot_url: typeof raw.screenshot_url === 'string' ? raw.screenshot_url : null,
    confidence_rating: null,
    last_reviewed_at: null,
    review_count: 0,
    uni_bootcamp_link: typeof raw.uni_bootcamp_link === 'string' ? raw.uni_bootcamp_link : null,
    did_apply_correctly: typeof raw.did_apply_correctly === 'string' ? raw.did_apply_correctly : null,
    entry_type
  };
}
