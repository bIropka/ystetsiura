<script setup lang="ts">
import { PageTitle } from '~/components/common'
import CustomHead from '~/components/layout/CustomHead.vue'
import { useBlogPageStore } from '~/store'

const { data } = useBlogPageStore()
</script>

<template>
  <div v-if="data">
    <CustomHead :title="`${data.title} - ` ?? ''" />
    <PageTitle :text="data.title" />
  </div>
</template>

<style scoped lang="css"></style>
