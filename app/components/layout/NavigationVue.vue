<script setup lang="ts">
import { IconAbout, IconBlog, IconContact, IconResume, IconWorks } from '~/components/common/icons'

const links = [
  { title: 'About', icon: IconAbout, path: '/' },
  { title: 'resume', icon: IconResume, path: '/resume' },
  { title: 'works', icon: IconWorks, path: '/works' },
  /* { title: 'blog', icon: IconBlog, path: '/blog' }, */
  { title: 'contact', icon: IconContact, path: '/contact' },
]

const route = useRoute()
</script>

<template>
  <nav class="col-span-1 md:self-start md:rounded-3xl md:bg-board md:p-7">
    <h4 class="mb-4 text-left text-2xl text-body md:hidden">Pages</h4>
    <ul class="flex flex-col gap-y-4 text-left">
      <li v-for="link in links" :key="link.path">
        <NuxtLink
          :to="link.path"
          :class="{
            'text-accent md:bg-accent md:bg-gradient-to-br md:from-grad-start md:to-grad-stop md:text-heading md:shadow-nav':
              route.path === link.path,
            'text-heading md:text-body': route.path !== link.path,
          }"
          class="md:flex md:w-full md:flex-col md:items-center md:justify-center md:rounded-2xl md:bg-overlay md:py-3 md:hover:shadow-nav"
        >
          <component :is="link.icon" class="hidden md:block" />
          <span class="mt-1 text-sm uppercase">{{ link.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="css"></style>
