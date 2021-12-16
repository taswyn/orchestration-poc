

// Need to figure out how to properly modularize this: useRouter qqs if this is in a regular .js

import ComponentRouter from "@/components/RoutedComponent.vue"


const hasNecessaryRoute = (to, router) => {
    const routeResolution = router.resolve(to)
    console.log (routeResolution)
    routeResolution.name
}

/**
 * 
 * @param {*} router 
 * @param {*} applicationsList
 * @returns 
 */
export default async function dynamicRouteSetup(router, applicationsRef) {
    
    const applicationsList = applicationsRef.value
    //const applicationsList = await fetch('http://localhost:3075/applications').then(response => response.json())
    console.log(applicationsList)
    //const router = useRouter()
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
}