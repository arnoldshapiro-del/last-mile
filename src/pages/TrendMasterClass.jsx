import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/* ============================================================
   THE TREND MASTER CLASS — Last Mile edition (blue palette)
   The 15-min decides DIRECTION. The 5-min decides TIMING.
   ============================================================ */

const GREEN = '#00D9A0';
const RED = '#FF3D5A';
const BLUE = '#4A9EFF';
const BLUE_LIGHT = '#7AB8FF';
const AMBER = '#FFB44A';
const SLATE = '#888888';
const SLATE_LIGHT = '#a8b3c7';
const LEVEL_LINE = 'rgba(74, 158, 255, 0.55)';

function Candle({ x, bodyTop, bodyBottom, wickTop, wickBottom, bullish, w = 12 }) {
  const color = bullish ? GREEN : RED;
  return (
    <g>
      <line x1={x} y1={wickTop} x2={x} y2={wickBottom} stroke={color} strokeWidth={1.5} />
      <rect
        x={x - w / 2}
        y={bodyTop}
        width={w}
        height={Math.max(2, bodyBottom - bodyTop)}
        fill={color}
        rx={1}
      />
    </g>
  );
}

function LevelLine({ y, x1 = 8, x2 = 392, label, side = 'right', dashed = true, color = LEVEL_LINE }) {
  return (
    <g>
      <line
        x1={x1}
        y1={y}
        x2={x2}
        y2={y}
        stroke={color}
        strokeWidth={1.25}
        strokeDasharray={dashed ? '5 4' : undefined}
      />
      {label ? (
        <text
          x={side === 'right' ? x2 - 4 : x1 + 4}
          y={y - 4}
          fontSize={10}
          fill={color}
          textAnchor={side === 'right' ? 'end' : 'start'}
          fontFamily="'Space Mono', monospace"
        >
          {label}
        </text>
      ) : null}
    </g>
  );
}

function State1UptrendSVG() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-auto" role="img" aria-label="Clean uptrend">
      <rect x={0} y={0} width={400} height={200} fill="transparent" />
      <LevelLine y={158} label="HL #1" />
      <LevelLine y={130} label="HL #2" />
      <LevelLine y={92} label="HH #1" />
      <LevelLine y={60} label="HH #2" />
      <Candle x={50}  bodyTop={140} bodyBottom={170} wickTop={132} wickBottom={178} bullish />
      <Candle x={110} bodyTop={130} bodyBottom={158} wickTop={122} wickBottom={162} bullish={false} />
      <Candle x={170} bodyTop={92}  bodyBottom={140} wickTop={84}  wickBottom={146} bullish />
      <Candle x={230} bodyTop={92}  bodyBottom={120} wickTop={86}  wickBottom={130} bullish={false} />
      <Candle x={290} bodyTop={60}  bodyBottom={108} wickTop={50}  wickBottom={114} bullish />
      <Candle x={350} bodyTop={48}  bodyBottom={80}  wickTop={42}  wickBottom={88}  bullish />
      <text x={200} y={195} fontSize={11} fill={GREEN} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>
        ▲ HIGHER HIGHS + HIGHER LOWS
      </text>
    </svg>
  );
}

function State2HaltedSVG() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-auto" role="img" aria-label="Uptrend halted">
      <rect x={0} y={0} width={400} height={200} fill="transparent" />
      <LevelLine y={56} label="Prior HH" color="rgba(168,179,199,0.5)" />
      <LevelLine y={88} label="Lower High ⚠" color={AMBER} />
      <LevelLine y={160} label="Prior swing low — INTACT" color={BLUE} />
      <Candle x={40}  bodyTop={130} bodyBottom={160} wickTop={120} wickBottom={166} bullish />
      <Candle x={90}  bodyTop={80}  bodyBottom={130} wickTop={70}  wickBottom={136} bullish />
      <Candle x={140} bodyTop={56}  bodyBottom={88}  wickTop={48}  wickBottom={94}  bullish />
      <Candle x={190} bodyTop={88}  bodyBottom={120} wickTop={82}  wickBottom={128} bullish={false} />
      <Candle x={240} bodyTop={88}  bodyBottom={110} wickTop={78}  wickBottom={116} bullish />
      <Candle x={290} bodyTop={108} bodyBottom={138} wickTop={100} wickBottom={144} bullish={false} />
      <Candle x={340} bodyTop={130} bodyBottom={152} wickTop={122} wickBottom={158} bullish={false} />
      <text x={200} y={195} fontSize={11} fill={AMBER} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>
        ⚠ ONE WARNING — WAIT FOR CONFIRMATION
      </text>
    </svg>
  );
}

function State3ChopSVG() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-auto" role="img" aria-label="Chop">
      <rect x={0} y={0} width={400} height={220} fill="transparent" />
      <g>
        <line x1={10} y1={30}  x2={120} y2={70}  stroke={AMBER} strokeWidth={1.25} strokeDasharray="4 3" />
        <line x1={10} y1={100} x2={120} y2={70}  stroke={AMBER} strokeWidth={1.25} strokeDasharray="4 3" />
        <Candle x={25}  bodyTop={40} bodyBottom={85} wickTop={34} wickBottom={92}  bullish />
        <Candle x={50}  bodyTop={55} bodyBottom={75} wickTop={48} wickBottom={84}  bullish={false} />
        <Candle x={75}  bodyTop={52} bodyBottom={72} wickTop={46} wickBottom={78}  bullish />
        <Candle x={100} bodyTop={62} bodyBottom={72} wickTop={58} wickBottom={76}  bullish={false} />
        <text x={65} y={115} fontSize={10} fill={SLATE_LIGHT} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={600}>Triangle / Coil</text>
      </g>
      <g>
        <line x1={150} y1={70}  x2={260} y2={30}  stroke={AMBER} strokeWidth={1.25} strokeDasharray="4 3" />
        <line x1={150} y1={70}  x2={260} y2={110} stroke={AMBER} strokeWidth={1.25} strokeDasharray="4 3" />
        <Candle x={170} bodyTop={62} bodyBottom={75} wickTop={56} wickBottom={80} bullish />
        <Candle x={195} bodyTop={50} bodyBottom={80} wickTop={42} wickBottom={86} bullish={false} />
        <Candle x={220} bodyTop={42} bodyBottom={88} wickTop={36} wickBottom={94} bullish />
        <Candle x={245} bodyTop={40} bodyBottom={95} wickTop={34} wickBottom={104} bullish={false} />
        <text x={205} y={125} fontSize={10} fill={SLATE_LIGHT} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={600}>Expanding Range</text>
      </g>
      <g>
        <line x1={280} y1={45}  x2={390} y2={45}  stroke={AMBER} strokeWidth={1.25} strokeDasharray="4 3" />
        <line x1={280} y1={100} x2={390} y2={100} stroke={AMBER} strokeWidth={1.25} strokeDasharray="4 3" />
        <Candle x={300} bodyTop={55} bodyBottom={88} wickTop={48} wickBottom={96}  bullish />
        <Candle x={325} bodyTop={58} bodyBottom={92} wickTop={50} wickBottom={98}  bullish={false} />
        <Candle x={350} bodyTop={56} bodyBottom={90} wickTop={48} wickBottom={96}  bullish />
        <Candle x={375} bodyTop={60} bodyBottom={88} wickTop={52} wickBottom={94}  bullish={false} />
        <text x={335} y={115} fontSize={10} fill={SLATE_LIGHT} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={600}>Rectangle</text>
      </g>
      <text x={200} y={205} fontSize={11} fill={AMBER} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>
        ⚠ STAND ASIDE — NO TREND TO TRADE
      </text>
    </svg>
  );
}

function State4HaltedSVG() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-auto" role="img" aria-label="Downtrend halted">
      <rect x={0} y={0} width={400} height={200} fill="transparent" />
      <LevelLine y={40} label="Prior swing high — INTACT" color={BLUE} />
      <LevelLine y={108} label="Higher Low ⚠" color={AMBER} />
      <LevelLine y={150} label="Prior LL" color="rgba(168,179,199,0.5)" />
      <Candle x={40}  bodyTop={50}  bodyBottom={80}  wickTop={44}  wickBottom={86}  bullish={false} />
      <Candle x={90}  bodyTop={80}  bodyBottom={120} wickTop={74}  wickBottom={128} bullish={false} />
      <Candle x={140} bodyTop={120} bodyBottom={150} wickTop={114} wickBottom={158} bullish={false} />
      <Candle x={190} bodyTop={88}  bodyBottom={118} wickTop={82}  wickBottom={124} bullish />
      <Candle x={240} bodyTop={108} bodyBottom={130} wickTop={100} wickBottom={138} bullish={false} />
      <Candle x={290} bodyTop={90}  bodyBottom={118} wickTop={84}  wickBottom={122} bullish />
      <Candle x={340} bodyTop={70}  bodyBottom={100} wickTop={64}  wickBottom={106} bullish />
      <text x={200} y={195} fontSize={11} fill={AMBER} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>
        ⚠ ONE WARNING — WAIT FOR CONFIRMATION
      </text>
    </svg>
  );
}

function State5DowntrendSVG() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-auto" role="img" aria-label="Clean downtrend">
      <rect x={0} y={0} width={400} height={200} fill="transparent" />
      <LevelLine y={42}  label="LH #1" />
      <LevelLine y={74}  label="LH #2" />
      <LevelLine y={112} label="LL #1" />
      <LevelLine y={148} label="LL #2" />
      <Candle x={50}  bodyTop={30}  bodyBottom={64}  wickTop={24}  wickBottom={72}  bullish={false} />
      <Candle x={110} bodyTop={42}  bodyBottom={74}  wickTop={36}  wickBottom={82}  bullish />
      <Candle x={170} bodyTop={74}  bodyBottom={112} wickTop={68}  wickBottom={120} bullish={false} />
      <Candle x={230} bodyTop={92}  bodyBottom={112} wickTop={86}  wickBottom={120} bullish />
      <Candle x={290} bodyTop={112} bodyBottom={148} wickTop={104} wickBottom={156} bullish={false} />
      <Candle x={350} bodyTop={132} bodyBottom={170} wickTop={122} wickBottom={176} bullish={false} />
      <text x={200} y={195} fontSize={11} fill={RED} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>
        ▼ LOWER HIGHS + LOWER LOWS
      </text>
    </svg>
  );
}

