<script setup lang="ts">
import { IconAbout, IconContact, IconResume, IconWorks } from '~/components/common/icons'

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
  <nav class="block bg-board col-span-1 rounded-3xl p-7 self-start">
    <ul class="flex flex-col gap-y-4">
      <li v-for="link in links" :key="link.path">
        <NuxtLink
          :to="link.path"
          :class="{
            'shadow-nav bg-accent bg-gradient-to-br from-grad-start to-grad-stop text-heading':
              route.path === link.path,
            'text-body': route.path !== link.path,
          }"
          class="flex flex-col justify-center items-center w-full bg-overlay rounded-2xl py-3 hover:shadow-nav"
        >
          <component :is="link.icon" />
          <span class="uppercase mt-1 text-sm">{{ link.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="css"></style>
