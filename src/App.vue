<template>
  <div id="app">
    <!-- Profile, Detail -->
    <keep-alive exclude="Detail,Cart,Profile,HomeCategoryItem,recommendShow">
      <router-view></router-view>
    </keep-alive>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from './components/content/tabbar/TabBar'

export default {
  name: 'app',
  components: {
    TabBar
  }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
