import { request } from "./request"

// 获取登录信息
export function getUserInfo(params) {
  return request({
    url: '/users/login',
    params
  })
}
// 登录验证
export function checkLogin(data) {
  return request({
    url: '/users/checkLogin',
    method: 'post',
    data
  })
}
// 退出登录
export function checkLoout() {
  return request({
    url: '/users/checkLoout',
    method: 'get'
  })
}
// 添加到购物车
export function addCart(data) {
  return request({
    url: '/users/addCart',
    method: 'post',
    data
  })
}
// 获取购物车列表
export function getCartInfo() {
  return request({
    url: '/users/getCartInfo',
    method: 'get'
  })
}
// 改变购物车单项选中与否
export function changeSelect(params) {
  return request({
    url: '/users/changeSelect',
    method: 'get',
    params
  })
}
// 改变购物车全选与否
export function changeSelectAll(params) {
  return request({
    url: '/users/changeSelectAll',
    method: 'get',
    params
  })
}