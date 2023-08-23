<script setup lang="ts">
import { PostType } from '~/types'

defineProps<{ post?: PostType }>()
</script>

<template>
  <div v-if="post">
    <div v-if="post.postDate">{{ post.postDate }}</div>
  </div>
</template>

<style scoped lang="css"></style>
