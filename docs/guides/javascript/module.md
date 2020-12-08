---
title: JS的模块化开发
---

# JS的模块化开发

## 了解模块化

### 1、概念

将一个复杂的程序依据一定的规则或者说是规范封装成几个块，或者是文件，并进行组合在一起，块的内部数据与实现是私有的，只是向外暴露一些接口或者是方法与其他的模块进行通信。

### 2、为什么要引入模块化

- 降低复杂度，提高解耦性
- 部署方便
- 避免命名冲突
- 更好的分离，按需加载
- 更高的维护性

### 3、随着而来的问题

- 请求过多
- 依赖模糊
- 难以维护

## 模块化规范

### 1、CommonJS

#### 规范说明

每个文件都可以当做一个模块

在服务器端：模块的加载运行时同步的

在浏览器端：模块需要提前编译

#### 模块的暴露

暴露的本质：对象（exports对象）

```
module.exports =  一个值
exports.xxx =  一个值
```

需要注意的是：

1、当 exports 和 module.exports 同时存在的时候，module.exports 会盖过 exports 

2、当模块内部全部是 exports 的时候， 就等同于 module.exports

3、最后 我们就可以认定为  exports  其实就是 module.exports 的子集。

### 2、ES6

#### ES6的导出

export用于对外输出本模块（一个文件就可以理解为一个模块）变量的接口。

需要留心的是：`export` 可以导出的是一个对象中包含的多个 属性，方法。 `export default` 只能导出 一个 可以不具名的 对象。

#### ES6的 import

当我们需要引入某个模块的时候，可以通过ES6的import

### 3、AMD的RequireJS

#### 异步模块AMD

Asynchronous Module Definition，中文名是异步模块。它是一个在浏览器端模块化开发的规范，由于不是js原生支持，使用AMD规范进行页面开发需要用到对应的函数库，也就是大名鼎鼎的RequireJS，实际上AMD是RequireJS在推广过程中对模块定义的规范化的产出。

#### 解决的问题

- 多个JS文件可能有依赖的关系，被依赖的文件需要早于依赖它的文件加载到浏览器
- JS加载的时候浏览器会停止页面的渲染，加载的文件越多，页面失去响应的时间越长
- 异步前置加载

### 4、CMD的seaJS

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



###  





