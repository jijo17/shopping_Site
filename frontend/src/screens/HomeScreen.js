import React from 'react'
import './HomeScreen.css'
import Product from '../components/Product'
const HomeScreen = () => {
  console.log("sdadadasd");
  return (
    <div className='homescreen'>
      <h2 className="homescreen__title">Latest prod</h2>
      <div className='homescreen__products'>
        <Product />
      </div>
    </div>
  )
}

export default HomeScreen