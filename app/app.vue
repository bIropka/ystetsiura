<script setup lang="ts">
import {
  useAboutMePageStore,
  useBlogPageStore,
  usePersonalDataStore,
  usePortfolioPageStore,
  useServicesPageStore,
} from '~/store'

usePersonalDataStore()
useAboutMePageStore()
usePortfolioPageStore()
useServicesPageStore()
useBlogPageStore()
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
