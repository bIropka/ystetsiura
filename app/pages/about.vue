<script setup lang="ts">
import { getAboutMeData } from '~/api/queries'
import CustomHead from '~/components/layout/CustomHead.vue'
import {
  SectionAboutMe,
  SectionAboutMeList,
  SectionLanguage,
  SectionProgramming,
} from '~/components/sections'
import SectionTitle from '~/components/common/SectionTitle.vue'

const { data } = useAsyncData('about-me-data', getAboutMeData)

onMounted(() => {
  console.log('about-me-data', data.value)
})
</script>

<template>
  <div v-if="data">
    <CustomHead title="About Me" />
    <SectionTitle v-if="data.sectionAboutMe.title" :title="data.sectionAboutMe.title" />
    <div class="mb-24 grid grid-cols-2 gap-x-16">
      <SectionAboutMe :content="data.sectionAboutMe" />
      <SectionAboutMeList :content="data.sectionAboutMeList" />
    </div>
    <div class="grid grid-cols-2 gap-x-16">
      <SectionProgramming :content="data.sectionPerks" />
      <SectionLanguage :content="data.sectionLanguages" />
    </div>
  </div>
</template>

<style scoped lang="css"></style>
