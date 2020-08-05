import React, { useState, useEffect } from "react";
import { MiniModeConsumer } from "../../context/MiniMode";
import { Dropdown } from "../Dropdown";
import Menu from "../Menu";
import { Logo } from "../Logo";
import { HeaderStyled, BurgerStyled, ListStyled, EmptyDropdownStyled } from "./styles/Styled";

function Header(props) {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const { dropDown, list, label, stickyBanner } = props;

  useEffect(() => {
    document.body.classList.toggle("noScrolling", isBurgerMenuOpen);
  });

  function handleOpened() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  function adaptList(list, minimode) {
    const adaptedList = minimode.active ? list.mini : list.full;

    if (adaptedList.toggleMiniMode) {
      adaptedList.toggleMiniMode.onClick = minimode.toggle;
    }

    return adaptedList;
  }

  function showList(list, minimode) {
    const adaptedList = adaptList(list, minimode);
    return (<ListStyled data={adaptedList} link/>);
  }

  function showDropdown (dropDown, miniModeActive) {
    if (miniModeActive) {
      return <EmptyDropdownStyled />;
    } else {
      return <Dropdown {...dropDown}/>;
    }
  }

  return (
    <MiniModeConsumer>
      { miniMode => (
        <HeaderStyled>
          <BurgerStyled
            isOpened={isBurgerMenuOpen}
            onClick={handleOpened}
            ariaLabel={label}
          />
          <Menu isOpened={isBurgerMenuOpen}  stickyBanner={stickyBanner}/>
          <Logo />
          <nav>
            { showList(list, miniMode) }
            { showDropdown(dropDown, miniMode.active) }
          </nav>
        </HeaderStyled>
      )}
    </MiniModeConsumer>
  );
}

export default Header;
