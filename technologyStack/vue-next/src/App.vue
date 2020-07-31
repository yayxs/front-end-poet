<template>
  <section class="container">
    <section class="title">
      <hello-world :title="title"></hello-world>
    </section>
    <section class="main">
      <section class="options-api">
        <section>
          <h4>Options-based API</h4>
        </section>
        <section class="ipt">
          <p>counter</p>
          <form id="sum">
            <input type="text" class="form-control" v-model="vue2num1" />
            <input type="text" class="form-control" v-model="vue2num2" />
            <button @click="vue2Add" type="button" class="btn btn-light">
              加一起
            </button>
          </form>
          <p class="sum"><strong>Sum:</strong> {{ vue2sum }}</p>
        </section>
      </section>
      <section class="composition-api">
        <section>
          <h4>Vue 3 Composition API</h4>
        </section>
        <section class="ipt">
          <p>counter</p>
          <form id="sum">
            <input type="text" class="form-control" v-model="vue3num1" />
            <input type="text" class="form-control" v-model="vue3num2" />
            <button @click="vue3Add" type="button" class="btn">
              加一起
            </button>
          </form>
          <p class="sum"><strong>Sum:</strong> {{ total }}</p>
        </section>
      </section>
    </section>
  </section>
</template>
<script>
import { ref, computed, reactive,toRefs } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  components: { HelloWorld },
  setup() {
    let vue3num1 = ref(0);
    let vue3num2 = ref(0);
    let vue3sum = ref(0);

    const data = reactive({
      title: `Vue 2.x Options-based API vs Vue 3 Composition API`,
    });

    const vue3Add = () => {
      vue3sum.value = parseInt(vue3num1.value) + parseInt(vue3num2.value);
    };
    // 计算总和
    const total = computed({
      get: () => {
        return `总和是${vue3sum.value}`;
      },
    });
    return {
      vue3num1,
      vue3num2,
      vue3sum,
      vue3Add,
      ...toRefs(data),
      total,
    };
  },
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
};
</script>
<style lang="css">
.container {
  width: 100%;

  height: 100vh;
}
.title {
  width: 100%;
}
.title h3 {
  text-align: center;
}
.main {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
h3 {
  color: #67717e;
}
h4 {
  color: #90959b;
  text-align: center;
}
.options-api {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  height: 600px;
  background-color: pink;
}
.composition-api {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  width: 25%;
  background-color: skyblue;
}
.ipt {
  width: 60%;
  height: 500px;
  border: 1px solid black;
}
p {
  text-align: center;
  color: #fff;
  font-size: 35px;
}
#sum {
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-control {
  width: 60%;
  height: 30px;
  border-radius: 20px;
  margin: 30px 0;
}
.btn {
  width: 80px;
  height: 30px;
}
.sum {
  color: #fff;
  font-size: 20px;
}
</style>
