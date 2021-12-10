<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import RoutedComponent from "@/components/ComponentRouter.vue";
import dynamicRouteSetup from "@/utils/dyanmicRouteSetup";

const appList = dynamicRouteSetup()
console.log(appList)
const test = {
  name: "Application1",
  url: "http://localhost:8200/Application2.umd.js",
};
const ApplicationProperties = {
  msg: "Testing Application Orchestration",
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
  <div>
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
    <router-link :appList="appList"></router-link>
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
