var express = require('express');
var router = express.Router();

var User = require('./../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 登录(获取信息)
router.get('/login', function(req, res, next) {
  var param = {
    userId: req.param('userId'),
  }
  User.findOne(param, function(err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message
      });
    } else {
      if (doc) {
        res.json({
          status: "0",
          msg: '',
          result: {
            userNiName:doc.userNiName,
            score: doc.score,
            level: doc.level,
            buyBeans: doc.buyBeans,
            couponsListLength: doc.couponsList.length,
            collectListLength: doc.collectList.length,
            focusStoreListLength: doc.focusStoreList.length,
          },
        })
      }
    }
  })
});

// 登录(检查)
router.post('/checkLogin', function(req, res, next) {
  var param = {
    userName: req.body.userName,
    userPwd: req.body.userPwd
  }
  User.findOne(param, function(err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: '账号或密码错误',
        result: '账号或密码错误'
      });
    } else {
      if (doc) {
        // 设置cookic.存放在/路径，设置一小时
        res.cookie("userId", doc.userId, {
          path: '/',
          maxAge: 1000*60*60
        });
        res.cookie("userName", doc.userName, {
          path: '/',
          maxAge: 1000*60*60
        });
        res.json({
          status: "0",
          msg: '',
          result: {
            userName:doc.userName
          }
        })
      }
    }
  })
});
// 退出登录
router.get('/checkLoout', function(req, res, next) {
  res.cookie("userId", "", {
    path: "/",
    // maxAge设置为0或者-1让它失效
    maxAge: -1
  });
  res.cookie("userName", "", {
    path: "/",
    // maxAge设置为0或者-1让它失效
    maxAge: -1
  });
  res.json({
    status: "0",
    msg: "",
    result: ""
  })
});
// 加入购物车
router.post('/addCart', function(req, res, next) {
  var userId = req.cookies.userId;
  var Goodsobj = req.body.Goodsobj
  User.findOne({ userId: userId }, function(err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message
      });
    } else {
      if (doc) {
        let isHave = false
        let isHaveProductId = ''
        doc.cartList.forEach(item => {
          if (item.productId === Goodsobj.productId) {
            isHave = true
          }
        })
        if (isHave) {
          doc.cartList.forEach(item => {
            if (item.productId === Goodsobj.productId) {
              item.saveToCart += 1
              doc.save(function(err2, doc2) {
                if (err2) {
                  res.json({
                    status: "1",
                    msg: err2.message
                  })
                } else {
                  res.json({
                    status: "0",
                    msg: '',
                    result: '再次添加成功'
                  })
                }
              })
            }
          })
        } else {
          doc.cartList.push(Goodsobj)
          doc.save(function(err3, doc3) {
            if (err3) {
              res.json({
                status: "1",
                msg: err3.message
              })
            } else {
              res.json({
                status: "0",
                msg: '',
                result: '首次添加成功'
              })
            }
          })
        }
      }
    }
  })
});
// 获取购物车列表信息
router.get('/getCartInfo', function(req, res, next) {
  var userId = req.cookies.userId
  User.findOne({ userId: userId }, function(err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message
      });
    } else {
      if (doc) {
        res.json({
          status: "0",
          msg: '',
          cartlist: doc.cartList,
          cartSelectAll: doc.cartSelectAll
        })
      }
    }
  })
});
// 改变购物车的单项选择以及改变是否全选
router.get('/changeSelect', function(req, res, next) {
  var checked = req.param('checked')
  var productId = req.param('productId')
  var userId = req.cookies.userId
  var judgeCheckedNum = 0
  User.findOne({ userId: userId }, function(err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message
      });
    } else {
      if (doc) {
        doc.cartList.forEach(item => {
          if (item.productId === productId) {
            item.checked = checked
          }
        })
        judgeCheckedNum = doc.cartList.filter(item => !item.checked).length
        if (judgeCheckedNum === 0) {
          doc.cartSelectAll = true
        } else {
          doc.cartSelectAll = false
        }
        doc.save(function(err2, doc2) {
          if (err2) {
            res.json({
              status: "1",
              msg: err3.message
            })
          } else {
            res.json({
              status: "0",
              msg: '',
              result: '修改成功'
            })
          }
        })
      }
    }
  })
});
// 改变购物车的全选选择以及改变商品的单项选择
router.get('/changeSelectAll', function(req, res, next) {
  var cartSelectAll = req.param('cartSelectAll')
  var userId = req.cookies.userId
  // var judgeCheckedNum = 0
  User.findOne({ userId: userId }, function(err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message
      });
    } else {
      if (doc) {
        doc.cartSelectAll = cartSelectAll
        doc.cartList.forEach(item => {
          item.checked = cartSelectAll
        })
        doc.save(function(err2, doc2) {
          if (err2) {
            res.json({
              status: "1",
              msg: err3.message
            })
          } else {
            res.json({
              status: "0",
              msg: '',
              result: '全选状态修改成功'
            })
          }
        })
      }
    }
  })
});
module.exports = router;
