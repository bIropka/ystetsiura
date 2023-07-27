<script setup lang="ts">
import { SectionTitle } from '~/components/common'
import type { ServiceType } from '~/types'

defineProps<{
  services: ServiceType[]
}>()
</script>

<template>
  <section class="mb-12">
    <SectionTitle text="What I'm Doing" />
    <div class="grid grid-cols-2 gap-7">
      <div
        v-for="s in services"
        :key="s.title"
        class="border-2 border-br rounded-2xl p-7 text-center"
      >
        <div class="text-accent flex justify-center">
          <component :is="s.icon" />
        </div>
        <h4 class="text-lg text-heading mt-1 mb-2">{{ s.title }}</h4>
        <div class="text-body">{{ s.text }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="css"></style>
