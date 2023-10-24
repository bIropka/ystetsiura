<script setup lang="ts">
import SectionTitle from '~/components/common/SectionTitle.vue'
import { SectionAboutMeType, SectionAboutMeListType } from '~/types/about-me'
defineProps<{
  content: SectionAboutMeType
  list: SectionAboutMeListType
}>()
</script>

<template>
  <div v-if="content">
    <SectionTitle :title="content.title" />
    <div class="grid grid-cols-2 gap-x-16">
      <article>
        <SanityContent v-if="content.text" :blocks="content.text" />
      </article>
      <ul v-if="list.list">
        <li v-for="item in list.list" :key="item._key" class="mb-8 flex">
          <span v-if="item.label" class="inline-block min-w-[100px] font-bold text-text-basic">
            {{ item.label }}:
          </span>
          <span v-if="item.value" class="inline-block text-text-basic">{{ item.value }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="css"></style>
