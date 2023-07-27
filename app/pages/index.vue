<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import { IconBlog } from '~/components/common/icons'
import { AboutSection, ServicesSection } from '~/components/sections'

const services = [
  {
    icon: IconBlog,
    title: 'Team Leading',
    text: 'The most modern and high-quality design made at a professional level.',
  },
  {
    icon: IconBlog,
    title: 'Engineers Interviewing',
    text: 'High-quality development of sites at the professional level.',
  },
  {
    icon: IconBlog,
    title: 'Mentoring',
    text: 'Professional development of applications for iOS and Android.',
  },
  {
    icon: IconBlog,
    title: 'Programming',
    text: 'I make high-quality photos of any category at a professional level.',
  },
  {
    icon: IconBlog,
    title: 'Software Analysis and Design',
    text: 'I make high-quality photos of any category at a professional level.',
  },
]

register()
</script>

<template>
  <div>
    <AboutSection />
    <ServicesSection :services="services" />
  </div>
</template>

<style scoped lang="css"></style>
