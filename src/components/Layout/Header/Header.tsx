import { CartIcon, LogoIcon } from "assets/shared/desktop";
import { Category, NavItems, Overlay } from "components/shared";
import {
  CategoryWrapper,
  LogoWrapper,
  NavContainer,
  StyledHeader,
} from "./header-styles";
import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";
import { ReactComponent as BurgerIcon } from "assets/shared/tablet/icon-hamburger.svg";
import { nav_drop_down } from "global/animation";
import { useMatchMedia } from "hooks/useMatchMedia";

const Header = () => {
  const { isDesktopSize } = useMatchMedia();
  const [open, setOpen] = useState(false);

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
            <LogoIcon />
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
                <Category />
              </CategoryWrapper>
            )}
          </AnimatePresence>

          <CartIcon />
        </NavContainer>
      </StyledHeader>
      <Overlay open={open} handleReset={handleReset} />
    </>
  );
};

export default Header;
