---
title: Ts第二部分
---

## 前言

### 背景

在 2020 春节假期期间，我曾整理了一份关于 `TypeScript入门级别的笔记分享` 也就是它 **[春节间的 TypeScript 笔记整理](<[https://github.com/yayxs/advanced-road/blob/master/docs/%E6%98%A5%E8%8A%82%E9%97%B4%E7%9A%84TypeScript%E7%AC%94%E8%AE%B0%E6%95%B4%E7%90%86.md](https://github.com/yayxs/advanced-road/blob/master/docs/春节间的TypeScript笔记整理.md)>)** 还记得当时正是 `疫情` 正严重的时候，正值 2020 年中时候，BJ 又再次迎来第二次 疫情冲击 ，在这愈发困难 的境地下，我们在保证 安全的前提下，疯狂提升自己就对了

### 重要性

不管怎么说，如果说一个前端开发者 在 2020 年中还没有接触过 `TypeScript` 或者说使用过。那么可能已经 不够时髦了。为什么这么说，`TypeScript 是未来` 可是未来它已经来了。

![](https://user-gold-cdn.xitu.io/2020/6/17/172c2d84da866404?w=549&h=508&f=png&s=30494)

## 









## 介绍

### 概述

什么是`TypeScript`

- 超集
- 静态类型
- 转换为 JS 编译为 JS

- 静态的代码类型

  ```typescript
  let b: number;
  ```

* 传统的`JavaScript` 也是有类型的（其中类型指的是动态的类型）

  ```js
  let a = 123;
  a = "hahha";
  ```

### 优势

这里的优势指的是相对于传统的 JS

- 开发中存在问题
- 编辑器更友好提示
- 代码语义清晰

```js
function(data){
    return data.a+data.b
}
```

## 环境搭建

安装`node` 环境

```typescript
interface IAdd {
  x: number;
  y: number;
}

const add = (data: IAdd) => {
  return data.x + data.y;
};

add({ x: 1, y: 2 });
```

变量的属性和方法也就确定了，变量的属性是什么

- 基本的类型
- 对象的类型
  - 类的类型
  - 函数的类型
  - 数组类型

### 类型注解类型推断

- 类型注解 告知 ts
- 类型推断 ts 自动分析

### void never

解构参数的类型注解

类型别名
