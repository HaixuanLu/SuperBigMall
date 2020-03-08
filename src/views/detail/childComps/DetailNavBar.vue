<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <i class="iconfont icon-xiangzuojiantou"></i>
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles" :key="item" :class="{active: index === currentIndex}" @click="titleClick(index)">
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import "@/assets/img/tabbar/iconfont.css"
import NavBar from '@/components/common/navbar/NavBar'
export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick', index)
    },
    backClick() {
      // this.$router.go(-1)
      this.$router.back()
    }
  }
}
</script>
<style scoped>
  .title {
    display: flex;
    font-size: 13px
  }
  .title div {
    flex: 1
  }
  .active {
    color: var(--color-high-text)
  }
  .back {
    text-align: center;
    font-size: 13px
  }
</style>
