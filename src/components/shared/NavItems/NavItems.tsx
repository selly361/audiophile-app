import { NavLink } from 'react-router-dom';
import React from 'react'
import { headingFourFontStyle } from '../../../utilities/defaultStyles';
import styled from 'styled-components';

const StyledNavItems = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

const NavItem = styled(NavLink)`
  ${headingFourFontStyle}
  font-size: 13px;
  color: white;
  
  &:hover {
    color: #D87D4A;
  }

  &.active {
    color: #d87d4a;
  }
`;

const NavItems = () => {
  const navs = ["home", "headphones", "speakers", "earphones"];
  return (
    <StyledNavItems>
    {navs.map((nav) => (
      <NavItem to={nav} className={(isActive) => isActive && "active"}>
        {nav}
      </NavItem>
    ))}
  </StyledNavItems>
  )
}

export default NavItems