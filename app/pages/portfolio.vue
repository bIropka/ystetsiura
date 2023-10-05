<script setup lang="ts">
import { getWorksData } from '~/api/queries'
import { CardProject, PageTitle } from '~/components/common'
import CustomHead from '~/components/layout/CustomHead.vue'

const { data } = useAsyncData('projects-data', getWorksData)
</script>

<template>
  <div v-if="data">
    <CustomHead :title="`${data.title} - ` ?? ''" />
    <PageTitle :text="data.title" />
    <div class="sm:grid-cols-2 grid gap-6">
      <CardProject v-for="(p, i) in data.projects" :key="i + p.title" :project="p" />
    </div>
  </div>
</template>

<style scoped lang="css"></style>
