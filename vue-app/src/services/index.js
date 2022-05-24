import { APIKey, HTTP } from '~/utils/api.js';

export const fetchBooksList = () => {
    const params = new URLSearchParams();
    params.append('key', APIKey);
    const options = {
        params,
    };
    return HTTP('?q=""', options);
};
export const getBook = (id) => {
    console.log('ldskf', id);
};
