'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
  name: String,
  image: String,
  price: { type: String, default: 0 },
  category: { type: String, enum: ['computers', 'phones', 'accesories'] },
  description: String
})

module.exports = mongoose.model('Product', ProductSchema)
