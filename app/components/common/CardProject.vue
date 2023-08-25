<script setup lang="ts">
import { ProjectType } from '~/types'
import sanityImageBuilder from '~/api/sanity-image-builder'

const infoIsVisible = ref<boolean>(false)

defineProps<{ project?: ProjectType }>()
</script>

<template>
  <div v-if="project" class="relative bg-overlay rounded-xl overflow-hidden">
    <button
      class="absolute z-[4] top-0 right-0 bg-dark/70 hover:bg-dark/90 text-3xl text-heading py-2 px-4 rounded-tr-xl rounded-bl-xl select-none"
      @click="() => (infoIsVisible = !infoIsVisible)"
    >
      +
    </button>
    <div
      v-if="project.projectStartYear"
      class="rounded-tl-xl rounded-br-xl bg-orange absolute p-2 text-xl text-white font-pbold font-bold z-[2]"
    >
      <span>{{ new Date(project.projectStartYear).getFullYear() }}</span>
      <span v-if="project.projectEndYear">
        - {{ new Date(project.projectEndYear).getFullYear() }}</span
      >
    </div>
    <div
      v-if="project.image"
      class="relative before:opacity-10 before:rounded-t-xl before:z-[1] before:content-[''] before:block before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:bg-dark"
    >
      <nuxt-img
        class="w-full h-full object-cover object-top"
        :src="sanityImageBuilder(project.image).width(384).height(218).url()"
        :alt="project.title"
        format="webp"
        width="384"
        height="218"
      />
    </div>
    <div class="p-6">
      <h3 v-if="project.title" class="text-heading text-xl font-bold font-pbold">
        {{ project.title }}
      </h3>
      <ul v-if="project.category?.length">
        <li v-for="(c, i) in project.category" :key="i + c.title" class="inline text-body text-sm">
          <span v-if="i > 0">, </span>
          <span>{{ c.title }}</span>
        </li>
      </ul>
      <div v-if="project.role">
        <span class="text-heading">{{ project.role }}</span>
      </div>
    </div>
    <div
      class="absolute left-0 top-0 right-0 bottom-0 duration-500 bg-dark/95 z-[2] p-8"
      :class="[infoIsVisible ? 'opacity-1 visible' : 'opacity-0 invisible']"
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
        class="flex flex-wrap items-center content-start text-xs gap-2 mt-3"
      >
        <li
          v-for="(p, i) in project.perks"
          :key="i + p.title"
          class="border cursor-pointer py-0.5 px-1 rounded-md border-overlay bg-heading"
        >
          {{ p.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="css"></style>
