import React, { useState, useEffect } from "react";
import { Dropdown } from "../Dropdown";
import Menu from "../Menu";
import { Logo } from "../Logo";
import { HeaderStyled, BurgerStyled, ListStyled } from "./styles/Styled";

function Header(props) {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const { dropDown, list, label, stickyBanner } = props;

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
      <Menu isOpened={isBurgerMenuOpen}  stickyBanner={stickyBanner}/>
      <Logo />
      <nav>
        <ListStyled data={list} link/>
        {
          dropDown &&
          (<Dropdown {...dropDown}/>)
        }
      </nav>
    </HeaderStyled>
  );
}

export default Header;
