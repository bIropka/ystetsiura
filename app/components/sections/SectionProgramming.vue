<script setup lang="ts">
import SectionTitle from '~/components/common/SectionTitle.vue'
import { SectionPerksType } from '~/types/about-me'

defineProps<{ content: SectionPerksType }>()
</script>

<template>
  <div v-if="content">
    <SectionTitle v-if="content.title" :title="content.title" />
    <div v-if="content.list" class="grid grid-cols-2 gap-x-8">
      <div v-for="item in content.list" :key="item._id" class="mb-6">
        <div class="mb-1 flex items-center justify-between text-text-basic">
          <span v-if="item.title">{{ item.title }}</span>
          <span v-if="item.exp">{{ item.exp }} yrs</span>
        </div>
        <div class="relative h-1 w-full min-w-full bg-[rgba(0,0,0,.07)]">
          <div class="h-full overflow-hidden bg-[#7d7789]" :style="`width: ${item.percents}%`" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css"></style>
