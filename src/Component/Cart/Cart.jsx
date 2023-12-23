import React from 'react'
import './Cart.css'
import { BsBag } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { Row, Col } from 'react-bootstrap'
function Cart() {
  return (
    <div className="cart-container ">
      <div className="cart-header">
        <BsBag className="bag-icon" />
        <AiOutlineClose className="close-icon" />
      </div>
      <div className="cart-body">
        <div className="cart-body-top">
          <Row>
            <Col md="3">
              <p>title</p>
            </Col>
            <Col md="3">
              <p>count</p>
            </Col>
            <Col md="3">
              <p>price</p>
            </Col>
            <Col md="3">
              <p>image</p>
            </Col>
          </Row>
        </div>
        <div className="cart-body-bottom">
          <Row className="my-2">
            <Col md="3">
              <p>clothes</p>
            </Col>
            <Col md="3">
              <p className="d-flex justify-content-between">
                1 <button className="add-btn">+</button>
              </p>
            </Col>
            <Col md="3">
              <p>120000</p>
            </Col>
            <Col md="3">
              <div className="img-card">
                <img
                  src="../img/featured/4.jpg"
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Cart
