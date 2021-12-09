<script setup>
import CardList from '@/components/CardList.vue'
</script>

<template>
    <div>Cardlist:</div>
    <Suspense>
        <template #default>
            <CardList title="Interesting" card="`${card}" />
        </template>
        <template #fallback>
            Cards List Loading
        </template>
    </Suspense>
</template>