<script setup lang="ts">
import { PageTitle } from '~/components/common'
import { EducationSection } from '~/components/sections'
import SkillsSection from '~/components/sections/SectionPerks.vue'
import { IconEducation, IconExperience } from '~/components/common/icons'
import { getResumeData } from '~/api/queries'
import CustomHead from '~/components/layout/CustomHead.vue'

const { data } = useAsyncData('resume-data', getResumeData)
</script>

<template>
  <div v-if="data">
    <CustomHead :title="`${data.title} - ` ?? ''" />
    <PageTitle :text="data.title" />
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
