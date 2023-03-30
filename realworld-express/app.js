const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router/index')

const app = express()

// 接口日志
app.use(morgan('dev'))
// 接口请求资源
app.use(express.json())
// 允许跨域
app.use(cors())

const PORT = process.env.PORT || 3001

// 挂载路由
app.use('/api', router)

app.listen(PORT, () => {
  console.log('Server is running at http://localhost:' + PORT)
})