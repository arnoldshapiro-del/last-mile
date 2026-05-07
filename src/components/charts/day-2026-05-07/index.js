// Maps each teaching unit (by index 0-11) to its chart gallery.
// Order matches the teachingUnits[] array in the May 7, 2026 lesson.

import { charts as c01 } from './concepts/01-double-bottom-stop.js';
import { charts as c02 } from './concepts/02-bull-vs-bear-flag.js';
import { charts as c03 } from './concepts/03-valid-pole.js';
import { charts as c04 } from './concepts/04-wait-for-close.js';
import { charts as c05 } from './concepts/05-breakout-stop-logic.js';
import { charts as c06 } from './concepts/06-fifty-percent-rule.js';
import { charts as c07 } from './concepts/07-staircase-flags.js';
import { charts as c08 } from './concepts/08-missed-entry-chase.js';
import { charts as c09 } from './concepts/09-capitulation.js';
import { charts as c10 } from './concepts/10-trending-vs-ranging.js';
import { charts as c11 } from './concepts/11-opposite-signal.js';
import { charts as c12 } from './concepts/12-three-loss-reset.js';

export const CHARTS_BY_UNIT_INDEX = [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12];

export const CONCEPT_SLUGS = [
  '01-double-bottom-stop','02-bull-vs-bear-flag','03-valid-pole','04-wait-for-close',
  '05-breakout-stop-logic','06-fifty-percent-rule','07-staircase-flags','08-missed-entry-chase',
  '09-capitulation','10-trending-vs-ranging','11-opposite-signal','12-three-loss-reset',
];

export { CandlestickChart } from './CandlestickChart.jsx';
export { ChartGallery } from './ChartGallery.jsx';
