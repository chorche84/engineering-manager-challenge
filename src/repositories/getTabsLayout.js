const layout = [
  { tabTitle: "Subscription", tabIcon: "user", index: 0 },
  { tabTitle: "Devices", tabIcon: "devices", index: 1 },
  { tabTitle: "Download", tabIcon: "download", index: 2 }
];

const miniModeLayout = [
  { tabTitle: "Subscription", tabIcon: "user", index: 0 },
  { tabTitle: "Download", tabIcon: "download", index: 2 }
];

const getTabsLayout = (miniModeActive) => {
  return miniModeActive ? miniModeLayout : layout;
}

export default getTabsLayout;
