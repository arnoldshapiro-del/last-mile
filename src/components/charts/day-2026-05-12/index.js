// Maps each teaching unit (by index 0-5) to its chart gallery.
// Order matches the teachingUnits[] array in the May 12, 2026 lesson.

import { charts as c01 } from './concepts/01-wick-vs-body.js';
import { charts as c02 } from './concepts/02-two-stories.js';
import { charts as c03 } from './concepts/03-limbo-state.js';
import { charts as c04 } from './concepts/04-bear-trap.js';
import { charts as c05 } from './concepts/05-inside-the-candle.js';
import { charts as c06 } from './concepts/06-decision-tree.js';
import { charts as c07 } from './concepts/07-fibonacci-tiers.js';
import { charts as c08 } from './concepts/08-evening-star-anatomy.js';
import { charts as c09 } from './concepts/09-multi-tier-stop-trail.js';

export const CHARTS_BY_UNIT_INDEX = [c01, c02, c03, c04, c05, c06, c07, c08, c09];

export const CONCEPT_SLUGS = [
  '01-wick-vs-body',
  '02-two-stories',
  '03-limbo-state',
  '04-bear-trap',
  '05-inside-the-candle',
  '06-decision-tree',
  '07-fibonacci-tiers',
  '08-evening-star-anatomy',
  '09-multi-tier-stop-trail',
];
