import React, { useState, useEffect } from "react";
import { Dropdown } from "../Dropdown";
import Menu from "../Menu";
import { Logo } from "../Logo";
import { HeaderStyled, BurgerStyled, ListStyled } from "./styles/Styled";

function Header(props) {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const { onToggleMiniModeClicked } = props;

  useEffect(() => {
    document.body.classList.toggle("noScrolling", isBurgerMenuOpen);
  });

  function handleOpened() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  const data = {
    label: "Menu",
    list: {
      explore: {
        text: "Explore",
        url: "#",
        role: "link"
      },
      toggleMiniMode: {
        text: "Toggle Mini Mode",
        url: "#",
        role: "button",
        onClick: onToggleMiniModeClicked
      }
    },
    dropDown: {
      items:[
        {
          content: "English",
          value: "en"
        },
        {
          content: "العربية",
          value: "ar"
        },
        {
          content: "Français",
          value: "fr"
        }
      ],
      selectedItem: 0,
      icon: "languageGlobe",
      optionsPosition: "center"
    }
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
        <Dropdown
          items={data.dropDown.items}
          icon={data.dropDown.icon}
          optionsPosition={data.dropDown.optionsPosition}
          selectedItem={data.dropDown.selectedItem}
        />
      </nav>
    </HeaderStyled>
  );
}

export default Header;
