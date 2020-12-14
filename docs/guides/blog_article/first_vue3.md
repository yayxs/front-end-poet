---
title: Vue3的`composition api`
---

# vue3 中的组合式 API

<!-- >完整的代码案例在 [github地址](https://github.com/yayxs/awesome-frontend-learning/tree/master/vue-next-learn) -->

## 前言

不知道在哪个瞬间,`尤大` 发了一条微博，我就知道"大事不妙"。要来了……`千呼万唤始出来` 的[vue3](https://github.com/vuejs/vue-next) 就在这个特别的日子发布了。

最核心的一点便是**Composition API** ，在本文咱们先揭开它的面纱，简单的进行横向对比一下，最后我们将一同构建两个版本：一个使用 Composition API，另一个使用基于 Options API。简单的探究一下两者有什么区别与联系

## 安装

我们可以通过使用官方的`脚手架方式` 进行升级。直接通过命令升级 `vue add vue-next`

此时在依赖包中就是 vue 3 的版本

```json
{
  "name": "vite-init-app",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "vue": "^3.0.4"
  },
  "devDependencies": {
    "vite": "^1.0.0-rc.13",
    "@vue/compiler-sfc": "^3.0.4"
  }
}
```

![](https://user-gold-cdn.xitu.io/2020/5/19/1722d499dc33d818?w=1165&h=376&f=png&s=92275)

**我们可以看到：vue 不再具备默认导出，命名导出创建一个新的 vue 应用程序，就像是在 vue2 中使用构造函数一样，插件设置将使用`use`方法**

```js
import { createApp } from "vue";
import App from "./App.vue";

import SumApp from "./views/Sum.vue";

createApp(SumApp).mount("#app");
```

当然了截止`20201214` vue3 可以使用`vite` 创建项目，

```json
// 完整的json
{
  "name": "composition-api-app",
  "version": "0.1.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "vue": "^3.0.4"
  },
  "devDependencies": {
    "vite": "^1.0.0-rc.13",
    "@vue/compiler-sfc": "^3.0.4"
  }
}
```

## 历史原因

> 1 随着功能的增长，复杂组件的代码变得越来越难以阅读和理解。这种情况在开发人员阅读他人编写的代码时尤为常见。根本原因是 Vue 现有的 API 迫使我们通过选项组织代码，但是有的时候通过逻辑关系组织代码更有意义。

> 2 目前缺少一种简洁且低成本的机制来提取和重用多个组件之间的逻辑。
>
> 3 使用`typescript` 不方便
>
> `vue 3` 可以更好的支持`typescript` ,我们知道`ts` 有着较好的类型推断
>
> 那么当前有什么问题呢，
>
> - 2.x 版本的 vue 在设计师较少的考虑到了类型推断（使用 flow）,并且在尝试与`ts` 配合使用时总是会有点问题
> - vue 依赖`this` 上下文来访问 `属性` 也好，`方法` 也罢，可以说`this` 在 vue 中是十分有魔力的

**总结** 一成不变是好事，但在开发中，对于一个问题的解决方式一定要精益求精，不断的寻求更优解，这也是开发者的精神吧，我想在 2.x 的版本中，我们使用`data` `watch` `methods` 以及各种生命周期，就像这样

![20200430172328](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200430172328.png)

正式因为如此，我们很难通过一个庞大而复杂的文件中读取分组，我们经常会来回的滚动，另一个缺点是，由于在组件中无法直观的拆分，因此逻辑重用变得十分的困难。为了更好的`重用代码逻辑`

## `Composition API`

### 什么是组合式 api

新的`api` 并不会破坏当前 2.x 的代码，甚至可以继续使用，新的方式是为了解决 vue2.x 一些限制

> Evan You:has described the Composition API as a **reactive API coupled with the ability to register lifecycle hooks using globally imported functions**.
> 意思是说，这种新的 api 是一种反应性的 api，并且具有使用全局导入函数注册生命周期钩子的功能

简言之，`vue 3` 并没有新增什么新的内容，或者说`vue` 把一些内部的功能暴露出来，提供给开发者，让我们可以屁颠屁颠的直接在组件中使用。

### 一个`vue3`组件

```vue
<template>
  <section class="container">
    <section class="main">
      <section class="composition-api">
        <section>
          <h4>vue 3 Sum</h4>
        </section>
        <section class="ipt">
          <p>counter:{{ total }}</p>
          <form id="sum">
            <input type="text" class="form-control" v-model="number1" />
            <input type="text" class="form-control" v-model="number2" />
            <button @click="handleAddClick" type="button" class="btn">
              加一起
            </button>
          </form>
        </section>
      </section>
    </section>
  </section>
  <section>
    <h4>fetch data</h4>
  </section>
  <ul class="list">
    <li v-for="item in todoLists" :key="item.id">{{ item.title }}</li>
  </ul>
</template>
<script>
// ref
import { ref, computed, reactive, toRefs, onMounted, watch } from "vue";

const SumApp = {
  props: {
    userId: {
      type: String,
      default: "01xx",
    },
  },
  setup(props, ctx) {
    // console.log(this); //  undefined
    // console.log(props); // proxy { userId: } // 只能访问props
    const { userId } = props;
    const todoLists = ref([]);
    const number1 = ref(0);
    const number2 = ref(0);
    const sum = ref(0);
    const title = reactive({
      title: `test-title`,
    });
    const total = computed({
      get: () => {
        return `总和是${sum.value}`;
      },
    });
    const handleAddClick = () => {
      sum.value = parseInt(number1.value) + parseInt(number2.value);
    };
    const getTodoLists = async () => {
      console.log("gettodolist");
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      todoLists.value = await response.json();
    };
    onMounted(getTodoLists);
    watch(userId, getTodoLists);
    return {
      obj: {
        name: "yaxs",
      },
      number1,
      number2,
      total,
      todoLists,
      handleAddClick,
      getTodoLists,
      ...toRefs(title),
    };
  },
};

export default SumApp;
</script>
<style lang="css" scoped></style>
```

通过一个简单的案例，可以得知一个新的`api` 是`setup()` , 包括状态也好，点击的事件函数也好都是书写在此函数内。这显得与`vue 2.x` 有点差异，之前的写法我们会把一些方法写在 `methods` 中，那么这样就会有一个问题，随着项目越来越大，组件变得越来越长，后期维护的时候，

- 方法和它依赖的数据状态对应不上，在编辑器里上下跳动的找关联
- 考虑一个场景：一个小模块（其中有数据和状态）比如说，显示一个数和它的 2 倍，就是我们上面的例子，这样我们可以把描述这一场景 的逻辑和数据直接提到公共的部分，**方便复用**

## `vue-class-component`

当前很多开发者正在或即将使用`类组件` ，那么在`vue 3` 实现细节上仍然有很多的不确定性，这变成了一个较为危险的行为

目前的最新`api` 大多是使用普通的变量和函数，类型较为友好，使得开发者可以尽情的享受类型推断带来的快感

那么，这种`class-component` 的这种方式我们还可以继续使用吗，目前为止，仍然继续可以使用，但是不推荐

## 横向对比

当然了我们在对比的时候，不得不拿出，这两张图

![](https://user-images.githubusercontent.com/499550/62783026-810e6180-ba89-11e9-8774-e7771c8095d6.png)

让我们构建一个简单的组件，该组件允许用户按下按钮即可添加两个数字。首先，我们将快速回顾如何使用基于`options`的 API 来完成此操作。然后，我们将使用 Composition API 重建相同的组件，以说明差异。

### 使用 Options API 构建

```js
 data() {
    return {
      num1: 0,
      num2: 0,
      sum: 0,
    };
  },
  methods: {
    addNumbers() {
      this.sum = parseInt(this.num1) + parseInt(this.num2);
    },
  },
```

使用基于 Vue 2 选项的 API，我们在`data()`函数中返回了反应数据对象。然后，该`AddNumbers()`功能将在`methods`属性中注册。要从中访问变量`data()`，必须使用`this`。

现在，`this`它嵌套在方法内部，因此它应该引用方法的对象而不是整个实例，但不是。Vue 正在这里进行幕后工作，以便为我们解决这个问题。通常，这非常简单直观，但是在更复杂的情况下，这种幕后处理可能会导致的意外行为`this`。

这也正是我们上文提到的关于`typescript` 的支持

### 使用 Composition API 构建

在使用`vue3` 之前，官方已经给我们准备好了[vue-cli-plugin-vue-next](https://github.com/vuejs/vue-cli-plugin-vue-next) , 熟悉 vue 脚手架的人对于此并不陌生，我们可以通过

```
vue add vue-next
```

来在项目里使用`vue3` ，这样能够很轻松的把 vue 2.x 的项目转换为 vue 3 项目

```js
// main.js
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
```

我们可以看到在挂载的时候是不一样的， 这里的不一样大概指得是用法不一样，

**在之前的版本**

```js
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
```

## 声明响应式状态`reactive`

要为`JavaScript`对象创建响应式状态，可以使用`reactive`方法,

```js
import { reactive } from "vue";

// reactive state
const state = reactive({
  title: `Vue 2.x Option API vs Vue 3 Composition API`,
});
```

其中`data` 便是反应性对象或者说是一个响应式的状态。

![](https://user-gold-cdn.xitu.io/2020/5/19/1722d7bae5236891?w=550&h=54&f=png&s=3948)

在组件模板部分使用的时候需要`data.XXX` 这样是可以取到值，不过是有一点麻烦,或者可以借用`roResfs`

```js
return {
  ...toRefs(state),
};
```

在返回的时候将**响应式的对象** 转为普通对象，但其属性是响应式的。

**这里返回的 `state` 是一个所有 Vue 用户都应该熟悉的响应式对象**

## 基于响应式状态的副作用`watchEffect`

```js
import { reactive, computed, watchEffect } from "vue";

watchEffect(() => {
  document.title = `count is ${state.count}`;
});
```

## 创建独立的响应式值`ref`

```js
import { ref } from "vue";
// ref会返回一个响应式的对象，此对象只包含一个名为 value 的 property
let num = ref(0);
```

最后，我们将函数和属性返回到模板。

```js
return {
  num,
};
```

这里的一件事是`ref`在变量中使用`let num = ref(0)`。这就是我们使变量具有反应性的方式！有两个函数可用于处理状态和反应性：`ref`和`reactive`。

## 计算属性`computed`

有时候我们需要依赖其他状态，在`vue` 中是通过计算属性来处理。我们起初的时候，是直接通过一个方法来计算两者之和，这是为了更好的来演示用。接下来我们使用`computed()`

```js
import { computed } from "vue";
```

```js
let sum1 = computed(() => parseInt(num3.value) + parseInt(num4.value));
```

**这`sum1`是一个我们称为“ ref”的对象，因为它用作对其持有的内部值的反应性引用。**

## `setup`

有两个参数

- props:正如在一个标准组件中所期望的那样，setup 函数中的 props 是响应式的，当传入新的 prop 时，它将被更新
- context ：传递给 setup 函数的第二个参数是 context。context 是一个普通的 JavaScript 对象，它暴露三个组件的 property：

![](https://user-gold-cdn.xitu.io/2020/5/19/1722d675248123df?w=368&h=376&f=png&s=26462)

```js
  setup(props,{attrs,slots,emit}) {
    console.log(props)
    // 1 props 是响应式的
    // 2 解构的时候使用 toRefs
    const {total}  = toRefs(props)

    console.log(attrs)
    console.log(slots)
    console.log(emit)

    const initNumber = ref(0)

    return {
      initNumber
    }
  },
```

**所有内容现在都在`setup()`函数内。模板中需要使用的所有函数或属性都应加入，`setup()`因为这是将它们返回模板的方式。**
在内部`setup()`，我们使用的反应变量在顶部定义为独立变量，而不是`data()`函数中的返回对象。
还有一个函数，单独的挂出，并不是写在`methods`中，现在，我们可以轻松地在组件实例之间重用我们的功能，这将显着提高大型代码库的可读性。还请注意，`this`不再需要引用变量！

## 生命周期`onMounted`

```js
const getTodoLists = async () => {
  console.log("gettodolist");
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  todoLists.value = await response.json();
};
onMounted(getTodoLists);
```

## `watchEffect` vs `watch`

> `watchEffect` 和 2.x 中的 `watch` 选项类似，但是它不需要把被依赖的数据源和副作用回调分开。组合式 API 同样提供了一个 `watch` 函数，其行为和 2.x 的选项完全一致。
