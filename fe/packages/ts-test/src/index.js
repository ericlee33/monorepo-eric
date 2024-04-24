// const jsYaml = require('js-yaml');

// const obj = {
//   value: 1,
// };

// const res = jsYaml.dump(obj);

// console.log(res, 4);

// function t(...args) {
//   console.log(args);
// }

// function abc(...args) {
//   t(...args);
// }

// abc(1, 2, 3);

const _ = require('lodash');

const object = {
  common: {
    c: [1, 2],
    d: 3,
  },
};

const source = {
  common: {
    c: [3],
    e: 5,
  },
};

const result = _.merge(object, source);
console.log(JSON.stringify(result, null, 2));
