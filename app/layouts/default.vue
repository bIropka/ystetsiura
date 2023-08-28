<script setup lang="ts">
import { HeaderVue, NavigationVue, ContentVue } from '~/components/layout'
import { getPersonalData } from '~/api/queries'
import sanityImageBuilder from '~/api/sanity-image-builder'

const { data } = useAsyncData('personal-data', getPersonalData)
</script>

<template>
  <div v-if="data" class="flex min-h-screen min-w-[320px] flex-col items-stretch">
    <div v-if="data.headerImage" class="hidden w-full md:block md:h-[15vh]">
      <nuxt-img
        class="block h-full w-full object-cover"
        :src="sanityImageBuilder(data.headerImage).width(1440).height(195).url()"
        alt="Yegor Stetsiura personal website"
        format="webp"
        width="1440"
        height="195"
      />
    </div>
    <div class="mx-auto flex w-full max-w-5xl shrink-0 grow flex-col md:h-[85vh] md:gap-8 md:pb-8">
      <HeaderVue :content="data" />
      <div class="flex w-full grow overflow-auto md:gap-8">
        <NavigationVue class="hidden w-36 shrink-0 md:block" />
        <ContentVue class="h-full grow">
          <slot />
        </ContentVue>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css"></style>
