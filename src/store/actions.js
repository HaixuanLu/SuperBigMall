export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = null
      for (let item of context.state.cartList) {
        if (item.iid === payload.iid) {
          oldProduct = item;
        }
      }
      if (oldProduct) {
        context.commit('addCounter', oldProduct)
      } else {
        payload.count = 1
        context.commit('addToCart', payload)
      }
      resolve('')
    })
  }
}