import { Link, useNavigate } from 'react-router-dom'
import {
  OrangeButton,
  headingTwoFontStyle,
  primaryFontStyle,
} from 'utilities/defaultStyles'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'app/hooks'

import { OrderIcon } from 'assets/icons'
import { closeModal } from 'features/modalSlice'
import { removeAll } from 'features/cartSlice'
import styled from 'styled-components'

const Modal = styled.div`
  width: 540px;
  height: 100%;
  background: #ffffff;
  border-radius: 8px;
  z-index: 200;
  padding: 48px;
`

const Wrapper = styled.div`
  width: 100%;
  min-height: 581px;
  display: grid;
  gap: 1rem;
`

const HeadingTwo = styled.h2`
  ${headingTwoFontStyle}
  font-size: 32px;
`

const LightParagraph = styled.p`
  ${primaryFontStyle}
  opacity: 0.5;
`

const BackHomeButton = styled.button`
  ${OrangeButton}
  width: 100%;
`

const Container = styled.div`
  min-height: max-content;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 198px;
`

const TotalWrap = styled.div`
  width: 100%;
  height: 100%;
  background: #000000;
  border-radius: 0px 8px 8px 0px;
  padding: 41px 73px 42px 24px;
  display: flex;
  flex-flow: column;
  gap: 0.4rem;
  align-items: start;
  justify-content: end;
`

const GrandTotalText = styled.h6`
  color: #ffffff;
  ${primaryFontStyle}
  opacity: 0.5;
`

const Total = styled.h4`
  ${primaryFontStyle}
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
  color: white;
`

const Products = styled.div`
  background: #f1f1f1;
  border-radius: 8px;
  width: 100%;
  min-height: 140px;
  display: grid;
  padding: 24px;
`

const ItemContainer = styled.div`
  display: flex;
  width: 100%;

  div:last-child {
    width: 100%;
  }
`

const ItemImage = styled.img`
  width: 64px;
  height: 64px;
`

const ItemName = styled.h5`
  ${primaryFontStyle}
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const ToggleText = styled(LightParagraph)`
  align-self: end;
  text-align: center;
  border-top: 1px solid black;
  padding-top: 1rem;
  cursor: pointer;
  transition: 1s ease color, 1s ease opacity;
  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.orange};
    opacity: 1;
  }
`

const OrderConfirmed = () => {
  const { cart, total } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
    dispatch(closeModal())
    dispatch(removeAll())
  }

  const [show, setShow] = useState(false)

  return (
    <Modal>
      <Wrapper>
        <OrderIcon />
        <HeadingTwo>
          THANK YOU
          <br /> FOR YOUR ORDER
        </HeadingTwo>
        <LightParagraph>
          You will receive an email confirmation shortly.
        </LightParagraph>
        <Container>
          <Products>
            {(show ? [...cart.slice(0)] : [...cart.slice(0, 1)]).map((item) => (
              <ItemContainer>
                <ItemImage src={`images/cart/image-${item.slug}.jpg`} />
                <div>
                  <ItemName>
                    {item.slug.split('-')[0]}{' '}
                    <LightParagraph>x{item.quantity}</LightParagraph>
                  </ItemName>
                  <LightParagraph>
                    $ {item.quantity * item.price}
                  </LightParagraph>
                </div>
              </ItemContainer>
            ))}
            <ToggleText onClick={() => setShow((e) => !e)}>
              {show ? 'View Less' : `and ${cart.slice(1).length} other item(s)`}
            </ToggleText>
          </Products>
          <TotalWrap>
            <GrandTotalText>GRAND TOTAL</GrandTotalText>
            <Total>$ {total.toLocaleString()}</Total>
          </TotalWrap>
        </Container>
        <BackHomeButton onClick={handleClick}>BACK TO HOME</BackHomeButton>
      </Wrapper>
    </Modal>
  )
}

export default OrderConfirmed
