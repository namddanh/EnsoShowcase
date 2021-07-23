import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;

export const MenuBars = styled(CgMenuRight)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    // background-image: url(); <-{Bars}
    // background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
    color: #fff;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  // margin-right: -48px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = css`
  display: flex;
  align-items: center;
  margin: 0 2rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

export const NavMenuLinks = styled(Link)`
  ${NavLink}
  font-family: 'BenchNine', sans-serif;
  font-size: 1.5em;
  color: #fff;
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
