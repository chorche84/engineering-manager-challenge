import React from "react";
import { MiniModeConsumer } from "../../../context/MiniMode";
import getStickyBanner from '../../../repositories/getStickyBanner';
import StickyBanner from "../../../components/StickyBanner";

function LandingStickyBanner() {
  return (
    <MiniModeConsumer>
      {
        miniMode => {
          const { heading, buttons } = getStickyBanner(miniMode.active);

          return (
            <StickyBanner heading={heading} buttons={buttons} />
          )
        }
      }
    </MiniModeConsumer>
  );
}

export default LandingStickyBanner;
