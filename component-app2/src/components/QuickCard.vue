<script setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

defineProps({
    cards: Object,
    id: Number
})

//console.log(cards)
const route = useRoute()
const cardId = ref()
cardId.value = parseInt(route.params.id)

watch(
    () => route.params.id,
    newId => {
        cardId.value = parseInt(newId)
        console.log(newId)
    }
)

console.log(cardId)
/* if (this.$route.params && !card) {
    card = this.$route.params.card
} */
</script>

<template>
    <div class="card">
        <header class="card-header">
            <h3 class="card-header-title">{{ cards[id].title }}</h3>
        </header>
        <figure class="card-image">
            <img :src="`/images/${cards[id].image.filename}`" :alt="cards[id].image.alt" />
        </figure>
        <div class="card-content">
            <p>{{ cards[id].description.short }}</p>
        </div>
    </div>
</template>
