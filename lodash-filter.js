import lodash from 'lodash'; 

import { data } from './test-data.js';

console.time('lodash-filter');

lodash.map(data, (item) => {
    if (item.isMarried) {
        item.isHappy = true;
    }

    return item;
});

console.timeEnd('lodash-filter');
