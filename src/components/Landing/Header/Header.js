import React from "react";
import { MiniModeConsumer } from "../../../context/MiniMode";
import getHeaderData from '../../../repositories/getHeaderData';
import getStickyBanner from '../../../repositories/getStickyBanner';
import Header from "../../Header";
import { Dropdown } from "../../Dropdown";
import { StickyBannerStyled, EmptyDropdownStyled } from  "../../Header/styles/Styled";

function adaptList(list, miniMode) {
  let adaptedList = { ...list };

  if (adaptedList.toggleMiniMode) {
    adaptedList.toggleMiniMode = { ...adaptedList.toggleMiniMode, onClick: miniMode.toggle };
  }

  return adaptedList;
}

function getMenuContentComponent ({mobileHeading, buttons}) {
  return <StickyBannerStyled heading={mobileHeading} buttons={buttons} />;
}

function getRightContentComponent (header, miniMode) {
  if (miniMode.active) {
    return <EmptyDropdownStyled />;
  } else {
    return <Dropdown {...header.dropDown} />;
  }
}

function adaptProps (header, stickyBanner, miniMode) {
  return {
    ...header,
    list: adaptList(header.list, miniMode),
    menuContent: getMenuContentComponent(stickyBanner),
    rightContent: getRightContentComponent(header, miniMode)
  };
}

const LandingHeader = () => {
  return (
    <MiniModeConsumer>
      { miniMode => {
          const header = getHeaderData(miniMode.active);
          const stickyBanner = getStickyBanner(miniMode.active);
          const adaptedProps = adaptProps(header, stickyBanner, miniMode);

          return (<Header { ...adaptedProps } />);
        }
      }
    </MiniModeConsumer>
  );
}

export default LandingHeader;
