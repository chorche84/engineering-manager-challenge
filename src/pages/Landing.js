import React, { useState } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Landing/Hero";
import WeAre from "../components/Landing/WeAre";
import Trending from "../components/Landing/Trending";
import Promo from "../components/Landing/Promo";
import { Tabs } from "../components/Tabs";
import StickyBanner from "../components/StickyBanner";
import {
  TabUser as Tab1,
  TabDevices as Tab2,
  TabDownload as Tab3
} from "../components/Landing/Tabs";

const fullLandingData = {
  header: {
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
        role: "button"
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
  },
  tabsLayout: () => [
    { tabTitle: "Subscription", tabIcon: "user", tabContent: <Tab1 /> },
    { tabTitle: "Devices", tabIcon: "devices", tabContent: <Tab2 /> },
    { tabTitle: "Download", tabIcon: "download", tabContent: <Tab3 /> }
  ]
};

const miniModeData = {
  header: {
    label: "Menu",
    list: {
      toggleMiniMode: {
        text: "Toggle Mini Mode",
        url: "#",
        role: "button"
      }
    }
  },
  tabsLayout: () => [
    { tabTitle: "Subscription", tabIcon: "user", tabContent: <Tab1 /> },
    { tabTitle: "Download", tabIcon: "download", tabContent: <Tab3 /> }
  ]
};

const Landing = () => {

  const [miniModeActive, setMiniMode] = useState(false);

  function toggleMiniMode () {
    setMiniMode(!miniModeActive);
  }

  function getData () {
    const modeData = miniModeActive ? miniModeData : fullLandingData;
    modeData.header.list.toggleMiniMode.onClick = toggleMiniMode;

    return modeData;
  }

  const data = getData();

  return (
    <>
      <Layout onToggleMiniModeClicked={() => toggleMiniMode()} headerData={data.header}>
        <Hero
          background={"/images/starzplay_covers"}
          heroTitle="Imagine the best entertainment all in one place"
          icon={"languageGlobe"}
          size={"largest"}
        />
        <WeAre />
        <Trending />
        <Promo
          background={"/images/promo1"}
          backgroundLocale={true}
          text="Turn your Smart TV into <strong>Brillian TV</strong>"
          direction={"end"}
        />
        <Promo
          background={"/images/promo2"}
          backgroundLocale={true}
          text="Get <strong>thousands</strong> of titles in your pocket"
          direction="start"
        />
        <Tabs layout={data.tabsLayout()} />
      </Layout>
      <StickyBanner title="Start your free trial. Sign up with:" />
    </>
  );
};

export default Landing;
