<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import RoutedComponent from "./components/ComponentRouter.vue";

const test = {
  component: {
    name: "Application1",
    url: "http://localhost:8200/Application1.umd.js",
  },
};
const properties = {
    msg: "Testing Application1 Orchestration"
}
</script>

<template>
  <Suspense>
    <template #default>
      <div>
        <hello-world msg="Orchestration" />
        <routed-component :component="test.component" :props="properties" />
      </div>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
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
