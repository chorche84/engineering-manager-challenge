import React from "react";
import { MiniModeConsumer } from "../../../context/MiniMode";
import Footer from "../../../components/Footer";

const LandingFooter = () => {
  return (
    <MiniModeConsumer>
      {
        miniMode => (
          <Footer miniMode={miniMode} />
        )
      }
    </MiniModeConsumer>
  );
}

export default LandingFooter;
