<template>
  <div class="hello">
    <h3>
      {{ title }}

      <button @click="handllePrintProps">props</button>
    </h3>
  </div>
</template>

<script>
import { watch } from "vue";
export default {
  name: "HelloWorld",
  props: {
    title: String,
  },
  setup(props, context) {
    const handllePrintProps = () => {
      console.log(props.title);
    };
    watch(
      () => props.title,
      (newVal, oldVal) => {
        console.log(newVal);
        console.log(oldVal);
        context.emit("valChange");
      }
    );
    return {
      handllePrintProps,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px;
}
</style>
