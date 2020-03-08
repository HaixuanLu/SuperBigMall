import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import toast from '@/components/common/toast'

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.config.productionTip = false
// 安装toast插件
Vue.use(toast)
// 添加事件总线对象
Vue.prototype.$bus = new Vue()

// 解决移动端300ms延迟
FastClick.attach(document.body)

// 使用懒加载的插件
Vue.use(VueLazyLoad)
// 轮播图
Vue.use(VueAwesomeSwiper)
// Vant插件
Vue.use(Vant)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
