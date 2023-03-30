
// 获取文章列表
exports.getArticles = async (req, res, next) => {
  try {
    res.send('getArticles')
  } catch (error) {
    next(error)
  }
}

// 获取用户关注的作者文章列表
exports.getFeedArticles = async (req, res, next) => {
  try {
    // 处理请求
    res.send('getFeedArticles')
  } catch (err) {
    next(err)
  }
}

// 获取文章
exports.getArticle = async (req, res, next) => {
  try {
    // 处理请求
    res.send('getArticle')
  } catch (err) {
    next(err)
  }
}

// 创建文章
exports.createArticle = async (req, res, next) => {
  try {
    // 处理请求
    res.send('createArticle')
  } catch (err) {
    next(err)
  }
}

// 更新文章
exports.updateArticle = async (req, res, next) => {
  try {
    // 处理请求
    res.send('updateArticle')
  } catch (err) {
    next(err)
  }
}

// 删除文章
exports deleteArticle = async (req, res, next) => {
  try {
    // 处理请求
    res.send('deleteArticle')
  } catch (err) {
    next(err)
  }
}

// 添加文章评论
exports.createArticleComment = async (req, res, next) => {
  try {
    // 处理请求
    res.send('createArticleComment')
  } catch (err) {
    next(err)
  }
}

// 获取文章评论列表
exports.getArticleComments = async (req, res, next) => {
  try {
    // 处理请求
    res.send('getArticleComments')
  } catch (err) {
    next(err)
  }
}

// 删除文章评论
exports.deleteArticleComment = async (req, res, next) => {
  try {
    // 处理请求
    res.send('deleteArticleComment')
  } catch (err) {
    next(err)
  }
}

// 文章点赞
exports.favoriteArticle = async (req, res, next) => {
  try {
    // 处理请求
    res.send('favoriteArticle')
  } catch (err) {
    next(err)
  }
}

// 取消文章点赞
exports.unfavoriteArticle = async (req, res, next) => {
  try {
    // 处理请求
    res.send('unfavoriteArticle')
  } catch (err) {
    next(err)
  }
}






