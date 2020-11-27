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
      this.date = this.formatDate();
    },
    formatDate() {
      let date = new Date();
       const format = '{y}-{m}-{d} {h}:{i}:{s}'
      const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay(),
      };
      const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
        const value = formatObj[key];
        // Note: getDay() returns 0 on Sunday
        if (key === "a") {
          return ["日", "一", "二", "三", "四", "五", "六"][value];
        }
        return value.toString().padStart(2, "0");
      });
      return time_str;
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="scss" scoped></style>
