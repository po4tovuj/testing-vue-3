<template>
    <div class="book-wrapper">
        <h1>{{ book.volumeInfo.title }}</h1>
        <main class="book">
            <img
                class="book__poster"
                v-if="book.volumeInfo?.imageLinks?.thumbnail"
                :src="book.volumeInfo.imageLinks.thumbnail"
                :alt="book.volumeInfo.title"
            />
            <img
                class="book__poster"
                v-else
                src="../assets/book.png"
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
import { BookListEntity } from '~/types';

export default defineComponent({
    name: 'BookCard',
    props: {
        book: {
            type: Object as PropType<BookListEntity>,
            default: () => ({}),
        },
    },
    setup(props) {
        const { book } = toRefs(props);

        // from api it comes with some tags, so lets remove them
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
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 20px;
        padding-bottom: 20px;
        justify-items: center;
        .book__poster {
            margin-right: 20px;
            width: 250px;
            min-width: 250px;
            align-self: flex-start;
        }
        &-details {
            width: -webkit-fill-available;
            &__description {
                text-align: justify;
            }
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
    @media only screen and (min-device-width: 768px) {
        .book {
            grid-template-columns: repeat(2, 1fr);
            text-align: left;
        }
    }
    // @media only screen and (min-widht: 992px) and (max-width: 1199px) {
    //     .book {
    //         grid-template-columns: repeat(3, 1fr);
    //     }
    // }
    // @media screen and (min-device-width: 1200px) and (-webkit-min-device-pixel-ratio: 1) {
    //     .book {
    //         grid-template-columns: repeat(4, 1fr);
    //     }
    // }
}
</style>
