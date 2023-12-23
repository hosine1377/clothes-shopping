import { useState } from 'react'

import Banner from '../../Component/Banner/Banner'
import Brandes from '../../Component/Brandes/Brandes'
import HomeComponent from '../../Component/Home/Home'
import New from '../../Component/New/New'
import { products, ourProduct } from '../../data/products'
import ProdactsSection from '../../Component/ProdactsSection/ProdactsSection'
import { Container } from 'react-bootstrap'
import Toast from '../../Component/Toast/Toast'
import Cart from '../../Component/Cart/Cart'
import productsContexts from '../../Contexts/ProductsContexts'
function Home() {
  const [newProducts, setNewProduct] = useState(ourProduct)
  const [allProducts, setAllProducts] = useState(products)
  const [userCart, setUserCart] = useState([])
  const [isShowToast, setIsShowToast] = useState(false)
  const [isShowCart, setIsShowCart] = useState(false)
  return (
    <div>
      {/* <main> */}
      <productsContexts.Provider
        value={{
          allProducts,
          userCart,
          setUserCart,
          isShowToast,
          setIsShowToast,
          isShowCart,
          setIsShowCart,
          newProducts,
        }}
      >
        <HomeComponent />
        <Brandes />
        <New />
        <Container>
          <ProdactsSection product={newProducts[0]} />
        </Container>
        <Banner />
        <Container>
          {allProducts.map((product) => (
            <ProdactsSection key={product.id} product={product} />
          ))}
        </Container>
        {/* </main> */}
        <Toast />
        <Cart />
      </productsContexts.Provider>
    </div>
  )
}

export default Home
