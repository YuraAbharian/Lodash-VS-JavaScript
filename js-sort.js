import { randomArray } from './test-data.js';

console.time('js-sort');

randomArray.sort((a, b) => a - b)

console.timeEnd('js-sort');
