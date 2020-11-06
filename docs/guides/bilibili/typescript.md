---
title: 2020年10月 TypeScript免费视频教程
---

# 2020 年 10 月 TypeScript 免费视频教程

## 导读

下文用 ts 代替 typescript .学习 ts 的重要性以及优先级 不用多说。什么是 ts,简单来说有几点，我站在自己的角度简单来说说 ts 的学习必要，首先前端三剑客 js 是核心，ts 是超集，换个角度说，学习 ts 就是在巩固 js,这是第一，面试基本 ts 已经少不了，还有就是看看当前的前端市场，看看目前的三大框架以及生态 Ui 库，不会点 ts 你源码都读不懂，开始吧

### 背景

在 2020 春节假期期间，我曾整理了一份关于 `TypeScript入门级别的笔记分享` 也就是它 **[春节间的 TypeScript 笔记整理](https://fett.netlify.app/guides/typescript/ts_one.html)** 还记得当时正是 `疫情` 正严重的时候，正值 2020 年中时候，北京 又再次迎来第二次 疫情冲击 ，在这愈发困难 的境地下，我们在保证 安全的前提下，疯狂提升自己就对了

### 重要性

不管怎么说，如果说一个前端开发者 在 2020 年中还没有接触过 `TypeScript` 或者说使用过。那么可能已经 不够时髦了。为什么这么说，`TypeScript 是未来` 可是未来它已经来了。

- `Deno` 它底层用`TS` 搞了一波，不过 听说要是移除，过多的细节，就不在咱们的讨论范围内，至于为什么要移除 `TS` 是 TS 不够优秀嘛？显然不是

- `Vue 3x` 已经表明 底层用`TS` 重写了一遍

- 随便 `Clone` 一个开源的项目，你一打开会发现 `.ts` `.tsx`

你可能会问，现在我要不要开始学一点`TS` 半年过去了，这个问题想必已经没有意义了。因为在社区里，已经默认你会`TS` 了，即使你还没有使用过`TypeScript` 写过一行代码

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

> 既然提到类型，就简单的说一下，类型包括动态类型与静态类型

| 静态类型         | 动态类型       |     |
| ---------------- | -------------- | --- |
| 类型的极度严格性 | 类型比较宽松   |     |
| 运行性能 ok      | 运行性能差点   |     |
| 并不是绝对的     | 不断发展渐进性 |     |

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

在 node 环境下也是不能够正常的跑 ts 的项目 一句话 就是我们最终需要转换一下，在实际的项目中我 i 们一般需要

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
- 逆向思维 先写一段 ts 代码 然后 编译一下

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

- 用管理员权限打开 vscode

- 然后修改权限 set-ExecutionPolicy RemoteSigned;

- 查看 get-ExecutionPolicy，就显示 RemoteSigned

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

上述的 ts 通过 tsc 编译 上文有提到一种编译的方式，我们来对比一下使用 js 有什么问题

先来贴一下编译后的 js

```javascript
var btn = document.querySelector("#btn");
var number1Dom = document.querySelector("#number1");
var number2Dom = document.querySelector("#number2");
var sum = function(a, b) {
  return a + b;
};
var evtHandler = function() {
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

## 项目的配置

### tsconfig.json

还是简单说一下 json 文件，

> **JSON**(JavaScript Object Notation) 是一种轻量级的数据交换格式。 易于人阅读和编写。同时也易于机器解析和生成。 它基于[JavaScript Programming Language](http://www.crockford.com/javascript), [Standard ECMA-262 3rd Edition - December 1999](http://www.ecma-international.org/publications/files/ecma-st/ECMA-262.pdf)的一个子集。 JSON 采用完全独立于语言的文本格式，但是也使用了类似于 C 语言家族的习惯（包括 C, C++, C#, Java, JavaScript, Perl, Python 等）。 这些特性使 JSON 成为理想的数据交换语言。

首先 项目中的跟目下（一般的情况是这样） 新建一个 `tsconfig.json` **文件指定了根文件和编译项目所需的编译器选项**

JavaScript 项目可以改用一个`jsconfig.json`文件，该文件的作用几乎相同，但是默认情况下启用了一些与 JavaScript 相关的编译器标志。 需要注意的一点是我们的配置信息是相当的额 多 ，前期不必要了解全部

```json
{
  "compilerOptions": {
    /* 基本选项 */
    "target": "es5", // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs", // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [], // 指定要包含在编译中的库文件
    "allowJs": true, // 允许编译 javascript 文件
    "checkJs": true, // 报告 javascript 文件中的错误
    "jsx": "preserve", // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true, // 生成相应的 '.d.ts' 文件
    "sourceMap": true, // 生成相应的 '.map' 文件
    "outFile": "./", // 将输出文件合并为一个文件
    "outDir": "./", // 指定输出目录
    "rootDir": "./", // 用来控制输出目录结构 --outDir.
    "removeComments": true, // 删除编译后的所有的注释
    "noEmit": true, // 不生成输出文件
    "importHelpers": true, // 从 tslib 导入辅助工具函数
    "isolatedModules": true, // 将每个文件作为单独的模块 （与 'ts.transpileModule' 类似）.

    /* 严格的类型检查选项 */
    "strict": true, // 启用所有严格类型检查选项
    "noImplicitAny": true, // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true, // 启用严格的 null 检查
    "noImplicitThis": true, // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true, // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    "noUnusedLocals": true, // 有未使用的变量时，抛出错误
    "noUnusedParameters": true, // 有未使用的参数时，抛出错误
    "noImplicitReturns": true, // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true, // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

    /* 模块解析选项 */
    "moduleResolution": "node", // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./", // 用于解析非相对模块名称的基目录
    "paths": {}, // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [], // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [], // 包含类型声明的文件列表
    "types": [], // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true, // 允许从没有设置默认导出的模块中默认导入。

    /* Source Map Options */
    "sourceRoot": "./", // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./", // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": true, // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": true, // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    "experimentalDecorators": true, // 启用装饰器
    "emitDecoratorMetadata": true // 为装饰器提供元数据的支持
  }
}
```

趁着这个空隙咱们再 简单的写一个 ts 案例

```typescript
// 美女
class Beauty {
  fullName: string;
  constructor(public firstName: string, public lastName: string) {
    this.fullName = `${firstName}${lastName}`;
  }
}
interface Person {
  firstName: string;
  lastName: string;
}
function genGirl(person: Person): string {
  return `hi ${person.firstName}${person.lastName}`;
}
const beautyGirl: Beauty = new Beauty("赵", "铁柱子");
document.body.textContent = genGirl(beautyGirl);
```

编译之后的 js

```javascript
// 美女
var Beauty = /** @class */ (function() {
  function Beauty(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = "" + firstName + lastName;
  }
  return Beauty;
})();
function genGirl(person) {
  return "hi " + person.firstName + person.lastName;
}
var beautyGirl = new Beauty("赵", "铁柱子");
document.body.textContent = genGirl(beautyGirl);
```

### files 属性

```json
{
  "compilerOptions": {
    "module": "commonjs", // 模块
    "noImplicitAny": true, // 在表达式和声明上有隐含的 any类型时报错
    "removeComments": true, // 删除编译后的注释
    "preserveConstEnums": true,
    "sourceMap": true // 生成map文件
  },
  "files": ["./file-one.ts", "./file-two.ts"]
}
```

### `"include"`和`"exclude"`属性

```json
{
  "compilerOptions": {
    "module": "system",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "outFile": "../../built/local/tsc.js",
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

### 总结

其中`compilerOptions` 是编译选项 该`"compilerOptions"`属性可以省略，在这种情况下，使用编译器的默认值

不得不提的是在我们的一些 ts 项目中的`package.json` 文件中非常常见如下的配置

```json
{
 "include": [ *// 需要包含的文件*
  "./xxx"
 ],
 "exclude": [ *// 需要排除的文件*
  "./xxx/**/*.spec.ts", *// 测试文件*
 ]

}
```

## 声明空间

- 类型声明空间

```ts
class Simple {}

let s: Simple; // 其中Simple 是s 的一个`类型注解`
```

- 变量声明空间

## 模块

假使我们在同一个项目中创建两个文件

- index.ts
- demo.ts

我们在不同的文件定义相同的变量

```
let foo: any
无法重新声明块范围变量“foo”。ts(2451)
index.ts(1, 7): 此处也声明了 "foo"。
```

也就是说这些是全局的模块，会造成影响

### ES 模块

这里你就需要回忆一下`ES` 的模块化语法

### global.d.ts

这是我们项目中的全局模块

```ts
// global.d.ts
declare module "foo" {
  // some variable declarations
  export var bar: number;
}
```

作用就是将`接口` 或者`类型` 放入全局命名空间

## 类型注解

说白了，就是对变量的类型进行注解，就像这样

```ts
let arr: boolean[]; // 数组里只能放布尔值
```

其他的就不多说了，可以看第一篇文章

## 泛型

这就需要重点说一下，毕竟在`js` 中很少提到,习惯上用 `T` 来表示

```ts
function foo<T>(params: T[]): T[] {}
// 还记得  let arr:boolean[] ，也就是说 函数的参数 params 是有 `T` 类型组成的数组，返回值亦然
```

## 联合类型

```ts
function bar(params: boolean | string) {}
```

## 类型别名

不管怎么说，见到`type` 得知道是类型别名，至于什么时候用 接口什么时候用类型别名，你用着用着就知道了

```ts
type Callback = (data: string) => void;
```
