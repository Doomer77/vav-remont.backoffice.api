const Router = require('express')
const imageItemController = require('../controllers/imageItemController')

const router = new Router()

router.post('/', imageItemController.create)
router.get('/', imageItemController.getAll)
router.get('/:id', imageItemController.getOne)

module.exports = router