<script setup lang="ts">
import { SectionAboutMeType } from '~/types/about-me'
defineProps<{
  content: SectionAboutMeType
}>()
</script>

<template>
  <article v-if="content">
    <SanityContent v-if="content.text" :blocks="content.text" />
  </article>
</template>

<style scoped lang="css"></style>
