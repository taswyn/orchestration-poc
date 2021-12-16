import { ref } from 'vue'
import dynamicRouteSetup from '@/utils/dynamicRouteSetup'

export default function useApps(router) {
    const applicationsList = ref(new Map)

    const fetchApps = async () => {
        applicationsList.value = await fetch('http://localhost:3075/applications').then(
            response => response.json()
        ).then(applications => {
            let primary = applications.findIndex((application) => {
                return application.resolver == ''
            })
            if (primary != -1) {
                console.log(primary)
                console.log(applications[primary])
                applications[primary].resolver = 'primary'
            }
            return applications
        }
        ).then(applications => {
            console.log(applications)
            return dynamicRouteSetup(router, applications)
        }
        )
    }

    return {
        applicationsList,
        fetchApps
    }
}