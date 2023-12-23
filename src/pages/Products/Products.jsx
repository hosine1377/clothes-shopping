import React, { useState } from 'react'
import { products } from '../../data/products'
import { useParams } from 'react-router-dom'
import Product from '../../Component/Product/Product'
import { Container, Row } from 'react-bootstrap'
function Products() {
  const [production, setProduction] = useState(products)
  let param = useParams()

  return (
    <>
      <section className="section-products">
        <Container>
          <div className="section-products-text">
            <h1 class="section-products__title">
              {
                production.find((product) => product.id == param.productsId)
                  .title
              }
            </h1>
            <p>
              here you can check out our new products with fair price on rymo.
            </p>
          </div>
          <Row className="section-products__continer__img ">
            {production
              .find((product) => product.id == param.productsId)
              .infos.map(
                (pro) => (
                  <Product key={pro.id} product={pro} />
                ),
                // console.log(pro),
              )}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Products
