// Maps each teaching unit (by index 0-15) to its chart gallery.
// Order matches the teachingUnits[] array in the May 12, 2026 lesson.

import { charts as c01 } from './concepts/01-three-entries-double-bottom.js';
import { charts as c02 } from './concepts/02-wick-vs-body-neckline.js';
import { charts as c03 } from './concepts/03-six-signal-warning-panel.js';
import { charts as c04 } from './concepts/04-real-neckline-top-of-bounce.js';
import { charts as c05 } from './concepts/05-measured-move.js';
import { charts as c06 } from './concepts/06-four-faster-than-w-entries.js';
import { charts as c07 } from './concepts/07-fibonacci-pivots-s3.js';
import { charts as c08 } from './concepts/08-trendline-anatomy.js';
import { charts as c09 } from './concepts/09-when-to-redraw-trendline.js';
import { charts as c10 } from './concepts/10-four-trades-trendline.js';
import { charts as c11 } from './concepts/11-stop-from-structure.js';
import { charts as c12 } from './concepts/12-take-profit-death-trap.js';
import { charts as c13 } from './concepts/13-one-two-runner-framework.js';
import { charts as c14 } from './concepts/14-atm-template-1r-2r-4r-8r.js';
import { charts as c15 } from './concepts/15-stop-ladder.js';
import { charts as c16 } from './concepts/16-breakthrough-moment.js';

export const CHARTS_BY_UNIT_INDEX = [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12, c13, c14, c15, c16];

export const CONCEPT_SLUGS = [
  '01-three-entries-double-bottom',
  '02-wick-vs-body-neckline',
  '03-six-signal-warning-panel',
  '04-real-neckline-top-of-bounce',
  '05-measured-move',
  '06-four-faster-than-w-entries',
  '07-fibonacci-pivots-s3',
  '08-trendline-anatomy',
  '09-when-to-redraw-trendline',
  '10-four-trades-trendline',
  '11-stop-from-structure',
  '12-take-profit-death-trap',
  '13-one-two-runner-framework',
  '14-atm-template-1r-2r-4r-8r',
  '15-stop-ladder',
  '16-breakthrough-moment',
];
