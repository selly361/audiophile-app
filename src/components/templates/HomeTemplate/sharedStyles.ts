import { headingFiveFontStyle, transparentButton } from 'utilities/defaultStyles'

import { Link } from 'react-router-dom'
import styled from "styled-components"

export const Content = styled.div`
  width: 247px;
  height: 118px;
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  

  @media (max-width: 1000px){
    width: 80%;
  }
`

export const ProductName = styled.h5`
  ${headingFiveFontStyle}
  font-size: 28px;
`

export const Button = styled(Link)`
  ${transparentButton}
`