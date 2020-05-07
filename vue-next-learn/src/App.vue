<template>
  <section class="container">
    <section class="title">
      <h3>Vue 2.x Options-based API vs Vue 3 Composition API</h3>
    </section>
    <section class="main">
      <section class="options-api">
        <section>
          <h4>Options-based API</h4>
        </section>
        <section class="ipt">
          <p>counter</p>
          <form id="sum">
            <input type="text" class="form-control" v-model="num1" />
            <input type="text" class="form-control" v-model="num2" />
            <button @click="addNumbers" type="button" class="btn btn-light">
              加一起
            </button>
          </form>
          <p class="sum"><strong>Sum:</strong> {{ sum }}</p>
        </section>
      </section>
      <section class="composition-api">
        <section>
          <h4>Vue 3 Composition API</h4>
        </section>
        <section class="ipt">
          <p>counter</p>
          <form id="sum">
            <input type="text" class="form-control" v-model="num3" />
            <input type="text" class="form-control" v-model="num4" />
            <button @click="addNumbersVue3" type="button" class="btn">
              加一起
            </button>
          </form>
          <p class="sum"><strong>Sum:</strong> {{ sum1 }}</p>
        </section>
      </section>
    </section>
  </section>
</template>
<script>
import {ref} from 'vue'
export default {
   setup() {
        let num3 = ref(0);
        let num4 = ref(0);
        let sum1 = ref(0);
        function addNumbersVue3() {
            sum1.value = parseInt(num3.value) + parseInt(num4.value);
        }
        return {
            num3,
            num4,
            sum1,
            addNumbersVue3
        }
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
