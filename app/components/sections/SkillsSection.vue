<script setup lang="ts">
import { SectionTitle } from '~/components/common'
import { PerkType } from '~/types'

defineProps<{ content: PerkType[] }>()

/* const getValueText = (value: ExpLevel) => {
  switch (value) {
    case ExpLevel.BEGINNER:
      return 'w-1/4'
    case ExpLevel.MEDIUM:
      return 'w-1/2'
    case ExpLevel.ADVANCED:
      return 'w-3/4'
    case ExpLevel.EXPERT:
      return 'w-full'
    default:
      return ''
  }
} */
</script>

<template>
  <section class="mb-12">
    <SectionTitle text="My Skills" />
    <ul class="border rounded-3xl border-br py-1 px-11 block w-full">
      <li
        v-for="item in content"
        :key="item.title"
        class="flex justify-between items-center h-6 bg-gradient-to-br from-grad-start to-grad-stop rounded-3xl px-4 my-8"
        :class="`w-[${item.level}%]`"
      >
        <span class="text-heading text-xs">{{ item.title }}</span>
        <span class="text-heading text-xs">{{ item.level }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="css"></style>