function ScenarioASVG() {
  return (
    <svg viewBox="0 0 600 280" className="w-full h-auto" role="img" aria-label="15-min uptrend with 5-min pullback">
      <rect x={0} y={0} width={600} height={280} fill="transparent" />
      <text x={12} y={18} fontSize={11} fill={BLUE_LIGHT} fontFamily="'Oxanium', sans-serif" fontWeight={700}>15-MIN — STATE 1 (UPTREND)</text>
      <rect x={210} y={70} width={140} height={120} fill="rgba(74,158,255,0.07)" stroke={BLUE} strokeWidth={1} strokeDasharray="3 3" rx={4} />
      <text x={280} y={86} fontSize={9} fill={BLUE_LIGHT} fontFamily="'Oxanium', sans-serif" fontWeight={700} textAnchor="middle">PULLBACK ZONE</text>
      <line x1={10} y1={130} x2={380} y2={130} stroke={BLUE} strokeWidth={1.25} strokeDasharray="5 4" />
      <text x={376} y={126} fontSize={10} fill={BLUE_LIGHT} textAnchor="end" fontFamily="'Space Mono', monospace">8500 swing low</text>
      <line x1={10} y1={70} x2={380} y2={70} stroke={BLUE_LIGHT} strokeWidth={1} strokeDasharray="2 3" opacity={0.55} />
      <text x={376} y={66} fontSize={10} fill={BLUE_LIGHT} textAnchor="end" fontFamily="'Space Mono', monospace">8540 current</text>
      <Candle x={30}  bodyTop={200} bodyBottom={230} wickTop={194} wickBottom={236} bullish />
      <Candle x={65}  bodyTop={170} bodyBottom={210} wickTop={164} wickBottom={216} bullish />
      <Candle x={100} bodyTop={155} bodyBottom={180} wickTop={148} wickBottom={186} bullish={false} />
      <Candle x={135} bodyTop={130} bodyBottom={170} wickTop={122} wickBottom={176} bullish />
      <Candle x={170} bodyTop={92}  bodyBottom={130} wickTop={86}  wickBottom={140} bullish />
      <Candle x={205} bodyTop={72}  bodyBottom={102} wickTop={66}  wickBottom={108} bullish />
      <Candle x={240} bodyTop={88}  bodyBottom={108} wickTop={82}  wickBottom={116} bullish={false} />
      <Candle x={275} bodyTop={100} bodyBottom={120} wickTop={92}  wickBottom={128} bullish={false} />
      <Candle x={310} bodyTop={114} bodyBottom={128} wickTop={106} wickBottom={134} bullish={false} />
      <Candle x={345} bodyTop={120} bodyBottom={138} wickTop={114} wickBottom={144} bullish={false} />
      <line x1={400} y1={10} x2={400} y2={270} stroke="rgba(168,179,199,0.25)" strokeWidth={1} strokeDasharray="3 3" />
      <text x={420} y={18} fontSize={11} fill={RED} fontFamily="'Oxanium', sans-serif" fontWeight={700}>5-MIN — LOOKS LIKE A DOWNTREND</text>
      <text x={420} y={32} fontSize={9} fill={SLATE_LIGHT} fontFamily="'Oxanium', sans-serif">(this IS the 15-min's pullback)</text>
      <line x1={410} y1={195} x2={590} y2={195} stroke={BLUE} strokeWidth={1.25} strokeDasharray="5 4" />
      <text x={586} y={191} fontSize={10} fill={BLUE_LIGHT} textAnchor="end" fontFamily="'Space Mono', monospace">8500 — line in the sand</text>
      <Candle x={425} bodyTop={50}  bodyBottom={75}  wickTop={44}  wickBottom={82}  bullish={false} />
      <Candle x={455} bodyTop={70}  bodyBottom={108} wickTop={64}  wickBottom={116} bullish={false} />
      <Candle x={485} bodyTop={100} bodyBottom={132} wickTop={94}  wickBottom={140} bullish={false} />
      <Candle x={515} bodyTop={132} bodyBottom={170} wickTop={126} wickBottom={178} bullish={false} />
      <Candle x={545} bodyTop={158} bodyBottom={194} wickTop={150} wickBottom={202} bullish={false} />
      <Candle x={575} bodyTop={148} bodyBottom={194} wickTop={142} wickBottom={200} bullish w={14} />
      <text x={575} y={222} fontSize={9} fill={GREEN} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>BULLISH</text>
      <text x={575} y={234} fontSize={9} fill={GREEN} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>ENGULFING</text>
      <text x={575} y={246} fontSize={9} fill={GREEN} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>= LONG</text>
      <text x={500} y={270} fontSize={11} fill={BLUE_LIGHT} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>
        5-min downtrend = the 15-min's pullback = your long setup
      </text>
    </svg>
  );
}

function ScenarioBSVG() {
  return (
    <svg viewBox="0 0 600 280" className="w-full h-auto" role="img" aria-label="15-min downtrend with 5-min bounce">
      <rect x={0} y={0} width={600} height={280} fill="transparent" />
      <text x={12} y={18} fontSize={11} fill={RED} fontFamily="'Oxanium', sans-serif" fontWeight={700}>15-MIN — STATE 5 (DOWNTREND)</text>
      <rect x={210} y={68} width={140} height={120} fill="rgba(255,61,90,0.06)" stroke={RED} strokeWidth={1} strokeDasharray="3 3" rx={4} />
      <text x={280} y={84} fontSize={9} fill={RED} fontFamily="'Oxanium', sans-serif" fontWeight={700} textAnchor="middle">BOUNCE ZONE</text>
      <line x1={10} y1={108} x2={380} y2={108} stroke={RED} strokeWidth={1.25} strokeDasharray="5 4" />
      <text x={376} y={104} fontSize={10} fill="#ff8095" textAnchor="end" fontFamily="'Space Mono', monospace">8500 swing high</text>
      <line x1={10} y1={180} x2={380} y2={180} stroke="rgba(168,179,199,0.55)" strokeWidth={1} strokeDasharray="2 3" />
      <text x={376} y={176} fontSize={10} fill={SLATE_LIGHT} textAnchor="end" fontFamily="'Space Mono', monospace">8460 current</text>
      <Candle x={30}  bodyTop={32}  bodyBottom={60}  wickTop={26}  wickBottom={68}  bullish={false} />
      <Candle x={65}  bodyTop={50}  bodyBottom={88}  wickTop={42}  wickBottom={94}  bullish={false} />
      <Candle x={100} bodyTop={80}  bodyBottom={108} wickTop={72}  wickBottom={114} bullish />
      <Candle x={135} bodyTop={100} bodyBottom={132} wickTop={94}  wickBottom={142} bullish={false} />
      <Candle x={170} bodyTop={132} bodyBottom={170} wickTop={124} wickBottom={178} bullish={false} />
      <Candle x={205} bodyTop={148} bodyBottom={188} wickTop={142} wickBottom={196} bullish={false} />
      <Candle x={240} bodyTop={132} bodyBottom={160} wickTop={126} wickBottom={166} bullish />
      <Candle x={275} bodyTop={120} bodyBottom={142} wickTop={114} wickBottom={150} bullish />
      <Candle x={310} bodyTop={108} bodyBottom={132} wickTop={102} wickBottom={140} bullish />
      <Candle x={345} bodyTop={108} bodyBottom={122} wickTop={102} wickBottom={130} bullish />
      <line x1={400} y1={10} x2={400} y2={270} stroke="rgba(168,179,199,0.25)" strokeWidth={1} strokeDasharray="3 3" />
      <text x={420} y={18} fontSize={11} fill={GREEN} fontFamily="'Oxanium', sans-serif" fontWeight={700}>5-MIN — LOOKS LIKE AN UPTREND</text>
      <text x={420} y={32} fontSize={9} fill={SLATE_LIGHT} fontFamily="'Oxanium', sans-serif">(this IS the 15-min's bounce)</text>
      <line x1={410} y1={70} x2={590} y2={70} stroke={RED} strokeWidth={1.25} strokeDasharray="5 4" />
      <text x={586} y={66} fontSize={10} fill="#ff8095" textAnchor="end" fontFamily="'Space Mono', monospace">8500 — line in the sand</text>
      <Candle x={425} bodyTop={180} bodyBottom={210} wickTop={172} wickBottom={216} bullish />
      <Candle x={455} bodyTop={150} bodyBottom={188} wickTop={144} wickBottom={194} bullish />
      <Candle x={485} bodyTop={120} bodyBottom={158} wickTop={114} wickBottom={166} bullish />
      <Candle x={515} bodyTop={92}  bodyBottom={128} wickTop={86}  wickBottom={136} bullish />
      <Candle x={545} bodyTop={74}  bodyBottom={102} wickTop={68}  wickBottom={108} bullish />
      <Candle x={575} bodyTop={70}  bodyBottom={114} wickTop={64}  wickBottom={120} bullish={false} w={14} />
      <text x={575} y={138} fontSize={9} fill={RED} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>BEARISH</text>
      <text x={575} y={150} fontSize={9} fill={RED} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>ENGULFING</text>
      <text x={575} y={162} fontSize={9} fill={RED} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>= SHORT</text>
      <text x={500} y={270} fontSize={11} fill="#ff8095" textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>
        5-min uptrend = the 15-min's bounce = your short setup
      </text>
    </svg>
  );
}

function RW1_LowerHigh() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-auto">
      <line x1={6} y1={108} x2={274} y2={108} stroke={BLUE} strokeDasharray="4 3" strokeWidth={1.25} />
      <text x={270} y={104} fontSize={9} fill={BLUE_LIGHT} textAnchor="end" fontFamily="'Space Mono', monospace">prior swing low — INTACT</text>
      <line x1={6} y1={42} x2={274} y2={42} stroke="rgba(168,179,199,0.55)" strokeDasharray="2 3" strokeWidth={1} />
      <text x={270} y={38} fontSize={9} fill={SLATE_LIGHT} textAnchor="end" fontFamily="'Space Mono', monospace">prior HH</text>
      <line x1={6} y1={62} x2={274} y2={62} stroke={AMBER} strokeDasharray="3 3" strokeWidth={1.25} />
      <text x={270} y={58} fontSize={9} fill={AMBER} textAnchor="end" fontFamily="'Space Mono', monospace">Lower High ⚠</text>
      <Candle x={30}  bodyTop={80} bodyBottom={106} wickTop={74} wickBottom={112} bullish />
      <Candle x={60}  bodyTop={56} bodyBottom={92}  wickTop={50} wickBottom={98}  bullish />
      <Candle x={90}  bodyTop={42} bodyBottom={70}  wickTop={36} wickBottom={76}  bullish />
      <Candle x={120} bodyTop={62} bodyBottom={92}  wickTop={56} wickBottom={98}  bullish={false} />
      <Candle x={150} bodyTop={62} bodyBottom={80}  wickTop={56} wickBottom={86}  bullish />
      <Candle x={180} bodyTop={78} bodyBottom={98}  wickTop={72} wickBottom={104} bullish={false} />
      <Candle x={210} bodyTop={90} bodyBottom={104} wickTop={82} wickBottom={108} bullish={false} />
      <Candle x={240} bodyTop={88} bodyBottom={104} wickTop={82} wickBottom={108} bullish={false} />
    </svg>
  );
}

function RW2_WickThroughLow() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-auto">
      <line x1={6} y1={84} x2={274} y2={84} stroke={BLUE} strokeDasharray="4 3" strokeWidth={1.25} />
      <text x={270} y={80} fontSize={9} fill={BLUE_LIGHT} textAnchor="end" fontFamily="'Space Mono', monospace">8500 swing low</text>
      <Candle x={40}  bodyTop={42}  bodyBottom={70}  wickTop={36}  wickBottom={76}  bullish={false} />
      <Candle x={80}  bodyTop={62}  bodyBottom={84}  wickTop={56}  wickBottom={94}  bullish={false} />
      <Candle x={120} bodyTop={70}  bodyBottom={84}  wickTop={64}  wickBottom={92}  bullish={false} />
      <Candle x={170} bodyTop={68}  bodyBottom={82}  wickTop={60}  wickBottom={120} bullish w={14} />
      <text x={170} y={132} fontSize={9} fill={GREEN} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>wick only — body held</text>
      <Candle x={220} bodyTop={56}  bodyBottom={72}  wickTop={50}  wickBottom={78}  bullish />
      <Candle x={252} bodyTop={42}  bodyBottom={60}  wickTop={36}  wickBottom={68}  bullish />
    </svg>
  );
}

function RW3_EngulfingThreeContexts() {
  return (
    <svg viewBox="0 0 360 160" className="w-full h-auto">
      <line x1={120} y1={8} x2={120} y2={152} stroke="rgba(168,179,199,0.25)" strokeDasharray="2 3" />
      <line x1={240} y1={8} x2={240} y2={152} stroke="rgba(168,179,199,0.25)" strokeDasharray="2 3" />
      <text x={60} y={18} fontSize={9} fill={GREEN} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>UPTREND + SUPPORT</text>
      <line x1={10} y1={110} x2={115} y2={110} stroke={BLUE} strokeDasharray="3 3" strokeWidth={1} />
      <Candle x={28}  bodyTop={50}  bodyBottom={80}  wickTop={44}  wickBottom={86}  bullish />
      <Candle x={50}  bodyTop={70}  bodyBottom={95}  wickTop={62}  wickBottom={100} bullish={false} />
      <Candle x={72}  bodyTop={92}  bodyBottom={108} wickTop={86}  wickBottom={114} bullish={false} />
      <Candle x={94}  bodyTop={64}  bodyBottom={108} wickTop={58}  wickBottom={114} bullish w={12} />
      <text x={60} y={146} fontSize={9} fill={GREEN} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>✓ HIGH-QUALITY LONG</text>
      <text x={180} y={18} fontSize={9} fill={RED} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>DOWNTREND MID</text>
      <Candle x={140} bodyTop={32}  bodyBottom={56}  wickTop={26}  wickBottom={62}  bullish={false} />
      <Candle x={162} bodyTop={48}  bodyBottom={78}  wickTop={42}  wickBottom={84}  bullish={false} />
      <Candle x={184} bodyTop={70}  bodyBottom={88}  wickTop={64}  wickBottom={94}  bullish={false} />
      <Candle x={210} bodyTop={56}  bodyBottom={92}  wickTop={50}  wickBottom={98}  bullish w={12} />
      <text x={180} y={146} fontSize={9} fill={RED} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>✗ JUST A BOUNCE</text>
      <text x={300} y={18} fontSize={9} fill={AMBER} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>CHOP</text>
      <line x1={246} y1={50}  x2={355} y2={50}  stroke={AMBER} strokeDasharray="3 3" strokeWidth={1} />
      <line x1={246} y1={108} x2={355} y2={108} stroke={AMBER} strokeDasharray="3 3" strokeWidth={1} />
      <Candle x={260} bodyTop={62}  bodyBottom={88}  wickTop={56}  wickBottom={94}  bullish={false} />
      <Candle x={282} bodyTop={70}  bodyBottom={92}  wickTop={64}  wickBottom={98}  bullish />
      <Candle x={304} bodyTop={66}  bodyBottom={88}  wickTop={60}  wickBottom={94}  bullish={false} />
      <Candle x={330} bodyTop={62}  bodyBottom={94}  wickTop={56}  wickBottom={100} bullish w={12} />
      <text x={300} y={146} fontSize={9} fill={AMBER} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>✗ NOISE — SKIP</text>
    </svg>
  );
}

