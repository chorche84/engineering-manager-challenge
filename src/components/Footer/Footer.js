import React from "react";
import { MiniModeConsumer } from "../../context/MiniMode";
import FooterNav from "../FooterNav";
import { FooterStyled, LogoStyled, AppLogosStyled } from "./styles/Styled";

function Footer() {
  const currentYear = new Date().getFullYear();

  function showAppLogos (showMiniMode) {
    if (!showMiniMode) {
      return <AppLogosStyled />;
    } 
  }

  return (
    <MiniModeConsumer>
      {
        miniMode => (
          <FooterStyled>
            <FooterNav />
            { showAppLogos(miniMode.active) }
            <div>
              <small>© {currentYear}</small>
              <LogoStyled />
            </div>
          </FooterStyled>
        )
      }
    </MiniModeConsumer>
  );
}

export default Footer;
