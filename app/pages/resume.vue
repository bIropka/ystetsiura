<script setup lang="ts">
import { PageTitle } from '~/components/common'
import { EducationSection } from '~/components/sections'
import SkillsSection from '~/components/sections/SkillsSection.vue'
import { IconEducation, IconExperience } from '~/components/common/icons'
import { getResumeData } from '~/api/queries'

const { data } = useAsyncData('resume-data', getResumeData)
</script>

<template>
  <div v-if="data">
    <PageTitle text="Resume" />
    <EducationSection v-if="data.edu" title="Education" :content="data.edu" :icon="IconEducation" />
    <EducationSection
      v-if="data.exp"
      title="Experience"
      :content="data.exp"
      :icon="IconExperience"
    />
    <SkillsSection v-if="data.perks" :content="data.perks" />
  </div>
</template>

<style scoped lang="css"></style>
