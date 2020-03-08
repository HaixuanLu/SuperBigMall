<template>
  <div class="base-info">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(slide, index) in goods.detailBanner" :key="index">
        <img class="banners-img" :src="slide" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <div class="info-price">
      <span class="n-price">￥{{ goods.price }}</span>
    </div>
    <div class="info-title">{{ goods.title }}</div>
  </div>
</template>
<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {
        }
      }
    }
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>
<style scoped>
  .base-info {
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-title {
    color: #222;
    padding: 10px 0 20px 0;
  }
  .info-price {
    margin-top: 10px
  }
  .info-price .n-price {
    font-size: 24px;
    color: var(--color-high-text)
  }
  .info-price .o-price {
    font-size: 13px;
    margin-left: 5px;
    text-align: line-through
  }
  .info-price .discount {
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;
    /* 让元素上浮一些；使用相对定位即可 */
    position: relative;
    top: -8px
  }
  .info-other {
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    justify-content: space-between;
  }
  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 30px
  }
  .info-service-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px
  }
  .info-service-item span {
    font-size: 13px;
    color: #333;
  }
  .base-info .banners-img {
    width: 100%;
    height: 300px;
  }
</style>
