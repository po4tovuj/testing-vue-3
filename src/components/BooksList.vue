<template>
    <div>
        <h1>Google books API</h1>

        <section>
            <ul class="books-list">
                <li class="book" v-for="book in bookList" :key="book.id">
                    <img :src="book.volumeInfo.imageLinks.thumbnail" height="190" alt="poster" />
                    <h2 class="book__title">
                        {{ book.volumeInfo.title }}
                    </h2>
                    <p class="book__description">
                        {{ book.volumeInfo.description }}
                    </p>
                    <router-link :to="`/${book.id}`"> See Details</router-link>
                </li>
            </ul>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
// import { useGetBooks } from '@/composables/useGetBooks';
import { BookListEntity } from '../types';

export default defineComponent({
    props: {
        bookList: {
            type: Array as PropType<BookListEntity[]>,
            default: () => [],
        },
    },
    name: 'BooksList',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.books-list {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    // justify-content: space-between;
    padding: 40px 20px 0px 40px;
    .book {
        display: inline-block;

        max-width: 23%;
        padding-bottom: 20px;
        padding-right: 20px;
        &__title {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        &__description {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}

// li {
//     display: inline-block;
//     margin: 0 10px;
// }
// a {
//     color: #42b983;
// }
</style>
