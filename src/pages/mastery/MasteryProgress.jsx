var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { BarChart3, Target, Flame } from "lucide-react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import {
  fetchAllEntries,
  entriesByWeek,
  entriesByMonth,
  masteryDistribution,
  topTagsByFrequency,
  weakestTopics,
  reviewStreak
} from "../../lib/journal";
import { QA_CONCEPTS, findConceptForEntry } from "../../components/charts/qa-concepts";
const PIE_COLORS = ["#475569", "#ef4444", "#f59e0b", "#fbbf24", "#22c55e", "#14b8a6"];
function MasteryProgress() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    fetchAllEntries().then(setEntries).catch((e) => setError(e?.message || "Failed to load entries")).finally(() => setLoading(false));
  }, []);
  const masteryByConcept = useMemo(() => {
    const stats = [];
    for (const concept of QA_CONCEPTS) {
      const matching = entries.filter((e) => findConceptForEntry(e.pattern_type, e.tags)?.slug === concept.slug);
      const rated = matching.filter((e) => e.confidence_rating != null);
      const avg = rated.length > 0 ? rated.reduce((s, e) => s + (e.confidence_rating || 0), 0) / rated.length : 0;
      if (matching.length > 0) {
        stats.push({ slug: concept.slug, title: concept.title, count: matching.length, avg });
      }
    }
    return stats.sort((a, b) => a.avg - b.avg);
  }, [entries]);
  const renderIntro = /* @__PURE__ */ __name(() => /* @__PURE__ */ jsxs(
    "section",
    {
      className: "rounded-2xl p-5 md:p-6",
      style: {
        background: "linear-gradient(135deg, rgba(251, 191, 36, 0.08) 0%, rgba(15, 23, 42, 0.40) 100%)",
        border: "1px solid rgba(251, 191, 36, 0.25)"
      },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "flex items-center justify-center w-10 h-10 rounded-xl",
              style: { background: "rgba(251, 191, 36, 0.15)", border: "1px solid rgba(251, 191, 36, 0.35)" },
              children: /* @__PURE__ */ jsx(BarChart3, { className: "w-5 h-5", style: { color: "#fbbf24" } })
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "text-xl m-0", children: "Progress" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed m-0", style: { color: "#cbd5e1" }, children: "Your learning report card. Mastery distribution, top tags, weakest topics, review streak, and confidence-by-concept. Drill the patterns at the top of the weakest list." })
      ]
    }
  ), "renderIntro");
  if (loading) return /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
    renderIntro(),
    /* @__PURE__ */ jsx("p", { style: { color: "#94a3b8" }, children: "Loading progress..." })
  ] });
  if (error) {
    const isAuth = error.includes("permissions") || error.includes("insufficient");
    return /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
      renderIntro(),
      /* @__PURE__ */ jsx("div", { className: "rounded-xl px-4 py-3", style: { background: "rgba(239, 68, 68, 0.10)", border: "1px solid rgba(239, 68, 68, 0.40)", color: "#fca5a5" }, children: isAuth ? "Sign in to load your journal entries \u2014 Progress charts your saved Q&A." : `Error: ${error}` })
    ] });
  }
  const total = entries.length;
  const week = entriesByWeek(entries);
  const month = entriesByMonth(entries);
  const mastery = masteryDistribution(entries);
  const topTags = topTagsByFrequency(entries, 10);
  const weak = weakestTopics(entries, 5);
  const streak = reviewStreak(entries);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxs(
      "section",
      {
        className: "rounded-2xl p-5 md:p-6",
        style: {
          background: "linear-gradient(135deg, rgba(251, 191, 36, 0.08) 0%, rgba(15, 23, 42, 0.40) 100%)",
          border: "1px solid rgba(251, 191, 36, 0.25)"
        },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "flex items-center justify-center w-10 h-10 rounded-xl",
                style: { background: "rgba(251, 191, 36, 0.15)", border: "1px solid rgba(251, 191, 36, 0.35)" },
                children: /* @__PURE__ */ jsx(BarChart3, { className: "w-5 h-5", style: { color: "#fbbf24" } })
              }
            ),
            /* @__PURE__ */ jsx("h2", { className: "text-xl m-0", children: "Progress" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed m-0", style: { color: "#cbd5e1" }, children: "Your learning report card. Mastery distribution, top tags, weakest topics, review streak, and confidence-by-concept. Drill the patterns at the top of the weakest list." })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-3", style: { gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }, children: [
      /* @__PURE__ */ jsx(Stat, { label: "Total entries", value: total, accent: "#5eead4" }),
      /* @__PURE__ */ jsx(Stat, { label: "This week", value: week, accent: "#a78bfa" }),
      /* @__PURE__ */ jsx(Stat, { label: "This month", value: month, accent: "#fbbf24" }),
      /* @__PURE__ */ jsx(Stat, { label: "Review streak", value: `${streak} ${streak === 1 ? "day" : "days"}`, accent: "#22c55e", icon: /* @__PURE__ */ jsx(Flame, { className: "w-4 h-4" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-4", style: { gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))" }, children: [
      /* @__PURE__ */ jsxs("section", { className: "rounded-2xl p-5", style: { background: "rgba(255, 255, 255, 0.025)", border: "1px solid rgba(255, 255, 255, 0.08)" }, children: [
        /* @__PURE__ */ jsx("h3", { className: "text-base m-0 mb-3", style: { color: "#5eead4", fontFamily: "Oxanium, system-ui, sans-serif" }, children: "Mastery Distribution" }),
        total === 0 ? /* @__PURE__ */ jsx("p", { className: "text-sm", style: { color: "#94a3b8" }, children: "No data yet." }) : /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: 240, children: /* @__PURE__ */ jsxs(PieChart, { children: [
          /* @__PURE__ */ jsx(Pie, { data: mastery, dataKey: "value", nameKey: "name", cx: "50%", cy: "50%", outerRadius: 85, innerRadius: 50, label: { fill: "#e2e8f0", fontSize: 11 }, children: mastery.map((_, i) => /* @__PURE__ */ jsx(Cell, { fill: PIE_COLORS[i % PIE_COLORS.length], stroke: "#070c18", strokeWidth: 2 }, i)) }),
          /* @__PURE__ */ jsx(Tooltip, { contentStyle: { background: "#0a1020", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 8, color: "#e2e8f0" } })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "rounded-2xl p-5", style: { background: "rgba(255, 255, 255, 0.025)", border: "1px solid rgba(255, 255, 255, 0.08)" }, children: [
        /* @__PURE__ */ jsx("h3", { className: "text-base m-0 mb-3", style: { color: "#5eead4", fontFamily: "Oxanium, system-ui, sans-serif" }, children: "Top Tags" }),
        topTags.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-sm", style: { color: "#94a3b8" }, children: "No tags yet." }) : /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: 240, children: /* @__PURE__ */ jsxs(BarChart, { data: topTags, layout: "vertical", margin: { left: 40 }, children: [
          /* @__PURE__ */ jsx(XAxis, { type: "number", hide: true }),
          /* @__PURE__ */ jsx(YAxis, { type: "category", dataKey: "name", tick: { fontSize: 11, fill: "#cbd5e1" }, width: 110 }),
          /* @__PURE__ */ jsx(Tooltip, { contentStyle: { background: "#0a1020", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 8, color: "#e2e8f0" } }),
          /* @__PURE__ */ jsx(Bar, { dataKey: "value", fill: "#a78bfa", radius: 4 })
        ] }) })
      ] })
    ] }),
    masteryByConcept.length > 0 && /* @__PURE__ */ jsxs(
      "section",
      {
        className: "rounded-2xl p-5 md:p-6",
        style: { background: "rgba(94, 234, 212, 0.04)", border: "1px solid rgba(94, 234, 212, 0.20)" },
        children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-base m-0 mb-1 flex items-center gap-2", style: { color: "#5eead4", fontFamily: "Oxanium, system-ui, sans-serif" }, children: [
            /* @__PURE__ */ jsx(Target, { className: "w-4 h-4" }),
            "Mastery by Concept"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs mb-4", style: { color: "#94a3b8" }, children: "Confidence average for each pattern_type with chart galleries available \u2014 sorted weakest first. Drill the top items." }),
          /* @__PURE__ */ jsx("ul", { className: "list-none p-0 m-0 space-y-2", children: masteryByConcept.map((c) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 text-sm", children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: "num text-[10px] px-2 py-0.5 rounded-full uppercase tracking-[0.18em]",
                style: { background: "rgba(167, 139, 250, 0.10)", color: "#c4b5fd", border: "1px solid rgba(167, 139, 250, 0.30)", minWidth: 130, textAlign: "center" },
                children: c.title
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "flex-1 h-2 rounded-full overflow-hidden", style: { background: "rgba(255, 255, 255, 0.06)" }, children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "h-full",
                style: {
                  width: `${c.avg / 5 * 100}%`,
                  background: c.avg < 2.5 ? "#ef4444" : c.avg < 3.5 ? "#f59e0b" : "#22c55e"
                }
              }
            ) }),
            /* @__PURE__ */ jsxs("span", { className: "num text-xs", style: { color: "#94a3b8", minWidth: 90 }, children: [
              c.avg.toFixed(1),
              " \xB7 ",
              c.count,
              " ",
              c.count === 1 ? "entry" : "entries"
            ] })
          ] }, c.slug)) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "rounded-2xl p-5 md:p-6", style: { background: "rgba(255, 255, 255, 0.025)", border: "1px solid rgba(255, 255, 255, 0.08)" }, children: [
      /* @__PURE__ */ jsx("h3", { className: "text-base m-0 mb-1", style: { color: "#5eead4", fontFamily: "Oxanium, system-ui, sans-serif" }, children: "Weakest Topics" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs mb-3", style: { color: "#94a3b8" }, children: "Lowest average confidence by tag \u2014 focus your drill sessions here." }),
      weak.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-sm", style: { color: "#94a3b8" }, children: "Not enough data yet \u2014 keep reviewing entries to build this list." }) : /* @__PURE__ */ jsx("ul", { className: "list-none p-0 m-0 space-y-2", children: weak.map((w) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 text-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "num text-[11px] px-2 py-0.5 rounded-full", style: { background: "rgba(167, 139, 250, 0.06)", color: "#c4b5fd", border: "1px solid rgba(167, 139, 250, 0.16)", minWidth: 100, textAlign: "center" }, children: w.tag }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 h-2 rounded-full overflow-hidden", style: { background: "rgba(255, 255, 255, 0.06)" }, children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "h-full",
            style: {
              width: `${w.avg / 5 * 100}%`,
              background: w.avg < 2.5 ? "#ef4444" : w.avg < 3.5 ? "#f59e0b" : "#22c55e"
            }
          }
        ) }),
        /* @__PURE__ */ jsxs("span", { className: "num text-xs", style: { color: "#94a3b8", minWidth: 80 }, children: [
          w.avg.toFixed(1),
          " \xB7 ",
          w.count,
          " entries"
        ] })
      ] }, w.tag)) })
    ] })
  ] });
}
__name(MasteryProgress, "MasteryProgress");
function Stat({ label, value, accent, icon }) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-2xl p-4", style: { background: "rgba(255, 255, 255, 0.025)", border: "1px solid rgba(255, 255, 255, 0.08)" }, children: [
    /* @__PURE__ */ jsxs("div", { className: "text-[10px] uppercase tracking-[0.22em] num mb-1 flex items-center gap-1.5", style: { color: accent }, children: [
      icon,
      label
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", style: { fontFamily: "Oxanium, system-ui, sans-serif", color: "#f5f9ff" }, children: value })
  ] });
}
__name(Stat, "Stat");
export default MasteryProgress;