var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { useEffect, useMemo, useState } from "react";
import { Brain, HelpCircle, Eye, Filter, RotateCcw } from "lucide-react";
import {
  fetchAllEntries,
  pickReviewEntry,
  recordReview,
  REVIEW_BUTTONS
} from "../../lib/journal";
import { ChartGallery } from "../../components/charts/day-2026-05-07/ChartGallery";
import { findConceptForEntry, QA_CONCEPTS } from "../../components/charts/qa-concepts";
function MasteryDrill() {
  const [mode, setMode] = useState("quiz");
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [current, setCurrent] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [showCharts, setShowCharts] = useState(false);
  const [saving, setSaving] = useState(false);
  const [seen, setSeen] = useState(0);
  const [patternFilter, setPatternFilter] = useState("");
  useEffect(() => {
    fetchAllEntries().then((all) => {
      setEntries(all);
      setCurrent(pickReviewEntry(all));
    }).catch((e) => setError(e?.message || "Failed to load entries")).finally(() => setLoading(false));
  }, []);
  const filteredPool = useMemo(() => {
    if (!patternFilter) return entries;
    return entries.filter((e) => e.pattern_type === patternFilter);
  }, [entries, patternFilter]);
  const allPatterns = useMemo(() => {
    const s = /* @__PURE__ */ new Set();
    for (const e of entries) if (e.pattern_type) s.add(e.pattern_type);
    return [...s].sort();
  }, [entries]);
  const advance = /* @__PURE__ */ __name((excludeId) => {
    setCurrent(pickReviewEntry(filteredPool.length ? filteredPool : entries, excludeId));
    setRevealed(false);
    setShowCharts(false);
  }, "advance");
  const handleRate = /* @__PURE__ */ __name(async (rating) => {
    if (!current?.id) return;
    setSaving(true);
    try {
      await recordReview(current.id, rating);
      setSeen((c) => c + 1);
      const updated = entries.map((e) => e.id === current.id ? { ...e, confidence_rating: rating, review_count: e.review_count + 1 } : e);
      setEntries(updated);
      advance(current.id);
    } catch (e) {
      setError(e?.message || "Failed to save rating");
    } finally {
      setSaving(false);
    }
  }, "handleRate");
  const concept = current ? findConceptForEntry(current.pattern_type, current.tags) : null;
  const renderIntro = /* @__PURE__ */ __name(() => /* @__PURE__ */ React.createElement(
    "section",
    {
      className: "rounded-2xl p-5 md:p-6",
      style: {
        background: "linear-gradient(135deg, rgba(167, 139, 250, 0.08) 0%, rgba(15, 23, 42, 0.40) 100%)",
        border: "1px solid rgba(167, 139, 250, 0.25)"
      }
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 mb-3" }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "flex items-center justify-center w-10 h-10 rounded-xl",
        style: { background: "rgba(167, 139, 250, 0.15)", border: "1px solid rgba(167, 139, 250, 0.35)" }
      },
      /* @__PURE__ */ React.createElement(Brain, { className: "w-5 h-5", style: { color: "#c4b5fd" } })
    ), /* @__PURE__ */ React.createElement("h2", { className: "text-xl m-0" }, "Drill")),
    /* @__PURE__ */ React.createElement("p", { className: "text-sm leading-relaxed m-0", style: { color: "#cbd5e1" } }, "Active recall + spaced repetition. ", /* @__PURE__ */ React.createElement("strong", null, "Quiz"), " hides the answer until you reveal it; ", /* @__PURE__ */ React.createElement("strong", null, "Review"), " grades you on a 4-point scale to schedule the next encounter. Both pull from your library \u2014 and after you self-rate, you can flip the chart gallery to see the pattern visually.")
  ), "renderIntro");
  if (loading) return /* @__PURE__ */ React.createElement("div", { className: "space-y-5" }, renderIntro(), /* @__PURE__ */ React.createElement("p", { style: { color: "#94a3b8" } }, "Loading drill queue..."));
  if (error) {
    const isAuth = error.includes("permissions") || error.includes("insufficient");
    return /* @__PURE__ */ React.createElement("div", { className: "space-y-5" }, renderIntro(), /* @__PURE__ */ React.createElement("div", { className: "rounded-xl px-4 py-3", style: { background: "rgba(239, 68, 68, 0.10)", border: "1px solid rgba(239, 68, 68, 0.40)", color: "#fca5a5" } }, isAuth ? "Sign in to load your journal entries \u2014 Drill needs your saved Q&A." : `Error: ${error}`));
  }
  if (entries.length === 0) {
    return /* @__PURE__ */ React.createElement("div", { className: "space-y-5" }, renderIntro(), /* @__PURE__ */ React.createElement("div", { className: "rounded-2xl p-8 text-center", style: { background: "rgba(255, 255, 255, 0.025)", border: "1px solid rgba(255, 255, 255, 0.08)" } }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg m-0 mb-2", style: { fontFamily: "Oxanium, system-ui, sans-serif" } }, "No entries to drill yet"), /* @__PURE__ */ React.createElement("p", { style: { color: "#94a3b8" } }, "Add entries through the Library tab, then come back here.")));
  }
  return /* @__PURE__ */ React.createElement("div", { className: "space-y-5" }, /* @__PURE__ */ React.createElement(
    "section",
    {
      className: "rounded-2xl p-5 md:p-6",
      style: {
        background: "linear-gradient(135deg, rgba(167, 139, 250, 0.08) 0%, rgba(15, 23, 42, 0.40) 100%)",
        border: "1px solid rgba(167, 139, 250, 0.25)"
      }
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 mb-3" }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "flex items-center justify-center w-10 h-10 rounded-xl",
        style: { background: "rgba(167, 139, 250, 0.15)", border: "1px solid rgba(167, 139, 250, 0.35)" }
      },
      /* @__PURE__ */ React.createElement(Brain, { className: "w-5 h-5", style: { color: "#c4b5fd" } })
    ), /* @__PURE__ */ React.createElement("h2", { className: "text-xl m-0" }, "Drill")),
    /* @__PURE__ */ React.createElement("p", { className: "text-sm leading-relaxed m-0", style: { color: "#cbd5e1" } }, "Active recall + spaced repetition. ", /* @__PURE__ */ React.createElement("strong", null, "Quiz"), " hides the answer until you reveal it; ", /* @__PURE__ */ React.createElement("strong", null, "Review"), " grades you on a 4-point scale to schedule the next encounter. Both pull from your library \u2014 and after you self-rate, you can flip the chart gallery to see the pattern visually.")
  ), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 flex-wrap" }, ["quiz", "review"].map((m) => {
    const isActive = mode === m;
    const Icon = m === "quiz" ? HelpCircle : Brain;
    const label = m === "quiz" ? "Quiz Mode (Active Recall)" : "Review Mode (Spaced Repetition)";
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: m,
        type: "button",
        onClick: () => {
          setMode(m);
          setRevealed(false);
          setShowCharts(false);
        },
        className: "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold",
        style: {
          background: isActive ? "rgba(167, 139, 250, 0.18)" : "rgba(255, 255, 255, 0.025)",
          border: `1px solid ${isActive ? "rgba(167, 139, 250, 0.50)" : "rgba(255, 255, 255, 0.08)"}`,
          color: isActive ? "#c4b5fd" : "#94a3b8",
          fontFamily: "Oxanium, system-ui, sans-serif",
          cursor: "pointer"
        }
      },
      /* @__PURE__ */ React.createElement(Icon, { className: "w-4 h-4" }),
      label
    );
  }), /* @__PURE__ */ React.createElement("div", { className: "ml-auto flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Filter, { className: "w-3.5 h-3.5", style: { color: "#94a3b8" } }), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: patternFilter,
      onChange: (e) => {
        setPatternFilter(e.target.value);
        advance();
      },
      className: "text-sm rounded-lg px-3 py-2",
      style: {
        background: "rgba(255, 255, 255, 0.04)",
        border: "1px solid rgba(255, 255, 255, 0.10)",
        color: "#e2e8f0"
      }
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, "All patterns"),
    allPatterns.map((p) => /* @__PURE__ */ React.createElement("option", { key: p, value: p }, p))
  ))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 text-xs", style: { color: "#94a3b8" } }, /* @__PURE__ */ React.createElement("span", null, "Drilled this session: ", /* @__PURE__ */ React.createElement("span", { className: "num", style: { color: "#c4b5fd" } }, seen)), /* @__PURE__ */ React.createElement("span", null, "\xB7"), /* @__PURE__ */ React.createElement("span", null, "Pool: ", /* @__PURE__ */ React.createElement("span", { className: "num", style: { color: "#5eead4" } }, filteredPool.length || entries.length), " entries")), current && /* @__PURE__ */ React.createElement(
    "article",
    {
      className: "rounded-2xl p-5 md:p-6",
      style: { background: "rgba(255, 255, 255, 0.025)", border: "1px solid rgba(255, 255, 255, 0.08)" }
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 flex-wrap mb-3" }, /* @__PURE__ */ React.createElement("span", { className: "num text-xs px-2.5 py-1 rounded-full", style: { background: "rgba(167, 139, 250, 0.12)", color: "#c4b5fd", border: "1px solid rgba(167, 139, 250, 0.30)" } }, current.entry_date), current.instrument && /* @__PURE__ */ React.createElement("span", { className: "num text-xs", style: { color: "#94a3b8" } }, "\xB7 ", current.instrument), current.confidence_rating != null && /* @__PURE__ */ React.createElement("span", { className: "num text-xs px-2 py-0.5 rounded-full", style: { background: "rgba(251, 191, 36, 0.10)", color: "#fbbf24", border: "1px solid rgba(251, 191, 36, 0.30)" } }, "Last: ", current.confidence_rating, "/5"), /* @__PURE__ */ React.createElement("span", { className: "num text-xs px-2 py-0.5 rounded-full", style: { background: "rgba(94, 234, 212, 0.10)", color: "#5eead4", border: "1px solid rgba(94, 234, 212, 0.30)" } }, "Reviews: ", current.review_count)),
    /* @__PURE__ */ React.createElement("h3", { className: "text-xl md:text-2xl m-0 mb-2 leading-tight", style: { fontFamily: "Oxanium, system-ui, sans-serif" } }, current.title),
    current.context && /* @__PURE__ */ React.createElement("p", { className: "text-sm mb-4 m-0", style: { color: "#94a3b8", fontStyle: "italic" } }, "Context: ", current.context),
    /* @__PURE__ */ React.createElement("div", { className: "rounded-xl px-4 py-3 mb-4", style: { background: "rgba(167, 139, 250, 0.08)", border: "1px solid rgba(167, 139, 250, 0.25)" } }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] uppercase tracking-[0.22em] num mb-1", style: { color: "#c4b5fd" } }, "Question"), /* @__PURE__ */ React.createElement("p", { className: "text-base font-semibold m-0", style: { color: "#f5f9ff" } }, current.question)),
    (mode === "review" || revealed) && /* @__PURE__ */ React.createElement("div", { className: "space-y-3 mb-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] uppercase tracking-[0.22em] num mb-1.5", style: { color: "#5eead4" } }, "Answer"), /* @__PURE__ */ React.createElement("div", { className: "text-sm leading-relaxed whitespace-pre-wrap", style: { color: "#e2e8f0" } }, current.answer)), current.key_takeaways && /* @__PURE__ */ React.createElement("div", { className: "rule-callout" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] uppercase tracking-[0.22em] num mb-2", style: { color: "#5eead4" } }, "Key Takeaways"), /* @__PURE__ */ React.createElement("div", { className: "text-sm leading-relaxed whitespace-pre-wrap", style: { color: "#e2e8f0" } }, current.key_takeaways))),
    mode === "quiz" && !revealed ? /* @__PURE__ */ React.createElement("div", { className: "text-center py-6" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => setRevealed(true),
        className: "text-base px-6 py-3 rounded-lg font-semibold",
        style: {
          background: "linear-gradient(135deg, #14b8a6, #0d9488)",
          color: "#070c18",
          border: "none",
          cursor: "pointer",
          fontFamily: "Oxanium, system-ui, sans-serif"
        }
      },
      "Show Answer"
    ), /* @__PURE__ */ React.createElement("p", { className: "text-xs mt-3 m-0", style: { color: "#94a3b8" } }, "Try to recall the answer first.")) : /* @__PURE__ */ React.createElement(React.Fragment, null, concept && /* @__PURE__ */ React.createElement("div", { className: "mb-4" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => setShowCharts((s) => !s),
        className: "inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full",
        style: {
          background: "rgba(94, 234, 212, 0.10)",
          color: "#5eead4",
          border: "1px solid rgba(94, 234, 212, 0.30)",
          cursor: "pointer",
          fontFamily: "Oxanium, system-ui, sans-serif"
        }
      },
      /* @__PURE__ */ React.createElement(Eye, { className: "w-3.5 h-3.5" }),
      showCharts ? "Hide" : "Show",
      " ",
      concept.charts.length,
      " teaching charts \xB7 ",
      concept.title
    ), showCharts && /* @__PURE__ */ React.createElement("div", { className: "mt-3" }, /* @__PURE__ */ React.createElement(ChartGallery, { conceptId: "drill-" + (current.id || "x"), charts: concept.charts }))), mode === "review" ? /* @__PURE__ */ React.createElement("div", { className: "grid gap-2", style: { gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" } }, REVIEW_BUTTONS.map((btn) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: btn.value,
        disabled: saving,
        onClick: () => handleRate(btn.value),
        className: "px-3 py-3 rounded-lg text-sm font-bold",
        style: {
          background: "transparent",
          border: `2px solid ${btn.color}`,
          color: btn.color,
          cursor: saving ? "not-allowed" : "pointer",
          fontFamily: "Oxanium, system-ui, sans-serif"
        }
      },
      btn.label
    ))) : /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-semibold m-0 mb-2", style: { color: "#f5f9ff" } }, "Did I know this?"), /* @__PURE__ */ React.createElement("div", { className: "grid gap-2", style: { gridTemplateColumns: "repeat(3, 1fr)" } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        disabled: saving,
        onClick: () => handleRate(2),
        className: "px-3 py-3 rounded-lg text-sm font-bold",
        style: { background: "transparent", border: "2px solid #ef4444", color: "#ef4444", cursor: saving ? "not-allowed" : "pointer", fontFamily: "Oxanium, system-ui, sans-serif" }
      },
      "No"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        disabled: saving,
        onClick: () => handleRate(3),
        className: "px-3 py-3 rounded-lg text-sm font-bold",
        style: { background: "transparent", border: "2px solid #f59e0b", color: "#f59e0b", cursor: saving ? "not-allowed" : "pointer", fontFamily: "Oxanium, system-ui, sans-serif" }
      },
      "Sort of"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        disabled: saving,
        onClick: () => handleRate(5),
        className: "px-3 py-3 rounded-lg text-sm font-bold",
        style: { background: "transparent", border: "2px solid #22c55e", color: "#22c55e", cursor: saving ? "not-allowed" : "pointer", fontFamily: "Oxanium, system-ui, sans-serif" }
      },
      "Yes"
    ))), /* @__PURE__ */ React.createElement("div", { className: "text-right mt-3" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => advance(current.id),
        disabled: saving,
        className: "inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg",
        style: {
          background: "rgba(255, 255, 255, 0.025)",
          border: "1px solid rgba(255, 255, 255, 0.10)",
          color: "#94a3b8",
          cursor: saving ? "not-allowed" : "pointer"
        }
      },
      /* @__PURE__ */ React.createElement(RotateCcw, { className: "w-3 h-3" }),
      "Skip / Next"
    )))
  ), /* @__PURE__ */ React.createElement("div", { className: "text-xs pt-2", style: { color: "#64748b" } }, "Chart galleries available for: ", QA_CONCEPTS.map((c) => c.title).join(" \xB7 ")));
}
__name(MasteryDrill, "MasteryDrill");
export default MasteryDrill;