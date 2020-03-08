var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

// 连接MongoDB数据库(SuperBigMall)47.112.218.210
mongoose.connect('mongodb://127.0.0.1:27017/SuperBigMall');
mongoose.connection.on("connected", function () {
    console.log('MongoDB connected success')
})
mongoose.connection.on("error", function () {
    console.log('MongoDB connected fail')
})
mongoose.connection.on("disconnected", function () {
    console.log('MongoDB connected disconnected')
})
router.get("/homeGoods", function(req, res, next) {
    let type = req.param("type")
    let page = req.param("page")
    const item = (page - 1)*8
    const pageNum = (page - 1)*8 + 8
    Goods.find({}, function (err, doc) {
        if(err) {
            res.json({
                status: '1',
                msg: err.message
            })
        } else {
            let returnList = []
            let docItem = doc[0]
            // returnList.push(doc[0].new[20])
            for (i = item; i < pageNum; i++) {
                returnList.push(docItem[type][i])
            }
            res.json({
                status: '0',
                msg: '',
                result: {
                    count: doc.length,
                    homeBanner: doc[0].homeBanner,
                    list: returnList,

                }
            })
        }
    })
})
router.get("/goodsDetail", function(req, res, next) {
    let productId = req.param("productId")
    let detail = []
    Goods.find({}, function (err, doc) {
        if(err) {
            res.json({
                status: '1',
                msg: err.message
            })
        } else {
            let docArray = doc[0].pop 
            for (let i = 0; i < docArray.length; i++) {
              if (docArray[i].productId === productId) {
                detail.push(docArray[i])
              }
            }
            res.json({
                status: '0',
                msg: '',
                result: {
                    count: doc.length,
                    detail: detail,
                }
            })
        }
    })
})
module.exports = router