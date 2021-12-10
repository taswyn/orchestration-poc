<script setup>
import ComponentRouter from '@/components/ComponentRouter.vue';

defineProps({
    appList: Object
})
</script>

<template>
    <Suspense>
      <template #default>
        <div v-if="appList">
          <component :is="RoutedComponent" :component="appList.get('/cards')" :props="ApplicationProperties" />
        </div>
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
</template>