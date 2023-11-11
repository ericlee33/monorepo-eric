// const abc = () => console.log(2);

// module.exports = {
//   abc,
// };

const diff = require('diff')

const json1 = {
  a: {
    b: 1
  }
}
const json2 = {
  a: {
    b: 2
  }
}


const res = diff.diffJson(json1, json2)
console.log(res)