import { createRouter, createWebHistory } from 'vue-router'

import Acceuil from '@/views/Acceuil.vue'
import Actualite from '@/views/Actualite.vue'

const routes = [
    {
        path: "/",
        component: Acceuil
    },
    {
        path: "/actuality",
        component: Actualite
    }
];

const router = createRouter({
    history: createWebHistory("/"),
    routes
});

export default router;