import { HomePage, ProductPage, ProductsDetailPage } from './pages'
import { Route, Routes } from 'react-router-dom'

import Footer from './components/Layout/Footer/Footer'
import Header from './components/Layout/Header/Header'
import Wrapper from './components/Wrapper/Wrapper'

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/:product" element={<ProductPage />} />
        <Route path="/products_detail/:product" element={<ProductsDetailPage />} />
      </Routes>
      <Footer />
    </Wrapper>
  )
}

export default App