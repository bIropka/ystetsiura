<script setup lang="ts">
import { PersonalDataType } from '~/types'
import { NavigationList } from '~/components/layout'

defineProps<{
  content: PersonalDataType
}>()

const router = useRouter()
router.afterEach(() => {
  // insert menu closing here
})
</script>

<template>
  <header class="fixed left-0 right-0 top-0 z-10 h-16 w-full bg-white">
    <div
      class="mx-auto flex max-w-ultra-full-hd w-full h-full items-center justify-between px-0 3xl:px-16"
    >
      <NuxtLink
        class="text font-poppins text-2xl font-extrabold uppercase tracking-widest text-black no-underline"
        to="/"
      >
        <span class="relative top-0.5">{{ content.logoText ?? 'logotype' }}</span>
      </NuxtLink>
      <NavigationList :links="content.navs" type="desktop" />
    </div>
  </header>
</template>

<style scoped lang="css"></style>
