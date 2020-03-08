<template>
  <div style="display: flex">
    <van-sidebar v-model="activeKey" @change="onChange" >
      <van-sidebar-item v-for="(item, index) in titleArr" :key="index" :title="item" class="title" />
    </van-sidebar>
    <div style="padding: 10px 20px">{{ titleArr[activeKey] }}分类展示</div>
  </div>
</template>
<script>
import { Notify } from 'vant'

export default {
  name: 'Category',
  data() {
    return {
      titleArr: ["推荐", "流行", "新款", "精选", "男装", "女装", "内衣配饰", "情侣装", "亲子装", "套装", "团装", "国内品牌", "国外品牌", ""],
      activeKey: 0
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    onChange(index) {
    }
  }
}
</script>
<style scoped>
.wrapper {
  height: 150px;
  background: red;

  overflow: hidden;
}
.title {
  height: 50px;
  line-height: 2px;
  text-align: center
}
</style>
