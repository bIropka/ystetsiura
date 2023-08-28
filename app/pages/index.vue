<script setup lang="ts">
import { AboutSection, ServicesSection, TestimonialsSection } from '~/components/sections'
import { getAboutMeData } from '~/api/queries'
import CustomHead from '~/components/layout/CustomHead.vue'

const { data } = useAsyncData('about-me-data', getAboutMeData)
</script>

<template>
  <div v-if="data">
    <CustomHead :title="`${data.title} - ` ?? ''" />
    <AboutSection :content="data.bio" />
    <ServicesSection :list="data.services ?? []" />
    <TestimonialsSection :list="data.testimonials ?? []" />
  </div>
</template>

<style scoped lang="css"></style>
