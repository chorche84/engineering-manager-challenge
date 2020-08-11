import React from "react";
import {
  ButtonStyled,
  HeadingStyled,
  StickyBannerStyled
} from "./styles/Styled";

function StickyBanner(props) {
  const { className, heading, buttons, miniMode } = props;

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
    <StickyBannerStyled className={className}>
      {heading.title && (
        <HeadingStyled
          rank={heading.rank}
          text={heading.title}
          size={heading.size}
          ariaLabelledby={heading.title}
        />
      )}

      {showButtons(miniMode && miniMode.active ? buttons.mini : buttons.full)}
    </StickyBannerStyled>
  );
}

export default StickyBanner;
