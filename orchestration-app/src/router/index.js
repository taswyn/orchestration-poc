import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import ComponentRouter from '@/components/ComponentRouter.vue'
import PrimaryLayout from '@/views/PrimaryLayout.vue'

/** Notes
 * This starts blank
 * THIS builds on to it dyanmically using AddRoute
 * THIS passes the components root route name to each component
 * because global nav pulls from the same place (json/API), it knows the route names
 * Each component builds on its child routing to that dynamically
 */
const routes = [
    { 
        path: '/', 
        name: 'primary', 
        component: PrimaryLayout,
        props: route => ({
            ...route.params
        })
    }
        
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router