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
    <h2 class="font-pbold text-3xl">{{ text }}</h2>
    <div>decor</div>
  </div>
</template>

<style scoped lang="css"></style>
