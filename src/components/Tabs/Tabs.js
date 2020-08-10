import React, { Component } from "react";
import {
  TabsContainerStyled,
  TabListStyled,
  TabStyled,
  TabContentContainerStyled,
  IconStyled,
  LabelStyled
} from "./styles/Styled";
import LoadingSpinner from "../LoadingSpinner";

async function calculateTabToShow(tab) {
  await new Promise(resolve => setTimeout(resolve, 5000));
  return tab;
}

const getMemoizedTab = (() => {
  const cache = {};

  return function (tab) {
    if (cache[tab] !== undefined) {
      return cache[tab];
    } else {
      const tabToShow = calculateTabToShow(tab);
      cache[tab] = tabToShow;

      return tabToShow;
    }
  }
})();

class Tab extends Component {
  shouldComponentUpdate({ isActive }) {
    return (isActive !== this.props.isActive);
  }

  render() {
    const { label, icon, size, className, isActive, onClick } = this.props;

    return (
      <TabStyled className={className} onClick={onClick} size={size} isActive={isActive}>
        {icon && <IconStyled name={icon} isActive={isActive} />}
        {label && <LabelStyled isActive={isActive} title={label}>{label}</LabelStyled>}
      </TabStyled>
    );
  }
}

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingContent: false,
      selectedTab: props.selectedTab || 0
    };
  }

  selectTab = async (tab, index) => {
    const selectedTab = await getMemoizedTab(index);

    this.setState({ selectedTab, loadingContent: false });
    this.props.onTabSelected && this.props.onTabSelected(tab);
  }

  handleClick(tab, index) {
    this.setState({ loadingContent: true });
    this.selectTab(tab, index);
  }

  isTabActive(tabIndex) {
    const { loadingContent, selectedTab } = this.state;

    return !loadingContent && (selectedTab === tabIndex);
  }

  isTabVisible(tab, miniModeActive) {
    return !miniModeActive || tab.visibleInMiniMode;
  }

  getSelectedTab(layout) {
    return layout[this.state.selectedTab] || layout[0];
  }

  render() {
    const { layout, size, miniModeActive } = this.props;
    const TabContent = () => this.getSelectedTab(layout).tabContent;

    return (
      <TabsContainerStyled>
        <TabListStyled size={size}>
          {layout.map((tab, index) => this.isTabVisible(tab, miniModeActive) && (
            <Tab
              isActive={this.isTabActive(index)}
              key={tab.tabTitle}
              label={tab.tabTitle}
              onClick={() => this.handleClick(tab, index)}
              icon={tab.tabIcon}
            />
          ))}
        </TabListStyled>
        <TabContentContainerStyled>
          { this.state.loadingContent ? (<LoadingSpinner />) : (<TabContent />) }
        </TabContentContainerStyled>
      </TabsContainerStyled>
    );
  }
}

export default Tabs;
