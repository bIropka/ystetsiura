<script setup lang="ts">
import { AboutSection, ServicesSection, TestimonialsSection } from '~/components/sections'
import { getAboutMeData } from '~/api/queries'

const { data } = useAsyncData('about-me-data', getAboutMeData)
</script>

<template>
  <div v-if="data">
    <AboutSection :content="data.bio" />
    <ServicesSection :list="data.services ?? []" />
    <TestimonialsSection :list="data.testimonials ?? []" />
  </div>
</template>

<style scoped lang="css"></style>
