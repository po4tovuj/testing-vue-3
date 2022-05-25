import { APIKey, HTTP } from '~/utils/api';
import { BookList, BookListEntity } from '../types';

export const fetchBooksList = () => {
    const params = new URLSearchParams();
    params.append('key', APIKey);
    const options = {
        params,
    };
    return HTTP.get<BookList>('?q=""', options);
};
export const getBook = (id: string) => {
    const params = new URLSearchParams();
    params.append('key', APIKey);

    const options = {
        params,
    };
    return HTTP.get<BookListEntity>(`${id}`, options);
};
