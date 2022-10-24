import { OrangeButton, headingFiveFontStyle, primaryFontStyle } from 'utilities/defaultStyles'

import React from 'react'
import styled from 'styled-components'
import { useAppSelector } from 'app/hooks'

const Container = styled.div`
  width: 350px;
  height: max-content;
  background-color: white;
  border-radius: 10px;
  padding: 33px;

  @media (max-width: 1070px){
    width: 100%;    
}
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  gap: 1rem;
`

const CartImage = styled.img`
  width: 64px;
  height: 64px;
`

const ItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 1.4rem;
`

const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button:last-child {
    height: 30px;
  }
`

const Item = styled.div`
  display: flex;
  gap: 1rem;
`

const Name = styled.h5`
  ${primaryFontStyle}
  text-transform: uppercase;
  font-weight: 700;
`

const Price = styled.p`
  ${primaryFontStyle}
  opacity: 0.5;
`

const CartTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const TotalText = styled(Price)`
  font-size: 15px;
`

const TotalPrice = styled.h4`
  ${primaryFontStyle}
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.orange};
`

const Title = styled.h5`
  ${headingFiveFontStyle}
`

const Quantity = styled(Price)`
    font-weight: bold;
`

const LightText = styled(Price)`
    text-transform: uppercase;
    text-align: start;
`

const DarkText = styled(Price)`
    text-transform: uppercase;
    color: black;
    opacity: 1;
    text-align: end;
    font-size: 18px;
    font-weight: 700;
`

const CartInfo = styled.div`
    display: grid;
    gap: .5rem;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
`

const GrandTotalWrapper = styled.div`
    display: flex;
    justify-content: space-between;

`

const SubmitButton = styled.button`
    ${OrangeButton}
    width: 100%;
    height: 48px;
`

const SummaryDetails = () => {
    const { cart } = useAppSelector(state => state.cart)

    let total = cart.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.quantity,
        0,
      )
  return (
    <Container>
      <Wrapper>
        <Title>SUMMARY</Title>
        <ItemsContainer>
          {cart.map((item) => (
            <ItemContainer>
              <Item>
                <CartImage src={`images/cart/image-${item.slug}.jpg`} />
                <div>
                  <Name>{item.slug.split('-')[0]}</Name>
                  <Price>${item.price.toLocaleString()}</Price>
                </div>
              </Item>
              <Quantity>x{item.quantity}</Quantity>
            </ItemContainer>
          ))}
        </ItemsContainer>
        <CartInfo>
            <LightText>TOTAL</LightText>
            <DarkText>$ {total.toLocaleString()}</DarkText>
            <LightText>SHIPPING</LightText>
            <DarkText>$ 50</DarkText>
            <LightText>VAT (INCLUDED)</LightText>
            <DarkText>$ {(total / 5).toLocaleString()}</DarkText>
        </CartInfo>
        <GrandTotalWrapper>
        <LightText>GRAND TOTAL</LightText>
        <TotalPrice>$ {((total / 5) + total + 50).toLocaleString()}</TotalPrice>
        </GrandTotalWrapper>
        <SubmitButton form="form" type="submit">CONTINUE & PAY</SubmitButton>
      </Wrapper>
    </Container>
  )
}

export default SummaryDetails
