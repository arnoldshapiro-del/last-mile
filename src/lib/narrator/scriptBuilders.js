var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { chartGalleryToNarration, chartToNarration } from "./chartNarrator";
import { expandTraderTerms } from "./numberSpeech";
import { PRINCIPLE_CHARTS, CORE_LESSON_CHARTS, OVERVIEW_HERO_CHARTS, PRE_TRADE_CHARTS, IN_TRADE_CHARTS, POST_TRADE_CHARTS } from "../../components/charts/mastery";
import { findConceptForEntry } from "../../components/charts/qa-concepts";
function buildPrincipleScript(p) {
  const items = [];
  items.push({
    text: `Principle ${p.number}. ${p.title}.`,
    gapAfterMs: 700,
    emphasize: true,
    pitch: 1.06,
    section: "title"
  });
  items.push({
    text: p.short,
    gapAfterMs: 800,
    section: "short"
  });
  items.push({
    text: expandTraderTerms(p.body),
    gapAfterMs: 900,
    section: "body"
  });
  if (p.teachingUnits && p.teachingUnits.length > 0) {
    items.push({
      text: `Three teaching questions on this principle.`,
      gapAfterMs: 700,
      section: "qa-intro"
    });
    p.teachingUnits.forEach((u, i) => {
      items.push({
        text: `Question ${i + 1}. ${u.question}`,
        gapAfterMs: 700,
        emphasize: true,
        section: "q"
      });
      items.push({
        text: expandTraderTerms(u.answer),
        gapAfterMs: 600,
        section: "a"
      });
      if (u.rules && u.rules.length > 0) {
        items.push({
          text: `Rules extracted.`,
          gapAfterMs: 400,
          section: "rules"
        });
        u.rules.forEach((r, j) => {
          items.push({
            text: expandTraderTerms(`${j + 1}. ${r}.`),
            gapAfterMs: 400,
            section: "rules"
          });
        });
        items.push({ text: "", gapAfterMs: 500, section: "rules" });
      }
    });
  }
  const charts = PRINCIPLE_CHARTS[p.number];
  if (charts && charts.length > 0) {
    items.push(...chartGalleryToNarration(charts, `Principle ${p.number}, ${p.title}`));
  }
  items.push({
    text: `That completes Principle ${p.number}.`,
    gapAfterMs: 600,
    section: "outro"
  });
  return {
    title: `Principle ${p.number}: ${p.title}`,
    subtitle: p.short.length > 80 ? p.short.slice(0, 78) + "\u2026" : p.short,
    items
  };
}
__name(buildPrincipleScript, "buildPrincipleScript");
function buildCoreLessonScript(l) {
  const items = [];
  items.push({
    text: `Core Lesson ${l.number}. ${l.title}.`,
    gapAfterMs: 800,
    emphasize: true,
    pitch: 1.06,
    section: "title"
  });
  items.push({
    text: expandTraderTerms(l.summary),
    gapAfterMs: 800,
    section: "summary"
  });
  const charts = CORE_LESSON_CHARTS[l.id];
  if (charts && charts.length > 0) {
    items.push(...chartGalleryToNarration(charts, l.title));
  }
  if (l.sections && l.sections.length > 0) {
    l.sections.forEach((s, i) => {
      items.push({
        text: `Section ${i + 1}. ${s.heading}.`,
        gapAfterMs: 600,
        emphasize: true,
        section: "section-heading"
      });
      items.push({
        text: expandTraderTerms(s.body),
        gapAfterMs: 700,
        section: "section-body"
      });
      if (s.callout) {
        const t = s.callout.type === "principle" ? "Principle" : s.callout.type === "warning" ? "Warning" : "Rule";
        items.push({
          text: expandTraderTerms(`${t}. ${s.callout.text}`),
          gapAfterMs: 800,
          emphasize: true,
          section: "callout"
        });
      }
    });
  }
  if (l.teachingUnits && l.teachingUnits.length > 0) {
    items.push({
      text: "Teaching Q and A.",
      gapAfterMs: 600,
      section: "qa-intro"
    });
    l.teachingUnits.forEach((u, i) => {
      items.push({
        text: `Question ${i + 1}. ${u.question}`,
        gapAfterMs: 700,
        emphasize: true,
        section: "q"
      });
      items.push({
        text: expandTraderTerms(u.answer),
        gapAfterMs: 600,
        section: "a"
      });
      u.rules?.forEach((r, j) => {
        items.push({ text: expandTraderTerms(`Rule ${j + 1}. ${r}.`), gapAfterMs: 400, section: "rules" });
      });
    });
  }
  if (l.keyRules && l.keyRules.length > 0) {
    items.push({
      text: "Key rules from this lesson.",
      gapAfterMs: 700,
      emphasize: true,
      section: "key-rules"
    });
    l.keyRules.forEach((r, i) => {
      items.push({ text: expandTraderTerms(`${i + 1}. ${r}.`), gapAfterMs: 500, section: "key-rules" });
    });
  }
  return {
    title: `Lesson ${l.number}: ${l.title}`,
    subtitle: l.summary.length > 80 ? l.summary.slice(0, 78) + "\u2026" : l.summary,
    items
  };
}
__name(buildCoreLessonScript, "buildCoreLessonScript");
function buildDailyLessonScript(d) {
  const items = [];
  items.push({
    text: `Daily Lesson, ${d.date}. ${d.title}.`,
    gapAfterMs: 900,
    emphasize: true,
    pitch: 1.06,
    section: "title"
  });
  items.push({
    text: expandTraderTerms(d.sessionSummary),
    gapAfterMs: 1e3,
    section: "summary"
  });
  if (d.teachingUnits && d.teachingUnits.length > 0) {
    items.push({
      text: `${d.teachingUnits.length} teaching units.`,
      gapAfterMs: 600,
      section: "units-intro"
    });
    d.teachingUnits.forEach((u, i) => {
      items.push({
        text: `Unit ${i + 1}. ${u.question}`,
        gapAfterMs: 700,
        emphasize: true,
        section: "q"
      });
      items.push({
        text: expandTraderTerms(u.answer),
        gapAfterMs: 600,
        section: "a"
      });
      u.rules?.forEach((r, j) => {
        items.push({ text: expandTraderTerms(`Rule ${j + 1}. ${r}.`), gapAfterMs: 400, section: "rules" });
      });
    });
  }
  if (d.chartReferences && d.chartReferences.length > 0) {
    items.push({
      text: `${d.chartReferences.length} charts referenced from the live session.`,
      gapAfterMs: 600,
      section: "charts-intro"
    });
    d.chartReferences.forEach((c, i) => {
      items.push({
        text: `Chart ${i + 1}. ${c.caption}.`,
        gapAfterMs: 600,
        emphasize: true,
        section: "chart"
      });
      items.push({
        text: expandTraderTerms(c.analysis),
        gapAfterMs: 700,
        section: "chart-analysis"
      });
    });
  }
  if (d.keyRules && d.keyRules.length > 0) {
    items.push({
      text: "Key rules from today.",
      gapAfterMs: 700,
      emphasize: true,
      section: "key-rules"
    });
    d.keyRules.forEach((r, i) => {
      items.push({ text: expandTraderTerms(`${i + 1}. ${r}.`), gapAfterMs: 400, section: "key-rules" });
    });
  }
  if (d.whatIllDoDifferently) {
    items.push({
      text: "What I will do differently.",
      gapAfterMs: 700,
      emphasize: true,
      section: "differently"
    });
    items.push({
      text: expandTraderTerms(d.whatIllDoDifferently),
      gapAfterMs: 800,
      section: "differently"
    });
  }
  return {
    title: d.title,
    subtitle: `Daily Lesson \xB7 ${d.date}`,
    items
  };
}
__name(buildDailyLessonScript, "buildDailyLessonScript");
function buildChecklistScript(phase, items) {
  const phaseLabel = phase === "pre" ? "Pre-Trade" : phase === "in" ? "In-Trade" : "Post-Trade";
  const charts = phase === "pre" ? PRE_TRADE_CHARTS : phase === "in" ? IN_TRADE_CHARTS : POST_TRADE_CHARTS;
  const queue = [];
  queue.push({
    text: `${phaseLabel} Checklist.`,
    gapAfterMs: 700,
    emphasize: true,
    pitch: 1.06,
    section: "title"
  });
  items.forEach((it, i) => {
    queue.push({
      text: `${i + 1}. ${it.text}.`,
      gapAfterMs: 500,
      emphasize: true,
      section: "check-text"
    });
    queue.push({
      text: expandTraderTerms(it.detail),
      gapAfterMs: 600,
      section: "check-detail"
    });
    if (it.principleRef) {
      queue.push({
        text: `This ties to Principle ${it.principleRef}.`,
        gapAfterMs: 500,
        section: "principle-ref"
      });
    }
  });
  if (charts && charts.length > 0) {
    queue.push(...chartGalleryToNarration(charts, `${phaseLabel} visual companion`));
  }
  return {
    title: `${phaseLabel} Checklist`,
    subtitle: `${items.length} ${items.length === 1 ? "check" : "checks"}`,
    items: queue
  };
}
__name(buildChecklistScript, "buildChecklistScript");
function buildJournalEntryScript(entry) {
  const items = [];
  const concept = findConceptForEntry(entry.pattern_type, entry.tags);
  items.push({
    text: `${entry.title}.`,
    gapAfterMs: 800,
    emphasize: true,
    pitch: 1.06,
    section: "title"
  });
  if (entry.context) {
    items.push({
      text: expandTraderTerms(`Context. ${entry.context}.`),
      gapAfterMs: 600,
      section: "context"
    });
  }
  items.push({
    text: `Question. ${entry.question}`,
    gapAfterMs: 800,
    emphasize: true,
    section: "q"
  });
  items.push({
    text: expandTraderTerms(`Answer. ${entry.answer}`),
    gapAfterMs: 700,
    section: "a"
  });
  if (entry.key_takeaways) {
    items.push({
      text: "Key takeaways.",
      gapAfterMs: 500,
      emphasize: true,
      section: "takeaways"
    });
    items.push({
      text: expandTraderTerms(entry.key_takeaways),
      gapAfterMs: 700,
      section: "takeaways"
    });
  }
  if (concept && concept.charts.length > 0) {
    items.push(...chartGalleryToNarration(concept.charts, concept.title));
  }
  return {
    title: entry.title,
    subtitle: `${entry.entry_date}${entry.instrument ? " \xB7 " + entry.instrument : ""}`,
    items
  };
}
__name(buildJournalEntryScript, "buildJournalEntryScript");
function buildOverviewScript() {
  const items = [];
  items.push({
    text: "Live Trading Mastery. The system at a glance.",
    gapAfterMs: 800,
    emphasize: true,
    pitch: 1.06,
    section: "title"
  });
  items.push({
    text: "Pattern recognition is not a strategy. A decision tree applied identically every time is.",
    gapAfterMs: 1e3,
    section: "mission"
  });
  items.push({
    text: "This module is the spine. The 10 principles set the rules. The core lessons go deep. The checklists make it operational. The daily lessons grow it forever.",
    gapAfterMs: 900,
    section: "mission"
  });
  if (OVERVIEW_HERO_CHARTS && OVERVIEW_HERO_CHARTS.length > 0) {
    items.push(...chartGalleryToNarration(OVERVIEW_HERO_CHARTS, "the system"));
  }
  return {
    title: "Live Trading Mastery \u2014 Overview",
    subtitle: "The Living Teaching System",
    items
  };
}
__name(buildOverviewScript, "buildOverviewScript");
export {
  buildChecklistScript,
  buildCoreLessonScript,
  buildDailyLessonScript,
  buildJournalEntryScript,
  buildOverviewScript,
  buildPrincipleScript,
  chartGalleryToNarration,
  chartToNarration
};
