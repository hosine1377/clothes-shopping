import routes from './routes'
import { useRoutes } from 'react-router-dom'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import { useState } from 'react'
import { products, ourProduct } from './data/products'
import productsContexts from './Contexts/ProductsContexts'
import Cart from './Component/Cart/Cart'
import Toast from './Component/Toast/Toast'
function App() {
  const [newProducts, setNewProduct] = useState(ourProduct)
  const [allProducts, setAllProducts] = useState(products)
  const [userCart, setUserCart] = useState([])
  const [isShowToast, setIsShowToast] = useState(false)
  const [isShowCart, setIsShowCart] = useState(false)
  const router = useRoutes(routes)
  return (
    <div>
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
        <Header />
        {router}
        <Footer />
        <Cart />
        <Toast />
      </productsContexts.Provider>
    </div>
  )
}

export default App
