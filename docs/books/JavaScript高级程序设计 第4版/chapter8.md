---
title: 第 8 章 对象、类与面向对象编程
---

# 第 8 章 对象、类与面向对象编程

## 对象的创建方式以及 Object.defineProperty

```js
// 创建对象的方式
let per = new Object();

console.log(per);

let person = {};

Object.defineProperty(person, "name", {
  value: "yayxs",
  writable: false,
  configurable: false,
});
console.log(person);
person.name = "new";
console.log(person);
let book = {};

Object.defineProperties(book, {
  key1: {
    value: "key1",
  },
  key2: {
    value: "key2",
  },
});
console.log(book);
console.log(Object.getOwnPropertyDescriptor(book, "key1"));
```

## 关于 Object.assign 的浅复制

```js
const targetO = {
  key1: "val1",
};

const source2 = {
  key2: "val2",
};

const source3 = {
  key3: "val3",
};

const source4 = {
  key3: "val4",
};
Object.assign(targetO, source2, source3, source4);

console.log(targetO);
```

## 相关考点

- 对象的深浅拷贝
- new 操作符创建构造函数的实例
- instanceof 操作符的作用：确定对象的类型
- new 操作符调用的就是构造函数
