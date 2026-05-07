// Real-time Firestore subscription for dailyLessons.
// Falls back to local seed lessons when Firestore is empty or unreachable.

import { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../lib/firebase.js';
import { dailyLessons as seedLessons } from './dailyLessons.js';

export function normalizeLesson(raw) {
  const charts = raw.chartReferences || raw.charts || [];
  return {
    date: String(raw.date || ''),
    title: String(raw.title || ''),
    sessionSummary: String(raw.sessionSummary || ''),
    teachingUnits: raw.teachingUnits || [],
    chartReferences: charts,
    keyRules: raw.keyRules || [],
    principlesReinforced: raw.principlesReinforced || [],
    whatIllDoDifferently: String(raw.whatIllDoDifferently || ''),
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
