import React from "react";
import { MiniModeConsumer } from "../../../context/MiniMode";
import getHeaderData from '../../../repositories/getHeaderData';
import Header from "../../../components/Header";

function adaptList(list, miniMode) {
  let adaptedList = { ...list };

  if (adaptedList.toggleMiniMode) {
    adaptedList.toggleMiniMode = { ...adaptedList.toggleMiniMode, onClick: miniMode.toggle };
  }

  return adaptedList;
}

function adaptProps (props, header, miniMode) {
  return {
    ...props,
    ...header,
    list: adaptList(header.list, miniMode),
    showEmptyDropdown: miniMode.active
  };
}

const LandingHeader = (props) => {
  return (
    <MiniModeConsumer>
      { miniMode => {
          const header = getHeaderData(miniMode.active);
          const adaptedProps = adaptProps(props, header, miniMode);

          return (<Header { ...adaptedProps } />);
        }
      }
    </MiniModeConsumer>
  );
}

export default LandingHeader;
