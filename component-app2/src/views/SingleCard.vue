<script setup>
defineProps({
  id: Number
})
</script>

<template>
    <div>
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
      cards: null
    }
  },
  methods: {
    async getCardData() {
      this.cards = await fetch(`http://localhost:3064/cards`).then(response => response.json())
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