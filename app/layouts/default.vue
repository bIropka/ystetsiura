<script setup lang="ts">
import { HeaderMobile, HeaderDesktop, FooterVue } from '~/components/layout'
import { getPersonalData } from '~/api/queries'
import sanityImageBuilder from '~/api/sanity-image-builder'

const { data } = useAsyncData('personal-data', getPersonalData)

const name = computed(() => `${data.value?.firstName} ${data.value?.lastName}`)

onMounted(() => {
  console.log('personal-data', data.value)
})
</script>

<template>
  <div v-if="data" class="relative min-h-screen w-full min-w-[320px]">
    <HeaderMobile class="hidden middle:block" :content="data" />
    <HeaderDesktop class="block middle:hidden" :content="data" />
    <main class="absolute inset-x-0 inset-y-16 block overflow-hidden small:inset-y-0 small:top-12">
      <div class="mx-auto flex h-full w-full max-w-full-hd px-8 small:px-0">
        <div
          class="relative w-photo-large shrink-0 large:w-photo-medium tablet:w-photo-small middle:hidden"
        >
          <nuxt-img
            class="h-full w-full object-cover object-center"
            :src="sanityImageBuilder(data.image).width(960).height(1280).url()"
            :alt="name"
            format="webp"
            width="960"
            height="1280"
          />
        </div>
        <div class="grow overflow-auto bg-surface-board px-12 py-24 small:px-8">
          <slot />
        </div>
      </div>
    </main>
    <FooterVue :list="data.socialList" :name="name" />
  </div>
</template>

<style scoped lang="css"></style>
