import { NavLink } from 'react-router-dom';
import { headingFourFontStyle } from 'utilities/defaultStyles';
import styled from "styled-components";

export const StyledNavItems = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;

  @media (max-width: 568px){
    &.footer-nav {
      flex-flow: column;
      align-items: center;
      width: 100%;
  }
  }
`;

export const NavItem = styled(NavLink)`
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