function RW4_MTFDisagreementUp() {
  return (
    <svg viewBox="0 0 360 160" className="w-full h-auto">
      <line x1={180} y1={8} x2={180} y2={152} stroke="rgba(168,179,199,0.25)" strokeDasharray="2 3" />
      <text x={90}  y={18} fontSize={9} fill={BLUE_LIGHT} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>15-MIN UPTREND</text>
      <text x={270} y={18} fontSize={9} fill={RED} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>5-MIN DOWNTREND</text>
      <line x1={10} y1={108} x2={175} y2={108} stroke={BLUE} strokeDasharray="3 3" strokeWidth={1} />
      <rect x={120} y={50} width={55} height={70} fill="rgba(74,158,255,0.07)" stroke={BLUE} strokeDasharray="2 2" rx={2} />
      <Candle x={28}  bodyTop={92}  bodyBottom={120} wickTop={86}  wickBottom={126} bullish />
      <Candle x={52}  bodyTop={72}  bodyBottom={100} wickTop={66}  wickBottom={108} bullish />
      <Candle x={76}  bodyTop={50}  bodyBottom={80}  wickTop={44}  wickBottom={88}  bullish />
      <Candle x={100} bodyTop={40}  bodyBottom={68}  wickTop={34}  wickBottom={76}  bullish />
      <Candle x={124} bodyTop={56}  bodyBottom={78}  wickTop={50}  wickBottom={84}  bullish={false} />
      <Candle x={148} bodyTop={72}  bodyBottom={92}  wickTop={66}  wickBottom={100} bullish={false} />
      <Candle x={172} bodyTop={88}  bodyBottom={106} wickTop={82}  wickBottom={114} bullish={false} />
      <line x1={190} y1={108} x2={350} y2={108} stroke={BLUE} strokeDasharray="3 3" strokeWidth={1} />
      <text x={345} y={104} fontSize={8} fill={BLUE_LIGHT} textAnchor="end" fontFamily="'Space Mono', monospace">15-min support</text>
      <Candle x={210} bodyTop={36}  bodyBottom={56}  wickTop={30}  wickBottom={62}  bullish={false} />
      <Candle x={232} bodyTop={50}  bodyBottom={76}  wickTop={44}  wickBottom={82}  bullish={false} />
      <Candle x={254} bodyTop={68}  bodyBottom={92}  wickTop={62}  wickBottom={98}  bullish={false} />
      <Candle x={276} bodyTop={84}  bodyBottom={104} wickTop={78}  wickBottom={112} bullish={false} />
      <Candle x={300} bodyTop={66}  bodyBottom={104} wickTop={60}  wickBottom={110} bullish w={14} />
      <text x={300} y={130} fontSize={9} fill={GREEN} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>LONG</text>
      <text x={300} y={144} fontSize={9} fill={GREEN} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>setup</text>
    </svg>
  );
}

function RW5_MTFDisagreementDown() {
  return (
    <svg viewBox="0 0 360 160" className="w-full h-auto">
      <line x1={180} y1={8} x2={180} y2={152} stroke="rgba(168,179,199,0.25)" strokeDasharray="2 3" />
      <text x={90}  y={18} fontSize={9} fill={RED} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>15-MIN DOWNTREND</text>
      <text x={270} y={18} fontSize={9} fill={GREEN} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>5-MIN UPTREND</text>
      <line x1={10} y1={50} x2={175} y2={50} stroke={RED} strokeDasharray="3 3" strokeWidth={1} />
      <rect x={120} y={48} width={55} height={70} fill="rgba(255,61,90,0.06)" stroke={RED} strokeDasharray="2 2" rx={2} />
      <Candle x={28}  bodyTop={36}  bodyBottom={64}  wickTop={30}  wickBottom={70}  bullish={false} />
      <Candle x={52}  bodyTop={56}  bodyBottom={88}  wickTop={50}  wickBottom={94}  bullish={false} />
      <Candle x={76}  bodyTop={80}  bodyBottom={108} wickTop={74}  wickBottom={114} bullish={false} />
      <Candle x={100} bodyTop={92}  bodyBottom={120} wickTop={86}  wickBottom={126} bullish={false} />
      <Candle x={124} bodyTop={82}  bodyBottom={102} wickTop={76}  wickBottom={108} bullish />
      <Candle x={148} bodyTop={68}  bodyBottom={88}  wickTop={62}  wickBottom={94}  bullish />
      <Candle x={172} bodyTop={54}  bodyBottom={72}  wickTop={48}  wickBottom={80}  bullish />
      <line x1={190} y1={50} x2={350} y2={50} stroke={RED} strokeDasharray="3 3" strokeWidth={1} />
      <text x={345} y={46} fontSize={8} fill="#ff8095" textAnchor="end" fontFamily="'Space Mono', monospace">15-min resistance</text>
      <Candle x={210} bodyTop={108} bodyBottom={128} wickTop={102} wickBottom={134} bullish />
      <Candle x={232} bodyTop={88}  bodyBottom={114} wickTop={82}  wickBottom={120} bullish />
      <Candle x={254} bodyTop={70}  bodyBottom={96}  wickTop={64}  wickBottom={104} bullish />
      <Candle x={276} bodyTop={56}  bodyBottom={80}  wickTop={50}  wickBottom={86}  bullish />
      <Candle x={300} bodyTop={50}  bodyBottom={88}  wickTop={44}  wickBottom={94}  bullish={false} w={14} />
      <text x={300} y={108} fontSize={9} fill={RED} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>SHORT</text>
      <text x={300} y={122} fontSize={9} fill={RED} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>setup</text>
    </svg>
  );
}

function RW6_ScaryPullback() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-auto">
      <line x1={6} y1={108} x2={274} y2={108} stroke={BLUE} strokeDasharray="4 3" strokeWidth={1.25} />
      <text x={270} y={104} fontSize={9} fill={BLUE_LIGHT} textAnchor="end" fontFamily="'Space Mono', monospace">prior swing low — INTACT</text>
      <Candle x={20}  bodyTop={86}  bodyBottom={108} wickTop={80}  wickBottom={114} bullish />
      <Candle x={42}  bodyTop={66}  bodyBottom={94}  wickTop={60}  wickBottom={100} bullish />
      <Candle x={64}  bodyTop={42}  bodyBottom={72}  wickTop={36}  wickBottom={78}  bullish />
      <Candle x={86}  bodyTop={28}  bodyBottom={54}  wickTop={22}  wickBottom={60}  bullish />
      <Candle x={114} bodyTop={36}  bodyBottom={56}  wickTop={30}  wickBottom={62}  bullish={false} />
      <Candle x={136} bodyTop={52}  bodyBottom={70}  wickTop={46}  wickBottom={76}  bullish={false} />
      <Candle x={158} bodyTop={66}  bodyBottom={84}  wickTop={60}  wickBottom={90}  bullish={false} />
      <Candle x={180} bodyTop={78}  bodyBottom={96}  wickTop={72}  wickBottom={102} bullish={false} />
      <Candle x={202} bodyTop={88}  bodyBottom={104} wickTop={82}  wickBottom={108} bullish={false} />
      <text x={158} y={132} fontSize={9} fill={AMBER} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>5 red candles — still above the level</text>
    </svg>
  );
}

function RW7_DoubleTopInUptrend() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-auto">
      <line x1={6} y1={42} x2={274} y2={42} stroke={BLUE} strokeDasharray="4 3" strokeWidth={1.25} />
      <text x={270} y={38} fontSize={9} fill={BLUE_LIGHT} textAnchor="end" fontFamily="'Space Mono', monospace">temporary 5-min resistance</text>
      <Candle x={22}  bodyTop={96}  bodyBottom={120} wickTop={90}  wickBottom={126} bullish />
      <Candle x={48}  bodyTop={78}  bodyBottom={102} wickTop={72}  wickBottom={108} bullish />
      <Candle x={74}  bodyTop={58}  bodyBottom={82}  wickTop={52}  wickBottom={88}  bullish />
      <Candle x={100} bodyTop={42}  bodyBottom={66}  wickTop={36}  wickBottom={72}  bullish />
      <Candle x={126} bodyTop={56}  bodyBottom={74}  wickTop={50}  wickBottom={80}  bullish={false} />
      <Candle x={152} bodyTop={64}  bodyBottom={82}  wickTop={58}  wickBottom={88}  bullish={false} />
      <Candle x={180} bodyTop={46}  bodyBottom={70}  wickTop={40}  wickBottom={76}  bullish />
      <Candle x={208} bodyTop={42}  bodyBottom={62}  wickTop={36}  wickBottom={68}  bullish />
      <Candle x={236} bodyTop={56}  bodyBottom={74}  wickTop={50}  wickBottom={80}  bullish={false} />
      <text x={140} y={132} fontSize={9} fill={SLATE_LIGHT} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>broader 15-min still in uptrend</text>
    </svg>
  );
}

function RW8_WeakBreakout() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-auto">
      <line x1={6} y1={58} x2={274} y2={58} stroke={AMBER} strokeDasharray="4 3" strokeWidth={1.25} />
      <text x={270} y={54} fontSize={9} fill={AMBER} textAnchor="end" fontFamily="'Space Mono', monospace">resistance</text>
      <line x1={6} y1={108} x2={274} y2={108} stroke={AMBER} strokeDasharray="4 3" strokeWidth={1.25} />
      <text x={270} y={104} fontSize={9} fill={AMBER} textAnchor="end" fontFamily="'Space Mono', monospace">support</text>
      <Candle x={28}  bodyTop={68}  bodyBottom={94}  wickTop={62}  wickBottom={102} bullish={false} />
      <Candle x={54}  bodyTop={72}  bodyBottom={92}  wickTop={66}  wickBottom={98}  bullish />
      <Candle x={80}  bodyTop={66}  bodyBottom={88}  wickTop={60}  wickBottom={94}  bullish={false} />
      <Candle x={106} bodyTop={74}  bodyBottom={94}  wickTop={68}  wickBottom={100} bullish />
      <Candle x={132} bodyTop={68}  bodyBottom={88}  wickTop={62}  wickBottom={94}  bullish={false} />
      <Candle x={158} bodyTop={62}  bodyBottom={82}  wickTop={56}  wickBottom={88}  bullish />
      <Candle x={188} bodyTop={50}  bodyBottom={58}  wickTop={48}  wickBottom={64}  bullish w={8} />
      <text x={188} y={132} fontSize={9} fill={AMBER} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>tiny body — no volume</text>
      <Candle x={216} bodyTop={56}  bodyBottom={70}  wickTop={50}  wickBottom={78}  bullish={false} />
      <Candle x={244} bodyTop={66}  bodyBottom={86}  wickTop={60}  wickBottom={92}  bullish={false} />
    </svg>
  );
}

