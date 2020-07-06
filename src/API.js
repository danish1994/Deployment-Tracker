import config from 'local-config';

const baseUrl = 'https://api.github.com';
const getHeaders = () => {
    return {
        'Authorization': `token ${config.GITHUB_API_KEY}`,
        'Accept': 'application/vnd.github.v3+json'
    };
};

console.log(getHeaders())

export const GET = (path) => {
    return fetch(baseUrl + path, {
        method: 'GET',
        headers: getHeaders(),
    })
        .then((response) => {
            return response.json();
        })
};

export const POST = (path) => {
    return fetch(baseUrl + path, {
        method: 'POST',
        headers: getHeaders(),
    })
        .then((response) => {
            return response.json();
        })
};