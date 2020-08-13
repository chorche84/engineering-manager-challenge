import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as repository from 'repositories/getWhatsTrendingImage';
import Trending from '../Trending';

configure({adapter: new Adapter()});

jest.spyOn(repository, 'getWhatsTrendingImage' );

it('before loading the trending image, it renders the trending component with the loading spinner', () => {
	const trending = shallow(<Trending />);

	expect(trending.is('[title="Whats trending "]')).toEqual(true);
	expect(trending.is('[size="xlarge"]')).toEqual(true);
	expect(trending.exists('LoadingSpinner')).toEqual(true);
	expect(trending.exists('picture')).toEqual(false);
});

it('after loading the trending image, it renders the image', done => {
	const imageUrl = 'any image url';
	const serviceResponsePromise = Promise.resolve(imageUrl);

	repository.getWhatsTrendingImage.mockReturnValueOnce(serviceResponsePromise);

	const trending = shallow(<Trending />);

	serviceResponsePromise.then(() => {
		expect(trending.is('[title="Whats trending "]')).toEqual(true);
		expect(trending.is('[size="xlarge"]')).toEqual(true);
		expect(trending.exists('picture img[src="' + imageUrl + '"][alt="What\'s trending"]')).toEqual(true);
		expect(trending.exists('LoadingSpinner')).toEqual(false);

		done();
	});
});
