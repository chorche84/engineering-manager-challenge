import React from "react";
import { MenuStyled, NavStyled, NavItemStyled, LinkStyled, StickyBannerStyled } from "./styles/Styled";

const Menu = ({ className, isOpened, stickyBanner }) => {
  return (
    <MenuStyled className={className} isOpened={isOpened}>
      <NavStyled>
        <NavItemStyled>
          <LinkStyled href="">Explore</LinkStyled>
        </NavItemStyled>
        <NavItemStyled>
          <LinkStyled href="">Login</LinkStyled>
        </NavItemStyled>
      </NavStyled>
      <StickyBannerStyled heading={stickyBanner.mobileHeading} buttons={stickyBanner.buttons}/>
    </MenuStyled>
  );
};

export default Menu;
