import router from "@/router"
import ComponentRouter from "@/components/ComponentRouter.vue"

export default async function dynamicRouteSetup() {
    const applicationsList = await fetch('http://localhost:3075/applications').then(response => response.json())

    const appMap = new Map
    for (const applicationEntry in applicationsList) {
        const application = applicationsList[applicationEntry]
        if (!router.hasRoute(application.resolver)) {
            router.addRoute({ name: application.resolver, path: `/${application.resolver}`, component: ComponentRouter})
        }
        console.log(application)
        appMap.set(`/${application.resolver}`, application)
    }

    return appMap
}