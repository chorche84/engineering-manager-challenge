import React from "react";
import { MiniModeConsumer } from "../../../context/MiniMode";
import Header from "../../../components/Header";

const header = {
  label: "Menu",
  list: {
    full: {
      explore: {
        text: "Explore",
        url: "#",
        role: "link"
      },
      toggleMiniMode: {
        text: "Toggle Mini Mode",
        url: "#",
        role: "button"
      }
    },
    mini: {
      toggleMiniMode: {
        text: "Toggle Mini Mode",
        url: "#",
        role: "button"
      }
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
};

function adaptList(list, miniMode) {
  const adaptedList = miniMode.active ? list.mini : list.full;

  if (adaptedList.toggleMiniMode) {
    adaptedList.toggleMiniMode.onClick = miniMode.toggle;
  }

  return adaptedList;
}

function adaptProps (props, header, miniMode) {
  const adaptedList = adaptList(header.list, miniMode);

  return {
    ...props,
    ...header,
    list: adaptedList,
    showEmptyDropdown: miniMode.active
  };
}

function LandingHeader(props) {

  return (
    <MiniModeConsumer>
      { miniMode => {
      	  const adaptedProps = adaptProps(props, header, miniMode);
	        return (<Header { ...adaptedProps } />);
	      }
      }
    </MiniModeConsumer>
  );
}

export default LandingHeader;
