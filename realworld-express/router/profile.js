const express = require('express')
const userController = require('../controller/user')

const router = express.Router()

// 获取用户资料
router.get('/:username', userController.getUserProfile)

// 关注用户
router.post('/:username/follow', userController.followUser)

// 取消关注用户
router.delete('/:username/follow', userController.unfollowUser)

module.exports = router