<script setup>
defineProps({
    application: Object,
    id: Number
})

// <router-link :to="{ name: application.resolver, params: { id: application.mapId } }">
</script>


<template>

    <div class="tile is-child notification is-warning">
        <h3 class="card-header-title">{{ application.name }}</h3>
    </div>

</template>