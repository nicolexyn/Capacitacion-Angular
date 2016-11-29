'use strict'

const Product = require('../models/product')

// ============================================== GET & GET (ID) =======================================================
function getProduct (req, res) {
  let productId = req.params.productId

  Product.findById(productId, (err, product) => {
    if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
    if (!product) return res.status(404).send({ message: 'El producto no existe' })

    // En este caso producto y el propio producto se llaman igual...
    // res.status(200).send({ product: product })
    // por lo que podríamos reducirlo, gracias a una propiedad de ES6 a esto...
    res.status(200).send({ product })
  })
}

function getProducts (req, res) {
  Product.find({}, (err, products) => {
    if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
    if (!products) return res.status(404).send({ message: 'No existen productos' })

    res.status(200).send({ products })
  })
}

// ============================================== POST =======================================================
function saveProduct (req, res) {
  // console.log(req.body);
  // res.status(404).send({message: 'El producto no existe'});
  console.log('POST /api/product')
  console.log(req.body)

  let product = new Product()
  product.name = req.body.name
  product.image = req.body.image
  product.price = req.body.price
  product.category = req.body.category
  product.description = req.body.description

  product.save((err, productStored) => {
    if (err) res.status(500).send({message: `Error al salvar en la base de datos ${err} `})

    res.status(200).send({ product: productStored })
  })
}

// ============================================== UPDATE =======================================================
function updateProduct (req, res) {
  let productId = req.params.productId
  let update = req.body

  Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
    if (err) res.status(500).send({ message: `Error al actualizar el producto: ${err}` })

    res.status(200).send({ product: productUpdated })
  })
}

// ============================================== DELETE =======================================================
function deleteProduct (req, res) {
  let productId = req.params.productId

  Product.findById(productId, (err, product) => {
    if (err) res.status(500).send({ message: `Error al borrar el producto: ${err}` })

    product.remove(err => {
      if (err) res.status(500).send({ message: `Error al borrar el producto: ${err}` })
      res.status(200).send({ message: 'El producto ha sido eliminado' })
    })
  })
}

module.exports = {
  getProduct,
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct
}
