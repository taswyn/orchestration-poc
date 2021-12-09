<script setup>
defineProps({
    card: Object,
    id: Number
})
</script>

<template>
    <div class="tile is-child notification is-warning">
        <h3 class="card-header-title">{{ card.title }}</h3>
    </div>
</template>