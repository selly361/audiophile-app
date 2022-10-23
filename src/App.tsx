import { HomePage, ProductPage, ProductsDetailPage } from './pages'
import { Route, Routes } from 'react-router-dom'

import Footer from 'components/Layout/Footer/Footer'
import Header from 'components/Layout/Header/Header'
import ScrollToTop from 'ScrollToTop'
import Wrapper from 'components/Wrapper/Wrapper'

const App = () => {
  return (
    <Wrapper>
      <ScrollToTop />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/product_detail/:productName" element={<ProductsDetailPage />} />
        <Route path="/:category" element={<ProductPage />}>
        <Route path="*" element={<h1>NO PAGE FOUND</h1>} />
        </Route>
      </Routes>
    </Wrapper>
  )
}

export default App
