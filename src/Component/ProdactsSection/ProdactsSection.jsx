import React from 'react'
import './ProdactsSection.css'
import Product from '../Product/Product'
import { Row } from 'react-bootstrap'

function ProdactsSection({ product }) {
  return (
    <section className="section-products">
      <div className="section-products-text">
        <h1 class="section-products__title"> {product.title}</h1>
        <p>here you can check out our new products with fair price on rymo.</p>
      </div>
      <Row className="section-products__continer__img ">
        {product.infos.splice(0, 4).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Row>
    </section>
  )
}

export default ProdactsSection
