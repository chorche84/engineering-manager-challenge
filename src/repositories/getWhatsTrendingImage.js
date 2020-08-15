const SERVICE_URL = 'http://localhost:7000';

const getWhatsTrendingImage = () => {
    return fetch(SERVICE_URL).then((response) => response.text());
}

export default getWhatsTrendingImage;
