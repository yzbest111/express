const express = require('express')
const router = require('./router')
const port = 3000

const app = express()

// 配置中间件
app.use(express.json())
app.use(express.urlencoded())

// 挂载路由 app.use(router)
// 给路由添加基础路径前缀
app.use('/todos', router)

// 在所有的中间件之后挂载异常处理中间件
app.use((err, req, res, next) => {
  res.status(500).json({
    error: err.message
  })
})

// 通常在所有路由之后配置处理 404 内容
// 请求进来从上到下依次匹配
app.use((req, res, next) => {
  res.status(400).send('404 not found')
})

app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})