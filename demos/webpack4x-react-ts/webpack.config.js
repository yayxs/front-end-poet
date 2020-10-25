const path = require("path");
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebPlugin } = require('web-webpack-plugin');
module.exports = {
  // ts 文件执行入口
  entry: "./src/index",
  devtool: 'inline-source-map', // 输出 Source Map 方便在浏览器里调试 TypeScript 代码
  // 出口
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins:[
     // 使用本文的主角 WebPlugin，一个 WebPlugin 对应一个 HTML 文件
     new WebPlugin({
      template: './template.html', // HTML 模版文件所在的文件路径
      filename: 'index.html' // 输出的 HTML 的文件名称
    }),
  ],
  resolve: {
    // 先尝试 ts，tsx 后缀的 TypeScript 源码文件
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        // 同时匹配 ts，tsx 后缀的 TypeScript 源码文件
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
};
