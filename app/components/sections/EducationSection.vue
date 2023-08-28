<script setup lang="ts">
import { Component } from 'vue'
import { SectionTitle } from '~/components/common'
import { EduExpType } from '~/types'

defineProps<{ title: String; content: EduExpType[]; icon?: Component }>()

const getDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(date))

const filtered = ref<Set<string>>(new Set())

const updateFiltered = (perk: string) =>
  filtered.value.has(perk) ? filtered.value.delete(perk) : filtered.value.add(perk)
</script>

<template>
  <section class="mb-12">
    <SectionTitle :text="title" :icon="icon" />
    <ul class="pl-10">
      <li
        v-for="(item, index) in content"
        :key="item.title"
        class="relative mb-5"
        :class="{ decorated: index < content.length - 1 }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          class="absolute -left-7 top-0.5"
        >
          <circle opacity="0.15" cx="8.5" cy="8.5" r="8.5" fill="#0D86FF" />
          <circle cx="8.5" cy="8.5" r="4.5" fill="#0D86FF" />
        </svg>
        <div v-if="item.startDate && (item.finishDate || item.isCurrent)" class="text-xs text-grey">
          <span>{{ getDate(item.startDate) }}</span>
          <span> - </span>
          <span v-if="item.isCurrent">Present</span>
          <span v-else-if="item.finishDate">{{ getDate(item.finishDate) }}</span>
        </div>
        <h4 v-if="item.title">
          <span class="text-lg font-medium text-heading">{{ item.title }}</span>
          <span class="ml-2 text-body">/ {{ item.type }}</span>
        </h4>
        <div v-if="item.text" class="text-sm text-body">{{ item.text }}</div>
        <ul class="flex flex-wrap content-start items-center text-xs">
          <li
            v-for="(p, i) in item.perks"
            :key="i + p.title"
            class="mr-2 mt-2 cursor-pointer rounded-md border px-1 py-0.5"
            :class="
              filtered.has(p.title) ? 'border-overlay bg-heading' : 'shadow-2xl border-br bg-grey'
            "
            @click="() => updateFiltered(p.title)"
          >
            {{ p.title }}
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="css">
.decorated {
  @apply z-[1] before:absolute before:-left-5 before:top-3 before:-z-[1] before:block before:h-[calc(100%+14px)] before:w-px before:bg-br before:content-[''];
}
</style>
