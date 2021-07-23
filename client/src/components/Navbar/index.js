import React, { useState } from "react";
import { Nav, MenuBars, NavMenu } from "./NavbarElements.js";
import { NavLink } from "react-router-dom";
import { menuData } from "../../data/MenuData.js";
import "./style.css";

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink
            activeClassName="active"
            className="main-nav"
            to={item.link}
            key={index}
          >
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
