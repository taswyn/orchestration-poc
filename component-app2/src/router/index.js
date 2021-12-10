import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'

import AppHome from '@/views/AppHome.vue'
import QuickCard from '@/components/QuickCard.vue'
import SingleCard from '@/views/SingleCard.vue'
// note: converted from dynamics to temporarily ease difficulty with UMD vs ESM
// TODO: solve dynamics & ESM importing

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
                component: QuickCard,
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
        component: SingleCard,
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