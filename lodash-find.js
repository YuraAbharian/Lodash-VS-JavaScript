import lodash from 'lodash'; 

import { data } from './test-data.js';

console.time('lodash-find');

lodash.find(data, ({ name }) => name === 'Camryn');

console.timeEnd('lodash-find');
