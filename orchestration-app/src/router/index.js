import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'

/** Notes
 * This starts blank
 * global nav builds on to it dyanmically using AddRoute
 * global nav passes the components root route name to each component
 * Each component builds on its child routing to that dynamically
 */
const routes = [
    
        
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router