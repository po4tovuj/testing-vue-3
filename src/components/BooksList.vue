<template>
    <div class="hello">BOOKS LIST</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useGetBooks from '@/composibles/useGetBooks';

export default defineComponent({
    name: 'BooksList',
    props: {
        // books: Array,
    },
    async setup() {
        const { booksList, loading, error } = await useGetBooks();
        return { booksList, loading, error };
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