function RW9_State4HigherLow() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-auto">
      <line x1={6} y1={36} x2={274} y2={36} stroke={BLUE} strokeDasharray="4 3" strokeWidth={1.25} />
      <text x={270} y={32} fontSize={9} fill={BLUE_LIGHT} textAnchor="end" fontFamily="'Space Mono', monospace">prior swing high — INTACT</text>
      <line x1={6} y1={108} x2={274} y2={108} stroke="rgba(168,179,199,0.55)" strokeDasharray="2 3" strokeWidth={1} />
      <text x={270} y={104} fontSize={9} fill={SLATE_LIGHT} textAnchor="end" fontFamily="'Space Mono', monospace">prior LL</text>
      <line x1={6} y1={84} x2={274} y2={84} stroke={AMBER} strokeDasharray="3 3" strokeWidth={1.25} />
      <text x={270} y={80} fontSize={9} fill={AMBER} textAnchor="end" fontFamily="'Space Mono', monospace">Higher Low ⚠</text>
      <Candle x={28}  bodyTop={36}  bodyBottom={60}  wickTop={30}  wickBottom={66}  bullish={false} />
      <Candle x={58}  bodyTop={56}  bodyBottom={84}  wickTop={48}  wickBottom={92}  bullish={false} />
      <Candle x={88}  bodyTop={82}  bodyBottom={108} wickTop={76}  wickBottom={114} bullish={false} />
      <Candle x={118} bodyTop={74}  bodyBottom={100} wickTop={68}  wickBottom={106} bullish />
      <Candle x={148} bodyTop={62}  bodyBottom={84}  wickTop={56}  wickBottom={94}  bullish={false} />
      <Candle x={178} bodyTop={68}  bodyBottom={88}  wickTop={60}  wickBottom={94}  bullish />
      <Candle x={208} bodyTop={56}  bodyBottom={76}  wickTop={50}  wickBottom={84}  bullish />
      <Candle x={240} bodyTop={48}  bodyBottom={66}  wickTop={42}  wickBottom={72}  bullish />
    </svg>
  );
}

function RW10_DecayIntoChop() {
  return (
    <svg viewBox="0 0 280 140" className="w-full h-auto">
      <line x1={6} y1={42} x2={274} y2={42} stroke={AMBER} strokeDasharray="4 3" strokeWidth={1.25} />
      <text x={270} y={38} fontSize={9} fill={AMBER} textAnchor="end" fontFamily="'Space Mono', monospace">Lower High ⚠</text>
      <line x1={6} y1={108} x2={274} y2={108} stroke={BLUE} strokeDasharray="4 3" strokeWidth={1.25} />
      <text x={270} y={104} fontSize={9} fill={BLUE_LIGHT} textAnchor="end" fontFamily="'Space Mono', monospace">prior swing low</text>
      <Candle x={20}  bodyTop={20}  bodyBottom={56}  wickTop={14}  wickBottom={64}  bullish />
      <Candle x={48}  bodyTop={42}  bodyBottom={70}  wickTop={36}  wickBottom={78}  bullish={false} />
      <Candle x={76}  bodyTop={56}  bodyBottom={80}  wickTop={50}  wickBottom={86}  bullish />
      <Candle x={104} bodyTop={60}  bodyBottom={82}  wickTop={54}  wickBottom={88}  bullish={false} />
      <Candle x={132} bodyTop={62}  bodyBottom={78}  wickTop={58}  wickBottom={84}  bullish />
      <Candle x={160} bodyTop={64}  bodyBottom={78}  wickTop={60}  wickBottom={82}  bullish={false} />
      <Candle x={188} bodyTop={66}  bodyBottom={76}  wickTop={62}  wickBottom={80}  bullish />
      <Candle x={216} bodyTop={66}  bodyBottom={74}  wickTop={64}  wickBottom={78}  bullish={false} />
      <Candle x={244} bodyTop={68}  bodyBottom={74}  wickTop={66}  wickBottom={78}  bullish />
      <text x={140} y={132} fontSize={9} fill={AMBER} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight={700}>candles shrinking — no conviction</text>
    </svg>
  );
}

const RW_CARDS = [
  {
    num: 1,
    title: 'The 15-min lower high (State 2)',
    scenario: '15-min was making higher highs. Latest 15-min peak is below the prior peak. Prior 15-min swing low has NOT been broken.',
    wrong: 'Lower high on 15-min! Trend changed! Short!',
    right: 'This is State 2 — uptrend halted. ONE piece of evidence. I need the second piece (close below the prior 15-min swing low) before calling a downtrend. Until then, no trade.',
    nextStep: 'Mark both levels. Watch the space between. Wait for resolution.',
    Svg: RW1_LowerHigh,
  },
  {
    num: 2,
    title: 'The wick through the 15-min swing low',
    scenario: '15-min swing low at 8500. A candle wicks down to 8495 but closes at 8505.',
    wrong: 'Broke 8500! State 5 confirmed! Short!',
    right: 'Wick is not a break. Body closed above 8500. The level held. This is often a stop-run by larger players — it supports the bullish case. Watch the 5-min for a long signal.',
    nextStep: 'Stay long bias. Watch for 5-min bullish patterns at this level.',
    Svg: RW2_WickThroughLow,
  },
  {
    num: 3,
    title: 'Bullish engulfing in the wrong context',
    scenario: 'Big green candle engulfs the prior red. Where it happens decides everything.',
    wrong: 'Bullish engulfing! Long!',
    right: 'Context decides: at a 5-min swing low in a 15-min uptrend → high-quality long signal. In a 15-min downtrend → the bounce, will fail at 15-min resistance, do not long; wait to short the failure. In chop → noise, skip. Same candle, three completely different trades.',
    nextStep: "Always ask 'what does the 15-min say?' before asking 'what does this candle mean?'",
    Svg: RW3_EngulfingThreeContexts,
  },
  {
    num: 4,
    title: 'Multi-timeframe disagreement — 15-min up, 5-min down',
    scenario: '15-min in clean State 1 uptrend. 5-min just confirmed State 5 — lower high and lower low on 5-min.',
    wrong: '5-min flipped to downtrend! Short the 5-min!',
    right: "15-min is the boss. The 5-min downtrend IS the 15-min's pullback — same price action, two distances. I do NOT short. I track where this pullback is heading on the 15-min, wait for it to reach a 15-min support level, then long the reversal.",
    nextStep: 'Mark the 15-min support levels below. Watch the 5-min approach them. Look for reversal patterns there. Long with stop just below the 15-min level.',
    Svg: RW4_MTFDisagreementUp,
  },
  {
    num: 5,
    title: 'Multi-timeframe disagreement — 15-min down, 5-min up',
    scenario: '15-min in clean State 5 downtrend. 5-min just confirmed an uptrend — higher low, higher high on 5-min.',
    wrong: '5-min in uptrend! Long the 5-min!',
    right: "15-min is the boss. The 5-min uptrend IS the 15-min's bounce. I do NOT long. I track where this bounce is heading — toward 15-min resistance — wait for it to exhaust, then short the reversal.",
    nextStep: 'Mark the 15-min resistance levels above. Watch the 5-min approach them. Look for bearish reversal patterns there. Short with stop just above the 15-min level.',
    Svg: RW5_MTFDisagreementDown,
  },
  {
    num: 6,
    title: 'The scary pullback',
    scenario: 'Strong uptrend, then five red candles in a row. Looks like collapse.',
    wrong: 'Selling is overwhelming! Trend is reversing!',
    right: 'Is price still above the most recent swing low? If yes, this is a deep pullback inside the uptrend. Often the BEST long entries come from these. The level decides — not the number of red candles.',
    nextStep: "Watch for a reversal pattern AT the prior swing low. Don't enter early. Don't enter without a pattern.",
    Svg: RW6_ScaryPullback,
  },
  {
    num: 7,
    title: 'Double top in mid-uptrend (wrong context)',
    scenario: 'Price hit a level twice, rejected both times. Looks like double top. But 15-min is still in clean uptrend.',
    wrong: 'Double top! Short!',
    right: 'Where? In a 15-min downtrend at a major swing high = great short signal. In a 15-min uptrend at a fresh high = just temporary resistance. Same pattern, opposite trades. The 15-min context decides.',
    nextStep: "Stay long bias. The 'double top' is just a 5-min pause. Wait for the pullback to complete and enter long again at the next 15-min support level.",
    Svg: RW7_DoubleTopInUptrend,
  },
  {
    num: 8,
    title: 'Weak breakout',
    scenario: 'Price breaks above range resistance with a small green candle and weak volume.',
    wrong: 'Breakout! Long!',
    right: 'Small body + no volume = weak breakout = high risk of false break. Wait for a retest that holds, or a second strong confirming candle. Better setups exist.',
    nextStep: 'Mark the level. Watch for retest. If retest holds with a reversal pattern, then long.',
    Svg: RW8_WeakBreakout,
  },
  {
    num: 9,
    title: 'State 4 higher low (downtrend halted)',
    scenario: 'Downtrend was making lower lows. Latest dip is HIGHER than the prior dip. Prior swing high above has not been reclaimed.',
    wrong: 'Higher low! Uptrend starting! Long!',
    right: 'State 4 — downtrend halted. ONE piece of evidence. I need the second piece (close above prior 15-min swing high) before calling an uptrend. Until then, stand aside.',
    nextStep: 'Mark both levels. Stay flat until resolution.',
    Svg: RW9_State4HigherLow,
  },
  {
    num: 10,
    title: 'State 2 slow decay into chop',
    scenario: "Lower high printed. Price isn't breaking the prior swing low OR reclaiming the lower high. Candles getting smaller. Drifting.",
    wrong: 'It has not broken — coiled spring about to launch up!',
    right: 'State 2 has decayed into State 3 chop. Drifting price with shrinking candles = no conviction. Could break either direction. Wait for a body close + volume expansion through one boundary.',
    nextStep: 'Set price alerts at both boundaries. Walk away. Come back when an alert fires.',
    Svg: RW10_DecayIntoChop,
  },
];

const CHECKLIST_ITEMS = [
  '15-min state is clearly STATE 1 (uptrend) or STATE 5 (downtrend) — NOT a transition state (2, 3, or 4)',
  'I am only looking for trades in the direction the 15-min allows (long-only or short-only — NOT both today)',
  'The 5-min has pulled back (in uptrend) or bounced (in downtrend) to a 15-min level',
  'The 15-min level my trade is anchored to has been clearly marked',
  'A 5-min reversal pattern has formed at that level (engulfing, star, hammer, double bottom/top, flag breakout)',
  'The 2-min has fired an entry signal — momentum is shifting in my direction',
  'Stop is placed just beyond the 15-min level I am anchored to (below for long, above for short)',
  'First target is identified — nearest 2-min resistance or support',
  'I have NOT taken any trade against the 15-min direction today',
];

const IRON_RULES = [
  'The 15-min decides direction. The 5-min decides timing. They do different jobs. You need both.',
  'Never trade against the 15-min. State 1 = long-only. State 5 = short-only. No exceptions.',
  'States 2, 3, 4 = stand aside. No new trades during transition or chop.',
  'One lower high ≠ downtrend. One higher low ≠ uptrend. Two pieces of evidence required for a 15-min state change.',
  'A wick is NOT a break. A candle BODY closing through a level is a break.',
  "When 5-min appears to go against 15-min, it's a pullback (in uptrend) or bounce (in downtrend) — your entry opportunity, NOT a counter-trend trade.",
  'Pattern fires but price immediately fails through the level → EXIT. No holding, no hoping.',
  'First target hit → stop moves to breakeven. You are now in a free trade.',
  'Most of your day will be sitting out. That is the job, not a failure of the method.',
  'The same pattern is a long in one context and a short in another. Always check the 15-min FIRST.',
];

