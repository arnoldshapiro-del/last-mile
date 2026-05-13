// Maps each teaching unit (by index 0-15) to its chart gallery.
// Order matches the teachingUnits[] array in the May 13, 2026 lesson.

import { charts as c01 } from './concepts/01-bear-flag-vs-double-bottom.js';
import { charts as c02 } from './concepts/02-counter-trend-five-confluence.js';
import { charts as c03 } from './concepts/03-be-stop-does-its-job.js';
import { charts as c04 } from './concepts/04-bulkowski-reliability-ladder.js';
import { charts as c05 } from './concepts/05-tier-1-vs-tier-2.js';
import { charts as c06 } from './concepts/06-tier-2-three-scenarios.js';
import { charts as c07 } from './concepts/07-tier-2-trade-management.js';
import { charts as c08 } from './concepts/08-double-top-trendline-mistake.js';
import { charts as c09 } from './concepts/09-neckline-bodies-not-wicks.js';
import { charts as c10 } from './concepts/10-hierarchy-of-confirmation.js';
import { charts as c11 } from './concepts/11-unified-rule-defining-boundary.js';
import { charts as c12 } from './concepts/12-pyramiding-winners-not-losers.js';
import { charts as c13 } from './concepts/13-fan-line-principle.js';
import { charts as c14 } from './concepts/14-ninjatrader-sim101-safety.js';
import { charts as c15 } from './concepts/15-emergency-protocol-five-step.js';
import { charts as c16 } from './concepts/16-claude-max-quota-truth.js';

export const CHARTS_BY_UNIT_INDEX = [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12, c13, c14, c15, c16];

export const CONCEPT_SLUGS = [
  '01-bear-flag-vs-double-bottom',
  '02-counter-trend-five-confluence',
  '03-be-stop-does-its-job',
  '04-bulkowski-reliability-ladder',
  '05-tier-1-vs-tier-2',
  '06-tier-2-three-scenarios',
  '07-tier-2-trade-management',
  '08-double-top-trendline-mistake',
  '09-neckline-bodies-not-wicks',
  '10-hierarchy-of-confirmation',
  '11-unified-rule-defining-boundary',
  '12-pyramiding-winners-not-losers',
  '13-fan-line-principle',
  '14-ninjatrader-sim101-safety',
  '15-emergency-protocol-five-step',
  '16-claude-max-quota-truth',
];
