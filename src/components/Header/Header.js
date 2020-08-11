import React, { useState, useEffect } from "react";
import { Dropdown } from "../Dropdown";
import Menu from "../Menu";
import { Logo } from "../Logo";
import { HeaderStyled, BurgerStyled, ListStyled, EmptyDropdownStyled, StickyBannerStyled } from "./styles/Styled";

function Header(props) {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const { dropDown, list, label, stickyBanner, showEmptyDropdown } = props;

  useEffect(() => {
    document.body.classList.toggle("noScrolling", isBurgerMenuOpen);
  });

  function handleOpened() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  function showDropdown (dropDown, showEmptyDropdown) {
    if (showEmptyDropdown) {
      return <EmptyDropdownStyled />;
    } else {
      return <Dropdown {...dropDown}/>;
    }
  }

  return (
    <HeaderStyled>
      <BurgerStyled
        isOpened={isBurgerMenuOpen}
        onClick={handleOpened}
        ariaLabel={label}
      />
      <Menu isOpened={isBurgerMenuOpen}>
        <StickyBannerStyled heading={stickyBanner.mobileHeading} buttons={stickyBanner.buttons}/>
      </Menu>
      <Logo />
      <nav>
        <ListStyled data={list} link/>
        { showDropdown(dropDown, showEmptyDropdown) }
      </nav>
    </HeaderStyled>
  );
}

export default Header;
