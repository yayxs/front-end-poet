---
title: Js语言基础
---

::: tip

1. 了解 DOM 级别
2. 文档模式
3. 脚本的执行顺序
4. 变量提升
5. 暂时性死区
6. 0.1+0.2
   :::


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
  <body></body>
</html>
```

使用 DOM API，可以轻松地删除、添加、替换、修改节点

1. DOM 1 级 映射文档结构
2. DOM 2 级 用户界面事件、范围、遍历 DOM 视图 、Dom 事件 Dom 样式
3. DOM 3
4. DOM 4

## BOM

`HTML` 的出现涵盖了大多的 BOM 特性

## `<script />`

```js
<script
  async
  charset=""
  crossorigin="anonymous"
  defer
  integrity=""
  src=""
  type=""
></script>
```

::: tip
defer vs async 脚本异步加载的区别
:::

### 推迟执行脚本 defer

- 外部的脚本
- 立即下载资源
- 推迟执行 DOMContentLoaded 事件之前执行

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
function test() {
  var foo = 1; // 调用之后随即被销毁
}
```

## 变量提升

`var`声明的变量会出现声明提升 提到函数作用域的顶部，在声明语句之前使用并不会抛出异常，这就是所谓的声明提升
let 声明的范围是块作用域，而 var 声明的范围是函数作用域。

## 暂时性死区

- `let` 声明的变量不会声明提前
- let 声明之前的执行瞬间叫做所谓的暂时性死区

## const

- 声明变量时必须同时初始化变量
- 尝试修改变量 运行时报错（这里只是适用于指向变量的引用）
- 修改对象内部的属性是 ok 的

## Number 类型

### 0.1+0.2

采用 IEEE 754 格式表示整数和浮点值，正是由于这种存储方式，导致 0.1+0.2 的问题，可以通过`toFixed` 处理一下

```js
let res = 0.1+0.2
undefined
console.log(res)
VM206:1 0.30000000000000004
undefined
let finRes = res.toFixed(2)
undefined
console.log(finRes)
VM349:1 0.30
undefined
console.log(+finRes)
VM431:1 0.3
undefined
```

### NaN

- 任何涉及 NaN 的操作始终返回 NaN（如 NaN/10）
- NaN 不等于包括 NaN 在内的任何值。 // console.log(NaN == NaN); // false

ECMA 提供 `isNaN` 但凡能转换为数字的都返回 false 因为它们是数字 或者间接的能够转换为数字

## String 类型

```js
const str = `i am str!`;
console.log(str.length);
```

## Symbol()

确保对象属性使用唯一标识符，不会发生属性冲突的危险。
最重要的是，Symbol()函数不能用作构造函数，与new关键字一起使用。这样做是为了避免创建符号包装对象，像使用Boolean、String或Number那样，它们都支持构造函数且可用于初始化包含原始值的包装对象：

## 对象

## 创建对象的方式
对象通过new操作符后跟对象类型的名称来创建

```js
 let o1 = new Object()
    let o2 = new Object
    console.log(o1) // {}
    console.log(o2) // {}
    console.log(o1===o2) // false
    console.log(o1==o2) // false
```
```js

 let o1 = new Object();

      // console.log(o1)
      console.log(o1.__proto__);
      const {
        constructor,
        hasOwnProperty,
        isPrototypeOf,
        propertyIsEnumerable,
        toLocaleString,
        toString:toStringTemp,
        valueOf
      } = o1.__proto__;
      console.log(constructor) // 函数:用于创建当前对象的函数(Object()函数)
      console.log(hasOwnProperty) // 函数：当前对象实例上的属性是否存在 hasOwnProperty('name')
      console.log(isPrototypeOf) // 函数:判断当前对象是不是另一个对象的原型
      console.log(propertyIsEnumerable) // 函数：判定的对象是否可以用于for-in枚举
      console.log(toLocaleString) // 函数:返回对象的字符串表示
      console.log(toStringTemp) // 函数
      console.log(valueOf) // 函数：返回对象对应的字符串表示，通常
```
### 注意

原始类型的初始化可以只使用原始字面量形式。如果使用的是new关键字，则JavaScript会创建一个Object类型的实例，但其行为类似原始值。

```js
let name1 = "Nicholas";
let name2 = new String("Matt");
name1.age = 27;
name2.age = 26;
console.log(name1.age);    // undefined
console.log(name2.age);    // 26
console.log(typeof name1); // string
console.log(typeof name2); // object
```