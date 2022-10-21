import { HomePage, ProductPage, ProductsDetailPage } from './pages'
import { Route, Routes } from 'react-router-dom'

import Footer from 'components/Layout/Footer/Footer'
import Header from 'components/Layout/Header/Header'
import Wrapper from 'components/Wrapper/Wrapper'

const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:productCategory" element={<ProductPage />} />
        <Route path="/:category/:product" element={<ProductsDetailPage />} />
      </Routes>
    </Wrapper>
  )
}

export default App
