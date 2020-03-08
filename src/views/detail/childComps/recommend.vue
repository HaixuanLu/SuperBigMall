<template>
  <div class="recommend">
    <div class="recommend-title">
      <span>...</span>
      <span class="recommend-title-font">推荐</span>
      <span>...</span>
    </div>
    <goods-list :goods="recommend" />
  </div>
</template>
<script>
import GoodsList from '@/components/content/goods/GoodsList'
export default {
  name: 'recommend',
  components: {
    GoodsList
  },
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>
<style scoped>
  .recommend-title {
    padding: 5px 0 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .recommend-title .recommend-title-font {
    padding: 7px 10px
  }
</style>
