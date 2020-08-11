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

const getListForSelectedMode = (list, miniModeActive) => {
  return miniModeActive ? header.list.mini : header.list.full;
}

const getHeaderData = (miniModeActive) => {
  return {
    ...header,
    list: getListForSelectedMode(header.list, miniModeActive)
  };
}

export default getHeaderData;
