// node 工具，写玩具
// babel-loader 包含 如下 4 个
// 底层
const parser = require('@babel/parser');
const generator = require('@babel/generator');
const types = require('@babel/types');
const traverse = require('@babel/traverse');

const fs = require('fs');
const path = require('path');

const sourcecode = fs.readFileSync(
  path.resolve(__dirname, './test.js'),
  'utf-8'
);

// 重新重构
// code -> json(ast)
const ast = parser.parse(sourcecode, {
  sourceType: 'unambiguous',
  plugins: ['jsx'],
});
console.log(ast);

// ast
traverse.default(ast, {
  CallExpression: (path) => {
    // 增删改查
    path.remove();
  },
});

// ast(json) -> sourcecode
const resultcode = generator.default(ast).code;

// write
fs.writeFileSync(path.resolve(__dirname, './test.js'), resultcode, 'utf-8');

// 600 行
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
