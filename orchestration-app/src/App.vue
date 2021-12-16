<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import RoutedComponent from "@/components/RoutedComponent.vue";
//import dynamicRouteSetup from "@/utils/dyanmicRouteSetup";
import { useRouter, useRoute } from 'vue-router'
import { ref, watchEffect } from 'vue'
import dynamicRouteSetup from '@/utils/dynamicRouteSetup'
import useApps from '@/composables/useApps'
import useComponents from '@/composables/useComponents'

const router = useRouter()

/* async function dynamicRouteSetup(router) {
    const applicationsList = await fetch('http://localhost:3075/applications').then(response => response.json())

    const appMap = new Map
    for (const applicationEntry in applicationsList) {
        const application = applicationsList[applicationEntry]
        console.log({"resolver" : application.resolver, "router":router.hasRoute(application.resolver)})
        if (!router.hasRoute(application.resolver)) {
          
            router.addRoute({ name: application.resolver, path: `/${application.resolver}`, component: RoutedComponent})
        }
        console.log(application)
        appMap.set(`/${application.resolver}`, application)
    }

    return appMap
} */

/* const appList = ref()
appList.value = null

const setAppList = async () => {
  appList.value = await dynamicRouteSetup(router)
  console.log(appList.value)
}

setAppList()

console.log(appList) */

/* const test = {
  name: "Application1",
  url: "http://localhost:8200/Application2.umd.js",
};

const NavigationProperties = {
  msg: "Application list goes here!"
}
const nav = {
  name: "GlobalNavigation",
  url: "http://localhost:8200/Navigation.umd.js",
}
 */


const { componentsList, fetchComponents, navComponent } = useComponents()
const { applicationsList, fetchApps } = useApps()

fetchComponents()
fetchApps(router)

watchEffect(() => {
  console.log(navComponent.value)
  console.log(applicationsList.value)
},
  {
    flush: 'post'
  }
)
/****
 * notes: when msg is provided here, it overrides msg in GlobalNav
 * even without it being a prop for App.vue
 *
 * When msg is NOT provided here, it gets written by App.vue in GlobalNav
 *
 * When the root element in GlobalNav's App.vue is NOT the component, msg goes on the root element instead!
 *
 */

// :props="NavigationProperties" 
</script>

<template>
  <div v-if="applicationsList">
    test
    <nav>
      <Suspense>
        <template #default>
          <div>
            {{ navComponent }}
            <component :is="RoutedComponent" :component="navComponent" />
          </div>
        </template>
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </nav>
    <h1>Orchestration</h1>
    {{ applicationsList }}
    <router-view :appList="applicationsList"></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
