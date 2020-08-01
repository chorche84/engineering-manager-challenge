import React from "react";
import FooterNav from "../FooterNav";
import { FooterStyled, LogoStyled, AppLogosStyled } from "./styles/Styled";

function Footer({ showMiniMode }) {
  const currentYear = new Date().getFullYear();

  function showAppLogos (showMiniMode) {
    if (!showMiniMode) {
      return <AppLogosStyled />;
    } 
  }

  return (
    <FooterStyled>
      <FooterNav />
      { showAppLogos(showMiniMode) }
      <div>
        <small>© {currentYear}</small>
        <LogoStyled />
      </div>
    </FooterStyled>
  );
}

export default Footer;
