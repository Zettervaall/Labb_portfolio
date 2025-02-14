import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home/Home.vue';
import Frontend from './views/Frontend/Frontend.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/Frontend', component: Frontend }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app');
