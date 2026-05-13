// Maps each teaching unit (by index 0-11) to its chart gallery.
// Order matches the teachingUnits[] array in the May 13, 2026 EVENING lesson.

import { charts as c01 } from './concepts/01-three-components-double-top.js';
import { charts as c02 } from './concepts/02-neckline-lowest-close.js';
import { charts as c03 } from './concepts/03-higher-wick-doesnt-negate.js';
import { charts as c04 } from './concepts/04-three-pushes-exhaustion-not-double-top.js';
import { charts as c05 } from './concepts/05-double-top-vs-bull-flag-decision.js';
import { charts as c06 } from './concepts/06-bearish-engulfing-141-entry.js';
import { charts as c07 } from './concepts/07-lower-high-needs-close-below.js';
import { charts as c08 } from './concepts/08-channel-lower-highs-are-geometry.js';
import { charts as c09 } from './concepts/09-three-situations-lower-high.js';
import { charts as c10 } from './concepts/10-three-question-checklist.js';
import { charts as c11 } from './concepts/11-descending-wedge-resolves-up.js';
import { charts as c12 } from './concepts/12-unifying-rule-line-break.js';

export const CHARTS_BY_UNIT_INDEX = [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12];

export const CONCEPT_SLUGS = [
  '01-three-components-double-top',
  '02-neckline-lowest-close',
  '03-higher-wick-doesnt-negate',
  '04-three-pushes-exhaustion-not-double-top',
  '05-double-top-vs-bull-flag-decision',
  '06-bearish-engulfing-141-entry',
  '07-lower-high-needs-close-below',
  '08-channel-lower-highs-are-geometry',
  '09-three-situations-lower-high',
  '10-three-question-checklist',
  '11-descending-wedge-resolves-up',
  '12-unifying-rule-line-break',
];
