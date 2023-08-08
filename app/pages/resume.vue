<script setup lang="ts">
import { onMounted } from 'vue'
import { PageTitle } from '~/components/common'
import { EducationSection } from '~/components/sections'
import SkillsSection from '~/components/sections/SkillsSection.vue'
import { IconEducation, IconExperience } from '~/components/common/icons'
import { getResumeData } from '~/api/queries'

/* const education: ExpItemType[] = [
  {
    title: 'University School of the Arts',
    date: '2015 — Present',
    text: 'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.',
  },
  {
    title: 'New York Academy of Art',
    date: '2005 — 2007',
    text: 'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.',
  },
  {
    title: 'High School of Art and Design',
    date: '2003 — 2005',
    text: 'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.',
  },
]
const skills: SkillItem[] = [
  {
    title: 'Web Design',
    value: ExpLevel.ADVANCED,
  },
  {
    title: 'Graphic Design',
    value: ExpLevel.MEDIUM,
  },
  {
    title: 'Photoshop',
    value: ExpLevel.EXPERT,
  },
  {
    title: 'Illustrator',
    value: ExpLevel.BEGINNER,
  },
] */

const { data } = useAsyncData('resume-data', getResumeData)

onMounted(() => {
  console.log(data.value)
})
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
