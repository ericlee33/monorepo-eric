const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
// webpack 打包时，使用，用来转换 ts，等 ES2015 或者更高级语法，为低级语法
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type { import('webpack').Configuration } */
module.exports = {
  entry: './src/main.js',
  mode: 'development',
  devtool: false,
  resolve: {
    extensions: ['.js', '.json', '.wasm', '.vue'],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'config'),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, './src'),
        use: ['vue-style-loader', 'style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        include: path.resolve(__dirname, './src'),
        use: [
          'vue-style-loader',
          // 'style-loader',
          // MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              //css modules 开启
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        include: path.resolve(__dirname, './src'),
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash:6].[ext]',
            outputPath: 'images/',
            //推荐使用url-loader 因为url-loader支持limit
            //推荐小体积的图片资源转成base64
            limit: 12 * 1024, //单位是字节 1024=1kb
          },
        },
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, './src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.vue$/,
        include: path.resolve(__dirname, './src'),
        exclude: /node_modules/,
        use: {
          loader: 'vue-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './config/index.html'),
      filename: 'index.html',
    }),
    // make sure to include the plugin!
    new VueLoaderPlugin(),
    //在打包之前清空output配置的文件夹
    new CleanWebpackPlugin(),
  ],
};
