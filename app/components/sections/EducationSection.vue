<script setup lang="ts">
import { Component } from 'vue'
import { SectionTitle } from '~/components/common'
import { EduExpType, PerkType } from '~/types'

const props = defineProps<{ title: String; content: EduExpType[]; icon?: Component }>()

const getDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(date))

const getPerksList = (list: EduExpType[]) => {
  const result = new Set<string>()
  list.forEach((item: EduExpType) => {
    item.perks?.forEach((perk: PerkType) => {
      result.add(perk.title)
    })
  })
  return result
}
const perks = ref<Set<string>>(getPerksList(props.content))
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
        class="mb-5 relative"
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
        <div v-if="item.startDate && (item.finishDate || item.isCurrent)" class="text-grey text-xs">
          <span>{{ getDate(item.startDate) }}</span>
          <span> - </span>
          <span v-if="item.isCurrent">Present</span>
          <span v-else-if="item.finishDate">{{ getDate(item.finishDate) }}</span>
        </div>
        <h4 v-if="item.title">
          <span class="text-heading text-lg font-medium">{{ item.title }}</span>
          <span class="text-body ml-2">/ {{ item.type }}</span>
        </h4>
        <div v-if="item.text" class="text-body text-sm">{{ item.text }}</div>
        <ul class="flex flex-wrap items-center content-start text-xs mt-2">
          <li
            v-for="(p, i) in item.perks"
            :key="i + p.title"
            class="border cursor-pointer mr-2 py-0.5 px-1 rounded-md"
            :class="
              filtered.has(p.title) ? 'border-overlay bg-heading' : 'bg-grey border-br shadow-2xl'
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
  @apply z-[1] before:content-[''] before:block before:w-px before:h-[calc(100%+14px)] before:absolute before:-left-5 before:top-3 before:bg-br before:-z-[1];
}
</style>
