import { ref, Ref, watch } from 'vue';

import { fetchBooksList, getBook } from '@/services';
import getErrorMessage from '@/utils/errorCatch';
import { BookListEntity } from '../types';

export const useBookList = (props: { searchQuery: Ref<string>; authorSearch: Ref<string> }) => {
    const booksList = ref<Array<BookListEntity>>([]);
    const loading = ref<boolean>(true);
    const error = ref<unknown | null>(null);

    const getData = async () => {
        try {
            const response = await fetchBooksList({
                searchQuery: props.searchQuery?.value,
                authorSearch: props.authorSearch?.value,
            });
            if (response.data.items) {
                booksList.value = response.data.items;
            }
        } catch (err) {
            error.value = getErrorMessage(err);
        } finally {
            loading.value = false;
        }
    };
    // watch for changes in globalSearch and search by author values and fire api call
    watch([props.searchQuery, props.authorSearch], () => {
        getData();
    });

    getData();

    return { booksList, loading, error };
};

export const useBookDetails = (id: string) => {
    // const book: Ref<Book> = ref([]);
    const book = ref<BookListEntity>();
    const loading = ref<boolean>(true);
    const error = ref<unknown | null>(null);

    const getData = async () => {
        try {
            const response = await getBook(id);
            if (response.data.id) {
                book.value = response.data;
            }
        } catch (err) {
            error.value = getErrorMessage(err);
        } finally {
            loading.value = false;
        }
    };
    getData();

    return {
        book,
        loading,
        error,
    };
};
