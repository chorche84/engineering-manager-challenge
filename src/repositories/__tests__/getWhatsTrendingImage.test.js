import { getWhatsTrendingImage } from '../getWhatsTrendingImage';

it('returns the what\'s trending image from the server', (done) => {
	const trendingImageUrl = 'any trending image url';
	const serviceResponse = {
		text: jest.fn()
	};
	const servideResponsePromise = Promise.resolve(serviceResponse);

	jest.spyOn(window, 'fetch');
	fetch.mockReturnValueOnce(servideResponsePromise);
	serviceResponse.text.mockReturnValueOnce(trendingImageUrl);

	const promiseResult = getWhatsTrendingImage();

	expect(fetch).toHaveBeenNthCalledWith(1, 'http://localhost:7000');
	promiseResult.then((result) => {
		expect(result).toBe(trendingImageUrl);
		done();
	});
});
