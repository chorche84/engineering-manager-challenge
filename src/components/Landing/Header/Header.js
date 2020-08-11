import React from "react";
import { MiniModeConsumer } from "../../../context/MiniMode";
import getHeaderData from '../../../repositories/getHeaderData';
import getStickyBanner from '../../../repositories/getStickyBanner';
import Header from "../../../components/Header";

function adaptList(list, miniMode) {
  let adaptedList = { ...list };

  if (adaptedList.toggleMiniMode) {
    adaptedList.toggleMiniMode = { ...adaptedList.toggleMiniMode, onClick: miniMode.toggle };
  }

  return adaptedList;
}

function adaptProps (header, stickyBanner, miniMode) {
  return {
    ...header,
    stickyBanner,
    list: adaptList(header.list, miniMode),
    showEmptyDropdown: miniMode.active
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
