---
title: 不同数据类型之间的转换
---

初始化声明待转的数据,使用一种简单粗暴的控制台打印的方式

```js
// --------数字---------------
// 数字1
const isNumber1 = 1;
// 数字0
const isNumber0 = 0;
// nan
const isNaNFlag = NaN;
// -------字符串--------------
// 基本非空字符串
const isStr = "I am String";
// 空字符串
const isStrNull = "";
// 字符串包含数值字符
const isStrNumber1 = "+1";
const isStrNumber2 = "-1";
const isStrNumber3 = "011";
const isStrNumber4 = "1.1";
// -------布尔值-------------
// 真
const isTrue = true;
// 假
const isFalse = false;
// -------null 和undefined-------------
const isNull = null;
const isUndefined = undefined;
// -------Symbol-------------
const isSym = Symbol();
// -------数组-------------
// 非空数组
const isArr = [1];
// 空数组
const isArrNull = [];
// -------对象-------------
// “非空对象”
const isObj = {
  name: "I am obj",
};
// 空对象
const isObjNull = {};
// -------函数-------------
const isFunc = () => {};
const targetArr = [
  isNumber1,
  isNumber0,
  isStr,
  isStrNull,
  isStrNumber1,
  isStrNumber2,
  isStrNumber3,
  isStrNumber4,
  isTrue,
  isFalse,
  isArr,
  isArrNull,
  isNaNFlag,
  isNull,
  isUndefined,
  // isSym,
  isObj,
  isObjNull,
  isFunc,
];
```

## 转换为布尔

可以通过`Boolean()` 函数来进行转换

```js
1 true
index.html:73 0 false
index.html:73 I am String true
index.html:73  false
index.html:73 +1 true
index.html:73 -1 true
index.html:73 011 true
index.html:73 1.1 true
index.html:73 true true
index.html:73 false false
index.html:73 [1] true
index.html:73 [] true
index.html:73 NaN false
index.html:73 null false
index.html:73 undefined false
index.html:73 {name: "I am obj"} true
index.html:73 {} true
index.html:73 () => {} true
```



## 转换为数值

### Number()

Cannot convert a Symbol value to a number

```js
index.html:65 1 1               // 数值直接返回
index.html:65 0 0               // 数值直接返回
index.html:65 I am String NaN   // 基本字符串 不是一个数字
index.html:65  0                // 空字符串 0
index.html:65 +1 1
index.html:73 -1 -1
index.html:73 011 11            // 忽略前边的0
index.html:73 1.1 1.1
index.html:65 true 1            // true转换为1
index.html:65 false 0           // false 转为0
index.html:65 [1] 1
index.html:65 [] 0              // 空数组 转为0
index.html:65 NaN NaN
index.html:65 null 0            // null 返回0
index.html:65 undefined NaN     // unde 不是一个数字
index.html:65 {name: "I am obj"} NaN
index.html:65 {} NaN
index.html:65 () => {} NaN
```

### parseInt()

parseInt()函数更专注于字符串是否包含数值模式。

```js
const str1 = "   123";
const str2 = "+123";
const str3 = "-123";
const str4 = "a123";
const str5 = "";
const str6 = "   -123abc ";
const str7 = "12.3";

const targetArr = [str1, str2, str3, str4, str5, str6, str7];
//   console.log(targetArr.length)
for (let ele of targetArr) {
  console.log(ele, parseInt(ele, 10));
}
```

```js

 123 123
index.html:66 +123 123
index.html:66 -123 -123
index.html:66 a123 NaN
index.html:66  NaN
index.html:66    -123abc  -123
index.html:66 12.3 12
```

## 转为字符串

### .toString()
null和undefined值没有toString()方法。


```js
for(let ele of targetArr){
  console.log(ele,  ele.toString(10))
}
```
```js

1 "1"
index.html:73 0 "0"
index.html:73 I am String I am String
index.html:73  
index.html:73 +1 +1
index.html:73 -1 -1
index.html:73 011 011
index.html:73 1.1 1.1
index.html:73 true "true"
index.html:73 false "false"
index.html:73 (3) [1, 2, "abc"] "1,2,abc"
index.html:73 [] ""
index.html:73 NaN "NaN"
```
### String()

```js

1 "1"
index.html:73 0 "0"
index.html:73 I am String I am String
index.html:73  
index.html:73 +1 +1
index.html:73 -1 -1
index.html:73 011 011
index.html:73 1.1 1.1
index.html:73 true "true"
index.html:73 false "false"
index.html:73 (3) [1, 2, "abc"] "1,2,abc"
index.html:73 [] ""
index.html:73 NaN "NaN"
index.html:73 null "null"
index.html:73 undefined "undefined"
index.html:73 {name: "I am obj"} "[object Object]"
index.html:73 {} "[object Object]"
index.html:73 () => {} "() => {}"
```