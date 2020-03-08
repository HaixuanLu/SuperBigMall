import { request } from "./request"


export function getHomeGoods(type, page) {
  return request({
    url: '/goods/homeGoods',
    params: {
      type,
      page
    }
  })
}