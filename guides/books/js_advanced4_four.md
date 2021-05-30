---
title: 变量、作用域与内存
---

## 谈谈 js 中的变量

JavaScript 变量是松散类型的,函数的参数是按值传递的，**不仅仅是基本数据类型还是引用数据类型都是按值传递的**

```js


function setName(o){
o.name='new name'
o=new Object()
o.name='new new name'}
let per = new Object()
setName(per)
console.log(per.name)
VM24381:7 new name
```

**由于接下来的内容牵扯到太多的面试知识点，请在top-fe-iqa 中查看**