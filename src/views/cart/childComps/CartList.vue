<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item, index) in cartList" :key="index" :item-info="item" @changeSelect="changeSelect"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll'
import CartListItem from './CartListItem'

export default {
  name: 'CartList',
  components: {
    Scroll,
    CartListItem
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  activated() {
    this.$refs.scroll.refresh()
  },
  methods: {
    changeSelect() {
      this.$emit("changeSelectToNew")
    }
  }
}
</script>

<style scoped>
  .cart-list {
    height: calc(100% - 44px - 49px - 50px)
  }
  .content {
    height: 100%;
    overflow: hidden;
  }
</style>
