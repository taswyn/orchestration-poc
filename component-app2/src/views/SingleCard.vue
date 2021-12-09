<script setup>
defineProps({
  card: Object,
  id: Number
})
</script>

<template>
    <section>
        <div class="card">
            <header class="card-header">
                <h2 class="card-header-title">
                    {{ card.title }}
                </h2>
            </header>
            <figure class="card-image">
                <img :src="`/images/${card.image.url}`" :alt="card.image.alt" />
            </figure>
            <div class="card-content">
                <p>{{ card.description }}</p>
            </div>
        </div>
    </section>
</template>