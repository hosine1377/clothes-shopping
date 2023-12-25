import React, { useContext } from 'react'
import './Cart.css'
import { BsBag } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { Row, Col } from 'react-bootstrap'
import productsContexts from '../../Contexts/ProductsContexts'
function Cart() {
  const contextData = useContext(productsContexts)
  return (
    <div
      className={`${contextData.isShowCart ? 'active' : ''} cart-container `}
    >
      <div className="cart-header">
        <BsBag className="bag-icon" />
        <AiOutlineClose
          className="close-icon"
          onClick={() => contextData.setIsShowCart(false)}
        />
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
          {contextData.userCart.map((product) => (
            <Row className="my-2" key={product.id}>
              <Col md="3">
                <p>{product.title}</p>
              </Col>
              <Col md="3">
                <p className="d-flex justify-content-between">
                  {product.count} <button className="add-btn">+</button>
                </p>
              </Col>
              <Col md="3">
                <p>{product.price}</p>
              </Col>
              <Col md="3">
                <div className="img-card">
                  <img src={product.img} className="img-fluid w-100" alt="" />
                </div>
              </Col>
            </Row>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cart
