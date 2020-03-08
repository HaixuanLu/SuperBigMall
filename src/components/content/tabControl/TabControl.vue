<template>
  <div class="tab-control">
    <div v-for="(item, index) in title" :key="index" class="tab-control-item" :class="{active: index === currrentIndex }" @click="itemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabControl',
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currrentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currrentIndex = index
      this.$emit("tabClick", index)
    }
  }
}
</script>
<style scoped>
.tab-control {
  display: flex;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background: #fff;
}
.tab-control-item {
  flex:1;
  text-align: center
}
.tab-control-item span {
  padding: 5px
}
/* 点击激活的样式 */
.active {
  color: var(--color-high-text)
}
.active span {
  border-bottom: 3px solid var(--color-tint)
}
</style>
