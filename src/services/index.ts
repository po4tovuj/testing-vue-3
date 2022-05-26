import { APIKey, HTTP } from '~/utils/api';
import { BookList, BookListEntity } from '~/types';

export const fetchBooksList = ({ searchQuery = '', authorSearch = '' }) => {
    const params = new URLSearchParams();
    params.append('q', '""');

    if (searchQuery) {
        // if global search applied then update q param
        params.set('q', searchQuery);
        // if search in author applied update q param with inauthor key:value
        if (authorSearch) {
            params.set('q', `${searchQuery} + inauthor: ${authorSearch}`);
        }
        // if no global search we shouldn't send with + sign before author search
    } else if (authorSearch) {
        params.set('q', `inauthor: ${authorSearch}`);
    }

    const options = {
        params,
    };

    return HTTP.get<BookList>('/', options);
};
export const getBook = (id: string) => {
    const params = new URLSearchParams();

    params.append('key', APIKey);

    const options = {
        params,
    };
    return HTTP.get<BookListEntity>(`${id}`, options);
};
