import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'

import AppHome from '@/views/AppHome.vue'

const routes = [
    { 
        path: '/', 
        name: 'AppHome', 
        component: AppHome,
        props: route => ({
            ...route.params
        }),
        children: [
            {
                path: 'cardscroll/:id',
                name: 'card.scroll',
                component: () => import ('@/components/QuickCard.vue'),
                props: route => ({
                    ...route.params,
                    id: parseInt(route.params.id)
                })
            }
        ]
    },
    {
        path: '/card/:id/',
        name: 'card.show',
        component: () => import('@/views/SingleCard.vue'),
        props: route => ({
            ...route.params,
            id: parseInt(route.params.id)
        }),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router