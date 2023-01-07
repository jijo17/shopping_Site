const express = require('express')
const router = express.Router()

const { getProductById, getAllProducts } = require('../controller/productController')
//@desc get all products from db
//@route get /api/products
//@access Public
router.get('/', getAllProducts)

//@desc get a product by id from db
//@route get /api/products/:id
//@access Public
router.get('/:id',getProductById)

module.exports = router