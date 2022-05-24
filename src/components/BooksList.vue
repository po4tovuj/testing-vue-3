<template>
    <div class="hello">MY text-sm-center</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import axios from 'axios';
// import { fetchBooksList } from '~/services';

export default defineComponent({
    name: 'BooksList',
    async setup() {
        const data = ref(null);
        const loading = ref(true);
        const params = new URLSearchParams();
        params.append('key', 'AIzaSyBHwl7-WdfVIJqflf7z7MqN-AsjXNYIDZw');
        const options = {
            params,
        };
        const booksResponse = await axios(
            'https://www.googleapis.com/books/v1/volumes?q=""',
            options
        ).then((result) => {
            console.log('result', result);
            return result.data.items;
        });
        // console.log('🚀 ~ file: BooksList.vue ~ line 26 ~ setup ~ booksResponse', booksResponse);

        data.value = booksResponse;
        // onMounted(async () => {

        //     await getBooks();
        // });
        return { data, loading };
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
