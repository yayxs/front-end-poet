## 前言

不知道在哪个瞬间,`尤大` 发了一条微博，我就知道"大事不妙"。要来了……`千呼万唤始出来` 的[vue3](https://github.com/vuejs/vue-next)  就在这个特别的日子发布了。

最核心的一点便是**Composition API** ，在本文咱们先揭开它的面纱，简单的进行横向对比一下，最后我们将一同构建两个版本：一个使用Composition API，另一个使用基于Options API

## Composition API

### 什么是Composition API

新的`api` 并不会破坏当前2.x 的代码，甚至可以继续使用，新的方式是为了解决vue2.x 一些限制

- >Evan You:has described the Composition API as a **reactive API coupled with the ability to register lifecycle hooks using globally imported functions**. 
  >
  >意思是说，这种新的api 是一种反应性的api，并且具有使用全局导入函数注册生命周期钩子的功能

简言之，`vue 3 ` 并没有新增什么新的内容，或者说`vue` 把一些内部的功能暴露出来，提供给开发者，让我们可以屁颠屁颠的直接在组件中使用。

### 为什么大费周折改变

一程不变是好事，但在开发中，对于一个问题的解决方式一定要精益求精，不断的寻求更优解，这也是开发者的精神吧，我想

在2.x的版本中，我们使用`data` `watch` `methods` 以及各种生命周期，就像这样

![20200430172328](https://raw.githubusercontent.com/yayxs/Pics/master/img/20200430172328.png)

正式因为如此，我们很难通过一个庞大而复杂的文件中读取分组，我们经常会来回的滚动，另一个缺点是，由于在组件中无法直观的拆分，因此逻辑重用变得十分的困难

## 初始vue3

```vue
<template>
  <button @click="increment">
    当前的状态是： {{ state.count }}, 当前的状态乘以2计算得{{ state.double }}
  </button>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
    });

    function increment() {
      state.count++;
    }

    return {
      state,
      increment,
    };
  },
};
</script>

```

通过一个简单的案例，可以得知一个新的`api`  是`setup()` , 包括状态也好，点击的事件函数也好都是书写在此函数内。这显得与`vue 2.x` 有点差异，之前的写法我们会把一些方法写在 `methods` 中，那么这样就会有一个问题，随着项目越来越大，组件变得越来越长，后期维护的时候，

- 方法和它依赖的数据状态对应不上，在编辑器里上下跳动的找关联

- 考虑一个场景：一个小模块（其中有数据和状态）比如说，显示一个数和它的2倍，就是我们上面的例子，这样我们可以把描述这一场景 的逻辑和数据直接提到公共的部分，**方便复用**



## typescript支持

`vue 3 ` 可以更好的支持`typescript` ,我们知道`ts` 有着较好的类型推断

那么当前有什么问题呢，

- 2.x 版本的vue 在设计师较少的考虑到了类型推断（使用flow）,并且在尝试与`ts` 配合使用时总是会有点问题
- vue 依赖`this` 上下文来访问 `属性` 也好，`方法` 也罢，可以说`this` 在vue中是十分有魔力的

## vue-class-component

当前很多开发者正在或即将使用`类组件` ，那么在`vue 3` 实现细节上仍然有很多的不确定性，这变成了一个较为危险的行为

目前的最新`api` 大多是使用普通的变量和函数，类型较为友好，使得开发者可以尽情的享受类型推断带来的快感

那么，这种`class-component` 的这种方式我们还可以继续使用吗，目前为止，仍然继续可以使用，但是不推荐

## 横向对比

当然了我们在对比的时候，不得不拿出，这两张图

![](https://user-images.githubusercontent.com/499550/62783026-810e6180-ba89-11e9-8774-e7771c8095d6.png)

让我们构建一个简单的组件，该组件允许用户按下按钮即可添加两个数字。首先，我们将快速回顾如何使用基于`options`的API来完成此操作。然后，我们将使用Composition API重建相同的组件，以说明差异。

### 使用Options API构建

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

使用基于Vue 2选项的API，我们在`data()`函数中返回了反应数据对象。然后，该`AddNumbers()`功能将在`methods`属性中注册。要从中访问变量`data()`，必须使用`this`。

现在，`this`它嵌套在方法内部，因此它应该引用方法的对象而不是整个实例，但不是。Vue正在这里进行幕后工作，以便为我们解决这个问题。通常，这非常简单直观，但是在更复杂的情况下，这种幕后处理可能会导致的意外行为`this`。

这也正是我们上文提到的关于`typescript` 的支持

### 使用Composition API构建

在使用`vue3 ` 之前，官方已经给我们准备好了[vue-cli-plugin-vue-next](https://github.com/vuejs/vue-cli-plugin-vue-next) , 熟悉vue 脚手架的人对于此并不陌生，我们可以通过

```
vue add vue-next
```

来在项目里使用`vue3`  ，这样能够很轻松的把vue 2.x 的项目转换为 vue 3项目

#### main.js

```js
import { createApp } from 'vue';
import App from './App.vue'

createApp(App).mount('#app')

```

我们可以看到在挂载的时候是不一样的， 这里的不一样大概指得是用法不一样，

**在之前的版本**

```js
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

```

## 核心API

`vue 2.x ` 我们都知道一些常用的`api` ，那么在最新版本的vue中（基本大的框架与语法已经成型）会多哪些新的api呢，

疑问：到底`vue3` 是不是多了新的`api` 呢

### ref 

```js
import {ref} from 'vue'
// ……
let num3 = ref(0);
let num4 = ref(0);
let sum1 = ref(0);
```

**所有内容现在都在`setup()`函数内。模板中需要使用的所有函数或属性都应加入，`setup()`因为这是将它们返回模板的方式。**

- 在内部`setup()`，我们使用的反应变量在顶部定义为独立变量，而不是`data()`函数中的返回对象。

还有一个函数，单独的挂出，并不是写在`methods`中，现在，我们可以轻松地在组件实例之间重用我们的功能，这将显着提高大型代码库的可读性。还请注意，`this`不再需要引用变量！

```js
  function addNumbersVue3() {
            sum1.value = parseInt(num3.value) + parseInt(num4.value);
        }
```

最后，我们将函数和属性返回到模板。

```js
 return {
            num3,
            num4,
            sum1,
            addNumbersVue3
        }
```

这里的一件事是`ref`在变量中使用`let num1 = ref(0)`。这就是我们使变量具有反应性的方式！有两个函数可用于处理状态和反应性：`ref`和`reactive`。

#### 特点

- `ref`如本示例中所示，采用一个值并返回一个反应性引用对象。该对象具有单个值：`.value`指向提供的值。
- `ref` 可以直接创建，就像我们上文提到的，也可以用来创建`computed()`



### computed

有时候我们需要依赖其他状态，在`vue` 中是通过计算属性来处理。我们起初的时候，是直接通过一个方法来计算两者之和，这是为了更好的来演示用。接下来我们使用`computed()`

```js
import { computed } from 'vue'
```

```js
let sum1 = computed(() => parseInt(num3.value) + parseInt(num4.value));
```

**这`sum1`是一个我们称为“ ref”的对象，因为它用作对其持有的内部值的反应性引用。**



### reactive 

> 反应性 反应状态 副作用 的意思

```js
import { reactive } from 'vue'

// reactive state
const state = reactive({
  count: 0
})
```

其中`state` 便是反应性对象，类似，

```js
data(){
    return {
        count:0
    }
}
```

### watchEffect

根据反应状态重新应用副作用



## 参考

- [https://auth0.com/blog/getting-started-with-vue-3-composition-api/](https://auth0.com/blog/getting-started-with-vue-3-composition-api/)





