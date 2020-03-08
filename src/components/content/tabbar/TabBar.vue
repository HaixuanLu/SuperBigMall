<template>
  <div id="TabBar">
    <div id="tab-bar">
      <div class="tab-bar-item">
        <router-link to="/home">
          <i class="iconfont icon-shouye"></i>
          <div>首页</div>
        </router-link>
      </div>
      <div class="tab-bar-item">
        <router-link to="/category">
          <i class="iconfont icon-erweima"></i>
          <div>分类</div>
        </router-link>
      </div>
      <div class="tab-bar-item">
        <router-link to="/cart">
          <i class="iconfont icon-gouwuche"></i>
          <div>购物车</div>
        </router-link>
      </div>
      <div class="tab-bar-item">
        <router-link to="/profile">
          <i class="iconfont icon-wodejuhuasuan"></i>
          <div>我的</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import "../../../assets/img/tabbar/iconfont.css"
export default {
  name: 'TabBar',
  components: {
  }
}
</script>

<style>
  #tab-bar {
    display: flex;
    background: #f6f6f6;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -1px 1px rgba(100, 100, 100, .1)
  }
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 44px;
    margin-top: 5px
  }
  .tab-bar-item .iconfont {
    font-size: 23px;
  }
  .tab-bar-item div {
    font-size: 12px
  }
</style>
