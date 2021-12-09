<script setup>
import { useRoute } from 'vue-router'
const $route = useRoute()
</script>

<template>
    <nav class="up-nav">
        <button @click="this.$router.push({ path: '/' })">Up to Cards List</button>
    </nav>
</template>