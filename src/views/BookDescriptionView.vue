<template>
    <div v-if="book && !loading" class="book-card-wapper">
        <book-card :book="book"></book-card>
    </div>

    <loading-spiner v-if="loading"></loading-spiner>

    <div v-if="!loading && !book" class="not-found">
        <h2>No Books Found!</h2>
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
<style>
.not-found {
    color: red;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
