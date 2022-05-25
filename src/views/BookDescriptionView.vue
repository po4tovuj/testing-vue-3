<template>
    <div class="about">
        <!-- <h1></h1> -->
        <div v-if="loading">Fetching book</div>
        <book-item v-else :book="book"></book-item>
    </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import BookItem from '@/components/BookItem.vue';
import { useRoute } from 'vue-router';
import { useBookDetails } from '../composables/useGetBooks';

export default defineComponent({
    name: 'BookDescriptionView',
    components: { BookItem },
    props: ['id', 'description'],
    setup(props) {
        // const route = useRoute();
        const { id } = toRefs(props);
        const { book, loading, error } = useBookDetails(`${id.value}`);
        // const handleSearch = (searchquery: string) => useSearch(searchquery);
        return {
            book,
            loading,
            error,
            // handleSearch,
        };
    },
});
</script>
