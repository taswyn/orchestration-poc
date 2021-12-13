<script setup>
import NavCard from './NavCard.vue'
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import useNav from '@/composables/useNav'

/* defineProps({
  title: String,
  card: Object,
  id: Number
}) */

/* const $route = useRoute()
const cardID = ref()
cardID.value = $route.params.id

watch(
  () => $route.params.id,
  newId => {
    cardID.value = parseInt(newId)
    console.log(newId)
  }
) */
const router = useRouter()

const {applicationsList, fetchNav} = useNav()
fetchNav()
</script>

<template>
  <div>
    Nav
    <div>
      <div v-if="applicationsList">
        <nav class="tile is-parent">
          <NavCard v-for="app in applicationsList" :key="app.mapId" :application="app"></NavCard>
        </nav>
      </div>
    </div>
  </div>
</template>

