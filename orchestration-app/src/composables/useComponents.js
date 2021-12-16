import { ref } from 'vue'

export default function useComponents() {
    const componentsList = ref([])
    const navComponent = ref([])

    const fetchComponents = async () => {
        componentsList.value = await fetch('http://localhost:3075/components').then(
            response => response.json()
        ).then(
            componentsResponse => {
                let navigationIndex = componentsResponse.findIndex((component) => {
                    return component.name == 'Navigation'
                })
                if (navigationIndex != -1) {
                    navComponent.value = componentsResponse[navigationIndex]
                }
                
                return {
                    componentsResponse

                }
            }
        )
    }

    return {
        componentsList,
        fetchComponents,
        navComponent
    }
}