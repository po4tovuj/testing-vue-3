import axios from 'axios';

export const HTTP = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes',
    headers: {
        'content-type': 'application/json',
    },
});
export const APIKey = 'AIzaSyBHwl7-WdfVIJqflf7z7MqN-AsjXNYIDZw';
