// Real-time Firestore subscription for dailyLessons.
// Falls back to local seed lessons when Firestore is empty or unreachable.

import { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../lib/firebase.js';
import { dailyLessons as seedLessons } from './dailyLessons.js';

// Permissive normalizer — preserves new optional fields (subtitle,
// tradesReview, qaCards, closingThought) and accepts either string or
// string[] for whatIllDoDifferently. The renderer guards every field.
export function normalizeLesson(raw) {
  const charts = raw.chartReferences || raw.charts || [];
  const wid = raw.whatIllDoDifferently;
  return {
    date: String(raw.date || ''),
    title: String(raw.title || ''),
    subtitle: typeof raw.subtitle === 'string' ? raw.subtitle : undefined,
    sessionSummary: String(raw.sessionSummary || ''),
    teachingUnits: Array.isArray(raw.teachingUnits) ? raw.teachingUnits : [],
    chartReferences: Array.isArray(charts) ? charts : [],
    keyRules: Array.isArray(raw.keyRules) ? raw.keyRules : [],
    principlesReinforced: Array.isArray(raw.principlesReinforced) ? raw.principlesReinforced : [],
    whatIllDoDifferently:
      typeof wid === 'string' ? wid : Array.isArray(wid) ? wid : '',
    tradesReview: Array.isArray(raw.tradesReview) ? raw.tradesReview : undefined,
    qaCards: Array.isArray(raw.qaCards) ? raw.qaCards : undefined,
    closingThought: typeof raw.closingThought === 'string' ? raw.closingThought : undefined,
  };
}

export function useDailyLessons() {
  const [state, setState] = useState({
    lessons: seedLessons,
    loading: true,
    error: null,
    source: 'seed',
  });

  useEffect(() => {
    const q = query(collection(db, 'dailyLessons'), orderBy('date', 'desc'));
    const unsub = onSnapshot(
      q,
      snap => {
        if (snap.empty) {
          setState({ lessons: seedLessons, loading: false, error: null, source: 'seed' });
          return;
        }
        const docs = snap.docs.map(d => normalizeLesson(d.data()));
        setState({ lessons: docs, loading: false, error: null, source: 'firestore' });
      },
      err => {
        setState({ lessons: seedLessons, loading: false, error: err.message, source: 'seed' });
      }
    );
    return () => unsub();
  }, []);

  return state;
}

export function findLesson(lessons, date) {
  return lessons.find(l => l.date === date);
}
