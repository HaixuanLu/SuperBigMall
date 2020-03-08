<template>
  <div class="goods-item" @click="itemClick">
    <!-- <img :src="goodsItem.show.img" alt="" @load="imageLoad"> -->
    <img v-lazy="goodsItem.image" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">￥{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.commentCount }}w+条评价</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('itemImageLoad')
    },
    itemClick() {
      if (this.$route.path === '/home') {
        this.$router.push('/detail/' + this.goodsItem.productId)
      } else {
        this.$router.push('/recommendShow/' + this.goodsItem.productId)
      }
    }
  }
}
</script>

<style scoped>
.goods-item {
  width: 48%;
  padding-bottom: 40px;
  position: relative;
}
.goods-item img {
  width: 100%;
  border-radius: 5px
}
.goods-info {
  font-size: 12.5px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px
}
.goods-info .collect {
  /* position: relative; */
}
</style>
