<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: 'The Section Title',
  },
})
</script>

<template>
  <div>
    <h3 class="font-pbold text-2xl mb-6 text-heading">{{ text }}</h3>
  </div>
</template>

<style scoped lang="css"></style>
