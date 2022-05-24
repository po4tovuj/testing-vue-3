<template>
    <div class="home">
        <BooksList />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import BooksList from '@/components/BooksList.vue'; // @ is an alias to /src

// import { getBooksList } from '@/services/getBooks';
// import { APIKey, HTTP } from '@/utils/api';

export default defineComponent({
    name: 'BookListView',
    components: {
        BooksList,
    },
});
</script>
