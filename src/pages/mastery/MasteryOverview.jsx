var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { Target, BookOpen, ListChecks, Calendar, ArrowRight, TrendingUp, Eye } from "lucide-react";
import { principles, coreLessons, formatDailyDate } from "../../data/mastery";
import { useDailyLessons } from "../../data/mastery/useFirestoreDailyLessons";
import { ChartGallery } from "../../components/charts/day-2026-05-07/ChartGallery";
import { OVERVIEW_HERO_CHARTS } from "../../components/charts/mastery";
import { ReadAloudButton } from "../../components/ReadAloudButton";
import { buildOverviewScript } from "../../lib/narrator";
function MasteryOverview() {
  const { lessons: dailyLessons } = useDailyLessons();
  const latest = dailyLessons[0];
  const tiles = [
    {
      to: "/mastery/principles",
      icon: Target,
      title: "10 Master Principles",
      desc: "The spine. The decision tree. Each principle now has 6 teaching charts and 3 Q&A units.",
      stat: `${principles.length} principles \xB7 60 charts`,
      accent: "#fbbf24"
    },
    {
      to: "/mastery/lessons",
      icon: BookOpen,
      title: "Core Lessons",
      desc: "Pole mastery, flag mechanics, entry rules, multi-confirmation, the staircase, psychology \u2014 each with 6 charts.",
      stat: `${coreLessons.length} lessons \xB7 60 charts`,
      accent: "#14b8a6"
    },
    {
      to: "/mastery/checklists",
      icon: ListChecks,
      title: "Master Checklists",
      desc: "Pre-trade, in-trade, post-trade. Each phase has its own visual companion gallery.",
      stat: "3 checklists \xB7 14 charts",
      accent: "#5eead4"
    },
    {
      to: "/mastery/daily",
      icon: Calendar,
      title: "Daily Lessons",
      desc: "Every day a new lesson, organized by date, growing forever. Click any card to open it.",
      stat: `${dailyLessons.length} entries`,
      accent: "#a78bfa"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs(
      "section",
      {
        className: "rounded-2xl p-6 md:p-8 relative overflow-hidden",
        style: {
          background: "linear-gradient(135deg, rgba(20, 184, 166, 0.10) 0%, rgba(15, 23, 42, 0.40) 50%, rgba(124, 58, 237, 0.08) 100%)",
          border: "1px solid rgba(20, 184, 166, 0.25)"
        },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-2xl", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.22em] mb-3", style: { color: "#5eead4" }, children: "The Mission" }),
            /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl mb-3 leading-tight", children: [
              "Pattern recognition is not a strategy. ",
              /* @__PURE__ */ jsx("span", { style: { color: "#5eead4" }, children: "A decision tree applied identically every time" }),
              " is."
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed", style: { color: "#cbd5e1" }, children: "This module is the spine. The 10 principles set the rules. The core lessons go deep. The checklists make it operational. The daily lessons grow it forever \u2014 every session adds a new entry. Open it before every trading day. Re-read after every session." }),
            /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(
              ReadAloudButton,
              {
                buildScript: buildOverviewScript,
                label: "Read the Overview aloud"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute right-6 top-6 hidden md:flex items-center justify-center w-24 h-24 rounded-2xl",
              style: {
                background: "rgba(20, 184, 166, 0.12)",
                border: "1px solid rgba(20, 184, 166, 0.30)"
              },
              children: /* @__PURE__ */ jsx(TrendingUp, { className: "w-12 h-12", style: { color: "#5eead4" } })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "section",
      {
        className: "rounded-2xl p-5 md:p-6",
        style: {
          background: "linear-gradient(135deg, rgba(94, 234, 212, 0.06) 0%, rgba(15, 23, 42, 0.40) 100%)",
          border: "1px solid rgba(94, 234, 212, 0.20)"
        },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4", style: { color: "#5eead4" } }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg m-0", style: { color: "#5eead4" }, children: "The System At A Glance" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed mb-4", style: { color: "#cbd5e1" }, children: "Six charts, the whole framework. The complete setup, the four pillars, trending vs ranging, the 50% line, the staircase, and the 3-strike rule. Scroll through \u2014 these are the visual touchstones every trade comes back to." }),
          /* @__PURE__ */ jsx(ChartGallery, { conceptId: "overview-hero", charts: OVERVIEW_HERO_CHARTS })
        ]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: tiles.map((t) => /* @__PURE__ */ jsx(
      Link,
      {
        to: t.to,
        className: "mastery-card no-underline block",
        style: { color: "inherit" },
        children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "flex items-center justify-center w-11 h-11 rounded-xl shrink-0",
              style: {
                background: `${t.accent}1f`,
                border: `1px solid ${t.accent}55`
              },
              children: /* @__PURE__ */ jsx(t.icon, { className: "w-5 h-5", style: { color: t.accent } })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2 mb-1", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg m-0", children: t.title }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 shrink-0", style: { color: "#94a3b8" } })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed mb-2", style: { color: "#94a3b8" }, children: t.desc }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "text-xs uppercase tracking-[0.18em] num",
                style: { color: t.accent },
                children: t.stat
              }
            )
          ] })
        ] })
      },
      t.to
    )) }),
    latest && /* @__PURE__ */ jsxs("section", { className: "mastery-card", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.22em]", style: { color: "#94a3b8" }, children: "Latest Daily Lesson" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "text-xs num px-2 py-0.5 rounded-full",
            style: {
              background: "rgba(20, 184, 166, 0.12)",
              color: "#5eead4",
              border: "1px solid rgba(20, 184, 166, 0.30)"
            },
            children: formatDailyDate(latest.date)
          }
        )
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl mb-2", children: latest.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed mb-4", style: { color: "#cbd5e1" }, children: latest.sessionSummary }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/mastery/daily/${latest.date}`,
          className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold no-underline",
          style: {
            background: "linear-gradient(135deg, #14b8a6, #0d9488)",
            color: "#070c18",
            fontFamily: "Oxanium, system-ui, sans-serif"
          },
          children: [
            "Open today's lesson ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      "section",
      {
        className: "rounded-2xl p-5",
        style: {
          background: "rgba(255, 255, 255, 0.025)",
          border: "1px solid rgba(255, 255, 255, 0.08)"
        },
        children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base mb-3", style: { color: "#5eead4" }, children: "How the Daily Lessons Grow" }),
          /* @__PURE__ */ jsxs(
            "ol",
            {
              className: "list-none p-0 m-0 space-y-2 text-sm",
              style: { color: "#cbd5e1" },
              children: [
                /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
                  /* @__PURE__ */ jsx("span", { className: "num shrink-0", style: { color: "#5eead4" }, children: "01." }),
                  /* @__PURE__ */ jsxs("span", { children: [
                    "End of trading day \u2014 save today's deep-work conversation as a JSON file named ",
                    /* @__PURE__ */ jsx("code", { className: "num", style: { color: "#fbbf24" }, children: "YYYY-MM-DD.json" }),
                    "."
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
                  /* @__PURE__ */ jsx("span", { className: "num shrink-0", style: { color: "#5eead4" }, children: "02." }),
                  /* @__PURE__ */ jsxs("span", { children: [
                    "Drop it into ",
                    /* @__PURE__ */ jsx("code", { className: "num", style: { color: "#fbbf24" }, children: "Google Drive\\Trading-Lessons\\daily-jsons\\" }),
                    "."
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
                  /* @__PURE__ */ jsx("span", { className: "num shrink-0", style: { color: "#5eead4" }, children: "03." }),
                  /* @__PURE__ */ jsxs("span", { children: [
                    "Double-click ",
                    /* @__PURE__ */ jsx("span", { className: "num", style: { color: "#fbbf24" }, children: "Update Trading Lessons.bat" }),
                    " on the desktop."
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
                  /* @__PURE__ */ jsx("span", { className: "num shrink-0", style: { color: "#5eead4" }, children: "04." }),
                  /* @__PURE__ */ jsxs("span", { children: [
                    "The new lesson appears as the newest card in ",
                    /* @__PURE__ */ jsx("strong", { children: "Daily Lessons" }),
                    " \u2014 both apps, in sync."
                  ] })
                ] })
              ]
            }
          )
        ]
      }
    )
  ] });
}
__name(MasteryOverview, "MasteryOverview");
export default MasteryOverview;