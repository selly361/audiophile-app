import {
  CheckoutPage,
  HomePage,
  ProductPage,
  ProductsDetailPage,
} from "./pages";
import { Route, Routes } from "react-router-dom";

import Footer from "components/Layout/Footer/Footer";
import { Fragment } from "react";
import Header from "components/Layout/Header/Header";
import Modals from "components/Modals/Modals";
import ScrollToTop from "utilities/ScrollToTop";
import Wrapper from "components/Wrapper/Wrapper";

const App = () => {
  return (
    <Fragment>
      <Wrapper>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route
            path="/:produtCategory/:productName"
            element={<ProductsDetailPage />}
          />
          <Route path="/:category" element={<ProductPage />} />
        </Routes>
      </Wrapper>
      <Modals />
    </Fragment>
  );
};

export default App;
