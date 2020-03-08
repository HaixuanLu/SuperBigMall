<template>
  <div id="home-category-item">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <i class="iconfont icon-xiangzuojiantou"></i>
      </div>
    </nav-bar>
    <h2 style="padding: 10px">选项{{ itemTitle }}的列表页面</h2>
  </div>
</template>

<script>
import "@/assets/img/tabbar/iconfont.css"
import NavBar from '@/components/common/navbar/NavBar'
export default {
  name: 'HomeCategoryItem',
  components: {
    NavBar
  },
  data() {
    return {
      itemTitle: ''
    }
  },
  created() {
    this.itemTitle = this.$route.query.itemTitle
  },
  mounted() {

  },
  methods: {
    backClick() {
      // this.$router.go(-1)等同
      this.$router.back()
    }
  }
}
</script>
<style scoped>
  .back {
    text-align: center;
    font-size: 13px
  }
</style>
