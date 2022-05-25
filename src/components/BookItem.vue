<template>
    <div>
        <h1>{{ book.volumeInfo.title }}</h1>
        <img :src="book.volumeInfo.imageLinks.thumbnail" :alt="book.volumeInfo.title" />
        <div class="book-details">
            <p class="book-details__description">
                <!-- {{ parsedDescription(String(book.volumeInfo.description)) }} -->
            </p>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType, toRefs, computed } from 'vue';
import { BookListEntity } from '../types';

export default defineComponent({
    name: 'BookItem',
    props: {
        book: {
            type: Object as PropType<BookListEntity>,
            default: () => ({}),
        },
    },
    // setup(props) {
    //     const { book: MyBook } = toRefs(props);
    //     console.log('🚀 ~ file: BookItem.vue ~ line 26 ~ setup ~ description', MyBook);
    //     // const parsedDescription = computed(() =>
    //     //         return myProps.book.in
    //     //     );
    //     return { MyBook };
    // },
});
</script>
