const Product = require('../models/Product')

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    req.json(products)
  } catch (e) {
    console.error(e);
    req.status(500).json({ message: "Server Error" })
  }
}
const getProductById = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);
    req.json(products)
  } catch (e) {
    console.error(e);
    req.status(500).json({ message: "Server Error" })
  }
}
module.exports = {
  getAllProducts,
  getProductById
}