import { CartIcon, LogoIcon } from "../../../assets/shared/desktop";

import NavItems from "../../shared/NavItems/NavItems";
import { StyledHeader, NavContainer } from "header-styles";



const Header = () => {
  return (
    <StyledHeader>
      <NavContainer>
        <LogoIcon />
          <NavItems />
        <CartIcon />
      </NavContainer>
    </StyledHeader>
  );
};

export default Header;

 
  
