<template>
  <div class="bottom-bar">
    <div class="bar-item bar-item-1" @click="leftItemClick">
      <div>
        <div><i class="icon iconfont icon-dianpu"></i></div>
        <div class="text">店铺</div>
      </div>
      <div>
        <div><i class="icon iconfont icon-customer"></i></div>
        <div class="text">客服</div>
      </div>
      <div>
        <div><i class="icon iconfont icon-shoucang"></i><br></div>
        <div class="text">收藏</div>
      </div>
    </div>
    <div class="bar-item-2 bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy" @click="buy">立即购买</div>
    </div>
  </div>
</template>
<script>
import "@/assets/img/tabbar/iconfont.css"
export default {
  name: 'DetailBottomBar',
  data() {
    return {
    }
  },
  methods: {
    addToCart() {
      this.$emit('addCart')
    },
    leftItemClick() {
      this.$toast.show('暂待开发', 2000)
    },
    buy() {
      this.$toast.show('暂待开发', 2000)
    }
  }
}
</script>
<style scoped>
  .bottom-bar {
    height: 49px;
    background: #fff;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
    
    z-index: 19;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    text-align: center;
  }
  .bar-item-1 {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around
  }
  .bar-item-1 .icon {
    font-size: 20px
  }
  .bar-item-1 .text {
    font-size: 5px
  }
  .bar-item-2 {
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 12.5px;
    color: #ffffff
  }
  .bar-right .cart {
    background:rgb(253, 28, 0);
    color: rgb(255, 254, 253);
    padding: 10px 25px;
    border-radius: 20px
  }
  .bar-right .buy {
    background: rgb(255, 168, 0);
    padding: 10px 25px;
    border-radius: 20px
  }
</style>
