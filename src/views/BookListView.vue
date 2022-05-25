<template>
    <div class="home">
        <div v-if="loading">data is loading</div>

        <books-list v-if="!loading" :book-list="booksList"></books-list>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BooksList from '@/components/BooksList.vue'; // @ is an alias to /src

import { useBookList } from '@/composables/useGetBooks';

export default defineComponent({
    name: 'BookListView',
    components: {
        BooksList,
    },
    setup() {
        const { booksList, loading, error } = useBookList();
        return { booksList, loading, error };
    },
});
</script>
