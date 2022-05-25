import { APIKey, HTTP } from '~/utils/api';
import { BookList, BookListEntity } from '../types';

export const fetchBooksList = ({ searchQuery = '' }) => {
    console.log('🚀 ~  searchQuery', searchQuery);
    const params = new URLSearchParams();
    // params.append('q', searchQuery);
    const query = `/?q="${String(searchQuery)}"`;
    params.append('key', APIKey);

    const options = {
        params,
    };
    return HTTP.get<BookList>(query, options);
};
export const getBook = (id: string) => {
    const params = new URLSearchParams();
    params.append('key', APIKey);

    const options = {
        params,
    };
    return HTTP.get<BookListEntity>(`${id}`, options);
};
