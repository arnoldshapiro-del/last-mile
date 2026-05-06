import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Drill from './pages/Drill.jsx';
import BearFlag from './pages/BearFlag.jsx';
import BullFlag from './pages/BullFlag.jsx';
import DoubleTop from './pages/DoubleTop.jsx';
import DoubleBottom from './pages/DoubleBottom.jsx';
import Breakouts from './pages/Breakouts.jsx';
import OpeningRangeBreakout from './pages/OpeningRangeBreakout.jsx';
import InsideBar from './pages/InsideBar.jsx';
import PreSession from './pages/PreSession.jsx';
import InSession from './pages/InSession.jsx';
import Journal from './pages/Journal.jsx';
import Progress from './pages/Progress.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/drill" element={<Drill />} />
        <Route path="/lab/bull-flag" element={<BullFlag />} />
        <Route path="/lab/bear-flag" element={<BearFlag />} />
        <Route path="/lab/double-top" element={<DoubleTop />} />
        <Route path="/lab/double-bottom" element={<DoubleBottom />} />
        <Route path="/lab/breakouts" element={<Breakouts />} />
        <Route path="/lab/opening-range-breakout" element={<OpeningRangeBreakout />} />
        <Route path="/lab/inside-bar" element={<InsideBar />} />
        <Route path="/protocol/pre-session" element={<PreSession />} />
        <Route path="/protocol/in-session" element={<InSession />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
