<script setup lang="ts">
import { CardPost, PageTitle } from '~/components/common'
import CustomHead from '~/components/layout/CustomHead.vue'
import { useBlogPageStore } from '~/store'

const { data } = useBlogPageStore()
</script>

<template>
  <div v-if="data">
    <CustomHead :title="`${data.title} - ` ?? ''" />
    <PageTitle v-if="data.title" :text="data.title" />
    <div class="grid grid-cols-2 gap-6">
      <CardPost v-for="(p, i) in data.posts" :key="i + p.title" :post="p" />
    </div>
  </div>
</template>

<style scoped lang="css"></style>
