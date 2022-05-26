<template>
    <div class="about">
        <!-- <h1></h1> -->
        <loading-spiner v-if="loading"></loading-spiner>
        <book-item v-else :book="book"></book-item>
    </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import BookItem from '@/components/BookItem.vue';
import LoadingSpiner from '@/components/LoadingSpiner.vue';
import { useBookDetails } from '../composables/useGetBooks';

export default defineComponent({
    name: 'BookDescriptionView',
    components: { BookItem, LoadingSpiner },
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
