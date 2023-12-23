import React from 'react'
import './Product.css'
import { FaStar } from 'react-icons/fa'
import { Col } from 'react-bootstrap'
function Product({ product }) {
  return (
    <Col className="my-5 " md="3">
      <div class="featuer__item">
        <img src={product.img} alt="" />
        <div class="feature__item__description">
          <div class="stars-icon">
            <FaStar class="fas fa-star" />
            <FaStar class="fas fa-star" />
            <FaStar class="fas fa-star" />
            <FaStar class="fas fa-star" />
            <FaStar class="fas fa-star" />
          </div>
          <p class="feature__name">{product.title}</p>
          <a href="#" class="feature__price">
            ${product.price}
          </a>
          <a href="#" class="feature__price">
            {product.count}
          </a>
          <button class="feature__btn">buy now</button>
        </div>
      </div>
    </Col>
  )
}

export default Product
