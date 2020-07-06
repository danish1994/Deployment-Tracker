import config from 'local-config';

const getHeaders = () => {
    return {
        'Authorization': `token ${config.GITHUB_API_KEY}`,
        'Accept': 'application/vnd.github.v3+json'
    };
};

export const GET = (path) => {
    return fetch(path, {
        method: 'GET',
        headers: getHeaders(),
    })
        .then((response) => {
            return response.json();
        })
};

export const POST = (path) => {
    return fetch(path, {
        method: 'POST',
        headers: getHeaders(),
    })
        .then((response) => {
            return response.json();
        })
};