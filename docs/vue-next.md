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

## 核心API

`vue 2.x ` 我们都知道一些常用的`api` ，那么在最新版本的vue中（基本大的框架与语法已经成型）会多哪些新的api呢，

疑问：到底`vue3` 是不是多了新的`api` 呢

### reactive 

> 反应性 反应状态 副作用 的意思

