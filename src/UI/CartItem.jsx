import React from 'react'

import {ListGroupItem} from 'reactstrap'
import "../css/cart-item.css"
import { useDispatch } from 'react-redux'

import {CartAction} from '../store/shopping-cart/cartSlice'



export default function CartItem({item}) {

  const {id,price,title,image01,quantity,totalPrice} = item

  const dispatch = useDispatch()

   
  const incrementItem = () =>{
    dispatch(CartAction.addItem({
      id,price,title,image01
    }))
  }

  const decrementItem = () =>{
    dispatch(CartAction.deleteItem(id))
  }

  return (
    <ListGroupItem className='border-0'>
      <div className='cart__item-info d-felx  gap-2'>
         <img src={image01} alt="img" />
        <div className="cart__product-info d-flex align-items-center justify-content-between w-100">
          <div>
            <h6 className='cart__product-title'>{title}</h6>
            <p className='d-flex align-items-center gap-5 cart__product-price'>
              {quantity}x <span>${totalPrice}</span>
            </p>
          
            <div className='d-flex align-items-center justify-content-between gap-3 btn-in-de'>
                <span style={{cursor:'pointer'}} onClick={incrementItem}>
                  <i className="ri-add-line"></i>
                </span>
                <span>{quantity}</span>
                <span style={{cursor:'pointer'}} onClick={decrementItem}>
                  <i className="ri-subtract-line"></i>
                </span>
              
            </div>
          </div>
        <span className='delete__btn'>
          <i className="ri-close-line"></i>
        </span>
      </div>
   </div>  
    </ListGroupItem>
  )
}

//CartItems


//Carts

