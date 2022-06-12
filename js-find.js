import { data } from './test-data.js';

console.time('js-find');

data.find(({name}) => name === 'Camryn');

console.timeEnd('js-find');