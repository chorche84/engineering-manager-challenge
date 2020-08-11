import React from "react";
import { MiniModeConsumer } from "../../context/MiniMode";
import FooterNav from "../FooterNav";
import { FooterStyled, LogoStyled, AppLogosStyled } from "./styles/Styled";

function Footer({ miniMode }) {
  const currentYear = new Date().getFullYear();

  function showAppLogos (showMiniMode) {
    if (!showMiniMode) {
      return <AppLogosStyled />;
    } 
  }

  return (
    <FooterStyled>
      <FooterNav />
      { showAppLogos(miniMode.active) }
      <div>
        <small>© {currentYear}</small>
        <LogoStyled />
      </div>
    </FooterStyled>
  );
}

export default Footer;
