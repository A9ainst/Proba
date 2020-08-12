const {Router} =require('express')
const Todo = require('../models/Todo')
const router = Router()

router.get('/index', async (req, res) => {
  res.render('index', {
    title:'Water',
    inIndex: true,
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
      title: 'food',
      isCreate: true
    })
})

router.post('/create', async (req, res) => {
  const todo = new Todo ({
    title: req.body.title
  })

  await todo.save()
  res.redirect('/')
})

router.post('/complete', async (req, res) => {
  const todo = await Todo.findById(req.body.id)
  
  todo.completed = !!req.body.completed
  await todo.save()
  res.redirect('/')
})

module.exports = router