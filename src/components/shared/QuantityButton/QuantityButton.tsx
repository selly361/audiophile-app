import React from 'react'
import styled from 'styled-components'

const StyledQuantityButton = styled.button`
  width: 120px;
  height: 48px;
  background: #f1f1f1;
  border: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  
`

const Quantity = styled.p`
  color: black;
`

const Button = styled.button`
  font-weight: bold;
  border: none;
  height: 100%;
  width: 100%;
  color: #000000;
  opacity: 0.5;
  transition: 1s ease color, 1s ease opacity, 1s ease background-color;

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
    opacity: 1;
    background-color: #d3d3d3;
  }
`

interface PropTypes {
  quantity: number
  increment: any
  decrement: any
}

const QuantityButton = ({ quantity, increment, decrement }: PropTypes) => {
  return (
    <StyledQuantityButton>
      <Button onClick={decrement}>-</Button>
      <Quantity>{quantity}</Quantity>
      <Button onClick={increment}>+</Button>
    </StyledQuantityButton>
  )
}

export default QuantityButton
