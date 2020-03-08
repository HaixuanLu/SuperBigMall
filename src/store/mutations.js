export default {
    // mutations唯一的目的就是修改state中的状态
    addCounter(state, payload) {
      payload.count++
    },
    addToCart(state, payload) {
      // 加到购物车时默认设置一个选中与否的状态
      payload.checked = false
      state.cartList.push(payload)
    }
}