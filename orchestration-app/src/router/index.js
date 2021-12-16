import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import ComponentRouter from '@/components/RoutedComponent.vue'
import PrimaryLayout from '@/views/PrimaryLayout.vue'
import RoutedComponent from "@/components/RoutedComponent.vue";
import dynamicRouteSetup from '@/utils/dynamicRouteSetup';
import useApps from '@/composables/useApps';


/* export async function dynamicRouteSetup(router) {
    const applicationsList = await fetch('http://localhost:3075/applications').then(response => response.json())

    const appMap = new Map
    for (const applicationEntry in applicationsList) {
        const application = applicationsList[applicationEntry]
        application.namedResolver = application.resolver ? application.resolver : 'home'
        console.log({"resolver" : application.resolver, "router":router.hasRoute(application.resolver)})
        if (!router.hasRoute(application.resolver)) {
          
            await router.addRoute(
                { 
                    name: application.namedResolver, 
                    path: `/${application.resolver}`, 
                    component: RoutedComponent, 
                    props:{
                        component: {
                            name: application.name,
                            url: application.url
                        }
                    }
                }
                )
            console.log(router.currentRoute.value)
            const routeResolution = router.resolve(router.currentRoute.value)
            if (routeResolution.path == `/${application.resolver}`) {
                console.log('matched')
                router.replace(router.currentRoute.value.fullPath)
            }
        }
        console.log(application)
        appMap.set(`/${application.resolver}`, application)
    }

    return appMap
} */

const hasNecessaryRoute = (to, router) => {
    const routeResolution = router.resolve(to)
    console.log (routeResolution)
    routeResolution.name
}

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
    }/*,
    {
        path: '*',
        name: 'dynamic-catch',
        component: PrimaryLayout,
        props: route => ({
            ...route.params
        })
    }*/
        
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async to => {
    console.log(to)
    if (!hasNecessaryRoute(to, router)) {
        const { applicationsList, fetchApps } = useApps()
        fetchApps()
        dynamicRouteSetup(router, applicationsList).then(
            () => {
                if (hasNecessaryRoute(to, router)) {
                    //router.replace(to.fullPath)
                    return to.fullPath
                }
            }
        )
        
    }
})

export default router