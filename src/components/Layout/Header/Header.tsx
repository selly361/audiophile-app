import { CartIcon, LogoIcon } from "assets/shared/desktop";
import { NavContainer, StyledHeader } from "./header-styles";

import { ReactComponent as BurgerIcon } from "assets/shared/tablet/icon-hamburger.svg"
import Category from "components/shared/Category/Category";
import NavItems from "components/shared/NavItems/NavItems";
import { useMatchMedia } from "hooks/useMatchMedia";
import { useState } from "react";

const Header = () => {
  const { isDesktopSize } = useMatchMedia()
  const [open, setOpen] = useState(false)
  return (
    <StyledHeader>
      <NavContainer>
        {!isDesktopSize && <BurgerIcon />}
        <LogoIcon />
        {isDesktopSize && <NavItems />}
        {(!isDesktopSize && open) && <Category />}
        <CartIcon />
      </NavContainer>
    </StyledHeader>
  );
};

export default Header;

 
  
