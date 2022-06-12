import { data } from './test-data.js';
import lodash from 'lodash'; 

console.time('lodash-map');

lodash.map(data, (item) => {
    if (item.isMarried) {
        item.isHappy = true;
    }

    return item;
});

console.timeEnd('lodash-map');


// _.uniq([2, 1, 2]);
