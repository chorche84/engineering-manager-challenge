import React, { useState, useEffect } from "react";
import { Dropdown } from "../Dropdown";
import Menu from "../Menu";
import { Logo } from "../Logo";
import { HeaderStyled, BurgerStyled, ListStyled } from "./styles/Styled";

function Header(props) {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const { data } = props;

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
        ariaLabel={data.label}
      />
      <Menu isOpened={isBurgerMenuOpen} />
      <Logo />
      <nav>
        <ListStyled data={data.list} link/>
        {
          data.dropDown &&
          (<Dropdown
            items={data.dropDown.items}
            icon={data.dropDown.icon}
            optionsPosition={data.dropDown.optionsPosition}
            selectedItem={data.dropDown.selectedItem}
          />)
        }
      </nav>
    </HeaderStyled>
  );
}

export default Header;
