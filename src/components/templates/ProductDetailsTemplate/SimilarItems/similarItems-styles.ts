import { OrangeButton, headingFourFontStyle, headingThreeFontStyle } from 'utilities/defaultStyles'
import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  display: grid;
  gap: 3rem;
`

export const Button = styled.button`
  ${OrangeButton}
`

export const Title = styled.h3`
  ${headingThreeFontStyle}
  text-align: center;
`

export const Name = styled.h4`
  ${headingFourFontStyle}
  font-size: 23px;
`

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 1024px){
    display: grid;
    width: 100%;
    justify-items: center;
  }
  
`

export const ProductWrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 1rem;
  justify-content: space-between;
`