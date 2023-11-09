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
import { useStore } from '~/store'
import SectionTestimonials from '~/components/sections/SectionTestimonials.vue'

const { aboutMePage: data } = useStore()
</script>

<template>
  <div v-if="data">
    <CustomHead title="About Me" />
    <SectionTitle v-if="data.sectionAboutMe.title" :title="data.sectionAboutMe.title" />
    <div class="block lg:grid lg:grid-cols-2 mb-24 lg:gap-x-16">
      <SectionAboutMe :content="data.sectionAboutMe" class="mb-12 lg:mb-0" />
      <SectionAboutMeList :content="data.sectionAboutMeList" />
    </div>
    <div class="block lg:grid lg:grid-cols-2 mb-24 lg:gap-x-16">
      <SectionProgramming :content="data.sectionPerks" class="mb-12 lg:mb-0" />
      <SectionLanguage :content="data.sectionLanguages" />
    </div>
    <div class="block lg:grid lg:grid-cols-2 mb-24 lg:gap-x-16">
      <SectionEducation :content="data.sectionEducation" class="mb-12 lg:mb-0" />
      <SectionEducation :content="data.sectionExperience" />
    </div>
    <SectionTestimonials :content="data.sectionTestimonials" />
  </div>
</template>

<style scoped lang="css"></style>
