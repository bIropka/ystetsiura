<script setup lang="ts">
import { HeaderMobile, HeaderDesktop, ContentVue, FooterVue } from '~/components/layout'
import { getPersonalData } from '~/api/queries'

const { data } = useAsyncData('personal-data', getPersonalData)

onMounted(() => {
  console.log(data.value)
})
</script>

<template>
  <div v-if="data" class="relative min-h-screen w-full min-w-[320px]">
    <HeaderMobile class="hidden middle:block" :content="data" />
    <HeaderDesktop class="flex middle:hidden" :content="data" />
    <ContentVue :image="data.image" :name="`${data.firstName} ${data.lastName}`" />
    <FooterVue />
  </div>
</template>

<style scoped lang="css"></style>
