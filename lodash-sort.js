import lodash from 'lodash'; 

import { randomArray } from './test-data.js';

console.time('lodash-sort');

lodash.sortBy(randomArray);

console.timeEnd('lodash-sort');
