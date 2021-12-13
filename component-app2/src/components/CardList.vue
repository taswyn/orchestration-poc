<script setup>
import NavCard from './NavCard.vue'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

defineProps({
  title: String,
  card: Object,
  id: Number
})

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
</script>

<template>
  <div>
    <div>
      <h3>{{ title }}</h3>
      <div v-if="cards">
        <nav class="tile is-parent">
          <router-link
            v-for="card in cards"
            :key="card.title"
            :to="{ name: 'card.scroll', params: { id: card.id } }"
          >
            <NavCard :card="card"></NavCard>
          </router-link>
        </nav>
      </div>
    </div>
    <div v-if="cards">
      <router-link :key="id" :to="{ name: 'card.show', params: { id: id } }">
        <router-view :cards="cards"></router-view>
      </router-link>
    </div>
  </div>
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
      () => this.$route.matched.name,
      async () => this.getCardData()
    )
  }
}
</script>
