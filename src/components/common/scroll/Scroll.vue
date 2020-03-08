<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    // 创建BSscroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    // 监听滚动的位置，要设置probeType
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    })
    // 监听上拉加载功能，要设置pullUpLoad
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
      // 如果不设置this.scroll.finishPullUp()，那么只能加载一次
      this.scroll.finishPullUp()
    })
  },
  methods: {
    scrollTo(x, y, time=300) {
      this.scroll.scrollTo(x, y, time)
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>
<style scoped>
</style>
