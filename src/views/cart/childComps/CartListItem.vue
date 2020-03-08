<template>
   <!-- 购物车子项 -->
  <div id="shop-item">
    <div class="item-selector">
      <CheckButton :is-checked="itemInfo.checked" @click.native="checkClick" />
    </div>
    <div class="item-img" @click="queryDetail(itemInfo.productId)">
      <img :src="itemInfo.image" alt="">
    </div>
    <div class="item-info" @click="queryDetail(itemInfo.productId)">
      <div class="item-title">{{ itemInfo.title }}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{ itemInfo.price }}</div>
        <div class="item-count right">x{{ itemInfo.saveToCart }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton'

import { changeSelect } from '@/network/user'

export default {
  name: 'CartListItem',
  components: {
    CheckButton
  },
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    checkClick() {
      changeSelect({ checked: !this.itemInfo.checked, productId: this.itemInfo.productId }).then(res => {
        this.$emit("changeSelect")
      }).catch(err => {
        this.$toast.show(err, 3000)
      })
    },
    queryDetail(productId) {
      this.$router.push('/detail/' + productId)
    }
  }
}
</script>
<style scoped>
  #shop-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
  }
  .item-selector {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-img {
    padding: 5px
  }
  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px
  }
  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }
  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px
  }
  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
  .info-bottom .item-price {
    color: var(--color-high-text)
  }
</style>
