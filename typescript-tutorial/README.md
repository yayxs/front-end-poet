## 导读

下文用 ts 代替 typescript .学习 ts 的重要性以及优先级 不用多说。什么是 ts,简单来说有几点，我站在自己的角度简单来说说 ts 的学习必要，首先前端三剑客 js 是核心，ts 是超集，换个角度说，学习 ts 就是在巩固 js,这是第一，面试基本 ts 已经少不了，还有就是看看当前的前端市场，看看目前的三大框架以及生态 Ui 库，不会点 ts 你源码都读不懂，开始吧

## 什么是 ts

### 核心

抛出问题：都说 ts 那么 ts 究竟是什么 什么是呢？

一个面试题打开接下来的交流，== 与===的区别 js 的一些谜之操作让人意外，

- 由于历史的原因 js 生出来天生自带 bug 起初 js 解决的问题也只是简单的表单问题，慢慢发展到现在。那么 ts 扩展了 js 的，添加了 **类型支持** 这是第一个关键词
- 从项目出发，大型的企业级项目，由于一些程序员处理业务逻辑的不严谨性，常常会导致一些简单的 bug 无非就是 没找到 undefined 等这些鸡毛蒜皮的小问题，因为 js 允许我们访问不存在的属性，企业中后端的接口数据有问题，这时候就需要前端做很多的数据兼容与健壮处理，ts 能提升程序员的**开发体验** ，
- 开源免费，任何用 js 开发的最终都可用 ts 开发

> TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions. ---摘自 ts 官方
>
> 换句话说，当别人问你 ts 是啥，也可以说是 js 的超集 也可以说是一门语言，因为 js 是一门代码语言嘛

### js 与 ts 的关系

- ts 是 js 超集的一种语言
- 两者共享语法与运行时行为
- js 必须 ,ts 必须，

### 特点

- 静态类型定义，静态类型检查器
- 类型推断 ，所谓的类型系统

### 转换

我们不得不承认在浏览器环境和 node 环境是不能够跑 ts 代码的，我们试一下

#### 浏览器控制台

```
let a:number =1
VM212:1 Uncaught SyntaxError: Unexpected token ':' // 错误的一种形式，具体的种类可以自行学习
```

#### node 环境

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

两数相加的场景，两个输入框一个相加的按钮，

- 首先保证相加的两个部分都是数值类型数字类型的我们知道两个字符串数字相加的达不到效果

```

```