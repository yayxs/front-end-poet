---
title: 《深入浅出 Webpack》实战
---
```
npm i babel-preset-es2015 -D
npm install -D babel-loader @babel/core @babel/preset-env
npm install -D @babel/plugin-transform-runtime
npm install @babel/runtime

npm install --save-dev typescript ts-loader
npm install sass-loader sass  --save-dev

```

## 使用 babel

`babel` 是一个 js 的编译器，解决两个问题，

```
{
  "plugins": [ // 使用哪些插件 插件可以控制如何转换代码
    [
      "transform-runtime", // npm i babel-runtime babel-plugin-transform-runtime -D
      {
        "polyfill": false
      }
    ]
  ],
  "presets": [ // 被转换的使用什么语法,一组plugins 集合，一个plugin完成一个语法转换工作
    [
      "es2015", // 2015的新特性
      {
        "modules": false
      }
    ],
    "stage-2", // 被社区提出
    "react"
  ]
}

```

```
 {
        // 命中 JavaScript 文件
        // test: /\.js$/,
        test: /\.m?js$/,
        // 用 babel-loader 转换 JavaScript 文件
        // ?cacheDirectory 表示传给 babel-loader 的参数，用于缓存 babel 编译结果加快重新编译速度
        // use: ["babel-loader?cacheDirectory"],
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true, // 默认是false
              presets: ["@babel/preset-env"],
              plugins: ['@babel/plugin-transform-runtime']
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

## 使用`ts`
```
{
    "compilerOptions": {
      "outDir": "./dist/",
      "noImplicitAny": true,
      "module": "es6", // 编译出的代码采用的模块规范
      "target": "es5", // 编译出的代码采用 ES 的哪个版本
      "jsx": "react",
      "allowJs": true
    }
  }
```

```
 {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
```
上述的操作我们都是需要新建一个 `.html` 文件来加载 打包后的 js 文件，但通常情况下我们的 html 文件是没有这么简单的，而是有一些其他的配置，接着往下看吧