import { data } from './test.js';

console.time('js-map');

data.map((item) => {
    if (item.isMarried) {
        item.isHappy = true;
    }

    return item;
});

console.timeEnd('js-map');
