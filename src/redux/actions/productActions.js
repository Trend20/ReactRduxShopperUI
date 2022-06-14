import { ActionTypes } from "../constants/actionTypes";


// SET_PRODUCTS ACTION
export const setProducts = (products) =>{
  return{
    action: ActionTypes.SET_PRODUCTS,
    payload: products
  }
}


// SELECTED PRODUCT ACTION
export const selectedProduct = (product) =>{
  return{
    action: ActionTypes.SELECTED_PRODUCT,
    payload: product
  }
}