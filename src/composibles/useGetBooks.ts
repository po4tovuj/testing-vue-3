import { ref } from 'vue';

import { fetchBooksList } from '@/services';
import getErrorMessage from '@/utils/errorCatch';

export default function useGetBooks() {
    interface Book {
        id: string;
        volumeInfo: object;
    }
    const booksList = ref<Array<Book>>([]);
    const loading = ref<boolean>(true);
    const error = ref<unknown | null>(null);
    const getData = async () => {
        try {
            const {
                data: { items },
            } = await fetchBooksList();
            booksList.value.push(
                ...items.map((book: Book) => ({
                    id: book.id,
                    volumeInfo: book.volumeInfo,
                }))
            );
        } catch (err) {
            error.value = getErrorMessage(err);
        }
    };
    getData();

    return { booksList, loading, error };
}
