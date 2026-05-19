// Embedded "Arnie's Second Signal" — full standalone experience, scoped to /second-signal/*.
// Mounted by the host (Last Mile) outside its Layout so the experience is full-bleed.
// Routes are RELATIVE to the parent /second-signal/* path declared in the host's App.
import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import StartHere from './pages/StartHere.jsx';
import DefendedVsFailed from './pages/DefendedVsFailed.jsx';
import FourPatterns from './pages/FourPatterns.jsx';
import PatternDetail from './pages/PatternDetail.jsx';
import PracticeMode from './pages/PracticeMode.jsx';
import MyNotes from './pages/MyNotes.jsx';
import './second-signal.css';

// Level 3 lazy-loaded so it doesn't bloat the host bundle.
const Level3 = lazy(() => import('./pages/Level3.jsx'));

export default function SecondSignalApp() {
  return (
    <div className="ss-root">
      <Nav>
        <Routes>
          <Route index element={<StartHere />} />
          <Route path="defended" element={<DefendedVsFailed />} />
          <Route path="patterns" element={<FourPatterns />} />
          <Route path="patterns/:slug" element={<PatternDetail />} />
          <Route path="practice" element={<PracticeMode />} />
          <Route
            path="advanced"
            element={
              <Suspense fallback={<div className="mono text-text-muted">Loading…</div>}>
                <Level3 />
              </Suspense>
            }
          />
          <Route path="notes" element={<MyNotes />} />
          <Route path="*" element={<Navigate to="" replace />} />
        </Routes>
      </Nav>
    </div>
  );
}
