import React, { Fragment, ReactNode } from "react";

import Footer from "components/Layout/Footer/Footer";
import { GlobalStyle } from "global/GlobalStyles";
import Header from "components/Layout/Header/Header";

interface PropTypes {
  children: ReactNode;
}

const Wrapper = ({ children }: PropTypes) => {
  return (
    <Fragment>
      <Header />
      <GlobalStyle />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Wrapper;
