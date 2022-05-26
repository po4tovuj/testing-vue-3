<template>
    <div class="books-list-view">
        <div v-if="!loading && booksList.length">
            <filter-books @handle-search="handleSearch"></filter-books>
            <books-list :book-list="booksList"></books-list>
        </div>

        <loading-spiner v-if="loading" />
        <div v-if="(!loading && !booksList.length) || error" class="not-found">
            <h2>No Books Found!</h2>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import BooksList from '~/components/BooksList.vue';
import { useBookList } from '~/composables/useGetBooks';
import FilterBooks from '~/components/FilterBooks.vue';
import LoadingSpiner from '~/components/LoadingSpiner.vue';

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
            search.value = props.searchQuery || '';
            searchInAuthor.value = props.authorSearch || '';
        }

        return { booksList, loading, error, handleSearch };
    },
});
</script>
<style lang="scss">
.books-list-view {
    height: calc(100% - 100px);
    position: relative;
    & > div {
        height: 100%;
    }
}
</style>
