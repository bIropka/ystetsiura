<script setup lang="ts">
import { HeaderMobile, HeaderDesktop, FooterVue } from '~/components/layout'
import { getPersonalData } from '~/api/queries'
import sanityImageBuilder from '~/api/sanity-image-builder'
import GridVue from '~/components/layout/GridVue.vue'

const { data } = useAsyncData('personal-data', getPersonalData)

const name = computed(() => `${data.value?.firstName} ${data.value?.lastName}`)

onMounted(() => {
  console.log('personal-data', data.value)
})
</script>

<template>
  <div v-if="data" class="relative min-h-screen w-full min-w-[320px]">
    <HeaderMobile class="3xl:hidden block" :content="data" />
    <HeaderDesktop class="3xl:flex hidden" :content="data" />
    <main class="3xl:inset-x-0 3xl:inset-y-16 absolute inset-y-0 top-12 w-full overflow-hidden">
      <GridVue classes="flex">
        <div class="3xl:block w-photo relative hidden shrink-0">
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
      </GridVue>
    </main>
    <FooterVue :list="data.socialList" :name="name" />
  </div>
</template>

<style scoped lang="css"></style>
