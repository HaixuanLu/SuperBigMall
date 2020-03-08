import axios from 'axios'
import router from '@/router'
import Cookie from 'js-cookie'
export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 8000
  })
  // 请求拦截
  instance.interceptors.request.use(config => {
    if ((config.url === '/users/login' || config.url === '/users/getCartInfo')  && !Cookie.get('userId')) {
      router.push('/Login')
    } else {
      return config
    }
  }, err => {
    console.log(err)
  })
  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  // 发送真正的网络请求
  return instance(config)
}
