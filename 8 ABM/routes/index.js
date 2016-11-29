'use strict'

const express = require('express')
const productCtrl = require('../controllers/product')
const api = express.Router()

// ========================= FUNCIONES API-REST =========================================
api.get('/product', productCtrl.getProducts)
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product', productCtrl.saveProduct)
api.put('/product/:productId', productCtrl.updateProduct)
api.delete('/product/:productId', productCtrl.deleteProduct)

module.exports = api
