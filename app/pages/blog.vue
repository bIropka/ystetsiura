<script setup lang="ts">
import { CardPost, PageTitle } from '~/components/common'
import { getBlogData } from '~/api/queries'

const { data } = useAsyncData('blog-data', getBlogData)
</script>

<template>
  <div v-if="data">
    <PageTitle v-if="data.title" :text="data.title" />
    <div class="grid grid-cols-2 gap-6">
      <CardPost v-for="(p, i) in data.posts" :key="i + p.title" :post="p" />
    </div>
  </div>
</template>

<style scoped lang="css"></style>
