import React from "react";
import { MenuStyled, NavStyled, NavItemStyled, LinkStyled } from "./styles/Styled";

const Menu = ({ className, isOpened, children }) => {
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
      { children }
    </MenuStyled>
  );
};

export default Menu;
