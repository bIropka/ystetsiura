<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  text: String
  icon?: Component
}>()
</script>

<template>
  <div class="flex items-center mb-6">
    <component :is="icon" v-if="icon" class="mr-3" />
    <h3 class="font-pbold text-2xl text-heading">{{ text }}</h3>
  </div>
</template>

<style scoped lang="css"></style>
