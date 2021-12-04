<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloNav from './components/HelloNav.vue'

defineProps({
  msg: String
})
</script>

<template>
  <div>
    <p>Global Navigation says:</p>
    <hello-nav msg="Hello Vue 3 + Vite" />
    <p>Global Navigation was told to say:</p>
    <hello-nav v-bind:msg="msg" />
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
