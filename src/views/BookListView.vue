<template>
    <div class="home">
        <div v-if="loading">data is loading</div>
        <div>
            <filter-books @handle-search="handleSearch"></filter-books>
            <books-list v-if="!loading" :book-list="booksList"></books-list>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import BooksList from '@/components/BooksList.vue'; // @ is an alias to /src
import { useBookList } from '@/composables/useGetBooks';
import { useRoute } from 'vue-router';
import FilterBooks from '../components/FilterBooks.vue';
import { BookList } from '../types';

export default defineComponent({
    name: 'BookListView',
    components: {
        BooksList,

        FilterBooks,
    },
    setup() {
        const { booksList, loading, error } = useBookList({});
        const handleSearch = (searchQuery?: string) => {
            const result = useBookList({
                searchQuery,
            });
            booksList.value = result.booksList.value;
            // loading = result.loading;
            // error = result.error;
            // error = errRes;
            // // loading = loadResult;
            // toRefs(booksList);
        };

        return { booksList, loading, error, handleSearch };
    },
});
</script>
