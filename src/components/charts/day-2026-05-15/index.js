// Maps each teaching unit (by index 0-7) to its chart gallery.
// Order matches the teachingUnits[] array in the May 15, 2026 lesson.

import { charts as c01 } from './concepts/01-layer1-direction-15min.js';
import { charts as c02 } from './concepts/02-layer2-location-5min-wick.js';
import { charts as c03 } from './concepts/03-layer3-pattern-at-location.js';
import { charts as c04 } from './concepts/04-layer4-timing-2min.js';
import { charts as c05 } from './concepts/05-wicks-vs-closes.js';
import { charts as c06 } from './concepts/06-stop-management-two-phases.js';
import { charts as c07 } from './concepts/07-structural-trail-not-be.js';
import { charts as c08 } from './concepts/08-pre-flight-check.js';

export const CHARTS_BY_UNIT_INDEX = [c01, c02, c03, c04, c05, c06, c07, c08];

export const CONCEPT_SLUGS = [
  '01-layer1-direction-15min',
  '02-layer2-location-5min-wick',
  '03-layer3-pattern-at-location',
  '04-layer4-timing-2min',
  '05-wicks-vs-closes',
  '06-stop-management-two-phases',
  '07-structural-trail-not-be',
  '08-pre-flight-check',
];
