import React from "react";
import { MiniModeConsumer } from "../../../context/MiniMode";
import {
  TabUser as Tab1,
  TabDevices as Tab2,
  TabDownload as Tab3
} from ".";
import { Tabs } from "../../../components/Tabs";

const layout = [
  { tabTitle: "Subscription", tabIcon: "user", index: 0, tabContent: <Tab1 /> },
  { tabTitle: "Devices", tabIcon: "devices", index: 1, tabContent: <Tab2 /> },
  { tabTitle: "Download", tabIcon: "download", index: 2, tabContent: <Tab3 /> }
];

const miniModeLayout = [
  { tabTitle: "Subscription", tabIcon: "user", index: 0, tabContent: <Tab1 /> },
  { tabTitle: "Download", tabIcon: "download", index: 2, tabContent: <Tab3 /> }
];

const getLayout = (miniMode) => {
  return miniMode.active ? miniModeLayout : layout;
}

const LandingTabs = () => {
  return (
    <MiniModeConsumer>
      {
        miniMode => (
          <Tabs layout={getLayout(miniMode)} />
        )
      }
    </MiniModeConsumer>
  );
}

export default LandingTabs;
