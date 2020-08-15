import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import getTabsLayout from 'repositories/getTabsLayout';
import {
	LandingTabs,
	TabUser,
	TabDevices,
	TabDownload
} from "..";

configure({adapter: new Adapter()});

jest.mock('context/MiniMode', () => ({
  MiniModeConsumer: (props) => {
  	return props.children({active: 'any minimode active value'})
  }
}));

const tab1 = { attr: 'attr1', index: 2 };
const tab2 = { attr: 'attr2', index: 0 };
const tab3 = { attr: 'attr3', index: 1 };
const tabsLayout = [tab1, tab2, tab3];

jest.mock('repositories/getTabsLayout');
getTabsLayout.mockImplementation((minimodeActive) => {
	if (minimodeActive === 'any minimode active value') {
		return tabsLayout
	}
});

const expectedTabProps = {
	layout: [{
		...tab1,
		tabContent: <TabDownload />
	}, {
		...tab2,
		tabContent: <TabUser />
	}, {
		...tab3,
		tabContent: <TabDevices />
	}]
};

it('should render the Tabs component with the proper adapted props', () => {
	const tabs = shallow(<LandingTabs />);

	expect(tabs.dive().find('Tabs').length).toEqual(1);
	expect(tabs.dive().find('Tabs').props()).toEqual(expectedTabProps);
});
