<script setup lang="ts">
import { computed } from 'vue'
import {
  IconCodersRank,
  IconGitHub,
  IconHackersRank,
  IconLinkedin,
} from '~/components/common/icons'

const props = defineProps<{ type?: string }>()

const icon = computed(() => {
  switch (props.type) {
    case 'CodersRank':
      return IconCodersRank
    case 'GitHub':
      return IconGitHub
    case 'HackerRank':
      return IconHackersRank
    case 'LinkedIn':
      return IconLinkedin
    default:
      return null
  }
})
</script>

<template>
  <component :is="icon" :if="icon" />
</template>

<style scoped lang="css"></style>
