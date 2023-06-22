// webpack 打包时，使用，用来转换 ts，等 ES2015 或者更高级语法，为低级语法

// -> js

module.exports = {
  entry: './src/reference.js',
  mode: 'development',
  devtool: false,
  // output: {
  //   library: { type: 'commonjs2' },
  // },
  rules: [
    {
      test: /(js|ts)(x)/,
      loader: 'babel-loader',
    },
  ],
};
