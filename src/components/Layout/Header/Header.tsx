import { BurgerIcon, CartIcon, LogoIcon } from "assets/icons";
import { Category, NavItems, Overlay } from "components/shared";
import {
  CategoryWrapper,
  IconWrapper,
  LogoWrapper,
  NavContainer,
  Notification,
  StyledHeader
} from "./header-styles";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { nav_drop_down } from "global/animation";
import { openModal } from "features/modalSlice";
import { useMatchMedia } from "hooks/useMatchMedia";

const Header = () => {
  const { isDesktopSize } = useMatchMedia();
  const [open, setOpen] = useState(false);
  const { cart } = useAppSelector(state => state.cart)
  const dispatch = useAppDispatch()

  const handleReset = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (isDesktopSize) {
      handleReset();
    }
  }, [isDesktopSize]);

  return (
    <>
      <StyledHeader>
        <NavContainer>
          <LogoWrapper>
            {!isDesktopSize && <BurgerIcon onClick={() => setOpen(!open)} />}
            <Link to="/">
              <LogoIcon />
            </Link>
          </LogoWrapper>
          {isDesktopSize && <NavItems />}
          <AnimatePresence>
            {open && (
              <CategoryWrapper
                variants={nav_drop_down}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Category animate={false} />
              </CategoryWrapper>
            )}
          </AnimatePresence>
          <IconWrapper>
            {cart.length !== 0 && <Notification>{cart.length}</Notification>}
            <CartIcon onClick={() => dispatch(openModal({ type: "cart" }))} />
          </IconWrapper>
        </NavContainer>
      </StyledHeader>
      <Overlay zIndex="30" open={open} handleReset={handleReset} />
    </>
  );
};

export default Header;
