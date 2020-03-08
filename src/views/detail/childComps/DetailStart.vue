<template>
  <div class="detail-start">
    <div class="detail-start-title">
      <div class="detail-start-title-left">
        <span class="item-1">宝贝评价</span>
        <span class="item-2">{{ commentCount }}</span>
        <span class="item-3">w+</span>
      </div>
      <div class="detail-start-title-right" @click="queryAllComment">
        <span class="item-1">查看全部</span>
        <i class="iconfont icon-ic_arrow_r item-2"></i>
      </div>
    </div>
    <div v-for="(item, index) in detailStart" :key="index" class="detail-start-detailComment">
      <div class="detail-start-detailComment-item">
        <div class="item-1">
          <i class="iconfont icon-touxiang item-1-1"></i>
        </div>
        <div class="item-2">
          <div class="item-2-1">卢***5</div>
          <div class="item-2-2">
            <div v-for="(itemStat, index) in item.detailStat" :key="index"><i class="iconfont icon-xingxing item-2-2-1"></i></div>
          </div>
        </div>
      </div>
      <div class="detailComment">{{ item.detailComment }}</div>
    </div>
  </div>
</template>
<script>
import "@/assets/img/tabbar/iconfont.css"
export default {
  name: 'DetailStart',
  props: {
    detailStart: {
      type: Array,
      default() {
        return []
      }
    },
    commentCount: {
      type: Number,
      default: 0
    }
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
    queryAllComment() {
      this.$router.push("/allComment")
    }
  }
}
</script>
<style scoped>
  .detail-start {
    margin-top: 15px;
    border-bottom: 5px solid #f2f5f8;
  }
  .detail-start .detail-start-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px
  }
  .detail-start-title-left {
    margin-left: 8px
  }
  .detail-start-title-left .item-1 {
    border-left: 5px solid var(--color-tint);
    padding-left: 8px
  }
  .detail-start-title-left .item-2 {
    padding-left: 8px;
    font-size: 13px;
  }
  .detail-start-title-left .item-3 {
    font-size: 13px;
    padding-left: 2px
  }
  .detail-start-title-right {
    display: flex;
    align-items: center;
    padding-right: 10px;
    font-size: 13px;
    color: var(--color-high-text)
  }
  .detail-start-title-right .item-1 {
    padding-right: 3px
  }
  .detail-start-detailComment {
    padding: 0 0 25px 8px
  }
  .detail-start-detailComment-item {
    display: flex;
    padding-bottom: 6px
  }
 .detail-start-detailComment-item .item-1-1 {
    font-size: 23px;
    color: var(--color-high-text)
  }
  .detail-start-detailComment-item .item-2 {
    font-size: 12px;
    padding-left: 6px
  }
  .detail-start-detailComment-item .item-2-2 {
    display: flex
  }
  .detail-start-detailComment-item .item-2-2-1 {
    font-size: 12px;
    color: var(--color-high-text)
  }
  .detail-start-detailComment .detailComment {
    font-size: 15px
  }
</style>
