require('dotenv').config();

const productData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');
connectDB()
const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productData)
    console.log("Data Import success")
    process.exit()
  } catch (e) {
    console.log("🚀 ~ file: seederScript.js:14 ~ importData ~ e", e)
    console.error("Error with data import")
    process.exit(1);
  }
}
importData()