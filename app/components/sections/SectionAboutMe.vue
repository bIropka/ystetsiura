<script setup lang="ts">
import SectionTitle from '~/components/common/SectionTitle.vue'
import { SectionAboutMeType } from '~/types/about-me'
defineProps<{
  data: SectionAboutMeType
}>()
</script>

<template>
  <div v-if="data">
    <SectionTitle :title="data.title" />
    <div class="flex w-full justify-between text-text-basic">
      <div v-if="data.text" class="left w-1/2">
        <SanityContent :blocks="data.text" />
      </div>
      <div class="right w-1/2">
        <ul v-if="data.list">
          <li v-for="item in data.list" :key="item._key" class="mb-5 flex">
            <span v-if="item.label" class="inline-block min-w-[100px] font-bold">
              {{ item.label }}:
            </span>
            <span v-if="item.value" class="inline-block">{{ item.value }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css"></style>
