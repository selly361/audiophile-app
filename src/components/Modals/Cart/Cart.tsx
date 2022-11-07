import { AnimatePresence } from "framer-motion";

import React, { useEffect } from "react";
import { decrement, increment, removeAll } from "features/cartSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";

import EmptyCart from "./EmptyCart";
import QuantityButton from "components/shared/QuantityButton/QuantityButton";
import { closeModal } from "features/modalSlice";
import { slide_animation } from "global/animation";

import {
  CheckoutLink,
  TotalPrice,
  TotalText,
  CartTotal,
  Price,
  Name,
  Item,
  ItemContainer,
  ItemsContainer,
  CartImage,
  RemoveAllButton,
  CartLength,
  CartHeader,
  Wrapper,
  Container,
} from "./cart-styles.ts";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { cart, total } = useAppSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [JSON.stringify(cart)]);

  return (
    <AnimatePresence mode="wait">
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <Container
          variants={slide_animation}
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
              <AnimatePresence mode="wait">
                {cart.map((item, index) => (
                  <ItemContainer
                    key={index}
                    initial={{ scale: 0.8, opacity: 0, x: "-100px" }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      x: 0,
                      transition: { delay: (index + 1) / 2, duration: 0.5 },
                    }}
                  >
                    <Item>
                      <CartImage src={`images/cart/image-${item.slug}.jpg`} />
                      <div>
                        <Name>{item.slug.split("-")[0]}</Name>
                        <Price>${item.price.toLocaleString()}</Price>
                      </div>
                    </Item>
                    <QuantityButton
                      decrement={() => dispatch(decrement({ id: item.id }))}
                      quantity={item.quantity}
                      increment={() => dispatch(increment({ id: item.id }))}
                    />
                  </ItemContainer>
                ))}
              </AnimatePresence>
            </ItemsContainer>
            <CartTotal>
              <TotalText>TOTAL</TotalText>
              <TotalPrice>${total.toLocaleString()}</TotalPrice>
            </CartTotal>
            <CheckoutLink to="/checkout" onClick={() => dispatch(closeModal())}>
              Checkout
            </CheckoutLink>
          </Wrapper>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default Cart;
