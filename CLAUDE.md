# CLAUDE.md — Last Mile

## Project name
**Last Mile** — Discipline-engineering app for futures traders

## Purpose
Arnie has 5.5 years of pattern recognition and a persistent give-back problem (sessions go green, then he keeps trading and gives the gains back). This app is the mechanical solution: rule-locked sessions, pre-trade rituals, profit-target lockouts, and pattern-reflex training. It is NOT a charting tool, NOT a trading platform, NOT connected to any broker. It is a behavior-change tool.

## GitHub repo
`arnoldshapiro-del/last-mile` — live, default branch `main`.

## Netlify URL
`https://arnies-last-mile.netlify.app` — live, auto-deploys on push to main.

## Tech stack
- Vite 5 + React 18 + React Router 6
- Tailwind CSS 3 (CommonJS config — `tailwind.config.cjs`, `postcss.config.cjs`)
- Recharts (Progress module charts)
- localStorage for all persistence (prefix `lastmile:`)
- Web Audio API (no audio files — synthesized brief acoustic cues)

## Status
- **Deployed and live (2026-05-15).** GitHub + Netlify both active.
- All 6 original modules + Live Trading Mastery section (Principles, Core Lessons, Master Checklists, Daily Lessons, Drill, Library, Progress, Overview).
- Dev server runs on port 5300 via launch.json config "last-mile".
- Daily lesson workflow proven end-to-end: paste Claude.ai transcript → JSON + Firestore push + chart concept files + deploy in ~45-90 min.
- Per-date chart registry in `src/pages/mastery/DailyLessonPage.jsx` (`CHARTS_BY_DATE`) wires `2026-05-07`, `2026-05-11`, `2026-05-12`, `2026-05-12-evening`, `2026-05-13`, `2026-05-13-evening`, `2026-05-14`, `2026-05-15`.
- Chart inventory: ~470 hand-crafted SVG candlestick charts across Principles/Core Lessons/Q&A/Checklists/Overview/8 daily lessons.

**Locked /journal route (added 2026-05-15):** Personal Trading Journal & Reflection. Behind Firebase Google sign-in + email whitelist (`arnold.shapiro@gmail.com`, `mshapiro@sibcycline.com`) in `src/lib/authConfig.js`. Uses the SAME Firebase project (`shapiro-apps`) as Bootcamp. Inner `src/pages/journal/JournalGate.jsx` enforces the whitelist with sign-out on mismatch. Discreet lowercase "journal" link in the sidebar footer.

**Path rename (2026-05-15):** the existing 5-Question Journal moved from `/journal` to `/checkin` (sidebar label changed to "Check-In"). Feature itself unchanged — just at a new path so the locked `/journal` could take that path. Updated InSession.jsx + Home.jsx internal links.

**Trend Master Class (2026-05-15):** every chart on the page now click-to-fullscreen via ClickableChart wrapper. Sections wrapped: 5 trend states, Scenario A/B, 10 real-world cards, 3 chop sub-types. Lightbox UX mirrors the daily-lesson ChartGallery. Section 12 / Why-this-works / per-rule Iron Rule charts are Bootcamp-only — not yet ported to Last Mile.

## Daily lesson pipeline
1. Arnie pastes Claude.ai trading transcript at end of trading day
2. Lesson JSON saved to `Daily Lesson Pipeline\drafts\YYYY-MM-DD-FULL.json` on Desktop
3. Pushed to Firestore via `C:\Users\arnol\.claude\scripts\firestore-seed\push-lesson.mjs`
4. Chart concept files created at `src/components/charts/day-YYYY-MM-DD/concepts/` (6-14 files)
5. Bundle index created at `src/components/charts/day-YYYY-MM-DD/index.js`
6. Mirrored to unis-ta-bootcamp-day1 app (chart bundle is per-app local; Firestore is shared)
7. Per-date registry updated in `DailyLessonPage.jsx`
8. Build + commit + push → Netlify auto-deploys
9. Optional companion HTML at `Desktop\YYYY-MM-DD-<topic>.html` for offline study

