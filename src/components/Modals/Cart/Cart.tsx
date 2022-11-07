import {
  CartHeader,
  CartImage,
  CartLength,
  CartTotal,
  CheckoutLink,
  Container,
  Item,
  ItemContainer,
  ItemsContainer,
  Name,
  Price,
  RemoveAllButton,
  TotalPrice,
  TotalText,
  Wrapper,
} from "./cart-styles";
import React, { useEffect } from "react";
import { decrement, increment, removeAll } from "features/cartSlice";
import { nav_drop_down, slide_animation } from "global/animation";
import { useAppDispatch, useAppSelector } from "app/hooks";

import { AnimatePresence } from "framer-motion";
import EmptyCart from "./EmptyCart";
import QuantityButton from "components/shared/QuantityButton/QuantityButton";
import { closeModal } from "features/modalSlice";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { cart, total } = useAppSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [JSON.stringify(cart)]);

  return (
    <>
      <Container
        variants={slide_animation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <AnimatePresence>
          {cart.length === 0 && <EmptyCart />}
          {cart.length !== 0 && (
            <Wrapper
              variants={nav_drop_down}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <CartHeader>
                <CartLength>CART ({cart.length})</CartLength>
                <RemoveAllButton onClick={() => dispatch(removeAll())}>
                  Remove All
                </RemoveAllButton>
              </CartHeader>
              <ItemsContainer>
                <AnimatePresence mode="sync">
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
              <CheckoutLink
                to="/checkout"
                onClick={() => dispatch(closeModal())}
              >
                Checkout
              </CheckoutLink>
            </Wrapper>
          )}
        </AnimatePresence>
      </Container>
    </>
  );
};

export default Cart;
