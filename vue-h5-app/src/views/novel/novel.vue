<template>
  <div class="wrapper">
      <!-- 搜索框 -->
    <search-bar />
    <novel-item />
  </div>
</template>

<script>
// 引入头部搜索
import searchBar from '@/components/novelCom/SearchBar.vue';
// 引入每一item
import novelItem from '@/components/novelCom/novelItem.vue';

export default {
  data() {
    return {};
  },
  components: {
    searchBar,
    novelItem,
  },
};
</script>

<style scoped lang="less">
  .test{
    font-size: 15px
  }
  .box{
    width: 200px;
    height:100px;
    font-size: 16px;

  }
</style>
