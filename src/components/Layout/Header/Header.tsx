import { CartIcon, LogoIcon } from "../../../assets/shared/desktop";

import NavItems from "../../shared/NavItems/NavItems";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100vw;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191919;
`;

const NavContainer = styled.nav`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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

 
  