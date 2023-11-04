<script setup lang="ts">
import { HeaderMobile, HeaderDesktop, FooterVue } from '~/components/layout'
import sanityImageBuilder from '~/api/sanity-image-builder'
import { usePersonalDataStore } from '~/store'

const { data } = usePersonalDataStore()
const name = computed(() => `${data?.firstName} ${data?.lastName}`)
</script>

<template>
  <div v-if="data" class="relative min-h-screen w-full min-w-[320px]">
    <HeaderMobile class="block 3xl:hidden" :content="data" />
    <HeaderDesktop class="hidden 3xl:flex" :content="data" />
    <main class="absolute inset-y-0 top-12 w-full overflow-hidden 3xl:inset-x-0 3xl:inset-y-16">
      <div class="mx-auto w-full h-full flex max-w-ultra-full-hd px-0 3xl:px-16">
        <div class="relative hidden w-photo shrink-0 3xl:block">
          <nuxt-img
            class="h-full w-full object-cover object-center"
            :src="sanityImageBuilder(data.image).width(960).height(1280).url()"
            :alt="name"
            format="webp"
            width="960"
            height="1280"
          />
        </div>
        <div class="grow overflow-auto bg-surface-board px-8 py-16 sm:px-24 sm:py-24">
          <slot />
        </div>
      </div>
    </main>
    <FooterVue :list="data.socialList" :name="name" />
  </div>
</template>

<style scoped lang="css"></style>
