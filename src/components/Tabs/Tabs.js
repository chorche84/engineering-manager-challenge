import React, { Component } from "react";
import {
  TabsContainerStyled,
  TabListStyled,
  TabStyled,
  TabContentContainerStyled,
  IconStyled,
  LabelStyled
} from "./styles/Styled";
import LoadingSpinner from "components/LoadingSpinner";

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

  selectTab = async (tab) => {
    const selectedTab = await getMemoizedTab(tab.index);

    this.setState({ selectedTab, loadingContent: false });
    this.props.onTabSelected && this.props.onTabSelected(tab);
  }

  handleClick(tab) {
    this.setState({ loadingContent: true });
    this.selectTab(tab);
  }

  isTabActive({ index }) {
    const { loadingContent, selectedTab } = this.state;

    return !loadingContent && (selectedTab === index);
  }

  getSelectedTab(layout) {
    return layout.find(tab => tab.index === this.state.selectedTab) || layout[0];
  }

  render() {
    const { layout, size } = this.props;
    const TabContent = () => this.getSelectedTab(layout).tabContent;

    return (
      <TabsContainerStyled>
        <TabListStyled size={size}>
          {layout.map((tab) => (
            <Tab
              isActive={this.isTabActive(tab)}
              key={tab.tabTitle}
              label={tab.tabTitle}
              onClick={() => this.handleClick(tab)}
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
