var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { ListChecks, CheckCircle2, Circle, Target, RotateCcw } from "lucide-react";
import { preTradeChecklist, inTradeChecklist, postTradeChecklist } from "../../data/mastery";
import { ChartGallery } from "../../components/charts/day-2026-05-07/ChartGallery";
import { PRE_TRADE_CHARTS, IN_TRADE_CHARTS, POST_TRADE_CHARTS } from "../../components/charts/mastery";
import { ReadAloudButton } from "../../components/ReadAloudButton";
import { buildChecklistScript } from "../../lib/narrator";
const phaseConfig = {
  pre: {
    title: "Pre-Trade",
    desc: "Run this before you take any setup. Eight checks; all must pass.",
    items: preTradeChecklist,
    accent: "#5eead4",
    bg: "rgba(20, 184, 166, 0.06)",
    border: "rgba(20, 184, 166, 0.25)",
    charts: PRE_TRADE_CHARTS
  },
  in: {
    title: "In-Trade",
    desc: "Run this while in a position. Six checks; do not break any.",
    items: inTradeChecklist,
    accent: "#fbbf24",
    bg: "rgba(251, 191, 36, 0.06)",
    border: "rgba(251, 191, 36, 0.25)",
    charts: IN_TRADE_CHARTS
  },
  post: {
    title: "Post-Trade",
    desc: "Run this after every trade \u2014 win or loss. Eight honest answers.",
    items: postTradeChecklist,
    accent: "#a5b4fc",
    bg: "rgba(99, 102, 241, 0.06)",
    border: "rgba(99, 102, 241, 0.25)",
    charts: POST_TRADE_CHARTS
  }
};
const STORAGE_KEY = "unita_mastery_checklists";
const emptyState = { pre: {}, in: {}, post: {} };
function ChecklistsPage() {
  const [active, setActive] = useState("pre");
  const [state, setState] = useState(emptyState);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setState({ ...emptyState, ...JSON.parse(raw) });
    } catch {
    }
  }, []);
  const persist = /* @__PURE__ */ __name((next) => {
    setState(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
    }
  }, "persist");
  const toggle = /* @__PURE__ */ __name((phase, id) => {
    persist({
      ...state,
      [phase]: { ...state[phase], [id]: !state[phase][id] }
    });
  }, "toggle");
  const reset = /* @__PURE__ */ __name((phase) => {
    persist({ ...state, [phase]: {} });
  }, "reset");
  const cfg = phaseConfig[active];
  const checked = cfg.items.filter((i) => state[active][i.id]).length;
  return /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxs(
      "section",
      {
        className: "rounded-2xl p-5 md:p-6",
        style: {
          background: "linear-gradient(135deg, rgba(94, 234, 212, 0.08) 0%, rgba(15, 23, 42, 0.40) 100%)",
          border: "1px solid rgba(94, 234, 212, 0.25)"
        },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "flex items-center justify-center w-10 h-10 rounded-xl",
                style: {
                  background: "rgba(94, 234, 212, 0.15)",
                  border: "1px solid rgba(94, 234, 212, 0.35)"
                },
                children: /* @__PURE__ */ jsx(ListChecks, { className: "w-5 h-5", style: { color: "#5eead4" } })
              }
            ),
            /* @__PURE__ */ jsx("h2", { className: "text-xl m-0", children: "Master Checklists" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed m-0", style: { color: "#cbd5e1" }, children: "Three rituals that make the principles operational. Pre-trade before any entry; In-trade while in a position; Post-trade after every result. Each phase has its own chart-illustrated teaching gallery \u2014 scroll through it to see exactly what each check looks like on a chart. Check items as you go \u2014 your state saves locally and resets when you click Reset." })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2 flex-wrap", children: [
      ["pre", "in", "post"].map((phase) => {
        const cfgT = phaseConfig[phase];
        const isActive = active === phase;
        const count = cfgT.items.filter((i) => state[phase][i.id]).length;
        return /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => setActive(phase),
            className: "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold",
            style: {
              background: isActive ? cfgT.accent + "22" : "rgba(255, 255, 255, 0.025)",
              border: `1px solid ${isActive ? cfgT.accent + "66" : "rgba(255, 255, 255, 0.08)"}`,
              color: isActive ? cfgT.accent : "#94a3b8",
              fontFamily: "Oxanium, system-ui, sans-serif",
              cursor: "pointer"
            },
            children: [
              cfgT.title,
              /* @__PURE__ */ jsxs(
                "span",
                {
                  className: "num text-xs",
                  style: { color: isActive ? cfgT.accent : "#64748b" },
                  children: [
                    count,
                    "/",
                    cfgT.items.length
                  ]
                }
              )
            ]
          },
          phase
        );
      }),
      /* @__PURE__ */ jsxs("div", { className: "ml-auto flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsx(
          ReadAloudButton,
          {
            buildScript: () => buildChecklistScript(active, cfg.items),
            label: `Read ${cfg.title} aloud`,
            size: "sm"
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => reset(active),
            className: "inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs",
            style: {
              background: "rgba(255, 255, 255, 0.025)",
              border: "1px solid rgba(255, 255, 255, 0.10)",
              color: "#94a3b8",
              cursor: "pointer"
            },
            children: [
              /* @__PURE__ */ jsx(RotateCcw, { className: "w-3 h-3" }),
              "Reset ",
              cfg.title
            ]
          }
        )
      ] })
    ] }),
    cfg.charts && cfg.charts.length > 0 && /* @__PURE__ */ jsxs(
      "section",
      {
        className: "rounded-2xl p-5",
        style: {
          background: "rgba(255, 255, 255, 0.02)",
          border: "1px solid rgba(255, 255, 255, 0.06)"
        },
        children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-base m-0 mb-3", style: { color: cfg.accent }, children: [
            "Visual Companion \xB7 ",
            cfg.title
          ] }),
          /* @__PURE__ */ jsx(ChartGallery, { conceptId: "checklist-" + active, charts: cfg.charts })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "section",
      {
        className: "rounded-2xl p-5 md:p-6",
        style: {
          background: cfg.bg,
          border: `1px solid ${cfg.border}`
        },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 mb-3 flex-wrap", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg m-0", style: { color: cfg.accent }, children: [
                cfg.title,
                " Checklist"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm m-0 mt-0.5", style: { color: "#94a3b8" }, children: cfg.desc })
            ] }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "num text-xs px-2.5 py-1 rounded-full",
                style: {
                  background: cfg.accent + "22",
                  border: `1px solid ${cfg.accent}55`,
                  color: cfg.accent
                },
                children: [
                  checked,
                  " / ",
                  cfg.items.length,
                  " done"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "list-none p-0 m-0 space-y-2", children: cfg.items.map((item, i) => {
            const isDone = state[active][item.id];
            return /* @__PURE__ */ jsx(
              "li",
              {
                className: "rounded-xl",
                style: {
                  background: isDone ? `linear-gradient(180deg, ${cfg.accent}11, transparent)` : "rgba(255, 255, 255, 0.025)",
                  border: `1px solid ${isDone ? cfg.accent + "55" : "rgba(255, 255, 255, 0.06)"}`,
                  transition: "all 0.2s"
                },
                children: /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => toggle(active, item.id),
                    className: "w-full flex items-start gap-3 p-4 text-left",
                    style: { background: "transparent", border: "none", cursor: "pointer" },
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "num shrink-0 mt-0.5", style: { color: cfg.accent, fontSize: "0.75rem" }, children: String(i + 1).padStart(2, "0") }),
                      isDone ? /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 shrink-0 mt-0.5", style: { color: cfg.accent } }) : /* @__PURE__ */ jsx(Circle, { className: "w-5 h-5 shrink-0 mt-0.5", style: { color: "#475569" } }),
                      /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "text-sm md:text-base font-semibold mb-1 leading-tight",
                            style: {
                              color: isDone ? cfg.accent : "#f5f9ff",
                              fontFamily: "Oxanium, system-ui, sans-serif",
                              textDecoration: isDone ? "line-through" : "none",
                              textDecorationColor: cfg.accent + "99"
                            },
                            children: item.text
                          }
                        ),
                        /* @__PURE__ */ jsx("div", { className: "text-xs leading-relaxed", style: { color: "#94a3b8" }, children: item.detail }),
                        item.principleRef !== void 0 && /* @__PURE__ */ jsxs("div", { className: "mt-2 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] num", style: { color: "#fbbf24" }, children: [
                          /* @__PURE__ */ jsx(Target, { className: "w-2.5 h-2.5" }),
                          "Principle ",
                          String(item.principleRef).padStart(2, "0")
                        ] })
                      ] })
                    ]
                  }
                )
              },
              item.id
            );
          }) })
        ]
      }
    )
  ] });
}
__name(ChecklistsPage, "ChecklistsPage");
export default ChecklistsPage;