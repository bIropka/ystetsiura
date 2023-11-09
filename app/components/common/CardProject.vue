<script setup lang="ts">
import { ProjectType } from '~/types'
import sanityImageBuilder from '~/api/sanity-image-builder'

const isActive = ref<boolean>(false)

const isTouchable = computed(() => 'ontouchstart' in window) || navigator.maxTouchPoints > 0

const onTouchEnd = (event: TouchEvent) => {
  if (!(event?.target as HTMLElement)?.closest('div.info')) {
    isActive.value = !isActive.value
  }
}

defineProps<{ project?: ProjectType }>()
</script>

<template>
  <div
    v-if="project"
    class="relative overflow-hidden transition-all border border-black-tr wrapper"
    :class="[isActive ? 'grayscale-0 before:opacity-100 before:z-10' : 'grayscale']"
    @touchend="onTouchEnd"
    @mouseover="() => !isTouchable && (isActive = true)"
    @mouseleave="() => !isTouchable && (isActive = false)"
  >
    <div v-if="project.image" class="relative">
      <nuxt-img
        class="h-full w-full object-cover object-top"
        :src="sanityImageBuilder(project.image).width(384).height(218).url()"
        :alt="project.title"
        format="webp"
        width="384"
        height="218"
      />
    </div>
    <div
      class="info w-4/5 lg:block transition-all absolute left-0 right-0 bg-white mx-auto shadow-light z-20 p-4 overflow-auto"
      :class="[isActive ? 'top-[20px]' : 'top-full']"
    >
      <div v-if="project.title" class="font-bold">{{ project.title }}</div>
      <div v-if="project.role" class="text-text-basic italic mb-2">
        {{ project.role }}
      </div>
      <SanityContent :blocks="project.description" />
      <ul
        v-if="project.perks?.length"
        class="mt-3 flex flex-wrap content-start items-center gap-2 text-xs"
      >
        <li
          v-for="(p, i) in project.perks"
          :key="i + p._id"
          class="rounded-md border border-overlay bg-heading px-1 py-0.5"
        >
          {{ p.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="css">
.wrapper:before {
  @apply content-[''] block w-full h-full absolute -z-10 opacity-100 transition-all left-0 top-0 bg-black-tr;
}
.info {
  max-height: calc(100% - 40px);
}
</style>
