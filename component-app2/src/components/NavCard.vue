<script setup>
defineProps({
  card: Object
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
                <img :src="`/images/${card.image.filename}`" :alt="card.image.alt" />
            </figure>
            <div class="card-content">
                <p>{{ card.description.short }}</p>
            </div>
        </div>
    </section>
</template>