import React, { useContext } from 'react'
import './Product.css'
import { FaStar } from 'react-icons/fa'
import { Col } from 'react-bootstrap'
import productsContexts from '../../Contexts/ProductsContexts'
import { element } from 'prop-types'
function Product({ product }) {
  const contextData = useContext(productsContexts)
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
          <button
            class="feature__btn"
            onClick={() => {
              contextData.setIsShowToast(true)
              setTimeout(() => {
                contextData.setIsShowToast(false)
              }, 3000)

              let isInUserCart = contextData.userCart.some(
                (bagProduct) => bagProduct.title === product.title,
              )

              if (!isInUserCart) {
                let newUserCartProduct = {
                  id: contextData.userCart.length + 1,
                  title: product.title,
                  price: product.price,
                  count: 1,
                  img: product.img,
                }
                contextData.setUserCart((prevProduct) => [
                  ...prevProduct,
                  newUserCartProduct,
                ])
              } else {
                let userCart = [...contextData.userCart]

                //way1
                // userCart.some((bagProduct) => {
                //   if (bagProduct.title === product.title) {
                //     bagProduct.count += 1
                //     return true
                //   }
                // })
                // contextData.setUserCart(userCart)

                //way2
                let newUserCart = userCart.map((bagProduct) => {
                  if (bagProduct.title === product.title) {
                    bagProduct.count += 1
                  }
                  return bagProduct
                })
                contextData.setUserCart(newUserCart)
              }
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Col>
  )
}

export default Product
