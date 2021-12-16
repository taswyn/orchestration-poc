<script setup>
import NavCard from './NavCard.vue'
import useNav from '@/composables/useNav'

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