export default function TrendMasterClass() {
  const [revealed, setRevealed] = useState(new Set());
  const [checked, setChecked] = useState(new Set());

  const toggleReveal = (n) => {
    setRevealed(prev => {
      const next = new Set(prev);
      if (next.has(n)) next.delete(n);
      else next.add(n);
      return next;
    });
  };

  const toggleCheck = (n) => {
    setChecked(prev => {
      const next = new Set(prev);
      if (next.has(n)) next.delete(n);
      else next.add(n);
      return next;
    });
  };

  const resetChecklist = () => setChecked(new Set());
  const allChecked = checked.size === CHECKLIST_ITEMS.length;

  const trendStates = [
    {
      num: 1,
      name: 'CLEAN UPTREND',
      structural: 'Higher High + Higher Low (HH + HL)',
      action: 'LONG-ONLY for the entire session. Trade longs on pullbacks.',
      Svg: State1UptrendSVG,
      tone: 'bullish',
      transition: false,
    },
    {
      num: 2,
      name: 'UPTREND HALTED',
      structural: 'Lower High printed, BUT prior 15-min swing low STILL INTACT',
      action: 'STAND ASIDE. No new longs, no new shorts. Wait for resolution.',
      Svg: State2HaltedSVG,
      tone: 'warn',
      transition: true,
      resolutions: [
        '15-min closes back above the lower high → State 1 resumes',
        '15-min closes below the prior swing low → State 5 confirmed (downtrend)',
        'Drifts between the two levels → decays into State 3 (chop)',
      ],
    },
    {
      num: 3,
      name: 'CHOP',
      structural: 'Mixed signals, no clean trend either direction',
      action: 'STAND ASIDE. Most blown accounts come from trying to trade trend setups in chop.',
      Svg: State3ChopSVG,
      tone: 'warn',
      transition: false,
    },
    {
      num: 4,
      name: 'DOWNTREND HALTED',
      structural: 'Higher Low printed, BUT prior 15-min swing high STILL INTACT',
      action: 'STAND ASIDE. No new shorts, no new longs. Wait.',
      Svg: State4HaltedSVG,
      tone: 'warn',
      transition: true,
      resolutions: [
        '15-min closes back below the higher low → State 5 resumes',
        '15-min closes above the prior swing high → State 1 confirmed (uptrend)',
        'Drifts → State 3 (chop)',
      ],
    },
    {
      num: 5,
      name: 'CLEAN DOWNTREND',
      structural: 'Lower High + Lower Low (LH + LL)',
      action: 'SHORT-ONLY for the entire session. Trade shorts on bounces.',
      Svg: State5DowntrendSVG,
      tone: 'bearish',
      transition: false,
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-6 sm:px-6 md:px-8 md:py-10 animate-fadeIn">
      <div className="flex items-center gap-2 mb-3 text-xs text-muted">
        <Link to="/" className="hover:text-text no-underline">← Home</Link>
        <span>/</span>
        <span className="label">The Trend Master Class</span>
      </div>

      {/* ============================================================
          SECTION 1 — HERO
          ============================================================ */}
      <section
        className="relative rounded-3xl p-6 sm:p-10 lg:p-14 mb-10 overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, rgba(74,158,255,0.14) 0%, rgba(15,23,42,0.55) 55%, rgba(22,22,22,0.45) 100%)',
          border: '1px solid rgba(74,158,255,0.35)',
          boxShadow: '0 24px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div
            className="px-3 py-1.5 rounded-full text-xs font-display font-bold tracking-[0.15em]"
            style={{
              background: 'rgba(74,158,255,0.18)',
              border: '1px solid rgba(74,158,255,0.45)',
              color: BLUE_LIGHT,
            }}
          >
            MASTER CLASS
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono" style={{ color: SLATE_LIGHT }}>
            15-MIN = DIRECTION
            <span className="mx-1.5" style={{ color: SLATE }}>×</span>
            5-MIN = TIMING
          </div>
        </div>

        <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 leading-tight tracking-tight text-white">
          The Trend Master Class
        </h1>
        <p
          className="text-base sm:text-lg lg:text-xl mb-6 font-display font-semibold leading-snug"
          style={{ color: BLUE_LIGHT }}
        >
          The 15-min decides DIRECTION. The 5-min decides TIMING. Always.
        </p>

        <p className="text-sm sm:text-base leading-relaxed max-w-[78ch] text-text/85">
          Every winning trade has the same four ingredients. The 15-minute tells you DIRECTION —
          which way you're allowed to trade today. The 5-minute tells you TIMING — when to pull
          the trigger inside that direction. The 2-minute gives you the exact execution moment.
          You do not trade against the 15-minute. Ever. The same candlestick pattern at the same
          price is a long in one context and a short in another — context is set by the 15-minute.
          This lesson teaches you exactly how to read trend structure and exactly what to do in
          every possible state of the market — including the states most traders ignore, which is
          why most traders lose.
        </p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {[
            { n: 2, label: 'The Two Jobs' },
            { n: 3, label: 'Five States' },
            { n: 4, label: 'Decision Table' },
            { n: 5, label: 'Multi-Timeframe' },
            { n: 6, label: 'Chop Deep Dive' },
            { n: 7, label: 'Patterns' },
            { n: 8, label: 'Right vs Wrong' },
            { n: 9, label: 'Pre-Trade Checklist' },
            { n: 10, label: 'Trend Change Rules' },
            { n: 11, label: 'Iron Rules' },
          ].map(item => (
            <a
              key={item.n}
              href={`#section-${item.n}`}
              className="text-xs px-3 py-2 rounded-lg no-underline text-center transition-colors font-display font-semibold"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(74,158,255,0.20)',
                color: BLUE_LIGHT,
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — THE TWO JOBS
          ============================================================ */}
      <section id="section-2" className="mb-12">
        <SectionHeader
          accent={BLUE}
          accentLight={BLUE_LIGHT}
          eyebrow="SECTION 2 — THE CORE CONCEPT"
          title="The Two Jobs"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          <div
            className="rounded-2xl p-6"
            style={{
              background: 'linear-gradient(180deg, rgba(74,158,255,0.12) 0%, rgba(22,22,22,0.50) 100%)',
              border: '1px solid rgba(74,158,255,0.45)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
            }}
          >
            <span className="label" style={{ color: BLUE_LIGHT, fontWeight: 700 }}>THE 15-MINUTE</span>
            <h3 className="font-display font-bold text-2xl m-0 mb-4 mt-2 text-white">= DIRECTION</h3>
            <dl className="space-y-3 m-0">
              <div>
                <dt className="label" style={{ color: BLUE_LIGHT }}>Question it answers</dt>
                <dd className="text-sm m-0 text-text/85">"Which direction am I allowed to trade today?"</dd>
              </div>
              <div>
                <dt className="label" style={{ color: BLUE_LIGHT }}>Output</dt>
                <dd className="text-sm m-0 text-text/85">Long-only, Short-only, or Stand-aside</dd>
              </div>
              <div>
                <dt className="label" style={{ color: BLUE_LIGHT }}>When to check</dt>
                <dd className="text-sm m-0 text-text/85">Once at session open — and again any time the 15-min structure changes.</dd>
              </div>
              <div className="pt-2" style={{ borderTop: '1px solid rgba(74,158,255,0.25)' }}>
                <p className="text-sm m-0 italic" style={{ color: BLUE_LIGHT }}>
                  The 15-min state is your filter for the entire day.
                </p>
              </div>
            </dl>
          </div>

          <div
            className="rounded-2xl p-6"
            style={{
              background: 'linear-gradient(180deg, rgba(0,217,160,0.10) 0%, rgba(22,22,22,0.50) 100%)',
              border: '1px solid rgba(0,217,160,0.40)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
            }}
          >
            <span className="label" style={{ color: GREEN, fontWeight: 700 }}>THE 5-MINUTE</span>
            <h3 className="font-display font-bold text-2xl m-0 mb-4 mt-2 text-white">= TIMING</h3>
            <dl className="space-y-3 m-0">
              <div>
                <dt className="label" style={{ color: GREEN }}>Question it answers</dt>
                <dd className="text-sm m-0 text-text/85">"When exactly do I pull the trigger in the direction the 15-min set?"</dd>
              </div>
              <div>
                <dt className="label" style={{ color: GREEN }}>Output</dt>
                <dd className="text-sm m-0 text-text/85">Specific entry price and moment</dd>
              </div>
              <div>
                <dt className="label" style={{ color: GREEN }}>What you watch</dt>
                <dd className="text-sm m-0 text-text/85">5-min pullbacks (in 15-min uptrend) or bounces (in 15-min downtrend) to exhaust at a 15-min level.</dd>
              </div>
              <div className="pt-2" style={{ borderTop: '1px solid rgba(0,217,160,0.25)' }}>
                <p className="text-sm m-0 italic" style={{ color: GREEN }}>
                  The 5-min direction is timing information, NOT direction information.
                </p>
              </div>
            </dl>
          </div>
        </div>

        <div className="rounded-2xl p-6 card" style={{ borderColor: 'rgba(74,158,255,0.30)' }}>
          <p className="font-display font-semibold text-base sm:text-lg lg:text-xl m-0 leading-relaxed text-center" style={{ color: '#f0f4ff' }}>
            The same 5-minute bullish engulfing is a <span style={{ color: GREEN }}>long signal</span> in a 15-min uptrend,{' '}
            <span style={{ color: AMBER }}>irrelevant</span> in a 15-min downtrend (because it's the bounce, not the trend), and{' '}
            <span style={{ color: SLATE_LIGHT }}>noise</span> in chop. The candle never changes. The trade changes based on what the 15-minute says.
          </p>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 — THE FIVE TREND STATES
          ============================================================ */}
      <section id="section-3" className="mb-12">
        <SectionHeader
          accent={BLUE}
          accentLight={BLUE_LIGHT}
          eyebrow="SECTION 3 — STRUCTURAL DEFINITIONS"
          title="The Five Trend States"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 mb-5">
          {trendStates.map(s => {
            const isBullish = s.tone === 'bullish';
            const isBearish = s.tone === 'bearish';
            const accent = isBullish ? GREEN : isBearish ? RED : AMBER;
            const bg = isBullish
              ? 'rgba(0,217,160,0.08)'
              : isBearish
              ? 'rgba(255,61,90,0.08)'
              : 'rgba(255,180,74,0.06)';
            const SvgEl = s.Svg;
            return (
              <article
                key={s.num}
                className="rounded-2xl p-4 flex flex-col"
                style={{
                  background: bg,
                  border: `1px solid ${accent}55`,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.30)',
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-base font-display font-bold"
                    style={{ background: accent, color: '#0a0a0a' }}
                  >
                    {s.num}
                  </div>
                  {s.transition ? (
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full tracking-wider font-display font-bold"
                      style={{
                        background: 'rgba(255,180,74,0.20)',
                        color: AMBER,
                        border: '1px solid rgba(255,180,74,0.45)',
                      }}
                    >
                      ★ TRANSITION
                    </span>
                  ) : null}
                </div>

                <h3 className="font-display font-bold text-base m-0 mb-2 leading-tight text-white">
                  {s.name}
                </h3>

                <div className="mb-3">
                  <p className="label m-0 mb-1">Structural</p>
                  <p className="text-xs m-0 leading-snug text-text/85">{s.structural}</p>
                </div>

                <div
                  className="rounded-lg p-2 mb-3"
                  style={{ background: 'rgba(0,0,0,0.30)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <SvgEl />
                </div>

                <div className="mt-auto">
                  <p className="label m-0 mb-1" style={{ color: accent }}>Action</p>
                  <p className="text-xs m-0 leading-snug font-semibold" style={{ color: '#f0f4ff' }}>{s.action}</p>
                </div>

                {s.resolutions ? (
                  <ul className="mt-3 pt-3 list-none p-0 m-0 space-y-1.5" style={{ borderTop: `1px dashed ${accent}55` }}>
                    {s.resolutions.map((r, i) => (
                      <li key={i} className="text-[11px] leading-snug flex gap-1.5 text-text/75">
                        <span style={{ color: accent, fontWeight: 700 }}>{i + 1}.</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            );
          })}
        </div>

        <div
          className="rounded-2xl p-5 sm:p-6"
          style={{
            background: 'linear-gradient(135deg, rgba(255,180,74,0.10) 0%, rgba(22,22,22,0.55) 100%)',
            border: '1px solid rgba(255,180,74,0.40)',
          }}
        >
          <p className="text-sm sm:text-base m-0 leading-relaxed" style={{ color: '#ffe7c2' }}>
            <strong style={{ color: '#fff3dc' }}>Most of your trading day will be spent in States 2, 3, or 4</strong> — the in-between states. Professional traders sit out these states. Forcing trades during transitions is the single biggest reason accounts die. <em>Your patience IS your edge.</em> The wait is not a bug — the wait is the skill.
          </p>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 — DECISION TABLE
          ============================================================ */}
      <section id="section-4" className="mb-12">
        <SectionHeader accent={BLUE} accentLight={BLUE_LIGHT} eyebrow="SECTION 4 — DECISION TABLE" title="What To Do In Each State" />

        <div className="hidden md:block overflow-x-auto mb-6 rounded-2xl" style={{ border: '1px solid rgba(74,158,255,0.20)' }}>
          <table className="w-full text-sm m-0" style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'rgba(74,158,255,0.12)' }}>
                <th className="p-3 text-left label" style={{ color: BLUE_LIGHT }}>STATE</th>
                <th className="p-3 text-left label" style={{ color: BLUE_LIGHT }}>TRADE DIRECTION</th>
                <th className="p-3 text-left label" style={{ color: BLUE_LIGHT }}>WATCH ON 5-MIN</th>
                <th className="p-3 text-left label" style={{ color: BLUE_LIGHT }}>ENTRY TRIGGER</th>
              </tr>
            </thead>
            <tbody>
              {[
                { state: 'State 1 — Clean Uptrend', dir: 'LONG-ONLY', dirColor: GREEN, watch: '5-min pullback (will look like 5-min downtrend)', trigger: '5-min reversal pattern at a 15-min support level' },
                { state: 'State 2 — Uptrend Halted', dir: 'NO TRADES', dirColor: AMBER, watch: 'Watching for 15-min to resolve up or down', trigger: 'Nothing — wait' },
                { state: 'State 3 — Chop', dir: 'NO TRADES', dirColor: AMBER, watch: 'Watching for a clean breakout of the range with body close + volume', trigger: 'Nothing — wait' },
                { state: 'State 4 — Downtrend Halted', dir: 'NO TRADES', dirColor: AMBER, watch: 'Watching for 15-min to resolve up or down', trigger: 'Nothing — wait' },
                { state: 'State 5 — Clean Downtrend', dir: 'SHORT-ONLY', dirColor: RED, watch: '5-min bounce (will look like 5-min uptrend)', trigger: '5-min reversal pattern at a 15-min resistance level' },
              ].map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="p-3 align-top font-display font-semibold text-text/95">{row.state}</td>
                  <td className="p-3 align-top">
                    <span
                      className="inline-block px-2 py-0.5 rounded text-xs font-display font-bold tracking-wider"
                      style={{ background: `${row.dirColor}22`, color: row.dirColor, border: `1px solid ${row.dirColor}55` }}
                    >
                      {row.dir}
                    </span>
                  </td>
                  <td className="p-3 align-top text-xs text-text/80">{row.watch}</td>
                  <td className="p-3 align-top text-xs text-text/80">{row.trigger}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-3 mb-6">
          {[
            { state: 'State 1 — Clean Uptrend', dir: 'LONG-ONLY', dirColor: GREEN, watch: '5-min pullback (will look like 5-min downtrend)', trigger: '5-min reversal pattern at a 15-min support level' },
            { state: 'State 2 — Uptrend Halted', dir: 'NO TRADES', dirColor: AMBER, watch: 'Watching for 15-min to resolve up or down', trigger: 'Nothing — wait' },
            { state: 'State 3 — Chop', dir: 'NO TRADES', dirColor: AMBER, watch: 'Watching for a clean breakout of the range with body close + volume', trigger: 'Nothing — wait' },
            { state: 'State 4 — Downtrend Halted', dir: 'NO TRADES', dirColor: AMBER, watch: 'Watching for 15-min to resolve up or down', trigger: 'Nothing — wait' },
            { state: 'State 5 — Clean Downtrend', dir: 'SHORT-ONLY', dirColor: RED, watch: '5-min bounce (will look like 5-min uptrend)', trigger: '5-min reversal pattern at a 15-min resistance level' },
          ].map((row, i) => (
            <div key={i} className="rounded-xl p-4 card-tight" style={{ borderColor: `${row.dirColor}44` }}>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm m-0 font-display font-semibold text-text/95">{row.state}</p>
                <span
                  className="text-[10px] px-2 py-0.5 rounded font-display font-bold tracking-wider"
                  style={{ background: `${row.dirColor}22`, color: row.dirColor, border: `1px solid ${row.dirColor}55` }}
                >
                  {row.dir}
                </span>
              </div>
              <p className="text-xs m-0 mb-1.5 text-text/85">
                <span className="font-display font-bold" style={{ color: BLUE_LIGHT }}>WATCH:</span> {row.watch}
              </p>
              <p className="text-xs m-0 text-text/85">
                <span className="font-display font-bold" style={{ color: BLUE_LIGHT }}>TRIGGER:</span> {row.trigger}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div
            className="rounded-2xl p-5"
            style={{
              background: 'linear-gradient(180deg, rgba(0,217,160,0.10) 0%, rgba(22,22,22,0.50) 100%)',
              border: '1px solid rgba(0,217,160,0.40)',
            }}
          >
            <p className="label m-0 mb-1" style={{ color: GREEN, fontWeight: 700 }}>STATE 1 — LONG ENTRIES</p>
            <h4 className="font-display font-bold text-base m-0 mb-3 text-white">Step by step</h4>
            <ol className="text-xs leading-relaxed m-0 pl-5 space-y-1.5 text-text/85">
              <li>15-min in State 1, prior 15-min swing low marked as <em>line in the sand</em>.</li>
              <li>Watch 5-min for pullback. It will print lower highs and lower lows on the 5-min — that IS the pullback, not a short signal.</li>
              <li>Track where the 5-min pullback is heading — usually toward the 15-min swing low, or a major 15-min MA, or Fibonacci retracement.</li>
              <li>When 5-min reaches that 15-min level, watch for 5-min bullish reversal (engulfing, hammer, double bottom, morning star).</li>
              <li>When pattern fires, drop to 2-min for entry timing.</li>
              <li>Long with stop just below the 15-min level.</li>
              <li>Targets: 2-min resistance (T1, take partial, move stop to BE), 5-min resistance (T2), 15-min resistance (T3).</li>
            </ol>
          </div>

          <div
            className="rounded-2xl p-5"
            style={{
              background: 'linear-gradient(180deg, rgba(255,61,90,0.10) 0%, rgba(22,22,22,0.50) 100%)',
              border: '1px solid rgba(255,61,90,0.40)',
            }}
          >
            <p className="label m-0 mb-1" style={{ color: RED, fontWeight: 700 }}>STATE 5 — SHORT ENTRIES</p>
            <h4 className="font-display font-bold text-base m-0 mb-3 text-white">Step by step</h4>
            <ol className="text-xs leading-relaxed m-0 pl-5 space-y-1.5 text-text/85">
              <li>15-min in State 5, prior 15-min swing high marked as <em>line in the sand</em>.</li>
              <li>Watch 5-min for bounce. It will print higher lows and higher highs on the 5-min — that IS the bounce, not a long signal.</li>
              <li>Track where the 5-min bounce is heading — usually toward the prior broken support (now resistance), or a 15-min MA, or Fibonacci retracement of the breakdown.</li>
              <li>When 5-min reaches that 15-min level, watch for 5-min bearish reversal (engulfing, shooting star, double top, evening star).</li>
              <li>When pattern fires, drop to 2-min for entry timing.</li>
              <li>Short with stop just above the 15-min level.</li>
              <li>Targets: 2-min support (T1, take partial, move stop to BE), 5-min support (T2), 15-min support (T3).</li>
            </ol>
          </div>
        </div>

        <div
          className="rounded-2xl p-5"
          style={{
            background: 'linear-gradient(135deg, rgba(74,158,255,0.10) 0%, rgba(22,22,22,0.50) 100%)',
            border: '1px solid rgba(74,158,255,0.40)',
          }}
        >
          <p className="label m-0 mb-3" style={{ color: BLUE_LIGHT, fontWeight: 700 }}>
            WHEN THE 15-MIN CHANGES STATE MID-SESSION
          </p>
          <ul className="space-y-2 text-xs sm:text-sm m-0 list-none p-0">
            <li className="flex gap-2 text-text/85">
              <span style={{ color: AMBER }}>→</span>
              <span>15-min was State 1, prints a lower high → enters State 2 → stop taking new longs, manage existing positions to BE or partial, stand aside.</span>
            </li>
            <li className="flex gap-2 text-text/85">
              <span style={{ color: RED }}>→</span>
              <span>15-min in State 2, closes below prior swing low → State 5 confirmed → flip to short bias → wait for next 5-min bounce to fail at a 15-min level, then short.</span>
            </li>
            <li className="flex gap-2 text-text/85">
              <span style={{ color: GREEN }}>→</span>
              <span>15-min in State 2, closes above the lower high → State 1 resumes → resume long bias → next 5-min pullback is your next entry.</span>
            </li>
            <li className="flex gap-2 italic" style={{ color: BLUE_LIGHT }}>
              <span>•</span>
              <span>The state can change multiple times in a day. That's fine. You follow whichever state the 15-min is in right now.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================================
          SECTION 5 — MULTI-TIMEFRAME RELATIONSHIPS
          ============================================================ */}
      <section id="section-5" className="mb-12">
        <SectionHeader accent={BLUE} accentLight={BLUE_LIGHT} eyebrow="SECTION 5 — MULTI-TIMEFRAME RELATIONSHIPS" title="When 15-min &amp; 5-min &quot;Disagree&quot;" />

        <p className="text-sm sm:text-base m-0 mb-6 italic text-text/80">
          When the 15-min and the 5-min appear to disagree, they're not disagreeing. They're doing different jobs.
        </p>

        <article
          className="rounded-2xl p-5 sm:p-6 mb-5"
          style={{
            background: 'linear-gradient(135deg, rgba(0,217,160,0.06) 0%, rgba(22,22,22,0.50) 100%)',
            border: '1px solid rgba(0,217,160,0.30)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.30)',
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-[10px] px-2 py-0.5 rounded tracking-wider font-display font-bold"
              style={{ background: 'rgba(0,217,160,0.20)', color: GREEN, border: '1px solid rgba(0,217,160,0.45)' }}
            >
              SCENARIO A
            </span>
            <span className="text-xs font-mono" style={{ color: SLATE_LIGHT }}>
              15-min uptrend + 5-min downtrend
            </span>
          </div>

          <h3 className="font-display font-bold text-lg sm:text-xl m-0 mb-4 text-white">
            The 5-min downtrend is the 15-min's pullback. It's the gift that gives you a great long entry.
          </h3>

          <div
            className="rounded-xl p-3 mb-4"
            style={{ background: 'rgba(0,0,0,0.30)', border: '1px solid rgba(255,255,255,0.05)' }}
          >
            <ScenarioASVG />
          </div>

          <ol className="text-sm leading-relaxed m-0 pl-5 space-y-1.5 text-text/85">
            <li><strong style={{ color: BLUE_LIGHT }}>15-min:</strong> State 1, clean uptrend. Prior 15-min swing low at <code className="font-mono" style={{ color: BLUE_LIGHT }}>8500</code>. Current price <code className="font-mono" style={{ color: BLUE_LIGHT }}>8540</code>.</li>
            <li><strong style={{ color: GREEN }}>5-min:</strong> just confirmed State 5 — lower high and lower low on the 5-min.</li>
            <li><strong style={{ color: RED }}>WRONG THINKING:</strong> "5-min downtrend, short the 5-min."</li>
            <li><strong style={{ color: GREEN }}>CORRECT THINKING:</strong> "5-min downtrend is the 15-min's pullback. It's heading toward 8500 (the 15-min swing low). When it gets there and reverses, that's my long entry."</li>
            <li>Watch the 5-min downtrend approach 8500.</li>
            <li>At or near 8500, watch for a 5-min bullish reversal pattern.</li>
            <li>When the pattern fires, long with stop just below 8500.</li>
            <li>Targets back to 8540 (prior 5-min swing high), then higher 15-min levels.</li>
          </ol>
        </article>

        <article
          className="rounded-2xl p-5 sm:p-6 mb-5"
          style={{
            background: 'linear-gradient(135deg, rgba(255,61,90,0.06) 0%, rgba(22,22,22,0.50) 100%)',
            border: '1px solid rgba(255,61,90,0.30)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.30)',
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-[10px] px-2 py-0.5 rounded tracking-wider font-display font-bold"
              style={{ background: 'rgba(255,61,90,0.20)', color: RED, border: '1px solid rgba(255,61,90,0.45)' }}
            >
              SCENARIO B
            </span>
            <span className="text-xs font-mono" style={{ color: SLATE_LIGHT }}>
              15-min downtrend + 5-min uptrend
            </span>
          </div>

          <h3 className="font-display font-bold text-lg sm:text-xl m-0 mb-4 text-white">
            The 5-min uptrend is the 15-min's bounce. It's the gift that gives you a great short entry.
          </h3>

          <div
            className="rounded-xl p-3 mb-4"
            style={{ background: 'rgba(0,0,0,0.30)', border: '1px solid rgba(255,255,255,0.05)' }}
          >
            <ScenarioBSVG />
          </div>

          <ol className="text-sm leading-relaxed m-0 pl-5 space-y-1.5 text-text/85">
            <li><strong style={{ color: RED }}>15-min:</strong> State 5, clean downtrend. Prior 15-min swing high at <code className="font-mono" style={{ color: '#ff8095' }}>8500</code>. Current price <code className="font-mono" style={{ color: '#ff8095' }}>8460</code>.</li>
            <li><strong style={{ color: GREEN }}>5-min:</strong> just confirmed an uptrend — higher low and higher high on the 5-min.</li>
            <li><strong style={{ color: RED }}>WRONG THINKING:</strong> "5-min uptrend, long the 5-min."</li>
            <li><strong style={{ color: GREEN }}>CORRECT THINKING:</strong> "5-min uptrend is the 15-min's bounce. It's heading toward 8500 (the 15-min swing high). When it gets there and exhausts, that's my short entry."</li>
            <li>Watch the 5-min uptrend approach 8500.</li>
            <li>At or near 8500, watch for a 5-min bearish reversal pattern.</li>
            <li>When the pattern fires, short with stop just above 8500.</li>
            <li>Targets back down to 8460, then lower 15-min levels.</li>
          </ol>
        </article>

        <div
          className="rounded-2xl p-5 sm:p-6"
          style={{
            background: 'linear-gradient(135deg, rgba(74,158,255,0.10) 0%, rgba(22,22,22,0.55) 100%)',
            border: '1px solid rgba(74,158,255,0.45)',
          }}
        >
          <p className="text-sm sm:text-base m-0 leading-relaxed text-text/90">
            <strong className="font-display tracking-wider" style={{ color: BLUE_LIGHT }}>FOLLOW THE 15-MIN FOR BIAS. ALWAYS.</strong> The 5-min is a tactical view INSIDE the 15-min, never a contradiction of it. When the 5-min looks like it's going against the 15-min, the 5-min is showing you the pullback/bounce — which IS your entry opportunity in the 15-min's direction, NOT a counter-trend trade.
          </p>
        </div>
      </section>

      {/* ============================================================
          SECTION 6 — CHOP DEEP DIVE
          ============================================================ */}
      <section id="section-6" className="mb-12">
        <SectionHeader accent={AMBER} accentLight={AMBER} eyebrow="SECTION 6 — STATE 3 IN DETAIL" title="The Chop Deep Dive" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            {
              title: 'Contracting Triangle / Coil',
              desc: 'Lower high + higher low. Range shrinks. Eventually breaks hard — but you cannot tell which way.',
              svg: (
                <svg viewBox="0 0 220 140" className="w-full h-auto">
                  <line x1={10} y1={20} x2={210} y2={70} stroke={AMBER} strokeDasharray="4 3" strokeWidth={1.25} />
                  <line x1={10} y1={120} x2={210} y2={70} stroke={AMBER} strokeDasharray="4 3" strokeWidth={1.25} />
                  <Candle x={30}  bodyTop={36} bodyBottom={92}  wickTop={28} wickBottom={100} bullish />
                  <Candle x={58}  bodyTop={50} bodyBottom={88}  wickTop={42} wickBottom={94}  bullish={false} />
                  <Candle x={86}  bodyTop={54} bodyBottom={80}  wickTop={46} wickBottom={88}  bullish />
                  <Candle x={114} bodyTop={58} bodyBottom={82}  wickTop={50} wickBottom={88}  bullish={false} />
                  <Candle x={142} bodyTop={62} bodyBottom={78}  wickTop={56} wickBottom={84}  bullish />
                  <Candle x={170} bodyTop={64} bodyBottom={76}  wickTop={58} wickBottom={80}  bullish={false} />
                  <Candle x={196} bodyTop={66} bodyBottom={74}  wickTop={62} wickBottom={78}  bullish />
                </svg>
              ),
            },
            {
              title: 'Expanding Range',
              desc: 'Higher high + lower low. Volatility growing. Most dangerous — wider swings, harder to time, easier to be wrong twice.',
              svg: (
                <svg viewBox="0 0 220 140" className="w-full h-auto">
                  <line x1={10} y1={70} x2={210} y2={20} stroke={AMBER} strokeDasharray="4 3" strokeWidth={1.25} />
                  <line x1={10} y1={70} x2={210} y2={120} stroke={AMBER} strokeDasharray="4 3" strokeWidth={1.25} />
                  <Candle x={30}  bodyTop={62} bodyBottom={78}  wickTop={56} wickBottom={84}  bullish />
                  <Candle x={58}  bodyTop={50} bodyBottom={84}  wickTop={42} wickBottom={92}  bullish={false} />
                  <Candle x={86}  bodyTop={42} bodyBottom={90}  wickTop={36} wickBottom={98}  bullish />
                  <Candle x={114} bodyTop={36} bodyBottom={96}  wickTop={28} wickBottom={102} bullish={false} />
                  <Candle x={142} bodyTop={30} bodyBottom={100} wickTop={24} wickBottom={108} bullish />
                  <Candle x={170} bodyTop={26} bodyBottom={108} wickTop={20} wickBottom={114} bullish={false} />
                  <Candle x={196} bodyTop={22} bodyBottom={114} wickTop={16} wickBottom={120} bullish />
                </svg>
              ),
            },
            {
              title: 'Horizontal Rectangle',
              desc: 'Equal highs and lows. Cleanest type of chop. Watch the boundaries — a body close + volume out of the range is the only valid signal.',
              svg: (
                <svg viewBox="0 0 220 140" className="w-full h-auto">
                  <line x1={10} y1={42} x2={210} y2={42} stroke={AMBER} strokeDasharray="4 3" strokeWidth={1.25} />
                  <line x1={10} y1={100} x2={210} y2={100} stroke={AMBER} strokeDasharray="4 3" strokeWidth={1.25} />
                  <Candle x={30}  bodyTop={52} bodyBottom={88}  wickTop={44} wickBottom={96}  bullish />
                  <Candle x={58}  bodyTop={56} bodyBottom={92}  wickTop={48} wickBottom={98}  bullish={false} />
                  <Candle x={86}  bodyTop={52} bodyBottom={86}  wickTop={46} wickBottom={94}  bullish />
                  <Candle x={114} bodyTop={58} bodyBottom={90}  wickTop={50} wickBottom={96}  bullish={false} />
                  <Candle x={142} bodyTop={54} bodyBottom={88}  wickTop={48} wickBottom={94}  bullish />
                  <Candle x={170} bodyTop={56} bodyBottom={90}  wickTop={50} wickBottom={96}  bullish={false} />
                  <Candle x={196} bodyTop={54} bodyBottom={86}  wickTop={48} wickBottom={92}  bullish />
                </svg>
              ),
            },
          ].map((sub, i) => (
            <article
              key={i}
              className="rounded-2xl p-4"
              style={{ background: 'rgba(255,180,74,0.05)', border: '1px solid rgba(255,180,74,0.30)' }}
            >
              <h4 className="font-display font-bold text-sm m-0 mb-2" style={{ color: '#fff3dc' }}>
                {sub.title}
              </h4>
              <div
                className="rounded-lg p-2 mb-3"
                style={{ background: 'rgba(0,0,0,0.30)', border: '1px solid rgba(255,255,255,0.05)' }}
              >
                {sub.svg}
              </div>
              <p className="text-xs m-0 leading-snug text-text/80">{sub.desc}</p>
            </article>
          ))}
        </div>

        <div className="rounded-2xl p-5 mb-5 card" style={{ borderColor: 'rgba(255,180,74,0.25)' }}>
          <p className="label m-0 mb-3" style={{ color: AMBER, fontWeight: 700 }}>VISUAL FINGERPRINT OF CHOP</p>
          <ul className="text-sm leading-relaxed m-0 list-none p-0 space-y-2">
            {[
              'Candles overlap heavily — green, red, green, red, no progress.',
              'Moving averages flatten and tangle (in a trend they angle and separate).',
              'Candle bodies shrinking — volatility contracting.',
              'Same levels keep getting tested and held.',
              'Cannot draw a clean diagonal trendline through highs or lows.',
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-text/85">
                <span style={{ color: AMBER, fontWeight: 800 }}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="rounded-2xl p-5 sm:p-6 mb-5"
          style={{
            background: 'linear-gradient(135deg, rgba(255,180,74,0.10) 0%, rgba(22,22,22,0.55) 100%)',
            border: '1px solid rgba(255,180,74,0.45)',
          }}
        >
          <p className="label m-0 mb-3" style={{ color: AMBER, fontWeight: 700 }}>THE SQUINT TEST</p>
          <p className="font-display font-semibold text-base m-0 mb-3 leading-relaxed" style={{ color: '#fff3dc' }}>
            Look at the chart. Can you see the direction immediately, without effort?
          </p>
          <ul className="text-sm m-0 list-none p-0 space-y-2">
            <li className="flex gap-2 text-text/85">
              <span style={{ color: GREEN, fontWeight: 800 }}>Yes →</span>
              <span>trend. Trade with it.</span>
            </li>
            <li className="flex gap-2 text-text/85">
              <span style={{ color: AMBER, fontWeight: 800 }}>Squint or argue with yourself →</span>
              <span>chop. Stand aside.</span>
            </li>
          </ul>
          <p className="text-sm mt-3 m-0 italic" style={{ color: '#fff3dc' }}>
            If you find yourself debating whether it's up or down, it is NEITHER. That argument IS the diagnosis.
          </p>
        </div>

        <div className="rounded-2xl p-5" style={{ background: 'rgba(0,217,160,0.06)', border: '1px solid rgba(0,217,160,0.30)' }}>
          <p className="label m-0 mb-3" style={{ color: GREEN, fontWeight: 700 }}>WHEN CHOP ENDS — SIGNALS TO WATCH</p>
          <ul className="text-sm leading-relaxed m-0 list-none p-0 space-y-2">
            {[
              'Strong candle CLOSES (body, not wick) through the range high or low.',
              'Candle bodies start expanding.',
              'Moving averages start separating and angling.',
              'Clean higher high or lower low forms outside the prior range.',
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-text/85">
                <span style={{ color: GREEN, fontWeight: 800 }}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================================
          SECTION 7 — PATTERN REFERENCE
          ============================================================ */}
      <section id="section-7" className="mb-12">
        <SectionHeader accent={BLUE} accentLight={BLUE_LIGHT} eyebrow="SECTION 7 — PATTERN REFERENCE" title="What to Watch For at the Level" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div
            className="rounded-2xl p-5"
            style={{
              background: 'linear-gradient(180deg, rgba(0,217,160,0.10) 0%, rgba(22,22,22,0.50) 100%)',
              border: '1px solid rgba(0,217,160,0.40)',
            }}
          >
            <p className="label m-0 mb-1" style={{ color: GREEN, fontWeight: 700 }}>BULLISH PATTERNS</p>
            <p className="text-xs m-0 mb-4 italic" style={{ color: '#7eebcc' }}>
              Use only at a 15-min SUPPORT level in a 15-min UPTREND.
            </p>
            <ul className="text-sm m-0 list-none p-0 space-y-1.5">
              {[
                'Bullish Engulfing',
                'Morning Star',
                'Hammer / Pin Bar',
                'Double Bottom',
                'Bull Flag (break up)',
                'Piercing Line',
                'Doji at support',
              ].map((p, i) => (
                <li key={i} className="flex gap-2 text-text/85">
                  <span style={{ color: GREEN }}>▲</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-2xl p-5"
            style={{
              background: 'linear-gradient(180deg, rgba(255,61,90,0.10) 0%, rgba(22,22,22,0.50) 100%)',
              border: '1px solid rgba(255,61,90,0.40)',
            }}
          >
            <p className="label m-0 mb-1" style={{ color: RED, fontWeight: 700 }}>BEARISH PATTERNS</p>
            <p className="text-xs m-0 mb-4 italic" style={{ color: '#ffb1bc' }}>
              Use only at a 15-min RESISTANCE level in a 15-min DOWNTREND.
            </p>
            <ul className="text-sm m-0 list-none p-0 space-y-1.5">
              {[
                'Bearish Engulfing',
                'Evening Star',
                'Shooting Star',
                'Double Top',
                'Bear Flag (break down)',
                'Dark Cloud Cover',
                'Doji at resistance',
              ].map((p, i) => (
                <li key={i} className="flex gap-2 text-text/85">
                  <span style={{ color: RED }}>▼</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl p-5 card" style={{ borderColor: 'rgba(74,158,255,0.30)' }}>
          <p className="text-sm sm:text-base m-0 leading-relaxed text-text/90">
            <strong className="font-display" style={{ color: BLUE_LIGHT }}>Patterns are CONFIRMATION that the location is holding.</strong> They are NOT standalone signals. The same pattern in the wrong place is noise. The 15-min decides whether you're looking for bullish or bearish patterns. The 5-min level decides whether the pattern earns a trade.
          </p>
        </div>
      </section>

      {/* SECTION_5_PLACEHOLDER */}

      {/* SECTION_6_PLACEHOLDER */}

      {/* SECTION_7_PLACEHOLDER */}

      {/* ============================================================
          SECTION 8 — RIGHT vs WRONG SCENARIOS (10 INTERACTIVE CARDS)
          ============================================================ */}
      <section id="section-8" className="mb-12">
        <SectionHeader accent={BLUE} accentLight={BLUE_LIGHT} eyebrow="SECTION 8 — INTERACTIVE" title="Right vs Wrong Reads — 10 Scenarios" />

        <p className="text-sm m-0 mb-6 text-muted">
          Look at each chart. Decide what you think the right read is. Then click <em>Show the right read</em> to compare your thinking.
        </p>

        <div className="space-y-4">
          {RW_CARDS.map(card => {
            const isOpen = revealed.has(card.num);
            const SvgEl = card.Svg;
            return (
              <article
                key={card.num}
                className="rounded-2xl overflow-hidden card"
                style={{ padding: 0 }}
              >
                <div className="p-4 sm:p-5">
                  <div className="flex flex-col lg:flex-row gap-5">
                    <div className="lg:w-2/5 shrink-0">
                      <div
                        className="rounded-xl p-3"
                        style={{ background: 'rgba(0,0,0,0.30)', border: '1px solid rgba(255,255,255,0.05)' }}
                      >
                        <SvgEl />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-display font-bold"
                          style={{ background: `linear-gradient(135deg, ${BLUE}, ${BLUE}aa)`, color: '#0a0a0a' }}
                        >
                          {card.num}
                        </span>
                        <h3 className="font-display font-bold text-base sm:text-lg m-0 text-white">{card.title}</h3>
                      </div>

                      <p className="text-sm m-0 mb-3 leading-relaxed text-text/85">
                        <span className="label" style={{ color: BLUE_LIGHT }}>SCENARIO</span>
                        <br />
                        {card.scenario}
                      </p>

                      <button
                        type="button"
                        onClick={() => toggleReveal(card.num)}
                        className="btn"
                        style={{
                          background: isOpen ? 'rgba(74,158,255,0.20)' : 'rgba(74,158,255,0.10)',
                          color: BLUE_LIGHT,
                          border: '1px solid rgba(74,158,255,0.45)',
                          padding: '0.5rem 1rem',
                          fontSize: '0.875rem',
                        }}
                        aria-expanded={isOpen}
                      >
                        {isOpen ? '▲ Hide the right read' : '▼ Show the right read'}
                      </button>
                    </div>
                  </div>

                  {isOpen ? (
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div
                        className="rounded-xl p-4"
                        style={{ background: 'rgba(255,61,90,0.10)', border: '1px solid rgba(255,61,90,0.45)' }}
                      >
                        <p className="label m-0 mb-2" style={{ color: RED, fontWeight: 700 }}>✗ WRONG READ</p>
                        <p className="text-sm m-0 leading-relaxed italic" style={{ color: '#ffb1bc' }}>
                          "{card.wrong}"
                        </p>
                      </div>

                      <div
                        className="rounded-xl p-4"
                        style={{ background: 'rgba(0,217,160,0.10)', border: '1px solid rgba(0,217,160,0.45)' }}
                      >
                        <p className="label m-0 mb-2" style={{ color: GREEN, fontWeight: 700 }}>✓ RIGHT READ</p>
                        <p className="text-sm m-0 leading-relaxed" style={{ color: '#9bf2d6' }}>
                          {card.right}
                        </p>
                      </div>

                      <div
                        className="md:col-span-2 rounded-xl p-4"
                        style={{ background: 'rgba(74,158,255,0.08)', border: '1px solid rgba(74,158,255,0.40)' }}
                      >
                        <p className="label m-0 mb-2" style={{ color: BLUE_LIGHT, fontWeight: 700 }}>→ WHAT TO DO NEXT</p>
                        <p className="text-sm m-0 leading-relaxed text-text/90">
                          {card.nextStep}
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ============================================================
          SECTION 9 — PRE-TRADE CHECKLIST
          ============================================================ */}
      <section id="section-9" className="mb-12">
        <SectionHeader accent={BLUE} accentLight={BLUE_LIGHT} eyebrow="SECTION 9 — INTERACTIVE" title="Pre-Trade Checklist" />

        <p className="text-sm m-0 mb-5 text-muted">
          Tap each item to confirm. Every box must be checked before you click an order ticket.
        </p>

        <div
          className="rounded-2xl p-5 sm:p-6 mb-4"
          style={{
            background: allChecked
              ? 'linear-gradient(135deg, rgba(0,217,160,0.10) 0%, rgba(22,22,22,0.55) 100%)'
              : 'rgba(255,255,255,0.025)',
            border: allChecked
              ? '1px solid rgba(0,217,160,0.45)'
              : '1px solid rgba(255,255,255,0.08)',
            boxShadow: allChecked
              ? '0 8px 32px rgba(0,217,160,0.25)'
              : '0 4px 20px rgba(0,0,0,0.25)',
            transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
          }}
        >
          <ul className="m-0 list-none p-0 space-y-2.5">
            {CHECKLIST_ITEMS.map((item, i) => {
              const n = i + 1;
              const isChecked = checked.has(n);
              return (
                <li key={n}>
                  <button
                    type="button"
                    onClick={() => toggleCheck(n)}
                    className="w-full text-left flex items-start gap-3 p-3 rounded-xl transition-colors"
                    style={{
                      background: isChecked ? 'rgba(74,158,255,0.10)' : 'rgba(255,255,255,0.02)',
                      border: isChecked ? '1px solid rgba(74,158,255,0.45)' : '1px solid rgba(255,255,255,0.06)',
                      cursor: 'pointer',
                    }}
                    aria-pressed={isChecked}
                  >
                    <div className="shrink-0 mt-0.5">
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={isChecked ? BLUE_LIGHT : SLATE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        {isChecked ? <path d="m8 12 3 3 5-6" /> : null}
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-[10px] px-1.5 py-0.5 rounded font-mono font-bold"
                          style={{
                            background: isChecked ? 'rgba(74,158,255,0.20)' : 'rgba(168,179,199,0.15)',
                            color: isChecked ? BLUE_LIGHT : SLATE_LIGHT,
                          }}
                        >
                          {n.toString().padStart(2, '0')}
                        </span>
                      </div>
                      <p
                        className="text-sm m-0 leading-relaxed"
                        style={{ color: isChecked ? '#daf2ff' : '#e2e8f0' }}
                      >
                        {item}
                      </p>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <p className="text-sm m-0 font-mono" style={{ color: SLATE_LIGHT }}>
            <span style={{ color: BLUE_LIGHT, fontWeight: 700 }}>{checked.size}</span> of {CHECKLIST_ITEMS.length} conditions met
          </p>
          <button
            type="button"
            onClick={resetChecklist}
            className="btn btn-ghost"
            style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}
          >
            ↺ Reset Checklist
          </button>
        </div>

        {allChecked ? (
          <div
            className="rounded-2xl p-5 sm:p-6 text-center animate-slideUp"
            style={{
              background: 'linear-gradient(135deg, rgba(0,217,160,0.18) 0%, rgba(74,158,255,0.15) 100%)',
              border: '1px solid rgba(0,217,160,0.55)',
              boxShadow: '0 8px 32px rgba(0,217,160,0.30)',
            }}
          >
            <p
              className="text-lg sm:text-xl m-0 font-display font-bold tracking-wider text-white"
            >
              ★ ALL CONDITIONS MET — PROCEED TO ENTRY
            </p>
          </div>
        ) : null}
      </section>

      {/* ============================================================
          SECTION 10 — TREND CHANGE & WICK RULES
          ============================================================ */}
      <section id="section-10" className="mb-12">
        <SectionHeader accent={BLUE} accentLight={BLUE_LIGHT} eyebrow="SECTION 10 — DEFINING THE FLIP" title="Trend Change &amp; Wick Rules" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div
            className="rounded-2xl p-5"
            style={{
              background: 'linear-gradient(180deg, rgba(255,61,90,0.10) 0%, rgba(22,22,22,0.50) 100%)',
              border: '1px solid rgba(255,61,90,0.40)',
            }}
          >
            <p className="label m-0 mb-2" style={{ color: RED, fontWeight: 700 }}>UPTREND → DOWNTREND</p>
            <p className="text-sm m-0 mb-3 leading-relaxed" style={{ color: '#ffb1bc' }}>
              A 15-min lower high prints <span style={{ color: AMBER }}>(warning = State 2)</span> + 15-min closes BELOW the prior 15-min swing low <span style={{ color: RED }}>(confirmation = State 5)</span>.
            </p>
            <p className="text-xs m-0 italic" style={{ color: '#ff8095' }}>
              One lower high alone is NOT a downtrend. Just a warning. Wait for the lower low.
            </p>
          </div>

          <div
            className="rounded-2xl p-5"
            style={{
              background: 'linear-gradient(180deg, rgba(0,217,160,0.10) 0%, rgba(22,22,22,0.50) 100%)',
              border: '1px solid rgba(0,217,160,0.40)',
            }}
          >
            <p className="label m-0 mb-2" style={{ color: GREEN, fontWeight: 700 }}>DOWNTREND → UPTREND</p>
            <p className="text-sm m-0 mb-3 leading-relaxed" style={{ color: '#9bf2d6' }}>
              A 15-min higher low prints <span style={{ color: AMBER }}>(warning = State 4)</span> + 15-min closes ABOVE the prior 15-min swing high <span style={{ color: GREEN }}>(confirmation = State 1)</span>.
            </p>
            <p className="text-xs m-0 italic" style={{ color: '#7eebcc' }}>
              One higher low alone is NOT an uptrend. Just a warning. Wait for the higher high.
            </p>
          </div>

          <div
            className="rounded-2xl p-5"
            style={{
              background: 'linear-gradient(180deg, rgba(74,158,255,0.10) 0%, rgba(22,22,22,0.50) 100%)',
              border: '1px solid rgba(74,158,255,0.45)',
            }}
          >
            <p className="label m-0 mb-2" style={{ color: BLUE_LIGHT, fontWeight: 700 }}>WICK vs BODY (CRITICAL)</p>
            <p className="text-sm m-0 mb-3 leading-relaxed text-text/90">
              A wick through a level is NOT a break. A candle <strong style={{ color: BLUE_LIGHT }}>BODY closing through it</strong> is a break.
            </p>
            <p className="text-xs m-0 italic" style={{ color: BLUE_LIGHT }}>
              The market often runs stops with a wick, then recovers. Body close is the truth. Wicks are noise.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 11 — IRON RULES
          ============================================================ */}
      <section id="section-11" className="mb-8">
        <SectionHeader accent={BLUE} accentLight={BLUE_LIGHT} eyebrow="SECTION 11 — IRON RULES" title="Never Break These" />

        <div
          className="rounded-2xl p-5 sm:p-6"
          style={{
            background:
              'linear-gradient(135deg, rgba(74,158,255,0.10) 0%, rgba(22,22,22,0.55) 50%, rgba(15,23,42,0.30) 100%)',
            border: '1px solid rgba(74,158,255,0.45)',
            boxShadow: '0 12px 48px rgba(0,0,0,0.40)',
          }}
        >
          <ol className="m-0 list-none p-0 space-y-3">
            {IRON_RULES.map((rule, i) => (
              <li
                key={i}
                className="flex gap-3 items-start"
                style={{
                  paddingLeft: '0.5rem',
                  borderLeft: '2px solid rgba(74,158,255,0.30)',
                  paddingTop: '0.5rem',
                  paddingBottom: '0.5rem',
                }}
              >
                <span
                  className="shrink-0 text-base font-display font-bold"
                  style={{ color: BLUE_LIGHT, minWidth: '1.75rem' }}
                >
                  → {i + 1}.
                </span>
                <span className="text-sm sm:text-base leading-relaxed" style={{ color: '#f0f4ff' }}>
                  {rule}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="text-center mt-8 mb-2">
          <p
            className="text-base sm:text-lg m-0 italic font-display font-semibold"
            style={{ color: BLUE_LIGHT }}
          >
            The 15-min decides DIRECTION. The 5-min decides TIMING. Always.
          </p>
        </div>
      </section>
    </div>
  );
}

function SectionHeader({ accent, accentLight, eyebrow, title }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${accent}, ${accent}aa)`,
          boxShadow: `0 4px 20px ${accent}55`,
        }}
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#0a0a0a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      </div>
      <div>
        <p className="label m-0" style={{ color: accentLight, fontWeight: 700 }}>
          {eyebrow}
        </p>
        <h2 className="font-display font-bold text-2xl sm:text-3xl m-0 text-white">
          {title}
        </h2>
      </div>
    </div>
  );
}
