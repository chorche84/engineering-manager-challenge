import React from "react";
import { MiniModeConsumer } from "../../context/MiniMode";
import FooterNav from "../FooterNav";
import { FooterStyled, LogoStyled } from "./styles/Styled";

function Footer({ children }) {
  const currentYear = new Date().getFullYear();

  return (
    <FooterStyled>
      <FooterNav />
      { children }
      <div>
        <small>© {currentYear}</small>
        <LogoStyled />
      </div>
    </FooterStyled>
  );
}

export default Footer;
