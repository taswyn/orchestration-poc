<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import RoutedComponent from "@/components/RoutedComponent.vue";
//import dynamicRouteSetup from "@/utils/dyanmicRouteSetup";
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import { dynamicRouteSetup } from '@/router'

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

const appList = ref()
appList.value = null

const setAppList = async () => {
  appList.value = await dynamicRouteSetup(router)
  console.log(appList.value)
}

setAppList()

console.log(appList)
const test = {
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

/****
 * notes: when msg is provided here, it overrides msg in GlobalNav 
 * even without it being a prop for App.vue
 * 
 * When msg is NOT provided here, it gets written by App.vue in GlobalNav
 * 
 * When the root element in GlobalNav's App.vue is NOT the component, msg goes on the root element instead!
 * 
 */


</script>

<template>
  <div v-if="appList">
    test
    <nav>
      <Suspense>
        <template #default>
          <div>
            <component :is="RoutedComponent" :component="nav" :props="NavigationProperties" />
          </div>
        </template>
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </nav>
    <h1>Orchestration</h1>
    <router-view :appList="appList"></router-view>
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
