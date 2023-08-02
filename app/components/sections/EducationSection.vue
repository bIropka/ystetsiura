<script setup lang="ts">
import { Component } from 'vue/dist/vue'
import { SectionTitle } from '~/components/common'
import { ExpItemType } from '~/types'

defineProps<{ title: String; content: ExpItemType[]; icon?: Component }>()
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
        <h4 class="text-heading">{{ item.title }}</h4>
        <div class="text-body my-1 opacity-70">{{ item.date }}</div>
        <div class="text-body">{{ item.text }}</div>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="css">
.decorated {
  @apply z-[1] before:content-[''] before:block before:w-px before:h-[calc(100%+14px)] before:absolute before:-left-5 before:top-3 before:bg-br before:-z-[1];
}
</style>