## Brooks Discipline Layer (Phase C, 2026-05-17)
Route: `/protocol/brooks-discipline`. Native Last Mile aesthetic (dark/teal terminal, NOT Bootcamp's Brooks Hub). Sidebar entry between "Protocol" and "Check-In". Home page has a teal bridge card linking to it.

Four collapsible cards:
1. **Pre-Market Brooks Check** — 7-item checklist persisted per-day in `lastmile:brooks:premarket`. Method radios (`patterns_on_2min` default vs `patterns_on_5min`). Resets at midnight.
2. **Per-Trade Brooks Check** — opens `BrooksPerTradeModal`. Six quality checks. Floating `⚡ TRADE ABOUT TO TAKE` button is also pinned to top-right of `/protocol/in-session` for one-click access during a live session. Decision (`taken`/`skipped`) logs to `lastmile:brooks:pertrade`.
3. **Post-Trade Brooks Review** — opens `BrooksPostTradeModal`. Five fields (pattern, signal-bar quality, stop placement, exit, one-sentence lesson, 10-char minimum). On InSession, this modal opens AUTOMATICALLY after each `submitTrade` call (skipped when a profit-target / give-back / loss-warn overlay is already firing — those take precedence). Logs to `lastmile:brooks:posttrade`.
4. **Today's Brooks Lessons** — `BrooksLessonsTodayPanel` fetches `https://unis-ta-bootcamp-day1.netlify.app/lessons/index.json` (same data home as the Bootcamp Brooks Hub), filters to today + `brooks`/`tape_reading`. CORS header `Access-Control-Allow-Origin: *` on `/lessons/*` in the Bootcamp netlify.toml allows the cross-origin fetch from this app.

Files: `src/pages/BrooksDiscipline.jsx`, `src/components/BrooksPerTradeModal.jsx`, `src/components/BrooksPostTradeModal.jsx`, `src/components/BrooksLessonsTodayPanel.jsx`. Store helpers added to `src/lib/store.js` (`getBrooksPreMarket`, `setBrooksPreMarket`, `isBrooksPreMarketComplete`, `BROOKS_PRE_ITEMS`, `logBrooksPerTrade`, `getBrooksPerTradeToday`, `logBrooksPostTrade`, `getBrooksPostTradeToday`).

## Per-trade lesson save (in-app, 2026-05-17 — replaces desktop .bat)
On Home (`/`) there's now an in-app "📥 SAVE TODAY'S LESSONS FROM CLIPBOARD" button. The user copies the per-trade JSON output from Claude.ai, opens Last Mile (or Brooks Hub in Bootcamp), clicks the button. The button reads the clipboard → POSTs to `/.netlify/functions/save-lessons` → the function commits each lesson to `arnoldshapiro-del/unis-ta-bootcamp-day1`'s `public/lessons/{category}/{lesson_id}-{subcategory}.json` plus an upserted `index.json` in ONE atomic GitHub commit.
- Function source: `netlify/functions/save-lessons.mjs` (identical to the Bootcamp's copy)
- Required env var on the Netlify site for Last Mile: `GITHUB_TOKEN` (fine-grained PAT with Contents: write on `arnoldshapiro-del/unis-ta-bootcamp-day1`)
- Schema: same `docs/LESSON_JSON_SCHEMA.md` that lives in the Bootcamp repo
- This makes the desktop `Save Today's Lesson.bat` optional/deletable

## Modules built (per spec)
1. **Home (`/`)** — locked commitments display, four principles cards, today's pattern focus, quick stats
2. **Pre-Session Ritual (`/protocol/pre-session`)** — 4-step flow: calm check → lock commitments → read aloud → today's threat
3. **In-Session Companion (`/protocol/in-session`)** — vital tiles, P&L logging, 3 full-screen takeover alerts (profit lock, give-back, loss warn), override-with-friction form
4. **5-Question Journal (`/journal`)** — onboarding card, 5 questions, compliance score, streak update
5. **Drill (`/drill`)** — 40 drills across 8 patterns, 5-second study phase, weakness map, adaptive 3× weighting under 70%
6. **Setup Labs** — Bear Flag (`/lab/bear-flag`, 10 sections) and Double Top (`/lab/double-top`, 7 sections including interactive scrubber + live RTY May 5 example)
7. **Progress (`/progress`)** — 4 Recharts charts + Honesty Zone auto-text generator

## Key files
- `src/App.jsx` — routes
- `src/components/Layout.jsx` — sidebar (desktop) + bottom nav (mobile)
- `src/components/CandlestickChart.jsx` — generic SVG candle/volume renderer with annotation primitives (hline, trendline, box, label, arrow)
- `src/data/drills.js` — 40 drills built procedurally from candle-data generators (5 per pattern × 8 patterns)
- `src/data/threats.js` — 10 threat phrasings for the pre-session ritual step 4
- `src/lib/store.js` — localStorage wrapper + commitments/session/journal/streak/drill helpers
- `src/lib/audio.js` — Web Audio synthesized cues
- `src/lib/util.js` — formatters + adaptive pool builder

## Important decisions
- **No real-time market data.** Per spec.
- **No account/login.** Single-user local app.
- **localStorage, not sessionStorage.** Persists across browser closes.
- **Tailwind config is `.cjs`** because `package.json` is `"type": "module"` and Tailwind v3 PostCSS resolution had trouble with ESM config. Content paths are absolute via `path.join(__dirname, ...)` to avoid the "no utility classes detected" issue.
- **Ports:** Dev server uses 5300 (added to root `Desktop\.claude\launch.json` as `last-mile`).

## Known issues
None at end of build. React Router v7 future-flag warnings silenced via opt-in flags in main.jsx.

## What's next
Per the spec's build order, next steps require Arnie's go-ahead:
- **Step 14:** push to GitHub (`arnoldshapiro-del/last-mile`)
- Then connect Netlify auto-build (installation_id 77160536)
- Add to gallery (arnies-app-showcase) once live
- Create .url shortcut in "All Of My Working Apps That Are Beautiful"

## Project-specific rules
- **DO NOT** add patterns beyond the 8 in the drill module. Only the 8 specified.
- **DO NOT** soften the Honesty Zone copy in Progress. It must show real data plainly.
- **DO NOT** touch GitHub or attempt deployment without explicit instruction.
- **DO NOT** attempt Vercel CLI under any circumstances.
- The Double Top lab's live RTY example chart references Arnie's actual May 5, 2026 setup. Keep that section faithful to reality — Bearish Engulfing #111 at 2850-2851, valley ~2840.

## Session Hygiene

SESSION HYGIENE RULES (auto-execute, do not ask)

1. **PAUSE SUMMARY (mandatory)**
   At any natural stopping point — when a phase completes, before a long pause, when context is getting heavy, or when Arnie says he's stepping away — post a final summary message in this exact format:

   ```
   PAUSING HERE.
   Last completed: [specific description of what was just finished]
   Next up: [specific description of what comes next]
   Resume here when ready.
   ```

   Post this WITHOUT being asked. It is the last thing you do before the session goes quiet.

2. **SESSION RENAME SUGGESTION (mandatory at pause)**
   After the pause summary above, suggest a descriptive session rename in this format:

   ```
   Suggested session name: '[Project] - [Phase] - [Status]'
   (e.g., 'Brooks Integration - Phase D+E - Done')
   To rename: right-click this session in the sidebar → Rename.
   ```

3. **RESUME ORIENTATION (on session start)**
   When a session begins, if the prompt references prior work, immediately confirm what was previously completed before doing anything new. Don't redo work that's already done.
