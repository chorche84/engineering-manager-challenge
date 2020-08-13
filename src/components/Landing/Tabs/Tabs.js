import React from "react";
import { MiniModeConsumer } from "context/MiniMode";
import getTabsLayout from 'repositories/getTabsLayout';
import {
  TabUser as Tab1,
  TabDevices as Tab2,
  TabDownload as Tab3
} from ".";
import { Tabs } from "../../../components/Tabs";

const TAB_CONTENTS = [<Tab1 />, <Tab2 />, <Tab3 />];

const assignLayoutToTabContent = (layout) => {
  return layout.map(tab => {
    return {
      ...tab,
      tabContent: TAB_CONTENTS[tab.index]
    }
  });
}

const getLayout = (miniMode) => {
  const selectedLayout = getTabsLayout(miniMode.active);
  return assignLayoutToTabContent(selectedLayout);
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
