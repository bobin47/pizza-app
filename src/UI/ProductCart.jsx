import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import "../css/productCart.css"

import {CartAction} from '../store/shopping-cart/cartSlice'


export default function ProductCart(props) {
    const {id,title,image01,price} = props.item
    const dispatch = useDispatch()

    const addToCart = () =>{
        dispatch(CartAction.addItem({
            id,title,image01,price
        }))
    }
    
    return (
        <div className='product__item'>
            <div className="product__img w-100">
            <img src={image01} alt="" className='w-50'/>
            </div>

            <div className="product__content">
                <h5>
                    <Link to={`/foods/${id}`}> {title}</Link>
                </h5>

                <div className='d-flex align-items-center justify-content-between'>
                    <span className='product__price'>
                        {price}$
                    </span>
                    <button className='addToCart_btn' onClick={addToCart}>Add to card</button>
                </div>
            </div>
        </div>
  )
}
