const SERVICE_URL = 'http://localhost:7000';

export function getWhatsTrendingImage () {
    return fetch(SERVICE_URL);
}