<template>
  <div id="all-comment">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <i class="iconfont icon-xiangzuojiantou"></i>
      </div>
    </nav-bar>
    <h2 style="padding: 10px">全部评价列表页面</h2>
  </div>
</template>
<script>
import "@/assets/img/tabbar/iconfont.css"
import NavBar from '@/components/common/navbar/NavBar'
export default {
  name: 'AllComment',
  components: {
    NavBar
  },
  data() {
    return {
    }
  },
  created() {
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
