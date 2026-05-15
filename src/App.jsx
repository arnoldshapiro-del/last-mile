import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import { NarratorBar } from './components/NarratorBar.jsx';
import Home from './pages/Home.jsx';
import Drill from './pages/Drill.jsx';
import TrendMasterClass from './pages/TrendMasterClass.jsx';
import BearFlag from './pages/BearFlag.jsx';
import BullFlag from './pages/BullFlag.jsx';
import DoubleTop from './pages/DoubleTop.jsx';
import DoubleBottom from './pages/DoubleBottom.jsx';
import Breakouts from './pages/Breakouts.jsx';
import OpeningRangeBreakout from './pages/OpeningRangeBreakout.jsx';
import InsideBar from './pages/InsideBar.jsx';
import VWAPRejection from './pages/VWAPRejection.jsx';
import PreSession from './pages/PreSession.jsx';
import InSession from './pages/InSession.jsx';
import Journal from './pages/Journal.jsx';
import Progress from './pages/Progress.jsx';
import MasteryLayout from './pages/mastery/MasteryLayout.jsx';
import MasteryOverview from './pages/mastery/MasteryOverview.jsx';
import PrinciplesPage from './pages/mastery/PrinciplesPage.jsx';
import CoreLessonsIndex from './pages/mastery/CoreLessonsIndex.jsx';
import CoreLessonPage from './pages/mastery/CoreLessonPage.jsx';
import ChecklistsPage from './pages/mastery/ChecklistsPage.jsx';
import DailyLessonsIndex from './pages/mastery/DailyLessonsIndex.jsx';
import DailyLessonPage from './pages/mastery/DailyLessonPage.jsx';
import AddLessonPage from './pages/mastery/AddLessonPage.jsx';
import MasteryDrill from './pages/mastery/MasteryDrill.jsx';
import MasteryLibrary from './pages/mastery/MasteryLibrary.jsx';
import MasteryProgress from './pages/mastery/MasteryProgress.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/trend-master-class" element={<TrendMasterClass />} />
        <Route path="/drill" element={<Drill />} />
        <Route path="/lab/bull-flag" element={<BullFlag />} />
        <Route path="/lab/bear-flag" element={<BearFlag />} />
        <Route path="/lab/double-top" element={<DoubleTop />} />
        <Route path="/lab/double-bottom" element={<DoubleBottom />} />
        <Route path="/lab/breakouts" element={<Breakouts />} />
        <Route path="/lab/opening-range-breakout" element={<OpeningRangeBreakout />} />
        <Route path="/lab/inside-bar" element={<InsideBar />} />
        <Route path="/lab/vwap-rejection" element={<VWAPRejection />} />
        <Route path="/protocol/pre-session" element={<PreSession />} />
        <Route path="/protocol/in-session" element={<InSession />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/progress" element={<Progress />} />
        {/* Old /qa routes redirect into /mastery — Drill / Library / Progress replaced them. */}
        <Route path="/qa" element={<Navigate to="/mastery/library" replace />} />
        <Route path="/qa/browse" element={<Navigate to="/mastery/library" replace />} />
        <Route path="/qa/review" element={<Navigate to="/mastery/drill" replace />} />
        <Route path="/qa/quiz" element={<Navigate to="/mastery/drill" replace />} />
        <Route path="/qa/add" element={<Navigate to="/mastery/library" replace />} />
        <Route path="/qa/progress" element={<Navigate to="/mastery/progress" replace />} />
        <Route path="/mastery" element={<MasteryLayout />}>
          <Route index element={<MasteryOverview />} />
          <Route path="principles" element={<PrinciplesPage />} />
          <Route path="lessons" element={<CoreLessonsIndex />} />
          <Route path="lesson/:lessonId" element={<CoreLessonPage />} />
          <Route path="checklists" element={<ChecklistsPage />} />
          <Route path="daily" element={<DailyLessonsIndex />} />
          <Route path="daily/:date" element={<DailyLessonPage />} />
          <Route path="add-lesson" element={<AddLessonPage />} />
          <Route path="drill" element={<MasteryDrill />} />
          <Route path="library" element={<MasteryLibrary />} />
          <Route path="progress" element={<MasteryProgress />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export function AppWithNarrator() {
  return (
    <>
      <App />
      <NarratorBar />
    </>
  );
}
