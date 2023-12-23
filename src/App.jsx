import routes from './routes'
import { useRoutes } from 'react-router-dom'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
function App() {
  const router = useRoutes(routes)
  return (
    <div>
      <Header />
      {router}
      <Footer />
    </div>
  )
}

export default App
