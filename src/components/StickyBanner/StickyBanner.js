import React from "react";
import {
  ButtonStyled,
  HeadingStyled,
  StickyBannerStyled
} from "./styles/Styled";

const data = {
  heading: {
    rank: 5,
    size: "default"
  },
  buttons: [{
    label: "Email",
    icon: "email",
    buttonType: "secondary",
    ariaLabel: "Email"
  }, {
    label: "Mobile",
    icon: "phone",
    buttonType: "primary",
    ariaLabel: "Mobile"
  }, {
    label: "Facebook",
    icon: "facebook",
    buttonType: "primary",
    ariaLabel: "Facebook",
    backgroundColor: "#4760a0"
  }]
};

function StickyBanner({ className, title }) {
  const { heading, buttons } = data;

  return (
    <StickyBannerStyled className={className}>
      {title && (
        <HeadingStyled
          rank={heading.rank}
          text={title}
          size={heading.size}
          ariaLabelledby={title}
        />
      )}

      {buttons.map(button => (
        <ButtonStyled
          label={button.label}
          icon={button.icon}
          buttonType={button.buttonType}
          backgroundColor={button.backgroundColor}
          ariaLabel={button.ariaLabel}
        />
      ))}
    </StickyBannerStyled>
  );
}

export default StickyBanner;
