---
title: 春节间的TypeScript笔记整理
---

# 春节间的 TypeScript 笔记整理

## 背景

由于在春节期间，实在没什么事干，就想系统的写份`typescript`笔记。废话不多说，为什么我们都在说着`ts`这件事呢，尤其对于前端开发者来说，`JavaScript`作为行为交互，是四剑客之一。那么为什么还要用`ts`呢?

### 现状分析

我们知道，目前国内主流的**3**大前端开发框架:

| 框架名称 | version  | github star |
| :------: | :------: | :---------: |
|  React   | V16.12.0 |   142,715   |
|  Vue.js  |   V2.x   |   155,969   |
| Angular  |          |   56,653    |

tips:这里暂不说跨平台解决方案，比如比较优秀的`Flutter`等。
当然了我们会有一个疑问，倘若我们用`ts`编码，会不会现有的框架会不支持，这点咱们大可不必担心。

那我们想再看下，当前比较流行的框架、库，它们的源码情况

- Redux

![](https://cdn.jsdelivr.net/gh/yayxs/Pics@master/uPic/k9zRmw.png)

- mobx

![](https://cdn.jsdelivr.net/gh/yayxs/Pics@master/uPic/6cIda4.png)

正是由于

- 优秀的第三方框架库`ts`的比重越来越多
- 即将发布的 Vue.js 3x 版本，源码用`ts`重构
- 老旧的项目可以无缝衔接`ts`

以及我们众所周知的`JavaScript`本身存在的一些不够完美的地方，例如`xxx 未定义`，等等。当然了在一些原有的项目中可能也不习惯重新接触`ts`，那么我和大家一块来来做做笔记，这对于我们还是很有必要的。

### 环境准备

- 编辑器
  这里推荐很好用的`Vscode` ，本笔记相关代码也是用此
- 相关环境版本 - node - npm - vue/cli
  ![](https://cdn.jsdelivr.net/gh/yayxs/Pics@master/uPic/hP0GUV.png)
- 第三方辅助

  - - ts-node@8.6.2
      TypeScript execution and REPL for node.js

  ```sh
  npm install -g ts-node
  ```

  具体使用参考
  [ts-node xxx.ts](https://github.com/TypeStrong/ts-node)

- - nodemon@2.0.2
  ```sh
  npm i -g nodemon
  ```

### 笔记大纲

看过我其他笔记的掘友，知道我是刚搞了台`显示器`,那电脑还是用的比较陈旧的不灵敏的`mac`,所以可能会少些`xmind 图`什么的，希望您也能看下去，这么无聊的文字。笔记主要分为三部分

#### 前期思路

![](https://cdn.jsdelivr.net/gh/yayxs/Pics@master/uPic/YJlFxq.png)

## JavaScript vs TypeScript

首先，我们不管是读什么文章，或者茶余饭后同事唠嗑，多少都有耳闻，`ts`相比于`js`会有几点不同

- 真正意义上的面向对象编程
- 类型校验
- 是 js 的超集
- ...

对这几点对于编程来说还是尤为重要的，我们先看几个简单的`demo`
一些简单的浏览器调试，咱们选择在`vscode`里直接预览，这里推荐一个插件

- **Brower Previews**

![](https://cdn.jsdelivr.net/gh/yayxs/Pics@master/uPic/rAa5ry.png)

具体的使用方法可参考文末

1. 声明一个变量，并赋值

![](https://cdn.jsdelivr.net/gh/yayxs/Pics@master/uPic/PW581T.png)
就很奇怪，我们命名想让`aString`是一个字符串，可又能重新赋值为数字

2. 定义一个求和功能函数

```js
let aString = `我是一个字符串`;
aString = 123;
// alert(aString)
console.log(aString);
const addFn = (num1, num2) => alert(num1 + num2);
console.log(1, 2);
console.log("1", "2");
console.log("1", 2);
console.log(1);
```

![](https://cdn.jsdelivr.net/gh/yayxs/Pics@master/uPic/i4ZdkM.png)

我们可以发现，运行的时候才知道我们出现了参数的问题，那么这何尝不是我们头疼的一个问题呢，就像是

```js
undefined.fliter();
```

**本节小结**

可以简单的体会到以下几点

- 始于 js，归于 js
- 弱类型渐渐有点强
- 社区更新的非常快
- 适合大型项目的开发
- 更好尽早的避免 BUG
- 能够少些一些注释
  例如我们的一些方法,可以减少相关的文档注释

```js
    /**
 *
 * @param {string} name
 * @param {number} age
 * @param {string} sex
 */
const Me = (name, age, sex) => `我的名字是${name},我今年${age},我是${sex}生,欢迎关注我的掘金呦~`
console.log(Me(`洋小洋同学`, 18, `男`))
=>我的名字是洋小洋同学,我今年18,我是男生,欢迎关注我的掘金呦~

```

- IDE 良好的提示（这里我们后续慢慢体会下）

## 学习文档

- [TS 官网 TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.Any browser. Any host. Any OS. Open source.](https://www.typescriptlang.org/)

## 安装 TS

## hello-world

老规矩，咱们一块写个`hello world`

```ts
const hello = (): string => `hello TS`;
```

我们知道浏览器是不支持`ts`代码的（目前）,那么我们该如何编辑一下呢

### 安装

```sh
> npm install -g typescript
```

**+ typescript@3.7.5**
这样我们就可以通过`tsc xxx.ts`来进行编译为`js`代码

```js
var hello = function() {
  return "hello TS";
}; // js代码
```

### watch 监听

这里我们可以通过`tsc -w xx.ts` 来监听`ts`文件的变化并编译

### 遇到问题

在我们基础调试的过程中，会遇到 `was also declared here`

![](https://cdn.jsdelivr.net/gh/yayxs/Pics@master/uPic/BHAw0Z.png)
**解决**

## 类型

这里咱们知道：`JS数据类型`分类和判断 JavaScript 中有 6 种数据类型：数字（number）、字符串（string）、布尔值（boolean）、undefined、null、对象（Object）。 其中对象类型包括：数组（Array）、函数（Function）、还有两个特殊的对象：正则（RegExp）和日期（Date）。
那么在`ts`中，定义变量

```ts
let a: number;
a = 123; // 其中a 只可以是number 类型
```

### 任意类型

在`ts`中有一种类型，叫做任意类型`any`

- 尽可能少的使用`any`

```ts
let list: any[] = [1, true, "free"];

list[1] = 100;
```

```ts
const myInfoFn = (info: any) => {
  switch (typeof info) {
    case `number`:
      console.log(`我今年${info}`);
    case `string`:
      console.log(`我的名字${info}`);
    default:
  }
};

myInfoFn(`yayxs`);
```

### 数组

在实际的开发中，经常打交道的便是`数组`,那么在`ts`中有两种常用定义数组的方式（其中数组的每项元素是同一类型）

```ts
let arrSt: string[] = [`yayxs`]; // 每一项是string
let arrNum: Array<number> = [1, 2, 3]; // 每一项是number
```

### 元组

- 元素的个数固定
- 顺序尽量不变

```ts
let tuple: [string, number, string];
tuple = [`yayxs`, 18, `男生`];
console.log(`${tuple[0]}是${tuple[2]}，今年${tuple[1]}`);
```

### 函数

函数无非是` 参数``返回值 `等，其中包括默认参数，可选参数等

```ts
const addFn = (a: number, b: number): number => a + b;

const addCon = (a: number, b: number): void => console.log(a + b); // 函数没有返回值

const addFn = (a: number, b: number = 10): number => a + b;
// 参数默认值 b默认值值10
```

**可选参数**

```ts
const addABC = (a: number, b: number, c?: number): number => {
  if (c) {
    return a + b + c;
  } else {
    return a + b;
  }
};
```

**不确定参数**
口语中的不确定参数又叫`剩余参数`,示例：

```ts
const arrList: Array<number> = [1, 2, 3, 4];
// 其中acc为累加器；cur当前值
const reducer = (acc, cur): number => acc + cur;
let res: number = arrList.reduce(reducer, 5);
console.log(res); // 15

const addFun = (a: number, ...nums: number[]) => nums.reduce(reducer, a);
console.log(addFun(1, 2, 3, 4)); // 10
```

## 类

```ts
class MyGirlFriend {
  // 定义数据内容
  name: string;
  age: number;
  height: string;
}
// new 对象
let xuehua = new MyGirlFriend();
// set 内容
xuehua.name = `xuehua`; // 雪花
// get 内容
console.log(xuehua.name);
```

```ts
class MyGirlFriend {
  // 定义数据内容
  name: string;
  age: number;
  height: string;

  constructor(name: string, age: number, height: string) {
    this.name = name;
    this.age = age;
    this.height = height;
  }
  formatHeight() {
    return `${this.height} cm`;
  }
}
// new 对象
let xuehua = new MyGirlFriend(`xuehua`, 20, `172`);

console.log(xuehua.name); // xuehua
console.log(xuehua.age); // 20
console.log(xuehua.formatHeight()); // 172cm
```

我们可以看下编译为`js`之后的代码

```js
var MyGirlFriend = /** @class */ (function() {
  function MyGirlFriend(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }
  MyGirlFriend.prototype.formatHeight = function() {
    return this.height + " cm";
  };
  return MyGirlFriend;
})();
// new 对象
var xuehua = new MyGirlFriend("xuehua", 20, "172");
console.log(xuehua.name);
console.log(xuehua.age);
console.log(xuehua.formatHeight());
```

### 继承

我们都知道` 面向对象``继承``多态 `，那么什么是继承嘞：

```ts
/// 继承Demo
class Person {
  // 数据-属性
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  // 行为-方法
  sayHi() {
    console.log(`HI`);
  }
}

// 继承Person
class Programmer extends Person {
  sayNo() {
    console.log(`NO`);
  }
  sayHi() {
    // console.log(`en~~~`)
    super.sayHi(); // 调用父类
  }
}

let p = new Programmer(`yayxs`, 18);

p.sayHi();
```

相应的`js`代码

```js
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
/// 继承Demo
var Person = /** @class */ (function() {
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  // 行为-方法
  Person.prototype.sayHi = function() {
    console.log("HI");
  };
  return Person;
})();
// 继承Person
var Programmer = /** @class */ (function(_super) {
  __extends(Programmer, _super);
  function Programmer() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Programmer.prototype.sayNo = function() {
    console.log("NO");
  };
  Programmer.prototype.sayHi = function() {
    // console.log(`en~~~`)
    _super.prototype.sayHi.call(this);
  };
  return Programmer;
})(Person);
var p = new Programmer("yayxs", 18);
p.sayHi();
```

### 修饰符

- public

  - 默认就是 public 修饰
  - 公有，外部也可访问
  - 继承的对象也能使用

- private

  - 私有的，内部才能访问

- protected
  - 受保护的，权限稍大于 private

其实在类的内部，所有的`属性`和`方法`默认是通过`public`修饰符来进行修饰的

```ts
class Person {
  public name: string; // 默认都是公开的
}
```

关于`ts`中的修饰符在其他语言中也是类似的，例如`Java`等。

```ts
// 公共，私有与受保护的修饰符
class Person {
  public name: string;
  private age: string;

  public sayName() {
    console.log(`my name is ${this.name}`);
  }
  private sayAge() {
    console.log(`my age is ${this.age}`);
  }
}
```

那么通过`private` 修饰的方法，在外部该怎么访问到呢？

```ts
getName() {
        console.log(this.name)
    } // 获取名字

let p = new Person()
p.getName() // undefined


```

```ts
getName() {
        console.log(this.name)
    }
    setName(name: string) {
        this.name = name
    }
let p = new Person()
p.setName(`yayxs`)
p.getName() // yayxs
```

#### constructor

当被`protected` 修饰后，是不能`new`的，也就是说不能实例化
![](https://cdn.jsdelivr.net/gh/yayxs/Pics@master/uPic/XMqFqi.png)

#### 静态属性&方法

通过`static` 修饰的属性或者方法,可以直接通过`类.xxx`,

```ts
class Person {
  public static _name: string;

  public static getName(): string {
    return Person._name;
  }
}

console.log(Person.getName());
```

**本节小结**

在`ts`中类的实践还是十分有意义的，包括像静态属性方法，或者像`public` `protected` `private` 这些修饰符修饰在属性以及方法前边，主要是权限的限制，大致是
`public` > `protected` > `private` 具体的修饰细则，包括像
在父类以及子类的调用权限问题，可以翻阅相关的文档

- 静态成员更像是存在于类的本身，而不是`new`出来的实例对象上，这点官网也有说到

## 枚举

首先不得不提的是枚举在实际开发的过程中，还是十分有益的，能够增强代码的可读性，笔者在封装网络请求类或者网页中常见的下拉选择框有用到

```ts
enum RequestType {
  GET,
  POST,
  PUT,
  DELETE,
}
console.log(RequestType.DELETE); // 3
```

之于为什么是`3`呢

```js
var RequestType;
(function(RequestType) {
  RequestType[(RequestType["GET"] = 0)] = "GET";
  RequestType[(RequestType["POST"] = 1)] = "POST";
  RequestType[(RequestType["PUT"] = 2)] = "PUT";
  RequestType[(RequestType["DELETE"] = 3)] = "DELETE";
})(RequestType || (RequestType = {}));
console.log(RequestType.DELETE);
```

## 接口

接口在实际生活中也是无处不在的，像`水龙头与水管` `插板与插槽` 等等，那么在程序中也是一样的，同一接口规范了一类

```ts
// 接口
interface HasName {
  name: string;
}
// 定义对象
const obj = {
  name: `yayxs`,
};
// 定义方法

const sayName = (o: HasName) => {
  console.log(`my name is ${o.name}`);
};

sayName(obj); // my name is yayxs
```

以上的接口示例是只有参数，那接口里也是可以定义方法的，就像这样

```ts
// 接口
interface HasName {
  name: string;
  printName(name: string): void;
}
// 定义对象
const obj = {
  name: `yayxs`,
  printName: (name: string) => {
    console.log(name);
  },
};
// 定义方法

const sayName = (o: HasName) => {
  console.log(`my name is ${o.name}`);
  o.printName(o.name); // yayxs
};

sayName(obj);
```

### 可选参数

在定义接口的时候，我们可以定义一部分可选择的属性或方法，在实现接口的时候不是非要实现

```ts
/// 可选参数
type PerInfo = string;
interface Person {
  name: PerInfo;
  age?: number;
  sex: PerInfo;
  printName(): void;
  printAge?(): void;
}
// 我实现人类接口
class Me implements Person {
  printName(): void {
    console.log(`xxx`);
  }
  name: string;
  sex: string;
}

let m = new Me();
```

## 类型别名

类型别名，顾名思义就是类型的别名

```ts
// 类型别名
type Name = string; // 把string别名为Name 更语义化一点

const myName: Name = `yayxs`;

console.log(myName);
```

又或者

```ts
type User = {
  name: string;
  age: number;
  sex: string;
};

const me: User = {
  name: `yayxs`,
  age: 18,
  sex: `nan`,
};

console.log(me);
```

那么`类型别名`和`接口`有点相似

- 类型别名不可以重复定义，而接口是可以的
- 接口常用些

## 类与接口

```ts
// 定义支付接口
interface Pay {
  doSomething(): void; // 支付接口方法
}

const myPay = () => {
  // 实现接口中的pay()
  doSomething: () => {
    console.log(`实现支付动作`);
  };
};

// 定义不同的类来实现接口
class WxPay implements Pay {
  doSomething() {
    console.log(`我是微信支付`);
  }
}
class AlPay implements Pay {
  doSomething() {
    console.log(`我是支付宝支付`);
  }
}

let weixin_pay: Pay = new WxPay();
let ali_pay: Pay = new AlPay();
```

## 倾情链接

如果你还没有看过瘾，在`19年度`我曾写过一篇很简单的文章，也是基于第三方的环境搭建的一篇极为简单的博客（依赖 github、Vuepress）

- [TypeScript 初体验（已停更，正在重新个人博客中…）](https://yayxs.github.io/views/frontEnd/2019/100101.html#ts-%E8%83%8C%E6%99%AF)
