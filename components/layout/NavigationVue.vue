<script setup lang="ts">
type LinkType = {
  title: string
  icon: string
  path: string
}
const links: LinkType[] = [
  { title: 'About', icon: 'lucide:user-2', path: '/' },
  { title: 'resume', icon: 'lucide:file-bar-chart', path: '/resume' },
  { title: 'works', icon: 'lucide:package', path: '/works' },
  { title: 'blog', icon: 'lucide:book-open', path: '/blog' },
  { title: 'contact', icon: 'lucide:book', path: '/contact' },
]
</script>

<template>
  <nav>
    <ul>
      <li v-for="link in links" :key="link.path">
        <NuxtLink :to="link.path">
          <span :class="link.icon"></span>
          <span>{{ link.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="css"></style>
