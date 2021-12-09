<script setup>
import RouteView from '@/components/RouteView.vue'
import AppHome from '@/views/AppHome.vue'
</script>

<template>
  <div class="container">
    <section class="section">
      <div class="tile">
        <div class="tile is-vertical">
          <div class="tile is-ancestor">
            <div class="tile is-child is-4 notification is-warning">This is Application 2: Cards</div>
            <div class="tile is-child is-8 notification is-secondary">Current route: <RouteView /></div>
          </div>

          <div class="tile notification is-child is-danger">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
