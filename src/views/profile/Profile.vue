<template>
  <div class="Profile">
    <div class="item-1">
      <i class="icon iconfont icon-liuyan item-font item-font-1"></i>
      <i class="icon iconfont icon-shezhi item-font" @click="setUpOperation"></i>
    </div>
    <div class="item-2">
      <i class="icon iconfont icon-touxiang item-font"></i>
      <div class="item-info">
        <div class="item-name">{{ userInfo.userNiName }}</div>
        <div class="item-label-all">
          <span class="item-label item-label-1">成长分值{{ userInfo.score }}分</span>
          <span class="item-label">{{ userInfo.level }}等级</span>
        </div>
      </div>
    </div>
    <div class="item-3">
      <div>
        <div class="item-3-number">{{ userInfo.collectListLength }}</div>
        <div class="item-3-tittle">收藏夹</div>
      </div>
      <div>
        <div class="item-3-number">{{ userInfo.focusStoreListLength }}</div>
        <div class="item-3-tittle">关注店铺</div>
      </div>
      <div>
        <div class="item-3-number">{{ userInfo.buyBeans }}</div>
        <div class="item-3-tittle">购豆</div>
      </div>
      <div>
        <div class="item-3-number">{{ userInfo.couponsListLength }}</div>
        <div class="item-3-tittle">优惠券</div>
      </div>
    </div>
    <div class="item-4-first">
      <div style="font-weight: 700"><span>我的订单</span></div>
      <div style="margin-top: -7px;">
        <span @click="viewAll">查看全部订单</span>
        <i class="icon iconfont icon-ic_arrow_r" style="margin-top: -5px"></i>
      </div>
    </div>
    <div class="item-4">
      <div>
        <div><i class="icon iconfont icon-daifukuan item-4-font"></i></div>
        <div class="item-4-title">待付款</div>
      </div>
      <div>
        <div><i class="icon iconfont icon-card_fill item-4-font"></i></div>
        <div class="item-4-title">待发货</div>
      </div>
      <div>
        <div><i class="icon iconfont icon-deliver_fill item-4-font"></i></div>
        <div class="item-4-title">待收货</div>
      </div>
      <div>
        <div><i class="icon iconfont icon-news_fill_light item-4-font"></i></div>
        <div class="item-4-title">评价</div>
      </div>
      <div>
        <div><i class="icon iconfont icon-sponsorfill item-4-font"></i></div>
        <div class="item-4-title">退款/售后</div>
      </div>
    </div>
    <div class="item-5">
      <span>...</span>
      <span class="item-5-font">除设置外，其余待开发</span>
      <span>...</span>
    </div>
  </div>
</template>

<script>
import "@/assets/img/tabbar/iconfont.css"
import { getUserInfo } from '@/network/user'
import Cookie from 'js-cookie'
export default {
  name: 'Profile',
  components: {
  },
  data() {
    return {
      userId: '',
      userInfo: {}
    }
  },
  created() {
    this.getInfo()
  },
  mounted() {
  },
  methods: {
    getInfo() {
      if (Cookie.get('userId')) {
        this.userId = Cookie.get('userId')
      }
      getUserInfo({ userId: this.userId }).then(res => {
        this.userInfo = res.result
      }).catch(err => {
        console.log(err)
      })
    },
    // 查看全部
    viewAll() {
      alert(1)
    },
    // 设置
    setUpOperation() {
      this.$router.push({path:'/Setting',query:{ userNiName: this.userInfo.userNiName }});
    }
  }
}
</script>

<style scoped>
  .Profile {
    height: 100vh;
    padding: 6px;
    background: rgba(102, 102, 102, .1)
  }
  .item-1 {
    text-align: right;
  }
  .item-1 .item-font {
    font-size: 20px;
  }
  .item-1 .item-font-1 {
    margin-right: 15px
  }
  .item-2 {
    display: flex;
    align-items: center
  }
  .item-2 .item-font {
    font-size: 40px;
    color: var(--color-high-text)
  }
  .item-info {
    margin-left: 10px
  }
  .item-info .item-name {
    font-size: 16px;
    font-weight: 600

  }
  .item-info .item-label-all {
    margin-top: 5px
  }
  .item-info .item-label {
    font-size: 5px;
    padding: 3px;
    /* border: 1px solid var(--color-high-text); */
    border-radius: 5px;
    background: #fff
  }
  .item-info .item-label-1 {
    margin-right: 8px
  }
  .item-3 {
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-size: 13px;
    padding-top: 13px;
    padding-bottom: 13px;
    /* margin-top: 10px; */
    /* border-bottom: 10px solid #fff; */
  }
  .item-3 .item-3-number {
    margin-bottom: 3px
  }
  .item-3 .item-3-tittle {
    font-size: 13px;
  }
  .item-4-first {
    font-size: 13px;
    background: #fff;
    padding: 8px 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(204, 204, 204, .3);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px
  }
  .item-4 {
    display: flex;
    justify-content: space-around;
    background: #fff;
    font-size: 13px;
    text-align: center;
    padding: 15px 0;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px
  }
  .item-4 .item-4-font {
    font-size: 25px;
    color: var(--color-high-text)
  }
  .item-4 .item-4-title {
    font-size: 13px;
    margin-top: 3px
  }
  .item-5 {
    padding: 5px 0 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-5 .item-5-font {
    padding: 7px 10px
  }
</style>
