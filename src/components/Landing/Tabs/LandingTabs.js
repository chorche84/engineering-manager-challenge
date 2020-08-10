import React from "react";
import { MiniModeConsumer } from "../../../context/MiniMode";
import {
  TabUser as Tab1,
  TabDevices as Tab2,
  TabDownload as Tab3
} from ".";
import { Tabs } from "../../../components/Tabs";

const layout = [
  { tabTitle: "Subscription", tabIcon: "user", visibleInMiniMode: true, tabContent: <Tab1 /> },
  { tabTitle: "Devices", tabIcon: "devices", visibleInMiniMode: false, tabContent: <Tab2 /> },
  { tabTitle: "Download", tabIcon: "download", visibleInMiniMode: true, tabContent: <Tab3 /> }
];

const LandingTabs = () => {
  return (
    <MiniModeConsumer>
      {
        miniMode => (
          <Tabs miniModeActive={miniMode.active} layout={layout} />
        )
      }
    </MiniModeConsumer>
  );
}

export default LandingTabs;
