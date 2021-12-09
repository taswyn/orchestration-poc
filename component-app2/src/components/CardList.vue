<script setup>
import NavCard from './NavCard.vue'
defineProps({
  title: String,
  card: Object
})

// watch(
//   () => this.$route.name,
//   async () => this.getCardData()
// )
</script>

<template>
  <section>
    <h2>{{ title }}</h2>
    <div v-if="cards">
      <div v-for="card in cards" :key="card.title">{{ card.title }}</div>
      <router-link
        v-for="card in cards"
        :key="card.title"
        :to="{ name: 'card.scroll', params: { id: card.id, card: card } }"
      >
        {{ card.title }}
      </router-link>
    </div>
  </section>
  <section>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: null
    }
  },
  methods: {
    async getCardData() {
      this.cards = await fetch('http://localhost:3064/cards').then(response => response.json())
    }
  },
  async created() {
    this.getCardData()
    this.$watch(
      () => this.$route.params.name,
      async () => this.getCardData()
    )
  }
}
</script>
