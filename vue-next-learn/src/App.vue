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
