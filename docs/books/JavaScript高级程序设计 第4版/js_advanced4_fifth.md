---
title: 第 5 章　基本引用类型
---

## 字符串的常见的操作方法

### 字符串拼接

```js
let a = `a`;
undefined;
let b = `b`;
undefined;
let add = `+`;
undefined;
let res = a.concat(b);
undefined;
res;
("ab");
res = a.concat(b, add);
("ab+");
```

### 提取子字符串

```js
let str = `01234`;
undefined;
let res = str.slice(0, 3);
undefined;
res;
("012");
res = str.substr(0, 3);
("012");
res;
("012");
res = str.substr(0);
("01234");
res = str.substr(0, 1);
("0");
res = str.substring(0, 4);
("0123");
str;
("01234");
```

### 字符串位置

```js
let str = `0123456@qq.com/home.index`;
undefined;
let res = str.indexOf(`/home`);
undefined;
str;
("0123456@qq.com/home.index");
res;
14;
let res = str.lastIndexOf(`.`);
undefined;
res;
19;
```

### 字符串包含

ECMAScript 6 增加了 3 个用于判断字符串中是否包含另一个字符串的方法
startsWith()、endsWith()和 includes()

### 字符串的迭代与解构

```js
let  str = `01234`
undefined
let res = [...str]
undefined
res
(5) ["0", "1", "2", "3", "4"]
for(const s of str){
console.log(s)}
VM3919:2 0
VM3919:2 1
VM3919:2 2
VM3919:2 3
VM3919:2 4
undefined
```

### 字符串的匹配

```js

let str = `foo,bar,zeo`
undefined
let res = str.match(/o/)
undefined
res
["o", index: 1, input: "foo,bar,zeo", groups: undefined]
```

```js
let str = `foo,baz,fix,bzo`;
undefined;
let res = str.search(/o/);
undefined;
res;
1;
```

## Math

```js
let num = 12.2345;
undefined;
Math.ceil(num);
13;
Math.floor(num);
12;
Math.round(num);
12;
Math.fround(num);
12.23449993133545;
let ram = Math.floor(Math.random() * 10 + 1);
undefined;
ram;
6;
```
