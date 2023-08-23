<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: 'The Page Title',
  },
})
</script>

<template>
  <div>
    <h2 class="font-pbold font-bold text-3xl relative pb-4 mb-6 text-heading">{{ text }}</h2>
  </div>
</template>

<style scoped lang="css">
h2:before {
  @apply content-[''] block w-4 h-1 bg-orange absolute left-0 bottom-0;
}
h2:after {
  @apply content-[''] block w-8 h-1 bg-accent absolute left-4 bottom-0;
}
</style>
