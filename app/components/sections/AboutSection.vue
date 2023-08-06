<script setup lang="ts">
import { PageTitle } from '~/components/common'

defineProps({
  content: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <article class="mb-12">
    <PageTitle text="About Me" />
    <SanityContent :blocks="content" />
  </article>
</template>

<style scoped lang="css"></style>
