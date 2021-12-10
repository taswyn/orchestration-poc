import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'

import router from '@/router'

const app = createApp(App)
.use(router)

const HelloNavAsync = defineAsyncComponent(async () => 
 importComponent('http://localhost:8200/Navigation.es.js')
)

app.component("hello-nav-async", HelloNavAsync);

app.mount('#app')

//createApp(App).mount('#app')
