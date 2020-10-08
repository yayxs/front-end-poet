---
title: 2020年10月 TypeScript TS 免费视频教程
---

## 导读

下文用 ts 代替 typescript .学习 ts 的重要性以及优先级 不用多说。什么是 ts,简单来说有几点，我站在自己的角度简单来说说 ts 的学习必要，首先前端三剑客 js 是核心，ts 是超集，换个角度说，学习 ts 就是在巩固 js,这是第一，面试基本 ts 已经少不了，还有就是看看当前的前端市场，看看目前的三大框架以及生态 Ui 库，不会点 ts 你源码都读不懂，开始吧

### 背景

在 2020 春节假期期间，我曾整理了一份关于 `TypeScript入门级别的笔记分享` 也就是它 **[春节间的 TypeScript 笔记整理](https://fett.netlify.app/guides/typescript/ts_one.html)** 还记得当时正是 `疫情` 正严重的时候，正值 2020 年中时候，北京 又再次迎来第二次 疫情冲击 ，在这愈发困难 的境地下，我们在保证 安全的前提下，疯狂提升自己就对了

### 重要性

不管怎么说，如果说一个前端开发者 在 2020 年中还没有接触过 `TypeScript` 或者说使用过。那么可能已经 不够时髦了。为什么这么说，`TypeScript 是未来` 可是未来它已经来了。

## 什么是 ts

### 核心

抛出问题：都说 ts 那么 ts 究竟是什么 什么是呢？

一个面试题打开接下来的交流，== 与===的区别 js 的一些谜之操作让人意外，

- 由于历史的原因 js 生出来天生自带 bug 起初 js 解决的问题也只是简单的表单问题，慢慢发展到现在。那么 ts 扩展了 js 的，添加了 **类型支持** 这是第一个关键词
- 从项目出发，大型的企业级项目，由于一些程序员处理业务逻辑的不严谨性，常常会导致一些简单的 bug 无非就是 没找到 undefined 等这些鸡毛蒜皮的小问题，因为 js 允许我们访问不存在的属性，企业中后端的接口数据有问题，这时候就需要前端做很多的数据兼容与健壮处理，ts 能提升程序员的**开发体验** ，
- 开源免费，任何用 js 开发的最终都可用 ts 开发

> TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions. ---摘自 ts 官方
>
> 换句话说，当别人问你 ts 是啥，也可以说是 js 的超集 也可以说是一门语言，因为 js 是一门代码语言嘛，或者说是一个工具

### js 与 ts 的关系

- ts 是 js 超集的一种语言
- 两者共享语法与运行时行为
- js 必须 ,ts 必须，

### 特点

- 静态类型定义，静态类型检查器

  - 这里特别说明一下 传统的`JavaScript` 也是有类型的（其中类型指的是动态的类型）

  - ```
    let a = 123;
    a = "hahha";
    ```

>
>
>既然提到类型，就简单的说一下，类型包括动态类型与静态类型

| 静态类型         | 动态类型       |      |
| ---------------- | -------------- | ---- |
| 类型的极度严格性 | 类型比较宽松   |      |
| 运行性能ok       | 运行性能差点   |      |
| 并不是绝对的     | 不断发展渐进性 |      |



- 类型推断 ，所谓的类型系统
- 编辑器更友好提示



### 转换

我们不得不承认在浏览器环境和 node 环境是不能够跑 ts 代码的，我们试一下

#### 浏览器控制台

```
let a:number =1
VM212:1 Uncaught SyntaxError: Unexpected token ':' // 错误的一种形式，具体的种类可以自行学习
```

#### node 环境

在node环境下也是不能够正常的跑ts 的项目 一句话 就是我们最终需要转换一下，在实际的项目中我i们一般需要

借助 babel 或者 一些工具

既然 ts 是 js 的超集，在一些环境中最终认识的还是 js,ts 好比化了妆的你的女友，更迷人而已，怎么卸妆，两种方式

- TypeScript 编译器
- [https://babeljs.io/](https://babeljs.io/)

## 开始使用

开始 玩无非就是简单的 demo 然后在 vue 中的应用 在 react 中的应用 其次生态 玩一玩生态，大体是要简单的写写 ts 的代码，我现在在看说唱，我们这样，定义一个对象，然后数一数 rapper

```typescript
const rappers = {
    first:"subs"，
    sec:'彤彤',
    thir:"姜云升"
}
```

我们 getter 读取每一个说唱歌手，

```
console.log(rappers['sec'])
```

这时候我们直接打印第四个歌手，可能会出问题，你都学 ts js 的基本类型应该晓得，参见 top-fe-iqa

```js
boolean，bigint，null，number，string，symbol，object，和undefined
```

这里重点说一下，类型

```
Number	双精度IEEE 754浮点数。
String	一个不变的UTF-16字符串。
BigInt	任意精度格式的整数。
Boolean	true和false。
Symbol	通常用作键的唯一值。
Null	等同于单位类型。
Undefined	也等同于单位类型。
Object	类似于记录。
```

ts 不愧是 ts 在定义类型的时候，简单的扩展了几种 一是 any [`unknown`](https://www.typescriptlang.org/play#example/unknown-and-never) never void 现在没必要知道怎么用

我们使用接口来编写这个对象的类型

```typescript
interface IRappers {
  first: string;
  sec: string;
}
```

可以通俗的解释，通过接口来描述你当前的对象

```
const rappers:IRappers = {

}
```

除了接口 也有 type ，至于两者有什么区别，现阶段不必要纠结，还有一种场景 一个数据它比较复杂，不是简单布尔或者对象，这时候我们就要构造一个相对复杂的类型修饰 **联合** **泛型 **

当然上文出现的关键词后边会讲到

```typescript
interface IAdd {
  x: number;
  y: number;
}

const add = (data: IxAdd) => {
  return data.x + data.y;
};

add({ x: 1, y: 2 });
```

两数相加的场景，两个输入框一个相加的按钮，

- 首先保证相加的两个部分都是数值类型数字类型的我们知道两个字符串数字相加的达不到效果
- 逆向思维 先写一段ts 代码 然后 编译一下

```

```

**遇到的问题**

```
tsc .\first-ts.ts
+ ~~~
    + CategoryInfo          : SecurityError: (:) []，PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

这时候无非是一些终端的权限问题

- 用管理员权限打开vscode

- 然后修改权限 set-ExecutionPolicy RemoteSigned;

- 查看 get-ExecutionPolicy，就显示RemoteSigned

  ```typescript
  const btn = document.querySelector("#btn");
  const number1Dom = document.querySelector("#number1")! as HTMLInputElement;
  const number2Dom = document.querySelector("#number2")! as HTMLInputElement;
  
  const sum = (a: number, b: number): number => {
    return a + b;
  };
  const evtHandler = () => {
    const val1 = number1Dom.value;
    const val2 = number2Dom.value;
    console.log(sum(+val1, +val2));
  };
  
  btn.addEventListener("click", 
  
  ```

上述的ts 通过 tsc 编译 上文有提到一种编译的方式，我们来对比一下使用js有什么问题

先来贴一下编译后的js

```javascript
var btn = document.querySelector("#btn");
var number1Dom = document.querySelector("#number1");
var number2Dom = document.querySelector("#number2");
var sum = function (a, b) {
    return a + b;
};
var evtHandler = function () {
    var val1 = number1Dom.value;
    var val2 = number2Dom.value;
    console.log(sum(+val1, +val2));
    
};
btn.addEventListener("click", evtHandler);

```

我们要对类型进行优化，确保相加的是两个数字

```javascript
var sum = function(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return +a + +b;
  }
};
```

