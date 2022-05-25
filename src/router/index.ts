import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'BookListView',
        component: () => import(/* webpackChunkName: "BookListView" */ '@/views/BookListView.vue'),
    },
    {
        path: '/:id',
        name: 'BookDescriptionView',
        props: true,
        component: () =>
            import(/* webpackChunkName: "BookDescriptionView" */ '~/views/BookDescriptionView.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
