import { data } from './test-data.js';

console.time('js-forEach');

data.forEach((item) => {
    item.checked = true;
});

console.timeEnd('js-forEach');
