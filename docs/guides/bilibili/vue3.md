---
title: Vue3.x学习心得分享 | Vue免费视频教程
---

# 零、Vue3 官方文档地址

- [https://v3.vuejs.org/ 官方英文文档](https://v3.vuejs.org/)
- [https://v3.cn.vuejs.org/ 官方中文文档](https://v3.cn.vuejs.org/)

# 一、git 子模块管理项目

> 我们 的教程系列代码是存放在仓库 [vue3 视频对应的代码](https://github.com/yayxs/bilibili-video-tutorial/tree/vue3-learn)
>
> 不同的**系列教程** 是存放在不同的分支的

### 新建分支

我们在仓库的基础上新建一个用于`vue3` 学习的分支 用来存放 我们的 vue3 的代码

```
git branch vue3-learn
```

## 切换到 Vue3 学习分支

```
git checkout vue3-learn
```

## 初始化项目

```
yarn init
```

初始化之后得到的包管理文件

```
// package.json
{
  "name": "vue3-learn",
  "version": "1.0.0",
  "repository": "https://github.com/yayxs/bilibili-video-tutorial.git",
  "author": "yayxs <leaderywl@163.com>",
  "license": "MIT"
}
```

## 添加子模块

我们通过`git` 的子模块方式来管理代码，一方面是**源码** 一方面是咱们自己写的代码

```
git submodule https://github.com/vuejs/vue-next.git
```

## .gitmodules

该置文件保存了项目 URL 与已经拉取的本地目录之间的映射

```
[submodule "vue-next"]
	path = vue-next
	url = https://github.com/vuejs/vue-next.git

```

## 克隆含有子模块的项目

我们切换分支之后需要克隆代码，把源码克隆下来

### git submodule init

```
git submodule init // 用来初始化本地配置文件
```

### git submodule update

```
git submodule update // 该项目中抓取所有数据并检出父项目中列出的合适的提交
```

你可以通过以上的两种方式结合，也可

```
git clone --recursive xxx
```

# 二 、初始化一个 vue3 的项目

## 全局卸载脚手架

### 全局卸载当前的脚手架然后安装最新的 cli

```sh
npm install -g @vue/cli@next
```

### 通过两种方式

- 一种是 cli
- 一种是 vite

具体的操作参见 `Vue3`的官方文档，初始化完成之后的项目目录结构

::: tip
type：可选。代替 language，表示代码块中脚本语言的内容类型（也称 MIME 类型）。按照惯例，这个值始终都是"text/javascript"，尽管"text/javascript"和"text/ecmascript"都已经废弃了。JavaScript 文件的 MIME 类型通常是"application/x-javascript"，不过给 type 属性这个值有可能导致脚本被忽略。在非 IE 的浏览器中有效的其他值还有"application/javascript"和"application/ecmascript"。如果这个值是 module，则代码会被当成 ES6 模块，而且只有这时候代码中才能出现 import 和 export 关键字。

:::

```html
// index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

::: tip
可以看到我们的 main.js 已经发生了变化
:::

```js
// main.js
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

createApp(App).mount("#app");
```

::: tip
值得注意的一点是我们的 `<template>` 标签下并不要求一个`root` 标签
:::

```vue
// HelloWorld.vue

<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
```

# 三、 Vue3 中的声明式渲染属性和事件

```vue
<template>
  <section>
    <h1>{{ msg }}</h1>
    <button @click="handleCountAddClick">count is: {{ count }}</button>
    <hr />
    <section style="border: 1px solid red; width: 500px; height: 200px">
      <input type="text" v-model="currIptVal" />
    </section>
  </section>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      currIptVal: "currIptVal",
      count: 0,
      info: {
        name: "infoName",
      },
      listArr: [],
    };
  },
  methods: {
    handleCountAddClick() {
      // console.log(this);
      // let { count, msg } = this;
      // count++;
      this.count++;
    },
  },
};
</script>
```

# 四、自己实现一个简单的 v-model

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <input type="text" id="ipt" />
    </div>
    <!-- <script src="https://unpkg.com/vue@next"></script> -->
    <script>
      // 1 取到DOM元素
      const dom = document.querySelector("#ipt");
      // console.log(dom);
      const evtHandler = (e) => {
        // console.log(e.target.value);
        dom.value = e.target.value;
      };
      dom.addEventListener("input", evtHandler);
    </script>
  </body>
</html>
```

# 五、为什么 Vue 中不要用 index 作为 key？

在实际开发中我们都会使用到循环生成节点，通常情况 下我们是需要`key` 一下 关于`key` 的作用多多少都会知道点。我们要说的是假如我们使用索引值来渲染元素的话，会出现什么问题（**当然了这在 vue 中是不建议这么做的**）

::: tip

核心的一点就是渲染错误的问题，比如说删除第一行结果不符合预期 第二行删除了

:::

那么我们就来简单的复现一下

html5 CSS3
