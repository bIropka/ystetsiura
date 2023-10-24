<script setup lang="ts">
import { getAboutMeData } from '~/api/queries'
import CustomHead from '~/components/layout/CustomHead.vue'
import { SectionAboutMe } from '~/components/sections'

const { data } = useAsyncData('about-me-data', getAboutMeData)

onMounted(() => {
  console.log('about-me-data', data.value)
})
</script>

<template>
  <div v-if="data">
    <CustomHead title="About Me" />
    <SectionAboutMe :content="data.sectionAboutMe" :list="data.sectionAboutMeList" />
  </div>
</template>

<style scoped lang="css"></style>
