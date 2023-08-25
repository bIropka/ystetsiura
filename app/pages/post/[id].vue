<script setup lang="ts">
import { createError } from 'h3'
import { getPostData } from '~/api/queries'

const route = useRoute()
const { data } = useAsyncData(`post-${route.params.id}`, () =>
  getPostData(route.params.id as string)
)

if (!data.value) {
  showError(
    createError({
      statusCode: 404,
      statusMessage: 'Post Not Found',
    })
  )
}
</script>

<template>
  <article v-if="data">
    <h1 v-if="data.title" class="text-3xl text-heading font-pbold font-bold text-center">
      {{ data.title }}
    </h1>
    <p v-if="data.description" class="text-center my-4">{{ data.description }}</p>
    <SanityContent v-if="data.body" :blocks="data.body" />
  </article>
</template>

<style scoped lang="css"></style>
