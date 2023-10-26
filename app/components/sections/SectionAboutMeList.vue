<script setup lang="ts">
import { SectionAboutMeListType } from '~/types/about-me'

defineProps<{
  content: SectionAboutMeListType
}>()
</script>

<template>
  <ul v-if="content.list">
    <li v-for="item in content.list" :key="item._key" class="mb-8 flex">
      <span v-if="item.label" class="inline-block min-w-[100px] font-bold text-text-basic">
        {{ item.label }}:
      </span>
      <span v-if="item.value" class="inline-block text-text-basic">{{ item.value }}</span>
    </li>
  </ul>
</template>

<style scoped lang="css"></style>
