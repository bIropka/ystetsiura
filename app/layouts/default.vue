<script setup lang="ts">
import { HeaderMobile, HeaderDesktop, ContentVue, FooterVue } from '~/components/layout'
import { getPersonalData } from '~/api/queries'

const { data } = useAsyncData('personal-data', getPersonalData)

const name = computed(() => `${data.value?.firstName} ${data.value?.lastName}`)

onMounted(() => {
  console.log(data.value)
})
</script>

<template>
  <div v-if="data" class="relative min-h-screen w-full min-w-[320px]">
    <HeaderMobile class="hidden middle:block" :content="data" />
    <HeaderDesktop class="block middle:hidden" :content="data" />
    <ContentVue :image="data.image" :name="name" />
    <FooterVue :list="data.socialList" :name="name" />
  </div>
</template>

<style scoped lang="css"></style>
