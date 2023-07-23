<script setup lang="ts">
import { PageTitle } from '~/components/common'
import { EducationSection } from '~/components/sections'
import { ExpItem, SkillItem } from '~/types'
import SkillsSection from '~/components/sections/SkillsSection.vue'

const education: ExpItem[] = [
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
    value: '80',
  },
  {
    title: 'Graphic Design',
    value: '75',
  },
  {
    title: 'Photoshop',
    value: '90',
  },
  {
    title: 'Illustrator',
    value: '50',
  },
]
</script>

<template>
  <div>
    <PageTitle text="Resume" />
    <EducationSection title="Education" :content="education" />
    <EducationSection title="Experience" :content="education" />
    <SkillsSection :content="skills" />
  </div>
</template>

<style scoped lang="css"></style>
