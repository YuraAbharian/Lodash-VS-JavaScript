import lodash from 'lodash'; 

import { data } from './test-data.js';

console.time('lodash-forEach');

lodash.forEach(data, (item) => {
    item.checked = true;
});

console.timeEnd('lodash-forEach');
