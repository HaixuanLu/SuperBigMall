<template>
  <div class="Setting">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <i class="iconfont icon-xiangzuojiantou"></i>
      </div>
      <div slot="center" class="title">设置</div>
    </nav-bar>
    <div class="item-2">
      <i class="icon iconfont icon-touxiang item-font"></i>
      <div class="item-info">
        <div class="item-name">{{ userNiName }}</div>
        <div class="item-name-small">
          <span class="title">用户名：</span>
          <span class="title">{{ userNiName }}</span>
        </div>
      </div>
    </div>
    <div class="item-3">
      <div class="item-3-left">我的收货地址</div>
      <i class="iconfont icon-ic_arrow_r"></i>
    </div>
    <div class="item-4" @click="Logout">退出登录</div>
  </div>
</template>

<script>
import "@/assets/img/tabbar/iconfont.css"
import NavBar from '@/components/common/navbar/NavBar'

import { checkLoout } from '@/network/user'
import Cookie from 'js-cookie'
export default {
  name: 'Setting',
  components: {
    NavBar
  },
  data() {
    return {
      userNiName: ''
    }
  },
  created() {
    this.userNiName = this.$route.query.userNiName
  },
  mounted() {
  },
  methods: {
    backClick() {
      this.$router.go(-1)
    },
    Logout() {
      checkLoout().then(res => {
        this.$router.push('/Login')
      }).catch(err => {
        this.$toast.show(err, 3000)
      })
    }
  }
}
</script>

<style scoped>
  .Setting {
    height: 100vh;
    background: rgba(102, 102, 102, .1)
  }
  .back {
    text-align: center;
    font-size: 13px
  }
  .item-2 {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 5px 10px;
    border-bottom: 1px solid rgba(204, 204, 204, .3)
  }
  .item-2 .item-font {
    font-size: 45px;
    color: var(--color-high-text)
  }
  .item-info {
    margin-left: 10px
  }
  .item-info .item-name {
    margin-bottom: 6px;
    font-size: 16px;
    font-weight: 600
  }
  .item-name-small {
    font-size: 12px
  }
  .item-3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 12px 10px;
    margin-bottom: 5px
  }
  .item-3 .item-3-left {
    font-size: 14px;
    font-weight: 600
  }
  .item-4 {
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    background: #fff;
    padding: 12px 10px
  }
</style>
