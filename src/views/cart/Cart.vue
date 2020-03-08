<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartlist.length }})</div>
    </nav-bar>
    <!-- 商品展示列表 -->
    <cart-list :cart-list="cartlist" @changeSelectToNew="changeSelectToNew" />
    <!-- 底部汇总 -->
    <cart-bottom-bar :cartSelectAll="cartSelectAll" :counter="counter" :counterMoney="counterMoney" @changeSelectAll="changeSelectAll" />
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

import { getCartInfo } from '@/network/user'


import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  data() {
    return {
      cartlist: [],
      cartSelectAll: false,
      counter: 0,
      counterMoney: 0
    }
  },
  computed: {
    ...mapGetters(['cartLength'])
  },
  created() {
    this.getCartInfo()
  },
  mounted() {
  },
  methods: {
    getCartInfo() {
      getCartInfo().then(res => {
        this.cartlist = res.cartlist
        this.cartSelectAll = res.cartSelectAll
        const cartlistItemSelect = res.cartlist.filter(item => {
          return item.checked
        })
        let counter = 0
        let counterMoney = 0
        cartlistItemSelect.forEach(item => {
          counter += item.saveToCart
          counterMoney = counterMoney + Number(item.price) * item.saveToCart
        })
        this.counter = counter
        this.counterMoney = counterMoney
      }).catch(err => {
        console.log(err)
      })
    },
    changeSelectToNew() {
      this.getCartInfo()
    },
    changeSelectAll() {
      this.getCartInfo()
    }
  }

}
</script>

<style scoped>
  .cart {
    height: 100vh
  }
  .nav-bar {
    background: var(--color-tint);
    color: #fff
  }
</style>
