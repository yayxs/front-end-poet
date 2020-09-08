---
title: 还用学webpack吗？
---

## 背景

### 本文涉及

```bash
npm i -D webpack
npm i -D style-loader css-loader
npm i -D extract-text-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D webpack-dev-server
npm install -D babel-loader @babel/core @babel/preset-env webpack
```

首先明确一点在 `webpack` 不同的版本，配置的方式略有差异，单核心思想不变

## 核心概念

### entry

**入口，Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入**

```js
 entry: "./src/index.js",
```

- string 的形式

  > 单入口
  >
  > 打包形成一个 chunk,输出一个 bundle 文件

- array 的形式（特殊情况）

  > 多入口
  >
  > 多有的文件最终会形成一个 chunk,输出一个 bundle 文件
  >
  > html 的热更新

- object 的形式

  > 多入口
  >
  > 有几个入口就几个 chunk 几个 bundle

### output

**输出结果，在 Webpack 经过一系列处理并得出最终想要的代码后输出结果**

```js
output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: "bundle.js",
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, "./dist"),
  },
```

### module

**Webpack 会从配置的 Entry 开始递归找出所有依赖的模块。**

#### css 文件

可以通过模块的方式来引入 `css` 样式

```js
require("./index.css"); // 把css文件也看做一个模块
const show = require("./show");

show("webpack");
```

`rules` 数组配置了一组规则，这些规则“指导” webpack 遇到不同的文件该怎么去处理

```js

 module: {
    rules: [
         {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "eslint-loader",
  },
      {
        // 用正则去匹配要用该 loader 转换的 CSS 文件
        test: /\.css$/,
        use: ["style-loader", "css-loader?minimize"],
      },
    ],
  },
```

其中 `        use: ["style-loader", "css-loader?minimize"],` 

从右向左执行

1. 第一步是使用**开启了css压缩的** `css-loadder`  **读取css文件**
2. 第二步使用`style-loader` 把css的内容注入到  JS中

不然就会出现一个问题，当引入css 文件的时候

```
ERROR in ./src/index.css 1:0
Module parse failed: Unexpected character '#' (1:0)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
> #app {
|   text-align: center;
| }
 @ ./src/index.js 1:0-22
```

#### 使用loader

**模块转换器，用于把模块原内容按照需求转换成新内容**

```shell
npm i -D style-loader css-loader
```

```js
use: [
  'style-loader', 
  {
    loader:'css-loader',
    options:{
      minimize:true,
    }
  }
]
```

我们接着再使用,可以成功的构建

```
npm run start // 
```

#### 使用插件

```js
 plugins: [
      new ExtractTextPlugin({
        // 从 .js 文件中提取出来的 .css 文件的名称
        filename: `[name]_[contenthash:8].css`,
      }),
    ],
```

```js
const ExtractTextPlugin = require("extract-text-webpack-plugin");

 use: ExtractTextPlugin.extract({
          allback: "style-loader",
          // 转换 .css 文件需要使用的 Loader
          use: ["css-loader"],
        }),
   plugins: [
      new ExtractTextPlugin({
        // 从 .js 文件中提取出来的 .css 文件的名称
        filename: "bundle.css",
        disable: false,
        allChunks: true,
      }),
    ],
```

整个旧的方式是通过上述的方式来把css 放到一个文件下，但是**V4** 版本

我们替换为了,基于最新的 4版本

```
npm install --save-dev mini-css-extract-plugin
```

```js
// webpack.config.js

plugins: [new MiniCssExtractPlugin()],
module: {
```

### resolve

**解析模块的规则** 以下是别名的配置

```js
// Webpack alias 配置
resolve:{
  alias:{
    components: './src/components/'
  }
}
```

### devServer

- contentBase

- watchContentBase:true 监视目录下的文件

- compress

- port

- host

- open:true 自动打开浏览器

- proxy:{}

  ```js
   proxy:{
       '/api':{
           target:"http://localhost:3000",
           pathRewrite:{
               '^/api':''
           }
       }
   }
  ```

>webpack-dev-server编译后不写入任何输出文件。相反，它将捆绑文件保留在内存中，并像在服务器根路径上挂载的真实文件一样提供它们。如果您的页面希望在其他路径上找到捆绑文件，则可以使用[`publicPath`](https://webpack.js.org/configuration/dev-server/#devserverpublicpath-)开发服务器的配置中的选项进行更改。



以上的完整配置放出

```js
// webpack.config.js
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: "bundle.js",
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, "./dist"),
  },
  devServer: {
    // contentBase: "./dist",
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      // {
      //   // 用正则去匹配要用该 loader 转换的 CSS 文件
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"],
      // },
      {
        // 用正则去匹配要用该 loader 转换的 CSS 文件
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};


```

----

## Loader的配置

### 命中JavaScript 文件

```js
 {
        // 命中 JavaScript 文件
        test: /\.js$/,
        // 用 babel-loader 转换 JavaScript 文件
        // ?cacheDirectory 表示传给 babel-loader 的参数，用于缓存 babel 编译结果加快重新编译速度
        // use: ["babel-loader?cacheDirectory"],
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: ["@babel/preset-env"],
            },
            // // enforce:'post' 的含义是把该 Loader 的执行顺序放到最后
            // // enforce 的值还可以是 pre，代表把 Loader 的执行顺序放到最前面
            // enforce: "post",
          },
        ],
        // 只命中src目录里的js文件，加快 Webpack 搜索速度
        include: path.resolve(__dirname, "src"),
      },
```

### 命中css文件

```js
{
        // 用正则去匹配要用该 loader 转换的 CSS 文件
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
```



### 命中scss文件

```js
{
        // 命中 SCSS 文件
        test: /\.scss$/,
        // 使用一组 Loader 去处理 SCSS 文件。
        // 处理顺序为从后到前，即先交给 sass-loader 处理，再把结果交给 css-loader 最后再给 style-loader。
        use: ["style-loader", "css-loader", "sass-loader"],
        // 排除 node_modules 目录下的文件
        exclude: path.resolve(__dirname, "node_modules"),
      },
```







## 最后

### 关联阅读

- [https://github.com/wallstreetcn/webpack-and-spa-guide](https://github.com/wallstreetcn/webpack-and-spa-guide)
