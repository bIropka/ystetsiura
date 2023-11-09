<script setup lang="ts">
import sanityImageBuilder from '~/api/sanity-image-builder'
import { SocialType } from '~/types'

defineProps<{
  list: SocialType[]
  name: string
}>()
</script>

<template>
  <ul class="flex items-center justify-end">
    <li v-for="(item, i) in list" :key="i + item.title" class="ml-4">
      <NuxtLink v-if="item.url && item.icon" :to="item.url" target="_blank" :title="item.title">
        <nuxt-img
          :src="sanityImageBuilder(item.icon).url()"
          :alt="`${name ?? 'my name'}, ${item.title}`"
          format="svg"
        />
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped lang="css"></style>
