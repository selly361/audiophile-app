import { AnimatePresence, motion } from 'framer-motion'
import {
  OrangeButton,
  headingFiveFontStyle,
  headingFourFontStyle,
  primaryFontStyle,
} from 'utilities/defaultStyles'
import React, { useEffect } from 'react'
import { decrement, increment, removeAll } from 'features/cartSlice'
import { useAppDispatch, useAppSelector } from 'app/hooks'

import EmptyCart from './EmptyCart'
import { Link } from 'react-router-dom'
import QuantityButton from 'components/shared/QuantityButton/QuantityButton'
import { cart_animation } from 'global/animation'
import styled from 'styled-components'

const Container = styled(motion.div)`
  position: absolute;
  width: 377px;
  max-height: 500px;
  overflow-y: auto;
  min-height: 188px;
  right: 14vw;
  top: 16vh;
  background: #ffffff;
  border-radius: 8px;
  z-index: 200;
  padding: 2rem;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  gap: 1rem;
`

const CartHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const CartLength = styled.h3`
  ${primaryFontStyle}
  font-size: 18px;
`

const RemoveAllButton = styled.button`
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

const ItemContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button:last-child {
    height: 30px;
  }
`

const Item = styled(motion.div)`
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
`

const CheckoutLink = styled(Link)`
  ${OrangeButton}
  width: 100%;
`

const Cart = () => {
  const dispatch = useAppDispatch()
  const { cart } = useAppSelector((state) => state.cart)

  let total = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0,
  )

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [JSON.stringify(cart)])

  if (cart.length === 0)
    return (
      <Container
        variants={cart_animation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <EmptyCart />
      </Container>
    )

  return (
    <Container
      variants={cart_animation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Wrapper>
        <CartHeader>
          <CartLength>CART ({cart.length})</CartLength>
          <RemoveAllButton onClick={() => dispatch(removeAll())}>
            Remove All
          </RemoveAllButton>
        </CartHeader>
        <ItemsContainer>
            {cart.map((item, index) => (
          <AnimatePresence>
          <ItemContainer
                initial={{ scale: 0.8, opacity: 0, x: '-100px' }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  x: 0,
                  transition: { delay: (index + 1)/2, duration: 0.5 },
                }}
                exit={{ scale: 0.8, opacity: 0, x: '100px' }}
              >
                <Item>
                  <CartImage src={`images/cart/image-${item.slug}.jpg`} />
                  <div>
                    <Name>{item.slug.split('-')[0]}</Name>
                    <Price>${item.price.toLocaleString()}</Price>
                  </div>
                </Item>
                <QuantityButton
                  decrement={() => dispatch(decrement({ id: item.id }))}
                  quantity={item.quantity}
                  increment={() => dispatch(increment({ id: item.id }))}
                />
              </ItemContainer>
              </AnimatePresence>
            ))}
        </ItemsContainer>
        <CartTotal>
          <TotalText>TOTAL</TotalText>
          <TotalPrice>${total.toLocaleString()}</TotalPrice>
        </CartTotal>
        <CheckoutLink to="/checkout">Checkout</CheckoutLink>
      </Wrapper>
    </Container>
  )
}

export default Cart
