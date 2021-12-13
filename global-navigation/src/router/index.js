import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import NavList from '@/components/NavList.vue'


// note: converted from dynamics to temporarily ease difficulty with UMD vs ESM
// TODO: solve dynamics & ESM importing

const routes = [
    { 
        path: '/', 
        name: 'primary', 
        component: NavList,
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