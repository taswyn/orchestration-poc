<script setup>
import CardList from '@/components/CardList.vue'

defineProps({
    id: String
})
</script>

<template>
    <div>Cardlist:</div>
    <Suspense>
        <template #default>
            <CardList title="Interesting" :id="parseInt(id)" />
        </template>
        <template #fallback>
            Cards List Loading
        </template>
    </Suspense>
</template>