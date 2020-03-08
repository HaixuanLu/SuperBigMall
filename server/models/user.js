var mongoose = require('mongoose')
var userSchema = new mongoose.Schema({
    "userId": String,
    "userName": String,
    "userPwd": String,
    "userNiName": String,
    "score": Number,
    "level": String,
    // 下单后的列表
    "orderList": Array,
    "cartSelectAll": Boolean,
    // 购物车列表
    "cartList": [
        {
            "productId": String,
            "title": String,
            "price": String,
            "commentCount": Number,
            "image": String,
            "checked": Boolean,
            "saveToCart": Number
        }
    ],
    // 收藏夹
    "collectList": [
        {
            "productId": String,
            "title": String,
            "price": String,
            "commentCount": Number,
            "image": String,
            "checked": Boolean
        }
    ],
    // 关注店铺
    "focusStoreList": Array,
    // 购豆
    "buyBeans": Number,
    // 优惠券
    "couponsList": [
        {
            "couponsId": String,
            "image": String,
            "title": String,
            "timeLimit": String,
            "couponsMoney": Number,
            "couponsConditions": String,
        }
    ],
    // 地址列表
    "addressList": Array
})
// 第三个参数是数据库里面的集合名
module.exports = mongoose.model('User', userSchema, 'users');