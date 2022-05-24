<template>
    <div class="home">
        <Suspense>
            <books-list></books-list>
        </Suspense>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BooksList from '@/components/BooksList.vue'; // @ is an alias to /src

// import { fetchBooksList } from '@/services/';
// // import { APIKey, HTTP } from '@/utils/api';

export default defineComponent({
    name: 'BookListView',
    components: {
        BooksList,
    },
});
</script>
