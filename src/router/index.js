import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import('../views/login/Login')
const Setting = () => import('../views/profile/components/Setting')
const Home = () => import('../views/home/Home')
const HomeCategoryItem = () => import('../views/home/homeCategoryItem/HomeCategoryItem')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')
const recommendShow = () => import('../views/detail/prepare/recommendShow')
const allComment = () => import('../views/detail/prepare/allComment')
// 1.安装插件
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// 2.创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/Setting',
    component: Setting
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/HomeCategoryItem',
    component: HomeCategoryItem
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:productId',
    component: Detail
  },
  {
    path: '/recommendShow/:productId',
    component: recommendShow
  },
  {
    path: '/allComment',
    component: allComment
  }
]
const router = new VueRouter({
  // 设置路由高亮
  linkActiveClass: "active",
  routes
  // history模式
  // mode: 'history'
})
// 3.导出router
export default router