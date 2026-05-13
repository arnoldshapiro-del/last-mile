// Maps each teaching unit (by index 0-13) to its chart gallery.
// Order matches the teachingUnits[] array in the May 12, 2026 evening lesson.

import { charts as c01 } from './concepts/01-morning-star-anatomy.js';
import { charts as c02 } from './concepts/02-morning-star-psychology.js';
import { charts as c03 } from './concepts/03-variations.js';
import { charts as c04 } from './concepts/04-entry-stop-target.js';
import { charts as c05 } from './concepts/05-success-rate-context.js';
import { charts as c06 } from './concepts/06-confluence-checklist.js';
import { charts as c07 } from './concepts/07-futures-specific.js';
import { charts as c08 } from './concepts/08-failure-modes.js';
import { charts as c09 } from './concepts/09-indicator-black-gray.js';
import { charts as c10 } from './concepts/10-candle-anatomy.js';
import { charts as c11 } from './concepts/11-six-pattern-overview.js';
import { charts as c12 } from './concepts/12-three-question-scan.js';
import { charts as c13 } from './concepts/13-doji-warning.js';
import { charts as c14 } from './concepts/14-context-is-edge.js';

export const CHARTS_BY_UNIT_INDEX = [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12, c13, c14];

export const CONCEPT_SLUGS = [
  '01-morning-star-anatomy',
  '02-morning-star-psychology',
  '03-variations',
  '04-entry-stop-target',
  '05-success-rate-context',
  '06-confluence-checklist',
  '07-futures-specific',
  '08-failure-modes',
  '09-indicator-black-gray',
  '10-candle-anatomy',
  '11-six-pattern-overview',
  '12-three-question-scan',
  '13-doji-warning',
  '14-context-is-edge',
];
