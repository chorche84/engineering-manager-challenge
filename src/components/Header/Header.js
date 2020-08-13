import React, { useState, useEffect } from "react";
import Menu from "components/Menu";
import { Logo } from "components/Logo";
import { HeaderStyled, BurgerStyled, ListStyled } from "./styles/Styled";

function Header(props) {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const { dropDown, list, label, stickyBanner, menuContent, rightContent } = props;

  useEffect(() => {
    document.body.classList.toggle("noScrolling", isBurgerMenuOpen);
  });

  function handleOpened() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  return (
    <HeaderStyled>
      <BurgerStyled
        isOpened={isBurgerMenuOpen}
        onClick={handleOpened}
        ariaLabel={label}
      />
      <Menu isOpened={isBurgerMenuOpen}>
        { menuContent }
      </Menu>
      <Logo />
      <nav>
        <ListStyled data={list} link/>
        { rightContent }
      </nav>
    </HeaderStyled>
  );
}

export default Header;
