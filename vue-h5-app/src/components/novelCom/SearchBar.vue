<template>
  <div class="wrapper">
    <van-search
      input-align="center"
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '请输入搜索内容',
    };
  },
  methods: {
    onSearch() {
      console.log('ss');
    },
  },
  components: {},
};
</script>

<style scoped lang="less"></style>
