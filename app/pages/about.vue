<script setup lang="ts">
import CustomHead from '~/components/layout/CustomHead.vue'
import {
  SectionAboutMe,
  SectionAboutMeList,
  SectionLanguage,
  SectionProgramming,
} from '~/components/sections'
import SectionTitle from '~/components/common/SectionTitle.vue'
import SectionEducation from '~/components/sections/SectionEducation.vue'
import { useAboutMePageStore } from '~/store'
import SectionTestimonials from '~/components/sections/SectionTestimonials.vue'

const { data } = useAboutMePageStore()
</script>

<template>
  <div v-if="data">
    <CustomHead title="About Me" />
    <SectionTitle v-if="data.sectionAboutMe.title" :title="data.sectionAboutMe.title" />
    <div class="grid grid-cols-2 mb-24 gap-x-16">
      <SectionAboutMe :content="data.sectionAboutMe" />
      <SectionAboutMeList :content="data.sectionAboutMeList" />
    </div>
    <div class="grid grid-cols-2 mb-24 gap-x-16">
      <SectionProgramming :content="data.sectionPerks" />
      <SectionLanguage :content="data.sectionLanguages" />
    </div>
    <div class="grid grid-cols-2 mb-24 gap-x-16">
      <SectionEducation :content="data.sectionEducation" />
      <SectionEducation :content="data.sectionExperience" />
    </div>
    <SectionTestimonials :content="data.sectionTestimonials" />
  </div>
</template>

<style scoped lang="css"></style>
