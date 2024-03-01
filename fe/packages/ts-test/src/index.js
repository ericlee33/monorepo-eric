const jsYaml = require('js-yaml');

const obj = {
  value: 1,
};

const res = jsYaml.dump(obj);

console.log(res, 4);
