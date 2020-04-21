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

  return async function (tab) {
    if (cache[tab] !== undefined) {
      return cache[tab];
    } else {
      const tabToShow = await calculateTabToShow(tab);
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

  handleClick = async (tab, index) => {
    this.setState({ loadingContent: true });

    const selectedTab = await getMemoizedTab(index);
    this.setState({ selectedTab, loadingContent: false });
    this.props.onTabSelected && this.props.onTabSelected(tab);
  }

  render() {
    const { layout, size } = this.props;
    const TabContent = () => layout[this.state.selectedTab].tabContent;
    return (
      <TabsContainerStyled>
        <TabListStyled size={size}>
          {layout.map((tab, index) => (
            <Tab
              isActive={this.state.selectedTab === index}
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
