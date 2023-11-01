<script setup lang="ts">
import CustomHead from '~/components/layout/CustomHead.vue'
import {
  SectionAboutMe,
  SectionAboutMeList,
  SectionLanguage,
  SectionProgramming,
} from '~/components/sections'
import SectionTitle from '~/components/common/SectionTitle.vue'
import GridVue from '~/components/layout/GridVue.vue'
import SectionEducation from '~/components/sections/SectionEducation.vue'
import { useAboutMePageStore } from '~/store'

const { data } = useAboutMePageStore()
</script>

<template>
  <div v-if="data">
    <CustomHead title="About Me" />
    <SectionTitle v-if="data.sectionAboutMe.title" :title="data.sectionAboutMe.title" />
    <GridVue classes="mb-24 gap-x-16" cols="2">
      <SectionAboutMe :content="data.sectionAboutMe" />
      <SectionAboutMeList :content="data.sectionAboutMeList" />
    </GridVue>
    <GridVue classes="mb-24 gap-x-16" cols="2">
      <SectionProgramming :content="data.sectionPerks" />
      <SectionLanguage :content="data.sectionLanguages" />
    </GridVue>
    <GridVue classes="mb-24 gap-x-16" cols="2">
      <SectionEducation :content="data.sectionEducation" />
      <SectionEducation :content="data.sectionExperience" />
    </GridVue>
  </div>
</template>

<style scoped lang="css"></style>
