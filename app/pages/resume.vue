<script setup lang="ts">
import { PageTitle } from '~/components/common'
import { EducationSection } from '~/components/sections'
import { ExpItemType, ExpLevel, SkillItem } from '~/types'
import SkillsSection from '~/components/sections/SkillsSection.vue'
import { IconEducation, IconExperience } from '~/components/common/icons'

const education: ExpItemType[] = [
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
]
</script>

<template>
  <div>
    <PageTitle text="Resume" />
    <EducationSection title="Education" :content="education" :icon="IconEducation" />
    <EducationSection title="Experience" :content="education" :icon="IconExperience" />
    <SkillsSection :content="skills" />
  </div>
</template>

<style scoped lang="css"></style>
