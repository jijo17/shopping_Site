import React from 'react'
import "./CartScreen.css"
import CartItem from '../components/CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart, } from '../redux/actions/cartActions';

const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty))
  }
  const removeHandler = (id) => {
    dispatch(removeFromCart(id))
  }
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty,)
  }
  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => Number(item.price * item.qty) + price, 0)
  }
  return (
    <div className='cartscreen'>
      <div className='cartscreen__left'>
        <h2>shopping cart</h2>
        {cartItems.length === 0 ? (
          <div>
            your cart is empty <Link to="./">Go Back</Link>
          </div>
        ) : cartItems.map(item => {
          <CartItem key={item.product} item={item} qtyChangeHandler={qtyChangeHandler} removeHandler={removeHandler} />
        })}
      </div>
      <div className='cartscreen__right'>
        <div className='cartscreen__info'>
          <p>Subtotal ({getCartCount()}) items</p>
          <p>${getCartSubTotal().toFixed(2)}</p>
        </div>
        <div>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartScreen