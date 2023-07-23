<script setup lang="ts">
import { SectionTitle } from '~/components/common'
import { ExpItem } from '~/types'

defineProps<{ title: String; content: ExpItem[] }>()
</script>

<template>
  <section class="mb-12">
    <SectionTitle :text="title" />
    <ul>
      <li v-for="item in content" :key="item.title">
        <h4 class="">{{ item.title }}</h4>
        <div class="">{{ item.date }}</div>
        <div class="">{{ item.text }}</div>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="css"></style>
