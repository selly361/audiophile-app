import { CheckoutPage, HomePage, ProductPage, ProductsDetailPage } from './pages'
import { Route, Routes } from 'react-router-dom'

import Footer from 'components/Layout/Footer/Footer'
import { Fragment } from "react"
import Header from 'components/Layout/Header/Header'
import Modals from 'components/Modals/Modals'
import Wrapper from 'components/Wrapper/Wrapper'

const App = () => {
  return (
 <Fragment>
     <Wrapper>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/product_detail/:productName" element={<ProductsDetailPage />} />
        <Route path="/:category" element={<ProductPage />}>
        <Route path="*" element={<h1>NO PAGE FOUND</h1>} />
        </Route>
      </Routes>
    </Wrapper>
    <Modals />
 </Fragment>
  )
}

export default App
