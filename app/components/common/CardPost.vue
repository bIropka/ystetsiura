<script setup lang="ts">
import { PostType } from '~/types'
import sanityImageBuilder from '~/api/sanity-image-builder'

defineProps<{ post?: PostType }>()
</script>

<template>
  <div v-if="post" class="relative bg-overlay rounded-xl overflow-hidden">
    <div
      v-if="post.publishedAt"
      class="rounded-tl-xl rounded-br-xl bg-orange absolute p-2 text-xl text-white font-pbold font-bold z-[2]"
    >
      <span>{{ new Date(post.publishedAt).getFullYear() }}</span>
    </div>
    <div
      v-if="post.mainImage"
      class="relative before:opacity-10 before:rounded-t-xl before:z-[1] before:content-[''] before:block before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:bg-dark"
    >
      <nuxt-img
        class="w-full h-full object-cover object-top"
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
        class="inline-block text-heading text-xl font-bold font-pbold hover:underline mb-3"
      >
        <NuxtLink :to="`/post/${post.slug.current}`">{{ post.title }}</NuxtLink>
      </h3>
      <p v-if="post.description">{{ post.description }}</p>
    </div>
  </div>
</template>

<style scoped lang="css"></style>
