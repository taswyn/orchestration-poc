<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import RoutedComponent from "./components/ComponentRouter.vue";

const test = {
  name: "Application1",
  url: "http://localhost:8200/Application1.umd.js",
};
const properties = {
  msg: "Testing Application1 Orchestration",
};
</script>

<template>
<div>
  <hello-world msg="Orchestration" />
  <Suspense>
    <template #default>
      <div>
        <component
          :is="RoutedComponent"
          :component="test"
          :props="properties"
        />
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
