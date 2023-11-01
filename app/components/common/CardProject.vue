<script setup lang="ts">
import { ProjectType } from '~/types'
import sanityImageBuilder from '~/api/sanity-image-builder'

const infoIsVisible = ref<boolean>(false)

defineProps<{ project?: ProjectType }>()
</script>

<template>
  <div v-if="project" class="relative overflow-hidden rounded-lg bg-overlay md:rounded-xl">
    <button
      class="absolute right-0 top-0 z-[4] select-none rounded-bl-lg rounded-tr-lg bg-dark/70 px-4 py-2 text-3xl text-heading hover:bg-dark/90 md:rounded-bl-xl md:rounded-tr-xl"
      @click="() => (infoIsVisible = !infoIsVisible)"
    >
      <span v-if="infoIsVisible">&ndash;</span>
      <span v-else>+</span>
    </button>
    <div
      v-if="project.projectStartYear"
      class="font-pbold absolute z-[2] rounded-br-lg rounded-tl-lg bg-orange p-2 text-xl font-bold text-white md:rounded-br-xl md:rounded-tl-xl"
    >
      <span>{{ new Date(project.projectStartYear).getFullYear() }}</span>
      <span v-if="project.projectEndYear">
        - {{ new Date(project.projectEndYear).getFullYear() }}</span
      >
    </div>
    <div
      v-if="project.image"
      class="relative before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-[1] before:block before:rounded-t-xl before:bg-dark before:opacity-10 before:content-['']"
    >
      <nuxt-img
        class="h-full w-full object-cover object-top"
        :src="sanityImageBuilder(project.image).width(384).height(218).url()"
        :alt="project.title"
        format="webp"
        width="384"
        height="218"
      />
    </div>
    <div class="p-6">
      <h3 v-if="project.title" class="font-pbold text-xl font-bold text-heading">
        {{ project.title }}
      </h3>
      <ul v-if="project.category?.length">
        <li v-for="(c, i) in project.category" :key="i + c.title" class="inline text-sm text-body">
          <span v-if="i > 0">, </span>
          <span>{{ c.title }}</span>
        </li>
      </ul>
      <div v-if="project.role">
        <span class="text-heading">{{ project.role }}</span>
      </div>
    </div>
    <div
      class="absolute bottom-0 left-0 right-0 top-0 z-[2] bg-dark/95 p-8 duration-500"
      :class="[infoIsVisible ? 'opacity-1 visible' : 'invisible opacity-0']"
    >
      <ul v-if="project.links?.length" class="mb-2">
        <li v-for="(l, i) in project.links" :key="i + l.title" class="mr-2">
          <span v-if="i > 0" class="text-accent">, </span>
          <a :href="l.url" target="_blank" class="text-accent">{{ l.title }}</a>
        </li>
      </ul>
      <SanityContent :blocks="project.description" />
      <ul
        v-if="project.perks?.length"
        class="mt-3 flex flex-wrap content-start items-center gap-2 text-xs"
      >
        <li
          v-for="(p, i) in project.perks"
          :key="i + p.title"
          class="cursor-pointer rounded-md border border-overlay bg-heading px-1 py-0.5"
        >
          {{ p.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="css"></style>
