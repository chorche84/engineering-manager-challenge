import React from "react";
import { MiniModeConsumer } from "../../../context/MiniMode";
import Footer from "../../../components/Footer";
import { AppLogosStyled } from "../../../components/Footer/styles/Styled";

const LandingFooter = () => {
  return (
    <MiniModeConsumer>
      {
        miniMode => (
          <Footer miniMode={miniMode}>
            {
              !miniMode.active && <AppLogosStyled />
            }
          </Footer>
        )
      }
    </MiniModeConsumer>
  );
}

export default LandingFooter;
