<template>
    <div class="">
        <div v-if="!loading">
            <filter-books @handle-search="handleSearch"></filter-books>
            <books-list v-if="!loading" :book-list="booksList"></books-list>
        </div>

        <loading-spiner v-else />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import BooksList from '@/components/BooksList.vue'; // @ is an alias to /src
import { useBookList } from '@/composables/useGetBooks';
import FilterBooks from '../components/FilterBooks.vue';
import LoadingSpiner from '../components/LoadingSpiner.vue';

export default defineComponent({
    name: 'BookListView',
    components: {
        BooksList,
        FilterBooks,
        LoadingSpiner,
    },
    setup() {
        const search = ref('');
        const searchInAuthor = ref('');

        const { booksList, loading, error } = useBookList({
            searchQuery: search,
            authorSearch: searchInAuthor,
        });

        function handleSearch(props: { searchQuery?: string; authorSearch?: string }) {
            // if (props.searchQuery) {
            search.value = props.searchQuery || '';
            searchInAuthor.value = props.authorSearch || '';

            // }
        }

        return { booksList, loading, error, handleSearch };
    },
});
</script>
<style lang="scss"></style>
