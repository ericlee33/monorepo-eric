const parser = require('@babel/parser');
const generator = require('@babel/generator');
const types = require('@babel/types');
const traverse = require('@babel/traverse');

const fs = require('fs');
const path = require('path');
// read file
// const sourcecode = `
// console.log(123);

// const b = 1;
// `;

const sourcecode = fs.readFileSync(
  path.resolve(__dirname, './test.js'),
  'utf-8'
);

// code -> json(ast)
const ast = parser.parse(sourcecode, {
  sourceType: 'unambiguous',
  plugins: ['jsx'],
});

// ast
traverse.default(ast, {
  CallExpression: (path) => {
    // 增删改查

    path.remove();
  },
});

// ast(json) -> code
const res = generator.default(ast);

// write
fs.writeFileSync(path.resolve(__dirname, './test.js'), res.code, 'utf-8');

// antd@3
// {
//   form.getFieldDecorate('name', {
//     rules: [],
//   })(<Input />);
// }

// // antd@4
// <Form.Item name="name" rules={[]}>
//   <Input />
// </Form.Item>;
