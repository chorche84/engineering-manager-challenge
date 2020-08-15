import getTrendingData from '../getTrendingData';

it('returns the trending image data', () => {
  const trendingImageData = {
    title: 'Whats trending ',
    alt: 'What\'s trending'
  };

  const result = getTrendingData();

  expect(result).toEqual(trendingImageData);
});
