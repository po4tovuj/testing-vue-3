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
    box-sizing: content-box;

    padding: 0;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;

    .book-item {
        // flex: 1 1 calc(25% - 20px);
        // margin: 10px;
        min-width: 100%;
        border: 1px solid lightblue;
        border-radius: 5px;
        padding: 12px 16px;
        &__title {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        &__description {
            text-align: justify;
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
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    .books-list {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media only screen and (min-widht: 992px) and (max-width: 1199px) {
    .books-list {
        grid-template-columns: repeat(3, 1fr);
    }
}
@media screen and (min-device-width: 1200px) and (-webkit-min-device-pixel-ratio: 1) {
    .books-list {
        grid-template-columns: repeat(4, 1fr);
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
