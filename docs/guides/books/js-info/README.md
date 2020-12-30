---
title: 《现代JavaScript教程》
---

## `v8` 引擎

- 不同的浏览器有不同的引擎

- 从引擎的角度分析数组的构成

## `js`的能力

- 网络请求 文件下载上传
- 客户端存储

- 标签页/窗口之间之间怎么通信 不是同一个网站就不能通信

## `同源策略`

## `浏览器技术`

## `一些规范`

## 字符串的一些`api`

```
  let arr = [ '\u00A9' , '\u{20331}' , '\u{1F60D}']
  for(let i = 0 ;i<arr.length;i++){
    console.log(arr[i])
  }
```

遍历字符串

```
 let str = `my name is yayxs`
 for(let char of str){
   console.log(char)
 }
```

字符串

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

## 日期和时间

>创建个标准的时间

```js
let now = new Date();
console.log( now ); // 显示当前的日期/时间
// res Sat Dec 26 2020 10:49:14 GMT+0800 (中国标准时间)
```

>传时间戳

```js
new Date() 中的参数可以传毫秒数（时间戳）
// new Date(timestamp)
```

>转为时间戳

```js
const date = new Date()
console.log(date.getTime())

```

> 传字符串-自动解析

```js
let date = new Date("2020-12-26");
console.log(date) // Sat Dec 26 2020 08:00:00 GMT+0800 (中国标准时间)
```

> 传入年月日时分秒

```js
new Date(2020, 11, 26, 0, 0, 0, 0);
```

```js
let date = new Date();
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
```

```js
let date = new Date();
// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDate())


console.log(`今天是${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日${date.getHours()}点${date.getMinutes()}分${date.getSeconds()}秒，星期${date.getDay()}`)
```

> 返回当前的时间戳

```js
Date.now()
```

>Date.parse

## 递归

- 需要解决一些递归遍历的问题

## `setTimeout` vs`setInterval`

需要写一个通用的延迟函数，这两个方法不在`js`中的规范中，但是所有浏览器和`node`环境中都支持

- `setTimeout` 推迟一段时间执行
-  `setInterval  `  重复执行一个函数

## vue的核心

## 原型继承

## 正则表达式

> 包含模式可选的修饰符 **regexp** **reg**

- i 大小写不区分
- g 查找全部
- m 多行模式
- u unicode 支持
- 粘滞模式

- `\d` 任何一个数字 0-9 的字符
- `\s` 空格 \t \n \v \f \r
- `\w` 下划线
- `.` 任何字符
- `\` 转义

## 事件循环

## 宏任务微任务

```js
setTimeout(() => {
  console.log(`延时执行setTimeout`); // 3
});

Promise.resolve().then(() => {
  console.log(`Promise then 执行`); // 2
});
console.log(`正常js进程`); // 1
```

## `DOM`和`BOM`