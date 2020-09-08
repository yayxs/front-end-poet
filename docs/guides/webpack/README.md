---
title: 还用学webpack吗？
---

## 背景

## 核心概念

### entry

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

- filename 文件的名称
- path
- publicPath 资源引入公共路径前缀 （多用于生产）
- chunkFilename
- library
- libraryTarget

### module

```js
rules: [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "eslint-loader",
  },
];
```

### resolve

**解析模块的规则**

```js
resolve:{
    alias:{
        $css:resolve(__dirname,"src/css"),
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

### optimization

## 推荐阅读

- [https://github.com/wallstreetcn/webpack-and-spa-guide](https://github.com/wallstreetcn/webpack-and-spa-guide)
