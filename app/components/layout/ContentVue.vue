<script setup lang="ts">
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import sanityImageBuilder from '~/api/sanity-image-builder'

defineProps<{
  image: SanityImageSource
  name: string
}>()
</script>

<template>
  <main class="absolute inset-x-0 inset-y-16 block overflow-hidden middle:hidden">
    <div class="mx-auto flex h-full w-full max-w-full-hd px-8">
      <div class="tablet:w-photo-small large:w-photo-medium w-photo-large relative shrink-0">
        <nuxt-img
          class="h-full w-full object-cover object-center"
          :src="sanityImageBuilder(image).width(960).height(1280).url()"
          :alt="name"
          format="webp"
          width="960"
          height="1280"
        />
      </div>
      <div class="grow-1">
        <slot></slot>
      </div>
    </div>
  </main>
</template>

<style scoped lang="css"></style>
