import lodash from 'lodash'; 

import { nonFlattnedArray } from './test-data.js';

console.time('lodash-flat');

lodash.flatten(nonFlattnedArray);

console.timeEnd('lodash-flat');
