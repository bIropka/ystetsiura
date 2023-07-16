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
    <h3>{{ text }}</h3>
  </div>
</template>

<style scoped lang="css"></style>
