const uuid = require('uuid')
const path = require('path')
const { ImageItem } = require('../models/models')
const ApiError = require('../error/ApiError')

class ImageItemController {
  async create(req, res, next) {
    try {
      const { categoryId } = req.body
      const { img } = req.files
      let fileName = uuid.v4() + '.jpg'
      img.mv(path.resolve(__dirname, '..', 'static', fileName))

      const imageItem = await ImageItem.create({categoryId, img: fileName})

      return res.json(imageItem)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }

  }

  async getAll(req, res) {
    let { categoryId,limit, page } = req.query
    page = page || 1
    limit = limit || 9
    let offset = page * limit - limit
    let imageItem
    if (!categoryId) {
      imageItem = await ImageItem.findAndCountAll({limit, offset})
    }
    if (categoryId) {
      imageItem = await ImageItem.findAndCountAll({where: {categoryId}, limit, offset})
    }
    return res.json(imageItem)
  }

  async getOne(req, res) {
    const {id} = req.params
    const imageItem = await ImageItem.findOne({
      where: {id}
    })
    return res.json(imageItem)
  }
}


module.exports = new ImageItemController()