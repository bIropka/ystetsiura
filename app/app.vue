<script setup lang="ts">
import { useStore } from '~/store'

const { init } = useStore()
init()
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
