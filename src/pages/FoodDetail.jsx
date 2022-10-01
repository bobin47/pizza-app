import React,{useState}from "react";
import CommonSection from "../UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import '../css/foodDetal.css'
import imgproc from '../assets/images/product_2.2.jpg'
import { useParams } from "react-router-dom";
import products from '../assets/fake-data/products'
import {useDispatch} from 'react-redux'
import {CartAction} from '../store/shopping-cart/cartSlice'

export default function FoodDetail() {

  const {id} = useParams()
  const product = products.find(product=>product.id ===id)
  const dispatch = useDispatch()
  const {title,price,image01} = product;

  const addItem = () =>{
    dispatch(
      CartAction.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  }
  return (
    <div>
      <CommonSection title="Food detail" />
      <section className="container">
        <Row>
          <Col lg="2" md="2">
            <div className="product__img">
              <div className="img__item ">
                <img src={product.image01} alt="" className="w-50" />
              </div>
              <div className="img__item ">
                <img src={product.image02} alt="" className="w-50" />
              </div>
              <div className="img__item ">
                <img src={product.image03} alt="" className="w-50" />
              </div>
            </div>
          </Col>

          <Col lg="3">
            <div className="product__main-mg ">
              <img src={product.image01} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6">
            <div className="single__product-content">
              <h2 className="product__title">{product.title}</h2>
              <span className="product__price">${product.price}</span>
              <p>
                Category: <span>{product.category}</span>
              </p>
              <button className="addToCart_btn" onClick={addItem}>
                Add To Cart
              </button>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
}
