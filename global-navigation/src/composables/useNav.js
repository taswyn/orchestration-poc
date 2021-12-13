import { ref } from 'vue'

export default function useNav() {
    const applicationsList = ref([])

    const fetchNav = async () => {
        applicationsList.value = await fetch('http://localhost:3075/applications').then(
            response => response.json()
        ).then( applications => {
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
        )
    }

    return {
        applicationsList,
        fetchNav
    }
}