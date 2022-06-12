import { nonFlattnedArray } from './test-data.js';
import lodash from 'lodash'; 

console.time('lodash-flat');

lodash.flatten(nonFlattnedArray);

console.timeEnd('lodash-flat');