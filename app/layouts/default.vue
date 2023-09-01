<script setup lang="ts">
import { HeaderMobile, HeaderDesktop, ContentVue, FooterVue } from '~/components/layout'
import { getPersonalData } from '~/api/queries'

const { data } = useAsyncData('personal-data', getPersonalData)

onMounted(() => {
  console.log(data.value)
})
</script>

<template>
  <div v-if="data" class="relative min-h-[100vh] w-full min-w-[320px]">
    <HeaderMobile :content="data" />
    <HeaderDesktop :content="data" />
    <ContentVue />
    <FooterVue />
  </div>
</template>

<style scoped lang="css"></style>
