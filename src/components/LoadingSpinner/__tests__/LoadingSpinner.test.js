import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoadingSpinner from '../LoadingSpinner';

configure({adapter: new Adapter()});

it('renders the loading spinner component', () => {
	const loadingSpinner = shallow(<LoadingSpinner />);

	expect(loadingSpinner.hasClass('lds-spinner')).toEqual(true);
});
