<template>
  <div class="back-top">
    <i class="iconfont icon-shangfan"></i>
  </div>
</template>

<script>
import "../../../assets/img/tabbar/iconfont.css"
export default {
  name: 'BackTop',
}
</script>

<style scoped>
  .back-top {
    /* 设置fixed布局并且通过设置把元素设置到滚动视图的右下角 */
    position: fixed;
    right: 10px;
    bottom: 53px;

    background: white;
    width: 23px;
    height: 23px;
    text-align: center;
    line-height: 23px;
    border-radius: 50%
  }
</style>
