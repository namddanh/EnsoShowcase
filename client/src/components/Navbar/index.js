import React from "react";
import {
  Nav,
  Logo,
  MenuBars,
  NavMenu,
  NavMenuLinks,
  NavBtn,
} from "./NavbarElements.js";
import { Button } from "../Button";
import { menuData } from "../../data/MenuData.js";

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">ELIXR</Logo>
      <MenuBars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
