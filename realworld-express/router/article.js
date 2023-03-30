const express = require('express')
const articleController = require('../controller/article')

const router = express.Router()

// 获取文章列表
router.get('/', articleController.getArticles)

// 获取用户关注的作者文章列表
router.get('/feed', articleController.getFeedArticles)

// 获取文章
router.get('/:articleId', articleController.getArticle)

// 创建文章
router.post('/',  articleController.createArticle)

// 更新文章
router.put('/:articleId', articleController.updateArticle)

// 删除文章
router.delete('/:articleId',  articleController.deleteArticle)

// 添加文章评论
router.post('/:articleId/comments', articleController.createArticleComment)

// 获取文章评论列表
router.get('/:articleId/comments', articleController.getArticleComments)

// 删除文章评论
router.delete('/:articleId/comments/:id', articleController.deleteArticleComment)

// 文章点赞
router.post('/:articleId/favorite', articleController.favoriteArticle)

// 取消文章点赞
router.delete('/:articleId/favorite', articleController.unfavoriteArticle)

module.exports = router;