<script setup lang="ts">
import { getWorksData } from '~/api/queries'
import { CardProject, PageTitle } from '~/components/common'

const { data } = useAsyncData('projects-data', getWorksData)

onMounted(() => {
  console.log(data)
})
</script>

<template>
  <div v-if="data">
    <PageTitle text="Portfolio" />
    <div class="grid grid-cols-2 gap-6">
      <CardProject v-for="(p, i) in data.projects" :key="i + p.title" :project="p" />
    </div>
  </div>
</template>

<style scoped lang="css"></style>
