const Router = require('express')

const router = new Router()
const userRouter = require('./userRouter')
const imageItemRouter = require('./imageItemRouter')
const categoryRouter = require('./categoryRouter')

router.use('/user', userRouter)
router.use('/image-item', imageItemRouter)
router.use('/category', categoryRouter)

module.exports = router