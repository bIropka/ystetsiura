<script setup lang="ts">
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import sanityImageBuilder from '~/api/sanity-image-builder'

defineProps<{
  image: SanityImageSource
  name: string
}>()
</script>

<template>
  <main
    class="absolute inset-[70px] block overflow-hidden middle:inset-x-0 middle:bottom-0 middle:top-[55px] middle:hidden"
  >
    <div class="absolute bottom-0 left-0 top-0 z-[15] w-[40%]">
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-img-url="assets/img/about/1.jpg"
      >
        <nuxt-img
          class="h-full w-full object-cover object-center"
          :src="sanityImageBuilder(image).width(960).height(1280).url()"
          :alt="name"
          format="webp"
          width="960"
          height="1280"
        />
      </div>
    </div>
    <div class="absolute bottom-0 right-0 top-0 w-[60%]">
      <slot></slot>
    </div>
  </main>
</template>

<style scoped lang="css"></style>
