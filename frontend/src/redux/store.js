import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extensions';
import { configureStore } from "@reduxjs/toolkit";

//Reducers
import { cartReducers } from './reducers/cartReducers'
import { getProductsDetailsReducer, getProductsReducer } from './reducers/productReducers'

const reducer = combineReducers({
  cart: cartReducers,
  getProducts: getProductsReducer,
  getProductsDetails: getProductsDetailsReducer,
})

const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
const INITIAL_STATE = {
  cart: {
    cartItems:cartFromLocalStorage
  }
}
const store = configureStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
)
export default store;