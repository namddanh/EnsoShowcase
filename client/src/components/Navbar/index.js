import React from "react";
import { Nav, MenuBars, NavMenu, NavMenuLinks } from "./NavbarElements.js";
import { menuData } from "../../data/MenuData.js";

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
