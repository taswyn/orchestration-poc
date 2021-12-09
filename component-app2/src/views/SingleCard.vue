<script setup>
import UpNav from '@/components/UpNav.vue'
defineProps({
  id: Number
})
</script>

<template>
    <UpNav></UpNav>
    <div v-if="card">
        <div class="card">
            <header class="card-header">
                <h3 class="card-header-title">
                    {{ card.title }}
                </h3>
            </header>
            <figure class="card-image">
                <img :src="`/images/${card.image.url}`" :alt="card.image.alt" />
            </figure>
            <div class="card-content">
                <p>{{ card.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      card: null
    }
  },
  methods: {
    async getCardData() {
      this.card = await fetch(`http://localhost:3064/cards/${this.id}`).then(response => response.json())
    }
  },
  async created() {
    this.getCardData()
    this.$watch(
      () => this.$route.params.id,
      async () => this.getCardData()
    )
  }
}
</script>