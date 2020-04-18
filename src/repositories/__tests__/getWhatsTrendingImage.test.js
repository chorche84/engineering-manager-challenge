import { getWhatsTrendingImage } from '../getWhatsTrendingImage';

it('returns the what\'s trending image from the server', () => {
	const serviceResponse = 'any service response';

	jest.spyOn(window, 'fetch');
	fetch.mockReturnValueOnce(serviceResponse);

	const response = getWhatsTrendingImage();

	expect(fetch).toHaveBeenNthCalledWith(1, 'http://localhost:7000');
	expect(response).toBe(serviceResponse);
});
