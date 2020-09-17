---
title: 《JavaScript高级程序设计（第4版）》
---

> javascript 高级程序设计 读书笔记

::: tip
核心掌握：文档模型有哪些以及异步执行脚本的方式
:::

# 什么是 JavaScript

## 关于 ECMAScript 版本

| Tables |     |     |     |
| :----: | :-: | --: | --: |


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

::: defer vs async
脚本异步加载的区别
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

