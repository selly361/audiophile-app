import { NavItem, StyledNavItems } from "./navitems-styles";

import { navigations } from "../../../data/navigations";

const NavItems = ({ className }: { className?: string }) => {
  return (
    <StyledNavItems className={className}>
      {navigations.map((nav) => (
        <NavItem
          to={nav.path}
          className={({ isActive }) => (isActive ? 'active' : '')}
          end
        >
          {nav.label}
        </NavItem>
      ))}
    </StyledNavItems>
  );
};

export default NavItems;
