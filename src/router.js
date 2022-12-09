import {
    createRouter,
    createWebHistory
} from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ToursPage from './pages/ToursPage.vue';

import { defineAsyncComponent } from "vue";
const AboutPage = defineAsyncComponent(() => import('./pages/AboutPage.vue'));
const ContactPage = defineAsyncComponent(() => import('./pages/ContactPage.vue'));
const FaqPage = defineAsyncComponent(() => import('./pages/FaqPage.vue'));
const NotFound = defineAsyncComponent(() => import('./pages/NotFound.vue'));
const ptPage = defineAsyncComponent(() => import('./pages/ptPage.vue'));


const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            component: HomePage,
            props: true,
        },
        {
            path: '/about-us',
            component: AboutPage,
        }, {
            path: '/contact-us',
            component: ContactPage,
        },
        {
            path: '/faq',
            component: FaqPage,
        },
        {
            path: '/tours',
            component: ToursPage,
        },
        {
            path: '/pt',
            component: ptPage,
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ],
});

export default router;