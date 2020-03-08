<template>
  <div class="bottom-bar">
    <div class="bottom-bar-flex">
      <div class="bottom-bar-info">
        <!-- 全选 -->
        <i v-if="cartSelectAll" class="iconfont icon-2weixuanzhong" style="color: var(--color-high-text)" @click="checkClick"></i>
        <!-- 不全选 -->
        <i v-else class="iconfont icon-weixuanzhong" @click="checkClick"></i>
        <span class="selectAll">全选</span>
        <span class="totalPrice">合计<span style="font-weight: 700">:￥{{ counterMoney }}</span></span>
      </div>
      <div class="bottom-bar-goToCount" @click="goToCount">去计算({{ counter }})</div>
    </div>
  </div>
</template>

<script>
import "@/assets/img/tabbar/iconfont.css"

import { changeSelectAll } from '@/network/user'

export default {
  name: 'CartBottomBar',
  props: {
    cartSelectAll: {
      type: Boolean,
      default: false
    },
    counter: {
      type: Number,
      default: 0
    },
    counterMoney: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
    // 全选按钮状态的改变
    checkClick() {
      changeSelectAll({ cartSelectAll: !this.cartSelectAll}).then(res => {
        this.$emit("changeSelectAll")
      }).catch(err => {
        this.$toast.show(err, 3000)
      })
    },
    goToCount() {
      this.$toast.show('暂待开发', 3000)
    }
  }
}
</script>

<style scoped>
 .bottom-bar {
   height: 40px;
   /* background: #eee; */
   background: #fff;
   box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
   position: relative;
   line-height: 30px;
   margin-top: 15px
 }
 .bottom-bar-flex {
   display: flex;
   justify-content: space-between;
   padding: 0 15px 0 5px
 }
 .bottom-bar-info .selectAll {
   font-size: 15px;
   padding-left: 8px
 }
 .bottom-bar-info .totalPrice{
   font-size: 15px;
   padding-left: 8px
 }
 .bottom-bar-goToCount {
   font-size: 15px;
   background: var(--color-high-text);
   font-size: 14px;
   color: #fff;
   padding: 0 15px;
   border-radius: 30px
 }
</style>
