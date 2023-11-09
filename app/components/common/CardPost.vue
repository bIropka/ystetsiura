<script setup lang="ts">
import { PostType } from '~/types'
import sanityImageBuilder from '~/api/sanity-image-builder'

defineProps<{ post?: PostType }>()
</script>

<template>
  <div v-if="post" class="relative overflow-hidden rounded-xl bg-overlay">
    <div
      v-if="post.publishedAt"
      class="font-pbold absolute z-[2] rounded-br-xl rounded-tl-xl bg-orange p-2 text-xl font-bold text-white"
    >
      <span>{{ new Date(post.publishedAt).getFullYear() }}</span>
    </div>
    <div
      v-if="post.mainImage"
      class="relative before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-[1] before:block before:rounded-t-xl before:bg-dark before:opacity-10 before:content-['']"
    >
      <nuxt-img
        class="h-full w-full object-cover object-top"
        :src="sanityImageBuilder(post.mainImage).width(384).height(218).url()"
        :alt="post.title"
        format="webp"
        width="384"
        height="218"
      />
    </div>
    <div class="p-6">
      <h3
        v-if="post.title"
        class="font-pbold mb-3 inline-block text-xl font-bold text-heading hover:underline"
      >
        <NuxtLink :to="`/post/${post.slug.current}`">{{ post.title }}</NuxtLink>
      </h3>
      <p v-if="post.description">{{ post.description }}</p>
    </div>
  </div>
</template>

<style scoped lang="css"></style>
