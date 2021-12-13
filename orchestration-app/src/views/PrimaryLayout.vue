<script setup>
import RoutedComponent from '@/components/RoutedComponent.vue';
import { useRoute} from 'vue-router'

const route = useRoute()

console.log(route.path)
console.log(route)

defineProps({
    appList: Object
})

const ApplicationProperties = {
  msg: "Testing Application Orchestration",
};
</script>

<template>
    <Suspense>
      <template #default>
        <div v-if="appList">
            Primary Layout
          <component :is="RoutedComponent" :component="appList.get(route.path)" :props="ApplicationProperties" />
        </div>
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
</template>