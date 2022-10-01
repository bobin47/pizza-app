import React,{useState,useEffect} from 'react'

import heroImg from '../assets/images/hero.png'
import Category from '../UI/Category'
import ProductCart from '../UI/ProductCart'
import {Container,Row,Col} from 'reactstrap'
import '../css/home.css'
import { Link } from 'react-router-dom'

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import Products from '../assets/fake-data/products';

import foodCategory001 from '../assets/images/hamburger.png'
import foodCategory002 from '../assets/images/pizza.png'
import foodCategory003 from '../assets/images/bread.png'

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];

export default function Home() {

  const [category,setCategory] = useState("ALL")
  const [allProduct,setAllProduct] = useState(Products)
  
  useEffect(()=>{
    if(category==="ALL"){
      setAllProduct(Products)
    }

    if(category==="BURGER"){
      const filterProducts = Products.filter(item => item.category ==='Burger')
      setAllProduct(filterProducts)
    }

    if(category==="PIZZA"){
      const filterProducts = Products.filter(item => item.category ==='Pizza')
      setAllProduct(filterProducts)
    }

    if(category==="BREAD"){
      const filterProducts = Products.filter(item => item.category ==='Bread')
      setAllProduct(filterProducts)
    }
    // console.log("ahihi");
  },[category])

  return (
   <section className='hero'>
    <Container>
      <Row>
        <Col lg="6" md="6">
          <div className="hero__content">
              <h5 className='mb-3'>Easy way to make an order</h5>
              <h1 className='mb-4 hero__title'>
                <span>HUNGRY?</span> Just Wait <br/> food at <span>your door</span>
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quis totam praesentium adipisci ipsum</p>
              
              <div className='hero__btns'>
                <button className='order__btn'>Order now</button>
                <button className='all-food__btn'>
                  <Link to='/foods'>
                  See all food
                  </Link>
                </button>
              </div>

              <div className='d-flex service'>
                <p>
                  <span className='hero__icon'>
                  <i class="ri-car-line"></i>
                  </span>
                  No shipping charge
                </p>

                 <p>
                  <span className='hero__icon'>
                  <i class="ri-car-line"></i>
                  </span>
                  100% secure checkout
                </p>
              </div>
          </div>
        </Col>

        <Col lg="6" md="6" >
         <div className="hero__img ">
            <img src={heroImg} alt="" />
          </div></Col>
      </Row>

      <section>
          <Category/>
      </section>
     
     <section className=''>
      <Container>
        <Row className='text-center'>
          <Col lg='12' className='serve'>
            <h5 className='mb-3'>What we serve</h5>
            <h2 className='mb-3 serve__title'>Just sit back at home <br/>we will <span>take care</span></h2>
            <p className='title'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <p className='title'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </Col>

          {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p >{item.desc}</p>
                </div>
              </Col>
            ))}

        </Row>
      </Container>
     </section>

     <section>
      <Container>
        <Row>
          <Col lg="12" className='text-center'>
            <h2>Popular Food</h2>
          </Col>

          <Col lg='12'>
            <div className="food__category d-flex align-items-center justify-content-center gap-5">
              <button 
                  className={`all__btn ${category === 'ALL' ? 'food__category__active' : ""}`}
                  onClick={()=>setCategory("ALL")}>All</button>
              <button 
                className={`burger__btn d-flex align-items-center gap-2 ${category === 'BURGER' ? 'food__category__active' : ""}`}
                onClick={()=>setCategory("BURGER")}>
                <img src={foodCategory001} alt="" />
                Burger
              </button>
              <button className={`burger__btn d-flex align-items-center gap-2 ${category === 'PIZZA' ? 'food__category__active' : ""}`} onClick={()=>setCategory("PIZZA")}>
                <img src={foodCategory002} alt="" />
                Pizza
              </button>
              <button className={`burger__btn d-flex align-items-center gap-2 ${category === 'BREAD' ? 'food__category__active' : ""}`} onClick={()=>setCategory("BREAD")}>
                <img src={foodCategory003} alt="" />
                Bread
              </button>

            </div>
          </Col>
          {
            allProduct.map(item=>(
              <Col lg="3" md='4' key={item.id} className='mt-5'>
                <ProductCart item={item} />
              </Col>
            ))
          }
          


        </Row>
      </Container>
     </section>
     
      </Container>
   </section>
  )
}
