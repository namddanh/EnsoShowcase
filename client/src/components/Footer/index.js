import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterStatement,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer></FooterLinksContainer>
        <FooterStatement>
          LIVE MUSIC, ART, AND GOOD TIMES ©2019 ENSO.
        </FooterStatement>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
