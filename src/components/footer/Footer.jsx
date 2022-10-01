import React from 'react'
import logo from '../../assets/images/res-logo.png'
import "./footer.css"
import {Container, Row , Col,ListGroup,ListGroupItem,Form} from 'reactstrap'

export default function Footer() {
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg="3" md='4' sm='6'>
          <div className='logo footer__logo text-start'>
            <img src={logo} alt="" />
            <h5>Tasty Treat</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
          </div>
        </Col>

        <Col lg="3" md='4' sm='6'>
          <h5 className='footer__title'>
            Delivery Time
          </h5>
          <ListGroup className='delivery__time-list'>
              <ListGroupItem className='border-0 ps-0 delivery__time-item'>
                <span>
                Sunday -Thursday
                </span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className='border-0 ps-0 delivery__time-item'>
                <span>
                Monday - Saturday
                </span>
                <p>Off day</p>
              </ListGroupItem>
          </ListGroup>
        </Col>

        <Col lg="3" md='4' sm='6'>
          <h4>Contact</h4>
          <ListGroup className='delivery__time-list'>
              <ListGroupItem className='border-0 ps-0 delivery__time-item'>
                <span>
                Location:ZindaBazar,Sylhet-3100
                </span>
                <p>Bangladesh</p>
              </ListGroupItem>

              <ListGroupItem className='border-0 ps-0 delivery__time-item'>
                <span>
                Phone: 01777777678
                </span>
                <p>Email: ex@gmail.com</p>
              </ListGroupItem>
          </ListGroup>
        </Col>

        <Col lg="3" md='4' sm='6'>
          <h4>NewSletter</h4>
        <ListGroup className='delivery__time-list'>
              <ListGroupItem className='border-0 ps-0 delivery__time-item'>
                <span>
                Subscribe our newsletter
                </span>
                <div className='newSletter'>
                  <input type="email"/>
                  
                </div>
              </ListGroupItem>

             
          </ListGroup>

        </Col>
      </Row>
    </Container>
   
  </footer>
}
