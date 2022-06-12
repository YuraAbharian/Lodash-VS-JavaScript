import { nonFlattnedArray } from './test-data.js';

console.time('js-flat');

nonFlattnedArray.flat();

console.timeEnd('js-flat');
