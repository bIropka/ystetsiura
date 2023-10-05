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
    <h2 class="font-pbold relative mb-6 pb-4 text-3xl font-bold text-heading">{{ text }}</h2>
  </div>
</template>

<style scoped lang="css">
h2:before {
  @apply absolute bottom-0 left-0 block h-1 w-4 bg-orange content-[''];
}
h2:after {
  @apply absolute bottom-0 left-4 block h-1 w-8 bg-accent content-[''];
}
</style>
