import React, { Fragment, ReactNode } from 'react'

import { GlobalStyle } from 'global/GlobalStyles'

interface PropTypes  {
    children: ReactNode
}

const Wrapper = ({ children }: PropTypes) => {
  return (
    <Fragment>
        <GlobalStyle />
        {children}
    </Fragment>
  )
}

export default Wrapper
