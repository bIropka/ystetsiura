<script setup lang="ts">
import { HeaderVue, NavigationVue, ContentVue } from '~/components/layout'
</script>

<template>
  <div class="flex flex-col min-h-screen items-stretch">
    <div class="w-full h-[25vh]">
      <nuxt-img
        class="block w-full h-full object-cover"
        src="/images/imageBg.png"
        alt="Yegor Stetsiura personal website"
        format="webp"
        width="1440"
        height="316"
      />
    </div>
    <div class="grid grid-cols-6 w-full max-w-5xl mx-auto gap-8 grow grid-rows-default pb-8">
      <HeaderVue />
      <NavigationVue />
      <ContentVue>
        <slot />
      </ContentVue>
    </div>
  </div>
</template>

<style scoped lang="css"></style>
