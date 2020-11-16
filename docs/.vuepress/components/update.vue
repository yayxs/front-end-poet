<template>
  <div>{{ date }}</div>
</template>

<script>
export default {
  name: "Update",
  data() {
    return {
      date: "",
    };
  },
  methods: {
    init() {
      let d = new Date();
      this.date = d;
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="scss" scoped></style>
