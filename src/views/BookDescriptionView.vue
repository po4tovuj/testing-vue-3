<template>
    <div class="about">
        <loading-spiner v-if="loading"></loading-spiner>
        <book-card v-else :book="book"></book-card>
    </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import BookCard from '~/components/BookCard.vue';
import LoadingSpiner from '~/components/LoadingSpiner.vue';
import { useBookDetails } from '~/composables/useGetBooks';

export default defineComponent({
    name: 'BookDescriptionView',
    components: { BookCard, LoadingSpiner },
    props: ['id', 'description'],
    setup(props) {
        const { id } = toRefs(props);
        const { book, loading, error } = useBookDetails(`${id.value}`);
        return {
            book,
            loading,
            error,
        };
    },
});
</script>
