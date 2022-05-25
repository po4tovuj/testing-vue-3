<template>
    <div class="book-wrapper">
        <h1>{{ book.volumeInfo.title }}</h1>
        <main class="book">
            <img
                class="book__poster"
                :src="book.volumeInfo.imageLinks.thumbnail"
                :alt="book.volumeInfo.title"
            />
            <div class="book-details">
                <p class="book-details__description">
                    {{
                        parsedDescription || book.volumeInfo.subtitle || 'No description available'
                    }}
                </p>
                <p>
                    <span class="text-bold">Author:</span>
                    {{ book.volumeInfo.authors?.join(', ') || 'Unknown author' }}
                </p>
                <p>
                    <span class="text-bold">Category: </span>
                    {{ book.volumeInfo.categories?.join(', ') || 'Uncategorised' }}
                </p>
                <div class="book__price-wrapper" v-if="book.saleInfo.buyLink">
                    <p class="book__price">
                        <span class="text-bold"> Price: </span>
                        {{ book.saleInfo.listPrice.amount }}
                        {{ book.saleInfo.listPrice.currencyCode }}
                    </p>
                    <a class="book__btn-buy" target="blank" :href="book.saleInfo.buyLink"
                        ><strong>Buy Now</strong></a
                    >
                </div>
                <p v-else>Not for sale</p>
            </div>
        </main>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from 'vue';
import { BookListEntity } from '../types';

export default defineComponent({
    name: 'BookItem',
    props: {
        book: {
            type: Object as PropType<BookListEntity>,
            default: () => ({}),
        },
    },
    setup(props) {
        const { book } = toRefs(props);
        const regex = /(<([^>]+)>)/gi;
        const parsedDescription = computed(() =>
            book.value.volumeInfo.description?.replace(regex, '')
        );

        return { parsedDescription };
    },
});
</script>
<style lang="scss" scoped>
.book-wrapper {
    padding: 0 40px;
    text-align: center;
    .book {
        display: flex;

        .book__poster {
            margin-right: 20px;
            width: 250px;
            min-width: 250px;
            align-self: flex-start;
        }
        &-details {
            width: -webkit-fill-available;
        }
        &__price-wrapper {
            width: 300px;
            display: flex;
            margin: 0 auto;
            align-items: center;
            justify-content: space-between;
        }
        &__btn-buy {
            border: 1px solid lightgrey;
            border-radius: 5px;
            padding: 8px 20px;
            &:hover {
                border-color: white;
                background-color: #3461eb;
                color: #fff;
            }
        }
    }
    .text-bold {
        font-weight: bold;
    }
}
</style>
