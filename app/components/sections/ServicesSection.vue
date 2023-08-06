<script setup lang="ts">
import { SectionTitle } from '~/components/common'
import type { ServiceType } from '~/types'

defineProps<{
  list: ServiceType[]
}>()
</script>

<template>
  <section class="mb-12">
    <SectionTitle text="What I'm Doing" />
    <div class="grid grid-cols-2 gap-7">
      <div v-for="s in list" :key="s.title" class="border-2 border-br rounded-2xl p-7 text-center">
        <h4 v-if="s.title" class="text-lg text-heading mt-1 mb-2">{{ s.title }}</h4>
        <div v-if="s.text" class="text-body">{{ s.text }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="css"></style>
