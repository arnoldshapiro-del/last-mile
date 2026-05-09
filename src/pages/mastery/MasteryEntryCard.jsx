var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ChevronDown, ChevronRight, Eye, Tag, Target } from "lucide-react";
import { ChartGallery } from "../../components/charts/day-2026-05-07/ChartGallery";
import { findConceptForEntry } from "../../components/charts/qa-concepts";
import { ReadAloudButton } from "../../components/ReadAloudButton";
import { buildJournalEntryScript } from "../../lib/narrator";
const ENTRY_TYPE_COLORS = {
  asked: "#5eead4",
  observed: "#a78bfa",
  mistake: "#ef4444",
  insight: "#fbbf24"
};
function MasteryEntryCard({ entry, defaultOpen = false, showChartByDefault = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const [chartOpen, setChartOpen] = useState(showChartByDefault);
  const concept = findConceptForEntry(entry.pattern_type, entry.tags);
  const typeColor = ENTRY_TYPE_COLORS[entry.entry_type] || "#94a3b8";
  return /* @__PURE__ */ jsxs(
    "article",
    {
      className: "rounded-2xl overflow-hidden",
      style: {
        background: "rgba(255, 255, 255, 0.025)",
        border: "1px solid rgba(255, 255, 255, 0.08)"
      },
      children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => setOpen((o) => !o),
            className: "w-full flex items-start gap-3 p-4 text-left",
            style: { background: "transparent", border: "none", cursor: "pointer" },
            "aria-expanded": open,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-1.5", children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "num text-[10px] tracking-[0.18em] px-2 py-0.5 rounded-full uppercase",
                      style: {
                        background: typeColor + "22",
                        border: `1px solid ${typeColor}55`,
                        color: typeColor
                      },
                      children: entry.entry_type
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "num text-xs", style: { color: "#94a3b8" }, children: entry.entry_date }),
                  entry.instrument && /* @__PURE__ */ jsx("span", { className: "num text-xs px-2 py-0.5 rounded-full", style: { background: "rgba(94, 234, 212, 0.10)", color: "#5eead4", border: "1px solid rgba(94, 234, 212, 0.30)" }, children: entry.instrument }),
                  entry.confidence_rating != null && /* @__PURE__ */ jsxs("span", { className: "num text-xs px-2 py-0.5 rounded-full", style: { background: "rgba(251, 191, 36, 0.10)", color: "#fbbf24", border: "1px solid rgba(251, 191, 36, 0.30)" }, children: [
                    entry.confidence_rating,
                    "/5"
                  ] }),
                  concept && /* @__PURE__ */ jsxs("span", { className: "text-[10px] tracking-[0.18em] px-2 py-0.5 rounded-full num", style: { background: "rgba(167, 139, 250, 0.10)", color: "#c4b5fd", border: "1px solid rgba(167, 139, 250, 0.30)" }, children: [
                    concept.charts.length,
                    " CHARTS"
                  ] })
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "text-base md:text-lg m-0 leading-snug", style: { color: "#f5f9ff", fontFamily: "Oxanium, system-ui, sans-serif" }, children: entry.title }),
                entry.context && !open && /* @__PURE__ */ jsx("p", { className: "text-xs mt-1 m-0", style: { color: "#94a3b8", fontStyle: "italic" }, children: entry.context })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "shrink-0 mt-1", style: { color: "#94a3b8" }, children: open ? /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(ChevronRight, { className: "w-5 h-5" }) })
            ]
          }
        ),
        open && /* @__PURE__ */ jsxs("div", { className: "px-4 pb-4 space-y-4", style: { borderTop: "1px solid rgba(255, 255, 255, 0.06)" }, children: [
          /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx(
            ReadAloudButton,
            {
              buildScript: () => buildJournalEntryScript(entry),
              label: "Read this entry aloud",
              size: "sm"
            }
          ) }),
          entry.context && /* @__PURE__ */ jsxs("p", { className: "text-sm m-0", style: { color: "#94a3b8", fontStyle: "italic" }, children: [
            "Context: ",
            entry.context
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] num mb-1.5", style: { color: "#5eead4" }, children: "Question" }),
            /* @__PURE__ */ jsx("p", { className: "text-base font-semibold m-0", style: { color: "#f5f9ff" }, children: entry.question })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] num mb-1.5", style: { color: "#5eead4" }, children: "Answer" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm leading-relaxed whitespace-pre-wrap", style: { color: "#e2e8f0" }, children: entry.answer })
          ] }),
          entry.key_takeaways && /* @__PURE__ */ jsxs("div", { className: "rule-callout", children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] num mb-2", style: { color: "#5eead4" }, children: "Key Takeaways" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm leading-relaxed whitespace-pre-wrap", style: { color: "#e2e8f0" }, children: entry.key_takeaways })
          ] }),
          concept && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => setChartOpen((o) => !o),
                className: "inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full",
                style: {
                  background: "rgba(167, 139, 250, 0.10)",
                  color: "#c4b5fd",
                  border: "1px solid rgba(167, 139, 250, 0.30)",
                  cursor: "pointer",
                  fontFamily: "Oxanium, system-ui, sans-serif"
                },
                children: [
                  /* @__PURE__ */ jsx(Eye, { className: "w-3.5 h-3.5" }),
                  chartOpen ? "Hide" : "Show",
                  " ",
                  concept.charts.length,
                  " teaching charts \xB7 ",
                  concept.title
                ]
              }
            ),
            chartOpen && /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx(ChartGallery, { conceptId: "entry-" + (entry.id || "x"), charts: concept.charts }) })
          ] }),
          (entry.tags?.length || entry.pattern_type || entry.time_of_day) && /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-1.5 pt-2", style: { borderTop: "1px solid rgba(255, 255, 255, 0.04)" }, children: [
            entry.pattern_type && /* @__PURE__ */ jsxs("span", { className: "num text-[11px] px-2 py-0.5 rounded-full inline-flex items-center gap-1", style: { background: "rgba(94, 234, 212, 0.10)", color: "#5eead4", border: "1px solid rgba(94, 234, 212, 0.20)" }, children: [
              /* @__PURE__ */ jsx(Target, { className: "w-2.5 h-2.5" }),
              entry.pattern_type
            ] }),
            entry.time_of_day && /* @__PURE__ */ jsx("span", { className: "num text-[11px] px-2 py-0.5 rounded-full", style: { background: "rgba(255, 255, 255, 0.04)", color: "#94a3b8", border: "1px solid rgba(255, 255, 255, 0.08)" }, children: entry.time_of_day }),
            (entry.tags || []).map((t) => /* @__PURE__ */ jsxs("span", { className: "text-[11px] px-2 py-0.5 rounded-full inline-flex items-center gap-1", style: { background: "rgba(167, 139, 250, 0.06)", color: "#c4b5fd", border: "1px solid rgba(167, 139, 250, 0.16)" }, children: [
              /* @__PURE__ */ jsx(Tag, { className: "w-2.5 h-2.5" }),
              t
            ] }, t))
          ] })
        ] })
      ]
    }
  );
}
__name(MasteryEntryCard, "MasteryEntryCard");
export {
  MasteryEntryCard as default
};
