const express = require('express')

const router = express.Router()

// 用户相关路由
router.use(require('./user'))

// 用户资料相关路由
router.use(require('./profile'))

// 文章路由相关
router.use(require('./article'))

// 标签路由相关
router.use(require('./tag'))

module.exports = router;