---
title: Js语言基础
---



::: tip
核心掌握：文档模型有哪些以及异步执行脚本的方式
:::

# 什么是 JavaScript

## 关于 ECMAScript 版本

| 版本 |别名     | 发布时间    |    主要变动 |
| :----: | :-: | :--: | :--: |
|ECMA-262 第 6 版|ES6 ES2015|2016 年 6 月|ES6 正式支持了类、模块、迭代器、生成器、箭头函数、期约、反射、代理和众多新的数据类型|
|ECMA-262 第 7 版|ES7 或 ES2016|2016 年 6 月|Array.prototype.includes 和指数操作符|
| ECMA-262 第 8 版 | Es8 ES2017 | 2017 年 6 月 | 异步函数（async/await）Object.values()/Object.entries()/Object.getOwnPropertyDescriptors() |
| ECMA-262 第 9 版 | ES9、ES2018 | 2018 年 6 月 | Promise finally() |
| ECMA-262 第 10 版 | ES10、ES2019 | 2019 年 6 月 | Array.prototype.flat()/flatMap()、String.prototype.trimStart()/trimEnd()、Object.fromEntries() Symbol.prototype.description |

::: details 点击查看代码
ES6 重点 ：类 class 模块化 import from 、生成器函数 Promise Proxy 箭头函数、模板字符串、解构语法

:::

## DOM 节点

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
      
  </body>
</html>
```

使用 DOM API，可以轻松地删除、添加、替换、修改节点

1. DOM 1 级 映射文档结构
2. DOM 2 级 用户界面事件、范围、遍历 DOM 视图 、Dom 事件 Dom 样式
3. DOM 3
4. DOM 4

## BOM
`HTML` 的出现涵盖了大多的BOM特性

## `<script />`

```js
  <script async charset="" crossorigin="anonymous" defer integrity="" src="" type=""></script>
```

::: tip
defer vs async 脚本异步加载的区别
:::

### 推迟执行脚本 defer

 - 外部的脚本
 - 立即下载资源
 - 推迟执行 DOMContentLoaded事件之前执行

### 异步执行脚本 async 

 - 外部的脚本
 - 立即下载资源
 - 不保证执行的顺序 
 - load 事件之前执行

## XHTML 可扩展超文本标记语言

 - type text/javascript
 - <> 会被当做标签 需要转义


## 文档模式

 - 混杂模式 省略 <!DOCTYPE html>
 - 标准模式
 - 准标准模式

```html
<!-- HTML5 -->
<!DOCTYPE html>
```

# var let const

```js
function test(){
  var foo = 1 // 调用之后随即被销毁
}
```
## 变量提升

`var`声明的变量会出现声明提升 提到函数作用域的顶部，在声明语句之前使用并不会抛出异常，这就是所谓的声明提升
let声明的范围是块作用域，而var声明的范围是函数作用域。

## 暂时性死区

 - `let` 声明的变量不会声明提前
 - let 声明之前的执行瞬间叫做所谓的暂时性死区

## const

 - 声明变量时必须同时初始化变量
 - 尝试修改变量 运行时报错（这里只是适用于指向变量的引用）
 - 修改对象内部的属性是ok的

## 数据类型

### 转布尔

```js
      // Boolean
      const isNumber = 1;
      const isZeroNumber = 0
      const isNaN = NaN
      
      const isStr = "I am string";
      const isNullArr =[];
      const isNullStr = ""; 
      const isBool = true;
      const isArr = [0, 1, 2];
      const isObj = {
        name: "i am obj",
      };
      const isNull = null;
      const isUndefined = undefined;
      const isFunc = () => {};
      const isSymbol = Symbol();

      const targetArr = [
        isNumber,
        isZeroNumber,
        isNaN,
        isStr,
        isNullArr,
        isBool,
        isArr,
        isObj,
        isNull,
        isUndefined,
        isSymbol,
        isFunc,
      ];
      for (let i = 0, len = targetArr.length; i < len; i++) {
        console.log(targetArr[i], Boolean( targetArr[i]));
      }

```


```
1 true
demo_test.html:43 0 false
demo_test.html:43 NaN false
demo_test.html:43 I am string true
demo_test.html:43 [] true
demo_test.html:43 true true
demo_test.html:43 (3) [0, 1, 2] true
demo_test.html:43 {name: "i am obj"} true
demo_test.html:43 null false
demo_test.html:43 undefined false
demo_test.html:43 Symbol() true
demo_test.html:43 () => {} true
```

## NaN

- 任何涉及NaN的操作始终返回NaN（如NaN/10）
- NaN不等于包括NaN在内的任何值。 // console.log(NaN == NaN); // false

