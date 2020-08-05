import React from "react";
import { MiniModeConsumer } from "../../context/MiniMode";
import {
  ButtonStyled,
  HeadingStyled,
  StickyBannerStyled
} from "./styles/Styled";

function StickyBanner(props) {
  const { className, heading, buttons } = props;

  function showButtons(buttonList) {
    return buttonList && buttonList.map(button => (
      <ButtonStyled
        label={button.label}
        icon={button.icon}
        buttonType={button.buttonType}
        backgroundColor={button.backgroundColor}
        ariaLabel={button.ariaLabel}
      />
    ));
  }

  return (
    <MiniModeConsumer>
      {
        miniMode => (
          <StickyBannerStyled className={className}>
            {heading.title && (
              <HeadingStyled
                rank={heading.rank}
                text={heading.title}
                size={heading.size}
                ariaLabelledby={heading.title}
              />
            )}

            {showButtons(miniMode.active ? buttons.mini : buttons.full)}
          </StickyBannerStyled>
        )
      }
    </MiniModeConsumer>
  );
}

export default StickyBanner;
