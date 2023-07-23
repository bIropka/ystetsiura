<script setup lang="ts">
import { SectionTitle } from '~/components/common'
import { SkillItem } from '~/types'

defineProps<{ content: SkillItem[] }>()
</script>

<template>
  <section class="mb-12">
    <SectionTitle text="My Skills" />
    <ul>
      <li v-for="item in content" :key="item.title">{{ item.title }}</li>
    </ul>
  </section>
</template>

<style scoped lang="css"></style>
