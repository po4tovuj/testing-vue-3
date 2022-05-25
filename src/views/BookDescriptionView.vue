<template>
    <div class="about">
        <!-- <h1></h1> -->
        <div>Fetching book</div>
        <!-- <book-item v-else :book="book"></book-item> -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import BookItem from '@/components/BookItem.vue';
import { useRoute } from 'vue-router';
import { useBookDetails } from '../composables/useGetBooks';

export default defineComponent({
    name: 'BookDescriptionView',
    // components: { BookItem },
    // setup() {
    //     const route = useRoute();
    //     const { id } = route.params;
    //     // console.log('🚀 ~ file: BookDescriptionView.vue ~ line 20 ~ setup ~ id', typeof id);

    //     const { book, loading, error } = useBookDetails(`${id}`);
    //     return {
    //         book,
    //         loading,
    //         error,
    //     };
    // },
});
</script>
