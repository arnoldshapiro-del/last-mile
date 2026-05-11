// Maps each teaching unit (by index 0-13) to its chart gallery.
// Order matches the teachingUnits[] array in the May 11, 2026 lesson.

import { charts as c01 } from './concepts/01-swing-vs-single-candles.js';
import { charts as c02 } from './concepts/02-liquidity-stop-hunts.js';
import { charts as c03 } from './concepts/03-bull-flag-vs-trend-reversal.js';
import { charts as c04 } from './concepts/04-wick-vs-body-close.js';
import { charts as c05 } from './concepts/05-patterns-die-charts-keep-trading.js';
import { charts as c06 } from './concepts/06-bull-flag-four-stages.js';
import { charts as c07 } from './concepts/07-process-vs-outcome.js';
import { charts as c08 } from './concepts/08-flag-inside-flag.js';
import { charts as c09 } from './concepts/09-bear-flag-asymmetry.js';
import { charts as c10 } from './concepts/10-bear-flag-checklist.js';
import { charts as c11 } from './concepts/11-bear-flag-reentry.js';
import { charts as c12 } from './concepts/12-multi-timeframe-tiers.js';
import { charts as c13 } from './concepts/13-break-even-stops.js';
import { charts as c14 } from './concepts/14-lunch-hour-trap.js';

export const CHARTS_BY_UNIT_INDEX = [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12, c13, c14];

export const CONCEPT_SLUGS = [
  '01-swing-vs-single-candles','02-liquidity-stop-hunts','03-bull-flag-vs-trend-reversal',
  '04-wick-vs-body-close','05-patterns-die-charts-keep-trading','06-bull-flag-four-stages',
  '07-process-vs-outcome','08-flag-inside-flag','09-bear-flag-asymmetry',
  '10-bear-flag-checklist','11-bear-flag-reentry','12-multi-timeframe-tiers',
  '13-break-even-stops','14-lunch-hour-trap',
];
