<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloDiv1 from "./components/HelloDiv1.vue";

/*defineProps({
  msg: String
})*/
</script>

<template>
  <div>
    <p>Application 1 is being told to say </p>
    <!--<img alt="Vue logo" src="./assets/logo.png" />-->
    <hello-div-1 msg="Hello Vue 3 + Vite: Application 1" />
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
