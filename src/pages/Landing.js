import React, { useState } from "react";
import { MiniModeProvider } from "../context/MiniMode";
import getStickyBanner from '../repositories/getStickyBanner';
import LandingHeader from "../components/Landing/Header";
import Footer from "../components/Footer";
import Hero from "../components/Landing/Hero";
import WeAre from "../components/Landing/WeAre";
import Trending from "../components/Landing/Trending";
import Promo from "../components/Landing/Promo";
import LandingStickyBanner from "../components/Landing/StickyBanner";
import { LandingTabs } from "../components/Landing/Tabs";

const stickyBanner = getStickyBanner();

const Landing = () => {
  return (
    <MiniModeProvider>
      <LandingHeader stickyBanner={stickyBanner}/>
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
      <LandingStickyBanner heading={stickyBanner.heading} buttons={stickyBanner.buttons}/>
    </MiniModeProvider>
  );
};

export default Landing;
