const express = require('express')
const tagController = require('../controller/tag')

const router = express.Router()

// 获取文章标签列表
router.get('/', tagController.getTags)

module.exports = router