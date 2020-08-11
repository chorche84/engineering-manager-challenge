import React from "react";
import { MiniModeConsumer } from "../../../context/MiniMode";
import StickyBanner from "../../../components/StickyBanner";

function LandingStickyBanner(props) {
  const { heading, buttons } = props;

  return (
    <MiniModeConsumer>
      {
        miniMode => (
          <StickyBanner heading={heading} buttons={buttons} miniMode={miniMode} />
        )
      }
    </MiniModeConsumer>
  );
}

export default LandingStickyBanner;
