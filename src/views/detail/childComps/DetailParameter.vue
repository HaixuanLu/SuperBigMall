<template>
  <div class="detail-parameter">
    <div class="detail-parameter-title">
      <span>...</span>
      <span class="detail-parameter-font">宝贝参数</span>
      <span>...</span>
    </div>
    <div v-for="(item, index) in deltailParameter" :key="index" class="detail-parameter-item">
      <div class="items">{{ item.split("-")[0]}}</div>
      <div class="items">{{ item.split("-")[1]}}</div>
      <div class="items">{{ item.split("-")[2]}}</div>
      <div class="items">{{ item.split("-")[3]}}</div>
      <div class="items">{{ item.split("-")[4]}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailParameter',
  props: {
    deltailParameter: {
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
.detail-parameter {
  font-size: 15px;
  border-bottom: 5px solid #f2f5f8;
}
.detail-parameter-title {
  padding: 5px 0 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.detail-parameter-title .detail-parameter-font {
  padding: 7px 10px
}
.detail-parameter-item {
  margin-bottom: 23px;
  display: flex;
}
.detail-parameter-item .items {
  text-align: center;
  flex: 1
}
</style>
