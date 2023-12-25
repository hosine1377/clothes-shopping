import { useContext } from 'react'

import Banner from '../../Component/Banner/Banner'
import Brandes from '../../Component/Brandes/Brandes'
import HomeComponent from '../../Component/Home/Home'
import New from '../../Component/New/New'
import ProdactsSection from '../../Component/ProdactsSection/ProdactsSection'
import { Container } from 'react-bootstrap'
import productsContexts from '../../Contexts/ProductsContexts'
function Home() {
  const contextData = useContext(productsContexts)
  console.log(contextData.newProducts[0].info)
  return (
    <div>
      {/* <main> */}

      <HomeComponent />
      <Brandes />
      <New />
      <Container>
        <ProdactsSection product={contextData.newProducts[0]} />
      </Container>
      <Banner />
      <Container>
        {contextData.allProducts.map((product) => (
          <ProdactsSection key={product.id} product={product} />
        ))}
      </Container>
      {/* </main> */}
      {/* <Toast />
      <Cart /> */}
    </div>
  )
}

export default Home
