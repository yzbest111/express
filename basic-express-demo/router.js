const express = require('express')
const { getDb, saveDb } = require('./db.js')

// 创建路由实例
const router = express.Router()

// 配置路由
router.get('/', async(req, res, next) => {
  try {
    const db = await getDb()
    res.status(200).json(db.todos)
  } catch (error) {
    // 如果将任何内容传递给next()函数(字符串'route'除外)，express都会将当前请求视为错误，并且将跳过所有剩余的无错误处理路由和中间件函数
    // next()会往后匹配下一个中间件
    // next('route')
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const db = await getDb()
    const todo = db.todos.find(todo => todo.id === Number.parseFloat(req.params.id))

    if (!todo) {
      return req.status(400).end()
    }
    res.status(200).json(todo)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    // 获取客户端参数
    const todo = req.body

    // 数据验证
    if (!todo.title) {
      return res.status(422).json({
        error: 'The field title is required'
      })
    }

    // 数据验证通过，将数据存储到 db 中
    const db = await getDb()
    const lastTodo = db.todos[db.todos.length -1]
    todo.id = lastTodo ? lastTodo.id + 1 : 1
    db.todos.push(todo)
    await saveDb()

    // 发送响应
    res.status(201).json(todo)
  } catch (error) {
    next(error)
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
    // 1. 获取表单数据
    const todo = req.body

    // 2. 查找到要修改的任务项
    const db = await getDb()
    const ret = db.todos.find(todo => todo.id === Number.parseInt(req.params.id))

    if (!ret) {
      return res.status(404).end()
    }

    Object.assign(ret, todo)

    await saveDb(db)

    res.status(200).json(ret)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const todoId = Number.parseFloat(req.params.id)
    const db = await getDb()
    const index = db.todos.findIndex(todo => todo.id === todoId)

    if (index === -1) {
      return res.status(404).end()
    }
    db.todos.splice(index, 1)
    await saveDb(db)

    res.status(204).end()
  } catch (error) {
    next(error)
  }
})

module.exports = router;