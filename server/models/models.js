const sequelize = require('../db')

const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true, allowNull: false},
  password: {type: DataTypes.STRING, allowNull: false},
  role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const ImageItem =  sequelize.define('image_item',{
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  img: {type: DataTypes.STRING, allowNull: false, unique: true }
})

const Category =  sequelize.define('category',{
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false, unique: true }
})

User.hasOne(ImageItem)
ImageItem.belongsTo(User)

Category.hasMany(ImageItem)
ImageItem.belongsTo(Category)

module.exports = {
  User,
  ImageItem,
  Category
}
