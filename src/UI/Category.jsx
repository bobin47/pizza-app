import React from 'react'
import  '../css/category.css'

import {Container,Row,Col} from 'reactstrap'

import categoryImg01 from '../assets/images/category-01.png'   
import categoryImg02 from '../assets/images/category-02.png'   
import categoryImg03 from '../assets/images/category-03.png'   
import categoryImg04 from '../assets/images/category-04.png'   


const category = [
    {
        display:"Fastfood",
        imgUlr:categoryImg01
    },
    {
        display:"Pizza",
        imgUlr:categoryImg02
    },
    {
        display:"Asian Food",
        imgUlr:categoryImg03
    },
    {
        display:"Row Meat",
        imgUlr:categoryImg04
    },
]

export default function Category() {
  return <Container>
    <Row>
        {
            category.map((item,index)=>{
                return( <Col>
                            <div className="category__item d-flex align-items-center gap-3">
                                <div className="category__img">
                                    <img src={item.imgUlr} alt="" />
                                </div>
                                <div>
                                    <h5>{item.display}</h5>
                                </div>
                            </div>
                        </Col>
                )
            })
        }
       
    </Row>
  </Container>
}
