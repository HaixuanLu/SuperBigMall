<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore" @scroll="contentScroll">
      <!-- 轮播图组件(vue-awesome-swiper) -->
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(slide, index) in banners" :key="index">
          <img class="banners-img" :src="slide" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
      <category-itme />
      <tab-control class="tab-control" :title="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl"/>
      <goods-list :goods="goods[currentType].list" />
    </scroll>
    <!-- 使用的组件监听事件必须加上click.native -->
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>
<script>
import CategoryItme from './childComponents/CategoryItme'

import NavBar from '@/components/common/navbar/NavBar'
import Scroll from '@/components/common/scroll/Scroll'
import TabControl from '@/components/content/tabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'
import BackTop from '@/components/content/backTop/BackTop'

import Cookie from 'js-cookie'

import { getHomeGoods } from '@/network/home'

import { debounce } from '@/common/utils'

export default {
  name: 'Home',
  components: {
    CategoryItme,
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      currentType: 'pop',
      isShowBackTop: false,
      // 吸顶距离
      tabOffsetTop: 0,
      // 保存组件离开时状态
      saveY: 0
    }
  },
  // 进入home组件，读取scroll滚动位置
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    // 执行一下刷新
    this.$refs.scroll.refresh()
  },
  // 离开home组件，记录scroll滚动位置
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y
    // 离开home组件，取消事件监听
  },
  created() {
    // 请求商品选择类型的数据
    // Cookie.set('userId', '123456')
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    // 监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    this.$bus.$on('itemImageLoad', () => {
      refresh()
    })
  },
  beforeDestroy() {
    this.$bus.$off()
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 1000)
    },
    // 判断滚动回到顶部图标是否显示
    contentScroll(position) {
      this.isShowBackTop = (-position.y) > 1000 ? true : false
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    getHomeGoods(type) {
      // 这里之所以这样设置page，是因为到如果往上拉的时候就继续进行相应的请求，
      // 对应的type类型的请求数据的页面就加1
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // 将获取到的数据不要直接赋值给对应的数组，因为后面往上拉请求的数据
        // 不应该是替换而是在原来的数组数值的基础上继续添加
        this.goods[type].list.push(...res.result.list)
        this.goods[type].page += 1
        this.banners = res.result.homeBanner
      })
    }
  }
}
</script>
<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9
  }
  /* scroll样式 */
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  #home .banners-img {
    max-width: 100%;
    width: 100%;
    height: 300px;
  }
</style>
