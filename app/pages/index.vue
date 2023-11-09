<script setup lang="ts">
import { Typed, type TypedOptions } from '@duskmoon/vue3-typed-js'
import CustomHead from '~/components/layout/CustomHead.vue'
import { useStore } from '~/store'

const { personal: data } = useStore()

const options = computed<TypedOptions>(() => ({
  strings: data?.position,
  loop: true,
  typeSpeed: 75,
}))
</script>

<template>
  <div v-if="data" class="flex h-full w-full flex-col items-start justify-center">
    <CustomHead :title="''" />
    <h3 v-if="data.firstName && data.lastName" class="name text-4xl font-bold uppercase">
      {{ data.firstName }} {{ data.lastName }}
    </h3>
    <div class="line my-6 inline-block h-1 w-20 bg-text-heading"></div>
    <Typed v-if="options.strings" :options="options">
      <span class="mr-3 text-xl text-text-basic md:text-2xl">Professional</span>
      <span class="typing text-xl font-semibold text-black md:text-2xl"></span>
    </Typed>
  </div>
</template>

<style scoped lang="css"></style>
