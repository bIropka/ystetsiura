<script setup lang="ts">
import { SectionLanguagesType } from '~/types/about-me'
import SectionTitle from '~/components/common/SectionTitle.vue'

defineProps<{ content: SectionLanguagesType }>()
</script>

<template>
  <div v-if="content">
    <SectionTitle v-if="content.title" :title="content.title" />
    <div v-if="content.list" class="grid grid-cols-2 gap-y-6 sm:gap-y-6 sm:grid-cols-4 gap-x-6">
      <div v-for="item in content.list" :key="item._id" class="text-center text-text-basic">
        <v-progress-circular color="#7d7789" :model-value="item.percents" :size="100" :width="3">
          <template #default>
            <span class="text-sm">{{ item.level }}</span>
          </template>
        </v-progress-circular>
        <div class="mt-2">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css"></style>
