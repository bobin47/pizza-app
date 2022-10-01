import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import "../css/shopping-cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../store/shopping-cart/cartUiSlice";

export default function Carts() {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.cart.cartItem);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close" onClick={toggleCart}>
          <i class="ri-close-line"></i>
        </div>

        <div className="cart__item-list">
          {cartProduct.length === 0 ? (
            <h6>No item</h6>
          ) : (
            cartProduct.map((item, index) => {
              return <CartItem item={item} key={index} />;
            })
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal: <span>${totalAmount}</span>
          </h6>
          <button>
            <Link to="/checkout">CheckOut</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
}
