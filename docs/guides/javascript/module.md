---
title: JS的模块化开发
---

# JS 的模块化开发

## 了解模块化

### 模块的概念

将一个复杂的程序依据一定的规则或者说是规范封装成几个块，或者是文件，并进行组合在一起，块的内部数据与实现是私有的，只是向外暴露一些接口或者是方法与其他的模块进行通信。

### 为什么要引入模块化

- 降低复杂度，提高解耦性
- 部署方便
- 避免命名冲突
- 更好的分离，按需加载
- 更高的维护性

### 随之而来的问题

- 请求过多
- 依赖模糊
- 难以维护

## CommonJS 服务器执行环境

### 规范说明

每个文件都可以当做一个模块，CommonJS 规范概述了同步声明依赖的模块定义。这个规范主要用于在服务器端实现模块化代码组织，但也可用于定义在浏览器中使用的模块依赖。在服务器端：模块的加载运行时同步的，不能直接运行在浏览器端。

### 模块的暴露

暴露的本质：对象（exports 对象）

```
module.exports =  一个值
exports.xxx =  一个值
```

需要注意的是：

- 当 exports 和 module.exports 同时存在的时候，module.exports 会盖过 exports
- 当模块内部全部是 exports 的时候， 就等同于 module.exports
- 最后 我们就可以认定为 exports 其实就是 module.exports 的子集。

```js
// moduleA.js
console.log("moduleA.js执行");

module.exports = "string123";
```

```js
// index.js
const ma = require("./moduleA");
console.log("index执行");

console.log("moduleA.js的执行结果", ma); // {} 默认是{}
```

## AMD 浏览器执行环境

最古老的模块系统之一，
`Asynchronous Module Definition`中文名是异步模块。它是一个在浏览器端模块化开发的规范，由于不是 js 原生支持，使用 AMD 规范进行页面开发需要用到对应的函数库，也就是大名鼎鼎的`RequireJS`实际上 AMD 是 RequireJS 在推广过程中对模块定义的规范化的产出。

```js
define('moduleA', ['moduleB'], function(moduleB) {
  return {
    stuff: moduleB.doStuff();
  };
});
```

### 解决的问题

- 多个 JS 文件可能有依赖的关系，被依赖的文件需要早于依赖它的文件加载到浏览器
- JS 加载的时候浏览器会停止页面的渲染，加载的文件越多，页面失去响应的时间越长
- 异步前置加载

## 通用模块定义

`通用模块定义（UMD，Universal Module Definition）`它与 AMD 和 CommonJS 都兼容

```js
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD。注册为匿名模块
    define(["moduleB"], factory);
  } else if (typeof module === "object" && module.exports) {
    // Node。不支持严格CommonJS
    // 但可以在Node这样支持module.exports的
    // 类CommonJS环境下使用
    module.exports = factory(require(" moduleB "));
  } else {
    // 浏览器全局上下文（root是window）
    root.returnExports = factory(root.moduleB);
  }
})(this, function(moduleB) {
  // 以某种方式使用moduleB

  // 将返回值作为模块的导出
  // 这个例子返回了一个对象
  // 但是模块也可以返回函数作为导出值
  return {};
});
```

## CMD 的 seaJS

```
define(id, deps, factory)

因为CMD推崇一个文件一个模块，所以经常就用文件名作为模块id；
CMD推崇依赖就近，所以一般不在define的参数中写依赖，而是在factory中写。

factory有三个参数：
function(require, exports, module){}

一，require
require 是 factory 函数的第一个参数，require 是一个方法，接受 模块标识 作为唯一参数，用来获取其他模块提供的接口；

二，exports
exports 是一个对象，用来向外提供模块接口；

三，module
module 是一个对象，上面存储了与当前模块相关联的一些属性和方法。

demo
// 定义模块  myModule.js
define(function(require, exports, module) {
  var $ = require('jquery.js')
  $('div').addClass('active');
});

// 加载模块
seajs.use(['myModule.js'], function(my){

});

```

## ES6 模块

- 模块代码只在加载后执行。
- 模块只能加载一次
- 模块是单例
- 模块可以定义公共接口，其他模块可以基于这个公共接口观察和交互
- 模块可以请求加载其他模块
- 支持循环依赖

## 总结

由于模块支持特殊的关键字和功能，因此我们必须通过使用 `<script type="module">` 特性（attribute）来告诉浏览器，此脚本应该被当作模块（module）来对待

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>vue-vast-admin</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```
