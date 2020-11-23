---
title: 《现代JavaScript教程》
---

# 《现代 JavaScript 教程》

## 2020-11-23

- `use strict`当它处于脚本文件的顶部时，则整个脚本文件都将以“现代”模式进行工作。一旦进入严格模式没有回头路了

```js
(function() {
  "use strict";

  // ...你的代码...

})();
```

- 8 种基本的数据类型 : 7+1 动态类型语言

- `console.log("string" / 2)` NaN

- 特殊的 null 值不属于上述任何一种类型,它构成了一个独立的类型，只包含 null 值

  ```
  typeof null` 会返回 `"object"` —— 这是 JavaScript 编程语言的一个错误，实际上它并不是一个 `object ,代表“无”、“空”或“值未知”的特殊值
  ```
- `undefined ` 未被赋值

- `typeof` 进行数据类型检验

```
 - Math 是一个提供数学运算的内建 object。例。
 - typeof null 的结果是 "object"。这是官方承认的 typeof 的行为上的错误，这个问题来自于 JavaScript 语言的早期，并为了兼容性而保留了下来。null 绝对不是一个 object。null 有自己的类型，它是一个特殊值。
 - typeof alert 的结果是 "function"。函数隶属于 object 类型。但是 typeof 会对函数区分对待，并返回 "function"。这也是来自于 JavaScript 语言早期的问题。从技术上讲，这种行为是不正确的，但在实际编程中却非常方便。
```



## 2020-07-02

- 逻辑或 是怎么运算的

  一个或 `"||"` 运算的链，将返回第一个真值，如果不存在真值，就返回该链的最后一个值。

- ?? 运算符
- 局部变量
- 全局变量
- Js 的默认参数可以是一个函数的调用
- 创建函数的方式
  - 函数声明
  - 函数表达式
- 回调函数
- 什么是函数的声明提前

首先 函数有两种形式 目前来看的话 1 是 函数声明 2 表达式 不同的是

- 初始化在全局寻找 函数的声明 ，完事之后执行代码 那这样
- 不过函数声明会有一个`块级作用域`

- 创建 对象的 方式有？

  - 构造函数
  - 字面量

- 属性名（key）必须是字符串

  let obj = {

  0:'hah'

  }

  console.log(obj[0])

  console.log(obj['0']===obj[0]) // true

  let obj = {}

  obj.**proto** = 5

  console.log(typeof obj['__proto__']) object

- **属性存在性**

      let obj = {}

      console.log('name' in obj) // 使用`in`

- 取`key`

  let obj = {

  0:'yayxs',

  'name':'name',

  age:18

  }

  for(let key in obj){

  console.log(key)

  }

- 一个被 `const` 修饰的对象是 **可以** 被修改。

const info = {

username:'yayxs',

age:20

}

info['age'] = 18 ;

console.log(info)

- 深拷贝 和 浅拷贝

const info = {

username:'yayxs',

age:20,

sex:'nan'

}

let clone = {}

for(let prop in info){

clone[prop] = info[prop]

}

console.log(clone)

delete clone.sex

console.log(clone)

console.log(info)

什么是 深拷贝 ：如果一个对象的 属性值 它还是个对象 那把它拷贝一遍 就是深拷贝了

- 谈一谈垃圾回收机制
  - mark-and-sweep 算法
  -

## 2020-07-03

- console.log(123..toString(10))

- ```
  let arr = [ -2.1,1.1, -2.9 , 0 , 1.56 ]

  for(let i = 0;i< arr.length;i++ ){
    let floor =  Math.floor(arr[i])
    console.log(floor)
  }

  ```

- ```
  let num = 1234.2345565778
  let rNum = +num.toFixed(5)
  console.log(rNum)
  ```

- 经典的面试题 0.1 0.2 0.3

- Object.is()

- ```
  let arr = [ '\u00A9' , '\u{20331}' , '\u{1F60D}']
  for(let i = 0 ;i<arr.length;i++){
    console.log(arr[i])
  }
  ```

- 遍历字符串

- ```
  let str = `my name is yayxs`
  for(let char of str){
    console.log(char)
  }
  ```

- 字符串

  - 查找子串

    ```
    let stream = `rtmp:123.23.42.12/dsaw`
    let stream1 = `https://yayxs.github.m3u8`

    console.log(stream.indexOf('tmp'))
    console.log(stream1.includes('3u8'))
    ```

  - 获取子串

  ```
  let str = `https://yayxs.github.io/`

  console.log(str.slice(5,8)) ://
  ```

- 经典的面试题 数组中的哪些方法能够改变原数组

  - ```
    let arr = ['前','中','后']
    let res = arr.push('第三者')

    console.log(arr) //  ["前", "中", "后", "第三者"]
    console.log(res) // 4
    ```

  - ```
    let arr = ['前','中','后']
    let res = arr.pop('第三者')

    console.log(arr)
    console.log(res)
    ```

  - 遍历数组

  - ```
    let arr = ['前','中','后']
    for(let val of arr){
      console.log(val)
    }
    ```

  -
