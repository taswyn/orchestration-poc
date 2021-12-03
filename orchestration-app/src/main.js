import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'

const app = createApp(App)

const HelloNavAsync = defineAsyncComponent(async () => {
    
})

createApp(App).mount('#app')
