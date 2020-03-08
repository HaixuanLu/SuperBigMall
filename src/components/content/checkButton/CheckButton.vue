<template>
  <div class="check-button">
    <i v-if="isChecked" class="iconfont icon-2weixuanzhong" style="color: var(--color-high-text)"></i>
    <i v-else class="iconfont icon-weixuanzhong"></i>
  </div>
</template>

<script>
import "@/assets/img/tabbar/iconfont.css"
export default {
  name: 'CheckButton',
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
