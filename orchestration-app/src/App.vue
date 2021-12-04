<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import RoutedComponent from "./components/ComponentRouter.vue";

const test = {
  name: "Application1",
  url: "http://localhost:8200/Application1.umd.js",
};
const Application1Properties = {
  msg: "Testing Application1 Orchestration",
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
    <hello-world msg="Orchestration" />
    <Suspense>
      <template #default>
        <div>
          <component :is="RoutedComponent" :component="test" :props="Application1Properties" />
        </div>
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
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
