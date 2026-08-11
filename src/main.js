import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import './styles/tokens.css';
import './styles/base.css';

import Home from './views/Home/Home.vue';

const routes = [
    { path: '/', component: Home },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app');
