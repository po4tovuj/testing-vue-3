<template>
    <div>
        <h1>Google books API</h1>

        <section>
            <div class="books-list-wrapper">
                <ul class="books-list">
                    <li class="book-item" v-for="book in bookList" :key="book.id">
                        <img
                            v-if="book.volumeInfo.imageLinks.thumbnail"
                            :src="book.volumeInfo.imageLinks.thumbnail"
                            height="190"
                            alt="poster"
                        />
                        <h2 class="book-item__title">
                            {{ book.volumeInfo.title }}
                        </h2>
                        <p class="book-item__description">
                            {{ book.volumeInfo.description }}
                        </p>
                        <router-link class="book-item__link" :to="`/${book.id}`">
                            See Details</router-link
                        >
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
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
.books-list-wrapper {
    padding: 40px;
}
.books-list {
    list-style-type: none;
    padding: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: -10px;

    .book-item {
        flex: 1 1 calc(25% - 20px);
        margin: 10px;
        // min-width: calc(25% - 20px);
        // width: 23%;
        // padding-bottom: 20px;
        // padding-right: 20px;
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

        &__link {
            margin-top: auto 0;
            &:visited {
                color: rgb(0, 0, 238);
            }
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
