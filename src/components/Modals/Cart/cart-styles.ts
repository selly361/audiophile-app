import {
    OrangeButton,
    headingFiveFontStyle,
    headingFourFontStyle,
    primaryFontStyle,
  } from 'utilities/defaultStyles'
  import { Link } from 'react-router-dom'
  import styled from 'styled-components'
  import { motion } from "framer-motion"
  
  export const Container = styled(motion.div)`
    position: absolute;
    width: 377px;
    max-height: 90vh;
    overflow-y: auto;
    height: max-content;
    right: 14vw;
    top: 16vh;
    background: #ffffff;
    border-radius: 8px;
    z-index: 200;
    padding: 2rem;
  
    @media (max-width: 1100px){
      inset: 0;
      margin: auto;
    }
  `
  
  export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    gap: 1rem;
  `
  
  export const CartHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `
  
  export const CartLength = styled.h3`
    ${primaryFontStyle}
    font-size: 18px;
  `
  
  export const RemoveAllButton = styled.button`
    ${primaryFontStyle}
    opacity: 0.5;
    background-color: transparent;
    border: none;
    text-decoration: underline;
    transition: 1s ease color, 1s ease opacity;
    &:hover {
      opacity: 1;
      color: ${({ theme }) => theme.colors.orange};
    }
  `
  
  export const CartImage = styled.img`
    width: 64px;
    height: 64px;
  `
  
  export const ItemsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    gap: 1.4rem;
  `
  
  export const ItemContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    button:last-child {
      height: 30px;
    }
  `
  
  export const Item = styled(motion.div)`
    display: flex;
    gap: 1rem;
  `
  
  export const Name = styled.h5`
    ${primaryFontStyle}
    text-transform: uppercase;
    font-weight: 700;
  `
  
  export const Price = styled.p`
    ${primaryFontStyle}
    opacity: 0.5;
  `
  
  export const CartTotal = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `
  
  export const TotalText = styled(Price)`
    font-size: 15px;
  `
  
  export const TotalPrice = styled.h4`
    ${primaryFontStyle}
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
  `
  
  export const CheckoutLink = styled(Link)`
    ${OrangeButton}
    width: 100%;
  `

