var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var productSchema = new Schema({
    "pop": [
        {
            "productId": { type: String},
            "title": String,
            "price": String,
            "commentCount": Number,
            "image": String,
            "checked": String,
            "detailBanner": Array,
            "deltailParameter": Array,
            "detailStart": Array,
            "recommend": Array
        }
    ],
    "new": [
        {
            "productId": { type: String},
            "title": String,
            "price": String,
            "commentCount": Number,
            "image": String,
            "checked": String,
            "detailBanner": Array,
            "deltailParameter": Array,
            "detailStart": Array,
            "recommend": Array   
        }
    ],
    "sell": [
        {
            "productId": { type: String},
            "title": String,
            "price": String,
            "commentCount": Number,
            "image": String,
            "checked": String,
            "detailBanner": Array,
            "deltailParameter": Array,
            "detailStart": Array,
            "recommend": Array   
        }
    ],
    "homeBanner": Array
})
// 第三个参数是数据库里面的集合名
module.exports = mongoose.model('Good', productSchema, 'goods');