<script setup lang="ts">
import SectionTitle from '~/components/common/SectionTitle.vue'
import { SectionEducationType } from '~/types/about-me'

defineProps<{ content: SectionEducationType }>()

const getDate = (date: string | undefined) =>
  date &&
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(date))
</script>

<template>
  <div v-if="content">
    <SectionTitle v-if="content.title" :title="content.title" />
    <div v-if="content.list" class="edu-list relative py-4">
      <div
        v-for="item in content.list"
        :key="item._id"
        class="edu-item relative flex justify-between"
      >
        <div v-if="item.startDate" class="w-48 shrink-0">
          {{ getDate(item.startDate) }} -
          {{ item.isCurrent ? 'present' : getDate(item.finishDate) }}
        </div>
        <div class="grow">
          <div v-if="item.title">{{ item.title }}</div>
          <div v-if="item.position">{{ item.position }}</div>
          <div v-if="item.text">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.edu-list:before {
  @apply absolute left-0 top-0.5 block h-full w-px bg-black-tr content-[''];
}
.edu-item:before {
  @apply absolute -left-2.5 top-0 block h-5 w-5 rounded-full border border-solid border-black-tr bg-surface-board content-[''];
}
</style>
