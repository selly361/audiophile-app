import { NavItem, StyledNavItems } from "./navitems-styles";

import { navigations } from "./navigations";

const NavItems = () => {
  return (
    <StyledNavItems>
      {navigations.map((nav) => (
        <NavItem
          to={nav.path}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {nav.label}
        </NavItem>
      ))}
    </StyledNavItems>
  );
};

export default NavItems;
