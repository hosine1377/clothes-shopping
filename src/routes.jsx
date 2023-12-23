import Home from './pages/Home/Home'
import Products from './pages/Products/Products'

let routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/products/:productsId',
    element: <Products />,
  },
]

export default routes
