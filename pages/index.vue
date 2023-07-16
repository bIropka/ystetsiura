<script setup lang="ts">
import { PageTitle, SectionTitle } from '~/components/common'
import { IconBlog } from '~/components/common/icons'

const services = [
  {
    icon: IconBlog,
    title: 'Web Design',
    text: 'The most modern and high-quality design made at a professional level.',
  },
  {
    icon: IconBlog,
    title: 'Web Development',
    text: 'High-quality development of sites at the professional level.',
  },
  {
    icon: IconBlog,
    title: 'Mobile Apps',
    text: 'Professional development of applications for iOS and Android.',
  },
  {
    icon: IconBlog,
    title: 'Photography',
    text: 'I make high-quality photos of any category at a professional level.',
  },
]
</script>

<template>
  <div>
    <PageTitle text="About Me" />
    <article>
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
    <section>
      <SectionTitle text="What I'm Doing" />
      <div class="grid grid-cols-2">
        <div v-for="s in services" :key="s.title">
          <component :is="s.icon" />
          <h4>{{ s.title }}</h4>
          <p>{{ s.text }}</p>
        </div>
      </div>
    </section>
    <section>
      <SectionTitle text="Testimonials" />
    </section>
  </div>
</template>

<style scoped lang="css"></style>
