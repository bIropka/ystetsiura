<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import { PageTitle, SectionTitle } from '~/components/common'
import { IconBlog } from '~/components/common/icons'

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
    <article>
      <PageTitle text="About Me" />
      <p>
        I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development
        and print media. I enjoy turning complex problems into simple, beautiful and intuitive
        designs.
      </p>
      <p>
        My job is to build your website so that it is functional and user-friendly but at the same
        time attractive. Moreover, I add personal touch to your product and make sure that is
        eye-catching and easy to use. My aim is to bring across your message and identity in the
        most creative way. I created web design for many famous brand companies.
      </p>
    </article>
    <section class="mt-12">
      <SectionTitle text="What I'm Doing" />
      <div class="grid grid-cols-2 gap-7">
        <div
          v-for="s in services"
          :key="s.title"
          class="border-2 border-br rounded-2xl p-7 text-center"
        >
          <div class="text-accent flex justify-center">
            <component :is="s.icon" />
          </div>
          <h4 class="text-lg text-heading mt-1 mb-2">{{ s.title }}</h4>
          <div class="text-body">{{ s.text }}</div>
        </div>
      </div>
    </section>
    <section class="mt-12">
      <SectionTitle text="Testimonials" />
      <swiper-container>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper-container>
    </section>
  </div>
</template>

<style scoped lang="css"></style>
