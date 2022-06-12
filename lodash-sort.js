import { randomArray } from './test-data.js';
import lodash from 'lodash'; 

console.time('lodash-sort');

lodash.sortBy(randomArray);

console.timeEnd('lodash-sort');