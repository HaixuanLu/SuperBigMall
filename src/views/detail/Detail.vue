<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav" />
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <swiper :options="swiperOption" ref="swiper">
        <!-- slides -->
        <swiper-slide v-for="(slide, index) in topImages" :key="index">
          <img class="banners-img" :src="slide" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
      <detail-base-info :goods="goods" />
      <detail-parameter :deltailParameter="goods.deltailParameter" ref="params" />
      <detail-start :detailStart="goods.detailStart" :commentCount="goods.commentCount" ref="comment" />
      <recommend :recommend="goods.recommend" ref="recommend"/>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"/>
  </div>
</template>
<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailParameter from './childComps/DetailParameter'
import DetailStart from './childComps/DetailStart'
import recommend from './childComps/recommend'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from '@/components/common/scroll/Scroll'


import { getDetail } from '@/network/detail'
import { addCart } from '@/network/user'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailBaseInfo,
    DetailParameter,
    DetailStart,
    recommend,
    Scroll,
    DetailBottomBar
  },
  data() {
    return {
      productId: null,
      swiperOption: {
        autoplay: true,
        // delay: 2000
        pagination: {
          el: '.swiper-pagination'
        }
      },
      topImages: [],
      goods: {},
      shop: {},
      // 设置商品、参数、评论、推荐距离顶部的值
      // themeTopYs: [0, 390, 535, 1090]
      themeTopYs: [],
      currentIndex: 0
    }
  },
  created() {
    this.productId = this.$route.params.productId
    this.getData()
  },
  mounted() {

  },
  methods: {
    getData() {
      getDetail(this.productId).then(res => {
        // console.log(res.result.itemInfo.topImages)
        // 获取顶部的图片轮播数据
        // this.topImages = res.result.detail[0].detailBanner
        // 获取商品信息
        this.goods = res.result.detail[0]
        // const data = res.result
        // this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        // // 创建店铺信息的对象
        // this.shop = new Shop(data.shopInfo)

        // 要想真实获取各部分的offsetTop值，那么需要各组件获取数据后渲染后才可以确保，在采用数据后面采用this.$nextTick再对offsetTop进行赋值，但此时只是Dom渲染完成，图片不一定加载完成，获取的offsetTop不一定是正确的
        // this.$refs.params.$el 获取refs为params的根组件
        this.$nextTick(() => {
          this.themeTopYs = []
          this.themeTopYs.push(0);
          this.themeTopYs.push(this.$refs.params.$el.offsetTop - this.$refs.swiper.$el.offsetTop)
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop - this.$refs.swiper.$el.offsetTop)
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - this.$refs.swiper.$el.offsetTop)
        })
      })
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100)
    },
    // 通过滚动记录位置改变顶部导航栏显示颜色
    contentScroll(position) {
      const positionY = -position.y
      let length = this.themeTopYs.length
      for (let i = 0; i < length; i++) {
        if (this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i === length - 1 && positionY >= this.themeTopYs[i]))) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
    },
    addToCart() {
      const Goodsobj = {}
      Goodsobj.checked = this.goods.checked
      Goodsobj.commentCount = this.goods.commentCount
      Goodsobj.image = this.goods.image
      Goodsobj.price = this.goods.price
      Goodsobj.productId = this.goods.productId
      Goodsobj.title = this.goods.title
      Goodsobj.saveToCart = this.goods.saveToCart
      addCart({ Goodsobj }).then(res => {
        if (res) {
          this.$toast.show('加入购物车成功', 3000)
        } {
          this.$toast.show('请先登录', 3000)
        }
      }).catch(err => {
        this.$toast.show('加入购物车失败', 3000)
      })
    // // 1.获取购物车需要展示的信息
    //   const product = {}
    //   product.image = this.topImages[0]
    //   product.title = this.goods.title
    //   product.desc = this.goods.desc
    //   product.price = this.goods.realPrice
    //   product.iid = this.productId
    // // 2.将商品添加到购物车里
    //   // this.$store.commit('addCart', product)
    //   this.$store.dispatch('addCart', product).then(() => {
    //     this.$toast.show('加入购物车成功', 2000)
    //   })
    }
  }
}
</script>
<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    /* 不加这个背景颜色的话那么还会看到 */
    background: #fff;
    height: 100vh
  }
  .content {
    height: calc(100% - 44px - 49px);
  }
  .detail-nav {
    position: relative;
    z-index: 9;
    background: #fff;
  }
  #detail .banners-img {
    /* width: 100%;
    height: 300px; */
    /* max-width: 100%; */
    width: 100%;
    height: 300px;
  }
</style>
