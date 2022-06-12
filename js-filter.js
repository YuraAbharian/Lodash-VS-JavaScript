import { data } from './test-data.js';

console.time('js-filter');

data.map((item) => {
    if (item.isMarried) {
        item.isHappy = true;
    }

    return item;
});

console.timeEnd('js-filter');

