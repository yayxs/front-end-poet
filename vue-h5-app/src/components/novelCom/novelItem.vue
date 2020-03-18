<template>
  <div class="wrapper">
    <section class="wrapper_item">
      <!-- 左侧图片 -->
      <section class="item_left_pic">
        <van-image width="80" height="80" :src="leftImgPicUrl" lazy-load radius="20" />
      </section>
      <section class="item_right"></section>
      <!-- 中间内容 -->
      <section class="item_middle_con">
        <section class="name">
          <span>斗罗大陆</span>
          <van-tag type="primary">游戏</van-tag>
        </section>
        <!-- 评分 -->
        <section class="rate">
          <van-rate v-model="value" allow-half void-icon="star" void-color="#eee" size="15"/>
          <span >0.95GB</span>
        </section>
        <!-- 多少人安装 -->
        <section class="down_count">
          <span>
            13.3亿次安装
          </span>
        </section>
      </section>
      <!-- 右侧下载 -->
      <section class="item_right_download">
        <van-button type="info" size="small">下载</van-button>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 2.5,
      leftImgPicUrl: 'https://yayxs.github.io/head.jpg', // 后续替换真实接口地址
    };
  },
  components: {},
};
</script>

<style scoped lang="less">
.wrapper {
  .wrapper_item {
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    .item_left_pic {
      width: 25%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .item_middle_con {
      width: 50%;
      .name > span:first-child {
        font-size: 16px;
        font-weight: 600;
        margin-right: 5px;
      }
      .rate>span{
        font-size: 12px;
        color: #eee
      }
      .down_count{
        font-size: 15px;
        color: #eee
      }
    }
    .item_right_download {
      width: 25%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
}
</style>
