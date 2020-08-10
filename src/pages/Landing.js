import React, { useState } from "react";
import { MiniModeProvider } from "../context/MiniMode";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Landing/Hero";
import WeAre from "../components/Landing/WeAre";
import Trending from "../components/Landing/Trending";
import Promo from "../components/Landing/Promo";
import StickyBanner from "../components/StickyBanner";
import { LandingTabs } from "../components/Landing/Tabs";

const data = {
  header: {
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
  },
  stickyBanner: {
    heading: {
      title: "Start your free trial. Sign up with:",
      rank: 5,
      size: "default"
    },
    mobileHeading: {
      title: "Signup",
      rank: 5,
      size: "default"
    },
    buttons: {
      full: [{
        label: "Email",
        icon: "email",
        buttonType: "secondary",
        ariaLabel: "Email"
      }, {
        label: "Mobile",
        icon: "phone",
        buttonType: "primary",
        ariaLabel: "Mobile"
      }, {
        label: "Facebook",
        icon: "facebook",
        buttonType: "primary",
        ariaLabel: "Facebook",
        backgroundColor: "#4760a0"
      }],
      mini: [{
        label: "Email",
        icon: "email",
        buttonType: "secondary",
        ariaLabel: "Email"
      }, {
        label: "Mobile",
        icon: "phone",
        buttonType: "primary",
        ariaLabel: "Mobile"
      }]
    }
  }
};

const Landing = () => {
  return (
    <MiniModeProvider>
      <Header label={data.header.label} list={data.header.list} dropDown={data.header.dropDown} stickyBanner={data.stickyBanner}/>
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
      <LandingTabs />
      <Footer/>
      <StickyBanner heading={data.stickyBanner.heading} buttons={data.stickyBanner.buttons}/>
    </MiniModeProvider>
  );
};

export default Landing;
